import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5319",
  "slug": "nini-lost-and-found",
  "url": "/reviews/nini-lost-and-found/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/23/nini-lost-and-found/",
  "title": "Nini Lost and Found",
  "publishedAt": "2011-06-23",
  "publishedLabel": "June 23rd, 2011",
  "excerpt": "When indoor kitty Nini spies an open door on a beautiful day, she strolls outside, though it can’t be said that she doesn’t look back and fondly recall all of the cozy spots in the house. However, the sensory…",
  "image": {
    "src": "/media/2011/05/978-0-375-85880-2.jpg",
    "alt": "Nini Lost and Found",
    "width": 210,
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
      "name": "Anita Lobel",
      "slug": "anita-lobel",
      "url": "/topics/anita-lobel/"
    },
    {
      "name": "Caretaking",
      "slug": "caretaking",
      "url": "/topics/caretaking/"
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Indoor Cats",
      "slug": "indoor-cats",
      "url": "/topics/indoor-cats/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "When indoor kitty Nini spies an open door on a beautiful day, she strolls outside, though it can’t be said that she doesn’t look back and fondly recall all of the cozy spots in the house. However, the sensory…",
    "image": "https://vegbooks.org/media/2011/05/978-0-375-85880-2.jpg"
  },
  "previous": {
    "title": "The Extraordinary Mark Twain (According To Susy)",
    "url": "/reviews/the-extraordinary-mark-twain-according-to-susy/"
  },
  "next": {
    "title": "Goose’s Story",
    "url": "/reviews/gooses-story/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/978-0-375-85880-2.jpg"}><img src={"/media/2011/05/978-0-375-85880-2.jpg"} alt={"Nini Lost and Found"} width={210} height={270} /></a>
      </figure>
      <p>{"When indoor kitty Nini spies an open door on a beautiful day, she strolls outside, though it can’t be said that she doesn’t look back and fondly recall all of the cozy spots in the house. However, the sensory delights of the summer day entice her to keep exploring through grasses, garden and woods. As the sunlight fades, Nini realizes too late that the woods contain danger for a domestic cat."}</p>
      <p>{"Huddled in a dark hiding place, a scared Nini eventually hears the calls of her human companions, encouraging her to come to them. She screws up her courage, dashing homeward through the frightening dark woods and is soon reveling in the comfort of being where she belongs."}</p>
      <p><em><a href={"http://www.powells.com/biblio/1-9780375858802-3"} target="_blank" rel="noopener noreferrer">{"Nini Lost and Found"}</a></em>{" is a charming story that illustrates not only adventures of an adorable tiger kitty but the importance of maintaining a safe environment for one’s animal. Caldecott Honoree "}<a href={"http://www.anita-lobel.com/Anita_Lobel/anita-lobel.com.html"} target="_blank" rel="noopener noreferrer">{"Anita Lobel"}</a>{" hits just the right tone in this story with her message and accompanying illustrations. Nini was right to feel anxious about the animals she sensed in the woods, for in reality predators abound and the outdoors is not a safe place for cats — just as outdoor cats make it less safe for birds, small mammals and reptiles."}</p>
      <p>{"Ages 4 and up."}</p>
    </div>
  );
}
