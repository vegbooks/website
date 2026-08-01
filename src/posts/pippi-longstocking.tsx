import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3916",
  "slug": "pippi-longstocking",
  "url": "/reviews/pippi-longstocking/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/10/pippi-longstocking/",
  "title": "Pippi Longstocking",
  "publishedAt": "2011-01-10",
  "publishedLabel": "January 10th, 2011",
  "excerpt": "Pippi Longstocking is an adventurous 9-year-old girl who lives in Sweden. Her mother passed away when she was a baby, and her father was blown overboard at sea (but Pippi feels that he’s still alive), so she lives on…",
  "image": {
    "src": "/media/2011/01/pippi-longstocking.jpg",
    "alt": "Pippi Longstocking",
    "width": 210,
    "height": 300
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
      "name": "1940s Childrens Literature",
      "slug": "1940s-childrens-literature",
      "url": "/topics/1940s-childrens-literature/"
    },
    {
      "name": "Astrid Lindgren",
      "slug": "astrid-lindgren",
      "url": "/topics/astrid-lindgren/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Classic Books",
      "slug": "classic-books",
      "url": "/topics/classic-books/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Girls",
      "slug": "girls",
      "url": "/topics/girls/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
      "name": "Sweden",
      "slug": "sweden",
      "url": "/topics/sweden/"
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
    "description": "Pippi Longstocking is an adventurous 9-year-old girl who lives in Sweden. Her mother passed away when she was a baby, and her father was blown overboard at sea (but Pippi feels that he’s still alive), so she lives on…",
    "image": "https://vegbooks.org/media/2011/01/pippi-longstocking.jpg"
  },
  "previous": {
    "title": "It’s a Book",
    "url": "/reviews/its-a-book/"
  },
  "next": {
    "title": "Puppy School",
    "url": "/reviews/puppy-school/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/pippi-longstocking.jpg"}><img src={"/media/2011/01/pippi-longstocking.jpg"} alt={"Pippi Longstocking"} width={210} height={300} /></a>
      </figure>
      <p>{"Pippi Longstocking is an adventurous 9-year-old girl who lives in Sweden. Her mother passed away when she was a baby, and her father was blown overboard at sea (but Pippi feels that he’s still alive), so she lives on her own in Villa Villekula (her Victorian house) with Mr. Nilsson (a monkey) and Alfonzo (a horse). She supports herself with a big suitcase full of gold coins."}</p>
      <p>{"The irreverent Pippi—with her bright red braids and superhuman strength—is a force to be reckoned with. She has no formal education and no manners, yet she is wise beyond her years. Pippi befriends her neighbors, Tommy and Annika, who are in full awe of her, and together they embark on a series of wild adventures and funny encounters, although to Pippi, they’re just regular everyday activities. She is pure and unedited, and she naively breaks the rules in every social situation. That’s the lure of the book."}</p>
      <p>{"From an animal standpoint, there are a few minor issues with the book. Her animal companions, Mr. Nilsson and Alfonzo, were both bought rather than rescued, and in one chapter, Pippi attends a circus with a horse in it. However, there are so many redeeming qualities to Pippi herself that despite these not so animal-friendly bits, I would still highly recommend the book. The bits that aren’t “kosher” in terms of animal rights offer an opportunity for parents to discuss these issues with their children."}</p>
      <p>{"This is a great book for kids on many levels. The fact that Pippi is an outrageous free spirit with no rules makes for a fun, entertaining story that kids will love. Beyond that, we meet a female character who is courageous, opinionated, and compassionate. She has a strong sense of justice and always tries to do the right thing. Pippi is a great "}<a href={"http://www.sweden.se/pippi"} target="_blank" rel="noopener noreferrer">{"role model"}</a>{", especially for girls."}</p>
      <p>{"Ages 4-12."}</p>
    </div>
  );
}
