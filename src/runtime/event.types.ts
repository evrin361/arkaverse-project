export type UIEventType =
  | "click"
  | "hover"
  | "focus"
  | "blur"
  | "load"
  | "submit";

export interface UIEvent {
  type: UIEventType;
  target?: string;
  timestamp: number;
}