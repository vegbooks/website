import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9775",
  "slug": "i-am-so-brave",
  "url": "/reviews/i-am-so-brave/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/07/21/i-am-so-brave/",
  "title": "I Am So Brave!",
  "publishedAt": "2014-07-21",
  "publishedLabel": "July 21st, 2014",
  "excerpt": "The author-illustrator team that brought us the adorable board book I Know A Lot!is back at it with the new title I Am So Brave! Every time I look at this book (received as a review copy from the publisher), I find…",
  "image": {
    "src": "/media/2014/07/9781419709371.jpg",
    "alt": "Image of the cover of I Am So Brave! featuring a little boy joyfully going down a slide",
    "width": 210,
    "height": 269
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
      "name": "Board Books",
      "slug": "board-books",
      "url": "/topics/board-books/"
    },
    {
      "name": "Bravery",
      "slug": "bravery",
      "url": "/topics/bravery/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Overcoming Fear",
      "slug": "overcoming-fear",
      "url": "/topics/overcoming-fear/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sara Gillingham",
      "slug": "sara-gillingham",
      "url": "/topics/sara-gillingham/"
    },
    {
      "name": "Stephen Krensky",
      "slug": "stephen-krensky",
      "url": "/topics/stephen-krensky/"
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
    "description": "The author-illustrator team that brought us the adorable board book I Know A Lot!is back at it with the new title I Am So Brave! Every time I look at this book (received as a review copy from the publisher), I find…",
    "image": "https://vegbooks.org/media/2014/07/9781419709371.jpg"
  },
  "previous": {
    "title": "The Zoo Box",
    "url": "/reviews/the-zoo-box/"
  },
  "next": {
    "title": "Julia’s House for Lost Creatures",
    "url": "/reviews/julia/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/i-am-so-brave/"}><img src={"/media/2014/07/9781419709371.jpg"} alt={"Image of the cover of I Am So Brave! featuring a little boy joyfully going down a slide"} width={210} height={269} /></a>
      </figure>
      <p>{"The author-illustrator team that brought us the adorable board book "}<em><a href={"/reviews/i-know-a-lot/"}>{"I Know A Lot!"}</a></em>{"is back at it with the new title "}<em>{"I Am So Brave!"}</em></p>
      <p>{"Every time I look at this book (received as a review copy from "}<a href={"http://www.abramsbooks.com/appleseed.html"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{"), I find myself smiling. The bright colors, modern design, and adorable protagonist together create a book that feels both fresh and classic — and the little boy’s joy as he goes down the slide with his hands in the air is palpable!"}</p>
      <p>{"This book would have been a great tool when my daughter was in preschool and struggled with shyness. Using the first person, the narrative briefly introduces five common fears: fear of dogs, fear of swimming, fear of the dark, fear of loud noises, and fear of saying goodbye. One by one, each fear is replaced with the joy that being brave brings. Overcoming the fear of big dogs allows the narrator to make new friends. Getting used to the dark allows him to admire the stars. And so on."}</p>
      <p>{"Simple and empowering, this new board book is a delight. It would be a perfect gift for a second or third birthday!"}</p>
    </div>
  );
}
