/** #HUGO: Continuar. */

import { TEntry } from '@/features/entry/entryTypes';
import { findAllEntryUseCase } from '@/features/entry/useCase/findAllEntryUseCase';
import { forwardRef, useImperativeHandle, useState } from 'react';
import EntrySearchTable from './EntrySearchTable';
import { MyModalConfirm } from '@/components/modal/v2/MyModalConfirm';

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

  return <>
    <EntrySearchTable entries={entries} />
    <MyModalConfirm />
  </>
});

export default EntrySearch;