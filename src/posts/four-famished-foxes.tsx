import type { PostMetadata } from '../content/types';

export const article = {
  "id": "695",
  "slug": "four-famished-foxes",
  "url": "/reviews/four-famished-foxes/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/29/four-famished-foxes/",
  "title": "Four Famished Foxes and Fosdyke",
  "publishedAt": "2010-03-29",
  "publishedLabel": "March 29th, 2010",
  "excerpt": "In this story by Pamela Duncan Edwards, Fosdyke is different from his siblings. Rather than wanting to go out hunting each night like they do, he likes to cook French food. Each evening, as the other foxes head out…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Four Famished Foxes and Fosdyke",
    "width": 210,
    "height": 139
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
      "name": "Alliteration",
      "slug": "alliteration",
      "url": "/topics/alliteration/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Foxes",
      "slug": "foxes",
      "url": "/topics/foxes/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Pamela Duncan Edwards",
      "slug": "pamela-duncan-edwards",
      "url": "/topics/pamela-duncan-edwards/"
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
    "description": "In this story by Pamela Duncan Edwards, Fosdyke is different from his siblings. Rather than wanting to go out hunting each night like they do, he likes to cook French food. Each evening, as the other foxes head out…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Bears Barge In",
    "url": "/reviews/bears-barge-in/"
  },
  "next": {
    "title": "Countdown to Spring!",
    "url": "/reviews/countdown-to-spring/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Four Famished Foxes and Fosdyke"} width={210} height={139} /></a>
      </figure>
      <p>{"In this story by "}<a href={"http://www.pameladuncanedwards.com/"} target="_blank" rel="noopener noreferrer">{"Pamela Duncan Edwards"}</a>{", Fosdyke is different from his siblings. Rather than wanting to go out hunting each night like they do, he likes to cook French food. Each evening, as the other foxes head out for a night of carnivorous hunting, he whips up delicacies that they laugh at him for, claiming he cannot truly be a fox, due to his dietary choices."}</p>
      <p>{"Fosdyke is a strong-willed fox, however, who holds his ground and continues to eat the way he prefers to eat, despite their teasing. Then, in an interesting twist, the other foxes find that they are not successful hunters and they are famished. So Fosdyke fixes them one of his French feasts, which they all partake of, loving every bite!"}</p>
      <p>{"It should be noted that fondue is served at the end, and the feast table features an illustration of fish, although there is no direct mention of it in the story."}</p>
      <p>{"Overall, this is a good book about standing up to peer pressure when you make different food choices. It is also a fun story to read, as the author tries to use as many “F’s” as possible."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
