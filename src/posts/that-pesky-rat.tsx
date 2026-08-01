import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4561",
  "slug": "that-pesky-rat",
  "url": "/reviews/that-pesky-rat/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/23/that-pesky-rat/",
  "title": "That Pesky Rat",
  "publishedAt": "2011-03-23",
  "publishedLabel": "March 23rd, 2011",
  "excerpt": "That Pesky Rat by British children’s author/illustrator Lauren Child is a wonderful story about a brown rat who doesn’t quite fit in with his life circumstances. As he introduces himself and takes us on a tour of his…",
  "image": {
    "src": "/media/2011/04/9780763618735.jpg",
    "alt": "That Pesky Rat",
    "width": 210,
    "height": 247
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Lauren Child",
      "slug": "lauren-child",
      "url": "/topics/lauren-child/"
    },
    {
      "name": "Pet Stores",
      "slug": "pet-stores",
      "url": "/topics/pet-stores/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rats",
      "slug": "rats",
      "url": "/topics/rats/"
    },
    {
      "name": "Rodents",
      "slug": "rodents",
      "url": "/topics/rodents/"
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
    "description": "That Pesky Rat by British children’s author/illustrator Lauren Child is a wonderful story about a brown rat who doesn’t quite fit in with his life circumstances. As he introduces himself and takes us on a tour of his…",
    "image": "https://vegbooks.org/media/2011/04/9780763618735.jpg"
  },
  "previous": {
    "title": "Dogs Have the Strangest Friends & Other True Stories of Animal Feelings",
    "url": "/reviews/dogs-have-the-strangest-friends-other-true-stories-of-animal-feelings/"
  },
  "next": {
    "title": "Ocean Babies",
    "url": "/reviews/ocean-babies/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/9780763618735.jpg"}><img src={"/media/2011/04/9780763618735.jpg"} alt={"That Pesky Rat"} width={210} height={247} /></a>
      </figure>
      <p><a href={"http://www.powells.com/biblio/1-9780763618735-4"} target="_blank" rel="noopener noreferrer"><em>{"That Pesky Rat"}</em></a>{" by British children’s author/illustrator "}<a href={"http://www.milkmonitor.com/main.htm"} target="_blank" rel="noopener noreferrer">{"Lauren Child"}</a>{" is a wonderful story about a brown rat who doesn’t quite fit in with his life circumstances. As he introduces himself and takes us on a tour of his world, including his friends’ diverse homes and lifestyles, it becomes clear that the rat would like to both be and have a companion. He posts a notice to that effect at the local pet store despite no small degree of skepticism on the part of the shop owner and the rat himself (his posting seeking a home is perhaps one of the best portions of any book that I’ve read in some time). Lo and behold, in a humorous twist, his posting receives interest and the story ends with our affable hero happily ensconced in a new home."}</p>
      <p>{"This story provides us with the voice of a modern-day rat — a creature so often maligned — and gives us the opportunity to stretch our empathy muscles. The fantastic mixed media illustrations are a wonderful complement to this witty, humorous story. Note that companion animals are referred to as pets, there is the aforementioned pet store, and one of the rat’s friends is a circus performer. Nonetheless, this book is a treat for kids aged 4 years and up, as well as the adults sharing the story."}</p>
    </div>
  );
}
