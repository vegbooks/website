import type { PostMetadata } from '../content/types';

export const article = {
  "id": "43",
  "slug": "animal-babies-on-the-farm",
  "url": "/reviews/animal-babies-on-the-farm/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/10/29/animal-babies-on-the-farm/",
  "title": "Animal Babies on the Farm",
  "publishedAt": "2009-10-29",
  "publishedLabel": "October 29th, 2009",
  "excerpt": "This is a book where the publisher compiled adorable photos of animals – with some close-ups worthy of Cute Overload – and added simple text. Each page is told from an animal’s perspective. How you’ll feel about this…",
  "image": {
    "src": "/media/2009/10/9780753458389.jpg",
    "alt": "Animal Babies on the Farm",
    "width": 205,
    "height": 216
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "factory farming",
      "slug": "factory-farming",
      "url": "/topics/factory-farming/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Horses",
      "slug": "horses",
      "url": "/topics/horses/"
    },
    {
      "name": "Momma Animals",
      "slug": "momma-animals",
      "url": "/topics/momma-animals/"
    },
    {
      "name": "Moms and Babies",
      "slug": "moms-and-babies",
      "url": "/topics/moms-and-babies/"
    },
    {
      "name": "Photos",
      "slug": "photos",
      "url": "/topics/photos/"
    },
    {
      "name": "Pig",
      "slug": "pig",
      "url": "/topics/pig/"
    },
    {
      "name": "Sheep",
      "slug": "sheep",
      "url": "/topics/sheep/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "This is a book where the publisher compiled adorable photos of animals – with some close-ups worthy of Cute Overload – and added simple text. Each page is told from an animal’s perspective. How you’ll feel about this…",
    "image": "https://vegbooks.org/media/2009/10/9780753458389.jpg"
  },
  "previous": {
    "title": "Guess How Much I Love You",
    "url": "/reviews/guess-how-much-i-love-you/"
  },
  "next": {
    "title": "Endangered Animals",
    "url": "/reviews/endangered-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2009/10/9780753458389.jpg"}><img src={"/media/2009/10/9780753458389.jpg"} alt={"Animal Babies on the Farm"} width={205} height={216} /></a>
      </figure>
      <p>{"This is a book where "}<a href={"http://us.macmillan.com/animalbabiesonthefarm"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{" compiled adorable photos of animals – with some close-ups worthy of "}<a href={"http://cuteoverload.com/"} target="_blank" rel="noopener noreferrer">{"Cute Overload"}</a>{" – and added simple text. Each page is told from an animal’s perspective."}</p>
      <p>{"How you’ll feel about this book ultimately depends on how you believe farmed animals should be portrayed. I am divided on this issue. On one hand, I want kiddo to know how animals are treated on "}<a href={"http://factoryfarming.com/"} target="_blank" rel="noopener noreferrer">{"factory farms"}</a>{" where the vast majority live. On the other, why expose her to such ugliness at such a young age?"}</p>
      <p>{"This book is about who animals are, not how we treat them. The animals in this book are portrayed with their mothers, and often their siblings, in sanctuary-like surroundings. The words emphasize the bond between the baby and her mother."}</p>
      <p>{"In the end, I decided that I liked this book, but I’m curious: what do you think?"}</p>
      <p>{"Ages 0-3."}</p>
    </div>
  );
}
