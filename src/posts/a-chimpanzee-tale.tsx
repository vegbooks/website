import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2164",
  "slug": "a-chimpanzee-tale",
  "url": "/reviews/a-chimpanzee-tale/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/21/a-chimpanzee-tale/",
  "title": "A Chimpanzee Tale",
  "publishedAt": "2010-06-21",
  "publishedLabel": "June 21st, 2010",
  "excerpt": "In this book, A Chimpanzee Tale, by Karen Young, Hoot, a chimpanzee, explains how happy chimpanzees live in the wild and why chimpanzees shouldn’t ever be in a city, zoo, movie, show, or circus. Hoot gives a lot of…",
  "image": {
    "src": "/media/2010/07/chimpanzee-tale.jpg",
    "alt": "A Chimpanzee Tale",
    "width": 172,
    "height": 224
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
      "name": "Animal Rights Books for Kids",
      "slug": "animal-rights-books-for-kids",
      "url": "/topics/animal-rights-books-for-kids/"
    },
    {
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
    },
    {
      "name": "Kaitlyn Aiyana Enstice",
      "slug": "kaitlyn-aiyana-enstice",
      "url": "/topics/kaitlyn-aiyana-enstice/"
    },
    {
      "name": "Karen Young",
      "slug": "karen-young",
      "url": "/topics/karen-young/"
    },
    {
      "name": "Primates",
      "slug": "primates",
      "url": "/topics/primates/"
    },
    {
      "name": "Reviews by Kids",
      "slug": "reviews-by-kids",
      "url": "/topics/reviews-by-kids/"
    },
    {
      "name": "Tim Enstice",
      "slug": "tim-enstice",
      "url": "/topics/tim-enstice/"
    }
  ],
  "reviewer": {
    "name": "Kaitlyn Aiyana Enstice",
    "slug": "kaitlyn-aiyana-enstice",
    "url": "/contributors/kaitlyn-aiyana-enstice/",
    "aliases": [
      "KAITLYN AIYANA ENSTICE"
    ]
  },
  "seo": {
    "description": "In this book, A Chimpanzee Tale, by Karen Young, Hoot, a chimpanzee, explains how happy chimpanzees live in the wild and why chimpanzees shouldn’t ever be in a city, zoo, movie, show, or circus. Hoot gives a lot of…",
    "image": "https://vegbooks.org/media/2010/07/chimpanzee-tale.jpg"
  },
  "previous": {
    "title": "Free the Worms!",
    "url": "/reviews/free-the-worms/"
  },
  "next": {
    "title": "Elephants Swim",
    "url": "/reviews/elephants-swim/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/chimpanzee-tale.jpg"}><img src={"/media/2010/07/chimpanzee-tale.jpg"} alt={"A Chimpanzee Tale"} width={172} height={224} /></a>
      </figure>
      <p>{"In this book, "}<em><a href={"http://www.petacatalog.com/products/A_Chimpanzee_Tale-318-9.html"} target="_blank" rel="noopener noreferrer">{"A Chimpanzee Tale"}</a></em>{", by Karen Young, Hoot, a chimpanzee, explains how happy chimpanzees live in the wild and why chimpanzees shouldn’t ever be in a city, zoo, movie, show, or circus. Hoot gives a lot of information about chimpanzees. Did you know that chimpanzees can’t swim? Or that they sleep in beds called “nests” that they make fresh each day? Also, did you know that they are our closest relatives? After you read "}<em>{"A Chimpanzee Tale"}</em>{", you’ll know these very interesting facts and many more."}</p>
      <p>{"This story gives you a good feeling, that you can do your part to change the world for chimpanzees who are in captivity, and it also talks about the sanctuaries that help chimpanzees. The pictures help to illustrate the story and make it fun to read."}</p>
      <p><em>{"A Chimpanzee Tale"}</em>{" is very different from other books. I love how the author, Karen Young, put important vocabulary words at the end of the book―that helped me understand the words much better. The afterword is also interesting because it seems as if the author is talking to the reader and explaining even more about chimpanzees."}</p>
      <p>{"Reading this story was exciting, and it made me want to "}<a href={"http://www.releasechimps.org/"} target="_blank" rel="noopener noreferrer">{"start a revolution for chimpanzees"}</a>{"."}</p>
      <p>{"Ages 5-10."}</p>
      <p>{"* "}<strong>{"Kaitlyn Aiyana Enstice is the daughter of Tim Enstice,"}</strong><strong>{"director of gift planning for"}</strong><strong><a href={"http://www.petafoundation.org/"} target="_blank" rel="noopener noreferrer">{"PETA Foundation"}</a>{"."}</strong></p>
    </div>
  );
}
