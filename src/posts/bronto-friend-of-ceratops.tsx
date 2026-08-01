import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9135",
  "slug": "bronto-friend-of-ceratops",
  "url": "/reviews/bronto-friend-of-ceratops/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/10/14/bronto-friend-of-ceratops/",
  "title": "Bronto, Friend of Ceratops",
  "publishedAt": "2013-10-14",
  "publishedLabel": "October 14th, 2013",
  "excerpt": "I received a review copy of the latest adventure featuring Bronto recently, to the delight of my children who really enjoyed Bronto & the Pterodactyl Eggs. Charlotte Vivian Rodenberg not only brings Bronto the…",
  "image": {
    "src": "/media/2013/10/bronto-cera-frontcover-copy.jpg",
    "alt": "BRONTO-CERA_frontcover_copy-924x1024",
    "width": 216,
    "height": 240
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
      "name": "Charlotte Vivian Rodenberg",
      "slug": "charlotte-vivian-rodenberg",
      "url": "/topics/charlotte-vivian-rodenberg/"
    },
    {
      "name": "Dinosaurs",
      "slug": "dinosaurs",
      "url": "/topics/dinosaurs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
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
    "description": "I received a review copy of the latest adventure featuring Bronto recently, to the delight of my children who really enjoyed Bronto & the Pterodactyl Eggs. Charlotte Vivian Rodenberg not only brings Bronto the…",
    "image": "https://vegbooks.org/media/2013/10/bronto-cera-frontcover-copy.jpg"
  },
  "previous": {
    "title": "Horse Sanctuary",
    "url": "/reviews/horse-sanctuary/"
  },
  "next": {
    "title": "Our Top Picks for 4-Year-Olds",
    "url": "/reviews/our-top-picks-for-4-year-olds/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/10/bronto-cera-frontcover-copy.jpg"}><img src={"/media/2013/10/bronto-cera-frontcover-copy.jpg"} alt={"BRONTO-CERA_frontcover_copy-924x1024"} width={216} height={240} /></a>
      </figure>
      <p>{"I received a review copy of the latest adventure featuring Bronto recently, to the delight of my children who really enjoyed "}<a href={"/reviews/bronto-the-pterodactyl-eggs/"}><em>{"Bronto & the Pterodactyl Eggs"}</em></a>{". Charlotte Vivian Rodenberg not only brings Bronto the Apatosaurus back in "}<em>{"Bronto, Friend of Ceratops"}</em>{", she uses similar narrative devices alongside new friends for Bronto."}</p>
      <p>{"Bronto dreams of swimming in the sea as a wildfire rages only to be awakened by lightning strikes and a resulting fire. Bronto seeks his friends to warn them of the danger the fire poses but finds them falling prey to a Tyrannosaurus Rex. Once a fellow Apatosaurus arrives to assist Bronto, the T. Rex flees and Bronto, the Ceratops herd, and Bronto’s friend Arbol escape in the nearby river."}</p>
      <p>{"This book continues the theme of Bronto being kind to his fellow dinosaurs and nature being in turmoil for all dinosaurs. Many young readers will need assistance sounding out the complex words in the book but the use of accurate terminology will hopefully spark curiosity."}</p>
    </div>
  );
}
