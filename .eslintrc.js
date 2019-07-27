module.exports = {
  'extends': ['airbnb', 'prettier'],
  "parser": "babel-eslint",
  "plugins": ['prettier', "react-hooks"],
  "rules": {
    "prettier/prettier": "error",
    "import/prefer-default-export": "warn",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/prefer-default-export": "off",
  },
  env: {
    browser: true,
    node: true,
  }
};
