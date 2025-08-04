import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
/* empty css                                */
import { $ as $$Main } from '../chunks/Main_BA-Utnyj.mjs';
import { $ as $$PostList } from '../chunks/PostList_BIL9tX9x.mjs';
export { renderers } from '../renderers.mjs';

const $$Postings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostList", $$PostList, { "edit": false })} ` })}`;
}, "C:/Users/wonga/WebstormProjects/diaries/src/pages/postings.astro", void 0);

const $$file = "C:/Users/wonga/WebstormProjects/diaries/src/pages/postings.astro";
const $$url = "/postings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Postings,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
