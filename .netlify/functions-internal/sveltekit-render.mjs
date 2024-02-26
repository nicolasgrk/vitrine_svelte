import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","css/bootstrap.min.css","css/styles.css","favicon.ico","img/.DS_Store","img/bg.svg","img/brand/1.png","img/brand/2.png","img/brand/3.png","img/brand/4.png","img/brand/5.png","img/brand/6.png","img/check.svg","img/feature-bg.svg","img/footer-bg.svg","img/hero-bg.svg","img/icon/1.svg","img/icon/10.svg","img/icon/11.svg","img/icon/12.svg","img/icon/13.svg","img/icon/14.svg","img/icon/15.svg","img/icon/16.svg","img/icon/17.svg","img/icon/18.svg","img/icon/19.svg","img/icon/2.svg","img/icon/20.svg","img/icon/21.svg","img/icon/22.svg","img/icon/23.svg","img/icon/24.svg","img/icon/25.svg","img/icon/26.svg","img/icon/27.svg","img/icon/3.svg","img/icon/4.svg","img/icon/5.svg","img/icon/6.svg","img/icon/7.svg","img/icon/8.svg","img/icon/9.svg","img/logo.svg","img/logo2.svg","img/mail.svg","img/minus.svg","img/mockup/Carpeto.png","img/mockup/LaLicorne.png","img/mockup/PetitNuageEquiCoaching.png","img/mockup/Simeon.png","img/plus.svg","img/pro-btn.svg","img/solution.svg","img/user-assistify.svg","img/user.svg","js/bootstrap.bundle.min.js","robots.txt"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".png":"image/png",".js":"text/javascript",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.TGE7L2_e.js","app":"_app/immutable/entry/app.2TBoLlJo.js","imports":["_app/immutable/entry/start.TGE7L2_e.js","_app/immutable/chunks/scheduler.xePAFb-g.js","_app/immutable/entry/app.2TBoLlJo.js","_app/immutable/chunks/scheduler.xePAFb-g.js","_app/immutable/chunks/index.lfO_wLMc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/terms-of-service",
				pattern: /^\/terms-of-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
