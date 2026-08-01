import type { PostMetadata } from '../content/types';

export const article = {
  "id": "106",
  "slug": "dog-heaven",
  "url": "/reviews/dog-heaven/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/08/dog-heaven/",
  "title": "Dog Heaven",
  "publishedAt": "2009-11-08",
  "publishedLabel": "November 8th, 2009",
  "excerpt": "Cynthia Rylant’s work suggests that she knows what it’s like to grieve for an animal companion. In this beautifully illustrated book, she envisions an afterlife for dogs, complete with angel children to play with,…",
  "image": {
    "src": "/media/2009/11/dog-heaven-sm11.jpg",
    "alt": "Dog Heaven - sm",
    "width": 162,
    "height": 242
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Cynthia Rylant",
      "slug": "cynthia-rylant",
      "url": "/topics/cynthia-rylant/"
    },
    {
      "name": "Death of a Pet",
      "slug": "death-of-a-pet",
      "url": "/topics/death-of-a-pet/"
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
      "name": "Grieving",
      "slug": "grieving",
      "url": "/topics/grieving/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Cynthia Rylant’s work suggests that she knows what it’s like to grieve for an animal companion. In this beautifully illustrated book, she envisions an afterlife for dogs, complete with angel children to play with,…",
    "image": "https://vegbooks.org/media/2009/11/dog-heaven-sm11.jpg"
  },
  "previous": {
    "title": "‘Twas the Night Before Thanksgiving",
    "url": "/reviews/twas-the-night-before-thanksgiving/"
  },
  "next": {
    "title": "Moo, Baa, La La La!",
    "url": "/reviews/moo-baa-la-la-la/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2009/11/dog-heaven-sm11.jpg"} alt={"Dog Heaven - sm"} width={162} height={242} />
      </figure>
      <p>{"Cynthia Rylant’s work suggests that she knows what it’s like to "}<a href={"http://www.hsus.org/pets/pet_care/coping_with_the_death_of_your_pet/"} target="_blank" rel="noopener noreferrer">{"grieve for an animal companion"}</a>{". In this beautifully illustrated book, she envisions an afterlife for dogs, complete with angel children to play with, fluffy clouds to sleep on, and biscuits that God makes specially for them."}</p>
      <p>{"Kiddo and I got this book from the library after our beloved cat, Midge, passed away. I found it to be comforting (though I did choke back tears), and it gave us a place to begin our discussion about "}<a href={"http://www.huffingtonpost.com/olivia-rosewood/once-upon-a-time-the-dead_b_344917.html"} target="_blank" rel="noopener noreferrer">{"what happens when an animal dies"}</a>{". I’ve since learned that Ms. Rylant also has written and illustrated a book entitled "}<em>{"Cat Heaven"}</em>{"."}</p>
      <p>{"Ages 3-7. For more reviews, visit "}<a href={"http://www.librarything.com/work/66691"} target="_blank" rel="noopener noreferrer">{"Library Thing"}</a>{" or "}<a href={"http://www.goodreads.com/book/show/89378.Dog_Heaven"} target="_blank" rel="noopener noreferrer">{"Goodreads"}</a>{"."}</p>
    </div>
  );
}
