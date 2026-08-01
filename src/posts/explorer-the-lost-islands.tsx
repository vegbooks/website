import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9240",
  "slug": "explorer-the-lost-islands",
  "url": "/reviews/explorer-the-lost-islands/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/12/05/explorer-the-lost-islands/",
  "title": "Explorer: The Lost Islands",
  "publishedAt": "2013-12-05",
  "publishedLabel": "December 5th, 2013",
  "excerpt": "I would have reviewed this book sooner, except as soon as a review copy came from the publisher, kiddo disappeared with it into her room. She’s never expressed much interest in graphic novels, so I let her take her…",
  "image": {
    "src": "/media/2013/11/explorer2.jpg",
    "alt": "Explorer2",
    "width": 210,
    "height": 335
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
      "name": "Chrystin Garland",
      "slug": "chrystin-garland",
      "url": "/topics/chrystin-garland/"
    },
    {
      "name": "Graphic Novels",
      "slug": "graphic-novels",
      "url": "/topics/graphic-novels/"
    },
    {
      "name": "Jake Parker",
      "slug": "jake-parker",
      "url": "/topics/jake-parker/"
    },
    {
      "name": "Kazu Kibuishi",
      "slug": "kazu-kibuishi",
      "url": "/topics/kazu-kibuishi/"
    },
    {
      "name": "Short Stories",
      "slug": "short-stories",
      "url": "/topics/short-stories/"
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
    "description": "I would have reviewed this book sooner, except as soon as a review copy came from the publisher, kiddo disappeared with it into her room. She’s never expressed much interest in graphic novels, so I let her take her…",
    "image": "https://vegbooks.org/media/2013/11/explorer2.jpg"
  },
  "previous": {
    "title": "You Read to Me, I’ll Read to You: Very Short Fables to Read Together",
    "url": "/reviews/you-read-to-me-ill-read-to-you-very-short-fables-to-read-together/"
  },
  "next": {
    "title": "Dave Loves Chickens",
    "url": "/reviews/dave-loves-chickens/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/explorer2.jpg"}><img src={"/media/2013/11/explorer2.jpg"} alt={"Explorer2"} width={210} height={335} /></a>
      </figure>
      <p>{"I would have reviewed this book sooner, except as soon as a review copy came from "}<a href={"http://www.abramsbooks.com/childrens.html"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{", kiddo disappeared with it into her room. She’s never expressed much interest in graphic novels, so I let her take her time with it. In the end, she reported that she was enraptured by the stories at the beginning of the book but began to lose interest at the end."}</p>
      <p>{"This book is unlike any I’ve ever seen before. It resembles a graphic novel but is in fact a series of seven short stories, each told in graphic form. My favorite is the first story — “Rabbit Island” by Jake Parker — which depicts a hardworking rabbit society gone soft after a robot takes over the manual labor. The robot explodes and the rabbits rebuild the village themselves using parts of the robot on their homes and shops. Order is restored."}</p>
      <p>{"What makes this collection so interesting is that all of the stories tie into the ocean somehow. The rabbits in “Rabbit Island” go to the beach when they’re not working, for example, and some of the stories have a much stronger connection, such as the final story, “The Fishermen” by Kazu Kibuishi (the editor of the collection), which is entirely set out at sea. Vegetarian and vegan parents should be aware that this final story is ambiguous about fishing: on one hand, the fish as big as islands rise up against the fishermen; on the other, the story seems to extol fishermen as having a humble calling, in contrast to the greed of explorers."}</p>
      <p>{"Overall, I found this collection to be much darker than I expected, and I strongly disliked the second story, “The Mask Dance” by Chrystin Garland, which was scary without a very satisfying ending. That said, some of the artwork is stunning, and the slim hardback volume is quite alluring — you will want to read all the stories in one sitting. Whether this is a book that you and your kiddo will like is a matter of taste."}</p>
      <p>{"Ages 9 to 12."}</p>
    </div>
  );
}
