// http://eslint.org/docs/user-guide/configuring

const eslintrc = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  // https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app
  extends: "react-app",
  plugins: ["react"],
  rules: {
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "react/jsx-uses-vars": [2],
    "react/jsx-uses-react": 2,
    "react/react-in-jsx-scope": 2,
    "import/no-webpack-loader-syntax": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }]
  }
};

module.exports = eslintrc;
