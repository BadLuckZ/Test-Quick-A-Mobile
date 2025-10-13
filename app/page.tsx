export default function Home() {
  const typoClasses = [
    "display-large-primary",
    "display-large-emphasized",
    "display-medium-primary",
    "display-medium-emphasized",
    "display-small-primary",
    "display-small-emphasized",

    "headline-large-primary",
    "headline-large-emphasized",
    "headline-medium-primary",
    "headline-medium-emphasized",
    "headline-small-primary",
    "headline-small-emphasized",

    "title-large-primary",
    "title-large-emphasized",
    "title-medium-primary",
    "title-medium-emphasized",
    "title-small-primary",
    "title-small-emphasized",

    "label-large-primary",
    "label-large-emphasized",
    "label-medium-primary",
    "label-medium-emphasized",
    "label-small-primary",
    "label-small-emphasized",

    "body-large-primary",
    "body-large-emphasized",
    "body-medium-primary",
    "body-medium-emphasized",
    "body-small-primary",
    "body-small-emphasized",
  ];

  const formatClassName = (className: string) => {
    return className
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-black p-8">
      <h1 className="text-3xl font-bold mb-6">Typography Preview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {typoClasses.map((typo) => (
          <div
            key={typo}
            className="p-4 border border-neutral-300 rounded-2xl bg-white shadow-sm"
          >
            <p className={typo}>{formatClassName(typo)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
