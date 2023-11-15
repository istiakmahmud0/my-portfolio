"use client";
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";
import { error } from "console";

type SectionName = (typeof links)[number]["name"];
type ActiveSelectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
const ActiveSelectionContext = createContext<ActiveSelectionContextType | null>(
  null
);
const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSelectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSelectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSelectionContext);
  if (context == null) {
    throw new Error("Use Active section must be within");
  }
  return context;
};
export default ActiveSectionContextProvider;
