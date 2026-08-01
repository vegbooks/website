import type { PostMetadata } from '../content/types';

export const article = {
  "id": "845",
  "slug": "ladybug-girl",
  "url": "/reviews/ladybug-girl/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/16/ladybug-girl/",
  "title": "Ladybug Girl",
  "publishedAt": "2010-04-16",
  "publishedLabel": "April 16th, 2010",
  "excerpt": "Wife-and-husband team Jacky Davis and David Soman have collaborated on a delightful book that follows preschool-aged Lulu through a morning when she must entertain herself. Proclaiming herself Ladybug Girl and…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Ladybug Girl",
    "width": 210,
    "height": 139
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
      "name": "Ants",
      "slug": "ants",
      "url": "/topics/ants/"
    },
    {
      "name": "David Soman",
      "slug": "david-soman",
      "url": "/topics/david-soman/"
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
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jacky Davis",
      "slug": "jacky-davis",
      "url": "/topics/jacky-davis/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sharks",
      "slug": "sharks",
      "url": "/topics/sharks/"
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
    "description": "Wife-and-husband team Jacky Davis and David Soman have collaborated on a delightful book that follows preschool-aged Lulu through a morning when she must entertain herself. Proclaiming herself Ladybug Girl and…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "I’m a Vegetarian",
    "url": "/reviews/im-a-vegetarian/"
  },
  "next": {
    "title": "Good Dog",
    "url": "/reviews/good-dog/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Ladybug Girl"} width={210} height={139} /></a>
      </figure>
      <p>{"Wife-and-husband team Jacky Davis and David Soman have collaborated on a delightful book that follows preschool-aged Lulu through a morning when she must entertain herself. Proclaiming herself "}<a href={"http://www.ladybuggirl.com/"} target="_blank" rel="noopener noreferrer">{"Ladybug Girl"}</a>{" and flanked by her loyal dog Bingo, Lulu discovers that she’s fearless and powerful. She skips through a “lake” that may or may not have sharks beneath its surface and rescues ants from having to climb over a rock."}</p>
      <p>{"This lovely book is priceless not only for its portrayal of a young girl but also for its depiction of a "}<a href={"http://www.vegblogger.com/blog/2010/01/getting-kids-interested-in-nature-and-animals.html"} target="_blank" rel="noopener noreferrer">{"child in harmony with nature and her animal companion"}</a>{". And it’s a book parents and kids alike will enjoy reading and rereading."}</p>
      <p>{"Ages 3 to 7."}</p>
    </div>
  );
}
