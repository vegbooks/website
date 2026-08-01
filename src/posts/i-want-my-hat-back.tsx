import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6304",
  "slug": "i-want-my-hat-back",
  "url": "/reviews/i-want-my-hat-back/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/15/i-want-my-hat-back/",
  "title": "I Want My Hat Back",
  "publishedAt": "2011-11-15",
  "publishedLabel": "November 15th, 2011",
  "excerpt": "I am so torn about this book! The artwork is spot on and just fits (you can see it in the book’s trailer). The dialogue follows a trend I first noticed and liked in the Elephant and Piggie books where a font color…",
  "image": {
    "src": "/media/2011/11/9780763655983.jpg",
    "alt": "I Want My Hat Back",
    "width": 210,
    "height": 292
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
      "name": "ALSC Notable Childrens Book",
      "slug": "alsc-notable-childrens-book",
      "url": "/topics/alsc-notable-childrens-book/"
    },
    {
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Geisel Honor Book",
      "slug": "geisel-honor-book",
      "url": "/topics/geisel-honor-book/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jon Klassen",
      "slug": "jon-klassen",
      "url": "/topics/jon-klassen/"
    },
    {
      "name": "New York Times Best Illustrated Children's Books of 2011",
      "slug": "new-york-times-best-illustrated-childrens-books-of-2011",
      "url": "/topics/new-york-times-best-illustrated-childrens-books-of-2011/"
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
    "description": "I am so torn about this book! The artwork is spot on and just fits (you can see it in the book’s trailer). The dialogue follows a trend I first noticed and liked in the Elephant and Piggie books where a font color…",
    "image": "https://vegbooks.org/media/2011/11/9780763655983.jpg"
  },
  "previous": {
    "title": "Gobble Gobble",
    "url": "/reviews/gobble-gobble/"
  },
  "next": {
    "title": "A Charlie Brown Thanksgiving (1973)",
    "url": "/reviews/a-charlie-brown-thanksgiving/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/9780763655983.jpg"}><img src={"/media/2011/11/9780763655983.jpg"} alt={"I Want My Hat Back"} width={210} height={292} /></a>
      </figure>
      <p>{"I am so torn about this book! The artwork is spot on and just fits (you can see it in "}<a href={"http://www.youtube.com/watch?v=TYYQW_uCdzM"} target="_blank" rel="noopener noreferrer">{"the book’s trailer"}</a>{"). The dialogue follows a trend I first noticed and liked in the Elephant and Piggie books where a font color denotes who is speaking. I was so excited when we got this on our reserve shelf at the library that I read it to my daughter without pre-reading it as it is from a great publisher, "}<a href={"http://www.candlewick.com/"} target="_blank" rel="noopener noreferrer">{"Candlewick Press"}</a>{"."}</p>
      <p>{"A bear is looking for his hat and asks various animals if they have seen it, even helping one of them. Finally, upon describing his hat to one of the animals he realizes that he has already seen it, on someone else’s head. In fact, he has already asked this someone (a rabbit) if he has seen his hat and the rabbit replied that he hasn’t seen or stolen a hat. The bear runs back, past the other animals in a great spread, to where he spotted his hat and stares at him. Next, this is the “twist” of the book, so read no further if you don’t want to spoil it, you see the bear with his hat on his head being asked if he has seen a rabbit wearing a hat. He guiltily responds, much like the rabbit did earlier, with a hurried series of sentences to indicate that he hasn’t seen the rabbit or eaten him when, in fact, he has."}</p>
      <p>{"No doubt the book is clever and well done. It is billed for ages 4 and up, while my daughter is a little bit over 3, but I couldn’t shake the feeling that I just didn’t like where the story went, that it shouldn’t be seen as having a “mischievous twist” when it is pretty violent to really consider that the rabbit was eaten in retribution. Granted, many fairy tales follow similar paths but I get the feeling this is a book that is for an older crowd and there are more uplifting choices for veg families."}</p>
    </div>
  );
}
