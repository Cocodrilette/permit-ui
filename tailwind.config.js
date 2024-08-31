import { nextui } from "@nextui-org/theme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0f0f0",
        secondary: "#F1E4E8",
        accent: "#89CE94",
      },
    },
  },
  plugins: [nextui()],
};
