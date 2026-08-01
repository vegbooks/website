import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4361",
  "slug": "the-three-pigs",
  "url": "/reviews/the-three-pigs/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/05/the-three-pigs/",
  "title": "The Three Pigs",
  "publishedAt": "2011-03-05",
  "publishedLabel": "March 5th, 2011",
  "excerpt": "Wow! I love David Wiesner’s work — Tuesday is a classic around these parts — and so I was delighted to discover the new-to-me title The Three Pigs at the library recently. This book won the 2002 Caldecott Medal, so…",
  "image": {
    "src": "/media/2011/02/0618007016-lres.jpg",
    "alt": "The Three Pigs",
    "width": 210,
    "height": 165
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Caldecott Medal",
      "slug": "caldecott-medal",
      "url": "/topics/caldecott-medal/"
    },
    {
      "name": "Classic Fairy Tales",
      "slug": "classic-fairy-tales",
      "url": "/topics/classic-fairy-tales/"
    },
    {
      "name": "David Wiesner",
      "slug": "david-wiesner",
      "url": "/topics/david-wiesner/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fate",
      "slug": "fate",
      "url": "/topics/fate/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Storytelling",
      "slug": "storytelling",
      "url": "/topics/storytelling/"
    },
    {
      "name": "Wolves",
      "slug": "wolves",
      "url": "/topics/wolves/"
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
    "description": "Wow! I love David Wiesner’s work — Tuesday is a classic around these parts — and so I was delighted to discover the new-to-me title The Three Pigs at the library recently. This book won the 2002 Caldecott Medal, so…",
    "image": "https://vegbooks.org/media/2011/02/0618007016-lres.jpg"
  },
  "previous": {
    "title": "I Love Animals",
    "url": "/reviews/i-love-animals/"
  },
  "next": {
    "title": "A Book of Sleep",
    "url": "/reviews/a-book-of-sleep/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/02/0618007016-lres.jpg"}><img src={"/media/2011/02/0618007016-lres.jpg"} alt={"The Three Pigs"} width={210} height={165} /></a>
      </figure>
      <p>{"Wow! I love David Wiesner’s work — "}<em><a href={"http://www.goodreads.com/book/show/97860.Tuesday"} target="_blank" rel="noopener noreferrer">{"Tuesday"}</a></em>{" is a classic around these parts — and so I was delighted to discover the new-to-me title "}<em>{"The Three Pigs"}</em>{" at the library recently. This book won the 2002 Caldecott Medal, so it’s clearly not a new book, nor an obscure one. Still, because it was published in that period between my own childhood and the birth of my daughter, it feels like a brand new book to me!"}</p>
      <p>{"Vegetarians and vegans will love Wiesner’s spin on the "}<a href={"http://www2.ferrum.edu/applit/bibs/tales/other3pigs.htm"} target="_blank" rel="noopener noreferrer">{"Three Little Pigs"}</a>{". Not only does his book spare the pigs, but they go on to rescue other animals from familiar fairy tales. His secret? Wiesner lets the pigs and other animals “escape” the pages of their storybook, ultimately deciding their own fate by collecting the letters from the written page and arranging them in a new order."}</p>
      <p>{"My favorite part of the book is when one of the pigs looks out at the reader and says, “I think … someone’s out there.” (As a vegan, it reminds me of the times I’ve met real pigs and thought, “I think … someone’s in there.”) This is a wonderful book for anyone who questions why things are the way they are, is intrigued by the process of storytelling, or simply loves a good animal rescue tale."}</p>
      <p>{"Ages 5-8 (and the adults lucky enough to read with them)."}</p>
    </div>
  );
}
