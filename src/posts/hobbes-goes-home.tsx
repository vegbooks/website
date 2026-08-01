import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9826",
  "slug": "hobbes-goes-home",
  "url": "/reviews/hobbes-goes-home/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/08/28/hobbes-goes-home/",
  "title": "Hobbes Goes Home",
  "publishedAt": "2014-08-28",
  "publishedLabel": "August 28th, 2014",
  "excerpt": "Last year, I had the distinct pleasure of meeting author Tami Crupi Zeman, wife of Vermont radio personality Bruce Zeman, Jr. at the National Animal Rights Conference in DC. The animal-welfare activist pair had…",
  "image": {
    "src": "/media/2014/08/book-cover.jpg",
    "alt": "Book Cover",
    "width": 210,
    "height": 171
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
      "name": "Animal Welfare",
      "slug": "animal-welfare",
      "url": "/topics/animal-welfare/"
    },
    {
      "name": "Bruce Zeman",
      "slug": "bruce-zeman",
      "url": "/topics/bruce-zeman/"
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
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Shaunna Peterson",
      "slug": "shaunna-peterson",
      "url": "/topics/shaunna-peterson/"
    },
    {
      "name": "Tami Crupi Zeman",
      "slug": "tami-crupi-zeman",
      "url": "/topics/tami-crupi-zeman/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Last year, I had the distinct pleasure of meeting author Tami Crupi Zeman, wife of Vermont radio personality Bruce Zeman, Jr. at the National Animal Rights Conference in DC. The animal-welfare activist pair had…",
    "image": "https://vegbooks.org/media/2014/08/book-cover.jpg"
  },
  "previous": {
    "title": "Harry Potter and the Sorcerer’s Stone",
    "url": "/reviews/harry-potter-and-the-sorcerers-stone/"
  },
  "next": {
    "title": "Lena of Vegitopia and the Mystery of the Missing Animals",
    "url": "/reviews/lena-of-vegitopia-and-the-mystery-of-the-missing-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/hobbes-goes-home/"}><img src={"/media/2014/08/book-cover.jpg"} alt={"Book Cover"} width={210} height={171} /></a>
      </figure>
      <p>{"Last year, I had the distinct pleasure of meeting author Tami Crupi Zeman, wife of Vermont radio personality Bruce Zeman, Jr. at the National Animal Rights Conference in DC. The animal-welfare activist pair had written a book, "}<em><a href={"http://www.bruceandhobbes.com/"} target="_blank" rel="noopener noreferrer">{"Hobbes Goes Home"}</a></em>{", about Mr. Zeman’s canine co-star and his path from a domestic violence-plagued residence to the shelter and then finally to a home any dog would envy: two loving human caretakers and a fellow doggy playmate."}</p>
      <p>{"While there are many shelter-related books in the kid lit world, what sets Hobbes apart is its anti-bullying and forgiveness messaging, coupled with more common themes of hope, compassion, adoption, and family. Artist "}<a href={"http://www.shaunnapeterson.com/"} target="_blank" rel="noopener noreferrer">{"Shaunna Peterson’s"}</a>{" colorful and expressive illustrations engage and enable readers to empathize with Hobbes’ range of emotions – from despair and loneliness to curiosity to joy and excitement. Here’s one excerpt of when he first arrives at the shelter –"}</p>
      <blockquote>
        <p>{"Hobbes was confused. His mommy put him in the car and brought him to a big brown building. They went inside and she handed him to a lady he had never seen before. What was mommy doing? Where were they? Dogs were barking, and there were cats too. Hobbes didn’t understand why his mommy brought him to this strange place."}</p>
      </blockquote>
      <p>{"Outside of the pages of their book, the Bruce and Hobbes team is the only human-canine radio duo in the U.S. and they’re aiming to read their book in every school in Vermont! And if that’s not enough of a perk to support this publication, $1.00 from the sale of each book will benefit the Homeward Bound Animal Welfare Center in Middlebury, Vermont."}</p>
      <p>{"Ages 4 – 8"}</p>
    </div>
  );
}
