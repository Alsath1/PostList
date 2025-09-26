import simpleImportSort from 'eslint-plugin-simple-import-sort';

import tsEslint from '@typescript-eslint/eslint-plugin';

import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'], // Файлы, к которым применяется ESLint
        languageOptions: {
            parser: tsParser, // Парсер для TypeScript
            ecmaVersion: 2020, // Версия ECMAScript
            sourceType: 'module', // Используемые модули
            globals: {
                window: true,
                document: true,
                console: true
            }
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
            '@typescript-eslint': tsEslint
        },
        rules: {
            // Правила сортировки импортов
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            // Другие правила
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' }
            ]
        }
    }
];
