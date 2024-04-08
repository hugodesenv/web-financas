export class DateUtils {
  static getWeekIndex(pYear: number, pMonth: number, pDay: number) {
    const y = pYear.toString().padStart(4, '0');
    const m = pMonth.toString().padStart(2, '0');
    const d = pDay.toString().padStart(2, '0');

    const firstDay = new Date(`${y}-${m}-${d} 00:00:00`);
    
    return firstDay.getDay();
  }
}