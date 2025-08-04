import type { APIRoute } from 'astro';
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const GET: APIRoute = async () => {
  try {
    const db = getFirestore(app);
    const postsRef = db.collection("posts");
    const snapshot = await postsRef.get();

    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error('Error fetching posts:', err);
    return new Response("Failed to fetch posts", { status: 500 });
  }
};
