import moment from "moment";

export interface IElements {
  date: string;
  outOfMonth: boolean;
  children: any[];
};

export const monthsFromYear = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
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
 * @param param0 
 * @returns 
 */
  static getCalendarDays({ dateSelected, maxSize }: {
    dateSelected: {
      month: number;
      year: number
    },
    maxSize: number,
  }) {
    let response = [] as IElements[];

    let startDay = moment([dateSelected.year, dateSelected.month - 1, 1]);
    startDay.subtract(startDay.day(), 'd');

    for (let i = 0; i < maxSize; i++) {
      response.push({
        date: startDay.toISOString().split('T')[0],
        outOfMonth: (startDay.month() + 1) !== dateSelected.month,
        children: [],
      });

      startDay.add(1, 'd');
    }
    return response;
  }
}