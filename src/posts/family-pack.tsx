import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4331",
  "slug": "family-pack",
  "url": "/reviews/family-pack/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/02/21/family-pack/",
  "title": "Family Pack",
  "publishedAt": "2011-02-21",
  "publishedLabel": "February 21st, 2011",
  "excerpt": "One of the challenges that children’s authors and animal rights activists alike face is to portray animals as they are — not as humans in costume, but as feeling, sentient, and diverse creatures. In the new book…",
  "image": {
    "src": "/media/2011/02/family-pack.jpg",
    "alt": "Family Pack",
    "width": 210,
    "height": 270
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
      "name": "Alan Marks",
      "slug": "alan-marks",
      "url": "/topics/alan-marks/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sandra Markle",
      "slug": "sandra-markle",
      "url": "/topics/sandra-markle/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wolves",
      "slug": "wolves",
      "url": "/topics/wolves/"
    },
    {
      "name": "Yellowstone",
      "slug": "yellowstone",
      "url": "/topics/yellowstone/"
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
    "description": "One of the challenges that children’s authors and animal rights activists alike face is to portray animals as they are — not as humans in costume, but as feeling, sentient, and diverse creatures. In the new book…",
    "image": "https://vegbooks.org/media/2011/02/family-pack.jpg"
  },
  "previous": {
    "title": "Standing Up to Mr. O.",
    "url": "/reviews/standing-up-to-mr-o/"
  },
  "next": {
    "title": "Oh The Things Mommies Do! (What Could Be Better Than Having Two?)",
    "url": "/reviews/oh-the-things-mommies-do-what-could-be-better-than-having-two/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/02/family-pack.jpg"}><img src={"/media/2011/02/family-pack.jpg"} alt={"Family Pack"} width={210} height={270} /></a>
      </figure>
      <p>{"One of the challenges that children’s authors and animal rights activists alike face is to portray animals as they are — not as humans in costume, but as feeling, sentient, and diverse creatures. In the new book "}<em><a href={"http://www.kirkusreviews.com/book-reviews/childrens-books/sandra-markle/family-pack/"} target="_blank" rel="noopener noreferrer">{"Family Pack"}</a></em>{", Sandra Markle hits just the right note, describing the reintroduction of wolves to Yellowstone National Park from one wolf’s perspective, without succumbing either to anthropomorphism or to stilted, overly factual writing. The result is a story that is at once personal and authentic."}</p>
      <p>{"In reading this book with my daughter, I was reminded of "}<a href={"http://www.randomhouse.com/features/krakauer/author.html"} target="_blank" rel="noopener noreferrer">{"John Krakauer’s book "}<em>{"Into the Wild"}</em></a>{". Like Krakauer, Markle is faced with a daunting challenge of trying to piece together a narrative based on scattered information about an event that really did occur — the reintroduction of wolves to the park and the formation of the Leopold Pack. I think her efforts are successful."}</p>
      <p>{"The story will appeal both to children interested in wildlife and parents who followed "}<a href={"http://www.yellowstonenationalpark.com/wolves.htm"} target="_blank" rel="noopener noreferrer">{"the controversy surrounding the Yellowstone wolves"}</a>{". Vegetarian parents should be aware that one of the critical issues in the book is a young female wolf’s attempts to hunt in order to feed herself. My daughter for one is still uncomfortable with the idea of "}<em>{"any animal"}</em>{" eating another, but this book presents an opportunity to discuss how some animals are obligate carnivores and others, like humans, are not."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
