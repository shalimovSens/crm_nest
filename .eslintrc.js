module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "indent": [ "error", 4, ],
        "comma-dangle": [
            "error", 
            {
                "arrays": "always",
                "objects": "always",
                "imports": "always",
                "exports": "always",
                "functions": "never",
            },
        ],
        "object-curly-spacing" : [
            "error",
            "always",
            {
                "arraysInObjects" : true,
                "objectsInObjects" : true,
            },
        ],
        "array-bracket-spacing" : [
            "error",
            "always",
            {
                "singleValue": true,
                "objectsInArrays" : true,
                "arraysInArrays" : true,
            },
        ],
        "comma-spacing" : [
            "error",
            {
                "before": false,
                "after": true,
            },
        ],
        "space-in-parens": [ "error", "never", ],
        "semi": [ "error", "never", ],
  },
};
