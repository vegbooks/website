import { routeData } from '@askrjs/askr/router';
import type { CollectionRouteData } from '../content/content';
import { CollectionTemplate } from '../templates';

export function HomePage() {
  const data = routeData<CollectionRouteData>();
  return (
    <CollectionTemplate collection={data.collection} sidebar={data.sidebar} />
  );
}
