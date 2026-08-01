import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1218",
  "slug": "big-cat-conservation",
  "url": "/reviews/big-cat-conservation/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/13/big-cat-conservation/",
  "title": "Big Cat Conservation",
  "publishedAt": "2010-03-13",
  "publishedLabel": "March 13th, 2010",
  "excerpt": "Big Cat Conservation starts off on shaky ground when early on, author Peggy Thomas exclaims how happy she is that she can see a beautiful tiger in his enclosure in the Buffalo Zoo. However, from there she goes on to…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Big Cat Conservation",
    "width": 210,
    "height": 320
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
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Panthers",
      "slug": "panthers",
      "url": "/topics/panthers/"
    },
    {
      "name": "Peggy Thomas",
      "slug": "peggy-thomas",
      "url": "/topics/peggy-thomas/"
    },
    {
      "name": "Tiger",
      "slug": "tiger",
      "url": "/topics/tiger/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Big Cat Conservation starts off on shaky ground when early on, author Peggy Thomas exclaims how happy she is that she can see a beautiful tiger in his enclosure in the Buffalo Zoo. However, from there she goes on to…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Horton Hatches the Egg",
    "url": "/reviews/horton-hatches-the-egg/"
  },
  "next": {
    "title": "Hachiko Waits",
    "url": "/reviews/hachiko-waits/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Big Cat Conservation"} width={210} height={320} /></a>
      </figure>
      <p><em><a href={"http://search.barnesandnoble.com/Big-Cat-Conservation/Peggy-Thomas/e/9780761332312"} target="_blank" rel="noopener noreferrer">{"Big Cat Conservation"}</a></em>{" starts off on shaky ground when early on, author Peggy Thomas exclaims how happy she is that she can see a beautiful tiger in his enclosure in the Buffalo Zoo. However, from there she goes on to discuss fascinating work that is being done worldwide to conserve big cats."}</p>
      <p>{"There are eight chapters in all, and seven of them are devoted to various angles of big cat conservation. The level of detail provided in the second chapter, High Tech Tracking, was really informative, teaching us about the role of technology in projects in Florida and India– think cell phones that interact with collars and cameras. (Since this book was published a decade ago, it is exciting to think about the ways that technology has expanded its scope of assistance.) Scat studies (including a scat tracking dog named "}<a href={"http://conservationbiology.net/meet-the-dogs/"} target="_blank" rel="noopener noreferrer">{"Moja"}</a>{"), artificial insemination, the role of wildlife veterinarians, cloning, field biology and captive enrichment programs are also discussed in depth in the rest of the book. My two favorite chapters were at the end of the book—one deals with the "}<a href={"http://www.lab.fws.gov/"} target="_blank" rel="noopener noreferrer">{"U.S. Fish and Wildlife Services’ Forensics Laboratory"}</a>{" and the work done there. The other discusses possible solutions to one of the greatest problems facing wildlife all over the world: loss and fragmentation of habitat. One potential solution highlighted in this chapter is the concept of wildlife corridors, and a "}<a href={"http://www.defenders.org/programs_and_policy/habitat_conservation/habitat_and_highways/wildlife/florida_panther.php"} target="_blank" rel="noopener noreferrer">{"panther-friendly underpass in Florida"}</a>{" is used to illustrate some of the benefits of such a concept."}</p>
      <p>{"This book has a heavy pro-zoo angle but provides us with a lot of facts about other conservation work being done to assist big cat survival in all corners of the globe. Thomas takes a lot of heavy, complex information and distills it nicely into a child-friendly read. Although my younger child tuned in for some of this book, I think it is most suitable for ages 7 and over."}</p>
    </div>
  );
}
