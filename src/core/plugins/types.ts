export type ArkEvent = Record<string, unknown>;
export type ArkContext = Record<string, unknown>;

export type ArkPlugin = {
  id: string;

  onInit?: () => void;

  onEvent?: (event: ArkEvent) => void;

  onRender?: (context: ArkContext) => void;

  onDestroy?: () => void;
};