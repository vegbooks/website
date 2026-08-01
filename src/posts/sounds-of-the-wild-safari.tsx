import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2824",
  "slug": "sounds-of-the-wild-safari",
  "url": "/reviews/sounds-of-the-wild-safari/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/06/sounds-of-the-wild-safari/",
  "title": "Sounds of the Wild: Safari",
  "publishedAt": "2010-08-06",
  "publishedLabel": "August 6th, 2010",
  "excerpt": "I have to admit that one of the reasons I think books are the perfect gift for a child is because, as a rule, they don’t make noise. So I’m more than a little surprised to find myself so enamored with Sounds of the…",
  "image": {
    "src": "/media/2010/08/9781571455567-300.jpg",
    "alt": "Sounds of the Wild: Safari",
    "width": 210,
    "height": 169
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
      "name": "Africa",
      "slug": "africa",
      "url": "/topics/africa/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Maurice Pledger",
      "slug": "maurice-pledger",
      "url": "/topics/maurice-pledger/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
    },
    {
      "name": "Zebras",
      "slug": "zebras",
      "url": "/topics/zebras/"
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
    "description": "I have to admit that one of the reasons I think books are the perfect gift for a child is because, as a rule, they don’t make noise. So I’m more than a little surprised to find myself so enamored with Sounds of the…",
    "image": "https://vegbooks.org/media/2010/08/9781571455567-300.jpg"
  },
  "previous": {
    "title": "One Smart Goose",
    "url": "/reviews/one-smart-goose/"
  },
  "next": {
    "title": "Cherry and Olive",
    "url": "/reviews/cherry-and-olive/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/9781571455567-300.jpg"}><img src={"/media/2010/08/9781571455567-300.jpg"} alt={"Sounds of the Wild: Safari"} width={210} height={169} /></a>
      </figure>
      <p>{"I have to admit that one of the reasons I think books are the perfect gift for a child is because, as a rule, they don’t make noise. So I’m more than a little surprised to find myself so enamored with "}<em>{"Sounds of the Wild: Safari"}</em>{" by "}<a href={"http://www.douggy.com/maurice-pledger-my-dad/"} target="_blank" rel="noopener noreferrer">{"Maurice Pledger"}</a>{"."}</p>
      <p>{"Open the first page of "}<em>{"Safari"}</em>{" and you’re transported to the African plains, complete with the sounds of scampering hooves and the trumpet of an elephant. Page forward and you’ll discover Africa’s lakes, the savanna, a game park, and the Mara River. With realistic pop-out illustrations and detailed explanations, "}<em>{"Safari"}</em>{" is like a trip to the zoo without the unpleasant "}<a href={"http://www.time.com/time/health/article/0,8599,1203076,00.html"} target="_blank" rel="noopener noreferrer">{"animal exploitation"}</a>{". The only thing better would be a real African safari."}</p>
      <p>{"Kiddo loves this book as much as I do (although she’s too little to fully appreciate all the details described in the book). Veg parents should be aware that the book takes a straight-forward approach to predator and prey relationships."}</p>
      <p>{"Ages 5-8."}</p>
    </div>
  );
}
