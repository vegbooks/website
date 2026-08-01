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
      hydrate: { verifyMarkup: true },
    });
    return;
  }

  await createSPA({ root, registry: routeRegistry });
}

void main();
