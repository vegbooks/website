import type { PostMetadata } from '../content/types';

export const article = {
  "id": "332",
  "slug": "the-very-busy-spider",
  "url": "/reviews/the-very-busy-spider/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/29/the-very-busy-spider/",
  "title": "The Very Busy Spider",
  "publishedAt": "2009-11-29",
  "publishedLabel": "November 29th, 2009",
  "excerpt": "Spiders have a special status in our home. Rather than shoo them outside — as we do for other bugs — we let spiders stay, at least for a little while. It’s not surprising then that Eric Carle’s classic board book,…",
  "image": {
    "src": "/media/2010/08/i-stock-000002866095-x-small.jpg",
    "alt": "The Very Busy Spider",
    "width": 210,
    "height": 319
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
      "name": "Activities",
      "slug": "activities",
      "url": "/topics/activities/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Eric Carle",
      "slug": "eric-carle",
      "url": "/topics/eric-carle/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Spider",
      "slug": "spider",
      "url": "/topics/spider/"
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
    "description": "Spiders have a special status in our home. Rather than shoo them outside — as we do for other bugs — we let spiders stay, at least for a little while. It’s not surprising then that Eric Carle’s classic board book,…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000002866095-x-small.jpg"
  },
  "previous": {
    "title": "Speak! Children's Book Illustrators Brag About Their Dogs",
    "url": "/reviews/speak-childrens-book-illustrators-brag-about-their-dogs/"
  },
  "next": {
    "title": "The Digging-est Dog",
    "url": "/reviews/the-digging-est-dog-2/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000002866095-x-small.jpg"}><img src={"/media/2010/08/i-stock-000002866095-x-small.jpg"} alt={"The Very Busy Spider"} width={210} height={319} /></a>
      </figure>
      <p>{"Spiders have a special status in our home. Rather than shoo them outside — as we do for other bugs — we let spiders stay, at least for a little while."}</p>
      <p>{"It’s not surprising then that "}<a href={"http://www.eric-carle.com/home.html"} target="_blank" rel="noopener noreferrer">{"Eric Carle’s"}</a>{" classic board book, "}<a href={"http://www.goodreads.com/book/show/3252303.The_Very_Busy_Spider"} target="_blank" rel="noopener noreferrer"><em>{"The Very Busy Spider"}</em></a>{", is also a favorite around here. The story follows the day of a barnyard spider, who is too busy spinning her web to respond to the other animals’ invitations. When at last the web is complete, the rooster runs over to ask if she’d like to help him catch a fly. Her response? She catches the fly in her web “… just like that!”"}</p>
      <p>{"While this isn’t a very nice book from the fly’s perspective, I appreciate Mr. Carle’s interest in spiders. Besides, the fact that some animals eat other animals is a reality that all "}<a href={"http://www.vegfamily.com/"} target="_blank" rel="noopener noreferrer">{"vegan and vegetarian parents"}</a>{" need to confront at some point — might as well deal with it early."}</p>
      <p>{"Ages 0-4. For homeschool or classroom activities related to the book, "}<a href={"http://www.makinglearningfun.com/themepages/SpiderTheVeryBusyPrintables.htm"} target="_blank" rel="noopener noreferrer">{"click here"}</a>{" or "}<a href={"http://www.hubbardscupboard.org/the_very_busy_spider.html"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</p>
    </div>
  );
}
