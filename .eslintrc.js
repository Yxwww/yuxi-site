module.exports = {
  'extends': ['airbnb', 'prettier'],
  "parser": "babel-eslint",
  "plugins": ['prettier', "react-hooks"],
  "rules": {
    "prettier/prettier": "error",
    "import/prefer-default-export": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
  env: {
    browser: true,
    node: true,
  }
};
