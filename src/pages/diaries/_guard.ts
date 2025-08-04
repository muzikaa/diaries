// src/pages/diaries/_guard.ts
import type { APIRoute } from "astro";
import { app } from "../../firebase/server";
import { getAuth } from "firebase-admin/auth";

export async function requireUser(Astro: any) {
  const auth = getAuth(app);
  const sessionCookie = Astro.cookies.get("__session")?.value;

  if (!sessionCookie) throw new Error("Unauthorized");

  try {
    const decoded = await auth.verifySessionCookie(sessionCookie);
    return await auth.getUser(decoded.uid);
  } catch {
    throw new Error("Unauthorized");
  }
}