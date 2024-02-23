

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.r29YXhqX.js","_app/immutable/chunks/scheduler.xePAFb-g.js","_app/immutable/chunks/index.lfO_wLMc.js"];
export const stylesheets = ["_app/immutable/assets/0.jXMHxpiu.css"];
export const fonts = [];
