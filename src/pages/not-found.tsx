import { Link } from '@askrjs/askr/router';
import { sitePath } from '../site-base';

export function NotFoundPage() {
  return (
    <section class="not-found" aria-labelledby="not-found-title">
      <p class="kicker">404</p>
      <h1 id="not-found-title">Page Not Found</h1>
      <p class="lede">This page could not be found on Vegbooks.</p>
      <Link href={sitePath('/')}>Return Home</Link>
    </section>
  );
}
