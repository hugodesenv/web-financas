import { TEntry } from '@/features/entry/entryTypes';
import { findAllEntryUseCase } from '@/features/entry/useCase/findAllEntryUseCase';
import { forwardRef, useImperativeHandle, useState } from 'react';
import EntrySearchTable from './EntrySearchTable';

const EntrySearch = forwardRef((props, ref) => {
  const [entries, setEntries] = useState([] as TEntry[]);

  useImperativeHandle(ref, function () {
    return {
      onSearch,
    }
  });

  async function onSearch() {
    const entries = await findAllEntryUseCase({ initial_issue_date: "", final_issue_date: "" });
    setEntries(entries);
  }

  return <EntrySearchTable entries={entries} />
});

export default EntrySearch;