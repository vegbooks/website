import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8881",
  "slug": "noisy-bug",
  "url": "/reviews/noisy-bug/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/05/23/noisy-bug/",
  "title": "Noisy Bug Sing-a-Long",
  "publishedAt": "2013-05-23",
  "publishedLabel": "May 23rd, 2013",
  "excerpt": "I received this book as a review copy from the publisher and I’m excited that I’ll soon be able to share it with my new baby. It’s the perfect book for babies because it’s full of silly sounds that babies love to…",
  "image": {
    "src": "/media/2013/05/9781584691921.jpg",
    "alt": "9781584691921",
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "John Himmelman",
      "slug": "john-himmelman",
      "url": "/topics/john-himmelman/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "I received this book as a review copy from the publisher and I’m excited that I’ll soon be able to share it with my new baby. It’s the perfect book for babies because it’s full of silly sounds that babies love to…",
    "image": "https://vegbooks.org/media/2013/05/9781584691921.jpg"
  },
  "previous": {
    "title": "The Cats of Tanglewood Forest",
    "url": "/reviews/the-cats-of-tanglewood-forest/"
  },
  "next": {
    "title": "Each Living Thing",
    "url": "/reviews/each-living-thing/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/05/9781584691921.jpg"}><img src={"/media/2013/05/9781584691921.jpg"} alt={"9781584691921"} width={210} height={210} /></a>
      </figure>
      <p>{"I received this book as a review copy from the "}<a href={"http://www.dawnpub.com/"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{" and I’m excited that I’ll soon be able to share it with my new baby. It’s the perfect book for babies because it’s full of silly sounds that babies love to hear. Each page features a bold illustration of an insect and describes the sounds each one makes. Infants will chuckle at the sounds, and young toddlers will enjoy singing along. My daughter loved animal noises when she was first learning to talk and I’m sure this book would have been a hit with her. CHIRP-CHIRP-CHIRP KERAAAAAK TICK-TICK-TICK ZEEZEEZEEZEEZEE. We can all enjoy singing along with insects."}</p>
      <p>{"Ages Baby-Toddler."}</p>
    </div>
  );
}
