import { tokens } from "../tokens";



export const theme = {
  tokens,

  getColor(path: string) {
    return path.split(".").reduce((acc: unknown, key: string) => {
      if (acc && typeof acc === "object" && key in acc) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, tokens.colors as unknown);
  },
};