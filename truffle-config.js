const path = require("path");

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "5777",
		},
	},

	contracts_build_directory: path.join(__dirname, "./client/src/abis"),

	compilers: {
		solc: {
			version: "0.8.4",
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
