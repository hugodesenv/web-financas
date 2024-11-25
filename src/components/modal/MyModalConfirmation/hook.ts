import { useEffect, useState } from "react";

export interface IModalConfirmStep {
  title: string;
  message: string;
  // geralmente eu vou retornar um boolean de alguma validação de alguma função...
  // se for true, então vou mostrar a mensagem
  actionResult: boolean;
}

export function useMyModalConfirmation() {
  const [isOpen, setIsOpen] = useState(false);
  const [steps, setSteps] = useState([] as IModalConfirmStep[]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [onSuccess, setOnSuccess] = useState(null as any); tratar esse onSuccess... na tela só vai confirmar se isso der sucesso

  useEffect(() => {
    steps.length > 0 && verify(0);
  }, [steps]);

  function verify(stepIndex: number) {
    if (stepIndex >= steps.length) {
      reset();
      onSuccess();
      return;
    }

    let action = steps[stepIndex]?.actionResult;

    // if had something that prevented to continue the oepration:
    if (action == true) {
      setCurrentStepIndex(stepIndex);
      setIsOpen(true);
      return;
    }

    // else, if this current action index is it ok, we try to find another possible step fail:
    verify(stepIndex + 1);
  }

  function reset() {
    setIsOpen(false);
    setCurrentStepIndex(-1);
  }

  const onConfirm = () => verify(currentStepIndex + 1);
  const onCancel = () => reset();
  const onClose = () => reset();

  return {
    isOpen,
    steps,
    setSteps,
    currentStepIndex,
    onConfirm,
    onCancel,
    onClose,

  }
}