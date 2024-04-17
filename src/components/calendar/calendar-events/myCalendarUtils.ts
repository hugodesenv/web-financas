import moment from "moment";

export interface IElements {
  date: string;
  outOfMonth: boolean;
  children: any[];
}

interface IDayOfWeek {
  label: string;
}

export const dayOfWeekTitle: IDayOfWeek[] = [
  { label: "Dom" },
  { label: "Seg" },
  { label: "Ter" },
  { label: "Qua" },
  { label: "Qui" },
  { label: "Sex" },
  { label: "Sab" },
];

export interface IEventsDay {
  id: string;
  title: string;
  backgroundColor?: string;
  date: string;
  data?: any;
}

export const monthsFromYear = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export class MyCalendarUtils {
  /**
   * O primeiro passo é setarmos o primeiro dia do mês e ano.
   * Com isso, devemos saber o seguinte:
   * O dia 1 desse mês, é qual index do dia da semana?
   * Exemplo: 0 Segunda, 1 Terça, 2 Quarta etc.
   * Então, subtraimos esse index para também mostrar no calendario os dias anteriores
   * a este mês.
   * Eu defino na propriedade "outOfMonth" se o dia que está mostrando é do mês que o usuario selecionou,
   * as vezes ele quer Abril de 2024 e o primeiro dia é dia 31 de Março... Daí com esses dias foras,
   * eu consigo colorir com outra cor, outra fazer alguma outra regra.
   * Com isso, eu retorno um array de indices, e cada indice, os dias daquela semana.
   * @param param0
   * @returns
   */
  static getCalendarDays({
    dateSelected,
    maxSize,
  }: {
    dateSelected: { month: number; year: number };
    maxSize: number;
  }) {
    let dayOfWeek = [] as IElements[];
    let weeksWithDay = [];

    let firstDayOfCalendar = moment([
      dateSelected.year,
      dateSelected.month - 1,
      1,
    ]);
    firstDayOfCalendar.subtract(firstDayOfCalendar.day(), "d");

    for (let i = 1; i <= maxSize; i++) {
      const dayOutTheCurrentMonth =
        firstDayOfCalendar.month() + 1 != dateSelected.month;
      dayOfWeek.push({
        date: firstDayOfCalendar.toISOString().split("T")[0],
        outOfMonth: dayOutTheCurrentMonth,
        children: [],
      });

      if (i % 7 == 0) {
        weeksWithDay.push(dayOfWeek);
        dayOfWeek = [];
      }

      firstDayOfCalendar.add(1, "d");
    }

    return weeksWithDay;
  }
}
