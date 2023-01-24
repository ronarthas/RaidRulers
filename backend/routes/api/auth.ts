import { Hono } from "https://deno.land/x/hono/mod.ts";
const auth = new Hono();

auth.post("/login", async (ctx: any) => {
  console.log("on arrive dans login");
  const data = await ctx.req.json();
  return ctx.json({ message: data });
});
auth.post("/register", async (ctx: any) => {
  console.log("on arrive dans register");
});

auth.post("/create-account", async (c) => {
  const body = await c.req.json();
  const res = await addUSer(body);
  console.log(res);
  return c.json({ message: res });
});

export default auth;
