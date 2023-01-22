import { component$  } from "@builder.io/qwik";

import { Item } from "./Item";

const Navbar = component$(() => {
  return (
    <nav class="flex justify-around ">
      <div><h1>LOGO</h1></div>
      <div class="flex gap-4">
        <Item href="/" text="Acceuil" />
        <Item href="/login" text="Connexion" />
        <Item href="/support/contact" text="Contact" />
      </div>
      <div><p>Se connecter</p></div>
    </nav>
  );
});

export { Navbar };
