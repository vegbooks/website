import { state, type Props } from '@askrjs/askr';
import { SearchIcon } from '@askrjs/lucide/icons/search';
import { currentRoute, Link } from '@askrjs/askr/router';
import { NavLink } from '@askrjs/themes/components';
import { isActiveSitePath, sitePath } from '../site-base';
import { OptimizedImage } from '../components/optimized-image';

const navItems = [
  ['Home', '/'],
  ['Favorites', '/favorites/'],
  ['Books', '/books/'],
  ['Movies, Etc.', '/media/'],
  ['Contributors', '/contributors/'],
  ['About', '/about/'],
  ['Topics', '/topics/'],
  ['Browse by Year', '/archive/'],
] as const;

const socialItems = [
  ['Twitter', 'https://twitter.com/vegbooks', '/assets/social-twitter.png'],
  ['Facebook', 'https://facebook.com/vegbooks', '/assets/social-facebook.png'],
  [
    'Pinterest',
    'https://www.pinterest.com/jessicavegbooks/',
    '/assets/social-pinterest.png',
  ],
] as const;

export function SiteLayout({ children }: Props) {
  const [menuOpen, setMenuOpen] = state(false);
  const currentPath = currentRoute().path;
  return (
    <>
      <a class="skip-link" href="#main-content">
        Skip to content
      </a>
      <div class="site-shell">
        <header class="site-header">
          <Link
            class="wordmark"
            href={sitePath('/')}
            aria-label="Vegbooks home"
          >
            <picture>
              <source
                type="image/avif"
                srcset={sitePath('/assets/vegbooks-wordmark-640.avif')}
              />
              <img
                {...{
                  loading: 'eager',
                  decoding: 'async',
                  fetchpriority: 'high',
                }}
                src={sitePath('/assets/vegbooks-wordmark-640.webp')}
                alt="Vegbooks"
                width="640"
                height="328"
              />
            </picture>
          </Link>
          <button
            class="menu-button"
            type="button"
            aria-expanded={menuOpen() ? 'true' : 'false'}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">☰</span> Menu
          </button>
          <nav
            id="primary-navigation"
            class={`site-nav${menuOpen() ? ' site-nav--open' : ''}`}
            aria-label="Primary navigation"
          >
            {navItems.map(([label, href]) => (
              <NavLink
                key={href}
                href={sitePath(href)}
                active={isActiveSitePath(currentPath, href)}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              class="site-nav__search"
              aria-label="Search"
              href={sitePath('/search/')}
              active={isActiveSitePath(currentPath, '/search/')}
              title="Search"
              onClick={() => setMenuOpen(false)}
            >
              <SearchIcon size={18} aria-hidden="true" />
            </NavLink>
            <span class="site-nav__social" aria-label="Vegbooks social sites">
              {socialItems.map(([label, href, icon]) => (
                <a
                  key={href}
                  class="social-link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Vegbooks on ${label}`}
                >
                  <OptimizedImage src={icon} alt="" width="24" height="24" />
                </a>
              ))}
            </span>
          </nav>
        </header>
        <main id="main-content">{children}</main>
        <footer class="site-footer">
          <p>Vegbooks reviews were published from 2009–2021.</p>
        </footer>
      </div>
    </>
  );
}
