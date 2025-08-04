import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../chunks/Main_BA-Utnyj.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl font-extrabold text-white">Page not found</h1> <p class="text-3xl font-extrabold text-white">Are you
<a class="text-pink-400" href="/signin">logged in?</a> </p> ` })}`;
}, "C:/Users/wonga/WebstormProjects/diaries/src/pages/404.astro", void 0);

const $$file = "C:/Users/wonga/WebstormProjects/diaries/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
