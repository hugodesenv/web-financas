//Hugo.
import MyAlert from '@/components/alert/MyAlert';
import { useMyAlert } from '@/components/alert/hook';
import MyModalConfirmation from '@/components/modal/MyModalConfirmation/MyModalConfirmation';
import { IModalConfirmStep, useMyModalConfirmation } from '@/components/modal/MyModalConfirmation/hook';
import MyTable, { IMyTableAction, IMyTableWrapper } from '@/components/table/MyTable';
import { TPurpose } from '@/type/purposeTypes';
import { deletePurposeByID } from '@/use/purpose/purposeDeleteByIDUseCase';
import { findAllPurposeCase } from '@/use/purpose/purposeFindAllUseCae';
import { MESSAGES } from '@/utils/constantsUtils';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface IProps {
  onPurposeSelected: (purpose: TPurpose) => void;
}

const PurposeSearch = forwardRef((props: IProps, ref) => {
  useImperativeHandle(ref, function () {
    return {
      onSearch
    };
  });

  const [purposes, setPurposes] = useState<TPurpose[]>([]);
  const { alertState, setAlertState } = useMyAlert();
  const { isOpen, stepIndex, step, onConfirm, onCancel, onClose, prepareSteps } = useMyModalConfirmation({
    onSuccess: async () => await _deletePurpose(),
  });

  async function onSearch() {
    let { data } = await findAllPurposeCase();
    setPurposes(data);
  }

  const dataSource: IMyTableWrapper[] = purposes?.map(({ id, description }) => ({
    data: [{ text: id }, { text: description }],
  }));

  const _onSelected = (rowIndex: number) => {
    const purpose = purposes[rowIndex];
    props.onPurposeSelected(purpose);
  }

  const _onDelete = (purpose: TPurpose) => {
    let steps: IModalConfirmStep[] = [
      {
        title: 'Deseja excluir?',
        message: 'Ao confirmar essa ação não poderá ser desfeita',
        actionResult: true,
      },
    ];

    prepareSteps(steps, purpose);
  }

  const _deletePurpose = async () => {
    const { id } = step.data;
    const { success, message } = await deletePurposeByID(id);

    if (success === true) {
      setPurposes(purposes.filter((p) => p.id !== id));
      setAlertState({ message: MESSAGES.operation_successfully, key: Date.now() });
      return;
    }

    setAlertState({ message });
  };

  const _actionButton: IMyTableAction[] = [
    {
      title: "Excluir",
      onClick: index => _onDelete(purposes[index])
    }
  ];

  return (
    <>
      <MyTable
        columnAction={_actionButton}
        key="tb-category-search"
        columns={[
          { key: 'id-category', label: 'Cód.', style: { width: '10%' } },
          { key: 'id-description', label: 'Descrição' },
        ]}
        datasource={dataSource}
        onSelectedRow={_onSelected}
      />
      <MyAlert {...alertState} />
      <MyModalConfirmation
        message={step.list[stepIndex]?.message}
        title={step.list[stepIndex]?.title}
        isOpen={isOpen}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
        size="micro-small"
      />
    </>
  );
});

export default PurposeSearch;
