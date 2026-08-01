import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6521",
  "slug": "the-vegetarian-lion",
  "url": "/reviews/the-vegetarian-lion/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/12/01/the-vegetarian-lion/",
  "title": "The Vegetarian Lion",
  "publishedAt": "2011-12-01",
  "publishedLabel": "December 1st, 2011",
  "excerpt": "I had such high hopes for this book. It’s the story of a lion that is a little different. He doesn’t like to eat meat and would rather eat vegetables instead. He is a loner amongst his lion friends, but that’s okay…",
  "image": {
    "src": "/media/2011/11/320.jpg",
    "alt": "The Vegetarian Lion",
    "width": 210,
    "height": 213
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Differences",
      "slug": "differences",
      "url": "/topics/differences/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Kristen Stein",
      "slug": "kristen-stein",
      "url": "/topics/kristen-stein/"
    },
    {
      "name": "Lions",
      "slug": "lions",
      "url": "/topics/lions/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "Vegetarian Characters",
      "slug": "vegetarian-characters",
      "url": "/topics/vegetarian-characters/"
    },
    {
      "name": "Vegetarian Kids Books",
      "slug": "vegetarian-kids-books",
      "url": "/topics/vegetarian-kids-books/"
    },
    {
      "name": "Vegetarian Protagonist",
      "slug": "vegetarian-protagonist",
      "url": "/topics/vegetarian-protagonist/"
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
    "description": "I had such high hopes for this book. It’s the story of a lion that is a little different. He doesn’t like to eat meat and would rather eat vegetables instead. He is a loner amongst his lion friends, but that’s okay…",
    "image": "https://vegbooks.org/media/2011/11/320.jpg"
  },
  "previous": {
    "title": "My Milk Toof",
    "url": "/reviews/my-milk-toof/"
  },
  "next": {
    "title": "101 Ways to Save the Planet",
    "url": "/reviews/101-ways-to-save-the-planet/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/320.jpg"}><img src={"/media/2011/11/320.jpg"} alt={"The Vegetarian Lion"} width={210} height={213} /></a>
      </figure>
      <p>{"I had such high hopes for "}<a href={"http://studioartworks.com/"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{". It’s the story of a lion that is a little different. He doesn’t like to eat meat and would rather eat vegetables instead. He is a loner amongst his lion friends, but that’s okay because he bides his time with other vegetarian animals like giraffes. That is, until one day when he meets another lion just like him. The lion and lioness fall in love, get married, and raise lion cubs together."}</p>
      <p>{"The book description on "}<a href={"http://www.amazon.com/gp/product/1411664590/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1411664590"} target="_blank" rel="noopener noreferrer">{"Amazon.com"}</a>{" describes the prose as whimsical and rhythmic, but I found this not to be the case. The rhymes are forced, and the flow is stunted, and the story line is hard to follow, which makes it difficult to read aloud. The artwork is nice, with bright, vivid, engaging pictures. But the story is severely lacking. I bought this as a gift for my daughter for Christmas but I will be returning it and giving her "}<em><a href={"/reviews/the-great-pig-escape/"}>{"The Great Pig Escape"}</a></em>{" instead."}</p>
    </div>
  );
}
