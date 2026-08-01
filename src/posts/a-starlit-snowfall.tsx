import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6580",
  "slug": "a-starlit-snowfall",
  "url": "/reviews/a-starlit-snowfall/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/12/11/a-starlit-snowfall/",
  "title": "A Starlit Snowfall",
  "publishedAt": "2011-12-11",
  "publishedLabel": "December 11th, 2011",
  "excerpt": "I received this book as a review copy. It is the story of two friends making plans as winter approaches. Bear has a nice warm cave and invites Rabbit to stay with him until spring arrives. Rabbit says no at first,…",
  "image": {
    "src": "/media/2011/12/9780316183666.jpg",
    "alt": "A Starlit Snowfall",
    "width": 210,
    "height": 273
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Jerry Pinkney",
      "slug": "jerry-pinkney",
      "url": "/topics/jerry-pinkney/"
    },
    {
      "name": "Nancy Willard",
      "slug": "nancy-willard",
      "url": "/topics/nancy-willard/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Seasons",
      "slug": "seasons",
      "url": "/topics/seasons/"
    },
    {
      "name": "Snow",
      "slug": "snow",
      "url": "/topics/snow/"
    },
    {
      "name": "Winter",
      "slug": "winter",
      "url": "/topics/winter/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "I received this book as a review copy. It is the story of two friends making plans as winter approaches. Bear has a nice warm cave and invites Rabbit to stay with him until spring arrives. Rabbit says no at first,…",
    "image": "https://vegbooks.org/media/2011/12/9780316183666.jpg"
  },
  "previous": {
    "title": "A Christmas Horse Named Cairo",
    "url": "/reviews/a-christmas-horse-named-cairo/"
  },
  "next": {
    "title": "Cassandra’s Angel",
    "url": "/reviews/cassandras-angel/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/12/9780316183666.jpg"}><img src={"/media/2011/12/9780316183666.jpg"} alt={"A Starlit Snowfall"} width={210} height={273} /></a>
      </figure>
      <p>{"I received "}<a href={"http://rcm.amazon.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=vegbooks-20&o=1&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=0316183660"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" as a review copy. It is the story of two friends making plans as winter approaches. Bear has a nice warm cave and invites Rabbit to stay with him until spring arrives. Rabbit says no at first, enjoying the freedom of the brisk fall mornings. But then the first frost of the season occurs and Rabbit reconsiders. It’s cold out there!"}</p>
      <p>{"Rabbit tries to relax in Bear’s cozy den, but he gets a little bored. Look at the way the moon reflects on the beautiful snow! Rabbit tries to share the beauty with Bear, but Bear is fast asleep. Rabbit feels trapped in the cave and breaks free into the beauty of the night – bouncing gleefully in all that winter has to offer."}</p>
      <p>{"This book is a beauty. The illustrations are just gorgeous. It’s illustrated by the award-winning illustrator of "}<em><a href={"/reviews/the-lion-the-mouse/"} target="_blank" rel="noopener noreferrer">{"The Lion and the Mouse"}</a></em>{". The text is not as captivating as the art. Like Rabbit in the cave, I found it a little boring. But it’s a sweet story about animal friends and the beauty of winter, and the pictures are beautiful, so maybe that’s enough."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
