import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4322",
  "slug": "all-the-world",
  "url": "/reviews/all-the-world/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/02/15/all-the-world/",
  "title": "All the World",
  "publishedAt": "2011-02-15",
  "publishedLabel": "February 15th, 2011",
  "excerpt": "Liz Garton Scanlon and Marla Frazee teamed up to create All the World,a book so beautiful that it received the Caldecott Honor last year. (The Caldecott Medal went to The Lion and the Mouse by Jerry Pinkney.)…",
  "image": {
    "src": "/media/2011/02/all-the-world.jpg",
    "alt": "All the World",
    "width": 210,
    "height": 209
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
      "name": "Beach",
      "slug": "beach",
      "url": "/topics/beach/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Caldecott Honor",
      "slug": "caldecott-honor",
      "url": "/topics/caldecott-honor/"
    },
    {
      "name": "Cooking",
      "slug": "cooking",
      "url": "/topics/cooking/"
    },
    {
      "name": "Cybils Award",
      "slug": "cybils-award",
      "url": "/topics/cybils-award/"
    },
    {
      "name": "Depictions of Dairy in Books",
      "slug": "depictions-of-dairy-in-books",
      "url": "/topics/depictions-of-dairy-in-books/"
    },
    {
      "name": "Diverse Families",
      "slug": "diverse-families",
      "url": "/topics/diverse-families/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Family",
      "slug": "family",
      "url": "/topics/family/"
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
      "name": "Honey",
      "slug": "honey",
      "url": "/topics/honey/"
    },
    {
      "name": "Liz Garton Scanlon",
      "slug": "liz-garton-scanlon",
      "url": "/topics/liz-garton-scanlon/"
    },
    {
      "name": "Marla Frazee",
      "slug": "marla-frazee",
      "url": "/topics/marla-frazee/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Shore",
      "slug": "shore",
      "url": "/topics/shore/"
    },
    {
      "name": "Summer",
      "slug": "summer",
      "url": "/topics/summer/"
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
    "description": "Liz Garton Scanlon and Marla Frazee teamed up to create All the World,a book so beautiful that it received the Caldecott Honor last year. (The Caldecott Medal went to The Lion and the Mouse by Jerry Pinkney.)…",
    "image": "https://vegbooks.org/media/2011/02/all-the-world.jpg"
  },
  "previous": {
    "title": "Earth Heroes: Champions of the Ocean",
    "url": "/reviews/earth-heroes-champions-of-the-ocean/"
  },
  "next": {
    "title": "Old Turtle and the Broken Truth",
    "url": "/reviews/old-turtle-and-the-broken-truth/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/02/all-the-world.jpg"}><img src={"/media/2011/02/all-the-world.jpg"} alt={"All the World"} width={210} height={209} /></a>
      </figure>
      <p>{"Liz Garton Scanlon and Marla Frazee teamed up to create "}<em>{"All the World"}</em>{",a book so beautiful that it received the Caldecott Honor last year. (The Caldecott Medal went to "}<em><a href={"/reviews/the-lion-the-mouse/"}>{"The Lion and the Mouse"}</a></em>{" by Jerry Pinkney.)"}</p>
      <p>{"Capturing the magic of everyday moments, this book boasts several scenes that vegetarian and vegan families will enjoy. Among my favorite are the depiction of play along the shore (“A moat to dig, a shell to keep/ All the world is wide and deep”) and a bustling farmer’s market (“Tomato blossom, fruit so red/ All the world’s a garden bed”). I also appreciate the diversity of families portrayed — or I should say "}<em>{"family"}</em>{", as one of the delightful surprises is discovering that all of the characters are related (“Nanas, papas, cousins, kin/ Piano, harp and violin”)."}</p>
      <p>{"There’s a serenity to both "}<a href={"http://www.pbs.org/parents/booklights/archives/2010/04/thursday-three-poem-picture-books.html"} target="_blank" rel="noopener noreferrer">{"the words"}</a>{" and illustrations that is reassuring and makes this an ideal bedtime book. Vegan parents, however, should be aware that the book portrays both honey production for human consumption and the use of butter in cooking."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
