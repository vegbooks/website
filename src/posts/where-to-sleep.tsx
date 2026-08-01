import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8951",
  "slug": "where-to-sleep",
  "url": "/reviews/where-to-sleep/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/06/12/where-to-sleep/",
  "title": "Where to Sleep",
  "publishedAt": "2013-06-12",
  "publishedLabel": "June 12th, 2013",
  "excerpt": "I received a review copy of Where to Sleep by Kandy Radzinki (Amazon affiliate link) in board book form (it is also available in hardcover) from Sleeping Bear Press along with a host of other books from the company…",
  "image": {
    "src": "/media/2013/06/where-to-sleep-board-cover.jpg",
    "alt": "Where_To_Sleep_BoardCover",
    "width": 210,
    "height": 210
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Board Books",
      "slug": "board-books",
      "url": "/topics/board-books/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Kandy Radzinki",
      "slug": "kandy-radzinki",
      "url": "/topics/kandy-radzinki/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "I received a review copy of Where to Sleep by Kandy Radzinki (Amazon affiliate link) in board book form (it is also available in hardcover) from Sleeping Bear Press along with a host of other books from the company…",
    "image": "https://vegbooks.org/media/2013/06/where-to-sleep-board-cover.jpg"
  },
  "previous": {
    "title": "The Dark",
    "url": "/reviews/the-dark/"
  },
  "next": {
    "title": "Steam Train, Dream Train",
    "url": "/reviews/steam-train-dream-train/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/06/where-to-sleep-board-cover.jpg"}><img src={"/media/2013/06/where-to-sleep-board-cover.jpg"} alt={"Where_To_Sleep_BoardCover"} width={210} height={210} /></a>
      </figure>
      <p>{"I received a review copy of "}<em>{"Where to Sleep"}</em>{" by Kandy Radzinki ("}<a href={"http://www.amazon.com/gp/product/1585365351/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1585365351&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") in board book form (it is also available in hardcover) from Sleeping Bear Press along with a host of other books from the company for review. It tells the story of an orange tabby kitten wondering where the best place to sleep would be. The kitten ponders sleeping with a calf in the field, in a vegetable patch, with the chickens, on a porch swing, in a shoe, and on an armchair before settling at the feet of her human friend. I’m assuming that the kitten lives in and around a storybook-style farm since there is just one cow in the field of grass and there are even bunnies frolicking in the vegetable patch but I honestly don’t think this is problematic and any kitten would love to live in a place with so much to explore."}</p>
      <p>{"Another great bedtime choice, the book ends with a night scene. The illustrations are detailed, which I appreciated because children will love the lifelike style as they follow along with the kitten. Ages 0 and up."}</p>
    </div>
  );
}
