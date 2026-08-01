import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8089",
  "slug": "presidential-pets",
  "url": "/reviews/presidential-pets/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/08/21/presidential-pets/",
  "title": "Presidential Pets",
  "publishedAt": "2012-08-21",
  "publishedLabel": "August 21st, 2012",
  "excerpt": "We had so much fun reading through a review copy of Presidential Pets by Julie Moberg. Initially, because of the caricaturish drawing style, I didn’t think my kids would like it; they are much more into more…",
  "image": {
    "src": "/media/2012/08/presidential-pets-3002.jpg",
    "alt": "Presidential Pets",
    "width": 215,
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
      "name": "Abraham Lincoln",
      "slug": "abraham-lincoln",
      "url": "/topics/abraham-lincoln/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jeff Albrecht Studios",
      "slug": "jeff-albrecht-studios",
      "url": "/topics/jeff-albrecht-studios/"
    },
    {
      "name": "Julie Moberg",
      "slug": "julie-moberg",
      "url": "/topics/julie-moberg/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "President",
      "slug": "president",
      "url": "/topics/president/"
    },
    {
      "name": "President Taylor",
      "slug": "president-taylor",
      "url": "/topics/president-taylor/"
    },
    {
      "name": "Washington D.C.",
      "slug": "washington-d-c",
      "url": "/topics/washington-d-c/"
    },
    {
      "name": "White House",
      "slug": "white-house",
      "url": "/topics/white-house/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "We had so much fun reading through a review copy of Presidential Pets by Julie Moberg. Initially, because of the caricaturish drawing style, I didn’t think my kids would like it; they are much more into more…",
    "image": "https://vegbooks.org/media/2012/08/presidential-pets-3002.jpg"
  },
  "previous": {
    "title": "The Wiener Dog Magnet",
    "url": "/reviews/the-wiener-dog-magnet/"
  },
  "next": {
    "title": "The Hoboken Chicken Emergency",
    "url": "/reviews/the-hoboken-chicken-emergency/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/08/presidential-pets-3002.jpg"}><img src={"/media/2012/08/presidential-pets-3002.jpg"} alt={"Presidential Pets"} width={215} height={240} /></a>
      </figure>
      <p>{"We had so much fun reading through a "}<a href={"http://www.charlesbridge.com/"} target="_blank" rel="noopener noreferrer">{"review copy"}</a>{" of "}<em>{"Presidential Pets"}</em>{" by Julie Moberg. Initially, because of the caricaturish drawing style, I didn’t think my kids would like it; they are much more into more child-friendly drawings. I was wrong. Both my three and my five-year-old laughed at the silly drawings, asked questions about why an alligator was in the bathtub, and I think they actually learned a lot about animals and our presidents from the text."}</p>
      <p>{"The book devotes two pages to each president and the animals he held as pets. For each president, there is a fun rhyme about the president (or his family) and what kind of pet he had. Then there are Presidential Stats, extra facts about the family, and various accomplishments of the president. One of our favorite rhymes is for Abraham Lincoln. It’s the story of the first turkey pardoned for Thanksgiving. It ends with “Jack lived out his days, happy to roam the White House grounds, his permanent home.”"}</p>
      <p>{"Veggie parents should be aware that the book does not soften some of the realities of pet ownership. There is mention of Zachary Taylor’s horse having his tail hairs plucked clean as souvenirs, and several pets end up in the zoo after misbehaving. The majority of the pages are about beloved pets as devoted companions. We used the different situations to talk about how we treat and respect animals."}</p>
      <p>{"The illustrations by Jeff Albrecht Studios and the text by Julie Moberg are both aimed at ages 8 and up, but younger children can appreciate the rhymes, if not all of the presidential facts. Parents, at least this one, can also learn new things about our presidents as well."}</p>
    </div>
  );
}
