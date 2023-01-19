import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const formData = useStore({ login:"", password:""})



  return (
  <>
    <form>
        <div class="flex flex-col">
        <label> login</label>
        <input  value="" onInput$={(ev)=> (formData.login (ev.target as HTMLInputElement).value)} type="text" name='login' class="border"/>
        </div>
      
        <br/>
        <div class="flex flex-col">
        <label> password</label>
        <input onInput$={(ev)=> (formData.password (ev.target as HTMLInputElement).value)} type="text" name='login' class="border"/>
        </div>
        <button type='submit' onClick$={()=> console.log(formData)}>envoyer</button>
      </form>
  </>
  );
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
