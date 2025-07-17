import dayjs from "dayjs";
import { EnEntryType, IBuildEntriesByPurpose, TEntry } from "./entryTypes";

export function getEntriesByIssueDate(
  entry: TEntry[],
  date: {
    month?: number,
    year?: number,
    day?: number,
    options?: {
      day?: {
        type: '<=' | '='
      }
    }
  }) {
  const data = entry.filter((x) => {
    const issueDate = dayjs(x.issue_date);

    let day_condition = true;

    // filtering "day" handling condition <= or =.
    if (date.options?.day && date.day) {
      const { type } = date.options.day;
      day_condition = type === '<=' ? issueDate.date() <= date.day! : issueDate.date() === date.day;
    }

    return (date.month ? issueDate.month() === (date.month - 1) : true)
      && (date.year ? issueDate.year() === date.year : true)
      && day_condition;
  });

  return data;
}

export function sumEntriesByPurpose(entries: TEntry[]): IBuildEntriesByPurpose {
  return entries.reduce<IBuildEntriesByPurpose>((prev, curr: TEntry) => {
    const purposeID = curr.purpose.id ?? 0;

    if (!prev[purposeID]) {
      prev[purposeID] = {
        id: purposeID,
        description: curr.purpose.description,
        receive: 0,
        pay: 0,
        balance: 0,
      };
    }

    switch (curr.type) {
      case EnEntryType.PAYABLE: {
        prev[purposeID].pay += curr.total;
        prev[purposeID].balance -= curr.total;
        break;
      }
      case EnEntryType.RECEIVABLE: {
        prev[purposeID].receive += curr.total;
        prev[purposeID].balance += curr.total;
        break;
      }
    }

    return prev;
  }, {});
}