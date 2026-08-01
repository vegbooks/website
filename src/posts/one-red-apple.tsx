import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5705",
  "slug": "one-red-apple",
  "url": "/reviews/one-red-apple/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/26/one-red-apple/",
  "title": "One Red Apple",
  "publishedAt": "2011-07-26",
  "publishedLabel": "July 26th, 2011",
  "excerpt": "This charming book has beautiful paintings and a lovely message for all ages. It follows the journey of a red apple from a tree to being picked, driven to market, purchased, and enjoyed. (I will mention that the…",
  "image": {
    "src": "/media/2011/07/one-red-apple-cover.jpg",
    "alt": "One Red Apple",
    "width": 210,
    "height": 210
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
      "name": "Apples",
      "slug": "apples",
      "url": "/topics/apples/"
    },
    {
      "name": "Bees",
      "slug": "bees",
      "url": "/topics/bees/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
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
      "name": "Gratitude",
      "slug": "gratitude",
      "url": "/topics/gratitude/"
    },
    {
      "name": "Growth",
      "slug": "growth",
      "url": "/topics/growth/"
    },
    {
      "name": "Harriet Ziefert",
      "slug": "harriet-ziefert",
      "url": "/topics/harriet-ziefert/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Karla Gudeon",
      "slug": "karla-gudeon",
      "url": "/topics/karla-gudeon/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Thankfulness",
      "slug": "thankfulness",
      "url": "/topics/thankfulness/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "This charming book has beautiful paintings and a lovely message for all ages. It follows the journey of a red apple from a tree to being picked, driven to market, purchased, and enjoyed. (I will mention that the…",
    "image": "https://vegbooks.org/media/2011/07/one-red-apple-cover.jpg"
  },
  "previous": {
    "title": "Garbage Helps Our Garden Grow: A Compost Story",
    "url": "/reviews/garbage-helps-our-garden-grow-a-compost-story/"
  },
  "next": {
    "title": "Walter the Farting Dog",
    "url": "/reviews/walter-the-farting-dog/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/one-red-apple-cover.jpg"}><img src={"/media/2011/07/one-red-apple-cover.jpg"} alt={"One Red Apple"} width={210} height={210} /></a>
      </figure>
      <p>{"This "}<a href={"http://www.goodreads.com/book/show/6588611-one-red-apple"} target="_blank" rel="noopener noreferrer">{"charming book"}</a>{" has beautiful paintings and a lovely message for all ages. It follows the journey of a red apple from a tree to being picked, driven to market, purchased, and enjoyed. (I will mention that the pages where the apples are driven to market do include a family farm countryside with farm animals in the grass outside in case that imagery is of concern to someone.) The apple core is left for the birds to eat and the seeds scatter on the wind to later become trees. The page illustrating the apple tree’s growth is a lift the flap that transitions a small tree into a large one which is a neat feature."}</p>
      <p>{"The thing that touched me most about "}<em><a href={"http://www.superkidsnutrition.com/nutrition_resources/bc_oneredapple.php"} target="_blank" rel="noopener noreferrer">{"One Red Apple"}</a></em>{" is the ending where children holding bags of apples say, “Thank you, bird, winds, sun, and bees. Thank you, earth, for one red apple.” I think the book is a wonderful choice for veg families and the living things in the book (bees, birds, dogs, humans) are all exemplifying respect and gratitude for nature and one another."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
