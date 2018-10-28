const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
	alias: {
		H: "hostname",
		p: "port"
	},
	string: ["H"],
	unknown: parameter => false
})

const port =
	argv.port ||
	process.env.PORT ||
	process.env.npm_package_config_nuxt_port ||
	"3000"
const host =
	argv.hostname ||
	process.env.HOST ||
	process.env.npm_package_config_nuxt_host ||
	"localhost"
module.exports = {
	env: {
		baseUrl:
			process.env.BASE_URL ||
			`http://${host}:${port}`
	},
	head: {
		title: "工数入力支援ツール",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "工数入力支援ツール v2" },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:site", content: "@iwashi31" },
			{ name: "og:url", content: "http://kousuu.iwashibowl.net" },
			{ name: "og:title", content: "工数入力支援ツール" },
			{ name: "og:description", content: "工数を集計するツール" },
			{ name: "og:image", content: "http://kousuu.iwashibowl.net/img/iwashi.png" }
		],
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			}
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: "#3B8070" },
	/*
	** Build configuration
	*/
	plugins: [
		{ src: '~/plugins/plugins', ssr: false }
	],
	modules: [
		"@nuxtjs/axios",
		"@nuxtjs/vuetify",
		"~/modules/typescript.js"
	],
	axios: {},
	vuetify: {}
}
