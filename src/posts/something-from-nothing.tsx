import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7180",
  "slug": "something-from-nothing",
  "url": "/reviews/something-from-nothing/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/03/26/something-from-nothing/",
  "title": "Something from Nothing",
  "publishedAt": "2012-03-26",
  "publishedLabel": "March 26th, 2012",
  "excerpt": "Something from Nothing, written and illustrated by Phoebe Gilman, has been a long-time favorite of mine. My younger sister received this book as a gift when it first came out twenty years ago and my fond memories…",
  "image": {
    "src": "/media/2012/03/something.jpg",
    "alt": "Something from Nothing",
    "width": 210,
    "height": 271
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
      "name": "1990s Books",
      "slug": "1990s-books",
      "url": "/topics/1990s-books/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Grandparents",
      "slug": "grandparents",
      "url": "/topics/grandparents/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jewish Culture",
      "slug": "jewish-culture",
      "url": "/topics/jewish-culture/"
    },
    {
      "name": "Mice",
      "slug": "mice",
      "url": "/topics/mice/"
    },
    {
      "name": "Phoebe Gilman",
      "slug": "phoebe-gilman",
      "url": "/topics/phoebe-gilman/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Something from Nothing, written and illustrated by Phoebe Gilman, has been a long-time favorite of mine. My younger sister received this book as a gift when it first came out twenty years ago and my fond memories…",
    "image": "https://vegbooks.org/media/2012/03/something.jpg"
  },
  "previous": {
    "title": "Simple Pleasures",
    "url": "/reviews/simple-pleasures/"
  },
  "next": {
    "title": "The Great Turkey Race",
    "url": "/reviews/the-great-turkey-race/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/03/something.jpg"}><img src={"/media/2012/03/something.jpg"} alt={"Something from Nothing"} width={210} height={271} /></a>
      </figure>
      <p><em><a href={"http://www.amazon.com/gp/product/0590472801/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0590472801"} target="_blank" rel="noopener noreferrer">{"Something from Nothing"}</a></em>{", written and illustrated by Phoebe Gilman, has been a long-time favorite of mine. My younger sister received this book as a gift when it first came out twenty years ago and my fond memories prompted me to check it out from the library to read to my children. Why review it for Vegbooks? I think that there is a message of reuse that will be appealing to earth-conscious families and there is a mouse family featured in the illustrations that gives the book a fun animal component. Also, as the story is adapted from a Jewish folktale, it is a great book choice for those interested in sharing Jewish culture with the children in their lives."}</p>
      <p>{"The story begins with Joseph’s grandfather making him a “wonderful blanket” when he was a baby. We see the grandfather hand sewing a blue star speckled blanket while the scraps from his workbench have fallen through the floor’s cracks and into the home of two curious mice. As the book progresses and Joseph’s family grows, so too does the family of mice. The mice also use the scraps they find to decorate and furnish their modest home, making this book a fantastic one for re-reading just to look at all the details in the illustrations."}</p>
      <p>{"The wonderful blanket becomes tattered as Joseph grows, so with the refrain “Grandpa can fix it,” Joseph takes the blanket to his grandfather. Grandpa says that there is “just enough material here to make…” a wonderful jacket. Following this pattern the jacket later is made into a vest, a tie, a handkerchief, and a button. Joseph is devastated to lose the button and his mother tells him that you “can’t make something from nothing.” The book ends with Joseph taking a blank paper and pen at school as his material to write a “wonderful story.” He turns his sadness at losing the last part of his grandfather’s special gift and puts his memories on paper so that they are not really gone. A simple, yet powerful message. Highly recommended."}</p>
    </div>
  );
}
