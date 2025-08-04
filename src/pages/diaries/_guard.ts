// src/pages/diaries/_guard.ts
import type { APIRoute } from "astro";
import { app } from "../../firebase/server";
import { getAuth } from "firebase-admin/auth";

export async function requireUser(Astro: any) {
  const auth = getAuth(app);
  const sessionCookie = Astro.cookies.get("__session")?.value;

  if (!sessionCookie) {
    return Astro.redirect("/diaries/signin");
  }

  try {
    const decoded = await auth.verifySessionCookie(sessionCookie);
    const user = await auth.getUser(decoded.uid);
    return user;
  } catch {
    return Astro.redirect("/diaries/signin");
  }
}
