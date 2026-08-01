import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9721",
  "slug": "this-little-piggy",
  "url": "/reviews/this-little-piggy/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/06/13/this-little-piggy/",
  "title": "This Little Piggy",
  "publishedAt": "2014-06-13",
  "publishedLabel": "June 13th, 2014",
  "excerpt": "What a cute book! My nine-month-old received this as a gift recently and he loves it. It’s a finger puppet book of the classic rhyme. My son alternates between giggling at the wiggly piggies and wanting to eat them.…",
  "image": {
    "src": "/media/2014/06/fetchpix.jpg",
    "alt": "fetchpix",
    "width": 210,
    "height": 285
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
      "name": "Books for Vegetarian Kids",
      "slug": "books-for-vegetarian-kids",
      "url": "/topics/books-for-vegetarian-kids/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Nursery Rhymes",
      "slug": "nursery-rhymes",
      "url": "/topics/nursery-rhymes/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
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
    "description": "What a cute book! My nine-month-old received this as a gift recently and he loves it. It’s a finger puppet book of the classic rhyme. My son alternates between giggling at the wiggly piggies and wanting to eat them.…",
    "image": "https://vegbooks.org/media/2014/06/fetchpix.jpg"
  },
  "previous": {
    "title": "Litton’s Weekend Adventure",
    "url": "/reviews/littons-weekend-adventure/"
  },
  "next": {
    "title": "Behold the Beautiful Dung Beetle",
    "url": "/reviews/behold-the-beatiful-dung-beetle/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/this-little-piggy/"}><img src={"/media/2014/06/fetchpix.jpg"} alt={"fetchpix"} width={210} height={285} /></a>
      </figure>
      <p>{"What a cute book! My nine-month-old received this as a gift recently and he loves it. It’s a finger puppet book of the classic rhyme. My son alternates between giggling at the wiggly piggies and wanting to eat them. It’s a fun book to read with a baby his age."}</p>
      <p>{"What I love about the book ("}<a href={"http://www.amazon.com/gp/product/0545030382/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0545030382&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") is the new words to the classic poem. The original poem is not friendly for vegetarian families with the line “This little Piggy had roast beef.” In this version, the piggy has cookies, which makes it even more fun to read to my son. I highly recommend buying this for any baby in your life."}</p>
    </div>
  );
}
