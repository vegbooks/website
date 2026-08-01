import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7188",
  "slug": "the-great-turkey-race",
  "url": "/reviews/the-great-turkey-race/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/03/28/the-great-turkey-race/",
  "title": "The Great Turkey Race",
  "publishedAt": "2012-03-28",
  "publishedLabel": "March 28th, 2012",
  "excerpt": "The Great Turkey Racestarts with a silly premise. The turkeys have overheard the farmer saying one of them will be the Thanksgiving turkey, and so they begin a competition — the great turkey race — to determine who…",
  "image": {
    "src": "/media/2012/03/great-turkey-race.jpg",
    "alt": "The Great Turkey Race",
    "width": 210,
    "height": 265
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
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jim Paillot",
      "slug": "jim-paillot",
      "url": "/topics/jim-paillot/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Steve Metzger",
      "slug": "steve-metzger",
      "url": "/topics/steve-metzger/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Thanksgiving Books for Vegetarian Kids",
      "slug": "thanksgiving-books-for-vegetarian-kids",
      "url": "/topics/thanksgiving-books-for-vegetarian-kids/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
    },
    {
      "name": "Vegan Thanksgiving",
      "slug": "vegan-thanksgiving",
      "url": "/topics/vegan-thanksgiving/"
    },
    {
      "name": "Vegetarian Thanksgiving",
      "slug": "vegetarian-thanksgiving",
      "url": "/topics/vegetarian-thanksgiving/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "The Great Turkey Racestarts with a silly premise. The turkeys have overheard the farmer saying one of them will be the Thanksgiving turkey, and so they begin a competition — the great turkey race — to determine who…",
    "image": "https://vegbooks.org/media/2012/03/great-turkey-race.jpg"
  },
  "previous": {
    "title": "Something from Nothing",
    "url": "/reviews/something-from-nothing/"
  },
  "next": {
    "title": "The Lorax (2012)",
    "url": "/reviews/the-lorax/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/03/great-turkey-race.jpg"}><img src={"/media/2012/03/great-turkey-race.jpg"} alt={"The Great Turkey Race"} width={210} height={265} /></a>
      </figure>
      <p><em>{"The Great Turkey Race"}</em>{"starts with a silly premise. The turkeys have overheard the farmer saying one of them will be the Thanksgiving turkey, and so they begin a competition — the great turkey race — to determine who the lucky bird will be."}</p>
      <p>{"Of course, vegetarian and vegan kids know that the Thanksgiving turkey is not lucky at all, and fortunately, the turkeys in this story figure it out too, leaping over the barnyard fence to freedom."}</p>
      <p>{"Like "}<em><a href={"/reviews/turk-and-runt/"}>{"Turk and Runt"}</a></em>{"and "}<em><a href={"/reviews/run-turkey-run-2/"}>{"Run, Turkey, Run"}</a></em>{", this book gives kids a chance to root for the Thanksgiving turkey — all the while providing a non-threatening approach to beginning to think about "}<a href={"/reviews/garlic-onion-beet-spinach-mango-carrot-grapefruit-juice/"}>{"what it must be like to be food"}</a>{"."}</p>
      <p>{"With the turkeys gone, readers will be delighted to discover, the farmers sit down to a Thanksgiving dinner replete with veggies."}</p>
      <p>{"Although Thanksgiving comes but once a year, many vegetarian and vegan kids will enjoy this book year-round. And when you start planning your Thanksgiving fare, pair this delectable book with Nathalie VanBalen’s "}<em><a href={"/reviews/happy-thanksliving/"}>{"Happy Thanksliving"}</a></em>{" for a literary feast!"}</p>
      <p>{"Ages 3 to 7."}</p>
    </div>
  );
}
