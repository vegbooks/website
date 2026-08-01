import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5033",
  "slug": "recycle-this-book",
  "url": "/reviews/recycle-this-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/10/recycle-this-book/",
  "title": "Recycle This Book",
  "publishedAt": "2011-05-10",
  "publishedLabel": "May 10th, 2011",
  "excerpt": "In Recycle This Book, one hundred children’s book authors offer their suggestions and personal stories on the subject of green living. Each vignette or essay is short, merely a page and a half or two long. The effect…",
  "image": {
    "src": "/media/2011/04/978-0-375-89176-2.jpg",
    "alt": "Recycle This Book",
    "width": 204,
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
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Meat",
      "slug": "meat",
      "url": "/topics/meat/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "Water",
      "slug": "water",
      "url": "/topics/water/"
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
    "description": "In Recycle This Book, one hundred children’s book authors offer their suggestions and personal stories on the subject of green living. Each vignette or essay is short, merely a page and a half or two long. The effect…",
    "image": "https://vegbooks.org/media/2011/04/978-0-375-89176-2.jpg"
  },
  "previous": {
    "title": "Olivia’s Birds: Saving the Gulf",
    "url": "/reviews/olivias-birds-saving-the-gulf/"
  },
  "next": {
    "title": "Aquaman: Deepwater Disaster",
    "url": "/reviews/aquaman-deepwater-disaster/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/978-0-375-89176-2.jpg"}><img src={"/media/2011/04/978-0-375-89176-2.jpg"} alt={"Recycle This Book"} width={204} height={300} /></a>
      </figure>
      <p>{"In "}<em><a href={"http://www.powells.com/biblio/9780385737210"} target="_blank" rel="noopener noreferrer">{"Recycle This Book"}</a></em>{", one hundred children’s book authors offer their suggestions and personal stories on the subject of green living."}</p>
      <p>{"Each vignette or essay is short, merely a page and a half or two long. The effect is busy but not overwhelming. It is fun and inspiring to hear how others are incorporating green practices into their lives. The suggestions range from reducing or eliminating meat from one’s diet to tips on going green at school to reducing time in the shower and so on. While none of the tips struck me as new or unique, I did enjoy hearing about others’ incorporation of green ideas and the peek into authors’ lives. Kids may enjoy looking up favorite authors to read what they have to say."}</p>
      <p>{"This book is targeted toward older elementary school kids."}</p>
    </div>
  );
}
