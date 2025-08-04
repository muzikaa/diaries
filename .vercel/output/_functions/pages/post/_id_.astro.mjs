import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { a as app } from '../../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { $ as $$Post } from '../../chunks/Post_GqvIM3Tu.mjs';
import { $ as $$Main } from '../../chunks/Main_BA-Utnyj.mjs';
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
  return renderTemplate`${renderComponent($$result, "Main", $$Main, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Post", $$Post, { "post": post, "edit": "false", "self": true })} ` })}`;
}, "C:/Users/wonga/WebstormProjects/diaries/src/pages/post/[id].astro", void 0);

const $$file = "C:/Users/wonga/WebstormProjects/diaries/src/pages/post/[id].astro";
const $$url = "/post/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
