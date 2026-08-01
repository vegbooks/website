import type { PostMetadata } from '../content/types';

export const article = {
  "id": "556",
  "slug": "gorilla",
  "url": "/reviews/gorilla/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/01/06/gorilla/",
  "title": "Gorilla",
  "publishedAt": "2010-01-06",
  "publishedLabel": "January 6th, 2010",
  "excerpt": "If your kiddo likes Good Night, Gorilla, I suggest you freecycle (or maybe just recycle) the zoo propaganda and pick up a secondhand copy of Anthony Browne’s Gorilla instead. This heartwarming picture book details…",
  "image": {
    "src": "/media/2010/01/gorilla1.jpg",
    "alt": "Gorilla",
    "width": 243,
    "height": 216
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
      "name": "1980s Childrens Literature",
      "slug": "1980s-childrens-literature",
      "url": "/topics/1980s-childrens-literature/"
    },
    {
      "name": "Anthony Browne",
      "slug": "anthony-browne",
      "url": "/topics/anthony-browne/"
    },
    {
      "name": "Children's Laureate",
      "slug": "childrens-laureate",
      "url": "/topics/childrens-laureate/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Gorillas",
      "slug": "gorillas",
      "url": "/topics/gorillas/"
    },
    {
      "name": "Orangutan",
      "slug": "orangutan",
      "url": "/topics/orangutan/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Primates",
      "slug": "primates",
      "url": "/topics/primates/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "If your kiddo likes Good Night, Gorilla, I suggest you freecycle (or maybe just recycle) the zoo propaganda and pick up a secondhand copy of Anthony Browne’s Gorilla instead. This heartwarming picture book details…",
    "image": "https://vegbooks.org/media/2010/01/gorilla1.jpg"
  },
  "previous": {
    "title": "Diary of a Worm",
    "url": "/reviews/diary-of-a-worm-guest-post-by-jacqueline-bodnar/"
  },
  "next": {
    "title": "The Adventures of Taxi Dog",
    "url": "/reviews/the-adventures-of-taxi-dog-guest-post-by-carolyn-mullin/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/01/gorilla1.jpg"}><img src={"/media/2010/01/gorilla1.jpg"} alt={"Gorilla"} width={243} height={216} /></a>
      </figure>
      <p>{"If your kiddo likes "}<em>{"Good Night, Gorilla"}</em>{", I suggest you "}<a href={"http://www.freecycle.org/"} target="_blank" rel="noopener noreferrer">{"freecycle"}</a>{" (or maybe just recycle) the zoo propaganda and pick up a secondhand copy of "}<a href={"http://entertainment.timesonline.co.uk/tol/arts_and_entertainment/books/article6464248.ece"} target="_blank" rel="noopener noreferrer">{"Anthony Browne’s"}</a>{" "}<em>{"Gorilla"}</em>{" instead."}</p>
      <p>{"This "}<a href={"http://www.goodreads.com/book/show/460285.Gorilla"}>{"heartwarming picture book"}</a>{" details the enchanted evening a little girl Hannah, somewhat neglected at home, experiences with her toy gorilla-turned-real. What makes this book a keeper from my perspective is Hannah’s reaction to viewing primates — gorillas, an orangutan, and a chimpanzee — in the zoo. Despite her joy at seeing these animals in person, "}<a href={"http://www.childrenslaureate.org.uk/Anthony-Browne/Illustration-Gallery"} target="_blank" rel="noopener noreferrer">{"she views them through cage bars"}</a>{" and observes that they are “sad.”"}</p>
      <p>{"The next morning, Hannah awakes to an attentive father who offers to do finally what she’s been asking him to do all along: bring her to the zoo. Whether the pair goes is ambiguous. I like to think that they spent a leisurely day in the park instead."}</p>
      <p>{"Ages 4-7."}</p>
    </div>
  );
}
