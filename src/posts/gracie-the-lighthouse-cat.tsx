import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5769",
  "slug": "gracie-the-lighthouse-cat",
  "url": "/reviews/gracie-the-lighthouse-cat/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/13/gracie-the-lighthouse-cat/",
  "title": "Gracie the Lighthouse Cat",
  "publishedAt": "2011-08-13",
  "publishedLabel": "August 13th, 2011",
  "excerpt": "I’m naturally drawn to historical accounts involving animals, and the story of Gracie, a lighthouse cat whose kitten becomes imperiled during a storm is a short, action-packed and dramatic one. Based on a true…",
  "image": {
    "src": "/media/2011/08/9780761374541fc.jpg",
    "alt": "Gracie the Lighthouse Cat",
    "width": 210,
    "height": 245
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
      "name": "Animal Emotion",
      "slug": "animal-emotion",
      "url": "/topics/animal-emotion/"
    },
    {
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Ruth Brown",
      "slug": "ruth-brown",
      "url": "/topics/ruth-brown/"
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
    "description": "I’m naturally drawn to historical accounts involving animals, and the story of Gracie, a lighthouse cat whose kitten becomes imperiled during a storm is a short, action-packed and dramatic one. Based on a true…",
    "image": "https://vegbooks.org/media/2011/08/9780761374541fc.jpg"
  },
  "previous": {
    "title": "Bugs by the Numbers",
    "url": "/reviews/bugs-by-the-numbers/"
  },
  "next": {
    "title": "Are You Eating Something Green?",
    "url": "/reviews/are-you-eating-something-green/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/9780761374541fc.jpg"}><img src={"/media/2011/08/9780761374541fc.jpg"} alt={"Gracie the Lighthouse Cat"} width={210} height={245} /></a>
      </figure>
      <p>{"I’m naturally drawn to historical accounts involving animals, and "}<a href={"http://www.forewordreviews.com/reviews/gracie-the-lighthouse-cat/"} target="_blank" rel="noopener noreferrer">{"the story of Gracie"}</a>{", a lighthouse cat whose kitten becomes imperiled during a storm is a short, action-packed and dramatic one. Based on a true account on one of the Farne Islands of England in 1838, Gracie’s attempt to rescue her offspring is uniquely told at the forefront while in the background – depicted through painterly images – is the recovery of 9 shipwrecked humans."}</p>
      <p>{"Author Ruth Brown’s paintings capture the raw emotions and true-to-life facial expressions of the felines, making this a relatable tale to the cat companions young readers may live with at home. Reading animal faces is a vastly important skill to teach in terms of humane education; by knowing how an animal is feeling, kids can help better (instead of worsen) a given situation. If you pick up this book, a fun activity would be to challenge kids to guess how the cats are feeling or what they might be thinking throughout the story."}</p>
      <p>{"Equally important as the emotional recognition in cats is the story’s oral or visual interpretation that animal companions are just as concerned about the welfare of their family members as people. That is a lesson we can never emphasize enough."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
