import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3121",
  "slug": "wave",
  "url": "/reviews/wave/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/19/wave/",
  "title": "Wave",
  "publishedAt": "2010-09-19",
  "publishedLabel": "September 19th, 2010",
  "excerpt": "I love wordless or nearly wordless books. I’m simply captivated by Eric Rohmann’s The Cinder-Eyed Cats and David Wiesner’s Tuesday. For me, it doesn’t get much better than when illustrations carry the story, and the…",
  "image": {
    "src": "/media/2010/09/9780811859240.jpg",
    "alt": "Wave",
    "width": 210,
    "height": 123
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
      "name": "Beach",
      "slug": "beach",
      "url": "/topics/beach/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "New York Times Best Illustrated Children's Books of 2008",
      "slug": "new-york-times-best-illustrated-childrens-books-of-2008",
      "url": "/topics/new-york-times-best-illustrated-childrens-books-of-2008/"
    },
    {
      "name": "Ocean",
      "slug": "ocean",
      "url": "/topics/ocean/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Suzy Lee",
      "slug": "suzy-lee",
      "url": "/topics/suzy-lee/"
    },
    {
      "name": "Wordless Books",
      "slug": "wordless-books",
      "url": "/topics/wordless-books/"
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
    "description": "I love wordless or nearly wordless books. I’m simply captivated by Eric Rohmann’s The Cinder-Eyed Cats and David Wiesner’s Tuesday. For me, it doesn’t get much better than when illustrations carry the story, and the…",
    "image": "https://vegbooks.org/media/2010/09/9780811859240.jpg"
  },
  "previous": {
    "title": "Hello, Baby!",
    "url": "/reviews/hello-baby/"
  },
  "next": {
    "title": "Wilfrid Gordon McDonald Partridge",
    "url": "/reviews/wilfrid-gordon-mcdonald-partridge/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/9780811859240.jpg"}><img src={"/media/2010/09/9780811859240.jpg"} alt={"Wave"} width={210} height={123} /></a>
      </figure>
      <p>{"I love wordless or nearly wordless books. I’m simply captivated by Eric Rohmann’s "}<em><a href={"/reviews/the-cinder-eyed-cats/"}>{"The Cinder-Eyed Cats"}</a></em>{" and David Wiesner’s "}<em>{"Tuesday"}</em>{". For me, it doesn’t get much better than when illustrations carry the story, and "}<a href={"http://www.roadtripsforfamilies.com/2010/08/top-10-great-kids-books-for-the-road-guest-post-from-vegbooks-org/"} target="_blank" rel="noopener noreferrer">{"the “reader” is left to choose exactly how to tell it"}</a>{"."}</p>
      <p><em>{"Wave"}</em>{" epitomizes the best of this genre. Depicting a day at the beach, this lovely book by "}<a href={"http://suzyleebooks.com/"} target="_blank" rel="noopener noreferrer">{"Suzy Lee"}</a>{" is both funny and poetic — a pretty amazing feat for a work that uses only one color (blue) and not a single word. Vegetarian parents will appreciate the nature theme, and kids not yet able to read will like being able to tell the story all by themselves."}</p>
      <p>{"Ages 3-6."}</p>
    </div>
  );
}
