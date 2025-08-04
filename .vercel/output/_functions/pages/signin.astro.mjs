import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Main } from '../chunks/Main_BA-Utnyj.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const auth = getAuth(app);
  if (Astro2.cookies.has("__session")) {
    const sessionCookie = Astro2.cookies.get("__session").value;
    const decodedCookie = await auth.verifySessionCookie(sessionCookie);
    if (decodedCookie) {
      return Astro2.redirect("/publish");
    }
  }
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "data-astro-cid-cj4bt2fj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-8xl pl-10 p-7 emphasis" data-astro-cid-cj4bt2fj>Sign in</h1> <p class="pl-10 text-2xl subemphasis pb-5" data-astro-cid-cj4bt2fj>New here? <a href="/register" data-astro-cid-cj4bt2fj>Create an account</a></p> <form class="pl-10 " action="/api/auth/signin" method="post" data-astro-cid-cj4bt2fj> <label class="text-2xl white font-bold" for="email" for="email" data-astro-cid-cj4bt2fj>Email: </label> <input class="textinput mb-2 text-2xl" type="email" name="email" id="email" data-astro-cid-cj4bt2fj> <br data-astro-cid-cj4bt2fj> <label class="text-2xl white font-bold" for="password" data-astro-cid-cj4bt2fj>Password: </label> <input class="textinput mb-5 text-2xl" type="password" name="password" id="password" data-astro-cid-cj4bt2fj> <br data-astro-cid-cj4bt2fj> <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" data-astro-cid-cj4bt2fj> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#180A0A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent" data-astro-cid-cj4bt2fj>
Login
</span> </button> </form> ` })}  ${renderScript($$result, "C:/Users/wonga/WebstormProjects/diaries/src/pages/signin.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/wonga/WebstormProjects/diaries/src/pages/signin.astro", void 0);

const $$file = "C:/Users/wonga/WebstormProjects/diaries/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
