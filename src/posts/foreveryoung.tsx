import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2996",
  "slug": "foreveryoung",
  "url": "/reviews/foreveryoung/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/02/foreveryoung/",
  "title": "Forever Young",
  "publishedAt": "2010-09-02",
  "publishedLabel": "September 2nd, 2010",
  "excerpt": "Music icon Bob Dylan penned the words for “Forever Young” back in 1973. In 2008, illustrator Paul Rogers, through his imagery, interpreted those lyrics into a sweet rendition for children…and of course Bob Dylan…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Forever Young",
    "width": 210,
    "height": 140
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
      "name": "Bob Dylan",
      "slug": "bob-dylan",
      "url": "/topics/bob-dylan/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Paul Rogers",
      "slug": "paul-rogers",
      "url": "/topics/paul-rogers/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Music icon Bob Dylan penned the words for “Forever Young” back in 1973. In 2008, illustrator Paul Rogers, through his imagery, interpreted those lyrics into a sweet rendition for children…and of course Bob Dylan…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Two Bobbies",
    "url": "/reviews/two-bobbies/"
  },
  "next": {
    "title": "The Berenstain Bears’ New Kitten",
    "url": "/reviews/the-berenstain-bears-new-kitten/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Forever Young"} width={210} height={140} /></a>
      </figure>
      <p>{"Music icon Bob Dylan penned the words for “Forever Young” back in 1973. In 2008, illustrator Paul Rogers, through his imagery, interpreted those lyrics into a sweet rendition for children…and of course Bob Dylan fans. While the book definitely reads like “words of wisdom” imparted to children by their (grand) parents, it shares an inspiring, ‘60’s look at the crossroads where youth, idealism, music, and friendship meet."}</p>
      <p>{"Within the storyline, a young boy is bestowed a guitar. He grows up alongside his good friend, both attending school, studying in the evenings, signature gathering under a banner that reads “Save the Planet,” and jamming out in city parks with their instruments. As they get older, the two head out on the road in an old Beetle and join the “Stop the War” march."}</p>
      <p>{"This book is not suitable for all kids, but would be a great resource for the history of American politics, music and cultural studies. For Dylan fans, you’ll enjoy trying to pinpoint all of Rogers’ references. (See if you can find Joan Baez, Thelonious Monk and Paul McCartney in the drawings!) There’s a helpful guide in the back of the book."}</p>
      <p>{"Ages 9 – 99."}</p>
    </div>
  );
}
