import { useState } from "react";
import { IMyAlertState } from "./MyAlert";

export function useMyAlert() {
  const [alertState, setAlertState] = useState({} as {
    message?: string;
    state?: IMyAlertState,
    visible: boolean
  });

  return { alertState, setAlertState };
}