import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6773",
  "slug": "grow-it-yourself",
  "url": "/reviews/grow-it-yourself/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/06/grow-it-yourself/",
  "title": "Grow It Yourself!",
  "publishedAt": "2012-01-06",
  "publishedLabel": "January 6th, 2012",
  "excerpt": "Capstone now has a new wonderful imprint, Heinemann-Raintree, that’s solely dedicated to publishing curriculum-driven nonfiction “that encourages inquiry and satisfies curiosity” for students in grades PreK-8. In…",
  "image": {
    "src": "/media/2012/01/9781432951115.jpg",
    "alt": "Grow It Yourself!",
    "width": 211,
    "height": 240
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Classroom Books",
      "slug": "classroom-books",
      "url": "/topics/classroom-books/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Homeschooling",
      "slug": "homeschooling",
      "url": "/topics/homeschooling/"
    },
    {
      "name": "John Malam",
      "slug": "john-malam",
      "url": "/topics/john-malam/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Capstone now has a new wonderful imprint, Heinemann-Raintree, that’s solely dedicated to publishing curriculum-driven nonfiction “that encourages inquiry and satisfies curiosity” for students in grades PreK-8. In…",
    "image": "https://vegbooks.org/media/2012/01/9781432951115.jpg"
  },
  "previous": {
    "title": "Fred Eats a Pea",
    "url": "/reviews/fred-eats-a-pea/"
  },
  "next": {
    "title": "Hairy Hezekiah",
    "url": "/reviews/hairy-hezekiah/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/01/9781432951115.jpg"}><img src={"/media/2012/01/9781432951115.jpg"} alt={"Grow It Yourself!"} width={211} height={240} /></a>
      </figure>
      <p>{"Capstone now has a new wonderful imprint, "}<a href={"http://www.capstonepub.com/category/LIB_PUBLISHER_HRT"} target="_blank" rel="noopener noreferrer">{"Heinemann-Raintree"}</a>{", that’s solely dedicated to publishing curriculum-driven nonfiction “that encourages inquiry and satisfies curiosity” for students in grades PreK-8. In their “Grow It Yourself!” series, children are challenged to cultivate something with a tangible result – catnip for a cat toy, tomatoes for a tomato and cheese (who says it can’t be Daiya, Follow Your Heart or even slices of Tofutti?) sandwich, pumpkins for soup, plants for a butterfly "}<em>{"farm"}</em>{" (why they didn’t title it a "}<em>{"garden"}</em>{" is beyond my comprehension!), and more."}</p>
      <p>{"Generally these titles are pretty veg-friendly with a few minor tweaks; e.g. – soy yogurt in place of the “natural yogurt” and agave vs. the honey called for in the "}<em>{"Grow Your Own Smoothie"}</em>{" text."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2012/01/9781432951108.jpg"}><img src={"/media/2012/01/9781432951108.jpg"} alt={""} width={210} height={238} /></a>
      </figure>
      <p>{"The text is of course age appropriate and the photography colorful and inviting. A glossary in each book ensures that young ones are expanding their vocabulary. All in all, these are a great find. I particularly enjoyed "}<em>{"Grow Your Own Catnip Toy"}</em>{", but then again who couldn’t resist a book with cute kitties being silly? It made me want to plow my yard and get my hands dirty, just like the kids in the book. Good job, author John Malam, for showing kids they don’t need a so-called green thumb to just follow basic instructions and realize the fruits of their labor."}</p>
      <p>{"Ages 6-8."}</p>
    </div>
  );
}
