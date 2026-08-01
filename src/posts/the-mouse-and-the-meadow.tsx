import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9622",
  "slug": "the-mouse-and-the-meadow",
  "url": "/reviews/the-mouse-and-the-meadow/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/04/04/the-mouse-and-the-meadow/",
  "title": "The Mouse and the Meadow",
  "publishedAt": "2014-04-04",
  "publishedLabel": "April 4th, 2014",
  "excerpt": "In this story a young mouse ventures out on his own and finds out that nature can be both beautiful and dangerous when you are a mouse. The mouse makes his way through the meadow, meeting various animals along the…",
  "image": {
    "src": "/media/2014/04/9781584694823.jpg",
    "alt": "9781584694823",
    "width": 210,
    "height": 255
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
      "name": "Chad Wallace",
      "slug": "chad-wallace",
      "url": "/topics/chad-wallace/"
    },
    {
      "name": "Habitats",
      "slug": "habitats",
      "url": "/topics/habitats/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Mice",
      "slug": "mice",
      "url": "/topics/mice/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "In this story a young mouse ventures out on his own and finds out that nature can be both beautiful and dangerous when you are a mouse. The mouse makes his way through the meadow, meeting various animals along the…",
    "image": "https://vegbooks.org/media/2014/04/9781584694823.jpg"
  },
  "previous": {
    "title": "The Swamp Where Gator Hides",
    "url": "/reviews/the-swamp-where-gator-hides/"
  },
  "next": {
    "title": "Posie Pixie and the Torn Tunic",
    "url": "/reviews/posie-pixie-and-the-torn-tunic/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/the-mouse-and-the-meadow/"}><img src={"/media/2014/04/9781584694823.jpg"} alt={"9781584694823"} width={210} height={255} /></a>
      </figure>
      <p>{"In this story a young mouse ventures out on his own and finds out that nature can be both beautiful and dangerous when you are a mouse. The mouse makes his way through the meadow, meeting various animals along the way. What the mouse learns is that there are some animals that will be friendly to him, while others may bring danger."}</p>
      <p>{"This book gives children a good look at nature in the meadow, from the point of view of a mouse, who learns valuable life lessons along the way. While the mouse fears being in nature, because he may become lunch, a friendly animal teaches the mouse that there are many great things about the meadow, too."}</p>
      <p>{"There is nothing in this book that vegetarian parents would not want their child exposed to. In fact, it would make a great addition to their book collection. It focuses on nature, is beautifully illustrated, and offers additional educational information in the back, including a look at the idea of animals talking in children’s books. This is a nice book all the way around and one that parents and kids alike will enjoy."}</p>
      <p><em><a href={"http://www.dawnpub.com/our-books/mouse-and-the-meadow/"} target="_blank" rel="noopener noreferrer">{"Dawn Publications"}</a>{" provided a review copy."}</em></p>
    </div>
  );
}
