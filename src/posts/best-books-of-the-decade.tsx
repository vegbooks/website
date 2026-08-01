import type { PostMetadata } from '../content/types';

export const article = {
  "id": "506",
  "slug": "best-books-of-the-decade",
  "url": "/reviews/best-books-of-the-decade/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/25/best-books-of-the-decade/",
  "title": "Best Books of the Decade?",
  "publishedAt": "2009-12-25",
  "publishedLabel": "December 25th, 2009",
  "excerpt": "By JESSICA ALMY Common Sense Media has compiled a list of the top-ten books for preschoolers published during the last decade. Two of their picks are among kiddo’s favorite: the delightful My Friend Rabbitfrom Eric…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Eric Rohmann",
      "slug": "eric-rohmann",
      "url": "/topics/eric-rohmann/"
    },
    {
      "name": "Jane O'Connor",
      "slug": "jane-oconnor",
      "url": "/topics/jane-oconnor/"
    },
    {
      "name": "Kevin Henkes",
      "slug": "kevin-henkes",
      "url": "/topics/kevin-henkes/"
    },
    {
      "name": "Kitten's First Full Moon",
      "slug": "kittens-first-full-moon",
      "url": "/topics/kittens-first-full-moon/"
    },
    {
      "name": "My Friend Rabbit",
      "slug": "my-friend-rabbit",
      "url": "/topics/my-friend-rabbit/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robin Glasser",
      "slug": "robin-glasser",
      "url": "/topics/robin-glasser/"
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
    "description": "By JESSICA ALMY Common Sense Media has compiled a list of the top-ten books for preschoolers published during the last decade. Two of their picks are among kiddo’s favorite: the delightful My Friend Rabbitfrom Eric…"
  },
  "previous": {
    "title": "Have You Seen My Duckling?",
    "url": "/reviews/have-you-seen-my-duckling/"
  },
  "next": {
    "title": "Tiger",
    "url": "/reviews/tiger/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p><strong>{"By "}<a href={"/about/"}>{"JESSICA ALMY"}</a></strong></p>
      <p>{"Common Sense Media has compiled a list of the "}<a href={"http://www.commonsensemedia.org/book-lists/best-books-decade-2000-2009-top-10-preschoolers"} target="_blank" rel="noopener noreferrer">{"top-ten books for preschoolers"}</a>{" published during the last decade. Two of their picks are among kiddo’s favorite: the delightful "}<em>{"My Friend Rabbit"}</em>{"from Eric Rohmann, author-illustrator of the eminently veg-friendly book "}<a href={"http://vegbooks.wordpress.com/2009/10/25/the-cinder-eyed-cats/"} target="_blank" rel="noopener noreferrer"><em>{"The Cinder-Eyed Cats"}</em></a>{", and "}<em>{"Fancy Nancy"}</em>{" by Jane O’Connor and Robin Glasser, the first book in the series that includes the pro-animal shelter "}<a href={"http://vegbooks.wordpress.com/2009/10/25/fancy-nancy-and-the-posh-puppy/"} target="_blank" rel="noopener noreferrer"><em>{"Fancy Nancy and the Posh Puppy"}</em></a>{". We also loved "}<em><a href={"http://www.commonsensemedia.org/book-reviews/kittens-first-full-moon"} target="_blank" rel="noopener noreferrer">{"Kitten’s First Full Moon"}</a></em>{"by Kevin Henkes when we borrowed it from the library."}</p>
      <p>{"This is the decade that most of us became parents (or godparents or aunties). So what are your thoughts? What new kids books are your favorites? And which of the classics does your child absolutely love?"}</p>
    </div>
  );
}
