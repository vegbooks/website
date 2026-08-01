import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8486",
  "slug": "elizas-journal",
  "url": "/reviews/elizas-journal/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/01/03/elizas-journal/",
  "title": "Eliza’s Journal",
  "publishedAt": "2013-01-03",
  "publishedLabel": "January 3rd, 2013",
  "excerpt": "The idea of a teenager writing about her summer away from home is nothing new. But this story of a girl getting her first summer job on a lush island far from home has a few twists and turns that will surprise even…",
  "image": {
    "src": "/media/2013/01/cover-ej.jpg",
    "alt": "Eliza’s Journal",
    "width": 210,
    "height": 316
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
      "name": "Caelyn AB Williams",
      "slug": "caelyn-ab-williams",
      "url": "/topics/caelyn-ab-williams/"
    },
    {
      "name": "Fossils",
      "slug": "fossils",
      "url": "/topics/fossils/"
    },
    {
      "name": "Kati Green",
      "slug": "kati-green",
      "url": "/topics/kati-green/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Mystery",
      "slug": "mystery",
      "url": "/topics/mystery/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
    "description": "The idea of a teenager writing about her summer away from home is nothing new. But this story of a girl getting her first summer job on a lush island far from home has a few twists and turns that will surprise even…",
    "image": "https://vegbooks.org/media/2013/01/cover-ej.jpg"
  },
  "previous": {
    "title": "Michael Recycle Saves Christmas",
    "url": "/reviews/michael-recycle-saves-christmas/"
  },
  "next": {
    "title": "Martín de Porres: The Rose in the Desert",
    "url": "/reviews/martin-de-porres-the-rose-in-the-desert/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/01/cover-ej.jpg"}><img src={"/media/2013/01/cover-ej.jpg"} alt={"Eliza’s Journal"} width={210} height={316} /></a>
      </figure>
      <p>{"The idea of a teenager writing about her summer away from home is nothing new. But this story of a girl getting her first summer job on a lush island far from home has a few twists and turns that will surprise even the most jaded teen or tween."}</p>
      <p>{"With hints of The Hardy Boys and Nancy Drew stories, and with just a dash of science fiction, "}<em>{"Eliza’s Journal"}</em>{" breaks the mold that “coming-of-age” stories have led us to expect. At fifteen years old, Eliza is sent to live with her aunt and uncle on Orcas Island for the summer. Instead of the bikini beach summer she expects, she is soon told to “get a job” and she struggles against an uncle who wants to protect her and control her choices. There is a “crush,” but it’s a side story instead of the main storyline."}</p>
      <p>{"A particularly interesting aspect of this book is the focus on Eliza’s summer job. She is a talented illustrator, and she takes a job drawing pictures of various fossils for an eccentric island resident. Readers of "}<em>{"Eliza’s Journal"}</em>{" are treated to facts about different bones and fossils from prehistoric eras. Did you know it was during the Devonian period that lobe-finned fish first evolved pelvic bones and the beginnings of legs? See? You learned something!"}</p>
      <p>{"This book will appeal to tweens and young teens who enjoy the casual structure of journal writing. It has appeal to mystery-loving readers as well as those who enjoy light science-fiction. I am also confident that both girls and boys can relate to the story, especially those boys who grew up with the "}<em>{"Diary of a Wimpy Kid"}</em>{" books. The voice of the main character, Eliza, is not wholly consistent, but it evens out as the story progresses. There is some low-level cursing (damn), and there is some very mild physical interaction (kissing)."}</p>
      <p>{"Vegetarian families should be aware that the meals consist of typical American fare (tuna sandwiches, etc.) and there is mention of tissue still clinging to skulls of the animals the main character illustrates."}</p>
      <p>{"Overall, "}<em>{"Eliza’s Journal"}</em>{" is refreshing in its lack of typical teenage drama and summer romance. I recommend it for 12 and up, and especially for those who are interested in nature, fossils, and mystery."}</p>
      <p><em>{"We received a review copy of "}<a href={"http://www.craigmorecreations.com/elizas-journal/"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" from the publisher."}</em></p>
    </div>
  );
}
