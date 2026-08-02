import { describe, expect, it } from 'vitest';
import { clientRouteMeta } from './client-metadata';
import { routeMeta } from './metadata';

describe('client route metadata', () => {
  it.each(['/', '/search/', '/404/'])(
    'matches static metadata for %s without loading the manifest chunk',
    async (path) => {
      expect(await clientRouteMeta(path)).toEqual(routeMeta(path));
    }
  );
});
