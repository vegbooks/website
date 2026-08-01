import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10283",
  "slug": "here-comes-valentine-cat",
  "url": "/reviews/here-comes-valentine-cat/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/01/25/here-comes-valentine-cat/",
  "title": "Here Comes Valentine Cat",
  "publishedAt": "2016-01-25",
  "publishedLabel": "January 25th, 2016",
  "excerpt": "Here Comes Valentine Catis a grumpy cat book in the same vein as the Bad Kitty series, which is a series my six-year-old loves, though this book seems aimed at a bit younger demographic. Cat doesn’t like Valentine’s…",
  "image": {
    "src": "/media/2016/01/9780525429159.jpg",
    "alt": "9780525429159",
    "width": 500,
    "height": 439
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Claudia Rueda",
      "slug": "claudia-rueda",
      "url": "/topics/claudia-rueda/"
    },
    {
      "name": "Deborah Underwood",
      "slug": "deborah-underwood",
      "url": "/topics/deborah-underwood/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Holiday Books",
      "slug": "holiday-books",
      "url": "/topics/holiday-books/"
    },
    {
      "name": "Holidays",
      "slug": "holidays",
      "url": "/topics/holidays/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Tolerance",
      "slug": "tolerance",
      "url": "/topics/tolerance/"
    },
    {
      "name": "Valentine's Day",
      "slug": "valentines-day",
      "url": "/topics/valentines-day/"
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
    "description": "Here Comes Valentine Catis a grumpy cat book in the same vein as the Bad Kitty series, which is a series my six-year-old loves, though this book seems aimed at a bit younger demographic. Cat doesn’t like Valentine’s…",
    "image": "https://vegbooks.org/media/2016/01/9780525429159.jpg"
  },
  "previous": {
    "title": "Chicken Run (2000)",
    "url": "/reviews/chicken-run-2000/"
  },
  "next": {
    "title": "Herd Your Horses",
    "url": "/reviews/herd-your-horses/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p><em>{"Here Comes Valentine Cat"}</em>{"is a grumpy cat book in the same vein as the "}<a href={"/reviews/bad-kitty/"}>{"Bad Kitty series"}</a>{", which is a series my six-year-old loves, though this book seems aimed at a bit younger demographic."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/01/9780525429159.jpg"} alt={"9780525429159"} width={500} height={439} />
      </figure>
      <p>{"Cat doesn’t like Valentine’s Day. Too mushy. Also, Cat doesn’t like the dog that lives on the other side of the fence. Dog is noisy and reckless and tosses things into the yard, like balls and bones and dog treats. Cat decides that for Valentine’s Day he will compose an angry letter to Dog. Just as Cat is about to toss the letter across the fence, Dog sends a Valentine to Cat that melts his grumpy little heart."}</p>
      <p>{"This book was provided as a review copy by the publisher."}</p>
      <p>{"Ages 3-5."}</p>
    </div>
  );
}
