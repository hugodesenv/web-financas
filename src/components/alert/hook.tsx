import { useState } from "react";
import { IMyAlert } from "./MyAlert";

export function useMyAlert() {
  const [alertState, setAlertState] = useState({} as IMyAlert);
  return { alertState, setAlertState };
}