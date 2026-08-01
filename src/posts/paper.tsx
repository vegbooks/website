import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8986",
  "slug": "paper",
  "url": "/reviews/paper/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/07/05/paper/",
  "title": "Paper Son: Lee’s Journey to America",
  "publishedAt": "2013-07-05",
  "publishedLabel": "July 5th, 2013",
  "excerpt": "When I opened the box containing this review copy from Sleeping Bear Press, my visiting sister-in-law told me that she had just finished a unit of teaching with her third graders about “paper sons” in American…",
  "image": {
    "src": "/media/2013/07/9781585368334.jpg",
    "alt": "9781585368334",
    "width": 210,
    "height": 255
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
      "name": "Helen Foster James",
      "slug": "helen-foster-james",
      "url": "/topics/helen-foster-james/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Virginia Shin-Mui Loh",
      "slug": "virginia-shin-mui-loh",
      "url": "/topics/virginia-shin-mui-loh/"
    },
    {
      "name": "Wilson Ong",
      "slug": "wilson-ong",
      "url": "/topics/wilson-ong/"
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
    "description": "When I opened the box containing this review copy from Sleeping Bear Press, my visiting sister-in-law told me that she had just finished a unit of teaching with her third graders about “paper sons” in American…",
    "image": "https://vegbooks.org/media/2013/07/9781585368334.jpg"
  },
  "previous": {
    "title": "Memoirs of a Goldfish and Memoirs of a Hamster",
    "url": "/reviews/memoirs-of-a-goldfish-and-memoirs-of-a-hamster/"
  },
  "next": {
    "title": "He’s Been a Monster All Day",
    "url": "/reviews/hes-been-a-monster-all-day/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/07/9781585368334.jpg"}><img src={"/media/2013/07/9781585368334.jpg"} alt={"9781585368334"} width={210} height={255} /></a>
      </figure>
      <p>{"When I opened the box containing this review copy from Sleeping Bear Press, my visiting sister-in-law told me that she had just finished a unit of teaching with her third graders about “paper sons” in American History. So I knew this might not be the best fit for my young children because the subject matter is for an older crowd but that doesn’t mean I didn’t find the book beautiful and riveting. Becoming a “paper son” involved learning to pretend to be family of someone in the United States for immigration purposes after the aftermath of 1906 San Francisco earthquake meant that records had been lost to fire."}</p>
      <p>{"I recall our immigration textbook in law school beginning with things like the "}<a href={"https://en.wikipedia.org/wiki/Chinese_Exclusion_Act"} target="_blank" rel="noopener noreferrer">{"Chinese Exclusion Act"}</a>{" but will admit that the existence of “paper sons” was new to me and this fictionalized account of one young boy preparing to leave everything he knows for a chance at the American Dream did a fantastic job of giving the reader a hint of what it must have been like for Chinese immigrants in the early 1900s."}</p>
      <p>{"Much of my elementary level education in history that stuck with me came from historical fiction, and with immigration on the forefront of news today and the recent celebration of the Fourth of July, I highly recommend this book. It may be a novel concept to children today that people would risk everything to come to the United States. As an immigrant myself (albeit from the United Kingdom) my own experiences taught me that it was a privilege to be here but my U.S. born children will hopefully learn about my experiences and those of others before us through books such as "}<em>{"Paper Son"}</em>{"."}</p>
      <p>{"I’ll leave you with a bit of a spoiler (the book is touch and go about whether Lee will make it through the interrogation process on Angel Island):"}</p>
      <blockquote>
        <p>{"In San Francisco his new future greeted him. Lee welcomed his paper father like PoPo had taught him. “Hello. My name is Fu Lee. My father, Fu Ming, is an American and so am I.”"}</p>
      </blockquote>
    </div>
  );
}
