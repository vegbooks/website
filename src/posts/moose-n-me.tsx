import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8633",
  "slug": "moose-n-me",
  "url": "/reviews/moose-n-me/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/03/05/moose-n-me/",
  "title": "Moose n’ Me",
  "publishedAt": "2013-03-05",
  "publishedLabel": "March 5th, 2013",
  "excerpt": "I offer it [this book] to those parents struggling to find a way to console a distraught child who may have lost that closest of all best friends, the beloved pet. I sincerely hope this will make the tears ease a…",
  "image": {
    "src": "/media/2013/03/moosen-me.jpg",
    "alt": "Moose n’ Me",
    "width": 210,
    "height": 181
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Death of a Pet",
      "slug": "death-of-a-pet",
      "url": "/topics/death-of-a-pet/"
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
      "name": "Joshua Nash",
      "slug": "joshua-nash",
      "url": "/topics/joshua-nash/"
    },
    {
      "name": "Kenny Loggins",
      "slug": "kenny-loggins",
      "url": "/topics/kenny-loggins/"
    },
    {
      "name": "Loss",
      "slug": "loss",
      "url": "/topics/loss/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "I offer it [this book] to those parents struggling to find a way to console a distraught child who may have lost that closest of all best friends, the beloved pet. I sincerely hope this will make the tears ease a…",
    "image": "https://vegbooks.org/media/2013/03/moosen-me.jpg"
  },
  "previous": {
    "title": "One Gorilla",
    "url": "/reviews/one-gorilla/"
  },
  "next": {
    "title": "Finnegan and Fox: The Ten-Foot Cop",
    "url": "/reviews/finnegan-and-fox-the-ten-foot-cop/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/03/moosen-me.jpg"}><img src={"/media/2013/03/moosen-me.jpg"} alt={"Moose n’ Me"} width={210} height={181} /></a>
      </figure>
      <blockquote>
        <p>{"I offer it [this book] to those parents struggling to find a way to console a distraught child who may have lost that closest of all best friends, the beloved pet. I sincerely hope this will make the tears ease a little sooner and bring a smile to all your faces. – Kenny Loggins"}</p>
      </blockquote>
      <p><a href={"http://www.kennyloggins.com/"} target="_blank" rel="noopener noreferrer">{"Kenny Loggins"}</a>{" — yes the same Kenny Loggins of world famous tunes such as “Footloose” and “Danger Zone” — has a soft spot…for dogs. In losing his best friend, Moose, Loggins needed a way to console and deal, and it turns out song was his method of choice. This book review is based on the lyrics of his song, “"}<a href={"http://www.charlesbridge.com/productdetails.cfm?PC=5749"} target="_blank" rel="noopener noreferrer">{"Moose n’ me"}</a>{",” which have now been compiled with artist Joshua Nash’s illustrations into a sweet little story about love and loss."}</p>
      <p>{"The story is a little spotty in its telling; Loggins highlights a few scenes from his life with Moose, including a boat ride down the Delta, an encounter with a hobo, and a goodbye as Loggins boards the train to pursue his musical career. While on stage at a concert, he realizes that Moose is gone. The remainder of the text focuses on the “pearly gates” and his indubitable reunion with Moose, who will be waiting for him when he gets there. Such a tender moment!"}</p>
      <p>{"The illustrations are very cute, mostly smiles, and will make this subject an easier one to broach. If you and your family have recently lost an animal companion, this title might be a good one. My recommendation would be to play Loggins’ song as you flip through the pages. You can stream “Moose n’ Me” through his "}<a href={"http://www.myspace.com/kennylogginsdotcom/music/songs/moose-n-me-51173050"} target="_blank" rel="noopener noreferrer">{"Myspace page"}</a>{"."}</p>
      <p>{"Ages 4 – 7."}</p>
      <p><em>{"The publisher Charlesbridge provided a review copy of this book."}</em></p>
    </div>
  );
}
