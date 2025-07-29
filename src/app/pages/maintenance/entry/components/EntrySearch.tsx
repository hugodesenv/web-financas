import { TEntry } from '@/features/entry/entryTypes';
import { forwardRef, useImperativeHandle, useState } from 'react';
import EntrySearchTable from './EntrySearchTable';
import { useCaseEntry } from '@/features/entry/useCaseEntry';

const EntrySearch = forwardRef((props, ref) => {
  const [entries, setEntries] = useState([] as TEntry[]);
  const { findAllEntries } = useCaseEntry();

  useImperativeHandle(ref, function () {
    return {
      onSearch,
    }
  });

  async function onSearch() {
    const entries = await findAllEntries({ initial_issue_date: "", final_issue_date: "" });
    setEntries(entries);
  }

  return (
    <EntrySearchTable
      entries={entries}
      entryRemoved={(id) => setEntries(entries.filter((p) => p.id !== id))}
    />
  )
});

export default EntrySearch;