import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { logger } from "https://deno.land/x/hono/middleware.ts";
import { cors } from "https://deno.land/x/hono/middleware.ts";

import auth from "./routes/api/auth.ts";

const app = new Hono();

app.use("*", logger());
app.use(
  "/api/*",
  cors({
    origin: "*",
  })
);
app.route("/api/auth", auth);

serve(app.fetch);
