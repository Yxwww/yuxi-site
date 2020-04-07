module.exports = {
  'extends': ['airbnb', "plugin:prettier/recommended", "prettier/react"],
  "parser": "babel-eslint",
  "plugins": ['prettier', "react-hooks"],
  "rules": {
    "import/prefer-default-export": "warn",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/prefer-default-export": "off",
  },
  env: {
    browser: true,
    node: true,
  }
};
