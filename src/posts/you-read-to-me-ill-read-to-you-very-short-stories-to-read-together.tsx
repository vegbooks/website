import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10314",
  "slug": "you-read-to-me-ill-read-to-you-very-short-stories-to-read-together",
  "url": "/reviews/you-read-to-me-ill-read-to-you-very-short-stories-to-read-together/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/04/09/you-read-to-me-ill-read-to-you-very-short-stories-to-read-together/",
  "title": "You Read to Me, I’ll Read to You: Very Short Stories to Read Together",
  "publishedAt": "2016-04-09",
  "publishedLabel": "April 9th, 2016",
  "excerpt": "My six-year-old daughter loves this book. It is a collection of short poems designed to be read by two people, each taking a turn to read one or two lines, indicated by different colored text. It is simple enough for…",
  "image": {
    "src": "/media/2016/04/f4d3072a580f7ba38dd3645653a0e27a.jpg",
    "alt": "You Read to Me cover",
    "width": 1024,
    "height": 1334
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
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
    },
    {
      "name": "Books for Vegetarian Kids",
      "slug": "books-for-vegetarian-kids",
      "url": "/topics/books-for-vegetarian-kids/"
    },
    {
      "name": "Books that Teach Empathy",
      "slug": "books-that-teach-empathy",
      "url": "/topics/books-that-teach-empathy/"
    },
    {
      "name": "Depictions of Animals",
      "slug": "depictions-of-animals",
      "url": "/topics/depictions-of-animals/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Empathy",
      "slug": "empathy",
      "url": "/topics/empathy/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Kindness",
      "slug": "kindness",
      "url": "/topics/kindness/"
    },
    {
      "name": "Mary Ann Hoberman",
      "slug": "mary-ann-hoberman",
      "url": "/topics/mary-ann-hoberman/"
    },
    {
      "name": "Michael Emberley",
      "slug": "michael-emberley",
      "url": "/topics/michael-emberley/"
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
    "description": "My six-year-old daughter loves this book. It is a collection of short poems designed to be read by two people, each taking a turn to read one or two lines, indicated by different colored text. It is simple enough for…",
    "image": "https://vegbooks.org/media/2016/04/f4d3072a580f7ba38dd3645653a0e27a.jpg"
  },
  "previous": {
    "title": "Zootopia (2016)",
    "url": "/reviews/zootopia-2016/"
  },
  "next": {
    "title": "Achoo! Why Pollen Counts",
    "url": "/reviews/achoo-why-pollen-counts/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"My six-year-old daughter loves this book. It is a collection of short poems designed to be read by two people, each taking a turn to read one or two lines, indicated by different colored text."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/04/f4d3072a580f7ba38dd3645653a0e27a.jpg"} alt={"You Read to Me cover"} width={1024} height={1334} />
      </figure>
      <p>{"It is simple enough for a new reader and more fun than books we with which normally practice reading because we get to read it together. We first got this from the library and loved it so much that we picked up a copy to keep at home."}</p>
      <p>{"The first story is of most interest to vegetarian families. One reader is a cat, and the other reader is trying to convince the cat not to eat a mouse:"}</p>
      <blockquote>
        <p>{"Eating mice is really rude"}</p>
        <p>{"It’s not a proper thing to do"}</p>
        <p>{"Think how sad you would feel if you were eaten for a meal."}</p>
      </blockquote>
      <p>{"It was a pleasant surprise to find these lines in this book."}</p>
      <p>{"Ages 5 to 8."}</p>
    </div>
  );
}
