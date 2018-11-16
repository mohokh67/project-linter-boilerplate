##

The `husky` package will pick [git hooks](https://git-scm.com/docs/githooks). That's why this order is important.

```bash
# step 1: Initial your git repository
git init

# step 2: Install all npm packages
npm install
```

### For VSCode

> add following setting to vscode setting

```JSON
"editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"]
```
