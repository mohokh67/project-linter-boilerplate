## Notes

The `husky` package will pick [git hooks](https://git-scm.com/docs/githooks). That's why this order is important.

```bash
# step 1: Initial your git repository
git init

# step 2: Install all npm packages
npm install
```

### VSCode

> Follow these steps in vscode:

1. Install following packages:

```bash
code --install-extension dbaeumer.vscode-eslint

code --install-extension esbenp.prettier-vscode
```

2. Add following settings

```JSON
"editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"]
```

### Useful links

- https://prettier.io/docs/en/cli.html
- https://prettier.io/docs/en/precommit.html
- https://prettier.io/docs/en/options.html
- https://prettier.io/docs/en/eslint.html
