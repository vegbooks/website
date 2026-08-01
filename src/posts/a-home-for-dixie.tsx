import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2568",
  "slug": "a-home-for-dixie",
  "url": "/reviews/a-home-for-dixie/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/12/a-home-for-dixie/",
  "title": "A Home for Dixie",
  "publishedAt": "2010-07-12",
  "publishedLabel": "July 12th, 2010",
  "excerpt": "Cutie patootie high schooler, Emma Jackson, penned this photo essay as a way to generate awareness of and funding for homeless dogs. Essentially a journal of her experiences looking for and finding her pup, Dixie, at…",
  "image": {
    "src": "/media/2010/07/a-home-for-dixie1.jpg",
    "alt": "A Home for Dixie",
    "width": 212,
    "height": 212
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
      "name": "Adoption",
      "slug": "adoption",
      "url": "/topics/adoption/"
    },
    {
      "name": "Animal Shelters",
      "slug": "animal-shelters",
      "url": "/topics/animal-shelters/"
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
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
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
    "description": "Cutie patootie high schooler, Emma Jackson, penned this photo essay as a way to generate awareness of and funding for homeless dogs. Essentially a journal of her experiences looking for and finding her pup, Dixie, at…",
    "image": "https://vegbooks.org/media/2010/07/a-home-for-dixie1.jpg"
  },
  "previous": {
    "title": "Up (2009)",
    "url": "/reviews/up/"
  },
  "next": {
    "title": "The Puppy Who Wanted a Boy",
    "url": "/reviews/the-puppy-who-wanted-a-boy/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/a-home-for-dixie1.jpg"}><img src={"/media/2010/07/a-home-for-dixie1.jpg"} alt={"A Home for Dixie"} width={212} height={212} /></a>
      </figure>
      <p>{"Cutie patootie high schooler, Emma Jackson, penned this photo essay as a way to generate awareness of and funding for homeless dogs. Essentially a journal of her experiences looking for and finding her pup, Dixie, at Aunt Mary’s Doghouse, the book is accessible enough for young kids and teaches them that “there are millions of dogs living in animal shelters, abandoned or turned in by owners who can’t take care of them anymore. They don’t have homes or families.”"}</p>
      <p>{"Furthermore, readers see Emma following all the right protocols: her family discusses the potential adoption to ensure they’re making the right choice, Emma sleeps alongside Dixie to calm her down during the first “ruff” night, and the photos show both Dixie and Emma taking care of each other, with one providing walks, food and the like and the other providing constant affection."}</p>
      <p>{"It’s an endearing tale, with even more endearing photographs. An additional perk: portions of the proceeds benefit "}<a href={"http://www.petfinder.com/shelters/NJ209.html"} target="_blank" rel="noopener noreferrer">{"Petfinder.com and Aunt Mary’s Doghouse"}</a>{"."}</p>
      <p>{"Ages 5-9."}</p>
    </div>
  );
}
