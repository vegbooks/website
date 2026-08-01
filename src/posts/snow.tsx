import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6696",
  "slug": "snow",
  "url": "/reviews/snow/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/12/25/snow/",
  "title": "Snow",
  "publishedAt": "2011-12-25",
  "publishedLabel": "December 25th, 2011",
  "excerpt": "This book by P.D. Eastman is part of the Dr. Seuss family. Similar in style to Go, Dog, Go, it’s an early reading book about two kids and their dog playing in the snow. They run, throw snow balls, build a snowman,…",
  "image": {
    "src": "/media/2011/12/978-0-394-80027-1.jpg",
    "alt": "Snow",
    "width": 209,
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "P.D. Eastman",
      "slug": "p-d-eastman",
      "url": "/topics/p-d-eastman/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Roy McKie",
      "slug": "roy-mckie",
      "url": "/topics/roy-mckie/"
    },
    {
      "name": "Snow",
      "slug": "snow",
      "url": "/topics/snow/"
    },
    {
      "name": "Winter",
      "slug": "winter",
      "url": "/topics/winter/"
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
    "description": "This book by P.D. Eastman is part of the Dr. Seuss family. Similar in style to Go, Dog, Go, it’s an early reading book about two kids and their dog playing in the snow. They run, throw snow balls, build a snowman,…",
    "image": "https://vegbooks.org/media/2011/12/978-0-394-80027-1.jpg"
  },
  "previous": {
    "title": "Wolf Christmas",
    "url": "/reviews/wolf-christmas/"
  },
  "next": {
    "title": "Teeny Tiny Ernest",
    "url": "/reviews/teeny-tiny-ernest/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/12/978-0-394-80027-1.jpg"}><img src={"/media/2011/12/978-0-394-80027-1.jpg"} alt={"Snow"} width={209} height={300} /></a>
      </figure>
      <p>{"This book by P.D. Eastman is part of the Dr. Seuss family. Similar in style to "}<em><a href={"http://www.goodreads.com/book/show/460548.Go_Dog_Go_"} target="_blank" rel="noopener noreferrer">{"Go, Dog, Go"}</a></em>{", it’s an early reading book about two kids and their dog playing in the snow. They run, throw snow balls, build a snowman, ski, make an igloo."}</p>
      <p>{"It’s a simple book with simple pictures that are good for read-aloud and for learning to read. However, I can’t stand it. I am not a fan of P.D. Eastman, though I know his books are popular with the kids. We have this one and "}<em>{"Go, Dog, Go"}</em>{", and I just don’t like to read them. My daughter enjoys them enough though they are definitely not amongst her favorite books, and certainly not as loved as the real Dr. Seuss books. I’ve always felt thatit’s a major stretch to include P.D. Eastman books in the Dr. Seuss family of books."}</p>
      <p>{"In one part of the book, the two children build an igloo and sit down for a picnic. It’s strange – it seems all they eat is meat. “Do you like to eat? Do you like meat? Come and eat our meat.” I get that it’s a nice rhyme with easy words, but each time I get to this part, I stumble because I’m not sure how to proceed."}</p>
      <p>{"My daughter received this book at birth, and I’ve held onto it thinking that she might enjoy it when she is learning to read. However, I’ve decided that I don’t like the book enough make the meat reference acceptable. I’ll be donating this book to make room for my daughter’s Christmas presents."}</p>
      <p>{"Baby-Preschool."}</p>
    </div>
  );
}
