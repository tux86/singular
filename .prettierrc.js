module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.js'],
            options: {
                printWidth: 120,
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                quoteProps: 'as-needed',
                trailingComma: 'all',
                bracketSpacing: true,
                arrowParens: 'always',
            },
        },
        {
            files: ['*.json'],
            options: {
                singleQuote: false,
                trailingComma: 'none',
            },
        },
    ],
}
