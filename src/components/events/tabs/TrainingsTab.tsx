import React, { useState } from "react";
import { Card } from "../../ui/card";
import { MapPin } from "lucide-react";
import { EventType } from "../../../types/EventType";
import { useTranslation } from "../../../hooks/useTranslation";
import eventsData from "../../../data/events.json";
import EventDialog from "../EventDialog";

const TrainingsTab: React.FC = () => {
  const { translations: t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const events: EventType[] = eventsData.map((event: any) => ({
    ...event,
    id: event.id,
    title: (t.trainingEvents as any)[String(event.id)]?.title || event.title,
    date: (t.trainingEvents as any)[String(event.id)]?.date || event.date,
    location: event.location,
    trainer: event.trainer,
    image: event.image,
    description:
      (t.trainingEvents as any)[String(event.id)]?.description ||
      event.description,
  }));

  const handleEventSelect = (event: EventType) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <Card
            key={event.id}
            className="relative overflow-hidden bg-gray-900/40 backdrop-blur-xl border-0 rounded-xl transition-all duration-300 group cursor-pointer h-[420px]"
            onClick={() => handleEventSelect(event)}
          >
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-purple-500/20 pointer-events-none z-20" />

            <div className="absolute inset-0 w-full h-full">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/50 to-gray-900/00" />
            </div>

            <div className="absolute top-4 right-4 z-30 bg-purple-900/80 backdrop-blur-md text-purple-100 text-xs font-medium px-3 py-1 rounded-full border border-purple-700/50 shadow-lg shadow-purple-900/20">
              {event.date}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 z-30">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-sm font-display">
                  {event.title}
                </h3>

                <div className="flex items-center text-gray-200 font-medium text-sm mb-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>

                <div className="pt-2 border-t border-purple-500/20 flex items-center text-sm">
                  <span className="text-purple-300">{t.trainings.trainer}</span>
                  <span className="ml-2 text-gray-200 font-medium">
                    {event.trainer}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <EventDialog
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        event={selectedEvent}
      />
    </>
  );
};

export default TrainingsTab;
