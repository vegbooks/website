import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3182",
  "slug": "happy-birthday-baby",
  "url": "/reviews/happy-birthday-baby/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/24/happy-birthday-baby/",
  "title": "Happy Birthday, Baby!",
  "publishedAt": "2010-10-24",
  "publishedLabel": "October 24th, 2010",
  "excerpt": "ByJESSICA ALMY Vegbooks turns one today! In honor of our baby’s birthday, Vegbooks contributors have their top picks for the babies in your life. I posed this question to them: Imagine that you’re attending a…",
  "image": {
    "src": "/media/2010/08/i-stock-000002866095-x-small.jpg",
    "alt": "Happy Birthday, Baby!",
    "width": 226,
    "height": 339
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
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Eric Carle",
      "slug": "eric-carle",
      "url": "/topics/eric-carle/"
    },
    {
      "name": "Healthy Eating",
      "slug": "healthy-eating",
      "url": "/topics/healthy-eating/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Lois Ehlert",
      "slug": "lois-ehlert",
      "url": "/topics/lois-ehlert/"
    },
    {
      "name": "Mo Willems",
      "slug": "mo-willems",
      "url": "/topics/mo-willems/"
    },
    {
      "name": "Vegetarian Kids Books",
      "slug": "vegetarian-kids-books",
      "url": "/topics/vegetarian-kids-books/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "ByJESSICA ALMY Vegbooks turns one today! In honor of our baby’s birthday, Vegbooks contributors have their top picks for the babies in your life. I posed this question to them: Imagine that you’re attending a…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000002866095-x-small.jpg"
  },
  "previous": {
    "title": "Children Make Terrible Pets",
    "url": "/reviews/children-make-terrible-pets/"
  },
  "next": {
    "title": "The Best Cat in the World",
    "url": "/reviews/the-best-cat-in-the-world/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000002866095-x-small.jpg"}><img src={"/media/2010/08/i-stock-000002866095-x-small.jpg"} alt={"Happy Birthday, Baby!"} width={226} height={339} /></a>
      </figure>
      <p><strong>{"By"}</strong><strong><a href={"/about/"}>{"JESSICA ALMY"}</a></strong></p>
      <p>{"Vegbooks turns one today! In honor of our baby’s birthday, Vegbooks contributors have their top picks for the babies in your life. I posed this question to them:"}</p>
      <p><em>{"Imagine that you’re attending a birthday party for a one-year-old and can only bring one book — what would it be?"}</em></p>
      <p>{"Here are their answers."}</p>
      <p><a href={"/contributors/#JGannett"}>{"Jennifer Gannett"}</a>{": "}<em>{"The Very Hungry Caterpillar"}</em>{"! Bright drawings appeal to babes in arms, and the story of the caterpillar combines silly and familiar elements, while illustrating an incredible natural process. Note that in our house, we rebrand the animal products that are illustrated."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2010/10/0152056882-lres.jpg"}><img src={"/media/2010/10/0152056882-lres.jpg"} alt={""} width={210} height={183} /></a>
      </figure>
      <p><a href={"/contributors/#CMullin"}>{"Carolyn M. Mullin"}</a>{": Nurture healthy eating habits from a young age with the beautiful watercolor images of fruits and vegetables found in "}<em>{"Eating the Alphabet"}</em>{" by Lois Ehlert, available as a board book or more informative picture book. The pages not only expose readers to a cornucopia of produce (including kohlrabi, endive, and papaya), but teaches the letters of the alphabet and is a great resource for color exploration. The paperback version can grow with the child as it has a lovely glossary with accompanying illustrations."}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0786818700"} alt={""} width={1} height={1} />
      </figure>
      <p><a href={"/contributors/#HMacMichael"}>{"Huyen MacMichael"}</a>{": So many to choose from but I’m going to go with "}<a href={"http://www.amazon.com/gp/product/0786818700?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0786818700"} target="_blank" rel="noopener noreferrer"><em>{"Knuffle Bunny: A Cautionary Tale"}</em></a>{" by Mo Willems. I think it’s brilliant and my daughter found it hilarious the first time (and following times) we read it a year or so ago. The images are very eyecatching and expressive and the story focuses on how a pre-verbal child might view the world and how easily misunderstood she (or he) can be. Also think this is one adults can enjoy just as much as the kids. Willems is one of my favorite authors!"}</p>
      <p>{"Hope you enjoy their picks as much as I have. Happy birthday, Vegbooks!"}</p>
    </div>
  );
}
