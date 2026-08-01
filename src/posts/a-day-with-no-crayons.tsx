import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5574",
  "slug": "a-day-with-no-crayons",
  "url": "/reviews/a-day-with-no-crayons/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/11/a-day-with-no-crayons/",
  "title": "A Day with No Crayons",
  "publishedAt": "2011-07-11",
  "publishedLabel": "July 11th, 2011",
  "excerpt": "A Day with No Crayons is likely to inspire you to view the world differently — and I love any book that can do that. This charming picture book by Elizabeth Rusch and Chad Cameron follows budding artist Liza through…",
  "image": {
    "src": "/media/2011/07/daynocrayons.jpg",
    "alt": "A Day with No Crayons",
    "width": 210,
    "height": 177
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
      "name": "Art",
      "slug": "art",
      "url": "/topics/art/"
    },
    {
      "name": "Artists",
      "slug": "artists",
      "url": "/topics/artists/"
    },
    {
      "name": "Chad Cameron",
      "slug": "chad-cameron",
      "url": "/topics/chad-cameron/"
    },
    {
      "name": "Creativity",
      "slug": "creativity",
      "url": "/topics/creativity/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Elizabeth Rusch",
      "slug": "elizabeth-rusch",
      "url": "/topics/elizabeth-rusch/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "A Day with No Crayons is likely to inspire you to view the world differently — and I love any book that can do that. This charming picture book by Elizabeth Rusch and Chad Cameron follows budding artist Liza through…",
    "image": "https://vegbooks.org/media/2011/07/daynocrayons.jpg"
  },
  "previous": {
    "title": "Lost and Found: Three Dog Stories",
    "url": "/reviews/lost-and-found-three-dog-stories/"
  },
  "next": {
    "title": "Bear-ly There",
    "url": "/reviews/bear-ly-there/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/daynocrayons.jpg"}><img src={"/media/2011/07/daynocrayons.jpg"} alt={"A Day with No Crayons"} width={210} height={177} /></a>
      </figure>
      <p><em><a href={"http://www.elizabethrusch.com/MyBooks/AllBooks/ADayWithNoCrayons.aspx"} target="_blank" rel="noopener noreferrer">{"A Day with No Crayons"}</a></em>{" is likely to inspire you to view the world differently — and I love any book that can do that. This charming picture book by Elizabeth Rusch and "}<a href={"http://www.cameronstoryboards.com/about/"} target="_blank" rel="noopener noreferrer">{"Chad Cameron"}</a>{" follows budding artist Liza through a day in which she loses access to crayons (for drawing on the wall, tsk tsk) and learns to see the makings of art all around her."}</p>
      <p>{"The transformation is fun to watch. When Liza loses her crayons, she asks, “A whole day with no crayons?” and is portrayed entirely in tones of gray. But soon she notices colors in her mood (midnight blue), a flower (cornflower blue), a dandelion (laser lemon) — and everywhere! (Perceptive readers will observe that her toothpaste in the sink resembles a Van Gogh painting, and her stomping along a basketball court is reminiscent of a Pollock.) By the end of the day, she says that she can go another day without crayons, and it’s obvious why — she’s created a stunning self-portrait out of objects found in her room, including her bed, teddy bear, and soccer ball."}</p>
      <p>{"Liza is accompanied throughout the story by a golden dog, and many of her artistic creations focus on nature. All the more reasons to love this book!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
