import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3483",
  "slug": "gus-the-pilgrim-turkey",
  "url": "/reviews/gus-the-pilgrim-turkey/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/10/gus-the-pilgrim-turkey/",
  "title": "Gus, The Pilgrim Turkey",
  "publishedAt": "2010-11-10",
  "publishedLabel": "November 10th, 2010",
  "excerpt": "Life on the farm for Gus, a quirky turkey with a penchant for wearing wacky outfits, is carefree and comfortable. He takes a cue from the Pilgrims and flees the farm when he learns from his animal friends that he is…",
  "image": {
    "src": "/media/2010/11/9780807512661.jpg",
    "alt": "Gus, The Pilgrim Turkey",
    "width": 210,
    "height": 252
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
      "name": "Andrea Zollman",
      "slug": "andrea-zollman",
      "url": "/topics/andrea-zollman/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Ellen Joy Saski",
      "slug": "ellen-joy-saski",
      "url": "/topics/ellen-joy-saski/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Teresa Bateman",
      "slug": "teresa-bateman",
      "url": "/topics/teresa-bateman/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
    }
  ],
  "reviewer": {
    "name": "Andrea Zollman",
    "slug": "andrea-zollman",
    "url": "/contributors/andrea-zollman/",
    "aliases": [
      "ANDREA ZOLLMAN"
    ]
  },
  "seo": {
    "description": "Life on the farm for Gus, a quirky turkey with a penchant for wearing wacky outfits, is carefree and comfortable. He takes a cue from the Pilgrims and flees the farm when he learns from his animal friends that he is…",
    "image": "https://vegbooks.org/media/2010/11/9780807512661.jpg"
  },
  "previous": {
    "title": "What If There Were No Bees?",
    "url": "/reviews/what-if-there-were-no-bees/"
  },
  "next": {
    "title": "ASPCA: The American Society for the Prevention of Cruelty to Animals",
    "url": "/reviews/aspca-the-american-society-for-the-prevention-of-cruelty-to-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/11/9780807512661.jpg"}><img src={"/media/2010/11/9780807512661.jpg"} alt={"Gus, The Pilgrim Turkey"} width={210} height={252} /></a>
      </figure>
      <p>{"Life on the farm for Gus, a quirky turkey with a penchant for wearing wacky outfits, is carefree and comfortable. He takes a cue from the Pilgrims and flees the farm when he learns from his animal friends that he is to be the main course at Thanksgiving dinner. After an arduous trek, he settles among some penguins in the South Pole. But their idea of a wonderful meal is a fish feast. Considering that Gus barely escaped from becoming dinner himself, this is unsettling and an unsatisfactory ending to the story ."}</p>
      <p>{"Teresa Bateman, author of "}<em>{"A Plump and Perky Turkey"}</em>{", attempts to portray Gus’s search for a safe place to live in a lively way to children, but her slow-moving prose bogs down the story. Plus, she skips any detailed explanation of the Pilgrims, which is odd considering she compares Gus’s persecution to theirs. Ellen Joy Saski’s illustrations are more appealing than the story itself and add an element of humor, too. Parents wishing to show turkeys as sentient beings that have the determination to survive rather than becoming a meal might opt for another book such as "}<em><a href={"/reviews/a-turkey-for-thanksgiving/"}>{"A Turkey for Thanksgiving"}</a></em>{" by Eve Bunting or "}<em><a href={"http://www.derekanderson.net/OTRReviews.html"} target="_blank" rel="noopener noreferrer">{"Over the River: A Turkey’s Tale"}</a></em>{"by Derek Anderson."}</p>
      <p>{"Ages 4 to 8."}</p>
    </div>
  );
}
