import { getAuth } from 'firebase-admin/auth';
import { a as app } from '../../../chunks/server_1hFA-0b5.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const auth = getAuth(app);
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }
  try {
    await auth.createUser({
      email,
      password
    });
  } catch (error) {
    return new Response(
      "Something went wrong",
      { status: 400 }
    );
  }
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
