import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11093",
  "slug": "lalas-words",
  "url": "/reviews/lalas-words/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/06/04/lalas-words/",
  "title": "Lala’s Words",
  "publishedAt": "2021-06-04",
  "publishedLabel": "June 4th, 2021",
  "excerpt": "LALA’S WORDS by Gracey Zhang is a really beautiful story about loving things for what they are, weeds and all. The power for positive attention and words, unconditional affection, and persistence are all included…",
  "image": {
    "src": "/media/2021/05/lalas-words.jpg",
    "alt": "Lala’s Words",
    "width": 309,
    "height": 400
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
      "name": "elementary readers",
      "slug": "elementary-readers",
      "url": "/topics/elementary-readers/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
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
    "description": "LALA’S WORDS by Gracey Zhang is a really beautiful story about loving things for what they are, weeds and all. The power for positive attention and words, unconditional affection, and persistence are all included…",
    "image": "https://vegbooks.org/media/2021/05/lalas-words.jpg"
  },
  "previous": {
    "title": "Llama Glamarama and Free to Be Elephant Me",
    "url": "/reviews/llama-glamarama-and-free-to-be-elephant-me/"
  },
  "next": {
    "title": "Finding Home",
    "url": "/reviews/finding-home/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2021/05/lalas-words.jpg"} alt={"Lala’s Words"} width={309} height={400} />
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781338648232"} target="_blank" rel="noopener noreferrer">{"LALA’S WORDS by Gracey Zhang"}</a>{" is a really beautiful story about loving things for what they are, weeds and all. The power for positive attention and words, unconditional affection, and persistence are all included within the text and illustrations. Lala is an active child who loves to jump and get dirty and take care of a patch of green weeds growing up from the concrete. As summer’s heat keeps most people indoors and sluggish, Lala’s energy refuses to be contained and eventually refreshes everyone around her."}</p>
      <p>{"Lala’s mother is a busy, exasperated mom whose dismay at Lala’s constant state of dirt and movement seems to be her main source of frustration. Lala shrugs off her mother’s pleas to “Be still” and “Stop playing with weeds” in the dirt. She calls Lala’s visits to the weeds growing from the concrete “jibber-jabber” and doesn’t understand that Lala considers the plants her beloved friends. While relatable, some children and caregivers may see Lala’s mother’s words as too harsh for the behavior they address. However, the contrast between Lala’s loving words to her plant friends and her mother’s scolding is effective. This is especially true when Lala’s mother realizes how special Lala’s relationship with her plants truly is."}</p>
      <p>{"The illustrations in "}<a href={"https://www.indiebound.org/book/9781338648232"} target="_blank" rel="noopener noreferrer">{"LALA’S WORDS"}</a>{" are simple and lovely. The only splashes of color are the yellow of Lala’s dress and the green of the plants. Both colors grow as Lala’s care for her friends continues. It will be fun for children to point out how Lala’s yellow spreads to others as the book goes on. This simple picture book makes a heartfelt and encouraging picture book focused on how kind and encouraging words and actions heal and grow beyond expectations."}</p>
    </div>
  );
}
