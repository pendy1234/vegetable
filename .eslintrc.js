module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "@vue/airbnb"],
	rules: {
		'vue/html-indent': ["error", 4, {
			"attribute": 1,
			"closeBracket": 0,
			"ignores": []
		}],
		indent: ['error', 4, { "SwitchCase": 1 }],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		semi: ['error', 'always'],
		'no-mixed-spaces-and-tabs': ['error', false],
		'func-names': 'off',
		'no-param-reassign': 'off',
		'object-curly-spacing': 'off',
		'arrow-parens': 'off',
		'object-shorthand': 'off',
		'prefer-destructuring': 'off',
		'consistent-return': 'off',
		'import/extensions': 'off',
		'comma-dangle': ['error', 'always-multiline'],
		quotes: ['error', 'single'],
		'guard-for-in': 'off',
		'no-var': 'error',
		'no-unused-vars': 'warn',
		'no-unused-expressions': 'warn',
		'no-return-assign': 'warn',
		'max-len': ['error', {
			code: 120,
			ignoreUrls: true,
		}],
		'no-tabs': 'off',
		'vue/script-indent': [
			'error',
			4,
		],
		'class-methods-use-this': 'off',
		'no-continue': 'off',
		'no-mixed-operators': 'off',
		'no-plusplus': 'off',
		'no-await-in-loop': 'off',
		'no-restricted-syntax': 'warn',
		'prefer-const': 'warn',
		'no-new': 'warn',
		radix: 'warn',
		'prefer-template': 'warn',
		'no-use-before-define': 'off',
		'no-shadow': 'warn',
		'import/no-extraneous-dependencies': 'warn',
		'import/first': 'warn',
		'import/no-unresolved': 'off',

	},
	globals: {
		API: true,
		axios: true,
		SessionStore: true,
		vm: true,
		$ele: true,
	},
	parserOptions: {
		parser: "babel-eslint"
	}
};
