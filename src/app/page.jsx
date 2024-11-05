import React from "react";
import Local_Hero from "../LocalComponents/Local_Hero";
import Local_AuraText from "@/LocalComponents/Local_AuraText";
import Local_TimeLineEffect from "@/LocalComponents/Local_TimeLineEffect";

export default function FlipWordsDemo() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll">
      <Local_Hero className="snap-center snap-always" />
      <div className="grid h-fit snap-center snap-always place-items-center bg-transparent">
        <Local_AuraText />
      </div>
      <Local_TimeLineEffect />
    </div>
  );
}
