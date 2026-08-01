import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9092",
  "slug": "balloon-toons-the-super-duper-dog-park",
  "url": "/reviews/balloon-toons-the-super-duper-dog-park/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/10/09/balloon-toons-the-super-duper-dog-park/",
  "title": "Balloon Toons: The Super Duper Dog Park",
  "publishedAt": "2013-10-09",
  "publishedLabel": "October 9th, 2013",
  "excerpt": "This is the cutest little cartoon art book given to us by our Herbivore friends who know the author Aron Nels Steinke. It is perfect for the imaginative dog-loving, young reader with easy-to-read dialogue and fun,…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Boy book pic",
    "width": 210,
    "height": 139
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
      "name": "Aron Nels Steinke",
      "slug": "aron-nels-steinke",
      "url": "/topics/aron-nels-steinke/"
    },
    {
      "name": "Comic Books",
      "slug": "comic-books",
      "url": "/topics/comic-books/"
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
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "This is the cutest little cartoon art book given to us by our Herbivore friends who know the author Aron Nels Steinke. It is perfect for the imaginative dog-loving, young reader with easy-to-read dialogue and fun,…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Desert Island Disc",
    "url": "/reviews/desert-island-disc/"
  },
  "next": {
    "title": "Horse Sanctuary",
    "url": "/reviews/horse-sanctuary/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Boy book pic"} width={210} height={139} /></a>
      </figure>
      <p>{"This is the cutest little "}<a href={"http://www.herbivoreclothing.com/the-super-duper-dog-park-by-aron-nels-steinke/"} target="_blank" rel="noopener noreferrer">{"cartoon art book"}</a>{" given to us by our "}<a href={"http://www.herbivoreclothing.com/"} target="_blank" rel="noopener noreferrer">{"Herbivore"}</a>{" friends who know the author Aron Nels Steinke. It is perfect for the imaginative dog-loving, young reader with easy-to-read dialogue and fun, colorful, detailed illustrations. Some of the illustrations remind me of a "}<em>{"Where’s Waldo"}</em>{" book, with so much interesting activity. As with many comic books, I sometimes get lost and have to take a moment to figure out which order to read the dialogue bubbles so the young reader may also need a little guidance, especially if they have not read many comics."}</p>
      <p>{"Vegan families, note there is a page illustrating, “We can ride on horses wild and free!” It is lighthearted and exuberant, which will definitely appeal to dog-loving kids."}</p>
      <p>{"Ages 5-8."}</p>
    </div>
  );
}
