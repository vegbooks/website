import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7177",
  "slug": "simple-pleasures",
  "url": "/reviews/simple-pleasures/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/03/24/simple-pleasures/",
  "title": "Simple Pleasures",
  "publishedAt": "2012-03-24",
  "publishedLabel": "March 24th, 2012",
  "excerpt": "Simple Pleasures is a sweet story depicting children at play using only natural objects and their imaginations. The text of the story emphasizes the importance of deepening connection with the natural world and…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Simple Pleasures",
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
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Leah Mebane",
      "slug": "leah-mebane",
      "url": "/topics/leah-mebane/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Simple Living",
      "slug": "simple-living",
      "url": "/topics/simple-living/"
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
    "description": "Simple Pleasures is a sweet story depicting children at play using only natural objects and their imaginations. The text of the story emphasizes the importance of deepening connection with the natural world and…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Little Colt’s Palm Sunday",
    "url": "/reviews/little-colts-palm-sunday/"
  },
  "next": {
    "title": "Something from Nothing",
    "url": "/reviews/something-from-nothing/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Simple Pleasures"} width={210} height={139} /></a>
      </figure>
      <p><em><a href={"http://www.naturalearthpaint.com/shop/simple-pleasures/"} target="_blank" rel="noopener noreferrer">{"Simple Pleasures"}</a></em>{" is a sweet story depicting children at play using only natural objects and their imaginations. The text of the story emphasizes the importance of deepening connection with the natural world and community, reminding us that, “simple pleasures in life are free, whether you’re ninety or three.” Highlighting this pleasantly relaxed book are the illustrations by "}<a href={"http://www.fanningart.com/"} target="_blank" rel="noopener noreferrer">{"Leah Mebane"}</a>{". Her spirited art shows youngsters involved in all sorts of outdoor activities: skipping stones, watching bees, racing a leaf and a feather in a stream, playing hopscotch. On another stylistic note, some adults may find the book’s font, Comic Sans, distracting."}</p>
      <p>{"In our plugged-in era, this book is a welcome reminder that some of the most simple activities can provide joy and meaning. The message of this story is a welcome one for parents, educators and friends, especially those who are suffering from fatigue over screen time negotiations."}</p>
      <p>{"Ages 3 and up."}</p>
    </div>
  );
}
