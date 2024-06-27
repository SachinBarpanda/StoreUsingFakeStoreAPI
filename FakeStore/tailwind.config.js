/** @type {import('tailwindcss').Config} */
import  {withMT} from "@material-tailwind/react/utils/withMT"

export default withMT=({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens:{
    lg :{max: "1023px"},
    sm :{max : "639px"},
  },
  plugins: [],
});

