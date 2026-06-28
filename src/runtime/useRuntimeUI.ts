"use client";

import { useEffect, useState } from "react";

import {
  getRuntimeUI,
  subscribeRuntimeUI,
} from "./runtimeUIStore";

export function useRuntimeUI() {
  const [ui, setUI] = useState(getRuntimeUI());

  useEffect(() => {
    return subscribeRuntimeUI(setUI);
  }, []);

  return ui;
}