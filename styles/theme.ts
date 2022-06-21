import type { MantineThemeOverride } from "@mantine/styles";

export const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "#5710E5",
      "#611AEF",
      "#6E2DF0",
      "#7B40F2",
      "#8954F2",
      "#9667F4",
      "#A379F6",
      "#B08DF7",
      "#BDA0F8",
      "#CBB3F9",
    ],
    secondaryBrand: [
      "#A299FF",
      "#8F85FF",
      "#7C70FF",
      "#695CFF",
      "#5747FF",
      "#4433FF",
      "#311FFF",
      "#1F0AFF",
      "#1400F5",
    ],
  },
  fontFamily: "Rubik, sans-serif",
  headings: {
    fontFamily: "Rubik, sans-serif",
  },
  primaryShade: 5,
  /** Put your mantine theme override here */
  primaryColor: "brand",
  colorScheme: "light",
};