import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { logger } from "https://deno.land/x/hono/middleware.ts";

const app = new Hono();

app.use("*", logger());
app.get("/", (c) => c.text("Hello! Hono!"));

serve(app.fetch);
