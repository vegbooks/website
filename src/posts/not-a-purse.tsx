import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10706",
  "slug": "not-a-purse",
  "url": "/reviews/not-a-purse/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/01/03/not-a-purse/",
  "title": "Not a Purse",
  "publishedAt": "2019-01-03",
  "publishedLabel": "January 3rd, 2019",
  "excerpt": "Stephanie Dreyer, the author of 2015’s Not A Nugget, has a worthy follow-up in Not A Purse. The book continues the same child-friendly and informative format along with adorable and empathetic illustrations from Jack…",
  "image": {
    "src": "/media/2019/01/not-a-purse.jpg",
    "alt": "Not a Purse",
    "width": 260,
    "height": 260
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
      "name": "children's books",
      "slug": "childrens-books",
      "url": "/topics/childrens-books/"
    },
    {
      "name": "Jack Veda",
      "slug": "jack-veda",
      "url": "/topics/jack-veda/"
    },
    {
      "name": "Not A Nugget",
      "slug": "not-a-nugget",
      "url": "/topics/not-a-nugget/"
    },
    {
      "name": "Not A Purse",
      "slug": "not-a-purse",
      "url": "/topics/not-a-purse/"
    },
    {
      "name": "Stephanie Dreyer",
      "slug": "stephanie-dreyer",
      "url": "/topics/stephanie-dreyer/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
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
    "description": "Stephanie Dreyer, the author of 2015’s Not A Nugget, has a worthy follow-up in Not A Purse. The book continues the same child-friendly and informative format along with adorable and empathetic illustrations from Jack…",
    "image": "https://vegbooks.org/media/2019/01/not-a-purse.jpg"
  },
  "previous": {
    "title": "Baby Loves Green Energy!",
    "url": "/reviews/baby-loves-green-energy/"
  },
  "next": {
    "title": "Stef Soto, Taco Queen",
    "url": "/reviews/stef-soto-taco-queen/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2019/01/not-a-purse.jpg"} alt={"Not a Purse"} width={260} height={260} />
      </figure>
      <p>{"Stephanie Dreyer, the author of 2015’s "}<a href={"https://www.amazon.com/Not-Nugget-Stephanie-Dreyer/dp/0986106011/ref=as_li_ss_tl?ie=UTF8&qid=1494719613&sr=8-1&keywords=not+a+nugget&linkCode=sl1&tag=veeg07-20&linkId=233ec22694673989fe91c5f346ae8cc6"} target="_blank" rel="noopener noreferrer"><em>{"Not A Nugget"}</em></a>{", has a worthy follow-up in "}<a href={"https://www.amazon.com/Not-Purse-Stephanie-Dreyer/dp/0986106038/ref=as_li_ss_tl?ie=UTF8&qid=1541962965&sr=8-1&keywords=not+a+purse&dpID=41X48r-lbQL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch&linkCode=sl1&tag=veeg07-20&linkId=fed4585e6dffa75cecaa456eacbd7b4c&language=en_US"} target="_blank" rel="noopener noreferrer">{"Not A Purse."}</a>{" The book continues the same child-friendly and informative format along with adorable and empathetic illustrations from Jack Veda."}</p>
      <p>{"While "}<em>{"Not A Nugget"}</em>{" emphasizes that animals are our friends, not food, Not"}<em>{"A Purse"}</em>{" focuses on the ways our society uses animals for beauty, fashion, and convenience items in the home. In each case, Dreyer provides a fun and relatable fact about the animal in question. For example, for the elephant, who looks worriedly at necklaces made with ivory from elephant tusks, readers are informed that elephants use their trunks, wrapped together, to greet each other and show affection, just like we do when we hug! And for the fox that is definitely not a hat, we learn that foxes love to play ball, and that they sometimes swipe golf balls to play with!"}</p>
      <p>{"At the end of the book, Dreyer provides additional fun facts and alternatives to purchasing items that use animal parts or harm animals in their production."}</p>
      <p>{"The examples are child-friendly, and leave caregivers with the option of expanding upon the the examples with details. The illustrations anthropomorphize the animals without completely making them silly and cartoonish."}</p>
      <p><a href={"https://www.amazon.com/Not-Purse-Stephanie-Dreyer/dp/0986106038/ref=as_li_ss_tl?ie=UTF8&qid=1541962965&sr=8-1&keywords=not+a+purse&dpID=41X48r-lbQL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch&linkCode=sl1&tag=veeg07-20&linkId=fed4585e6dffa75cecaa456eacbd7b4c&language=en_US"} target="_blank" rel="noopener noreferrer">{"Not A Purse"}</a>{" and "}<a href={"https://www.amazon.com/Not-Nugget-Stephanie-Dreyer/dp/0986106011/ref=as_li_ss_tl?ie=UTF8&qid=1494719613&sr=8-1&keywords=not+a+nugget&linkCode=sl1&tag=veeg07-20&linkId=233ec22694673989fe91c5f346ae8cc6"} target="_blank" rel="noopener noreferrer">{"Not A Nugget"}</a>{" are able to balance empathy with fun throughout. "}<a href={"https://stephaniedreyer.com/resources/"} target="_blank" rel="noopener noreferrer">{"Stephanie Dreyer"}</a>{" and Jack Veda have created a wonderful genre! Highly recommended for ages 2+"}</p>
      <p><a href={"/reviews/not-a-nugget/"} target="_blank" rel="noopener noreferrer">{"Check out our earlier review of NOT A NUGGET here!"}</a></p>
    </div>
  );
}
