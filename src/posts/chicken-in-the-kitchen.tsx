import type { PostMetadata } from '../content/types';

export const article = {
  "id": "599",
  "slug": "chicken-in-the-kitchen",
  "url": "/reviews/chicken-in-the-kitchen/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/02/01/chicken-in-the-kitchen/",
  "title": "Chicken in the Kitchen",
  "publishedAt": "2010-02-01",
  "publishedLabel": "February 1st, 2010",
  "excerpt": "Uh oh, I thought when I first viewed this title in our local library. I’m going to hate this book. Happily, I soon discovered that no harm comes to the chicken in Tony Johnston and Eleanor Taylor’s silly book. When…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Chicken in the Kitchen",
    "width": 210,
    "height": 139
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
      "name": "Chicken in the Kitchen",
      "slug": "chicken-in-the-kitchen",
      "url": "/topics/chicken-in-the-kitchen/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eleanor Taylor",
      "slug": "eleanor-taylor",
      "url": "/topics/eleanor-taylor/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Tony Johnston",
      "slug": "tony-johnston",
      "url": "/topics/tony-johnston/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
    },
    {
      "name": "vegetarian kids",
      "slug": "vegetarian-kids",
      "url": "/topics/vegetarian-kids/"
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
    "description": "Uh oh, I thought when I first viewed this title in our local library. I’m going to hate this book. Happily, I soon discovered that no harm comes to the chicken in Tony Johnston and Eleanor Taylor’s silly book. When…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Breakfast in the Rainforest",
    "url": "/reviews/breakfast/"
  },
  "next": {
    "title": "Eco-Women",
    "url": "/reviews/eco-women-guest-post-by-carolyn-m-mullin/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Chicken in the Kitchen"} width={210} height={139} /></a>
      </figure>
      <p><em>{"Uh oh"}</em>{", I thought when I first viewed this title in our local library. "}<em>{"I’m going to hate this book."}</em>{" Happily, I soon discovered that no harm comes to the chicken in "}<a href={"http://www.jacketflap.com/persondetail.asp?person=154542"} target="_blank" rel="noopener noreferrer">{"Tony Johnston"}</a>{" and "}<a href={"http://authors.simonandschuster.net/Eleanor-Taylor/19010824"} target="_blank" rel="noopener noreferrer">{"Eleanor Taylor’s"}</a>{" silly book. When she invades the dog’s kitchen, the canine doesn’t so much as shoo her out. He tries to feed her, he listens to her heart with a stethoscope to make sure she’s OK, and he even goes so far as to chop up his broom to create nesting materials for her. So far, so good."}</p>
      <p>{"Before long, however, the chicken brings the straw from the broom into the kitchen and it’s obvious that she’s going to lay some eggs. "}<em>{"OK, here’s where it all will fall apart"}</em>{", the vegan voice inside me chimed. "}<em>{"The dog’s going to fry up her eggs."}</em>{" But no! The dog watches patiently as the hen nests, and when chicks hatch from the eggs, his reaction is this: “How my heart quickens — a whole kitchen full of chickens!”"}</p>
      <p>{"This delightful book is a steal on "}<a href={"http://www.amazon.com/gp/product/0689856415/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0689856415"} target="_blank" rel="noopener noreferrer">{"Amazon"}</a>{" ($1.89 + shipping, last I checked). It would make a nice addition to any vegetarian kid’s bookshelf."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
