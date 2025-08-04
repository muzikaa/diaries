import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../chunks/Main_BA-Utnyj.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "data-astro-cid-qraosrxq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pl-10" data-astro-cid-qraosrxq> <h1 class="text-8xl pb-7 emphasis" data-astro-cid-qraosrxq>Register</h1> <p class="text-2xl subemphasis pb-5" data-astro-cid-qraosrxq>Already have an account? <a href="/signin" data-astro-cid-qraosrxq>Sign in</a></p> <form action="/api/auth/register" method="post" data-astro-cid-qraosrxq> <label class="text-2xl white font-bold" for="email" for="email" data-astro-cid-qraosrxq>Email: </label> <input class="textinput mb-2 text-2xl" type="email" name="email" id="email" data-astro-cid-qraosrxq> <br data-astro-cid-qraosrxq> <label class="text-2xl white font-bold" for="password" data-astro-cid-qraosrxq>Password: </label> <input class="textinput mb-5 text-2xl" type="password" name="password" id="password" data-astro-cid-qraosrxq> <br data-astro-cid-qraosrxq> <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" data-astro-cid-qraosrxq> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#180A0A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent" data-astro-cid-qraosrxq>
Register
</span> </button> </form> </div> ` })} `;
}, "C:/Users/wonga/WebstormProjects/diaries/src/pages/register.astro", void 0);

const $$file = "C:/Users/wonga/WebstormProjects/diaries/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
