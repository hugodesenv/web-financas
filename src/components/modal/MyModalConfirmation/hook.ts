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
  const [steps, setSteps] = useState<IModalConfirmStep[]>([]);
  const [stepIndex, setStepIndex] = useState(-1);

  useEffect(() => {
    if (steps.length > 0) {
      verify(0);
    }
  }, [steps]);

  function reset() {
    setIsOpen(false);
    setStepIndex(-1);
  }

  const onConfirm = () => verify(stepIndex + 1);
  const onCancel = () => reset();
  const onClose = () => reset();

  /**
   * Check if the steps are ok!
   * @param stepIndex 
   * @returns 
   */
  function verify(stepIndex: number) {
    if (stepIndex >= steps.length) {
      reset();
      props.onSuccess();
      return;
    }

    let action = steps[stepIndex]?.actionResult;

    // if had something that prevented to continue the oepration:
    if (action == true) {
      setStepIndex(stepIndex);
      setIsOpen(true);
      return;
    }

    // else, if this current action index is it ok, we try to find another possible step fail:
    verify(stepIndex + 1);
  }

  return {
    stepIndex,
    isOpen,
    steps,
    setSteps,
    onConfirm,
    onCancel,
    onClose,
    verify
  }
}