import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10126",
  "slug": "gryphons-arent-so-great",
  "url": "/reviews/gryphons-arent-so-great/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/08/21/gryphons-arent-so-great/",
  "title": "Gryphons Aren’t So Great",
  "publishedAt": "2015-08-21",
  "publishedLabel": "August 21st, 2015",
  "excerpt": "I received a publisher’s review copy of Gryphons Aren’t So Great and my mother-in-law remarked at the spelling in the title so I looked into it. Griffin and grphyon seem to be variants meant to describe the same…",
  "image": {
    "src": "/media/2015/08/9781596436527.jpg",
    "alt": "9781596436527",
    "width": 210,
    "height": 205
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
      "name": "Alexis Frederick-Frost",
      "slug": "alexis-frederick-frost",
      "url": "/topics/alexis-frederick-frost/"
    },
    {
      "name": "Andrew Arnold",
      "slug": "andrew-arnold",
      "url": "/topics/andrew-arnold/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Graphic Novels",
      "slug": "graphic-novels",
      "url": "/topics/graphic-novels/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "James Sturm",
      "slug": "james-sturm",
      "url": "/topics/james-sturm/"
    },
    {
      "name": "Mythical Creatures",
      "slug": "mythical-creatures",
      "url": "/topics/mythical-creatures/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "I received a publisher’s review copy of Gryphons Aren’t So Great and my mother-in-law remarked at the spelling in the title so I looked into it. Griffin and grphyon seem to be variants meant to describe the same…",
    "image": "https://vegbooks.org/media/2015/08/9781596436527.jpg"
  },
  "previous": {
    "title": "Butterfly Battle & Food Chain Frenzy (The Magic School Bus Chapter Books #16 & #17)",
    "url": "/reviews/butterfly-battle-the-magic-school-bus-chapter-book-16-and-food-chain-frenzy-the-magic-school-bus-chapter-book-17/"
  },
  "next": {
    "title": "Zora’s Zucchini",
    "url": "/reviews/zoras-zucchini/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/08/9781596436527.jpg"} alt={"9781596436527"} width={210} height={205} />
      </figure>
      <p>{"I received a publisher’s review copy of "}<a href={"http://us.macmillan.com/gryphonsarentsogreat/jamessturm"} target="_blank" rel="noopener noreferrer"><em>{"Gryphons Aren’t So Great"}</em></a>{" and my mother-in-law remarked at the spelling in the title so I looked into it. Griffin and grphyon seem to be variants meant to describe the same mythical creature with the body of a lion (except for the front feet which feature talons) and the head and wings of an eagle. (Source: "}<a href={"https://en.wikipedia.org/wiki/Griffin"} target="_blank" rel="noopener noreferrer">{"https://en.wikipedia.org/wiki/Griffin"}</a>{") For Harry Potter fans, a Hippogriff is the child of a griffin and a mare (who knew?)."}</p>
      <p>{"Anyway, back to this cute little book. My son loved the idea of a knight and horse being best friends — even jumping into water together and having adventures — but he was sad when the knight abandoned her stalwart friend for a flying one, the titular Gryphon. The knight is ignored when the Gryphon meets one of his own kind and realizes she should have stayed loyal to the horse, Edward. I like that the horse has a name but the knight doesn’t, kind of a turnabout."}</p>
      <p>{"It is a quick, graphic novel style read and after one go through my son was ready to re-tell the story from the pictures. A good book for beginning readers but probably too short for older kids. Pre-K to 2nd grade is probably ideal."}</p>
    </div>
  );
}
