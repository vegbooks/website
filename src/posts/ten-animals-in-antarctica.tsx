import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11076",
  "slug": "ten-animals-in-antarctica",
  "url": "/reviews/ten-animals-in-antarctica/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/04/27/ten-animals-in-antarctica/",
  "title": "Ten Animals in Antarctica",
  "publishedAt": "2021-04-27",
  "publishedLabel": "April 27th, 2021",
  "excerpt": "In blues, browns, and greys, punctuated with the occasional bright red, TEN ANIMALS IN ANTARCTICA by Moira Courtturns a simple counting book into a world of cold, windy, seemingly barren discovery. The descriptive…",
  "image": {
    "src": "/media/2021/03/ten-animals-in-antarctica.jpeg",
    "alt": "Ten Animals in Antarctica",
    "width": 300,
    "height": 300
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
      "name": "counting books",
      "slug": "counting-books",
      "url": "/topics/counting-books/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Moira Court",
      "slug": "moira-court",
      "url": "/topics/moira-court/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "preschool",
      "slug": "preschool",
      "url": "/topics/preschool/"
    },
    {
      "name": "south pole",
      "slug": "south-pole",
      "url": "/topics/south-pole/"
    },
    {
      "name": "Ten Animals in Antarctica",
      "slug": "ten-animals-in-antarctica",
      "url": "/topics/ten-animals-in-antarctica/"
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
    "description": "In blues, browns, and greys, punctuated with the occasional bright red, TEN ANIMALS IN ANTARCTICA by Moira Courtturns a simple counting book into a world of cold, windy, seemingly barren discovery. The descriptive…",
    "image": "https://vegbooks.org/media/2021/03/ten-animals-in-antarctica.jpeg"
  },
  "previous": {
    "title": "Summertime Sleepers: Animals that Estivate",
    "url": "/reviews/summertime-sleepers-animals-that-estivate/"
  },
  "next": {
    "title": "Llama Glamarama and Free to Be Elephant Me",
    "url": "/reviews/llama-glamarama-and-free-to-be-elephant-me/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2021/03/ten-animals-in-antarctica.jpeg"}><img src={"/media/2021/03/ten-animals-in-antarctica.jpeg"} alt={"Ten Animals in Antarctica"} width={300} height={300} /></a>
      </figure>
      <p>{"In blues, browns, and greys, punctuated with the occasional bright red, "}<strong><a href={"https://www.indiebound.org/book/9781623542320"} target="_blank" rel="noopener noreferrer">{"TEN ANIMALS IN ANTARCTICA by Moira Court"}</a></strong>{"turns a simple counting book into a world of cold, windy, seemingly barren discovery. The descriptive list that brings up animals like leopard seals, orcas, krill, and even snow petrels with a depth of adjectives for the animals as well as the landscape. Children will love noticing the spots on the seals, the many legs and appendages of the krill, and the jagged teeth on the blackfin icefish. (Hint: They don’t all have the same amount of teeth, so it’s a counting bonus!)"}</p>
      <p>{"The illustrations are collages of all different sizes, and Court’s ability to help the animals express anthropomorphic emotions which will appeal to the target audience of 2-5 year olds. Highly Recommended."}</p>
    </div>
  );
}
