import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface ItemProps {
    href : string,
    text: string
}
export const Item = component$((props: ItemProps) => {
    return (
        <Link href={props.href}> {props.text}</Link>
    )
  });
