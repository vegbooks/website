import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10890",
  "slug": "nic-bishop-big-cats",
  "url": "/reviews/nic-bishop-big-cats/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/09/30/nic-bishop-big-cats/",
  "title": "Nic Bishop: Big Cats",
  "publishedAt": "2019-09-30",
  "publishedLabel": "September 30th, 2019",
  "excerpt": "BIG CATS by Nic Bishop is a stunning collection of images of tigers, lions, jaguars, and several types of leopards. Aimed at children ages 4-8, the large photo spreads will draw readers in, and the simple captions…",
  "image": {
    "src": "/media/2019/09/nic-bishop-big-cats.jpg",
    "alt": "Nic Bishop: Big Cats",
    "width": 247,
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
      "name": "Big Cats",
      "slug": "big-cats",
      "url": "/topics/big-cats/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jaguars",
      "slug": "jaguars",
      "url": "/topics/jaguars/"
    },
    {
      "name": "Leopards",
      "slug": "leopards",
      "url": "/topics/leopards/"
    },
    {
      "name": "Lions",
      "slug": "lions",
      "url": "/topics/lions/"
    },
    {
      "name": "Nic Bishop",
      "slug": "nic-bishop",
      "url": "/topics/nic-bishop/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "Tigers",
      "slug": "tigers",
      "url": "/topics/tigers/"
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
    "description": "BIG CATS by Nic Bishop is a stunning collection of images of tigers, lions, jaguars, and several types of leopards. Aimed at children ages 4-8, the large photo spreads will draw readers in, and the simple captions…",
    "image": "https://vegbooks.org/media/2019/09/nic-bishop-big-cats.jpg"
  },
  "previous": {
    "title": "Tree of Dreams by Laura Resau",
    "url": "/reviews/tree-of-dreams-by-laura-resau/"
  },
  "next": {
    "title": "Now You Know What You Eat",
    "url": "/reviews/now-you-know-what-you-eat/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/reviews/nic-bishop-big-cats/"}><img src={"/media/2019/09/nic-bishop-big-cats.jpg"} alt={"Nic Bishop: Big Cats"} width={247} height={300} /></a>
      </figure>
      <p><a href={"https://www.indiebound.org/book/9780545605779"} target="_blank" rel="noopener noreferrer"><strong>{"BIG CATS by Nic Bishop"}</strong></a>{" is a stunning collection of images of tigers, lions, jaguars, and several types of leopards. Aimed at children ages 4-8, the large photo spreads will draw readers in, and the simple captions provide interesting and surprising details that inform the images."}</p>
      <p>{"Nic Bishop’s vast experience photographing wildlife comes across in the gorgeous photographs that capture these big cats in various poses as they rest, stalk, pounce, and eat. A few favorite pages are a lion’s huge yawn, a puma in mid-leap, and what could pass as a glamour shot of the rare clouded leopard. There are several photos that include cubs, so children looking for big cat babies will be happy, too."}</p>
      <p>{"This is much more than a picture book! The words are both interesting and educational. The text on each page is split into three captions with three different font sizes. The largest font could serve as a heading, as the smaller font captions expand on it. However, caregivers of younger readers could also stick to just reading the text in largest font depending on attention span and interest. The smallest font is a true photo caption that names and elaborates on the big cat in the photo. The vocabulary doesn’t oversimplify, which makes a great opportunity for read-alouds for children who find the language overly challenging."}</p>
      <p>{"Before starting the book, readers should know that in several photos the big cats are eating their prey. While this opens up opportunities for discussions about the circle of life and how nature works in the wild, taking a look prior to reading the book with a child will help guide caregivers’ sharing as some children may find it disturbing."}</p>
      <p>{"The photographer’s endnote details his experiences capturing the images, highlights the endangerment of some of these big cats, and provides brief tales from his journeys. A short index and glossary at the end is helpful for looking up particular big cats or their actions. Don’t miss the photo of two grown lions rubbing heads in greeting!"}</p>
    </div>
  );
}
