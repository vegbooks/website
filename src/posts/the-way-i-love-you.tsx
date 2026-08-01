import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5182",
  "slug": "the-way-i-love-you",
  "url": "/reviews/the-way-i-love-you/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/22/the-way-i-love-you/",
  "title": "The Way I Love You",
  "publishedAt": "2011-05-22",
  "publishedLabel": "May 22nd, 2011",
  "excerpt": "Artist Ann James charmingly captures the sweet interactions between a pig-tailed toddler and her canine best friend in David Bedford’s The Way I Love You. The honesty of the young protagonist warms a reader’s heart…",
  "image": {
    "src": "/media/2011/05/the-way-i-love-you-cover.jpg",
    "alt": "The Way I Love You",
    "width": 210,
    "height": 200
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Ann James",
      "slug": "ann-james",
      "url": "/topics/ann-james/"
    },
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
      "name": "David Bedford",
      "slug": "david-bedford",
      "url": "/topics/david-bedford/"
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
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Love",
      "slug": "love",
      "url": "/topics/love/"
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
    "description": "Artist Ann James charmingly captures the sweet interactions between a pig-tailed toddler and her canine best friend in David Bedford’s The Way I Love You. The honesty of the young protagonist warms a reader’s heart…",
    "image": "https://vegbooks.org/media/2011/05/the-way-i-love-you-cover.jpg"
  },
  "previous": {
    "title": "OK Go",
    "url": "/reviews/ok-go/"
  },
  "next": {
    "title": "Smudge Bunny",
    "url": "/reviews/smudge-bunny/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/the-way-i-love-you-cover.jpg"}><img src={"/media/2011/05/the-way-i-love-you-cover.jpg"} alt={"The Way I Love You"} width={210} height={200} /></a>
      </figure>
      <p>{"Artist Ann James charmingly captures the sweet interactions between a pig-tailed toddler and her canine best friend in David Bedford’s "}<em><a href={"http://www.amazon.com/Way-I-Love-You/dp/0689876254"}>{"The Way I Love You"}</a></em>{". The honesty of the young protagonist warms a reader’s heart as she declares her genuine affection for her friend in this flowing valentine:"}</p>
      <p>{"“I love…the way you tell me things, the way you jump so high, the way you smile your smile. That’s the way I love you."}</p>
      <p>{"I love…the way you understand, the way you show me how, the way we are right now. That’s the way I love you.”"}</p>
      <p>{"James depicts the closely-bonded duo through charcoal and pastel watercolors as they bask in the joys of everyday life: tea parties, sharing treats, coloring, reading, and playing games. This will resonate and reflect the experiences of many families who have a canine companion."}</p>
      <p>{"A great selection for young animal lovers and beginning readers."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
