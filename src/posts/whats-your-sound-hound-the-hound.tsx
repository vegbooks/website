import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5323",
  "slug": "whats-your-sound-hound-the-hound",
  "url": "/reviews/whats-your-sound-hound-the-hound/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/13/whats-your-sound-hound-the-hound/",
  "title": "What’s Your Sound, Hound the Hound?",
  "publishedAt": "2011-06-13",
  "publishedLabel": "June 13th, 2011",
  "excerpt": "Author, illustrator and Caldecott Honoree Mo Willems brings us What’s Your Sound, Hound the Hound? This simple picture book depicts a number of different adorable animal friends asking each other what sound they…",
  "image": {
    "src": "/media/2011/06/whatsyour-hc-c.jpg",
    "alt": "What’s Your Sound, Hound the Hound?",
    "width": 210,
    "height": 251
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
      "name": "Animal Sounds",
      "slug": "animal-sounds",
      "url": "/topics/animal-sounds/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Mo Willems",
      "slug": "mo-willems",
      "url": "/topics/mo-willems/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Author, illustrator and Caldecott Honoree Mo Willems brings us What’s Your Sound, Hound the Hound? This simple picture book depicts a number of different adorable animal friends asking each other what sound they…",
    "image": "https://vegbooks.org/media/2011/06/whatsyour-hc-c.jpg"
  },
  "previous": {
    "title": "The Poky Little Puppy",
    "url": "/reviews/the-poky-little-puppy/"
  },
  "next": {
    "title": "The Snail and the Whale",
    "url": "/reviews/the-snail-and-the-whale/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/whatsyour-hc-c.jpg"}><img src={"/media/2011/06/whatsyour-hc-c.jpg"} alt={"What’s Your Sound, Hound the Hound?"} width={210} height={251} /></a>
      </figure>
      <p>{"Author, illustrator and Caldecott Honoree "}<a href={"http://www.mowillems.com/"} target="_blank" rel="noopener noreferrer">{"Mo Willems"}</a>{" brings us "}<em><a href={"http://www.powells.com/biblio?isbn=9780061728457"} target="_blank" rel="noopener noreferrer">{"What’s Your Sound, Hound the Hound?"}</a></em>{" This simple picture book depicts a number of different adorable animal friends asking each other what sound they make. When Bunny the Bunny is caught flat footed in terms of what his sound may be, all of the other animals rally around his silence and give him a hug."}</p>
      <p>{"This is a cute and catchy book for little animal lovers and their caregivers with a sweet message of supporting and loving our friends. Appropriate from 6 months and up — my kindergartner enjoys it too!"}</p>
    </div>
  );
}
