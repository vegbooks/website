import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10102",
  "slug": "rhymoceros",
  "url": "/reviews/rhymoceros/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/03/28/rhymoceros/",
  "title": "Rhymoceros",
  "publishedAt": "2015-03-28",
  "publishedLabel": "March 28th, 2015",
  "excerpt": "Another board book to share! Following up on the 2012 smash hit Hippopposites, Janik Coat is back with another visually driven, humorous book that parents are sure to like as much as their toddlers do. Our…",
  "image": {
    "src": "/media/2015/03/9781419715143-rhymoceros-cv.jpg",
    "alt": "9781419715143_Rhymoceros_CV",
    "width": 210,
    "height": 231
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Design",
      "slug": "design",
      "url": "/topics/design/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Janik Coat",
      "slug": "janik-coat",
      "url": "/topics/janik-coat/"
    },
    {
      "name": "Rhinos",
      "slug": "rhinos",
      "url": "/topics/rhinos/"
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
    "description": "Another board book to share! Following up on the 2012 smash hit Hippopposites, Janik Coat is back with another visually driven, humorous book that parents are sure to like as much as their toddlers do. Our…",
    "image": "https://vegbooks.org/media/2015/03/9781419715143-rhymoceros-cv.jpg"
  },
  "previous": {
    "title": "I Love You, Blankie",
    "url": "/reviews/i-love-you-blankie/"
  },
  "next": {
    "title": "Butterfly Battle & Food Chain Frenzy (The Magic School Bus Chapter Books #16 & #17)",
    "url": "/reviews/butterfly-battle-the-magic-school-bus-chapter-book-16-and-food-chain-frenzy-the-magic-school-bus-chapter-book-17/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/03/9781419715143-rhymoceros-cv.jpg"} alt={"9781419715143_Rhymoceros_CV"} width={210} height={231} />
      </figure>
      <p>{"Another board book to share! Following up on the 2012 smash hit "}<a href={"/reviews/hippopposites/"}><em>{"Hippopposites"}</em></a>{", Janik Coat is back with another visually driven, humorous book that parents are sure to like as much as their toddlers do."}</p>
      <p>{"Our protagonist this time around is, as the title suggests, a rhinoceros. Juxtaposing a single word on each page, Coat plays with rhyme and design to create surprising contrasts. For example, on one page, the titular rhinoceros is being “caring” by walking a dog on a leash. On the facing page, she (he?) is “daring,” walking along a tightrope between two skyscrapers with the dog perched calmly on her head."}</p>
      <p>{"Unfortunately, the anti-captivity theme of Coat’s previous book does not reappear in this book, but still, there is a subtle message of kindness to animals. The little dog, who appears about halfway through the book, reappears again on the last page. After the rhinoceros is depicted as being “sad,” she is joined by her canine companion, at which time her mood turns to “glad.”"}</p>
      <p>{"I highly recommend this darling book for newborns through age 3."}</p>
      <p><em>{"I received this book as a review copy from the "}<a href={"http://www.abramsbooks.com/appleseed.html"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{"."}</em></p>
    </div>
  );
}
