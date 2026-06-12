import React from "react";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070A12] text-white flex">
      <aside className="w-[260px] border-r border-white/10 p-4">
        ARKAVERSE NAV
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}