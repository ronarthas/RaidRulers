import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
  <>
    <p>ok on c'est débarasser de la merde</p>
  </>
  );
});

export const head: DocumentHead = {
  title: 'Raid Rulers',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
