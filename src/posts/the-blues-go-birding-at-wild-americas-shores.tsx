import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2820",
  "slug": "the-blues-go-birding-at-wild-americas-shores",
  "url": "/reviews/the-blues-go-birding-at-wild-americas-shores/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/04/the-blues-go-birding-at-wild-americas-shores/",
  "title": "The Blues Go Birding at Wild America’s Shores",
  "publishedAt": "2010-08-04",
  "publishedLabel": "August 4th, 2010",
  "excerpt": "The Blues Go Birding is a nice introduction to ornithology as well as a jaunt through geography for children and adults. This deceivingly slim paperback is packed with fun and educational information about birds…",
  "image": {
    "src": "/media/2010/08/blues2-cmyk-2in.jpg",
    "alt": "The Blues Go Birding at Wild America’s Shores",
    "width": 210,
    "height": 190
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "The Blues Go Birding is a nice introduction to ornithology as well as a jaunt through geography for children and adults. This deceivingly slim paperback is packed with fun and educational information about birds…",
    "image": "https://vegbooks.org/media/2010/08/blues2-cmyk-2in.jpg"
  },
  "previous": {
    "title": "My Uncle Martin’s Big Heart",
    "url": "/reviews/my-uncle-martins-big-heart/"
  },
  "next": {
    "title": "One Smart Goose",
    "url": "/reviews/one-smart-goose/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/blues2-cmyk-2in.jpg"}><img src={"/media/2010/08/blues2-cmyk-2in.jpg"} alt={"The Blues Go Birding at Wild America’s Shores"} width={210} height={190} /></a>
      </figure>
      <p><em>{"The Blues Go Birding"}</em>{" is a nice introduction to ornithology as well as a jaunt through geography for children and adults. This deceivingly slim paperback is packed with fun and educational information about birds along America’s shoreline and various regions, refuges, and parks that are bird-friendly. The book contains a storyline narrated by five bird characters who are introduced on the title page, large and colorful illustrations of each of the 13 birds in their environment, a little “bird note” trivia box, a geographical note of where the bird can be found, and field guide info like wingspan and food for each bird. It was a little overwhelming when I first cracked the book open but readers can select which sections to focus on, instead of trying to read all the parts at once."}</p>
      <p>{"Although geared towards an older crowd than my preschooler, it still held her interest and she enjoyed the cartoonish bluebird characters who fly through the pages to describe various birds. The inane bluebird comments in the comic speech bubbles will capture children’s interest since it did my daughter’s."}</p>
      <p>{"Veg parents should note there are a couple bird illustrations with fish in their mouths and noted food sources for all the birds include fish, insects, amphibians, etc. (The great blue heron can also eat small mammals!)"}</p>
      <p>{"Perfect for the road-tripping "}<a href={"http://www.vegsource.com/homeschool/"} target="_blank" rel="noopener noreferrer">{"homeschool"}</a>{" parents, teachers focusing on a bird/geography unit, or just for bird lovers and watchers."}</p>
      <p>{"Ages 5-9."}</p>
    </div>
  );
}
