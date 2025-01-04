import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Book Your Cake
      </h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <CalendarIcon className="mr-2 h-5 w-5 text-cake-burgundy" />
          <span className="font-medium">Select a Date</span>
        </div>
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <p className="mt-4 text-sm text-gray-600">
          * Please note that orders require at least 48 hours notice
        </p>
      </div>
    </div>
  );
};

export default Calendar;