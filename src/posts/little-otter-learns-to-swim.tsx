import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10676",
  "slug": "little-otter-learns-to-swim",
  "url": "/reviews/little-otter-learns-to-swim/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/11/20/little-otter-learns-to-swim/",
  "title": "Little Otter Learns to Swim",
  "publishedAt": "2018-11-20",
  "publishedLabel": "November 20th, 2018",
  "excerpt": "With gentle rhymes and a combination of adventure and joy in learning, in LITTLE OTTER LEARNS TO SWIM, author Artie Knapp creates a fun book about a young otter exploring her environment and overcoming her fears.…",
  "image": {
    "src": "/media/2018/11/little-otter-learns-to-swim.jpg",
    "alt": "Little Otter Learns to Swim",
    "width": 300,
    "height": 267
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
      "name": "Artie Knapp",
      "slug": "artie-knapp",
      "url": "/topics/artie-knapp/"
    },
    {
      "name": "children's books",
      "slug": "childrens-books",
      "url": "/topics/childrens-books/"
    },
    {
      "name": "Guy Hobbs",
      "slug": "guy-hobbs",
      "url": "/topics/guy-hobbs/"
    },
    {
      "name": "kidlit",
      "slug": "kidlit",
      "url": "/topics/kidlit/"
    },
    {
      "name": "Little Otter Learns to Swim",
      "slug": "little-otter-learns-to-swim",
      "url": "/topics/little-otter-learns-to-swim/"
    },
    {
      "name": "Ohio University Press",
      "slug": "ohio-university-press",
      "url": "/topics/ohio-university-press/"
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
    "description": "With gentle rhymes and a combination of adventure and joy in learning, in LITTLE OTTER LEARNS TO SWIM, author Artie Knapp creates a fun book about a young otter exploring her environment and overcoming her fears.…",
    "image": "https://vegbooks.org/media/2018/11/little-otter-learns-to-swim.jpg"
  },
  "previous": {
    "title": "Wild Orca: The Oldest, Wisest Whale in the World",
    "url": "/reviews/wild-orca-the-oldest-wisest-whale-in-the-world/"
  },
  "next": {
    "title": "When You Grow Up to Vote",
    "url": "/reviews/when-you-grow-up-to-vote/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2018/11/little-otter-learns-to-swim.jpg"} alt={"Little Otter Learns to Swim"} width={300} height={267} />
      </figure>
      <p>{"With gentle rhymes and a combination of adventure and joy in learning, in "}<a href={"https://www.ohioswallow.com/book/Little+Otter+Learns+to+Swim"} target="_blank" rel="noopener noreferrer">{"LITTLE OTTER LEARNS TO SWIM"}</a>{", author Artie Knapp creates a fun book about a young otter exploring her environment and overcoming her fears. From the first underwater swim to surprising frogs with a dive to Little Otter’s first experience with predators and protection, the tale demonstrates the beauty and dangers of nature while keeping it appropriate for younger elementary school aged readers."}</p>
      <p>{"Kids will relate to the fear of the unknown, perhaps even the fear of learning to swim, that Little Otter exhibits. They will also celebrate overcoming those fears. The beautiful illustrations by Guy Hobbs add to the storyline with details including the flora and fauna of Little Otter’s river home. Standouts include the turtles and butterflies, the bobcat pup, the lily pads and cattails, and the hungry chipmunk watching Little Otter from above."}</p>
      <p>{"The endnotes of the book include additional facts about North American River Otters and ways to find out more regarding the animals and ways to help them survive. See "}<a href={"https://youtu.be/SyJUYF9_mQA"} target="_blank" rel="noopener noreferrer">{"the book trailer here"}</a>{"."}</p>
      <p>{"This is a cute book for ages 6-8, although it would make a good rhyming read-aloud book for younger children as well."}</p>
    </div>
  );
}
