import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1173",
  "slug": "wag",
  "url": "/reviews/wag/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/03/wag/",
  "title": "Wag!",
  "publishedAt": "2010-03-03",
  "publishedLabel": "March 3rd, 2010",
  "excerpt": "Why does Earl’s tail wag – fwip fwip fwip? Young readers will love the simple storyline of this book and its use of repetition, and parents will adore Patrick McDonnell’s sweet little mutt and his appreciation of…",
  "image": {
    "src": "/media/2010/04/wag.jpg",
    "alt": "Wag!",
    "width": 261,
    "height": 259
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
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
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Mutts",
      "slug": "mutts",
      "url": "/topics/mutts/"
    },
    {
      "name": "Patrick McDonnell",
      "slug": "patrick-mcdonnell",
      "url": "/topics/patrick-mcdonnell/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Why does Earl’s tail wag – fwip fwip fwip? Young readers will love the simple storyline of this book and its use of repetition, and parents will adore Patrick McDonnell’s sweet little mutt and his appreciation of…",
    "image": "https://vegbooks.org/media/2010/04/wag.jpg"
  },
  "previous": {
    "title": "Martha Speaks",
    "url": "/reviews/martha-speaks/"
  },
  "next": {
    "title": "Pooh: Just Be Nice… to your little friends",
    "url": "/reviews/pooh-just-be-nice/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/wag.jpg"}><img src={"/media/2010/04/wag.jpg"} alt={"Wag!"} width={261} height={259} /></a>
      </figure>
      <p>{"Why does Earl’s tail wag – "}<em>{"fwip fwip fwip"}</em>{"? Young readers will love the simple storyline of this book and its use of repetition, and parents will adore "}<a href={"http://www.hsus.org/about_us/celebrity_support/patrick_mcdonnell/"} target="_blank" rel="noopener noreferrer">{"Patrick McDonnell’s"}</a>{" sweet little mutt and his appreciation of just about everything."}</p>
      <p>{"Mr. McDonnell is a hero for animals and the people who love them, bringing simple messages of kindness and raising awareness through his widely read comic strip "}<em><a href={"http://muttscomics.com/"} target="_blank" rel="noopener noreferrer">{"Mutts"}</a>{"."}</em>{"With "}<em>{"Wag"}</em>{", now even the littlest kids can enjoy his work."}</p>
      <p>{"Ages 2-7. Toddlers and preschoolers will enjoy listening, while bigger kids will be able to read this by themselves."}</p>
    </div>
  );
}
