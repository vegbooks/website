import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2419",
  "slug": "animals-in-the-house",
  "url": "/reviews/animals-in-the-house/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/24/animals-in-the-house/",
  "title": "Animals in the House",
  "publishedAt": "2010-06-24",
  "publishedLabel": "June 24th, 2010",
  "excerpt": "It’s hip. It’s fun. And it’s about my two favorite subjects: animals and history. While written as a Scholastic textbook, Animals in the House is unbelievably reader-friendly, filled with puns, jokes, and lively…",
  "image": {
    "src": "/media/2010/06/animals-in-the-house.jpg",
    "alt": "Animals in the House",
    "width": 211,
    "height": 270
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Reptiles",
      "slug": "reptiles",
      "url": "/topics/reptiles/"
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
    "description": "It’s hip. It’s fun. And it’s about my two favorite subjects: animals and history. While written as a Scholastic textbook, Animals in the House is unbelievably reader-friendly, filled with puns, jokes, and lively…",
    "image": "https://vegbooks.org/media/2010/06/animals-in-the-house.jpg"
  },
  "previous": {
    "title": "And Tango Makes Three",
    "url": "/reviews/and-tango-makes-three/"
  },
  "next": {
    "title": "The Wonders Inside: Bugs and Spiders",
    "url": "/reviews/the-wonders-inside-bugs-and-spiders/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/animals-in-the-house.jpg"}><img src={"/media/2010/06/animals-in-the-house.jpg"} alt={"Animals in the House"} width={211} height={270} /></a>
      </figure>
      <p>{"It’s hip. It’s fun. And it’s about my two favorite subjects: animals and history. While written as a Scholastic textbook, "}<em><a href={"http://store.scholastic.com/webapp/wcs/stores/servlet/ProductDisplay_Animals+in+the+House:+A+History+of+Pets+and+People_14479_-1_10052_10051"} target="_blank" rel="noopener noreferrer">{"Animals in the House"}</a></em>{" is unbelievably reader-friendly, filled with puns, jokes, and lively fonts. Enough cannot be said of the graphic design work either. Always fresh and reflective of the subject at hand, kids can’t help but be drawn into the text and learn a thing or two about our long, evolving relationship with those furred, feathered and scaly."}</p>
      <p>{"From the basics of pet guardianship (like how the term “pet” was coined), through the domestication process and appearances of animals in historical societies (Ancient Greece, Victorian Era, White House) to special chapters just on canines and felines, Keenan’s text is quite thorough and representative of all things pets. On a personal note, I do wish she had used the terms "}<a href={"http://www.guardiancampaign.com/"} target="_blank" rel="noopener noreferrer">{"guardian"}</a>{" (see In Defense of Animals’ Guardian Campaign) and companion animal instead of owner and pet!"}</p>
      <p>{"Overall the book does a fair job of balancing views on having companion animals. Several sidebars indicate that animal protection organizations, scientists and the like find certain animals to be problematic, namely big cats, primates and even reptiles: “…It is dangerous, unfair to the animals, and environmentally harmful to take animals out of their habitats and bring them home.” Thanks for prompting ethical discussions regarding animals in our homes, Sheila!"}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
