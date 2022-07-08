import { createContext, useContext, useMemo, useCallback } from 'react';
import { toast } from 'react-toastify';

import { useTranslation } from 'next-i18next';

import Swal from 'sweetalert2';

const UseAlertsContext = createContext<IUseAlertsContextData>({} as IUseAlertsContextData);

const UseAlertsProvider: React.FC<IUseAlertsProviderData> = ({ children }) => {
  const { t } = useTranslation();

  const strings = {
    ok: t('common:ok'),
    yes: t('common:yes'),
    no: t('common:no'),
  };

  // # default

  const successMessage = useCallback(
    (message: string, code?: string): void => {
      Swal.fire({
        html: `<div data-success-code="${code || 'not-defined'}">${message}</div>`,
        showCancelButton: false,
        confirmButtonText: strings.ok,
      });
    },
    [strings.ok]
  );

  const errorMessage = useCallback(
    (message: string, code?: string): void => {
      Swal.fire({
        html: `<div data-error-code="${code || 'not-defined'}">${message}</div>`,
        showCancelButton: false,
        confirmButtonText: strings.ok,
        heightAuto: false,
        customClass: {
          confirmButton: 'error-message-button',
        },
      });
    },
    [strings.ok]
  );

  const confirmMessage = useCallback(
    ({
      message,
      onYesCallback,
      onNoCallback,
      confirmButtonText,
      cancelButtonText,
    }: IConfirmMessageProps): void => {
      Swal.fire({
        html: message,
        showCancelButton: true,
        confirmButtonText: confirmButtonText || strings.yes,
        cancelButtonText: cancelButtonText || strings.no,
        reverseButtons: true,
      }).then(async (result) => {
        if (result.value) {
          if (onYesCallback) onYesCallback();
        } else if (onNoCallback) onNoCallback();
      });
    },
    [strings.no, strings.yes]
  );

  const advancedDialog = ({
    message,
    onYesCallback,
    onNoCallback,
    yesText,
    noText,
    yesColor,
    noColor,
  }: IAdvancedDialogProps): void => {
    Swal.fire({
      html: message,
      showCancelButton: true,
      confirmButtonColor: yesColor,
      cancelButtonColor: noColor,
      confirmButtonText: yesText,
      cancelButtonText: noText,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.value) {
        onYesCallback();
      } else {
        onNoCallback();
      }
    });
  };

  // # toasts
  const toastErrorMessage = (message: string): void => {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toastSuccessMessage = (message: string): void => {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toastWarnMessage = (message: string): void => {
    toast.warning(message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const contextValue = useMemo(
    () => ({
      successMessage,
      errorMessage,
      confirmMessage,
      advancedDialog,
      toastErrorMessage,
      toastSuccessMessage,
      toastWarnMessage,
    }),
    [confirmMessage, errorMessage, successMessage]
  );

  return <UseAlertsContext.Provider value={contextValue}>{children}</UseAlertsContext.Provider>;
};

const useAlerts = (): IUseAlertsContextData => {
  const context = useContext(UseAlertsContext);
  if (!context) throw new Error('useAlerts must be used within an AlertsProvider');
  return context;
};

export { UseAlertsProvider, useAlerts };
