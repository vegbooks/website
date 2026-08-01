import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1170",
  "slug": "horton-hatches-the-egg",
  "url": "/reviews/horton-hatches-the-egg/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/11/horton-hatches-the-egg/",
  "title": "Horton Hatches the Egg",
  "publishedAt": "2010-03-11",
  "publishedLabel": "March 11th, 2010",
  "excerpt": "I’m just crazy about Dr. Seuss’s elephant Horton. Horton Hatches the Egg is quintessential Horton. He’s heroic, true to his word, and unwavering in his commitment to do good. When a momma bird needs a break from her…",
  "image": {
    "src": "/media/2010/02/978-0-7393-3931-2.jpg",
    "alt": "Horton Hatches the Egg",
    "width": 241,
    "height": 328
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
      "name": "1940s Childrens Literature",
      "slug": "1940s-childrens-literature",
      "url": "/topics/1940s-childrens-literature/"
    },
    {
      "name": "Bravery",
      "slug": "bravery",
      "url": "/topics/bravery/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
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
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Horton",
      "slug": "horton",
      "url": "/topics/horton/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Lesson Plans",
      "slug": "lesson-plans",
      "url": "/topics/lesson-plans/"
    },
    {
      "name": "Loyalty",
      "slug": "loyalty",
      "url": "/topics/loyalty/"
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
    "description": "I’m just crazy about Dr. Seuss’s elephant Horton. Horton Hatches the Egg is quintessential Horton. He’s heroic, true to his word, and unwavering in his commitment to do good. When a momma bird needs a break from her…",
    "image": "https://vegbooks.org/media/2010/02/978-0-7393-3931-2.jpg"
  },
  "previous": {
    "title": "Pumpkins",
    "url": "/reviews/pumpkins/"
  },
  "next": {
    "title": "Big Cat Conservation",
    "url": "/reviews/big-cat-conservation/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/978-0-7393-3931-2.jpg"}><img src={"/media/2010/02/978-0-7393-3931-2.jpg"} alt={"Horton Hatches the Egg"} width={241} height={328} /></a>
      </figure>
      <p>{"I’m just crazy about Dr. Seuss’s elephant "}<a href={"/reviews/horton-hears-a-who-the-book/"} target="_blank" rel="noopener noreferrer">{"Horton"}</a>{". "}<em>{"Horton Hatches the Egg"}</em>{" is quintessential Horton. He’s heroic, true to his word, and unwavering in his commitment to do good."}</p>
      <p>{"When a momma bird needs a break from her nest, Horton reluctantly takes over, keeping her egg warm over the course of months. When it rains, he gets drenched so that no harm will come to the baby inside. When hunters come, he stands (well, sits) his ground, never abandoning the egg for his own safety. And when he’s dragged off to the circus, he dutifully cares for the egg, despite "}<a href={"http://www.circuses.com/"} target="_blank" rel="noopener noreferrer">{"his own misery"}</a>{"."}</p>
      <p>{"I won’t spoil the ending but I must tell you that it’s very good, both from a preschooler’s perspective and a vegan momma’s vantage point."}</p>
      <p><a href={"http://www.commonsensemedia.org/book-reviews/Horton-Hatches-Egg.html"} target="_blank" rel="noopener noreferrer">{"Ages 4-7"}</a>{". Homeschooling parents and teachers might enjoy "}<a href={"http://www.nancypolette.com/LitGuidesText/horton.htm"} target="_blank" rel="noopener noreferrer">{"this lesson plan"}</a>{"to accompany the text."}</p>
    </div>
  );
}
