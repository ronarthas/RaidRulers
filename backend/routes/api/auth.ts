import { Hono } from "https://deno.land/x/hono/mod.ts";
const auth = new Hono();

auth.post("/login", async (ctx: any) => {
  console.log("on arrive dans login");
  const data = await ctx.req.json();
  return ctx.json({ message: data });
});

export default auth;
