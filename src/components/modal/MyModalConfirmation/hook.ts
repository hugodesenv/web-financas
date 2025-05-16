import { useEffect, useState } from "react";

export interface IModalConfirmStep {
  actionResult: boolean;
  message: any;
  title: string;
}

interface IProps {
  onSuccess: () => void;
}

export function useMyModalConfirmation(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState({
    list: [] as IModalConfirmStep[],
    data: null
  });

  const [stepIndex, setStepIndex] = useState(-1);

  useEffect(() => {
    if (step.list.length > 0) {
      verify(0);
    }
  }, [step]);

  function reset() {
    setIsOpen(false);
    setStepIndex(-1);
  }

  const onConfirm = () => verify(stepIndex + 1);
  const onCancel = () => reset();
  const onClose = () => reset();

  /**
   * Check if the step are ok!
   * @param stepIndex 
   * @returns 
   */
  function verify(stepIndex: number) {
    if (stepIndex >= step.list.length) {
      reset();
      props.onSuccess();
      return;
    }

    let action = step.list[stepIndex]?.actionResult;

    // if it had something that prevented to continue the oepration:
    if (action == true) {
      setStepIndex(stepIndex);
      setIsOpen(true);
      return;
    }

    // else, if this current action index is it ok, we try to find another possible step fail:
    verify(stepIndex + 1);
  }

  function prepareSteps(step: IModalConfirmStep[], data?: any) {
    setStep({ list: step, data });
  }

  return {
    stepIndex,
    isOpen,
    step,
    prepareSteps,
    onConfirm,
    onCancel,
    onClose,
    verify
  }
}