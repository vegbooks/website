import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6118",
  "slug": "no-plain-hair",
  "url": "/reviews/no-plain-hair/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/10/14/no-plain-hair/",
  "title": "No Plain Hair!",
  "publishedAt": "2011-10-14",
  "publishedLabel": "October 14th, 2011",
  "excerpt": "The girl in this book has long curly red hair. Each day of the week she wears it differently – she’ll dress it up with barrettes, give it bangs like spaghetti, and adorn it with headbands, gold dust, and confetti.…",
  "image": {
    "src": "/media/2011/11/no-plain-hair.jpg",
    "alt": "No Plain Hair!",
    "width": 210,
    "height": 317
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
      "name": "Beginning Readers",
      "slug": "beginning-readers",
      "url": "/topics/beginning-readers/"
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
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Tamara Petrosino",
      "slug": "tamara-petrosino",
      "url": "/topics/tamara-petrosino/"
    },
    {
      "name": "Whale Watching",
      "slug": "whale-watching",
      "url": "/topics/whale-watching/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
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
    "description": "The girl in this book has long curly red hair. Each day of the week she wears it differently – she’ll dress it up with barrettes, give it bangs like spaghetti, and adorn it with headbands, gold dust, and confetti.…",
    "image": "https://vegbooks.org/media/2011/11/no-plain-hair.jpg"
  },
  "previous": {
    "title": "Animal Aha!",
    "url": "/reviews/animal-aha/"
  },
  "next": {
    "title": "On Parade",
    "url": "/reviews/on-parade/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/no-plain-hair.jpg"}><img src={"/media/2011/11/no-plain-hair.jpg"} alt={"No Plain Hair!"} width={210} height={317} /></a>
      </figure>
      <p>{"The girl in this book has long curly red hair. Each day of the week she wears it differently – she’ll dress it up with barrettes, give it bangs like spaghetti, and adorn it with headbands, gold dust, and confetti. She hates to be restricted and loves to experiment. She matches her hair style to her mood each day."}</p>
      <p>{"I’m torn about this book. It isn’t really about anything. A girl’s hair? Seems too frivolous a message to teach my daughter – that a girl’s hair is so important, maybe the most important thing about her. But the girl is active, and each day her hair matches her exciting activities."}</p>
      <p>{"One of the activities is something that really excites me – whale watching. She takes a boat out into the ocean (with a ponytail, of course) to see whales. So many children’s books feature going to the zoo. Children must think that’s where animals live. This book features going to see animals in the wild, and my favorite animal at that."}</p>
      <p>{"In the end, we got rid of the book as it was too frivolous. But I still think about the whale watching and wish that had been a part of a better story."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
