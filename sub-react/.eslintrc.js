module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
		browser: true,
		commonjs: true
  },
  extends: [
		"eslint:recommended",
		"plugin:react/recommended"
	],
  globals: {
    React: true
  },
  rules: {
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "curly": [2, "all"],
    "eqeqeq": [2, "allow-null"],
    "quotes": 0,
    "semi": [2, "always"],
    "indent": [2, "tab"],
    "no-tabs": 0,
    "space-in-parens": [0, "always"],
    "space-before-function-paren": [0, "always"]
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react"]
};
