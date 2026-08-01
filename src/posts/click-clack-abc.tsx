import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7855",
  "slug": "click-clack-abc",
  "url": "/reviews/click-clack-abc/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/07/03/click-clack-abc/",
  "title": "Click, Clack, ABC",
  "publishedAt": "2012-07-03",
  "publishedLabel": "July 3rd, 2012",
  "excerpt": "This is a board book that manages to do something a little new (to me) in an ABC book – there is a hint of narrative as the various animals in the book progress through the letters of the alphabet. I have always…",
  "image": {
    "src": "/media/2012/07/click-clack-abc-cover.jpg",
    "alt": "Click, Clack, ABC",
    "width": 210,
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
      "name": "Alphabet",
      "slug": "alphabet",
      "url": "/topics/alphabet/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Betsy Lewin",
      "slug": "betsy-lewin",
      "url": "/topics/betsy-lewin/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "Doreen Cronin",
      "slug": "doreen-cronin",
      "url": "/topics/doreen-cronin/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "This is a board book that manages to do something a little new (to me) in an ABC book – there is a hint of narrative as the various animals in the book progress through the letters of the alphabet. I have always…",
    "image": "https://vegbooks.org/media/2012/07/click-clack-abc-cover.jpg"
  },
  "previous": {
    "title": "The House that Baba Built",
    "url": "/reviews/the-house-that-baba-built/"
  },
  "next": {
    "title": "The Lorax",
    "url": "/reviews/the-lorax-2/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/07/click-clack-abc-cover.jpg"}><img src={"/media/2012/07/click-clack-abc-cover.jpg"} alt={"Click, Clack, ABC"} width={210} height={210} /></a>
      </figure>
      <p>{"This is a board book that manages to do something a little new (to me) in an ABC book – there is a hint of narrative as the various animals in the book progress through the letters of the alphabet. I have always thought ABC books for babies were more for parents than kids so being able to tell a story instead of just offering random objects or animals to get through the alphabet is refreshing."}</p>
      <p>{"Those that have read Vegbooks favorite, "}<a href={"/reviews/click-clack-moo-cows-that-type/"}><em>{"Click, Clack, Moo"}</em></a>{", will recognize some of our friends – the cows that type (depicted with blankets at hand) and the duck – as well as some other animals including cats, sheep, mice, and pigs. There is no sign of Farmer Brown or his barn, though some of the scenes evoke idyllic storytime farm life like pigs eating out of a trough and goats wearing bandanas. The ABCs culminate in a watermelon picnic on a hill and naps in the sun:"}</p>
      <blockquote>
        <p><em>{"Watermelons waiting."}<br />{" X marks the picnic spot."}<br />{" Yawns yawning."}<br />{" Zzzz zz zzzzzzzzzzzz."}</em></p>
      </blockquote>
      <p>{"A great board book companion to "}<em>{"Click, Clack, Moo"}</em>{". Do you have a favorite ABC book?"}</p>
    </div>
  );
}
