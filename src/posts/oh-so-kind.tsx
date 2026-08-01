import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11050",
  "slug": "oh-so-kind",
  "url": "/reviews/oh-so-kind/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/03/22/oh-so-kind/",
  "title": "Oh So Kind!",
  "publishedAt": "2021-03-22",
  "publishedLabel": "March 22nd, 2021",
  "excerpt": "OH SO KIND! is author Joy Cho’s third book in a series of “Oh Joy!” board books for babies and toddler-age children. It follows an unnamed llama, who uses a wheelchair, throughout their day. The little llama’s…",
  "image": {
    "src": "/media/2021/03/oh-so-kind.jpg",
    "alt": "Oh So Kind!",
    "width": 300,
    "height": 300
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
      "name": "Angie Stalker",
      "slug": "angie-stalker",
      "url": "/topics/angie-stalker/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "flip book",
      "slug": "flip-book",
      "url": "/topics/flip-book/"
    },
    {
      "name": "Joy Cho",
      "slug": "joy-cho",
      "url": "/topics/joy-cho/"
    },
    {
      "name": "Oh So Kind!",
      "slug": "oh-so-kind",
      "url": "/topics/oh-so-kind/"
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
    "description": "OH SO KIND! is author Joy Cho’s third book in a series of “Oh Joy!” board books for babies and toddler-age children. It follows an unnamed llama, who uses a wheelchair, throughout their day. The little llama’s…",
    "image": "https://vegbooks.org/media/2021/03/oh-so-kind.jpg"
  },
  "previous": {
    "title": "Seaside Stroll",
    "url": "/reviews/seaside-stroll/"
  },
  "next": {
    "title": "Bracelets for Bina’s Brothers",
    "url": "/reviews/bracelets-for-binas-brothers/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2021/03/oh-so-kind.jpg"}><img src={"/media/2021/03/oh-so-kind.jpg"} alt={"Oh So Kind!"} width={300} height={300} /></a>
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781338356359"} target="_blank" rel="noopener noreferrer"><strong>{"OH SO KIND!"}</strong></a>{" is author Joy Cho’s third book in a series of “Oh Joy!” board books for babies and toddler-age children. It follows an unnamed llama, who uses a wheelchair, throughout their day. The little llama’s friends are kind, and everyone helps each other as apples spill from a shopping basket, a little sister falls down and cries, and their mother returns from a business trip. Everyday kindnesses are performed and saying “thank you” when they are received is demonstrated, as is reaching out when someone is having a tough time."}</p>
      <p>{"The art by Angie Stalker shows a variety of brightly colored and happy animals going about their days. The illustrations are simple but expressive, and children will delight in the bird’s joyful feathers and discovering faces on doorways or counting different details like hearts and balloons."}</p>
      <p>{"This board book has the added aspect of also being a flip-book. The pages and flaps are sturdy, but the flaps may be difficult for little fingers to open at first or even notice if they are looking at the book on their own. However, the simplicity and positivity in the book will ensure that the first time reading "}<a href={"https://www.indiebound.org/book/9781338356359"} target="_blank" rel="noopener noreferrer"><strong>{"OH SO KIND!"}</strong></a>{"won’t be the last."}</p>
    </div>
  );
}
