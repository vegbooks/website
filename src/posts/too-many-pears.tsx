import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1888",
  "slug": "too-many-pears",
  "url": "/reviews/too-many-pears/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/03/too-many-pears/",
  "title": "Too Many Pears",
  "publishedAt": "2010-06-03",
  "publishedLabel": "June 3rd, 2010",
  "excerpt": "Pamela the clever cow will stop at nothing for her favorite fruit: pears. This is a cute story about a determined cow who overcomes all efforts to restrain her. The people (from whom Pamela steals the pears) try…",
  "image": {
    "src": "/media/2010/06/too-many-pears-cover.jpg",
    "alt": "Too Many Pears",
    "width": 207,
    "height": 191
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
      "name": "Bruce Whatley",
      "slug": "bruce-whatley",
      "url": "/topics/bruce-whatley/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
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
      "name": "Fruit",
      "slug": "fruit",
      "url": "/topics/fruit/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Jackie French",
      "slug": "jackie-french",
      "url": "/topics/jackie-french/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Pamela the clever cow will stop at nothing for her favorite fruit: pears. This is a cute story about a determined cow who overcomes all efforts to restrain her. The people (from whom Pamela steals the pears) try…",
    "image": "https://vegbooks.org/media/2010/06/too-many-pears-cover.jpg"
  },
  "previous": {
    "title": "The Dancing Deer and the Foolish Hunter",
    "url": "/reviews/the-dancing-deer-and-the-foolish-hunter/"
  },
  "next": {
    "title": "An Adventure with Billy Bunny",
    "url": "/reviews/an-adventure-with-billy-bunny/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/too-many-pears-cover.jpg"}><img src={"/media/2010/06/too-many-pears-cover.jpg"} alt={"Too Many Pears"} width={207} height={191} /></a>
      </figure>
      <p>{"Pamela the clever cow will stop at nothing for her favorite fruit: pears. This is a cute story about a determined cow who overcomes all efforts to restrain her. The people (from whom Pamela steals the pears) try various methods of containing Pamela, without luck. Finally, the young girl Amy outsmarts Pamela with an idea that resolves her pear addiction."}</p>
      <p>{"Jackie French creates a fun story with unique characters and an unusual dilemma. Bruce Whatley’s illustrations are hilarious and expressive and understandably why this book was a winner of a 2004 "}<a href={"http://www.ibpa-online.org/pubresources/benfrank.aspx"} target="_blank" rel="noopener noreferrer">{"Benjamin Franklin Award"}</a>{" under the children’s picture book category. My preschooler loved the illustrations and I especially liked the cute little details like Pamela’s facial expressions and the cow spots in shapes of pears and hearts."}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
