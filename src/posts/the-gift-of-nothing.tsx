import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1175",
  "slug": "the-gift-of-nothing",
  "url": "/reviews/the-gift-of-nothing/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/19/the-gift-of-nothing/",
  "title": "The Gift of Nothing",
  "publishedAt": "2010-06-19",
  "publishedLabel": "June 19th, 2010",
  "excerpt": "Fans of Patrick McDonnell’s Wag!will love The Gift of Nothing. Featuring the adorable characters from his comic strip Mutts, the plot of this story can be summed up in a ten-word riddle. Q: What do you give a friend…",
  "image": {
    "src": "/media/2010/04/gift-of-nothing.jpg",
    "alt": "The Gift of Nothing",
    "width": 240,
    "height": 209
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Consumerism",
      "slug": "consumerism",
      "url": "/topics/consumerism/"
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
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
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
    "description": "Fans of Patrick McDonnell’s Wag!will love The Gift of Nothing. Featuring the adorable characters from his comic strip Mutts, the plot of this story can be summed up in a ten-word riddle. Q: What do you give a friend…",
    "image": "https://vegbooks.org/media/2010/04/gift-of-nothing.jpg"
  },
  "previous": {
    "title": "In a Tizzy Over Turkey",
    "url": "/reviews/in-a-tizzy-over-turkey/"
  },
  "next": {
    "title": "Free the Worms!",
    "url": "/reviews/free-the-worms/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/gift-of-nothing.jpg"}><img src={"/media/2010/04/gift-of-nothing.jpg"} alt={"The Gift of Nothing"} width={240} height={209} /></a>
      </figure>
      <p>{"Fans of Patrick McDonnell’s "}<em><a href={"/reviews/wag/"}>{"Wag!"}</a></em>{"will love "}<em>{"The Gift of Nothing"}</em>{". Featuring the adorable characters from his comic strip "}<em><a href={"http://muttscomics.com/"} target="_blank" rel="noopener noreferrer">{"Mutts"}</a></em>{", the plot of this story can be summed up in a ten-word riddle. Q: What do you give a friend who has everything? A: Nothing."}</p>
      <p>{"Of course, like everything else Mr. McDonnell does, the magic is in the storytelling. Using heartfelt illustrations and simple text, his story book conveys what it’s like to be in a relationship where you are accepted not for what you give the other person, but simply for who you are. It’s the kind of love that parents and children will recognize in each other, and that’s intimately familiar to anyone who has ever loved a dog, cat, or horse."}</p>
      <p>{"Parents who are concerned about "}<a href={"http://www.thesolutionsjournal.com/node/571"} target="_blank" rel="noopener noreferrer">{"the effect consumerism has on their children and the environment"}</a>{" will also appreciate the book’s anti-stuff slant."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
