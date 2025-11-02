import { motion } from "framer-motion";
import { EventType } from "../../types/EventType";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { CalendarDays, MapPin, Users, X } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

interface EventDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  event: EventType | null;
}

export default function EventDialog({
  isOpen,
  onOpenChange,
  event,
}: EventDialogProps) {
  const { translations: t } = useTranslation();

  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">
        {t.eventDialog.eventDetails}
      </DialogTitle>
      <DialogDescription className="sr-only">
        {t.eventDialog.dialogDescription.replace("{eventTitle}", event.title)}
      </DialogDescription>
      <DialogContent className="bg-gray-900/90 backdrop-blur-xl border-0 rounded-xl p-0 overflow-hidden w-[95vw] max-w-md md:max-w-2xl max-h-[90vh] flex flex-col">
        <div className="absolute inset-0 rounded-xl z-0">
          <div className="absolute inset-0 rounded-xl before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-purple-500/30 before:via-purple-500/15 before:to-transparent before:pointer-events-none" />

          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-600/15 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-600/15 rounded-full blur-[70px] animate-pulse-slow" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex flex-col h-full"
        >
          <div className="absolute top-3 right-3 z-50">
            <Button
              variant="ghost"
              className="rounded-full h-8 w-8 p-0 bg-gray-800/80 hover:bg-gray-700 border border-gray-700 flex items-center justify-center"
              onClick={() => onOpenChange(false)}
              aria-label="Close dialog"
            >
              <X className="h-4 w-4 text-gray-400" />
            </Button>
          </div>

          <div className="relative h-42 md:h-60 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/100" />
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
            )}
          </div>

          <h2 className="pl-4 md:pl-6  pt-2 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-lg font-display">
            {event.title}
          </h2>

          <div className="px-4 py-2 pb-4 md:px-6 overflow-y-auto flex-grow">
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 flex-1">
                <div className="bg-purple-500/20 p-2 rounded-md flex-shrink-0">
                  <CalendarDays className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-400">
                    {t.eventDialog.date}
                  </div>
                  <div className="text-sm md:text-base text-gray-200 truncate">
                    {event.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 flex-1">
                <div className="bg-blue-500/20 p-2 rounded-md flex-shrink-0">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-400">
                    {t.eventDialog.location}
                  </div>
                  <div className="text-sm md:text-base text-gray-200 truncate">
                    {event.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 flex-1">
                <div className="bg-indigo-500/20 p-2 rounded-md flex-shrink-0">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-indigo-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-400">
                    {t.eventDialog.trainer}
                  </div>
                  <div className="text-sm md:text-base text-gray-200 truncate">
                    {event.trainer}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                {t.eventDialog.eventDescription}
              </h3>
              <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-4">
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
