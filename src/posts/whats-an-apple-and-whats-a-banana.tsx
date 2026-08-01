import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10444",
  "slug": "whats-an-apple-and-whats-a-banana",
  "url": "/reviews/whats-an-apple-and-whats-a-banana/",
  "legacyUrl": "https://vegbooks.org/index.php/2017/01/04/whats-an-apple-and-whats-a-banana/",
  "title": "What’s an Apple? and What’s a Banana?",
  "publishedAt": "2017-01-04",
  "publishedLabel": "January 4th, 2017",
  "excerpt": "I received these two books from the publisher for review. They are cute books appropriate for a baby or young toddler. Each book is a silly celebration of the fruit in the title. The basic structure is the same for…",
  "image": {
    "src": "/media/2017/01/9781419721403.jpg",
    "alt": "9781419721403",
    "width": 1110,
    "height": 1110
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
      "name": "Apples",
      "slug": "apples",
      "url": "/topics/apples/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Bananas",
      "slug": "bananas",
      "url": "/topics/bananas/"
    },
    {
      "name": "Fruits",
      "slug": "fruits",
      "url": "/topics/fruits/"
    },
    {
      "name": "Good for Todd",
      "slug": "good-for-todd",
      "url": "/topics/good-for-todd/"
    },
    {
      "name": "Greg Pizzoli",
      "slug": "greg-pizzoli",
      "url": "/topics/greg-pizzoli/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Marilyn Singer",
      "slug": "marilyn-singer",
      "url": "/topics/marilyn-singer/"
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
    "description": "I received these two books from the publisher for review. They are cute books appropriate for a baby or young toddler. Each book is a silly celebration of the fruit in the title. The basic structure is the same for…",
    "image": "https://vegbooks.org/media/2017/01/9781419721403.jpg"
  },
  "previous": {
    "title": "Finding Dory (2016)",
    "url": "/reviews/dory/"
  },
  "next": {
    "title": "Bats: Learning to Fly",
    "url": "/reviews/bats-learning-to-fly/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2017/01/9781419721403.jpg"} alt={"9781419721403"} width={1110} height={1110} />
      </figure>
      <p>{"I received these two books from the publisher for review. They are cute books appropriate for a baby or young toddler."}</p>
      <p>{"Each book is a silly celebration of the fruit in the title. The basic structure is the same for each. A bunch of silly things are proposed for each fruit–“You can wash it, try to squash it, or pretend that it’s a ball”–each with cute drawings of two children doing the action described. But in the end it is decided that to eat the fruit is best."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2017/01/9781419721397.jpg"} alt={"9781419721397"} width={792} height={792} />
      </figure>
      <p>{"The books would make great baby gifts."}</p>
    </div>
  );
}
