import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$PostList } from '../chunks/PostList_BIL9tX9x.mjs';
import { $ as $$Main } from '../chunks/Main_BA-Utnyj.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Publish = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Publish;
  const auth = getAuth(app);
  if (!Astro2.cookies.has("__session")) {
    return Astro2.redirect("/signin");
  }
  const sessionCookie = Astro2.cookies.get("__session").value;
  const decodedCookie = await auth.verifySessionCookie(sessionCookie);
  const user = await auth.getUser(decodedCookie.uid);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "data-astro-cid-qoofgnlp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl emphasis" data-astro-cid-qoofgnlp>Welcome</h1> <h1 class="text-3xl subemphasis pt-2" data-astro-cid-qoofgnlp>Add a new post</h1> <form method="post" action="/api/posts" data-astro-cid-qoofgnlp> <label for="title" class="text-2xl" data-astro-cid-qoofgnlp>Title: </label> <br data-astro-cid-qoofgnlp> <div class="p-0.5" data-astro-cid-qoofgnlp></div> <input type="text" id="title" name="title" class="mr-1 ml-1 " data-astro-cid-qoofgnlp> <br data-astro-cid-qoofgnlp> <div class="p-3" data-astro-cid-qoofgnlp></div> <label for="body" class=" text-2xl" data-astro-cid-qoofgnlp>Body: </label> <br data-astro-cid-qoofgnlp><div class="p-0.5" data-astro-cid-qoofgnlp></div> <textarea id="body" name="body" class="mr-1 ml-1" data-astro-cid-qoofgnlp></textarea> <br data-astro-cid-qoofgnlp><div class="p-0.5" data-astro-cid-qoofgnlp></div> <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" data-astro-cid-qoofgnlp> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#180A0A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent" data-astro-cid-qoofgnlp>
Publish Post
</span> </button> </form> ${renderComponent($$result2, "PostList", $$PostList, { "edit": true, "data-astro-cid-qoofgnlp": true })} ` })} `;
}, "C:/Users/wonga/WebstormProjects/diaries/src/pages/publish.astro", void 0);

const $$file = "C:/Users/wonga/WebstormProjects/diaries/src/pages/publish.astro";
const $$url = "/publish";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
