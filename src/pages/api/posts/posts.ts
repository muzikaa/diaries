import type { APIRoute } from 'astro';
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";
import { requireUser } from "../../diaries/_guard.ts";

export const GET: APIRoute = async ({ request, cookies }) => {
  try {
    // Check user authentication
    await requireUser({ cookies });

    // Fetch posts from Firestore
    const db = getFirestore(app);
    const postsRef = db.collection("posts");
    const snapshot = await postsRef.get();

    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response("Unauthorized", { status: 401 });
  }
};
