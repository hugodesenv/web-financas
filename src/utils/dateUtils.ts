import moment from 'moment';
import 'moment-timezone';

export class DateUtils {
  static momentBR = () => {
    const brTime = moment().tz('America/Sao_Paulo');
    return brTime;
  }
}