import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7429",
  "slug": "huff-puff",
  "url": "/reviews/huff-puff/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/05/02/huff-puff/",
  "title": "Huff & Puff",
  "publishedAt": "2012-05-02",
  "publishedLabel": "May 2nd, 2012",
  "excerpt": "Huff & Puff is a twist on a classic fairy tale. We all know the story about the three little pigs and the wolf who huffed and puffed. This story features the same cast of characters, but the main character, the wolf,…",
  "image": {
    "src": "/media/2012/05/9781419701702-huff-puff-cv.jpg",
    "alt": "Huff & Puff",
    "width": 210,
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
      "name": "Classic Fairy Tales",
      "slug": "classic-fairy-tales",
      "url": "/topics/classic-fairy-tales/"
    },
    {
      "name": "Claudia Rueda",
      "slug": "claudia-rueda",
      "url": "/topics/claudia-rueda/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fairy Tales",
      "slug": "fairy-tales",
      "url": "/topics/fairy-tales/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Wolves",
      "slug": "wolves",
      "url": "/topics/wolves/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "Huff & Puff is a twist on a classic fairy tale. We all know the story about the three little pigs and the wolf who huffed and puffed. This story features the same cast of characters, but the main character, the wolf,…",
    "image": "https://vegbooks.org/media/2012/05/9781419701702-huff-puff-cv.jpg"
  },
  "previous": {
    "title": "Vegan Is Love",
    "url": "/reviews/vegan-is-love/"
  },
  "next": {
    "title": "The Great Cake Mystery",
    "url": "/reviews/the-great-cake-mystery/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/05/9781419701702-huff-puff-cv.jpg"}><img src={"/media/2012/05/9781419701702-huff-puff-cv.jpg"} alt={"Huff & Puff"} width={210} height={212} /></a>
      </figure>
      <p><em><a href={"http://kissthebook.blogspot.com/2012/03/huff-and-puff-by-claudia-rueda.html"} target="_blank" rel="noopener noreferrer">{"Huff & Puff"}</a></em>{" is a twist on a classic fairy tale. We all know the story about the three little pigs and the wolf who huffed and puffed. This story features the same cast of characters, but the main character, the wolf, is played by "}<em>{"the reader"}</em>{"(or the reader’s child"}<em>{")"}</em>{"! After introducing each pig, there is a page that says “Huff & Puff” with a circle cutout meant for the reader to blow in. The reader successfully blows down the first pig’s house and the second pig’s house. But when it comes to the third pig’s house, the reader huffs & puffs twice, and SURPRISE, instead of blowing down his house, he/she blows out the candles on a cake that the three little pigs made. It’s a great, happy ending."}</p>
      <p>{"The illustrations are in sketch form in a peachy-hue which gives the book a simple, uncluttered feel. This is a really "}<a href={"http://www.publishersweekly.com/978-1-4197-0170-2"} target="_blank" rel="noopener noreferrer">{"cute, interactive story"}</a>{" that gets kids involved as a character in the story. While my 20-month-old enjoyed blowing through the holes, she was too young to really understand the story, so this would be best suited for slightly older toddlers and young elementary school kids."}</p>
      <p>{"Ages 2 to 6 years."}</p>
    </div>
  );
}
