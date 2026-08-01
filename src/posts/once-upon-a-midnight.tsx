import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8864",
  "slug": "once-upon-a-midnight",
  "url": "/reviews/once-upon-a-midnight/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/05/14/once-upon-a-midnight/",
  "title": "Once Upon a Midnight",
  "publishedAt": "2013-05-14",
  "publishedLabel": "May 14th, 2013",
  "excerpt": "This cute and humorous story of a pug coming to grips with the new baby in the house is told in rhyme to the cadence of The Raven. The illustrations are adorable as the frustrations of Andy the pug are very clearly…",
  "image": {
    "src": "/media/2013/05/once-upon-a-midnight.jpg",
    "alt": "OnceUponAMidnight",
    "width": 198,
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Diana Ting Delosh",
      "slug": "diana-ting-delosh",
      "url": "/topics/diana-ting-delosh/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Kelly Morrison Handerhan",
      "slug": "kelly-morrison-handerhan",
      "url": "/topics/kelly-morrison-handerhan/"
    },
    {
      "name": "New Sibling",
      "slug": "new-sibling",
      "url": "/topics/new-sibling/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Pugs",
      "slug": "pugs",
      "url": "/topics/pugs/"
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
    "description": "This cute and humorous story of a pug coming to grips with the new baby in the house is told in rhyme to the cadence of The Raven. The illustrations are adorable as the frustrations of Andy the pug are very clearly…",
    "image": "https://vegbooks.org/media/2013/05/once-upon-a-midnight.jpg"
  },
  "previous": {
    "title": "Jadhu Ram and the Thirsty Forest",
    "url": "/reviews/jadhu-ram-and-the-thirsty-forest/"
  },
  "next": {
    "title": "Sylvia’s Spinach",
    "url": "/reviews/sylvias-spinach/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/05/once-upon-a-midnight.jpg"}><img src={"/media/2013/05/once-upon-a-midnight.jpg"} alt={"OnceUponAMidnight"} width={198} height={300} /></a>
      </figure>
      <p>{"This cute and humorous story of a pug coming to grips with the new baby in the house is told in rhyme to the cadence of "}<em>{"The Raven"}</em>{". The illustrations are adorable as the frustrations of Andy the pug are very clearly shown on his wrinkled little face."}</p>
      <p>{"The pug has to adjust to not being the only baby any more, and also to all of the annoyances of having an infant in the house. Andy is frustrated by the all night crying and the constant attention the baby receives from his parents. But he is also intrigued by the baby’s bottles. What is in them that so captivates the baby? He has to get one! And that leads to the climax of the story. Poor Andy!"}</p>
      <p>{"This book ("}<a href={"http://www.amazon.com/gp/product/061571126X/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=061571126X&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") would be a great gift for a child expecting a new baby in the house. It helps to illustrate what new babies are like while at the same time telling a humorous and engaging story preschoolers will love. This book was provided to me as a gift from the author, a friend of mine and fellow pug lover."}</p>
      <p>{"Ages 3+."}</p>
    </div>
  );
}
