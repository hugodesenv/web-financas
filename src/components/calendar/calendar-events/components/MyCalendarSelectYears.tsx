/**
 * Componente Select, -100 + 50 anos.
 */
export default function MyCalendarSelectYears({
  onChange,
  yearSelected,
}: {
  onChange: (event: any) => void;
  yearSelected: number;
}) {
  const fistYear = yearSelected - 100;
  const months = Array.from({ length: 150 }, (_, i) => fistYear + i);
  return (
    <select value={yearSelected} onChange={onChange}>
      {months.map((year: number) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
}
