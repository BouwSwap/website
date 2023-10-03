import { component$, useStylesScoped$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import styles from './index.scss?inline'

export default component$(() => {
    useStylesScoped$(styles)

    return (
        <div class="centered">
            <h1>Hi, 👋</h1>
            <p>Can't wait to see you when we launch, stay tuned!</p>
            <p>- Team BouwSwap</p>
            {/* <div class="icon">♻️</div> */}
            <image src="images/circle.png" alt="" />
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Home | BouwSwap',
    meta: [
        {
            name: 'BouwSwap website',
            content: 'BouwSwap website',
        },
    ],
}
