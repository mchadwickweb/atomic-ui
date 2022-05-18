module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/no-redundant-roles": "off",
  },
};
