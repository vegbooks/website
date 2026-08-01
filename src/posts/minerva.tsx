import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1239",
  "slug": "minerva",
  "url": "/reviews/minerva/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/21/minerva/",
  "title": "Minerva Louise and the Colorful Eggs",
  "publishedAt": "2010-03-21",
  "publishedLabel": "March 21st, 2010",
  "excerpt": "Janet Morgan Stoeke writes and illustrates an unusual Easter story from a chicken’s perspective. Minerva Louise is a compassionate chicken with a personality. As she enjoys the sights of spring, she discovers…",
  "image": {
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Minerva Louise and the Colorful Eggs",
    "width": 210,
    "height": 282
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
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Easter",
      "slug": "easter",
      "url": "/topics/easter/"
    },
    {
      "name": "Eggs",
      "slug": "eggs",
      "url": "/topics/eggs/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Good Samaritan",
      "slug": "good-samaritan",
      "url": "/topics/good-samaritan/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Janet Morgan Stoeke",
      "slug": "janet-morgan-stoeke",
      "url": "/topics/janet-morgan-stoeke/"
    },
    {
      "name": "Minerva Louise",
      "slug": "minerva-louise",
      "url": "/topics/minerva-louise/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Janet Morgan Stoeke writes and illustrates an unusual Easter story from a chicken’s perspective. Minerva Louise is a compassionate chicken with a personality. As she enjoys the sights of spring, she discovers…",
    "image": "https://vegbooks.org/media/2011/07/i-stock-000009594887-x-small.jpg"
  },
  "previous": {
    "title": "Tillie Lays an Egg",
    "url": "/reviews/tillie-lays-an-egg/"
  },
  "next": {
    "title": "The Easter Egg",
    "url": "/reviews/easter-egg/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/i-stock-000009594887-x-small.jpg"}><img src={"/media/2011/07/i-stock-000009594887-x-small.jpg"} alt={"Minerva Louise and the Colorful Eggs"} width={210} height={282} /></a>
      </figure>
      <p><a href={"http://www.janetstoeke.com/"} target="_blank" rel="noopener noreferrer">{"Janet Morgan Stoeke"}</a>{" writes and illustrates an unusual Easter story from a chicken’s perspective. Minerva Louise is a compassionate chicken with a personality. As she enjoys the sights of spring, she discovers untended (Easter) eggs and takes it upon herself to try to mother them. As she finds more and more motherless eggs, she rouses her hen friends to help keep them warm, only to discover they have disappeared! The chickens eventually notice the “farmers” (people) gathering eggs and Minerva Louise stops worrying since this is a familiar sight. Her naivety is humorous and adorable as when she tells the hens “I’m finding eggs outside, and some of them are so cold they’re turning blue.”"}</p>
      <p>{"Although some "}<a href={"http://en.wikipedia.org/wiki/Animal_rights"} target="_blank" rel="noopener noreferrer">{"AR"}</a>{" folks may find the depiction of the happy-farm and happy-chicken image to be inaccurate and the acceptance of egg-gathering to be offensive, I thought the author did a reasonable job of getting a chicken’s view. The farm, farmers, and egg-gathering depicted in this story offer opportunities for parents to discuss and educate their children about farming practices, should they feel like it. Having visited chickens at the local farm sanctuary, I fully"}<br />{" appreciate the author’s portrayal of Minerva Louise as a thinking, caring being. I did not care for the jacket description of Minerva Louise as “feather-brained” but rather, I view her as naive."}</p>
      <p>{"I find it appropriate that Minerva Louise is the Good Samaritan in an Easter story. Clueless about Easter, as any chicken would be, her reactions to the colorful eggs is humorous. My daughter and I both giggled at some of Minerva Louise’s reactions. Both of us found the bright and colorful art attractive and they are reminiscent of stain glass with their black outlines. With a few simple strokes, the author succinctly illustrates Minerva Louise’s facial expressions. I was happy to find that Minerva Louise is a series of books and my daughter and I look forward to reading about her other adventures."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
