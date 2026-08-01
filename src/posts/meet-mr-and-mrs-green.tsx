import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6987",
  "slug": "meet-mr-and-mrs-green",
  "url": "/reviews/meet-mr-and-mrs-green/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/02/20/meet-mr-and-mrs-green/",
  "title": "Meet Mr. and Mrs. Green",
  "publishedAt": "2012-02-20",
  "publishedLabel": "February 20th, 2012",
  "excerpt": "I love Keith Baker’s Who Is the Beast? but had never read any of his other children’s books, so when I discovered he had written a series about two alligators, I eagerly sought out a book for my six-year-old…",
  "image": {
    "src": "/media/2012/02/9780547745596-lres.jpg",
    "alt": "Meet Mr. and Mrs. Green",
    "width": 199,
    "height": 300
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
      "name": "Alligators",
      "slug": "alligators",
      "url": "/topics/alligators/"
    },
    {
      "name": "Camping",
      "slug": "camping",
      "url": "/topics/camping/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Keith Baker",
      "slug": "keith-baker",
      "url": "/topics/keith-baker/"
    },
    {
      "name": "Marriage",
      "slug": "marriage",
      "url": "/topics/marriage/"
    },
    {
      "name": "Series",
      "slug": "series",
      "url": "/topics/series/"
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
    "description": "I love Keith Baker’s Who Is the Beast? but had never read any of his other children’s books, so when I discovered he had written a series about two alligators, I eagerly sought out a book for my six-year-old…",
    "image": "https://vegbooks.org/media/2012/02/9780547745596-lres.jpg"
  },
  "previous": {
    "title": "Good Dog, Aggie",
    "url": "/reviews/good-dog-aggie/"
  },
  "next": {
    "title": "Over in the Forest",
    "url": "/reviews/over-in-the-forest/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/02/9780547745596-lres.jpg"}><img src={"/media/2012/02/9780547745596-lres.jpg"} alt={"Meet Mr. and Mrs. Green"} width={199} height={300} /></a>
      </figure>
      <p>{"I love Keith Baker’s "}<a href={"/reviews/who-is-the-beast/"}><em>{"Who Is the Beast?"}</em></a>{" but had never read any of "}<a href={"http://keithbakerbooks.com/"} target="_blank" rel="noopener noreferrer">{"his other children’s books"}</a>{", so when I discovered he had written a series about two alligators, I eagerly sought out a book for my six-year-old daughter."}</p>
      <p><em>{"Meet Mr. and Mrs. Green"}</em>{" features three short chapters/ stories, at least one of which is also sold separately as a Level 2 early reader, "}<em>{"Camping"}</em>{"(pictured at right). The stories are charming, featuring vignettes in the couple’s life that children can readily relate to. In "}<em>{"Camping"}</em>{", for example, Mrs. Green plans a camping trip. Mr. Green has some fears about the trip, but goes along anyways. The couple walk and walk, ending up in the perfect camping spot: their backyard."}</p>
      <p>{"What I like most about this book is that each story clearly illustrates the love that the "}<a href={"http://www.literaritea.blogspot.com/2012/01/mr-and-mrs-green.html"} target="_blank" rel="noopener noreferrer">{"two alligators"}</a>{" have for each other. Despite their differences, they’re kind and companionable, and they clearly have each other’s back. Given how married life is portrayed in contemporary culture, it’s nice to see two spouses who are clearly sweet on each other. How lovely too to learn that they’re based on "}<a href={"http://oregonread.org/conf_handouts_07/antikajian_07/Activities%20for%20The%20Greens.pdf"} target="_blank" rel="noopener noreferrer">{"Keith Baker’s own parents"}</a>{"!"}</p>
      <p>{"Vegetarian and vegan parents should be aware that "}<em>{"Camping"}</em>{"refers to a bridge the alligators cross as “the best fishing spot in town,” and "}<em>{"100 Pancakes"}</em>{" depicts the alligators preparing and eating an obscene number (100, in fact) of pancakes made with eggs."}</p>
      <p>{"Ages 5 to 8."}</p>
    </div>
  );
}
