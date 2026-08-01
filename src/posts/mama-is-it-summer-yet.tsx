import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1780",
  "slug": "mama-is-it-summer-yet",
  "url": "/reviews/mama-is-it-summer-yet/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/30/mama-is-it-summer-yet/",
  "title": "Mama, Is It Summer Yet?",
  "publishedAt": "2010-05-30",
  "publishedLabel": "May 30th, 2010",
  "excerpt": "I cringe to find out how Jennifer Gannett, avowed Nikki McClure fan and avid contributor to Vegbooks, will respond when she finds out I snatched up Ms. McClure’s charming new book for myself to review on the site.…",
  "image": {
    "src": "/media/2010/05/mama-is-it-summer.jpg",
    "alt": "Mama, Is It Summer Yet?",
    "width": 245,
    "height": 235
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
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Nikki McClure",
      "slug": "nikki-mcclure",
      "url": "/topics/nikki-mcclure/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Seasons",
      "slug": "seasons",
      "url": "/topics/seasons/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "I cringe to find out how Jennifer Gannett, avowed Nikki McClure fan and avid contributor to Vegbooks, will respond when she finds out I snatched up Ms. McClure’s charming new book for myself to review on the site.…",
    "image": "https://vegbooks.org/media/2010/05/mama-is-it-summer.jpg"
  },
  "previous": {
    "title": "Make and Eat Vegetarian Food",
    "url": "/reviews/make-and-eat-vegetarian-food/"
  },
  "next": {
    "title": "The Dancing Deer and the Foolish Hunter",
    "url": "/reviews/the-dancing-deer-and-the-foolish-hunter/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/mama-is-it-summer.jpg"}><img src={"/media/2010/05/mama-is-it-summer.jpg"} alt={"Mama, Is It Summer Yet?"} width={245} height={235} /></a>
      </figure>
      <p>{"I cringe to find out how Jennifer Gannett, avowed "}<a href={"http://www.nikkimcclure.com/"} target="_blank" rel="noopener noreferrer">{"Nikki McClure"}</a>{" fan and avid "}<a href={"/contributors/"}>{"contributor to Vegbooks"}</a>{", will respond when she finds out I snatched up Ms. McClure’s charming new book for myself to review on the site. But I felt we owed it to you, our readers, to provide another perspective. We’ve all read Jennifer gush about "}<em><a href={"/reviews/all-in-a-day/"}>{"All in a Day"}</a></em>{" and "}<em><a href={"/reviews/the-great-chicken-escape/"}>{"The Great Chicken Escape"}</a></em>{". It’s time for another view."}</p>
      <p>{"Sorry to say, I can’t deliver. When my husband casually asked me about this title, he had to interrupt me five minutes later to ask me to stop raving about it. So I handed him a copy, and now he’s got the bug too."}</p>
      <p>{"While it’s true that what initially drew me to this book was the exquisite artwork and attention to detail — things important in any children’s book — I do think this is a particularly good title for vegetarian and vegan kids. While there’s no mention of dietary issues (as Ms. McClure puts it, “There are no eggs, just berries this time”), the mother and child’s connection to the natural world is a tribute to environmentalism and natural living. It has been fun to notice the details as the seasons progress in the book from winter to summer, and then to go outside and see many of the same signs here in Washington, DC."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
