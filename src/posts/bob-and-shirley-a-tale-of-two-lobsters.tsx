import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4915",
  "slug": "bob-and-shirley-a-tale-of-two-lobsters",
  "url": "/reviews/bob-and-shirley-a-tale-of-two-lobsters/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/28/bob-and-shirley-a-tale-of-two-lobsters/",
  "title": "Bob and Shirley: A Tale of Two Lobsters",
  "publishedAt": "2011-04-28",
  "publishedLabel": "April 28th, 2011",
  "excerpt": "Looking for a feel-good children’s story about a pair of mature lobsters netted and dragged to Rhode Island, shipped to Philadelphia for sale, flown back home to Maine and the returned to the wild? Yes? In that…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Bob and Shirley: A Tale of Two Lobsters",
    "width": 210,
    "height": 139
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
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Demonstrations",
      "slug": "demonstrations",
      "url": "/topics/demonstrations/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Lobsters",
      "slug": "lobsters",
      "url": "/topics/lobsters/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Protests",
      "slug": "protests",
      "url": "/topics/protests/"
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
    "description": "Looking for a feel-good children’s story about a pair of mature lobsters netted and dragged to Rhode Island, shipped to Philadelphia for sale, flown back home to Maine and the returned to the wild? Yes? In that…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Saving the Baghdad Zoo: A True Story of Hope and Heroes",
    "url": "/reviews/saving-the-baghdad-zoo-a-true-story-of-hope-and-heroes/"
  },
  "next": {
    "title": "Stuff!: Reduce, Reuse, Recycle",
    "url": "/reviews/stuff-reduce-reuse-recycle/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Bob and Shirley: A Tale of Two Lobsters"} width={210} height={139} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0140387927"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Looking for a feel-good children’s story about a pair of mature lobsters netted and dragged to Rhode Island, shipped to Philadelphia for sale, flown back home to Maine and the returned to the wild? Yes? In that case,"}<em><a href={"http://www.amazon.com/gp/product/0140387927/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0140387927"} target="_blank" rel="noopener noreferrer">{"Bob and Shirley: A Tale of Two Lobsters"}</a></em>{" is the book for you."}</p>
      <p>{"This is a "}<a href={"http://www.nytimes.com/1988/04/18/opinion/topics-of-the-times-lobster-shift.html"} target="_blank" rel="noopener noreferrer">{"true story that occurred in 1988"}</a>{" (though this book is twenty years old, it does not come off as dated). Part of the Puffin Science Easy to Read series, "}<em>{"Bob and Shirley"}</em>{"traces the journey of the pair of mature lobsters who were netted, dragged out of state and sent to market in violation of Maine size regulations. When the huge lobsters were displayed for sale in a fish market, they caught the public eye. In this instance, the public eye included potential purchasers, curious onlookers and protesters who urged that Bob and Shirley be returned to the wild (and, adults will surmise, state officials). Eventually, a deal is struck: the buyer will accept smaller lobsters and Bob and Shirley will return home. They are flown back to Maine and returned to the sea by a lobsterman."}</p>
      <p>{"I liked the fact that this book gave a lot of its illustration space to the protesters, who carry signs supportive of Bob and Shirley’s release. Children’s books depicting animal related protests are few and far between– and books where the protests seem to have a positive impact on the outcome are even more rare. You’ll also probably be struck, as I was, by the fact that there is a kid’s book available featuring lobsters as main characters without a specific reference to cooking or eating them. Certainly there is the idea of eating fish or lobster underlying throughout—after all, much of the book takes place in a fish market, and one of the illustrations depicts various fish lying on ice. We know that Bob and Shirley’s intended destiny was a steaming pot of boiling water, and surely that is what happened to their replacements. You’ll want to weigh whether or not this is something that feels comfortable for your family. The illustrations are cheery and the story has a happy ending for our hero and heroine. As we all know, however, there are many sea creatures whose stories do not have such happy endings. May Bob and Shirley’s story inspire more of them."}</p>
      <p>{"Ages 5 and up."}</p>
    </div>
  );
}
