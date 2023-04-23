import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import banner2 from "rollup-plugin-banner2";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import cleaner from "rollup-plugin-cleaner";
import autoprefixer from "autoprefixer";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      cleaner({ targets: ["./dist/"] }),
      peerDepsExternal(),
      postcss({
        inject: { insertAt: "top" },
        plugins: [autoprefixer()],
      }),
      nodeResolve({ extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        verbosity: 1,
        clean: true,
        include: ["*.ts+(|x)", "**/*.ts+(|x)"],
      }),
      banner2(() => `"use client";\r\n\r\n`),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
