import { useTranslation } from "../hooks/useTranslation";

export default function About() {
  const { translations: t } = useTranslation();

  return (
    <section id="about" className="py-10 px-4 md:px-8 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {t.about.title}
      </h2>
      <div className="max-w-6xl mx-auto space-y-6 text-gray-300 text-lg text-justify">
        {t.about.paragraphs.map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
