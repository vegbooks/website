import type { PostMetadata } from '../content/types';

export const article = {
  "id": "38",
  "slug": "guess-how-much-i-love-you",
  "url": "/reviews/guess-how-much-i-love-you/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/10/28/guess-how-much-i-love-you/",
  "title": "Guess How Much I Love You",
  "publishedAt": "2009-10-28",
  "publishedLabel": "October 28th, 2009",
  "excerpt": "This is a sweet board book that’s funny and touching – and only peripherally about animals. But what it does say is good: animals love their families just as people do. Big Nutbrown Hare and Little Nutbrown Hare, the…",
  "image": {
    "src": "/media/2009/11/guess-how-much-i-love-you21.jpg",
    "alt": "Guess How Much I Love You",
    "width": 242,
    "height": 210
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
      "name": "Anita Jeram",
      "slug": "anita-jeram",
      "url": "/topics/anita-jeram/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
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
      "name": "Sam McBratney",
      "slug": "sam-mcbratney",
      "url": "/topics/sam-mcbratney/"
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
    "description": "This is a sweet board book that’s funny and touching – and only peripherally about animals. But what it does say is good: animals love their families just as people do. Big Nutbrown Hare and Little Nutbrown Hare, the…",
    "image": "https://vegbooks.org/media/2009/11/guess-how-much-i-love-you21.jpg"
  },
  "previous": {
    "title": "Who Is the Beast?",
    "url": "/reviews/who-is-the-beast/"
  },
  "next": {
    "title": "Animal Babies on the Farm",
    "url": "/reviews/animal-babies-on-the-farm/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2009/11/guess-how-much-i-love-you21.jpg"} alt={"Guess How Much I Love You"} width={242} height={210} />
      </figure>
      <p>{"This is a sweet board book that’s funny and touching – and only peripherally about animals. But what it does say is good: "}<a href={"http://www.livesofanimals.org/category/family-bonds"} target="_blank" rel="noopener noreferrer">{"animals love their families"}</a>{" just as people do."}</p>
      <p>{"Big Nutbrown Hare and Little Nutbrown Hare, the two characters in Sam McBratney and Anita Jeram’s book, sleep in a grass nest on the ground and hop like rabbits, but they also stand up and talk like humans. And what they talk about as Little Nutbrown Hare gets ready for bed, is how much they love each other."}</p>
      <p>{"This book’s sing-song repetition makes it ideal for ages 0-4. For more reviews, click "}<a href={"http://www.commonsensemedia.org/book-reviews/Guess-Much-I-Love.html"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</p>
    </div>
  );
}
