import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9217",
  "slug": "feeding-the-young-athlete",
  "url": "/reviews/feeding-the-young-athlete/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/19/feeding-the-young-athlete/",
  "title": "Feeding the Young Athlete",
  "publishedAt": "2013-11-19",
  "publishedLabel": "November 19th, 2013",
  "excerpt": "As a parent raising two veg kids I am always a little skeptical when I come across books recommending food. You just never know what you will get. But I have two athletic children (and a very athletic vegetarian…",
  "image": {
    "src": "/media/2013/11/cover-feeding-the-young-athlete.jpg",
    "alt": "Cover-Feeding the Young Athlete",
    "width": 208,
    "height": 320
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
      "name": "Cynthia Lair",
      "slug": "cynthia-lair",
      "url": "/topics/cynthia-lair/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "As a parent raising two veg kids I am always a little skeptical when I come across books recommending food. You just never know what you will get. But I have two athletic children (and a very athletic vegetarian…",
    "image": "https://vegbooks.org/media/2013/11/cover-feeding-the-young-athlete.jpg"
  },
  "previous": {
    "title": "Fifty Cents and a Dream",
    "url": "/reviews/fifty-cents-and-a-dream/"
  },
  "next": {
    "title": "If You Decide to Go to the Moon",
    "url": "/reviews/if-you-decide-to-go-to-the-moon/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/cover-feeding-the-young-athlete.jpg"}><img src={"/media/2013/11/cover-feeding-the-young-athlete.jpg"} alt={"Cover-Feeding the Young Athlete"} width={208} height={320} /></a>
      </figure>
      <p>{"As a parent raising two veg kids I am always a little skeptical when I come across books recommending food. You just never know what you will get. But I have two athletic children (and a very athletic vegetarian husband) and was interested in seeing what "}<em>{"Feeding the Young Athlete"}</em>{" had to offer."}</p>
      <p>{"The book is written in nice and easy terms and has a good layout that makes it appealing to the reader. It does offer some good information regarding being hydrated, making homemade sports drinks, and some snacks. But there are also a lot of messages in there that vegetarian and vegan parents may want to avoid sending to their young athletes."}</p>
      <p>{"Throughout the book there is really an emphasis on meat and eggs as the best protein sources. Eggs are especially promoted to the vegetarian athlete. Other plant-based sources are mentioned, but the overall message is animal products are superior. The author even goes as far when discussing amino acids as to say that eating a roasted chicken leg is cool because it contains all eight amino acids, while vegetarian athletes need to “combine certain foods to make sure they get all eight in their diet.”"}</p>
      <p>{"Overall, this is not an ideal book for the vegetarian or vegan child. The message is tipped in favor of eating animals in order to feed the young athlete."}</p>
      <p><em><a href={"http://www.readerstoeaters.com/"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" provided a review copy of this book."}</em></p>
    </div>
  );
}
