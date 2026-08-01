import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1998",
  "slug": "wright-on-time-books-1-2",
  "url": "/reviews/wright-on-time-books-1-2/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/17/wright-on-time-books-1-2/",
  "title": "Wright on Time, Books 1 & 2",
  "publishedAt": "2010-06-17",
  "publishedLabel": "June 17th, 2010",
  "excerpt": "Roadschooling (v.): a nomadic form of homeschooling. For the Wright Family, this educational path calls for a cross-country adventure – RV style – that will eventually span 50 chapter books, authored by Lisa M.…",
  "image": {
    "src": "/media/2010/05/wot1-cover.jpg",
    "alt": "Wright on Time, Books 1 & 2",
    "width": 205,
    "height": 314
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Homeschooling",
      "slug": "homeschooling",
      "url": "/topics/homeschooling/"
    },
    {
      "name": "Humane",
      "slug": "humane",
      "url": "/topics/humane/"
    },
    {
      "name": "Lisa M. Cottrell-Bentley",
      "slug": "lisa-m-cottrell-bentley",
      "url": "/topics/lisa-m-cottrell-bentley/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Tanja Bauerle",
      "slug": "tanja-bauerle",
      "url": "/topics/tanja-bauerle/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
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
    "description": "Roadschooling (v.): a nomadic form of homeschooling. For the Wright Family, this educational path calls for a cross-country adventure – RV style – that will eventually span 50 chapter books, authored by Lisa M.…",
    "image": "https://vegbooks.org/media/2010/05/wot1-cover.jpg"
  },
  "previous": {
    "title": "Carrot Soup",
    "url": "/reviews/carrot-soup/"
  },
  "next": {
    "title": "In a Tizzy Over Turkey",
    "url": "/reviews/in-a-tizzy-over-turkey/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/wot1-cover.jpg"}><img src={"/media/2010/05/wot1-cover.jpg"} alt={"Wright on Time, Books 1 & 2"} width={205} height={314} /></a>
      </figure>
      <p>{"Roadschooling (v.): a nomadic form of homeschooling. For the Wright Family, this educational path calls for a cross-country adventure – RV style – that will eventually span 50 chapter books, authored by Lisa M. Cottrell-Bentley and illustrated by Tanja Bauerle."}</p>
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/wot2-cover.jpg"}><img src={"/media/2010/06/wot2-cover.jpg"} alt={""} width={203} height={311} /></a>
      </figure>
      <p>{"Sister Nadia and her animated brother Aidan learn about the best America has to offer right alongside their parents in explorative, hands-on encounters. To date, the siblings have spelunked mineral-laden caves in Arizona where bats, iridescent scorpions and stunning geological formations abound and uncovered Allosaurus fossils in a Utah-based dinosaur dig. What kid wouldn’t want such an upbringing? Plus there’s mystery, suspense, and humor aplenty…and a great use of new vocabulary words and fun facts about each state."}</p>
      <p>{"This series is a fantastic find not only for its portrayal of a wholesome family, but one that shows alternative schooling and humane diets as an ordinary way of life. Although the term isn’t mentioned outright, the Wright foursome is vegan and enjoys classic beans and rice (Book 2), and crunchy peanut butter and prickly pear jam sandwiches (Book 1). "}<a href={"http://www.wrightontimebooks.com/"}>{"Dig in and enjoy traveling with the Wright family."}</a>{" They know how to have a good time."}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
