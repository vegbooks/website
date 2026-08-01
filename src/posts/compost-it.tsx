import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7546",
  "slug": "compost-it",
  "url": "/reviews/compost-it/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/05/25/compost-it/",
  "title": "Compost It",
  "publishedAt": "2012-05-25",
  "publishedLabel": "May 25th, 2012",
  "excerpt": "Compost It is part of Cherry Lake Publishing’s Save the Planet Series. This book walks kids through the steps of composting in a logical, straightforward manner. For kids who are unfamiliar with or rusty on the…",
  "image": {
    "src": "/media/2012/05/lalg-compost.jpg",
    "alt": "Compost It",
    "width": 210,
    "height": 270
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
      "name": "Composting",
      "slug": "composting",
      "url": "/topics/composting/"
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
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Garbage",
      "slug": "garbage",
      "url": "/topics/garbage/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Compost It is part of Cherry Lake Publishing’s Save the Planet Series. This book walks kids through the steps of composting in a logical, straightforward manner. For kids who are unfamiliar with or rusty on the…",
    "image": "https://vegbooks.org/media/2012/05/lalg-compost.jpg"
  },
  "previous": {
    "title": "Nancy Clancy, Super Sleuth",
    "url": "/reviews/nancy-clancy-super-sleuth/"
  },
  "next": {
    "title": "Turtle: The Incredible Journey (2009)",
    "url": "/reviews/turtle-the-incredible-journey/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/05/lalg-compost.jpg"}><img src={"/media/2012/05/lalg-compost.jpg"} alt={"Compost It"} width={210} height={270} /></a>
      </figure>
      <p><em>{"Compost It"}</em>{" is part of "}<a href={"http://cherrylakepublishing.com/shop/show/10502"} target="_blank" rel="noopener noreferrer">{"Cherry Lake Publishing’s"}</a>{" Save the Planet Series. This book walks kids through the steps of composting in a logical, straightforward manner. For kids who are unfamiliar with or rusty on the "}<a href={"http://www.treehugger.com/green-food/compost-how-to-make-it-bins-piles-and-more.html"} target="_blank" rel="noopener noreferrer">{"basics of composting"}</a>{", the linear order will be especially welcome when learning about the details of composting our food."}</p>
      <p>{"Utilizing a mission-based hook and interviews with various experts, this book educates children about the reasons for and methods of composting and provides a wealth of statistics and facts. From large scale composting to backyard and apartment composting (one bit featuring worms!), readers will come away knowledgable about the composting process. Note that this is a book ("}<a href={"http://www.amazon.com/gp/product/1602796564/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1602796564"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") aimed at older kids, not wee garden lovers. We will definitely be checking out other titles in this series!"}</p>
      <p>{"Ages 6 and up."}</p>
    </div>
  );
}
