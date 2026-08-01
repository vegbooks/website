import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10689",
  "slug": "the-truth-about-elephants",
  "url": "/reviews/the-truth-about-elephants/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/12/03/the-truth-about-elephants/",
  "title": "The Truth About Elephants",
  "publishedAt": "2018-12-03",
  "publishedLabel": "December 3rd, 2018",
  "excerpt": "The tagline for Maxwell Eaton’s collection of The Truth About…books is “Seriously Funny Facts About Your Favorite Animals,” and it proves itself true throughout the 32 pages of the latest installment: THE TRUTH ABOUT…",
  "image": {
    "src": "/media/2018/12/the-truth-about-elephants.jpg",
    "alt": "The Truth About Elephants",
    "width": 242,
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "kid lit",
      "slug": "kid-lit",
      "url": "/topics/kid-lit/"
    },
    {
      "name": "Maxwell Eaton III",
      "slug": "maxwell-eaton-iii",
      "url": "/topics/maxwell-eaton-iii/"
    },
    {
      "name": "The Truth About Elephants",
      "slug": "the-truth-about-elephants",
      "url": "/topics/the-truth-about-elephants/"
    },
    {
      "name": "young readers",
      "slug": "young-readers",
      "url": "/topics/young-readers/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "The tagline for Maxwell Eaton’s collection of The Truth About…books is “Seriously Funny Facts About Your Favorite Animals,” and it proves itself true throughout the 32 pages of the latest installment: THE TRUTH ABOUT…",
    "image": "https://vegbooks.org/media/2018/12/the-truth-about-elephants.jpg"
  },
  "previous": {
    "title": "When You Grow Up to Vote",
    "url": "/reviews/when-you-grow-up-to-vote/"
  },
  "next": {
    "title": "Stretch to the Sun: From a Tiny Sprout to the Tallest Tree in the World",
    "url": "/reviews/stretch-to-the-sun-from-a-tiny-sprout-to-the-tallest-tree-in-the-world/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2018/12/the-truth-about-elephants.jpg"} alt={"The Truth About Elephants"} width={242} height={300} />
      </figure>
      <p>{"The tagline for Maxwell Eaton’s collection of "}<em>{"The Truth About…"}</em>{"books is “Seriously Funny Facts About Your Favorite Animals,” and it proves itself true throughout the 32 pages of the latest installment: "}<a href={"https://us.macmillan.com/books/9781626726697"} target="_blank" rel="noopener noreferrer">{"THE TRUTH ABOUT ELEPHANTS"}</a>{". Aimed at ages 4-8, the illustrations are colorful, funny, and detailed enough to both entertain and inform. As promised on the cover, there really is tons of information about elephants in the book."}</p>
      <p>{"Eaton takes readers through elephant origins, the differences between Asian and African elephants, body parts (did you know elephants have just four teeth?), the make-up of herds, and predators and defenses. All of this information is shared with humor through clever visuals and funny side-notes sprinkled on each page."}</p>
      <p>{"The book addresses threats posed by humans as well, including trophy hunting, the clearing of elephant habitats, and development of buildings and roads that slice through elephant land and paths. The threats, both human and non-human, are presented in an age-appropriate manner in both language and illustration."}</p>
      <p><em>{"The Truth About Elephants"}</em>{" is a wonderful book for children interested in elephants or animals of all kinds. The "}<a href={"http://maxwelleaton.com/books/"} target="_blank" rel="noopener noreferrer">{"three earlier books in this series"}</a>{", focused on bears, hippos, and dolphins, share facts in the same humorous and clever manner. Highly recommended for ages 4-8."}</p>
    </div>
  );
}
