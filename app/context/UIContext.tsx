import { createContext, useState, use, type ReactNode } from "react";

export type AlertState = {
  message: string;
  type: "success" | "error" | "info";
};

export type DialogState = {
  title: string;
  content: string;
  onConfirm: () => void;
};

type UIContextType = {
  showAlert: (message: string, type?: AlertState["type"]) => void;
  closeAlert: () => void;
  showDialog: (title: string, content: string, onConfirm: () => void) => void;
  closeDialog: () => void;
  alert: AlertState | null;
  dialog: DialogState | null;
};

export const UIContext = createContext<UIContextType | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [dialog, setDialog] = useState<DialogState | null>(null);

  const showAlert = (message: string, type: AlertState["type"] = "info") => {
    setAlert({ message, type });
  };

  const closeAlert = () => setAlert(null);

  const showDialog = (
    title: string,
    content: string,
    onConfirm: () => void,
  ) => {
    setDialog({ title, content, onConfirm });
  };

  const closeDialog = () => setDialog(null);

  return (
    <UIContext.Provider
      value={{ showAlert, closeAlert, showDialog, closeDialog, alert, dialog }}
    >
      {children}
    </UIContext.Provider>
  );
}

// React 19 native hook consumption syntax
export function useUI() {
  const context = use(UIContext);
  if (!context) throw new Error("useUI must be used within a UIProvider");
  return context;
}
