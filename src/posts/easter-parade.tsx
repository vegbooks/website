import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4658",
  "slug": "easter-parade",
  "url": "/reviews/easter-parade/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/31/easter-parade/",
  "title": "Easter Parade",
  "publishedAt": "2011-03-31",
  "publishedLabel": "March 31st, 2011",
  "excerpt": "A lovely, vegan-friendly Easter book/song about an Easter bonnet and going through town for the Easter parade. I picked up this story serendipitously at the library and was hopeful that I had found a chicken-free,…",
  "image": {
    "src": "/media/2011/04/easter-parade-hc-c.jpg",
    "alt": "Easter Parade",
    "width": 210,
    "height": 163
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Easter",
      "slug": "easter",
      "url": "/topics/easter/"
    },
    {
      "name": "Holiday",
      "slug": "holiday",
      "url": "/topics/holiday/"
    },
    {
      "name": "Holiday Books",
      "slug": "holiday-books",
      "url": "/topics/holiday-books/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Irving Berlin",
      "slug": "irving-berlin",
      "url": "/topics/irving-berlin/"
    },
    {
      "name": "Lisa McCue",
      "slug": "lisa-mccue",
      "url": "/topics/lisa-mccue/"
    },
    {
      "name": "New York City",
      "slug": "new-york-city",
      "url": "/topics/new-york-city/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "A lovely, vegan-friendly Easter book/song about an Easter bonnet and going through town for the Easter parade. I picked up this story serendipitously at the library and was hopeful that I had found a chicken-free,…",
    "image": "https://vegbooks.org/media/2011/04/easter-parade-hc-c.jpg"
  },
  "previous": {
    "title": "The Kids’ Solar Energy Book",
    "url": "/reviews/the-kids-solar-energy-book/"
  },
  "next": {
    "title": "Peter, the Knight with Asthma",
    "url": "/reviews/peter-the-knight-with-asthma/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/easter-parade-hc-c.jpg"}><img src={"/media/2011/04/easter-parade-hc-c.jpg"} alt={"Easter Parade"} width={210} height={163} /></a>
      </figure>
      <p>{"A lovely, vegan-friendly Easter book/song about an Easter bonnet and going through town for the Easter parade. I picked up this story serendipitously at the library and was hopeful that I had found a chicken-free, eggless story for Easter. I lucked out because not only is "}<em>{"Easter Parade"}</em>{" animal-friendly (well, there are some illustrations of eggs that decorate the bonnet but I suspect they are plastic since no child I know decorates her hat with real eggs then wears it about town), but it is also non-religious in it’s fun celebration of spring and fathers and daughters."}</p>
      <p>{"The story narration itself is the "}<a href={"http://en.wikipedia.org/wiki/Irving_Berlin"} target="_blank" rel="noopener noreferrer">{"composer Irving Berlin"}</a>{"’s song lyrics but Lisa McCue takes the liberty of translating them through images of a father speaking/singing to his daughter (sorry, boys). Although Berlin’s lyrics may have pointed more towards a gentlemanly parade date between two people in a romantic relationship, McCue interprets the words in a more innocent and tender fashion as she depicts a father bunny proudly taking his young daughter through town to the parade. The cute, detailed pictures practically tell a whole new story from the lyrics as the daughter bunny receives additions to her hand-decorated hat from friendly townsanimals while she and her father walk cheerfully through town. I enjoyed the bits of humor (such as the renaming of famous New York City stores to the likes of Bird Orf Goodman and having to chase down the spectacular wind-blown bonnet) interspersed through the illustrations as well. Several pages at the end of the book contain Berlin’s words and music for those inclined to sing and play it. I enjoyed this upbeat, colorful tipping-the-hat to spring and warm relationships. (And bonus points to Berlin and McCue that I didn’t have to veganize it!)"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
