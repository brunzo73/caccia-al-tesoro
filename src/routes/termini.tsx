import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/TextPage";

export const Route = createFileRoute("/termini")({
  head: textHead("Termini e condizioni", "Termini e condizioni di vendita"),
  component: () => <TextPage title="Termini e condizioni" />,
});
