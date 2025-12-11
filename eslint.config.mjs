// import { defineConfig, globalIgnores } from "eslint/config";
// import nextVitals from "eslint-config-next/core-web-vitals";
// import nextTs from "eslint-config-next/typescript";
// import reactCompiler from "eslint-plugin-react-compiler";

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   ...nextTs,

//   // React Compiler integration
//   {
//     plugins: {
//       "react-compiler": reactCompiler,
//     },
//     rules: {
//       "react-compiler/react-compiler": [
//         "error",
//         {
//           ignore: [
//             // Ignore React Compiler incompatibility from TanStack Table
//             "useReactTable",
//           ],
//         },
//       ],
//     },
//   },

//   // Override Next.js default ignores
//   globalIgnores([
//     ".next/**",
//     "out/**",
//     "build/**",
//     "next-env.d.ts",
//   ]),
// ]);

// export default eslintConfig;


import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
