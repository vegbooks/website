import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10698",
  "slug": "baby-loves-green-energy",
  "url": "/reviews/baby-loves-green-energy/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/12/17/baby-loves-green-energy/",
  "title": "Baby Loves Green Energy!",
  "publishedAt": "2018-12-17",
  "publishedLabel": "December 17th, 2018",
  "excerpt": "We love the “Baby Loves” series from Ruth Spiro, illustrated by Irene Chan. It covers complicated scientific topics including thermodynamics (!) and structural engineering in simple yet accurate detail. The books are…",
  "image": {
    "src": "/media/2018/12/baby-loves-green-energy.jpeg",
    "alt": "Baby Loves Green Energy!",
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
      "name": "Baby Loves Green Energy",
      "slug": "baby-loves-green-energy",
      "url": "/topics/baby-loves-green-energy/"
    },
    {
      "name": "Board Books",
      "slug": "board-books",
      "url": "/topics/board-books/"
    },
    {
      "name": "Irene Chan",
      "slug": "irene-chan",
      "url": "/topics/irene-chan/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Ruth Spiro",
      "slug": "ruth-spiro",
      "url": "/topics/ruth-spiro/"
    },
    {
      "name": "young readers",
      "slug": "young-readers",
      "url": "/topics/young-readers/"
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
    "description": "We love the “Baby Loves” series from Ruth Spiro, illustrated by Irene Chan. It covers complicated scientific topics including thermodynamics (!) and structural engineering in simple yet accurate detail. The books are…",
    "image": "https://vegbooks.org/media/2018/12/baby-loves-green-energy.jpeg"
  },
  "previous": {
    "title": "Stretch to the Sun: From a Tiny Sprout to the Tallest Tree in the World",
    "url": "/reviews/stretch-to-the-sun-from-a-tiny-sprout-to-the-tallest-tree-in-the-world/"
  },
  "next": {
    "title": "Not a Purse",
    "url": "/reviews/not-a-purse/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2018/12/baby-loves-green-energy.jpeg"} alt={"Baby Loves Green Energy!"} width={300} height={300} />
      </figure>
      <p>{"We love the "}<a href={"https://www.charlesbridge.com/pages/ruth-spiro"} target="_blank" rel="noopener noreferrer">{"“Baby Loves” series from Ruth Spiro"}</a>{", illustrated by Irene Chan. It covers complicated scientific topics including thermodynamics (!) and structural engineering in simple yet accurate detail. The books are aimed at babies through three years, and the expressive illustrations and child-friendly language are perfect for children to admire on their own or read together with a caregiver. The newest book in the series, "}<em><a href={"https://www.charlesbridge.com/products/baby-loves-green-energy"} target="_blank" rel="noopener noreferrer">{"Baby Loves Green Energy"}</a></em>{", is especially welcome because of its timely and relatable topic."}</p>
      <p>{"The board book opens with a recognizable scene: Baby and her blanket. It then transitions to discussing Earth’s blanket of air and how it heats up and gets too warm because of greenhouse gases. Using Hydroelectric, Wind, Solar, and Geothermal energy are all mentioned as a way people can help slow the rise of greenhouse gases. As with most good child-centric books, Baby is also given ways she can help."}</p>
      <p><em><a href={"https://www.charlesbridge.com/products/baby-loves-green-energy"} target="_blank" rel="noopener noreferrer">{"Baby Loves Green Energy"}</a></em>{" has just enough information, accompanied by reassuring and colorful pictures, to encourage a child’s interest. Adults who think they know the processes involved in greenhouse gases may be reminded of a few things as well!"}</p>
      <p>{"Recommended for ages infant – 3 years old."}</p>
    </div>
  );
}
