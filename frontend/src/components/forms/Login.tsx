import { component$, useStore,$ } from '@builder.io/qwik';

export const LoginForm = component$(()=>{
    const formData = useStore({
        login:'',
        passwod:''
    });

    const submitForm = $(async()=>{
        const res = await fetch(`http://localhost:8000/api/auth/login`,{
            method:'POST',
            body:JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        const data =  await res.json()
        console.log(data)
    })
    return(
        <>
        <form preventdefault:submit onSubmit$={()=>submitForm()}>
            <input class="border" type='text' value={formData.login} onInput$={(ev)=> (formData.login = (ev.target as HTMLInputElement).value)}/>
            <input class="border" type='password' value={formData.passwod} onInput$={(ev)=> (formData.passwod = (ev.target as HTMLInputElement).value)}/>
        <button type='submit'>envoyer</button>
        </form>
        </>
    )
})