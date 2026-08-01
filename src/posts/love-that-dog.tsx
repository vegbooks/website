import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3449",
  "slug": "love-that-dog",
  "url": "/reviews/love-that-dog/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/04/love-that-dog/",
  "title": "Love That Dog",
  "publishedAt": "2010-11-04",
  "publishedLabel": "November 4th, 2010",
  "excerpt": "Love That Dog by Sharon Creech is an extraordinary book of poetry, telling a story that will tug at your heartstrings. The book is a frank, open account of a young student who is both simultaneously discovering the…",
  "image": {
    "src": "/media/2010/11/love-that-dog.jpg",
    "alt": "Love That Dog",
    "width": 210,
    "height": 303
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
    },
    {
      "name": "Death of a Pet",
      "slug": "death-of-a-pet",
      "url": "/topics/death-of-a-pet/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "Sharon Creech",
      "slug": "sharon-creech",
      "url": "/topics/sharon-creech/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Love That Dog by Sharon Creech is an extraordinary book of poetry, telling a story that will tug at your heartstrings. The book is a frank, open account of a young student who is both simultaneously discovering the…",
    "image": "https://vegbooks.org/media/2010/11/love-that-dog.jpg"
  },
  "previous": {
    "title": "Dewey: There’s a Cat in the Library!",
    "url": "/reviews/dewey-theres-a-cat-in-the-library/"
  },
  "next": {
    "title": "Where There Once Was a Wood",
    "url": "/reviews/where-there-once-was-a-wood/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/11/love-that-dog.jpg"}><img src={"/media/2010/11/love-that-dog.jpg"} alt={"Love That Dog"} width={210} height={303} /></a>
      </figure>
      <p><em><a href={"http://www.powells.com/biblio/61-9780060852788-0"} target="_blank" rel="noopener noreferrer">{"Love That Dog"}</a></em>{" by "}<a href={"http://www.sharoncreech.com/"} target="_blank" rel="noopener noreferrer">{"Sharon Creech"}</a>{" is an extraordinary book of poetry, telling a story that will tug at your heartstrings. The book is a frank, open account of a young student who is both simultaneously discovering the power of writing and, as it turns out, processing the death of his beloved dog. As I observe my own child blossom in his writing program, Jack’s tale seems especially poignant and raw. Kids will enjoy this book on a different level, relating in many ways to the universal experiences of being a school kid (Jack takes his teacher’s suggestions and directions very literally) and working through their assignments. One of Ms. Creech’s gifts is to her ability to appeal to both adults and children on different levels, and though we never directly meet Jack’s teacher, Miss Stretchberry, it is clear from Jack’s responses to her directions that she is a supportive, influential educator."}</p>
      <p>{"Not only is this book an illustration of the love between a boy and his dog, it also gives us a reminder to respect childrens’ own processes. I suspect that many of the thoughts and feelings that Jack pens are not shared with many (if any) adults. Children who read this book may also be motivated to reach out to those who inspire them, as Jack does – successfully – with "}<a href={"http://en.wikipedia.org/wiki/Walter_Dean_Myers"} target="_blank" rel="noopener noreferrer">{"Walter Dean Myers"}</a>{"."}</p>
      <p>{"I highly recommend this book for ages 7-12."}</p>
    </div>
  );
}
