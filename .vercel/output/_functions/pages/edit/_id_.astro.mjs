import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { a as app } from '../../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { $ as $$Main } from '../../chunks/Main_BA-Utnyj.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const postsRef = db.collection("posts");
  const postSnapshot = await postsRef.doc(id).get();
  if (!postSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const post = postSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "data-astro-cid-d26h47xz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl emphasis" data-astro-cid-d26h47xz>Edit ${post.title}</h1> <p class="text-3xl subemphasis" data-astro-cid-d26h47xz>Here you can edit or delete your posts.</p> <form method="post"${addAttribute(`/api/posts/${id}`, "action")} data-astro-cid-d26h47xz> <label for="title" class="text-2xl" data-astro-cid-d26h47xz>Title: </label> <input type="text" id="title" name="title"${addAttribute(post.title, "value")} class="mr-1 ml-1 mb-5 text-xl mt-3 px-1.5 py-1" data-astro-cid-d26h47xz> <br data-astro-cid-d26h47xz> <label for="body" class="align-top text-2xl" data-astro-cid-d26h47xz>Body: </label> <textarea id="body" name="body" class="px-1.5 py-1 text-xl" data-astro-cid-d26h47xz>${post.body}</textarea> <br data-astro-cid-d26h47xz><div class="p-0.5" data-astro-cid-d26h47xz></div> <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" data-astro-cid-d26h47xz> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#180A0A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent" data-astro-cid-d26h47xz>
Submit Changes
</span> </button> </form> <div class="p-0.5" data-astro-cid-d26h47xz></div> <button type="submit" class="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" data-astro-cid-d26h47xz> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#180A0A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent" data-astro-cid-d26h47xz>
Delete Post
</span> </button> ` })}  ${renderScript($$result, "C:/Users/wonga/WebstormProjects/diaries/src/pages/edit/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/wonga/WebstormProjects/diaries/src/pages/edit/[id].astro", void 0);

const $$file = "C:/Users/wonga/WebstormProjects/diaries/src/pages/edit/[id].astro";
const $$url = "/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
