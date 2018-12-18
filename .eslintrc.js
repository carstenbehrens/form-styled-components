module.exports = {
    "extends": "airbnb",
    "rules": {
      "import/no-mutable-exports": false,
      "react/jsx-filename-extension": false,
      "react/require-default-props": false,
      "react/forbid-prop-types": false,
    },
    overrides: [
      {
        files: 'test/**/*.js',
        env: {
          jest: true,
        },
      },
    ],
};