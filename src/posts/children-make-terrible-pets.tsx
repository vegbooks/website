import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3359",
  "slug": "children-make-terrible-pets",
  "url": "/reviews/children-make-terrible-pets/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/23/children-make-terrible-pets/",
  "title": "Children Make Terrible Pets",
  "publishedAt": "2010-10-23",
  "publishedLabel": "October 23rd, 2010",
  "excerpt": "From the author of The Curious Garden comes this “first pet story” where the tables are turned and a ballerina-looking bear by the name of Lucy finds a boy named “Squeaker” to be her first companion animal. Named for…",
  "image": {
    "src": "/media/2010/10/cmt-pfinaljpg.jpg",
    "alt": "Children Make Terrible Pets",
    "width": 210,
    "height": 278
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Domestication",
      "slug": "domestication",
      "url": "/topics/domestication/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "New York Times Best Illustrated Children's Books of 2010",
      "slug": "new-york-times-best-illustrated-childrens-books-of-2010",
      "url": "/topics/new-york-times-best-illustrated-childrens-books-of-2010/"
    },
    {
      "name": "Peter Brown",
      "slug": "peter-brown",
      "url": "/topics/peter-brown/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "From the author of The Curious Garden comes this “first pet story” where the tables are turned and a ballerina-looking bear by the name of Lucy finds a boy named “Squeaker” to be her first companion animal. Named for…",
    "image": "https://vegbooks.org/media/2010/10/cmt-pfinaljpg.jpg"
  },
  "previous": {
    "title": "Nubs: The True Story of a Mutt, a Marine, and a Miracle",
    "url": "/reviews/nubs/"
  },
  "next": {
    "title": "Happy Birthday, Baby!",
    "url": "/reviews/happy-birthday-baby/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/cmt-pfinaljpg.jpg"}><img src={"/media/2010/10/cmt-pfinaljpg.jpg"} alt={"Children Make Terrible Pets"} width={210} height={278} /></a>
      </figure>
      <p>{"From the author of "}<a href={"/reviews/the-curious-garden/"}><em>{"The Curious Garden"}</em></a>{" comes this “first pet story” where the tables are turned and a ballerina-looking bear by the name of Lucy finds a boy named “Squeaker” to be her first companion animal. Named for the sounds he makes, Squeaker seems to enjoy his days napping and playing alongside Lucy. Despite Mama Bear’s warning about children making terrible pets, the cub tries to be a responsible guardian despite Squeakers inability to potty train and restrain himself from destroying furniture."}</p>
      <p>{"Later in the text, Squeaker is M.I.A. and Lucy, through her snooping-sleuthing-nostrils, finds him in the forest dining at the table with his human family. For the sake and wellbeing of all parties involved, she leaves him in this better suited environment."}</p>
      <p>{"Clad in 70’s-styled artwork, "}<a href={"http://www.peterbrownstudio.com/"} target="_blank" rel="noopener noreferrer"><em>{"Children Make Terrible Pets"}</em></a>{"is a fantastic find for discussing the idea of domestication and the needs of domesticated and wild animals."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
