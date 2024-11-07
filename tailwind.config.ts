import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: ["class"],
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/admin-components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         borderWidth: {
            '3': '3px'
         },
         fontFamily: {
            red_hat_display: ['var(--red-hat-display)'],
         },
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)'
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
         }
      }
   },
   plugins: [require("tailwindcss-animate")],
};
export default config;
