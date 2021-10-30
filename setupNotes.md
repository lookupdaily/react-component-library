Setup project steps

1. `yarn create react-app`
2. `npx sb init` // Install storybook
3. Add `"babel-loader": "8.1.0"` to package.json to resolve current dependency tree issues between CRA and storybook
4. Initialise eslint >> `npx eslint init`
5. Install required eslint dependencies:
   1. eslint-plugin-react
   2. @typescript-eslint/eslint-plugin@latest
   3. eslint-config-airbnb@latest
   4. eslint@^5.16.0 || ^6.8.0 || ^7.2.0
   5. eslint-plugin-import@^2.22.1
   6. eslint-plugin-jsx-a11y@^6.4.1
   7. eslint-plugin-react-hooks@^4
   8. @typescript-eslint/parser@latest
6. Add eslint prettier plugins
7. Add styelint
8. Add .stylelintrc
