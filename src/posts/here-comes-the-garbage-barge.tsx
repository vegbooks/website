import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1659",
  "slug": "here-comes-the-garbage-barge",
  "url": "/reviews/here-comes-the-garbage-barge/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/12/here-comes-the-garbage-barge/",
  "title": "Here Comes the Garbage Barge",
  "publishedAt": "2010-05-12",
  "publishedLabel": "May 12th, 2010",
  "excerpt": "This book relates the story of a garbage barge leaving the New York City area and traveling thousands of miles, trying to find someplace to leave the garbage. The barge makes several stops along its journey, and…",
  "image": {
    "src": "/media/2010/04/978-0-375-85218-3.jpg",
    "alt": "Here Comes the Garbage Barge",
    "width": 183,
    "height": 150
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
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Garbage",
      "slug": "garbage",
      "url": "/topics/garbage/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "New York Times Best Illustrated Children's Books of 2010",
      "slug": "new-york-times-best-illustrated-childrens-books-of-2010",
      "url": "/topics/new-york-times-best-illustrated-childrens-books-of-2010/"
    },
    {
      "name": "Pollution",
      "slug": "pollution",
      "url": "/topics/pollution/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "This book relates the story of a garbage barge leaving the New York City area and traveling thousands of miles, trying to find someplace to leave the garbage. The barge makes several stops along its journey, and…",
    "image": "https://vegbooks.org/media/2010/04/978-0-375-85218-3.jpg"
  },
  "previous": {
    "title": "Big Bear Hug",
    "url": "/reviews/big-bear-hug/"
  },
  "next": {
    "title": "Growing Vegetable Soup",
    "url": "/reviews/growing-vegetable-soup/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/978-0-375-85218-3.jpg"}><img src={"/media/2010/04/978-0-375-85218-3.jpg"} alt={"Here Comes the Garbage Barge"} width={183} height={150} /></a>
      </figure>
      <p>{"This book relates "}<a href={"http://www.amazon.com/gp/mpd/permalink/m33WDA9WOCZHE6"} target="_blank" rel="noopener noreferrer">{"the story of a garbage barge"}</a>{" leaving the New York City area and traveling thousands of miles, trying to find someplace to leave the garbage. The barge makes several stops along its journey, and learns that nobody is willing to take on someone else’s trash."}</p>
      <p>{"Meanwhile, the tons of garbage being pulled around become unbearably stinky for the captain, who eventually has to take it back to where they started from. After a journey of 162 long and stinky days, the garbage arrives back home, where it was created."}</p>
      <p>{"This book demonstrates that "}<a href={"http://www.epa.gov/teachers/waste.htm"} target="_blank" rel="noopener noreferrer">{"we are all responsible for creating garbage"}</a>{", and that we can’t just send it away for others to deal with. We need to take responsibility for the garbage we produce. Best of all, this book is based on a true event involving a garbage barge that departed from Islip, New York in 1987."}</p>
      <p>{"The book is well written, holds a child’s attention, has great illustrations, a solid message, and provides an opportunity for learning about and discussing garbage. The only thing that veg parents may not care for is a reference to New Orleans being home to blackened redfish."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
