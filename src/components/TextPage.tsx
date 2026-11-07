export function TextPage({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <div className="card-fun mt-5 space-y-3 p-5 text-muted-foreground">
        <p>Testo segnaposto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}

export const textHead = (title: string, description: string) => () => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  ],
});
