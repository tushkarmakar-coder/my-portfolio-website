"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserMode = "idle" | "recruiter" | "client";

interface ModeContextType {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<UserMode>("idle");

  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as UserMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const handleSetMode = (newMode: UserMode) => {
    setMode(newMode);
    if (newMode !== "idle") {
      localStorage.setItem("portfolio-mode", newMode);
    }
  };

  return (
    <ModeContext.Provider value={{ mode, setMode: handleSetMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}

