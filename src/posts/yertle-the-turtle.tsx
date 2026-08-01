import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10446",
  "slug": "yertle-the-turtle",
  "url": "/reviews/yertle-the-turtle/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/12/29/yertle-the-turtle/",
  "title": "Yertle the Turtle",
  "publishedAt": "2016-12-29",
  "publishedLabel": "December 29th, 2016",
  "excerpt": "My three-year-old son has recently become interested in Dr. Seuss’s Yertle the Turtle, which seems appropriate in this political climate. My seven-year-old has even started asking to read it. It’s Dr. Seuss, but it…",
  "image": {
    "src": "/media/2016/12/9780394800875.jpg",
    "alt": "Yertle",
    "width": 2474,
    "height": 3375
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
      "name": "1950s Children Literature",
      "slug": "1950s-children-literature",
      "url": "/topics/1950s-children-literature/"
    },
    {
      "name": "Dr. Seuss",
      "slug": "dr-seuss",
      "url": "/topics/dr-seuss/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Power",
      "slug": "power",
      "url": "/topics/power/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Turtles",
      "slug": "turtles",
      "url": "/topics/turtles/"
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
    "description": "My three-year-old son has recently become interested in Dr. Seuss’s Yertle the Turtle, which seems appropriate in this political climate. My seven-year-old has even started asking to read it. It’s Dr. Seuss, but it…",
    "image": "https://vegbooks.org/media/2016/12/9780394800875.jpg"
  },
  "previous": {
    "title": "The Creepy Case Files of Margo Maloo",
    "url": "/reviews/the-creepy-case-files-of-margo-maloo/"
  },
  "next": {
    "title": "Finding Dory (2016)",
    "url": "/reviews/dory/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"My three-year-old son has recently become interested in Dr. Seuss’s "}<em>{"Yertle the Turtle"}</em>{", which seems appropriate in this political climate. My seven-year-old has even started asking to read it."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/12/9780394800875.jpg"} alt={"Yertle"} width={2474} height={3375} />
      </figure>
      <p>{"It’s Dr. Seuss, but it seems more poignant than most of his stories. It’s the story of a turtle who is king of his pond, of all he can see, but yearns for more. So he commands the other turtles to pile themselves up into a tower so that he can see more, and thus be king of more: “I’m king of a house! I”m king of a cow! I’m king of a tree!”"}</p>
      <p>{"As his hunger for power grows, a turtle at the bottom of the pile comes up with a plan to topple the mighty king’s tower. In the end, Yertle the Turtle King is only king of the mud. It ends with my favorite line, “And the turtles, of course… all turtles are free, as turtles and maybe, all creatures should be.” There is so much to this story that can be used to start great conversations."}</p>
      <p>{"Amazon recommends this book for ages 5-9 ("}<a href={"http://amzn.to/2ibZ1NS"} target="_blank" rel="noopener noreferrer">{"affiliate link"}</a>{"), but it seems 3-9 is more appropriate."}</p>
    </div>
  );
}
