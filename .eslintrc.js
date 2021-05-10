module.exports = {
  'extends': ['airbnb', "plugin:prettier/recommended", "prettier/react"],
  "parser": "babel-eslint",
  "plugins": ['prettier', "react-hooks", 'import'],
  "rules": {
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
    "import/prefer-default-export": "off",
  },
  env: {
    browser: true,
    node: true,
  },
};
