import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { Resend } from "resend";
import kitFiles from "@/data/kit-files.json";
import type { Package } from "@/data/packages";

// Brand colors, matching src/routes/__root.tsx / the generated kit PDFs.
const BLU_NOTTE = rgb(0x1a / 255, 0x1a / 255, 0x2e / 255);
const ROSA = rgb(0xe9 / 255, 0x1e / 255, 0x8c / 255);
const GRIGIO = rgb(0x37 / 255, 0x47 / 255, 0x4f / 255);

function resendClient() {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY non impostata. In locale: .env. Su Netlify: Environment variables.",
    );
  }
  return new Resend(apiKey);
}

function fromAddress(): string {
  // Overridable so we can test against Resend's own sandbox sender before
  // missionefesta.it is verified as a sending domain.
  return process.env["EMAIL_FROM"] ?? "MissioneFesta <ordini@missionefesta.it>";
}

/**
 * Builds a one-page "thank you" PDF with a personal message and the direct
 * download link(s) for the purchased kit(s). We deliver via a link inside this
 * PDF (rather than embedding the kit PDFs themselves) so a 16-kit bundle sends
 * exactly as reliably as a single kit — no email-attachment size limit to
 * worry about either way.
 */
const PAGE_SIZE: [number, number] = [595.28, 841.89]; // A4
const MARGIN_BOTTOM = 60;

async function buildCoverPdf(params: { origin: string; kits: Package[] }): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);

  let page = doc.addPage(PAGE_SIZE);
  const { width, height } = page.getSize();
  page.drawRectangle({ x: 0, y: height - 14, width, height: 14, color: ROSA });
  let y = height - 100;

  const newPage = () => {
    page = doc.addPage(PAGE_SIZE);
    page.drawRectangle({ x: 0, y: height - 14, width, height: 14, color: ROSA });
    y = height - 80;
  };

  /** Starts a new page first if the next block of `needed` height wouldn't fit. */
  const ensureSpace = (needed: number) => {
    if (y - needed < MARGIN_BOTTOM) newPage();
  };

  page.drawText("Grazie per il tuo acquisto!", {
    x: 50,
    y,
    size: 26,
    font,
    color: BLU_NOTTE,
  });

  y -= 40;
  page.drawText("Qui trovi i link per scaricare i tuoi PDF — salvali sul telefono", {
    x: 50,
    y,
    size: 12,
    font: fontRegular,
    color: GRIGIO,
  });
  y -= 16;
  page.drawText("o sul computer e stampali quando vuoi.", {
    x: 50,
    y,
    size: 12,
    font: fontRegular,
    color: GRIGIO,
  });

  y -= 50;
  ensureSpace(14);
  page.drawText(
    params.kits.length === 1 ? "Il tuo kit:" : `I tuoi ${params.kits.length} kit:`,
    { x: 50, y, size: 14, font, color: BLU_NOTTE },
  );

  for (const kit of params.kits) {
    ensureSpace(44);
    y -= 28;
    const token = (kitFiles as Record<string, string>)[kit.slug];
    const url = `${params.origin}/downloads/${token}.pdf`;
    page.drawText(`${kit.emoji}  ${kit.title}`, {
      x: 60,
      y,
      size: 12,
      font,
      color: BLU_NOTTE,
    });
    y -= 16;
    page.drawText(url, {
      x: 70,
      y,
      size: 10,
      font: fontRegular,
      color: rgb(0.1, 0.3, 0.7),
    });
  }

  ensureSpace(68);
  y -= 50;
  page.drawText("Buona caccia al tesoro!", { x: 50, y, size: 12, font, color: BLU_NOTTE });
  y -= 18;
  page.drawText("Il team di MissioneFesta.it", {
    x: 50,
    y,
    size: 10,
    font: fontRegular,
    color: GRIGIO,
  });

  return doc.save();
}

export async function sendOrderEmail(params: {
  to: string;
  origin: string;
  offerName: string;
  kits: Package[];
}): Promise<void> {
  const pdfBytes = await buildCoverPdf({ origin: params.origin, kits: params.kits });

  const resend = resendClient();
  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: params.to,
    subject: `Il tuo acquisto MissioneFesta: ${params.offerName}`,
    html: `
      <p>Ciao!</p>
      <p>Grazie per aver acquistato <b>${params.offerName}</b> su MissioneFesta.it.</p>
      <p>In allegato trovi un PDF con i link per scaricare i tuoi kit.</p>
      <p>Buona caccia al tesoro! 🎉</p>
    `,
    attachments: [
      {
        filename: "MissioneFesta - i tuoi kit.pdf",
        content: Buffer.from(pdfBytes),
      },
    ],
  });

  if (error) {
    throw new Error(`Invio email fallito: ${error.message}`);
  }
}
