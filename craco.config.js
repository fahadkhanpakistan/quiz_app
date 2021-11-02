const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#212129',
							'@success-color': '#BBF48E',
							dark: false,
							// compact: true,
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
