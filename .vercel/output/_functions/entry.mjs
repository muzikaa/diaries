import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C4BJbUSp.mjs';
import { manifest } from './manifest_ZdxvI4do.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/auth/signout.astro.mjs');
const _page5 = () => import('./pages/api/posts/_id_.astro.mjs');
const _page6 = () => import('./pages/api/posts.astro.mjs');
const _page7 = () => import('./pages/edit/_id_.astro.mjs');
const _page8 = () => import('./pages/post/_id_.astro.mjs');
const _page9 = () => import('./pages/postings.astro.mjs');
const _page10 = () => import('./pages/publish.astro.mjs');
const _page11 = () => import('./pages/register.astro.mjs');
const _page12 = () => import('./pages/signin.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/auth/signout.ts", _page4],
    ["src/pages/api/posts/[id].ts", _page5],
    ["src/pages/api/posts/index.ts", _page6],
    ["src/pages/edit/[id].astro", _page7],
    ["src/pages/post/[id].astro", _page8],
    ["src/pages/postings.astro", _page9],
    ["src/pages/publish.astro", _page10],
    ["src/pages/register.astro", _page11],
    ["src/pages/signin.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0ccf053d-5141-4700-bef9-8a89ff12e9d3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
