import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6312",
  "slug": "my-milk-toof",
  "url": "/reviews/my-milk-toof/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/29/my-milk-toof/",
  "title": "My Milk Toof",
  "publishedAt": "2011-11-29",
  "publishedLabel": "November 29th, 2011",
  "excerpt": "Inhae Lee’s children’s book was my introduction to her delightfully funny photo essays about two milk “teef” named Ickle and Lardee. Lest you’re concerned the term “milk teef” refers to cow’s milk, Lee explains in…",
  "image": {
    "src": "/media/2011/11/9780811878135.jpg",
    "alt": "My Milk Toof",
    "width": 210,
    "height": 158
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Inhae Lee",
      "slug": "inhae-lee",
      "url": "/topics/inhae-lee/"
    },
    {
      "name": "Photography",
      "slug": "photography",
      "url": "/topics/photography/"
    },
    {
      "name": "Photos",
      "slug": "photos",
      "url": "/topics/photos/"
    },
    {
      "name": "Teeth",
      "slug": "teeth",
      "url": "/topics/teeth/"
    },
    {
      "name": "Tooth Fairy",
      "slug": "tooth-fairy",
      "url": "/topics/tooth-fairy/"
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
    "description": "Inhae Lee’s children’s book was my introduction to her delightfully funny photo essays about two milk “teef” named Ickle and Lardee. Lest you’re concerned the term “milk teef” refers to cow’s milk, Lee explains in…",
    "image": "https://vegbooks.org/media/2011/11/9780811878135.jpg"
  },
  "previous": {
    "title": "Maggie’s Second Chance",
    "url": "/reviews/maggies-second-chance/"
  },
  "next": {
    "title": "The Vegetarian Lion",
    "url": "/reviews/the-vegetarian-lion/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/9780811878135.jpg"}><img src={"/media/2011/11/9780811878135.jpg"} alt={"My Milk Toof"} width={210} height={158} /></a>
      </figure>
      <p>{"Inhae Lee’s children’s book was my introduction to her "}<a href={"http://mymilktoof.blogspot.com/"} target="_blank" rel="noopener noreferrer">{"delightfully funny photo essays"}</a>{" about two milk “teef” named Ickle and Lardee. Lest you’re concerned the term “milk teef” refers to cow’s milk, Lee explains in the introduction to the book that milk teeth are merely baby teeth that fall out and are replaced by permanent teeth. When she was told that the Tooth Fairy took her teeth, she wondered where they went and whether she’d ever see them again."}</p>
      <p>{"Delve into her book and you’ll discover that she does in fact see them again. They take up residence in her home and go on adventures!"}</p>
      <p>{"Lee’s style is photo essay-meets-comic book, and the way she stages her scenes is reminiscent of Nathalie VanBalen’s "}<em><a href={"/reviews/garlic-onion-beet-spinach-mango-carrot-grapefruit-juice/"}>{"Garlic- Onion- Beet- Spinach- Mango- Carrot- Grapefruit Juice"}</a></em>{". For that reason alone, I’d love this book. Add to that the little milk teef are just so sweet — in fact, one has a "}<em>{"nightmare"}</em>{" she (he?) is being naughty — and this book is a gem."}</p>
      <p>{"Vegetarian and vegan families should be warned that while none of the plot deals with meat or dairy, those foods are depicted in the book. My kiddo didn’t notice, seeing only a carton of milk (we drink soy) and a plate of leftover food. And if you’re worried the book will lead your kid to eat meat, don’t, the depiction isn’t too appetizing — in fact, the milk teef commit themselves to an exercise regime after what I can only assume was a Thanksgiving feast. (Is that a dead turkey on the plate? I don’t know. It might be a dead chicken. Doesn’t matter, it looks gross.)"}</p>
      <p>{"Leaving aside the glimpses of animal products, I think this imaginative and humorous book will delight most kids and parents."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
