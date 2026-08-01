import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9293",
  "slug": "no-animals",
  "url": "/reviews/no-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/12/16/no-animals/",
  "title": "There Are No Animals in This Book (Only Feelings)",
  "publishedAt": "2013-12-16",
  "publishedLabel": "December 16th, 2013",
  "excerpt": "I have to be honest. The first time I read There Are No Animals In This Book (Only Feelings), I didn’t get it. I thought it was nonsensical, silly and quite frankly pointless. An unrelated discussion with a friend…",
  "image": {
    "src": "/media/2014/01/noaminals-presskit-1.jpg",
    "alt": "noaminals_PRESSKIT-1",
    "width": 210,
    "height": 236
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
      "name": "Chani Sanchez",
      "slug": "chani-sanchez",
      "url": "/topics/chani-sanchez/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Emotion",
      "slug": "emotion",
      "url": "/topics/emotion/"
    },
    {
      "name": "Feelings",
      "slug": "feelings",
      "url": "/topics/feelings/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "I have to be honest. The first time I read There Are No Animals In This Book (Only Feelings), I didn’t get it. I thought it was nonsensical, silly and quite frankly pointless. An unrelated discussion with a friend…",
    "image": "https://vegbooks.org/media/2014/01/noaminals-presskit-1.jpg"
  },
  "previous": {
    "title": "Brother Bear (2003)",
    "url": "/reviews/brother-bear/"
  },
  "next": {
    "title": "Jane and the Dragon",
    "url": "/reviews/jane-and-the-dragon/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2014/01/noaminals-presskit-1.jpg"}><img src={"/media/2014/01/noaminals-presskit-1.jpg"} alt={"noaminals_PRESSKIT-1"} width={210} height={236} /></a>
      </figure>
      <p>{"I have to be honest. The first time I read T"}<em>{"here Are No Animals In This Book (Only Feelings)"}</em>{", I didn’t get it. I thought it was nonsensical, silly and quite frankly pointless. An unrelated discussion with a friend enlightened me. This book that I thought missed the mark was right on track. The book, primarily through its illustrations, shows readers that we observe feelings by paying close attention to facial expressions, body language and tone of voice. Such subtleties are frequently overlooked much to the dismay and frustration of one expressing his feelings. We all know a cow says ‘moo’ and a pony says ‘neigh’ but how do we know when they are sad, happy, angry or lonely? Simply by paying attention."}</p>
      <p>{"By omitting the obvious, the animals present in this book’s illustrations, the author, in a slyly humorous manner, points out that we see an animal and easily overlook his feelings. So maybe if we get rid of the animals we will see the feelings? Unfortunately, it doesn’t work that way. It’s like trying to see a tree in a cut down forest."}</p>
      <p>{"This one takes a while, so be patient. Maybe it is meant to take a while. After all, it takes time to discover something what we overlook."}</p>
      <p><em><a href={"http://www.powerhousebooks.com/?p=16486"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" provided a copy of this book for review."}</em></p>
    </div>
  );
}
