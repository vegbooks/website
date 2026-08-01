import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4939",
  "slug": "fred-stays-with-me",
  "url": "/reviews/fred-stays-with-me/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/06/fred-stays-with-me/",
  "title": "Fred Stays With Me!",
  "publishedAt": "2011-05-06",
  "publishedLabel": "May 6th, 2011",
  "excerpt": "Finding stability after a divorce, especially one involving shared custody, isn’t all that easy, but having a canine friend like Fred certainly helps. In Fred Stays with Me!, a young girl tells of her two different…",
  "image": {
    "src": "/media/2011/04/9780316077910.jpg",
    "alt": "Fred Stays With Me!",
    "width": 210,
    "height": 236
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Divorce",
      "slug": "divorce",
      "url": "/topics/divorce/"
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
    },
    {
      "name": "Families",
      "slug": "families",
      "url": "/topics/families/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Nancy Coffelt",
      "slug": "nancy-coffelt",
      "url": "/topics/nancy-coffelt/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Problem Solving",
      "slug": "problem-solving",
      "url": "/topics/problem-solving/"
    },
    {
      "name": "Tricia Tusa",
      "slug": "tricia-tusa",
      "url": "/topics/tricia-tusa/"
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
    "description": "Finding stability after a divorce, especially one involving shared custody, isn’t all that easy, but having a canine friend like Fred certainly helps. In Fred Stays with Me!, a young girl tells of her two different…",
    "image": "https://vegbooks.org/media/2011/04/9780316077910.jpg"
  },
  "previous": {
    "title": "Open Season",
    "url": "/reviews/open-season/"
  },
  "next": {
    "title": "Birthday Zoo",
    "url": "/reviews/birthday-zoo/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/9780316077910.jpg"}><img src={"/media/2011/04/9780316077910.jpg"} alt={"Fred Stays With Me!"} width={210} height={236} /></a>
      </figure>
      <p>{"Finding stability after a divorce, especially one involving shared custody, isn’t all that easy, but having a canine friend like Fred certainly helps. In "}<a href={"http://www.hachettebookgroup.com/books_9780316882699.htm"} target="_blank" rel="noopener noreferrer"><em>{"Fred Stays with Me!"}</em>{","}</a>{" a young girl tells of her two different homes and routines and the one constant in her life: Fred. “Fred is my friend. We walk together. We talk together. When I’m happy, Fred is, too. And when I’m sad, Fred is there.”"}</p>
      <p>{"But Fred isn’t always an angel. Mom and dad don’t appreciate Fred’s barking and sock-munching and state he can no longer live with them. But friends stick up for one another, and our young narrator barks back “Excuse me…Fred doesn’t stay with either of you. Fred stays with ME!” Together, parents and daughter find solutions to Fred’s quirks and smooth out what can be a rough time for kids in a “broken” home."}</p>
      <p>{"With accessible text and Tricia Tusa’s adorable illustrations, this book is a helpful crutch in addressing modern day family dynamics; a family that recognizes that companion animals are members of the clan too."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
