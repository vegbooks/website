import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10242",
  "slug": "butterfly-counting",
  "url": "/reviews/butterfly-counting/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/01/04/butterfly-counting/",
  "title": "Butterfly Counting",
  "publishedAt": "2016-01-04",
  "publishedLabel": "January 4th, 2016",
  "excerpt": "Butterfly Counting is much more than a colorful counting book. It is a butterfly-focused collection of gorgeous artwork, a language book, and a mini-encyclopedia of facts about butterflies, moths, a grasshopper, and…",
  "image": {
    "src": "/media/2016/01/butterfly-counting.jpg",
    "alt": "butterfly-counting",
    "width": 480,
    "height": 360
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
      "name": "Butterflies",
      "slug": "butterflies",
      "url": "/topics/butterflies/"
    },
    {
      "name": "Counting",
      "slug": "counting",
      "url": "/topics/counting/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Jerry Pallotta",
      "slug": "jerry-pallotta",
      "url": "/topics/jerry-pallotta/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Shennen Bersani",
      "slug": "shennen-bersani",
      "url": "/topics/shennen-bersani/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
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
    "description": "Butterfly Counting is much more than a colorful counting book. It is a butterfly-focused collection of gorgeous artwork, a language book, and a mini-encyclopedia of facts about butterflies, moths, a grasshopper, and…",
    "image": "https://vegbooks.org/media/2016/01/butterfly-counting.jpg"
  },
  "previous": {
    "title": "101 Dalmatians (1996)",
    "url": "/reviews/101-dalmatians-1996/"
  },
  "next": {
    "title": "The Extraordinary Education of Nicholas Benedict",
    "url": "/reviews/the-extraordinary-education-of-nicholas-benedict/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p><em>{"Butterfly Counting"}</em>{" is much more than a colorful counting book. It is a butterfly-focused collection of gorgeous artwork, a language book, and a mini-encyclopedia of facts about butterflies, moths, a grasshopper, and even a penguin!"}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/01/butterfly-counting.jpg"} alt={"butterfly-counting"} width={480} height={360} />
      </figure>
      <p>{"The author’s sense of humor comes through in the introductory pages that point out that there are no butterflies in Antarctica, and in a gentle joke about counting twenty “butterflies.” The pages are filled with interesting and fun facts about 25 different butterflies from around the world. A particularly fantastic aspect of Butterfly Counting is providing the word for “butterfly” in more than two dozen languages, including Swahili, Portuguese, and Turkish."}</p>
      <p>{"The illustrations are detailed and realistic, and they show gorgeous wings, habitats, and even butterfly eggs. Counting the various butterflies will be both engaging and challenging. The designs are astounding and will encourage both children and adults to learn more about the world around them."}</p>
      <p>{"Ages 3 to 7."}</p>
      <p><em><a href={"http://www.charlesbridge.com/"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" sent a copy of this book for an honest review."}</em></p>
    </div>
  );
}
