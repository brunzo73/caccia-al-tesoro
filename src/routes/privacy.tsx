import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/TextPage";

export const Route = createFileRoute("/privacy")({
  head: textHead("Privacy", "Informativa sulla privacy"),
  component: () => <TextPage title="Privacy" />,
});
