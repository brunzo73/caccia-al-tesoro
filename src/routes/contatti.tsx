import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/TextPage";

export const Route = createFileRoute("/contatti")({
  head: textHead("Contatti", "Come contattarci"),
  component: () => <TextPage title="Contatti" />,
});
