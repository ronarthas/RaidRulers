import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { Navbar } from '~/components/nav/navbar';

export default component$(() => {
  return (
    <>
      <main>
        <Navbar/>
        
        <section>
          <Slot />
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
});
