import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

interface ItemProps {
    href : string,
    text: string
}
export const Item = component$((props: ItemProps) => {
    const nav = useNavigate();
    return (
        <li onClick$={()=>{nav.path = props.href}}> {props.text}</li>
    )
  });
