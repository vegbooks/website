import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9707",
  "slug": "wild-about-bears",
  "url": "/reviews/wild-about-bears/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/05/22/wild-about-bears/",
  "title": "Wild About Bears",
  "publishedAt": "2014-05-22",
  "publishedLabel": "May 22nd, 2014",
  "excerpt": "Proving that bears are much more than inspiration for cuddly stuffed animals to fall asleep with, Wild About Bears,a beautiful nonfiction children’s book by Jeannie Brett, sets out to educate readers about the eight…",
  "image": {
    "src": "/media/2014/05/wild-about-bears.jpg",
    "alt": "Image of Jeannie Brett's children's book Wild About Bears",
    "width": 210,
    "height": 163
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Brown Bears",
      "slug": "brown-bears",
      "url": "/topics/brown-bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jeannie Brett",
      "slug": "jeannie-brett",
      "url": "/topics/jeannie-brett/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    },
    {
      "name": "Polar Bears",
      "slug": "polar-bears",
      "url": "/topics/polar-bears/"
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
    "description": "Proving that bears are much more than inspiration for cuddly stuffed animals to fall asleep with, Wild About Bears,a beautiful nonfiction children’s book by Jeannie Brett, sets out to educate readers about the eight…",
    "image": "https://vegbooks.org/media/2014/05/wild-about-bears.jpg"
  },
  "previous": {
    "title": "Peep and the Big Wide World",
    "url": "/reviews/peep-and-the-big-wide-world/"
  },
  "next": {
    "title": "Litton’s Weekend Adventure",
    "url": "/reviews/littons-weekend-adventure/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/wild-about-bears/"}><img src={"/media/2014/05/wild-about-bears.jpg"} alt={"Image of Jeannie Brett's children's book Wild About Bears"} width={210} height={163} /></a>
      </figure>
      <p>{"Proving that bears are much more than inspiration for cuddly stuffed animals to fall asleep with, "}<em>{"Wild About Bears,"}</em>{"a beautiful nonfiction children’s book by Jeannie Brett, sets out to educate readers about the eight different species of bear around the world. The goal is two-fold: first, to entertain with interesting facts and gorgeous watercolors of all eight species of bears, and second, to inspire readers to help conserve the habitats of these bears so that they can continue to fascinate us for generations to come."}</p>
      <p><em>{"Wild About Bears"}</em>{" begins with three sections of general information about bears and their behaviors and traits. The book then goes into factual details about each of the eight species of bear. Written clearly, children and caregivers will find out about eating habits and what sort of environment each bear needs to best survive. Children will be excited to learn more about familiar bears like the Polar Bear and Brown Bear, and they will love learning about the unique markings of the Bespectacled Bear and the shy Sloth Bear. The text is understandable, but it doesn’t oversimplify; it challenges young elementary readers to seek out definitions and additional information."}</p>
      <p>{"Jeannie Brett’s watercolor depictions of each species of bear are beautiful and playful. Each painted picture shows the bears in different scenes and in their own habitats. The color-coded map and illustrated Habitat Glossary that close the book are also elegantly and accessibly done. Children will return to "}<em>{"Wild About Bears"}</em>{" again and again for both the information and the pictures."}</p>
      <p>{"Parents of sensitive children should be aware that while "}<em>{"Wild About Bears"}</em>{" paints a protective and gentle image of wild bears, references are made to the realities of hunting and scavenging in natural habitats."}</p>
      <p>{"Recommended for children ages 6 – 9, although both slightly younger and older children will appreciate the book."}</p>
      <p><em>{"The publisher sent a review copy of "}<a href={"http://www.charlesbridge.com/productdetails.cfm?PC=5826"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{"."}</em></p>
    </div>
  );
}
