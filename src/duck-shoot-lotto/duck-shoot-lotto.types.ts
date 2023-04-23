//'enum like' object declaration (notice the `as const` at the end)
// used becasue exporting const enum will not work when imported
// into another module.

export const ButtonStyles = {
  ACTIVECTA: "ACTIVECTA",
  INACTIVECTA: "INACTIVECTA",
  BACK: "BACK",
  OKAY: "OKAY",
  CANCEL: "CANCEL",
} as const;

//'enum like' "TS type" creation
export type ButtonStylesType = keyof typeof ButtonStyles;
