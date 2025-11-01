interface AboutProps {
  content: {
    title: string;
    paragraphs: string[];
  };
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
        {content.title}
      </h2>
      <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg text-justify">
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
