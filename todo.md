# Movie image replacement

Replace the generic movie stock image with rights-safe, movie-specific artwork.

## Current inventory

- [ ] Review all 67 movie reviews.
- [ ] Replace the stock image currently used by 63 reviews.
- [ ] Review the three existing distinct archived images and document their rights.
- [ ] Add an image for `bolt`, which currently has none.

## Licensing policy

- Accept public-domain, CC0, CC BY, and compatible CC BY-SA assets.
- Do not treat attribution alone as permission to reuse an image.
- Verify each asset's license on its original file page before importing it.
- Avoid licenses that restrict commercial reuse or modification so future hosting and presentation remain flexible.
- Do not use fair-use images copied from Wikipedia or other websites.
- Avoid TMDB images for the static archive: its developer terms require attribution and branding, limit caching, and restrict commercial use.

## Sources

- Search [Wikimedia Commons](https://commons.wikimedia.org/) and [Openverse](https://openverse.org/) for appropriate freely licensed or public-domain images.
- Follow [Wikimedia Commons reuse guidance](https://commons.wikimedia.org/wiki/Commons%3AReusing_content_outside_Wikimedia/en).
- Follow the [Openverse terms of service](https://docs.openverse.org/terms_of_service.html) and verify the license at the originating site.
- Use an original, movie-specific Vegbooks title card when no suitable licensed image exists. Do not reproduce protected characters, logos, or poster artwork in those title cards.

## Attribution data

- [ ] Add an image-attribution manifest containing the movie review slug, local asset path, title, creator, source URL, license name, license URL, and any modifications.
- [ ] Render attribution near each image and on a central image-credits page.
- [ ] Add attribution metadata to structured data where appropriate.

## Media processing

- [ ] Download approved assets rather than hotlinking them.
- [ ] Store them under stable year/month paths using lowercase kebab-case filenames.
- [ ] Preserve the best available source dimensions.
- [ ] When candidates normalize to the same filename and extension, keep the highest-resolution asset, then the largest file when dimensions tie.
- [ ] Preserve meaningful alternative text; write accurate alt text when none is supplied.

## Verification

- [ ] Fail content verification when an imported third-party image lacks complete attribution or an accepted license.
- [ ] Fail verification for non-kebab-case media paths, unresolved files, duplicate normalized names, or unsupported licenses.
- [ ] Confirm attribution and image layout at desktop and mobile sizes.
- [ ] Confirm that every movie review has a distinct licensed image or original title card.

No third-party movie imagery has been imported yet.
