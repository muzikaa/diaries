import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { post, edit, self = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-huxyrzvi> <div class="flex items-center mt-3" data-astro-cid-huxyrzvi> <h1 class="subemphasis text-4xl" data-astro-cid-huxyrzvi>${self ? post.title : renderTemplate`<a${addAttribute(`/post/${post.id}`, "href")} data-astro-cid-huxyrzvi>${post.title}</a>`}</h1> <button${addAttribute(edit != true, "hidden")} type="submit" class="ml-4 relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" data-astro-cid-huxyrzvi> <span class="relative px-5 py-1 transition-all ease-in duration-75 bg-[#180A0A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent" data-astro-cid-huxyrzvi> <a${addAttribute(`/edit/${post.id}`, "href")} data-astro-cid-huxyrzvi>Edit</a> </span> </button> <br data-astro-cid-huxyrzvi> </div> <span class="mr-5 text-l text-gray-400" data-astro-cid-huxyrzvi>(${new Date(post.timestamp).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      timeZone: "CST",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    }
  )})</span> <br data-astro-cid-huxyrzvi> <pre${addAttribute({ "body": !self }, "class:list")} data-astro-cid-huxyrzvi>${post.body}</pre> </li> `;
}, "C:/Users/wonga/WebstormProjects/diaries/src/components/Post.astro", void 0);

export { $$Post as $ };
