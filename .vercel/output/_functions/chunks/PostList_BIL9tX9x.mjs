import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from './astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { a as app } from './server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Post } from './Post_GqvIM3Tu.mjs';

async function requireUser(Astro) {
  const auth = getAuth(app);
  const sessionCookie = Astro.cookies.get("__session")?.value;
  if (!sessionCookie) {
    return Astro.redirect("/signin");
  }
  try {
    const decoded = await auth.verifySessionCookie(sessionCookie);
    const user = await auth.getUser(decoded.uid);
    return user;
  } catch {
    return Astro.redirect("/signin");
  }
}

const $$Astro = createAstro();
const $$PostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostList;
  await requireUser(Astro2);
  const db = getFirestore(app);
  const postsRef = db.collection("posts");
  const postSnapshot = await postsRef.get();
  const posts = postSnapshot.docs.map((post) => ({
    id: post.id,
    ...post.data()
  }));
  const { edit } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl pd-3 emphasis">Posts</h1> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post, "edit": edit })}`)} </ul>`;
}, "C:/Users/wonga/WebstormProjects/diaries/src/components/PostList.astro", void 0);

export { $$PostList as $ };
