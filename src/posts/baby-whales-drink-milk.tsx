import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2654",
  "slug": "baby-whales-drink-milk",
  "url": "/reviews/baby-whales-drink-milk/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/17/baby-whales-drink-milk/",
  "title": "Baby Whales Drink Milk",
  "publishedAt": "2010-07-17",
  "publishedLabel": "July 17th, 2010",
  "excerpt": "I wouldn’t normally review a series-based publication, like those of the “Let’s-Read-And-Find-Out Science” compilation (although many of their titles are quite interesting), but this particular one is dietary…",
  "image": {
    "src": "/media/2010/07/baby-whales-drink-milk.jpg",
    "alt": "Baby Whales Drink Milk",
    "width": 220,
    "height": 179
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Dairy",
      "slug": "dairy",
      "url": "/topics/dairy/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Marine Mammals",
      "slug": "marine-mammals",
      "url": "/topics/marine-mammals/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
    },
    {
      "name": "Vegan Parenting",
      "slug": "vegan-parenting",
      "url": "/topics/vegan-parenting/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "I wouldn’t normally review a series-based publication, like those of the “Let’s-Read-And-Find-Out Science” compilation (although many of their titles are quite interesting), but this particular one is dietary…",
    "image": "https://vegbooks.org/media/2010/07/baby-whales-drink-milk.jpg"
  },
  "previous": {
    "title": "Mutt Dog!",
    "url": "/reviews/mutt-dog/"
  },
  "next": {
    "title": "Princess Smartypants",
    "url": "/reviews/princess-smartypants/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/baby-whales-drink-milk.jpg"}><img src={"/media/2010/07/baby-whales-drink-milk.jpg"} alt={"Baby Whales Drink Milk"} width={220} height={179} /></a>
      </figure>
      <p>{"I wouldn’t normally review a series-based publication, like those of the “Let’s-Read-And-Find-Out Science” compilation (although many of their titles are quite interesting), but this particular one is dietary ammunition in a vegan parent’s bookshelf."}</p>
      <p>{"Drinking milk, particularly cows’ lacteal secretions, past infancy has become a given in human society. Looking at all other mammals, however, we see that it’s quite frankly rare to do so, moreover from another species. A mother’s milk is nutrient rich and designed to help babies grow big and strong…and quickly. To continue drinking milk through adulthood can pose "}<a href={"http://www.pcrm.org/health/veginfo/dairy.html"} target="_blank" rel="noopener noreferrer">{"serious health risks"}</a>{"."}</p>
      <p>{"This easy reader not only exposes young kids to the beautiful lives of whales (birth, migration, blow hole spouting) through scientific facts and gorgeous imagery, but it can be utilized to nurture better eating habits. When kids are faced with bovine milk-touting advertisements in school and classmates chug cartons of it day in and day out, vegan kids and parents alike need positive reinforcement. This book can do just that and incite a thoughtful “What is milk?”conversation. Now that there are yummy soy, almond, oat, hemp, and even coconut versions available on the market, it should prove to be an interesting dialogue!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
