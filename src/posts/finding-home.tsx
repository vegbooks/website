import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11098",
  "slug": "finding-home",
  "url": "/reviews/finding-home/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/06/07/finding-home/",
  "title": "Finding Home",
  "publishedAt": "2021-06-07",
  "publishedLabel": "June 7th, 2021",
  "excerpt": "FINDING HOME by Estelí Meza is a warm and comforting picture book about losing one’s home that doesn’t shy away from the sadness, but also reminds the reader how sometimes small joys and smiles can keep us going in…",
  "image": {
    "src": "/media/2021/06/finding-home-1.jpg",
    "alt": "Finding Home",
    "width": 300,
    "height": 407
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
      "name": "elementary readers",
      "slug": "elementary-readers",
      "url": "/topics/elementary-readers/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "immigration",
      "slug": "immigration",
      "url": "/topics/immigration/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "FINDING HOME by Estelí Meza is a warm and comforting picture book about losing one’s home that doesn’t shy away from the sadness, but also reminds the reader how sometimes small joys and smiles can keep us going in…",
    "image": "https://vegbooks.org/media/2021/06/finding-home-1.jpg"
  },
  "previous": {
    "title": "Lala’s Words",
    "url": "/reviews/lalas-words/"
  },
  "next": {
    "title": "One Small Hop",
    "url": "/reviews/one-small-hop/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2021/06/finding-home-1.jpg"} alt={"Finding Home"} width={300} height={407} />
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781338648218?aff=boricuareads"} target="_blank" rel="noopener noreferrer">{"FINDING HOME by Estelí Meza"}</a>{" is a warm and comforting picture book about losing one’s home that doesn’t shy away from the sadness, but also reminds the reader how sometimes small joys and smiles can keep us going in difficult times. The themes of moving on but bringing some of your home with you are applicable to any moving situation, but especially the immigrant experience and loss of home and safety due to natural or man-made disaster. The picture book doesn’t shy away from Big Feelings, but it also focuses on accepting help and kindness and starting anew."}</p>
      <p>{"The story follows Conejo (all character names are Spanish animal names), whose house has been blown away in a storm. Conejo tries to find his home again and again, and while he receives help from his friends, they also supply him with keepsakes that support him and keep him going in the search for his home. While his friends boost his mood, Conejo also has low points of sadness, and the book gives Conejo space and time to feel that sadness before continuing on his journey. Children’s (and adults’!) feels are validated as Conejo gazes sadly into a stream feels his sadness for a while. The resolution isn’t the happy ending Conejo originally wanted, but it is a fresh beginning that brings his memories and friendships with him to a new home."}</p>
      <p>{"Meza’s illustrations are reminiscent of folk art and collage, and the colors are rich without being garish. The hope, sadness, worry, and love the characters feel come through clearly and authentically. Children will enjoy looking for a little bird that appears on almost every page, and the simple but detailed surroundings lend themselves to counting and naming shapes and colors as well. "}<a href={"https://www.indiebound.org/book/9781338648218?aff=boricuareads"} target="_blank" rel="noopener noreferrer">{"FINDING HOME"}</a>{" is a wonderful, warm, and comforting book about loss and working towards a new start. Readers can’t miss the Author’s Note that ends the story."}</p>
      <p>{"Highly recommended."}</p>
    </div>
  );
}
