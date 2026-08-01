import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5941",
  "slug": "chick-n-pug",
  "url": "/reviews/chick-n-pug/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/31/chick-n-pug/",
  "title": "Chick ‘n’ Pug",
  "publishedAt": "2011-08-31",
  "publishedLabel": "August 31st, 2011",
  "excerpt": "What a cute book! My two-year-old daughter received this in her Easter Basket and has enjoyed it for months. We have a pug, so that connection makes the story that much more enjoyable. The pictures are adorable. Some…",
  "image": {
    "src": "/media/2011/08/chick-n-pug-rgb.jpg",
    "alt": "Chick ‘n’ Pug",
    "width": 210,
    "height": 212
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
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
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
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Pugs",
      "slug": "pugs",
      "url": "/topics/pugs/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "What a cute book! My two-year-old daughter received this in her Easter Basket and has enjoyed it for months. We have a pug, so that connection makes the story that much more enjoyable. The pictures are adorable. Some…",
    "image": "https://vegbooks.org/media/2011/08/chick-n-pug-rgb.jpg"
  },
  "previous": {
    "title": "Friends: True Stories of Extraordinary Animal Friendships",
    "url": "/reviews/friends-true-stories-of-extraordinary-animal-friendships/"
  },
  "next": {
    "title": "The Lucky Lobsters",
    "url": "/reviews/the-lucky-lobsters/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/chick-n-pug-rgb.jpg"}><img src={"/media/2011/08/chick-n-pug-rgb.jpg"} alt={"Chick ‘n’ Pug"} width={210} height={212} /></a>
      </figure>
      <p>{"What a "}<a href={"http://www.amazon.com/gp/product/1599905345/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1599905345"} target="_blank" rel="noopener noreferrer">{"cute book"}</a>{"! My two-year-old daughter received this in her Easter Basket and has enjoyed it for months. We have a pug, so that connection makes the story that much more enjoyable. The pictures are adorable. Some of the jokes may be difficult for little ones to understand, but the pictures and storyline are simple enough to follow. My daughter enjoys it."}</p>
      <p>{"Chick is bored with farm life. Laying eggs all day is boring. She longs for some adventure. She spends her time reading a book called "}<em>{"The Adventures of Wonder Pug!"}</em>{" and decides that she must go out and meet this exciting creature for herself. Chick leaves the chicken coop looking for the Wonder Pug and some adventure."}</p>
      <p>{"While chick does find a pug, she does not find much adventure. Like most pugs, this pug likes to sleep and doesn’t care much for adventure (or for Chick’s excitement). Chick tries and tries to get Pug to play with her but Pug just rolls over and goes back to sleep. That is, until Pug’s human comes along and dresses “pugsly wugsly in a whitle outfit.” It is then that we see the Wonder Pug who fights his way out of the outfit. But then he promptly falls back to sleep."}</p>
      <p>{"The human returns with a cat (a cat!) for “pugsly wugsly” to play with and that’s when Pug realizes the benefit of Chick who barks at the cat and scares her away. Pug happily takes Chick as his sidekick from that point on."}</p>
      <p>{"The book gives a subtle message about egg farms. Chickens in farms are bored. They want more adventure in their lives. They don’t want to be stuck laying eggs all day."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
