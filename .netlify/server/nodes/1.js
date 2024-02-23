

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.zhM_lwGb.js","_app/immutable/chunks/scheduler.xePAFb-g.js","_app/immutable/chunks/index.lfO_wLMc.js"];
export const stylesheets = [];
export const fonts = [];
