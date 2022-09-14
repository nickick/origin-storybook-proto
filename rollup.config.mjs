import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import svg from 'rollup-plugin-svg';
import cssnano from 'cssnano';

export default {
  input: [
    "src/index.ts",
    "src/components/Card/index.tsx",
    "src/components/Button/index.tsx",
    "src/components/Dropdown/index.tsx",
    "src/components/Footer/index.tsx",
    "src/components/Header/index.tsx",
    "src/components/Typography/index.tsx",
  ],
  output: [
    {
      dir: "lib/cjs",
      format: "cjs",
      sourcemap: true
    },
    {
      dir: "lib/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    svg(),
    typescript({ 
      useTsconfigDeclarationDir: true,
      exclude: [
        "**/__tests__",
        "**/*.test.ts",
        "**/*.stories.tsx"
      ]
    }),
    postcss({
      plugins: [
        cssnano()
      ],
      extensions: ['.css'],
    }),
  ]
};