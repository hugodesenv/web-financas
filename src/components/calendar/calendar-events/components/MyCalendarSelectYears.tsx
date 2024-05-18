import MySelect from "@/components/select/MySelect";
import { DateUtils } from "@/lib/date.utils";
const yearBase = parseInt(DateUtils.momentBR().format('YYYY')) - 100;

/**
 * Componente Select, -100 + 50 anos.
 */
export default function MyCalendarSelectYears({ onChange, yearSelected }: {
  onChange: (event: any) => void;
  yearSelected: number;
}) {
  const months = Array.from({ length: 150 }, (_, i) => yearBase + i);
  return (
    <MySelect value={yearSelected} onChange={onChange}>
      {
        months.map((year: number) => (
          <option key={year}>{year}</option>
        ))
      }
    </MySelect>
  );
}
