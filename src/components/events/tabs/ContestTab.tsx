import React from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

const ContestTab: React.FC = () => {
  const { translations: t } = useTranslation();

  const carouselImages = [
    "/public/images/carousel/ContestN1.jpg",
    "/public/images/carousel/ContestN2.jpg",
    "/public/images/carousel/ContestN3.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto text-gray-300 text-lg space-y-8">
      <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {t.contest.title}
      </h2>

      {t.contest.paragraphs.map((paragraph: string, index: number) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className="text-justify"
        />
      ))}

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
          {t.contest.whyAttend.title}
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.contest.whyAttend.items.map((item: string, index: number) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className="text-justify"
            />
          ))}
        </ul>
      </div>

      <div className="w-full py-8">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          autoScroll={true}
          autoScrollInterval={3000}
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent>
            {carouselImages.map((src: string, i: number) => (
              <CarouselItem key={i}>
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl bg-gray-800 shadow-xl">
                    <img
                      src={src}
                      alt={`Contest image ${i + 1}`}
                      className="w-full h-96 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
        {t.contest.conclusion}
      </h3>
    </div>
  );
};

export default ContestTab;
