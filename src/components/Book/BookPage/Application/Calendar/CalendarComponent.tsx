import Calendar from "react-calendar";
import useIsMobile from "@/hooks/useIsMobile.tsx";
import CalendarStyles from "@/styles/CalenderStyles.ts";
import { useAtom } from "jotai";
import { monthDataAtom } from "@/store/Time.ts";
import { beforeToday, isSameDate, transDate } from "@/utils/dateUtils.ts";
import { Value } from "react-calendar/src/shared/types.js";
interface CalendarComponentProps {
  date: Date | null;
  onDateChange: (value: Value) => void;
}
const CalendarComponent: React.FC<CalendarComponentProps> = ({
  date,
  onDateChange,
}) => {
  const today = new Date();
  const [monthData] = useAtom(monthDataAtom);
  const isMobile = useIsMobile();
  const unvailableTiles = (date: Date): boolean => {
    if (monthData) {
      for (const month of monthData) {
        if (isSameDate(new Date(transDate(month.date)), date)) {
          if (!month.isActive) {
            return true;
          }
        }
      }
    }
    return (
      date.getMonth() - 1 > today.getMonth() ||
      date.getMonth() < today.getMonth() ||
      date.getFullYear() !== today.getFullYear()
    );
  };
  return (
    <>
      <CalendarStyles isMobile={isMobile}>
        <Calendar
          calendarType="gregory"
          view="month"
          value={date}
          onChange={onDateChange}
          prev2Label={null}
          next2Label={null}
          formatDay={(_locale, date) => date.getDate().toString()}
          tileDisabled={({ date }: { date: Date }) =>
            beforeToday(date) || unvailableTiles(date)
          }
        />
      </CalendarStyles>
    </>
  );
};
export default CalendarComponent;
