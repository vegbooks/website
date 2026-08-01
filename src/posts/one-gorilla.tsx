import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8628",
  "slug": "one-gorilla",
  "url": "/reviews/one-gorilla/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/03/03/one-gorilla/",
  "title": "One Gorilla",
  "publishedAt": "2013-03-03",
  "publishedLabel": "March 3rd, 2013",
  "excerpt": "Counting books can be a wonderful way to engage young children. Filled with pictures and numbers it can quickly be used as a tool to help them learn counting skills. With One Gorilla: A Counting Book (affiliate…",
  "image": {
    "src": "/media/2013/02/9780763663520.jpg",
    "alt": "One Gorilla",
    "width": 210,
    "height": 241
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
      "name": "Anthony Browne",
      "slug": "anthony-browne",
      "url": "/topics/anthony-browne/"
    },
    {
      "name": "Counting",
      "slug": "counting",
      "url": "/topics/counting/"
    },
    {
      "name": "Gorillas",
      "slug": "gorillas",
      "url": "/topics/gorillas/"
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
    "description": "Counting books can be a wonderful way to engage young children. Filled with pictures and numbers it can quickly be used as a tool to help them learn counting skills. With One Gorilla: A Counting Book (affiliate…",
    "image": "https://vegbooks.org/media/2013/02/9780763663520.jpg"
  },
  "previous": {
    "title": "Jasper’s Story: Saving Moon Bears",
    "url": "/reviews/jaspers-story-saving-moon-bears/"
  },
  "next": {
    "title": "Moose n’ Me",
    "url": "/reviews/moose-n-me/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/02/9780763663520.jpg"}><img src={"/media/2013/02/9780763663520.jpg"} alt={"One Gorilla"} width={210} height={241} /></a>
      </figure>
      <p>{"Counting books can be a wonderful way to engage young children. Filled with pictures and numbers it can quickly be used as a tool to help them learn counting skills. With "}<em>{"One Gorilla: A Counting Book"}</em>{" ("}<a href={"http://www.amazon.com/gp/product/0763663522/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0763663522&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"affiliate link"}</a>{"), children will gain those beginning counting skills, but they benefit in other ways as well, such as gaining an appreciation for art."}</p>
      <p>{"This is a great book, not as much for the counting as for the amazing artwork throughout it. Each page is illustrated with beautiful images of animals, including a gorilla, orangutans, chimpanzees, mandrills, baboons, and others. Viewing these beautiful pages children will also learn at the end that all the animals in the book have something in common – they are all primates, and all part of our family."}</p>
      <p>{"There is nothing in this book that vegetarian and vegan parents would not want their children being exposed to, and plenty that they would! Anthony Browne has written and illustrated this beautiful piece of artwork that makes a great addition to any preschooler’s book collection."}</p>
      <p><em>{"The "}<a href={"http://www.candlewick.com/"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{" provided a copy of this book for review."}</em></p>
    </div>
  );
}
