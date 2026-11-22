import { Link } from "@tanstack/react-router";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-2xl font-extrabold sm:text-3xl">{children}</h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>
);

export function CacciaAlTesoroInCasa() {
  return (
    <>
      <P>
        Fuori piove, oppure è inverno, oppure semplicemente il giardino non c'è: la caccia al
        tesoro in casa resta il modo più semplice per tenere impegnato un gruppo di bambini senza
        spostare un mobile e senza spendere nulla per un animatore. Il problema, di solito, non è
        l'idea — è capire <em>quanti</em> indizi servono, <em>dove</em> nasconderli e come evitare
        che il gioco finisca dopo cinque minuti o, al contrario, diventi troppo lungo e
        frustrante.
      </P>
      <P>
        Questa guida raccoglie quello che abbiamo imparato organizzando decine di cacce al tesoro
        per feste di compleanno, divise per età.
      </P>

      <H2>Quanti indizi servono, in base all'età</H2>
      <P>
        Non esiste un numero magico, ma una regola pratica che funziona quasi sempre: un indizio
        per ogni 2-3 anni di età media del gruppo, con un minimo di 4 e un massimo di 8.
      </P>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">3-4 anni:</strong> 4 indizi al massimo, molto
          visivi (un disegno, un colore, un oggetto da riconoscere) più che testuali — a
          quell'età non serve nemmeno che sappiano leggere, basta che un adulto legga ad alta
          voce.
        </li>
        <li>
          <strong className="text-foreground">5-7 anni:</strong> 5-6 indizi, con una piccola
          prova da superare prima di ogni indizio (un salto, una domanda, un disegno da
          completare) per allungare il gioco senza allungare i testi.
        </li>
        <li>
          <strong className="text-foreground">8-10 anni:</strong> 6-8 indizi, qui si possono
          introdurre codici semplici, piccoli calcoli o indovinelli — l'età in cui "voglio
          vincere io" inizia a contare, quindi un elemento di sfida vera aiuta.
        </li>
      </ul>
      <P>
        Il punto in comune a ogni età è il finale: un{" "}
        <strong className="text-foreground">tesoro vero</strong> da scoprire insieme, non solo un
        sacchetto di caramelle — è quello che i bambini racconteranno ai genitori all'uscita.
      </P>

      <H2>Dove nascondere gli indizi in casa</H2>
      <P>
        L'errore più comune è nascondere gli indizi in posti troppo ovvi (sopra il tavolo) o
        troppo difficili (dentro un cassetto chiuso a chiave, per davvero). Qualche nascondiglio
        che funziona sempre, testato su gruppi da 6 a 15 bambini:
      </P>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Sotto un cuscino del divano — il primo posto che un bambino controlla, perfetto per il primo indizio.</li>
        <li>Dentro una scarpa nell'ingresso — inaspettato ma sempre raggiungibile.</li>
        <li>Attaccato sotto una sedia con lo scotch — richiede di "pensare in basso", buon livello di difficoltà.</li>
        <li>Dentro il frigorifero (in un sacchetto, per igiene) — sorprende sempre ed è un classico che funziona.</li>
        <li>Arrotolato dentro un rotolo di carta igienica di scorta — perfetto per un bagno di casa.</li>
      </ul>
      <P>
        Un consiglio pratico: fotografa ogni nascondiglio <em>prima</em> che inizi la festa. Con
        dieci bambini che corrono, ti capiterà di dimenticare dove hai messo l'indizio numero 4 —
        e avere la foto ti salva in trenta secondi.
      </P>

      <H2>Gli errori che allungano (o rovinano) il gioco</H2>
      <P>
        <strong className="text-foreground">Indizi senza una storia.</strong> "Trova l'oggetto
        giallo" funziona una volta, poi i bambini si disinteressano. Un filo narrativo — un
        personaggio che ha rubato qualcosa, un mistero da risolvere — tiene l'attenzione molto
        più a lungo di un indizio isolato, anche se il meccanismo è identico.
      </P>
      <P>
        <strong className="text-foreground">Nessuna attività tra un indizio e l'altro.</strong>{" "}
        Se il gioco è solo "cammina, leggi, cammina, leggi", dura cinque minuti. Una piccola prova
        fisica o mentale prima di ogni indizio (anche solo "fate tutti insieme dieci salti")
        raddoppia la durata percepita senza bisogno di più indizi.
      </P>
      <P>
        <strong className="text-foreground">Un solo vincitore.</strong> Con un gruppo misto per
        età, una caccia al tesoro a squadre o a eliminazione lascia sempre qualcuno scontento.
        Funziona molto meglio un gioco cooperativo: tutti insieme verso lo stesso tesoro, nessuno
        perde, e alla fine ogni bambino riceve comunque un diploma o un piccolo premio.
      </P>

      <H2>Due domande che ci fanno spesso</H2>
      <P>
        <strong className="text-foreground">Quanto dura in media una caccia al tesoro in casa?</strong>{" "}
        Con 5-6 indizi e una prova tra uno e l'altro, tra 20 e 35 minuti — abbastanza per essere
        il momento centrale della festa senza far stancare i più piccoli.
      </P>
      <P>
        <strong className="text-foreground">Serve un adulto che "faccia l'animatore"?</strong>{" "}
        No, se la storia e gli indizi sono già scritti: basta che un adulto legga ad alta voce nei
        punti giusti. È esattamente il problema che i nostri kit PDF risolvono — la storia,
        le prove e gli indizi sono già pronti, tu stampi e nascondi.
      </P>

      <div className="card-fun mt-10 flex flex-col items-start gap-4 bg-accent/30 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-extrabold">
            Non hai tempo di scrivere indizi e storia da zero?
          </p>
          <p className="mt-1 text-muted-foreground">
            I nostri kit PDF includono già tutto: storia a capitoli, 6 prove, carte-indizio e
            diplomi finali, divisi per età dai 3 agli 11+ anni.
          </p>
        </div>
        <Link
          to="/"
          hash="pacchetti"
          className="btn shrink-0 bg-primary px-6 py-3 text-primary-foreground"
        >
          Scopri i pacchetti
        </Link>
      </div>
    </>
  );
}
