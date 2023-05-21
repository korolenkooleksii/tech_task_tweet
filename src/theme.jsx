export const theme = Object.freeze({
  colors: {
    primary: "#041d51",
    secondary: "#373737",
    accent: "#ff4500",
    green: "#5cd3a8",
    aqua: "#00ffff",
    fiolo: "#ebd8ff",
    transGreen: "#5cd3a7e9",
  },

  shadow: {
    primary: "0px 2px 4px -1px rgba(0, 0, 0, 0.2)",
    secondary: "0px 4px 5px 0px rgba(0, 0, 0, 0.14)",
    third: "0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    button: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
  },

  spacing: (value) =>`${value * 4}px`
})