import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8683",
  "slug": "a-long-way-away-a-two-way-story",
  "url": "/reviews/a-long-way-away-a-two-way-story/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/04/05/a-long-way-away-a-two-way-story/",
  "title": "A Long Way Away: A Two-Way Story",
  "publishedAt": "2013-04-05",
  "publishedLabel": "April 5th, 2013",
  "excerpt": "A Long Way Away: A Two-Way Story by Frank Viva is full of unusual illustrations that add a unique curiosity and distinctive style (reminiscent of Dr. Seuss) to this picture book, which I received as a review copy.…",
  "image": {
    "src": "/media/2013/04/a-long.jpg",
    "alt": "A Long Way Away: A Two-Way Story",
    "width": 210,
    "height": 168
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
      "name": "Frank Viva",
      "slug": "frank-viva",
      "url": "/topics/frank-viva/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Ocean",
      "slug": "ocean",
      "url": "/topics/ocean/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Space",
      "slug": "space",
      "url": "/topics/space/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "A Long Way Away: A Two-Way Story by Frank Viva is full of unusual illustrations that add a unique curiosity and distinctive style (reminiscent of Dr. Seuss) to this picture book, which I received as a review copy.…",
    "image": "https://vegbooks.org/media/2013/04/a-long.jpg"
  },
  "previous": {
    "title": "Nighttime Ninja",
    "url": "/reviews/nighttime-ninja/"
  },
  "next": {
    "title": "The Monsters’ Monster",
    "url": "/reviews/the-monsters-monster/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/04/a-long.jpg"}><img src={"/media/2013/04/a-long.jpg"} alt={"A Long Way Away: A Two-Way Story"} width={210} height={168} /></a>
      </figure>
      <p><em>{"A Long Way Away: A Two-Way Story"}</em>{" by Frank Viva is full of unusual illustrations that add a unique curiosity and distinctive style (reminiscent of Dr. Seuss) to this picture book, which I received as a review copy. The illustrations encourage young readers to explore the world from all different vantage points: up in the stars, under the sea, left side, right side, from dusk till dawn. Viva makes different parts of the stratosphere feel inviting. Some characters and objects are familiar like stars, planets, buildings, airplane, dogs and a shoe. While others allow the reader to use his imagination to define them. Is the main character an octopus, a light bulb, an amoeba or a squid?"}</p>
      <p>{"Viva’s book is more than a two-way story. There are multiple stories within this story. I see this book as an invitation for young readers to use the illustrations to tell their own story. Who is the main character? Does he have a name? What part of the universe is he in? What does he like to do?"}</p>
      <p>{"This book ("}<a href={"http://www.amazon.com/gp/product/0316221961/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0316221961&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") is a good way to engage children in discussion with their parents, teachers and peers. I see it not only as a fun creative activity but also as a wonderful educational tool."}</p>
      <p>{"Ok, I have to ask, what is the significance of the shoes and boots that float through the stratosphere?"}</p>
    </div>
  );
}
