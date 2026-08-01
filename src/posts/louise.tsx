import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3058",
  "slug": "louise",
  "url": "/reviews/louise/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/12/louise/",
  "title": "Louise, The Adventures of a Chicken",
  "publishedAt": "2010-09-12",
  "publishedLabel": "September 12th, 2010",
  "excerpt": "Whoever uses the word “chicken” to mean cowardly has certainly not met Louise, the feathered heroine of Kate DiCamillo’s book. Louise longs for adventure and wanders off the farm to find it. She narrowly escapes…",
  "image": {
    "src": "/media/2010/09/louise-the-adventures-of-a-chicken.jpg",
    "alt": "Louise, The Adventures of a Chicken",
    "width": 210,
    "height": 232
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
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Harry Bliss",
      "slug": "harry-bliss",
      "url": "/topics/harry-bliss/"
    },
    {
      "name": "Kate DiCamillo",
      "slug": "kate-dicamillo",
      "url": "/topics/kate-dicamillo/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Whoever uses the word “chicken” to mean cowardly has certainly not met Louise, the feathered heroine of Kate DiCamillo’s book. Louise longs for adventure and wanders off the farm to find it. She narrowly escapes…",
    "image": "https://vegbooks.org/media/2010/09/louise-the-adventures-of-a-chicken.jpg"
  },
  "previous": {
    "title": "McKenzie’s Frosty Surprise",
    "url": "/reviews/mckenzies-frosty-surprise/"
  },
  "next": {
    "title": "New Family-Friendly Cookbooks",
    "url": "/reviews/new-family-friendly-cookbooks/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/louise-the-adventures-of-a-chicken.jpg"}><img src={"/media/2010/09/louise-the-adventures-of-a-chicken.jpg"} alt={"Louise, The Adventures of a Chicken"} width={210} height={232} /></a>
      </figure>
      <p>{"Whoever uses the word “chicken” to mean cowardly has certainly not met Louise, the feathered heroine of Kate DiCamillo’s book."}</p>
      <p>{"Louise longs for adventure and wanders off the farm to find it. She narrowly escapes pirates who want to eat her, spends time in the circus, and frees herself and other chickens from captivity. Vegetarian and vegan parents will find a lot of good seeds for discussion — even though some might be uncomfortable with the portrayal of the circus as wholesome entertainment, or the fact that the lion is depicted as vicious, or even that Louise returns to the farm at the end of her adventures."}</p>
      <p>{"Not only does "}<em><a href={"http://www.helpreaderslovereading.com/2008/10/louise-adventures-of-chicken-by-kate.html"} target="_blank" rel="noopener noreferrer">{"Louise, The Adventures of a Chicken"}</a></em>{" have all these interesting themes, but also striking illustrations by and "}<a href={"http://www.harrybliss.com/"} target="_blank" rel="noopener noreferrer">{"Harry Bliss"}</a>{" (the illustrator of "}<em><a href={"/reviews/diary-of-a-worm-guest-post-by-jacqueline-bodnar/"}>{"Diary of a Worm"}</a></em>{" and "}<em><a href={"/reviews/diary-of-a-spider/"}>{"Diary of a Spider"}</a></em>{"). And it’s just plain funny."}</p>
      <p>{"I recommend this book for kids ages 4 to 8."}</p>
    </div>
  );
}
