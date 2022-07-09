/* eslint-disable @typescript-eslint/ban-types */
declare interface IAdvancedDialogProps {
  message: string;
  onYesCallback(): void;
  onNoCallback(): void;
  yesText: string;
  noText: string;
  yesColor: string;
  noColor: string;
}

declare interface IConfirmMessageProps {
  message: string;
  onYesCallback?(): void;
  onNoCallback?(): void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

declare interface IUseAlertsProviderData {
  children: React.ReactNode;
}

declare interface IUseAlertsContextData {
  successMessage: (message: string, code?: string) => void;
  errorMessage: (message: string, code?: string) => void;
  confirmMessage: (params: IConfirmMessageProps) => void;
  advancedDialog: (params: IAdvancedDialogProps) => void;
  toastErrorMessage: (message: string) => void;
  toastSuccessMessage: (message: string) => void;
  toastWarnMessage: (message: string) => void;
}
