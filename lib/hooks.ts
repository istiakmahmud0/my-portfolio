import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useActiveSectionContext } from "@/components/active-section-context";
import { SectionName } from "./type";

type useSectionInViewProps = {
  sectionName: SectionName;
};
export function ueeSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView, entry } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
