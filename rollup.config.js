import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import url from 'postcss-url';

export default {
  entry: "./src/dialog.js",
  dest: "./dist/dialog.min.js",
  format: "es",
  moduleName: "dialog",
  plugins: [
    postcss({
      extensions: [".css"],
      plugins: [
        url({
          url: "inline"
        })
      ]
    }),
    terser()
  ]
};
