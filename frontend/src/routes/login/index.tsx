import { component$, useStore,$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {LoginForm} from '../../components/forms/Login';

export default component$(() => {

  return(
    <>
    <LoginForm/>
    </>
  )
});



export const head: DocumentHead = {
  title: 'Raid Rulers | login',
  meta: [
    {
      name: 'description',
      content: 'Raid rules connection page',
    },
  ],
};
