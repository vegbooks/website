import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3499",
  "slug": "i-can-save-the-earth",
  "url": "/reviews/i-can-save-the-earth/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/13/i-can-save-the-earth/",
  "title": "I Can Save the Earth",
  "publishedAt": "2010-11-13",
  "publishedLabel": "November 13th, 2010",
  "excerpt": "This is yet another great eco-friendly book by Alison Inches. The little monster in the book starts out not being environmentally friendly. He learns about all the ways that he is not making good choices and then on…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "I Can Save the Earth",
    "width": 210,
    "height": 280
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
      "name": "Alison Inches",
      "slug": "alison-inches",
      "url": "/topics/alison-inches/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Recycled Paper Books",
      "slug": "recycled-paper-books",
      "url": "/topics/recycled-paper-books/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "This is yet another great eco-friendly book by Alison Inches. The little monster in the book starts out not being environmentally friendly. He learns about all the ways that he is not making good choices and then on…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "Harry by the Sea",
    "url": "/reviews/harry-by-the-sea/"
  },
  "next": {
    "title": "Eco-Family’s Guide to Going Green",
    "url": "/reviews/eco-familys-guide-to-going-green/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"I Can Save the Earth"} width={210} height={280} /></a>
      </figure>
      <p>{"This is yet another great eco-friendly book by Alison Inches. The little monster in the book starts out not being environmentally friendly. He learns about all the ways that he is not making good choices and then on his journey learns that making eco-friendly choices is not only fun, but much better for the planet."}</p>
      <p>{"This is a fun book that will help children to identify some of the things they are doing that are harming the planet and what they can do to make "}<a href={"http://www.eduplace.com/kids/sla/4/earth_act.html"} target="_blank" rel="noopener noreferrer">{"better choices"}</a>{". Plus, like Inches’ other eco-friendly children’s books, they are printed on 100 percent postconsumer waste recycled paper and use 100 soy ink."}</p>
      <p>{"Vegetarian and vegan parents will be find this book a great choice to add to their collection. The message is solid and the story is entertaining!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
