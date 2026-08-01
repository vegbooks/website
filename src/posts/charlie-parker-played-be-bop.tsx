import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5935",
  "slug": "charlie-parker-played-be-bop",
  "url": "/reviews/charlie-parker-played-be-bop/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/27/charlie-parker-played-be-bop/",
  "title": "Charlie Parker Played Be Bop",
  "publishedAt": "2011-08-27",
  "publishedLabel": "August 27th, 2011",
  "excerpt": "There are so many things I like about Charlie Parker Played Be Bop. My daughter received it for her second birthday and really enjoyed the text and the images. Its simple, rhyming text really held her attention. It’s…",
  "image": {
    "src": "/media/2011/08/charlie-parker-be-bop.jpg",
    "alt": "Charlie Parker Played Be Bop",
    "width": 210,
    "height": 220
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
      "name": "Charlie Parker",
      "slug": "charlie-parker",
      "url": "/topics/charlie-parker/"
    },
    {
      "name": "Chris Raschka",
      "slug": "chris-raschka",
      "url": "/topics/chris-raschka/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jazz",
      "slug": "jazz",
      "url": "/topics/jazz/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "There are so many things I like about Charlie Parker Played Be Bop. My daughter received it for her second birthday and really enjoyed the text and the images. Its simple, rhyming text really held her attention. It’s…",
    "image": "https://vegbooks.org/media/2011/08/charlie-parker-be-bop.jpg"
  },
  "previous": {
    "title": "Magic Trash",
    "url": "/reviews/magic-trash/"
  },
  "next": {
    "title": "Friends: True Stories of Extraordinary Animal Friendships",
    "url": "/reviews/friends-true-stories-of-extraordinary-animal-friendships/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/charlie-parker-be-bop.jpg"}><img src={"/media/2011/08/charlie-parker-be-bop.jpg"} alt={"Charlie Parker Played Be Bop"} width={210} height={220} /></a>
      </figure>
      <p>{"There are so many things I like about "}<em><a href={"http://www.goodreads.com/book/show/908724.Charlie_Parker_Played_Be_Bop"} target="_blank" rel="noopener noreferrer">{"Charlie Parker Played Be Bop"}</a></em>{". My daughter received it for her second birthday and really enjoyed the text and the images. Its simple, rhyming text really held her attention."}</p>
      <p>{"It’s a book about jazz. It’s written text, but it sounds like jazz music. What an amazing feat to write text that sounds like jazz! “Charlie Parker played be bop. / Charlie Parker played saxophone. / The music sounded like be bop. / Never leave your cat alone.” The text and the rhythm capture the energy of jazz music. This book is a great introduction to a genre of music and a culture."}</p>
      <p>{"Because I like "}<a href={"http://www.amazon.com/gp/product/0531070956/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0531070956"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" so much, I was really saddened when I realized we had to get rid of it. “Charlie Parker played be bop. / Charlie Parker played no trombone. / The music sounded like be bop. / Barbecue that last leg bone.” That last line about the leg bone is accompanied by an image of a leg of meat (possibly chicken or pig) on a barbecue grill. I might have put up with the words, but the image is just too much for me. Sadly, we’ll be getting rid of this one."}</p>
      <p>{"Ages Baby-Preschool."}</p>
    </div>
  );
}
