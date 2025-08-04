import { a as app } from '../../../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../../renderers.mjs';

const db = getFirestore(app);
const friendsRef = db.collection("posts");
const POST = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const body = formData.get("body")?.toString();
  const timestamp = Date.now();
  if (!title || !body) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  if (!params.id) {
    return new Response("Cannot find post", {
      status: 404
    });
  }
  try {
    await friendsRef.doc(params.id).update({
      title,
      body,
      timestamp
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/publish");
};
const DELETE = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find post", {
      status: 404
    });
  }
  try {
    await friendsRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/publish");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
