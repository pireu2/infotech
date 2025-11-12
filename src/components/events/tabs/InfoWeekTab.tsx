import React from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

const InfoWeekTab: React.FC = () => {
  const { translations: t } = useTranslation();

  const carouselImages = [
    "/public/images/carousel/InfoWeek1.jpg",
    "/public/images/carousel/InfoWeek2.jpg",
    "/public/images/carousel/InfoWeek3.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto text-gray-300 text-lg space-y-8">
      <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {t.infoweek.title}
      </h2>

      <p
        dangerouslySetInnerHTML={{ __html: t.infoweek.summary }}
        className="text-justify"
      />

      <div className="space-y-4">
        {t.infoweek.expandableContent.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
            className="text-justify"
          />
        ))}

        <h3
          className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display mt-6 mb-4"
          dangerouslySetInnerHTML={{
            __html: t.infoweek.expandableContent.benefits.title,
          }}
        />
        <ul className="list-disc pl-6 space-y-2">
          {t.infoweek.expandableContent.benefits.items.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className="text-justify"
            />
          ))}
        </ul>
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
              {carouselImages.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="p-4">
                    <div className="overflow-hidden rounded-2xl bg-gray-800 shadow-xl">
                      <img
                        src={src}
                        alt={`InfoWeek image ${i + 1}`}
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

        <p
          dangerouslySetInnerHTML={{
            __html: t.infoweek.expandableContent.conclusion,
          }}
          className="text-justify"
        />
      </div>
    </div>
  );
};

export default InfoWeekTab;
