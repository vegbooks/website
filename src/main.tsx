import { createSPA, hydrateSPA } from '@askrjs/askr/boot';
import { createVegbooksRouteRegistry } from './pages/_routes';
import { siteBasePath } from './site-base';
import './styles.css';

const routeRegistry = createVegbooksRouteRegistry(siteBasePath);

async function main() {
  const root = document.getElementById('app');
  if (!root) {
    throw new Error('Missing #app root element.');
  }

  if (root.childNodes.length > 0) {
    await hydrateSPA({
      root,
      registry: routeRegistry,
      hydrate: {
        // Static HTML cannot include query-derived client state yet.
        // https://github.com/askrjs/askr/issues/253
        verifyMarkup: window.location.search === '',
      },
    });
    return;
  }

  await createSPA({ root, registry: routeRegistry });
}

void main();
