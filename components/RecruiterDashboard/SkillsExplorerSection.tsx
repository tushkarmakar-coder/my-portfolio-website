"use client";

import { useState } from "react";
import SkillsPanel from "./SkillsPanel";
import CentralExplorer from "./CentralExplorer";
import ImpactPanel from "./ImpactPanel";

export default function SkillsExplorerSection() {
  const [selectedCategory, setSelectedCategory] = useState("Incident Management");
  const [selectedItem, setSelectedItem] = useState("Incident Management");

  return (
    <div className="w-full max-w-[1400px] mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Technical Capability
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          My skills
        </h2>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT: Skill Matrix Pills */}
        <div className="flex justify-center lg:justify-end">
          <SkillsPanel 
            selectedCategory={selectedCategory}
            selectedItem={selectedItem}
            onSelect={(category, item) => {
              setSelectedCategory(category);
              setSelectedItem(item);
            }} 
          />
        </div>

        {/* CENTER: Holographic hand + selected skill name */}
        <div className="flex justify-center">
          <CentralExplorer selectedItem={selectedItem} selectedCategory={selectedCategory} />
        </div>

        {/* RIGHT: Production Impact */}
        <div className="flex justify-center lg:justify-start">
          <ImpactPanel selectedCategory={selectedCategory} selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
}
