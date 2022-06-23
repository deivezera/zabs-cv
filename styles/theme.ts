import type { MantineThemeOverride } from "@mantine/styles";

export const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "#51612b",
      "#627140",
      "#748155",
      "#85906b",
      "#97a080",
      "#a8b095",
      "#b9c0aa",
      "#cbd0bf",
      "#dcdfd5",
      "#eeefea",
    ],
    secondaryBrand: [
      "#c0d461",
      "#c6d871",
      "#cddd81",
      "#d3e190",
      "#d9e5a0",
      "#e0eab0",
      "#e6eec0",
      "#ecf2d0",
      "#f2f6df",
      "#f9fbef",
    ],
  },
  fontFamily: "Rubik, sans-serif",
  headings: {
    fontFamily: "Rubik, sans-serif",
  },
  primaryShade: 0,
 
  /** Put your mantine theme override here */
  primaryColor: "brand",
  colorScheme: "light",
};