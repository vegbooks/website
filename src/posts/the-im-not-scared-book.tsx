import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6093",
  "slug": "the-im-not-scared-book",
  "url": "/reviews/the-im-not-scared-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/22/the-im-not-scared-book/",
  "title": "The I’m Not Scared Book",
  "publishedAt": "2011-09-22",
  "publishedLabel": "September 22nd, 2011",
  "excerpt": "I received this book to review from the publisher. In general, our family is a fan of Todd Parr. The Family Book is on regular rotation in our home. With Todd Parr books, the message is always clear while the…",
  "image": {
    "src": "/media/2011/09/9780316084451.jpg",
    "alt": "The I’m Not Scared Book",
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fear",
      "slug": "fear",
      "url": "/topics/fear/"
    },
    {
      "name": "Halloween",
      "slug": "halloween",
      "url": "/topics/halloween/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Overcoming Fear",
      "slug": "overcoming-fear",
      "url": "/topics/overcoming-fear/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Todd Parr",
      "slug": "todd-parr",
      "url": "/topics/todd-parr/"
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
    "description": "I received this book to review from the publisher. In general, our family is a fan of Todd Parr. The Family Book is on regular rotation in our home. With Todd Parr books, the message is always clear while the…",
    "image": "https://vegbooks.org/media/2011/09/9780316084451.jpg"
  },
  "previous": {
    "title": "Houndsley and Catina",
    "url": "/reviews/houndsley-and-catina/"
  },
  "next": {
    "title": "Naturally Wild Musicians",
    "url": "/reviews/naturally-wild-musicians/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/09/9780316084451.jpg"}><img src={"/media/2011/09/9780316084451.jpg"} alt={"The I’m Not Scared Book"} width={210} height={210} /></a>
      </figure>
      <p>{"I received "}<a href={"http://www.amazon.com/gp/product/031608445X/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=031608445X"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" to review from the publisher. In general, our family is a fan of Todd Parr. "}<em>{"The Family Book"}</em>{" is on regular rotation in our home. With Todd Parr books, the message is always clear while the pictures add a bit of humor, and this book is no exception. My two year old loves the bright pictures and the simple text."}</p>
      <p>{"The book sets up dual images on each facing page with the same pattern. “Sometimes I’m scared of dogs. I’m not scared when they give me kisses. Sometimes I’m scared of the dark. I’m not scared when I turn on a night light.”"}</p>
      <p>{"The message of this book seems to be that we are all scared sometimes, and there is usually there is a way to dissolve our fears. A pretty good message and maybe very useful if you have a frightful kid. Mine’s not, so the book kind of confuses her. She can’t figure out why someone would be afraid of dogs. At first I was afraid that I was introducing fears to her. But then she started to “read” it herself as she knows what each picture represents. She changes the text to a positive message. “I’m happy when dogs kiss me.” I think maybe as she gets older she may encounter new things to fear and this book will give her the framework of how to handle her fears, so it seems to be a good addition to our book library."}</p>
      <p>{"This book has a slight Halloween theme, but it’s not very strong. It would likely be appropriate for year-round reading."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
