import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9491",
  "slug": "the-runaway-hug",
  "url": "/reviews/the-runaway-hug/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/02/03/the-runaway-hug/",
  "title": "The Runaway Hug",
  "publishedAt": "2014-02-03",
  "publishedLabel": "February 3rd, 2014",
  "excerpt": "What the world needs now is hugs — taken from one person only to pass it on or return it in an improved state. The wonderful picture book The Runaway Hug, written by Nick Bland and illustrated with luscious drawings…",
  "image": {
    "src": "/media/2014/02/runaway.jpeg",
    "alt": "Runaway",
    "width": 210,
    "height": 255
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Families",
      "slug": "families",
      "url": "/topics/families/"
    },
    {
      "name": "Freya Blackwood",
      "slug": "freya-blackwood",
      "url": "/topics/freya-blackwood/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Love",
      "slug": "love",
      "url": "/topics/love/"
    },
    {
      "name": "Nick Bland",
      "slug": "nick-bland",
      "url": "/topics/nick-bland/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "What the world needs now is hugs — taken from one person only to pass it on or return it in an improved state. The wonderful picture book The Runaway Hug, written by Nick Bland and illustrated with luscious drawings…",
    "image": "https://vegbooks.org/media/2014/02/runaway.jpeg"
  },
  "previous": {
    "title": "In a Heartbeat",
    "url": "/reviews/in-a-heartbeat/"
  },
  "next": {
    "title": "Under the Freedom Tree",
    "url": "/reviews/under-the-freedom-tree/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/the-runaway-hug/"}><img src={"/media/2014/02/runaway.jpeg"} alt={"Runaway"} width={210} height={255} /></a>
      </figure>
      <p>{"What the world needs now is hugs — taken from one person only to pass it on or return it in an improved state. The wonderful picture book "}<em>{"The Runaway Hug"}</em>{", written by Nick Bland and illustrated with luscious drawings by Freya Blackwood, will leave you feeling warm, fuzzy, and wanting to find a loved one to hug."}</p>
      <p>{"Centered around a good night routine for preschooler Lucy, "}<em>{"The Runaway Hug"}</em>{" follows the journey of Lucy and a hug she borrowed from her Mommy. She brings it eagerly to her Daddy, who takes a break from watching a soccer game to share a snuggle. Then she moves on to her twin brothers and eventually her baby sister. It’s Annie the dog who creates the final havoc by running off with the slobbery hug from her best friend. Not to worry, the hug eventually comes around full circle."}</p>
      <p><em>{"The Runaway Hug"}</em>{"is a loving and joyful story, but it is the illustrations that really set it apart. Mommy is drawn in her undies and a t-shirt. Daddy watches television in a toy-strewn living room. The twins have a room with dirty shirts on the floors, and the toddler has gotten into the refrigerator to make a delicious mess of peanut butter, bananas, and a bottle of ketchup. The final family image is also comfortable and real; it shows the parents sitting on the couch, nursing their toddler."}</p>
      <p>{"The realistic images of family life will be appreciated by families who are less-then-perfect. From the evening chores to the squabbling children to the kitchen floor mess and rambunctious dog, the story and illustrations are easy to connect with and return to again and again."}</p>
      <p>{"Highly recommended for children ages 2-8."}</p>
    </div>
  );
}
