import type { PostMetadata } from '../content/types';

export const article = {
  "id": "578",
  "slug": "some-dog",
  "url": "/reviews/some-dog/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/06/some-dog/",
  "title": "Some Dog!",
  "publishedAt": "2010-04-06",
  "publishedLabel": "April 6th, 2010",
  "excerpt": "Mary Casanova and Ard Hoyt’s picture book Some Dog! tells the story of George, a quiet but faithful canine companion who is suddenly displaced by the arrival of an energetic stray named Zippity. One night, a thunder…",
  "image": {
    "src": "/media/2010/04/9780374371333.jpg",
    "alt": "Some Dog!",
    "width": 210,
    "height": 241
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
      "name": "Ard Hoyt",
      "slug": "ard-hoyt",
      "url": "/topics/ard-hoyt/"
    },
    {
      "name": "Basset Hound",
      "slug": "basset-hound",
      "url": "/topics/basset-hound/"
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Mary Casanova",
      "slug": "mary-casanova",
      "url": "/topics/mary-casanova/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Stray",
      "slug": "stray",
      "url": "/topics/stray/"
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
    "description": "Mary Casanova and Ard Hoyt’s picture book Some Dog! tells the story of George, a quiet but faithful canine companion who is suddenly displaced by the arrival of an energetic stray named Zippity. One night, a thunder…",
    "image": "https://vegbooks.org/media/2010/04/9780374371333.jpg"
  },
  "previous": {
    "title": "Above All, Be Kind",
    "url": "/reviews/above-all-be-kind/"
  },
  "next": {
    "title": "The Great Pig Escape",
    "url": "/reviews/the-great-pig-escape/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/9780374371333.jpg"}><img src={"/media/2010/04/9780374371333.jpg"} alt={"Some Dog!"} width={210} height={241} /></a>
      </figure>
      <p><a href={"http://www.marycasanova.com/pages/books/bk_somedog.html"} target="_blank" rel="noopener noreferrer">{"Mary Casanova"}</a>{" and Ard Hoyt’s picture book "}<a href={"http://www.parents-choice.org/product.cfm?product_id=22355&StepNum=1&award=nne"} target="_blank" rel="noopener noreferrer"><em>{"Some Dog!"}</em></a>{" tells "}<a href={"http://www.goodreads.com/book/show/542633.Some_Dog_"}>{"the story"}</a>{" of George, a quiet but faithful canine companion who is suddenly displaced by the arrival of an energetic stray named Zippity."}</p>
      <p>{"One night, a thunder storm frightens Zippity to the point he’s tearing the house apart, causing the woman in the story to send him outside. Almost immediately, the woman realizes that the frantic dog has disappeared into the storm, and she beseeches George to help her and the man search for the little, frightened dog. George overcomes his jealousy for the smaller, more charismatic dog and uses his sensitive sense of smell and unflappable personality to heroically find and save Zippity, who has fallen into deep mud."}</p>
      <p>{"This book would be a great read for kids with new siblings in their lives, or to help children understand why their beloved pet might be jealous of a "}<a href={"http://www.humanesociety.org/animals/dogs/tips/bringing_new_dog_home.html"} target="_blank" rel="noopener noreferrer">{"new arrival"}</a>{"."}</p>
      <p>{"I like that the dogs in this book have names, while the people do not. I also appreciate how the illustrations capture the dogs’ personalities. Veg parents should be aware, however, that this book depicts fishing as a peaceful activity — even when Zippity dives into the water and catches live fish in his mouth."}</p>
      <p>{"Ages 3-6."}</p>
    </div>
  );
}
