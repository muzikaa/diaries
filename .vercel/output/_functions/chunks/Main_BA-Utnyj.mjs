import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
/* empty css                        */
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-5blmo7yk> <nav data-astro-cid-5blmo7yk> <div class="text-3xl text-white " data-astro-cid-5blmo7yk> <ul class="flex float-right pr-1.5" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/" data-astro-cid-5blmo7yk>Home</a></li> <li data-astro-cid-5blmo7yk><a href="/publish" data-astro-cid-5blmo7yk>Publish</a></li> <li data-astro-cid-5blmo7yk><a href="/postings" data-astro-cid-5blmo7yk>Postings</a> </li> </ul> </div> </nav> </header> `;
}, "C:/Users/wonga/WebstormProjects/diaries/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Diary</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/wonga/WebstormProjects/diaries/src/layouts/Main.astro", void 0);

export { $$Main as $ };
