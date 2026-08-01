import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9085",
  "slug": "i-know-a-lot",
  "url": "/reviews/i-know-a-lot/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/09/24/i-know-a-lot/",
  "title": "I Know A Lot!",
  "publishedAt": "2013-09-24",
  "publishedLabel": "September 24th, 2013",
  "excerpt": "It’s nothing short of incredible how much children learn in the first few years of life! I remember how my kiddo surprised me one day when I quoted a passage from a favorite board book and, in response, she crawled…",
  "image": {
    "src": "/media/2013/09/9781419704000-i-know-a-lot-cv.jpg",
    "alt": "9781419704000_IKnowALot_CV",
    "width": 210,
    "height": 292
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
      "name": "Board Books",
      "slug": "board-books",
      "url": "/topics/board-books/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Sara Gillingham",
      "slug": "sara-gillingham",
      "url": "/topics/sara-gillingham/"
    },
    {
      "name": "Stephen Krensky",
      "slug": "stephen-krensky",
      "url": "/topics/stephen-krensky/"
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
    "description": "It’s nothing short of incredible how much children learn in the first few years of life! I remember how my kiddo surprised me one day when I quoted a passage from a favorite board book and, in response, she crawled…",
    "image": "https://vegbooks.org/media/2013/09/9781419704000-i-know-a-lot-cv.jpg"
  },
  "previous": {
    "title": "No Monkeys, No Chocolate",
    "url": "/reviews/no-monkeys-no-chocolate/"
  },
  "next": {
    "title": "Green Smoothie Magic",
    "url": "/reviews/green-smoothie-magic/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/09/9781419704000-i-know-a-lot-cv.jpg"}><img src={"/media/2013/09/9781419704000-i-know-a-lot-cv.jpg"} alt={"9781419704000_IKnowALot_CV"} width={210} height={292} /></a>
      </figure>
      <p>{"It’s nothing short of incredible how much children learn in the first few years of life! I remember how my kiddo surprised me one day when I quoted a passage from a favorite board book and, in response, she crawled to her bedroom and retrieved that particular book from shelves of dozens. In some ways, children are like foreign language learners, often able to understand much more than they’re able to articulate."}</p>
      <p>{"The charming board book "}<a href={"https://www.youtube.com/watch?v=5mu63zMD-k8"} target="_blank" rel="noopener noreferrer"><em>{"I Know A Lot!"}</em></a>{" (which I received as a review copy) celebrates the vast array of knowledge that children acquire in the first years of life. I love how author Stephen Krensky uses the first person — it’s so empowering! The book is simultaneously about what the narrator, an adorable African-American girl, knows and what the listener knows."}</p>
      <p>{"With just a few simple words and bright illustrations on each page, this book is a perfect start for any parent who wants to begin reading to a baby or toddler ("}<a href={"http://www.zerotothree.org/child-development/early-language-literacy/qa/is-it-too-early-to-begin-to-read.html"} target="_blank" rel="noopener noreferrer">{"so important!"}</a>{") and would likely do double-duty as an early reader, particularly for children with younger siblings or friends to read to."}</p>
      <p>{"Recommended for babies and toddlers."}</p>
    </div>
  );
}
