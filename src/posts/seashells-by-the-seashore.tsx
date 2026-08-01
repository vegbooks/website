import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8063",
  "slug": "seashells-by-the-seashore",
  "url": "/reviews/seashells-by-the-seashore/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/08/12/seashells-by-the-seashore/",
  "title": "Seashells by the Seashore",
  "publishedAt": "2012-08-12",
  "publishedLabel": "August 12th, 2012",
  "excerpt": "Seashells by the Seashore by Marianne Berkes is an interactive guide to seashells which tells a delightful story about children combing the sandy shore for shells to give to Sue’s grandmother as a birthday present.…",
  "image": {
    "src": "/media/2012/08/shells-cover.jpg",
    "alt": "Seashells by the Seashore",
    "width": 210,
    "height": 180
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
      "name": "Beach",
      "slug": "beach",
      "url": "/topics/beach/"
    },
    {
      "name": "Biology",
      "slug": "biology",
      "url": "/topics/biology/"
    },
    {
      "name": "Counting",
      "slug": "counting",
      "url": "/topics/counting/"
    },
    {
      "name": "E-Books",
      "slug": "e-books",
      "url": "/topics/e-books/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Grandparents",
      "slug": "grandparents",
      "url": "/topics/grandparents/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Marianne Berkes",
      "slug": "marianne-berkes",
      "url": "/topics/marianne-berkes/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Robert Noreika",
      "slug": "robert-noreika",
      "url": "/topics/robert-noreika/"
    },
    {
      "name": "Sea Life",
      "slug": "sea-life",
      "url": "/topics/sea-life/"
    },
    {
      "name": "Seashells",
      "slug": "seashells",
      "url": "/topics/seashells/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "Seashells by the Seashore by Marianne Berkes is an interactive guide to seashells which tells a delightful story about children combing the sandy shore for shells to give to Sue’s grandmother as a birthday present.…",
    "image": "https://vegbooks.org/media/2012/08/shells-cover.jpg"
  },
  "previous": {
    "title": "The One and Only Ivan",
    "url": "/reviews/the-one-and-only-ivan/"
  },
  "next": {
    "title": "Christian, the Hugging Lion",
    "url": "/reviews/christian-the-hugging-lion/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/08/shells-cover.jpg"}><img src={"/media/2012/08/shells-cover.jpg"} alt={"Seashells by the Seashore"} width={210} height={180} /></a>
      </figure>
      <p><em>{"Seashells by the Seashore"}</em>{" by Marianne Berkes is an interactive guide to seashells which tells a delightful story about children combing the sandy shore for shells to give to Sue’s grandmother as a birthday present. The story is close to my heart for it is reminiscent of childhood summers with my Nana at beaches in Massachusetts. The wonder of finding a seashell evokes curiosity and delight. It is amazing when you think that seashells, nature’s sculptures, are homes to sea dwelling creatures."}</p>
      <p>{"I like the various teaching components of the book: counting, recognition, and biology. The style encourages children to keep track of the number of shells collected and the type, univalve or bivalve. A guide in the lefthand column keeps track of the shape and color of each shell found."}</p>
      <p>{"The illustrations by Robert Noreika capture the beauty and the mystery of the seashore and all its creations. The use of watercolor makes the pages sparkle like sun on the water."}</p>
      <p>{"The addendum is good for older children 8 or 9 with inquisitive minds that want to know more. This a book targeted for children ages 4-9 and one I feel will be read again and again."}</p>
      <p><em><a href={"http://www.dawnpub.com/"} target="_blank" rel="noopener noreferrer">{"Dawn Publications"}</a>{" provided an ebook for review. The book is also available in print ("}<a href={"http://www.amazon.com/gp/product/1584690348/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1584690348&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{")."}</em></p>
    </div>
  );
}
