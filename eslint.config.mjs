import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  plugins: ['prettier'], 
  extends: [
    'eslint:recommended',
    'plugin:@angular-eslint/recommended', 
    'plugin:prettier/recommended' 
  ],
  rules: {
    'prettier/prettier': 'error', 
  }
});
