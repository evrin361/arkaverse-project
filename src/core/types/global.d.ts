import type { ReplayEngine } from "../../runtime/replay/replay-engine";

declare global {
  interface Window {
    replayEngine: ReplayEngine;
  }
}

export {};
