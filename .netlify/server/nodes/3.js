

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.3wPj1gKk.js","_app/immutable/chunks/scheduler.xePAFb-g.js","_app/immutable/chunks/index.lfO_wLMc.js","_app/immutable/chunks/Brand.Y_5H_3hN.js"];
export const stylesheets = [];
export const fonts = [];
