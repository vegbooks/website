import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9749",
  "slug": "the-girl-and-the-bicycle",
  "url": "/reviews/the-girl-and-the-bicycle/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/07/03/the-girl-and-the-bicycle/",
  "title": "The Girl and the Bicycle",
  "publishedAt": "2014-07-03",
  "publishedLabel": "July 3rd, 2014",
  "excerpt": "I love this book. We got it from the library and though it is wordless, it has a fantastic message and beautiful illustrations. I enjoyed Mark Pett’s last book, The Boy and the Airplane, but this book (Amazon…",
  "image": {
    "src": "/media/2014/07/girland-bicycle.jpg",
    "alt": "Cover image of Girl and Bicycle, depicting a girl looking into a shop window",
    "width": 210,
    "height": 163
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
      "name": "Bicycles",
      "slug": "bicycles",
      "url": "/topics/bicycles/"
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
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Mark Pett",
      "slug": "mark-pett",
      "url": "/topics/mark-pett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Saving",
      "slug": "saving",
      "url": "/topics/saving/"
    },
    {
      "name": "Wordless Books",
      "slug": "wordless-books",
      "url": "/topics/wordless-books/"
    },
    {
      "name": "Working",
      "slug": "working",
      "url": "/topics/working/"
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
    "description": "I love this book. We got it from the library and though it is wordless, it has a fantastic message and beautiful illustrations. I enjoyed Mark Pett’s last book, The Boy and the Airplane, but this book (Amazon…",
    "image": "https://vegbooks.org/media/2014/07/girland-bicycle.jpg"
  },
  "previous": {
    "title": "GoldieBlox and the Spinning Machine",
    "url": "/reviews/goldieblox-and-the-spinning-machine/"
  },
  "next": {
    "title": "The Zoo Box",
    "url": "/reviews/the-zoo-box/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/the-girl-and-the-bicycle/"}><img src={"/media/2014/07/girland-bicycle.jpg"} alt={"Cover image of Girl and Bicycle, depicting a girl looking into a shop window"} width={210} height={163} /></a>
      </figure>
      <p>{"I love this book. We got it from the library and though it is wordless, it has a fantastic message and beautiful illustrations. I enjoyed Mark Pett’s last book, "}<em><a href={"http://www.goodreads.com/book/show/13260743-the-boy-and-the-airplane"} target="_blank" rel="noopener noreferrer">{"The Boy and the Airplane"}</a>{","}</em>{" but this book ("}<a href={"http://www.amazon.com/gp/product/1442483199/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1442483199&linkCode=as2&tag=vegbooks-20&linkId=6BFL2UBIHLEKONFM"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") prompted me to sit down and write a review for Vegbooks so I could share it with all of you."}</p>
      <p>{"A young girl and her brother (who is eating an ice cream cone) are walking on the street and she spies a beautiful green bicycle in a shop window. Rushing home, she scrapes together all the change she can (piggy bank, couch cushions, etc.), before moving on to opening a lemonade stand and selling old toys to raise money. She comes up with the idea to rake leaves and goes door to door asking neighbors if she can help with their yards. Finally, an older woman takes her up on the offer."}</p>
      <p>{"Seasons change and the girl continues to help in the yard and house of the older woman. She dusts, shovels snow, gardens, and tidies. At last, she has saved enough for the bicycle and rushes to the store to claim her hard earned prize. What happens next is touching. My almost 4-year-old and almost 6-year-old loved the book, as did I. Highly recommended."}</p>
    </div>
  );
}
