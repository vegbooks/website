import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4602",
  "slug": "no-place-for-a-pig",
  "url": "/reviews/no-place-for-a-pig/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/07/no-place-for-a-pig/",
  "title": "No Place for a Pig",
  "publishedAt": "2011-04-07",
  "publishedLabel": "April 7th, 2011",
  "excerpt": "This is the cutest story about a woman named Ms. Taffy who calls in to a radio station with the correct answer and wins the pig prize. She mistakenly thinks she won a pig trinket to fit on her shelf with the rest of…",
  "image": {
    "src": "/media/2011/04/no-place-for-pig-0477.jpg",
    "alt": "No Place for a Pig",
    "width": 210,
    "height": 272
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
      "name": "Cities",
      "slug": "cities",
      "url": "/topics/cities/"
    },
    {
      "name": "Community",
      "slug": "community",
      "url": "/topics/community/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Suzanne Bloom",
      "slug": "suzanne-bloom",
      "url": "/topics/suzanne-bloom/"
    },
    {
      "name": "Urban Living",
      "slug": "urban-living",
      "url": "/topics/urban-living/"
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
    "description": "This is the cutest story about a woman named Ms. Taffy who calls in to a radio station with the correct answer and wins the pig prize. She mistakenly thinks she won a pig trinket to fit on her shelf with the rest of…",
    "image": "https://vegbooks.org/media/2011/04/no-place-for-pig-0477.jpg"
  },
  "previous": {
    "title": "The Happy Egg",
    "url": "/reviews/the-happy-egg/"
  },
  "next": {
    "title": "Apples, Cherries, Red Raspberries",
    "url": "/reviews/apples-cherries-red-raspberries/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/no-place-for-pig-0477.jpg"}><img src={"/media/2011/04/no-place-for-pig-0477.jpg"} alt={"No Place for a Pig"} width={210} height={272} /></a>
      </figure>
      <p>{"This is the cutest story about a woman named Ms. Taffy who calls in to a radio station with the correct answer and wins the pig prize. She mistakenly thinks she won a pig trinket to fit on her shelf with the rest of her collection and is shocked when she goes to pick it up and finds she won a live piglet named Serena! Although a bit ignorant of pig nature (she makes comments like, “Oh my stars… I hope you’re not this hungry every day!”), she opens her tiny apartment home (that she shares with her cats) to the piglet and manages to keep her fed as she grows. And grows. And GROWS."}</p>
      <p>{"What I love about this story is the way the community pulls together to find a way to keep a pig fed and housed while also beautifying the neighborhood with a community garden as Serena out-eats and outgrows the urban apartment. That and the easy acceptance that a pig is a part of the community. Left unsaid is that Ms. Taffy and her apartment neighbors unwittingly rescue this sizable swine from eventually becoming bacon."}</p>
      <p>{"Unfortunately, the author Suzanne Bloom never mentions another alternative for pigs like Serena (or any other farm animals) who wind up in a city: a "}<a href={"http://www.farmsanctuary.org/"} target="_blank" rel="noopener noreferrer">{"farm sanctuary"}</a>{" where a pig can be a pig on a spacious farm without fear of being slaughtered or eaten. There is a rose-tinted quality about the story that excludes the normal city order of complaining neighbors, apartment rules restricting oversized pets, and poop disposal. I guess those things would detract quite a bit from the pleasantly warm, compassionate mood that flows through this tale."}</p>
      <p>{"Colorful, expressive illustrations accompany the light-hearted text and Bloom injects a bit of humor through cute images as well as words."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
