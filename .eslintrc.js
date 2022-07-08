module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "eslint-plugin-import-helpers",
    "unused-imports",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/prefer-default-export": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "no-unused-expressions": "off",
    camelcase: "off",
    "react/prop-types": "off",
    "import/no-duplicates": "off",
    "no-use-before-define": "off",
    "consistent-return": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": 0,
    "no-console": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        required: {
          every: ["id"],
        },
      },
    ],
    "@typescript-eslint/no-empty-function": 0,
    "react/no-array-index-key": 0,
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "/^react/",
          "/^next/",
          "/^templates/",
          "module",
          "/^hooks/",
          "/^config/",
          "/^api/",
          "/^components/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/jsx-no-useless-fragment": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: [],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-shadow": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
