import type { CSSProperties } from "react";

/** Tema renkleri; root layout bunları CSS değişkenlerine çevirir. */
export interface Theme {
  brand: string;
  brandStrong: string;
  onBrand: string;
  price: string;
  canvas: string;
  surface: string;
  chip: string;
  ink: string;
  muted: string;
  line: string;
  radiusCard: string;
  radiusImage: string;
}

export function themeToCssVars(theme: Theme): CSSProperties {
  return {
    "--brand": theme.brand,
    "--brand-strong": theme.brandStrong,
    "--on-brand": theme.onBrand,
    "--price": theme.price,
    "--canvas": theme.canvas,
    "--surface": theme.surface,
    "--chip": theme.chip,
    "--ink": theme.ink,
    "--muted": theme.muted,
    "--line": theme.line,
    "--radius-card": theme.radiusCard,
    "--radius-image": theme.radiusImage,
  } as CSSProperties;
}
