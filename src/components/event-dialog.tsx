import { motion } from "framer-motion";
import { EventType } from "./event-tabs";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { CalendarDays, MapPin, Users, Clock, X } from "lucide-react";

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
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900/80 backdrop-blur-xl border-0 rounded-xl p-0 overflow-hidden max-w-2xl">
        {/* Modal background effects */}
        <div className="absolute inset-0 rounded-xl z-0">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-xl before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-purple-500/40 before:via-purple-500/20 before:to-transparent before:pointer-events-none" />

          {/* Inner glow effects */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-600/20 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-600/20 rounded-full blur-[70px] animate-pulse-slow" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {/* Close button */}
          <div className="absolute top-4 right-4 z-50">
            <Button
              variant="ghost"
              className="rounded-full h-8 w-8 p-0 bg-gray-800/80 hover:bg-gray-700 border border-gray-700"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4 text-gray-400" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Event image header */}
          <div className="relative h-48 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/100" />
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover opacity-60"
              />
            )}

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                {event.title}
              </h2>
            </div>
          </div>

          <div className="p-6">
            {/* Event details with icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                <div className="bg-purple-500/20 p-2 rounded-md">
                  <CalendarDays className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Date</div>
                  <div className="text-gray-200">{event.date}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="text-gray-200">{event.location}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                <div className="bg-indigo-500/20 p-2 rounded-md">
                  <Users className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Trainer</div>
                  <div className="text-gray-200">{event.trainer}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                <div className="bg-purple-500/20 p-2 rounded-md">
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Duration</div>
                  <div className="text-gray-200">2 hours</div>
                </div>
              </div>
            </div>

            {/* Event description */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Event Description
              </h3>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>{event.description}</p>
              </div>

            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
