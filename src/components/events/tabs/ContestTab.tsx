import React from "react";
import { useTranslation } from "../../../hooks/useTranslation";

const ContestTab: React.FC = () => {
  const { translations: t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
      <h2 className="text-3xl font-bold text-center text-purple-400">
        {t.contest.title}
      </h2>

      {t.contest.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className="text-justify"
        />
      ))}

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-purple-400">
          {t.contest.whyAttend.title}
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.contest.whyAttend.items.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className="text-justify"
            />
          ))}
        </ul>
      </div>

      <h3 className="text-xl font-bold text-center text-purple-400">
        {t.contest.conclusion}
      </h3>
    </div>
  );
};

export default ContestTab;
