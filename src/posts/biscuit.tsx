import type { PostMetadata } from '../content/types';

export const article = {
  "id": "321",
  "slug": "biscuit",
  "url": "/reviews/biscuit/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/27/biscuit/",
  "title": "Biscuit",
  "publishedAt": "2009-11-27",
  "publishedLabel": "November 27th, 2009",
  "excerpt": "Biscuit, the little golden pup in Alyssa Satin Capucilli and Pat Schories’s early reader book, wants all the same things as kids do when he’s getting ready for bed. He wants a snack, a drink, a kiss, a hug, one more…",
  "image": {
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Biscuit",
    "width": 210,
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
      "name": "Alyssa Satin Capucilli",
      "slug": "alyssa-satin-capucilli",
      "url": "/topics/alyssa-satin-capucilli/"
    },
    {
      "name": "Biscuit",
      "slug": "biscuit",
      "url": "/topics/biscuit/"
    },
    {
      "name": "Books that Teach Empathy",
      "slug": "books-that-teach-empathy",
      "url": "/topics/books-that-teach-empathy/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Puppy",
      "slug": "puppy",
      "url": "/topics/puppy/"
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
    "description": "Biscuit, the little golden pup in Alyssa Satin Capucilli and Pat Schories’s early reader book, wants all the same things as kids do when he’s getting ready for bed. He wants a snack, a drink, a kiss, a hug, one more…",
    "image": "https://vegbooks.org/media/2011/07/toddler-baby-reading.jpg"
  },
  "previous": {
    "title": "Berenstains’ A Book",
    "url": "/reviews/berenstains-a-book/"
  },
  "next": {
    "title": "Speak! Children's Book Illustrators Brag About Their Dogs",
    "url": "/reviews/speak-childrens-book-illustrators-brag-about-their-dogs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/toddler-baby-reading.jpg"}><img src={"/media/2011/07/toddler-baby-reading.jpg"} alt={"Biscuit"} width={210} height={300} /></a>
      </figure>
      <p>{"Biscuit, the little golden pup in "}<a href={"http://www.alyssacapucilli.com/"} target="_blank" rel="noopener noreferrer">{"Alyssa Satin Capucilli"}</a>{" and "}<a href={"http://biography.jrank.org/pages/1891/Schories-Pat-1952.html"} target="_blank" rel="noopener noreferrer">{"Pat Schories’s"}</a>{" early reader book, wants all the same things as kids do when he’s getting ready for bed. He wants a snack, a drink, a kiss, a hug, one more story, the light on … and his young friend patiently provides them all. By the end of the night, he’s curled up next to her bed and the two are sharing the duvet."}</p>
      <p>{"Little kids will identify with Biscuit and will learn that companion animals need lots of love, care, and attention."}</p>
      <p>{"Ages 4-6."}</p>
    </div>
  );
}
