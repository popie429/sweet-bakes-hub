import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface TimeSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date | undefined;
}

export function TimeSelectionDialog({
  open,
  onOpenChange,
  selectedDate,
}: TimeSelectionDialogProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!selectedDate) return null;

  const isWeekend = [0, 6].includes(selectedDate.getDay());
  const timeSlots = isWeekend
    ? generateTimeSlots(9, 18) // 9 AM to 6 PM
    : generateTimeSlots(8, 20); // 8 AM to 8 PM

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBook = () => {
    if (selectedTime) {
      // Navigate to payment page (to be implemented)
      navigate("/payment");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <Tabs defaultValue="pickup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pickup">Pick Up</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
          </TabsList>

          <TabsContent value="pickup" className="mt-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">
                Select Pick Up Time for {format(selectedDate, "MMMM do, yyyy")}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={selectedTime === time ? "bg-cake-rose text-white" : ""}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="delivery" className="mt-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">
                Select Delivery Time for {format(selectedDate, "MMMM do, yyyy")}
              </h3>
              <p className="text-sm text-gray-600">
                Please note: Our delivery fee is calculated at $1 per minute of driving time.
                For example, if you are 15 minutes away, the delivery fee will be $15.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={selectedTime === time ? "bg-cake-rose text-white" : ""}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <div className="mt-6">
            <Button
              className="w-full bg-cake-rose hover:bg-cake-burgundy text-white"
              disabled={!selectedTime}
              onClick={handleBook}
            >
              BOOK
            </Button>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function generateTimeSlots(startHour: number, endHour: number): string[] {
  const slots: string[] = [];
  for (let hour = startHour; hour < endHour; hour++) {
    const hourStr = hour % 12 || 12;
    const period = hour < 12 ? "AM" : "PM";
    slots.push(`${hourStr}:00 ${period}`);
    slots.push(`${hourStr}:30 ${period}`);
  }
  return slots;
}