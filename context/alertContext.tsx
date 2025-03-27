import Alert from "@/components/Alert";
import React, { createContext, useCallback, useContext, useState } from "react";

type AlertType = "error" | "success" | "info";
type AlertState = {
  visible: boolean;
  message: string;
  type: AlertType;
};

interface AlertContextType {
  showAlert: (message: string, type?: "error" | "success" | "info") => void;
}

const AlertContext = createContext<AlertContextType>(null!);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alert, setAlert] = useState<AlertState>({
    visible: false,
    message: "",
    type: "info",
  });

  const showAlert = useCallback((message: string, type: AlertType = "info") => {
    setAlert({ visible: true, message, type });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.visible && (
        <Alert
          message={alert.message}
          type={alert.type}
          handleCloseAlert={() =>
            setAlert((prev) => ({ ...prev, visible: false }))
          }
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context)
    throw new Error("useAlert must be used within an AlertProvider");
  return context;
};
