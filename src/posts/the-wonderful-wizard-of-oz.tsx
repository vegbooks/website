import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10415",
  "slug": "the-wonderful-wizard-of-oz",
  "url": "/reviews/the-wonderful-wizard-of-oz/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/11/13/the-wonderful-wizard-of-oz/",
  "title": "The Wonderful Wizard of Oz",
  "publishedAt": "2016-11-13",
  "publishedLabel": "November 13th, 2016",
  "excerpt": "My mom’s favorite movie is “The Wizard of Oz,” so I’ve seen it dozens of times, but I’ve never read the book. I was happy to come across a copy of it in the Little Free Library on my street. My seven-year-old…",
  "image": {
    "src": "/media/2016/09/29116-2.jpg",
    "alt": "Oz",
    "width": 466,
    "height": 743
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
      "name": "Classic Books",
      "slug": "classic-books",
      "url": "/topics/classic-books/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Fantasy",
      "slug": "fantasy",
      "url": "/topics/fantasy/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Kindness",
      "slug": "kindness",
      "url": "/topics/kindness/"
    },
    {
      "name": "L. Frank Baum",
      "slug": "l-frank-baum",
      "url": "/topics/l-frank-baum/"
    },
    {
      "name": "W. W. Denslow",
      "slug": "w-w-denslow",
      "url": "/topics/w-w-denslow/"
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
    "description": "My mom’s favorite movie is “The Wizard of Oz,” so I’ve seen it dozens of times, but I’ve never read the book. I was happy to come across a copy of it in the Little Free Library on my street. My seven-year-old…",
    "image": "https://vegbooks.org/media/2016/09/29116-2.jpg"
  },
  "previous": {
    "title": "Santa’s First Vegan Christmas",
    "url": "/reviews/santas-first-vegan-christmas/"
  },
  "next": {
    "title": "Trolls (2016)",
    "url": "/reviews/trolls-2016/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"My mom’s favorite movie is “The Wizard of Oz,” so I’ve seen it dozens of times, but I’ve never read the book. I was happy to come across a copy of it in the Little Free Library on my street. My seven-year-old daughter and I read "}<em>{"The Wonderful Wizard of"}</em>{" Oz with the plan of following it with a viewing her grandmother’s favorite movie."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/09/29116-2.jpg"} alt={"Oz"} width={466} height={743} />
      </figure>
      <p><em>{"The Wonderful Wizard of Oz"}</em>{" is an enjoyable read. It tells the fantastic tale in a straightforward and even-keeled tone that held my daughter’s interest throughout. She was never very frightened by the elements of the book that I remember frightening me while watching the movie as a young child, and I think that’s due to the tone. Instead of being frightened, she was highly curious as to how Dorothy and her friends would get out of the various situations they found themselves in."}</p>
      <p>{"Amazingly, even though the book is over 100 years old, it holds up quite well. Dorothy is a strong and brave girl and makes a wonderful heroine."}</p>
      <p>{"One aspect of the story that surprised me, that I don’t recall from the movie, is the specifics of the tin woodman. He doesn’t have a heart, but is actually quite loving. One way his love manifests is a love of animals. He cries so much from stepping on a beetle that he rusts up and has to be oiled by Dorothy in order to move again. Another time, when Dorothy is hungry and in need of food, the lion offers to catch her a deer in the woods. The tin woodman begs Dorothy not to eat a deer because the mere thought it almost brings him to tears again. Dorothy instead picks some nuts from a tree for her meal."}</p>
      <p>{"This was a very lovely book that my daughter and I very much enjoyed. The animal loving spirit of the tin woodman was a surprise which would delight any vegetarian child."}</p>
    </div>
  );
}
