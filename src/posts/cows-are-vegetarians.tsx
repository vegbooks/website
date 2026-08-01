import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3013",
  "slug": "cows-are-vegetarians",
  "url": "/reviews/cows-are-vegetarians/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/05/cows-are-vegetarians/",
  "title": "Cows Are Vegetarians",
  "publishedAt": "2010-09-05",
  "publishedLabel": "September 5th, 2010",
  "excerpt": "With a title like Cows Are Vegetarians, you would expect this book to tell you all about how cows eat grass all their lives. Fortunately, inside its cover is a message much more exciting and profound. Educating your…",
  "image": {
    "src": "/media/2010/11/cows-are-veg.jpg",
    "alt": "Cows Are Vegetarians",
    "width": 210,
    "height": 210
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
      "name": "Ann Bradley",
      "slug": "ann-bradley",
      "url": "/topics/ann-bradley/"
    },
    {
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "John McIntyre",
      "slug": "john-mcintyre",
      "url": "/topics/john-mcintyre/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
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
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "vegetarian kids",
      "slug": "vegetarian-kids",
      "url": "/topics/vegetarian-kids/"
    }
  ],
  "reviewer": {
    "name": "John McIntyre",
    "slug": "john-mcintyre",
    "url": "/contributors/john-mcintyre/",
    "aliases": [
      "JOHN MCINTYRE"
    ]
  },
  "seo": {
    "description": "With a title like Cows Are Vegetarians, you would expect this book to tell you all about how cows eat grass all their lives. Fortunately, inside its cover is a message much more exciting and profound. Educating your…",
    "image": "https://vegbooks.org/media/2010/11/cows-are-veg.jpg"
  },
  "previous": {
    "title": "Do Princesses Wear Hiking Boots?",
    "url": "/reviews/do-princesses-wear-hiking-boots/"
  },
  "next": {
    "title": "Now Hiring: White House Dog",
    "url": "/reviews/now-hiring-white-house-dog/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/11/cows-are-veg.jpg"}><img src={"/media/2010/11/cows-are-veg.jpg"} alt={"Cows Are Vegetarians"} width={210} height={210} /></a>
      </figure>
      <p>{"With a title like "}<em><a href={"http://cowsarevegetarians.com/A_Green_Site.html"} target="_blank" rel="noopener noreferrer">{"Cows Are Vegetarians"}</a></em>{", you would expect this book to tell you all about how cows eat grass all their lives. Fortunately, inside its cover is a message much more exciting and profound."}</p>
      <p>{"Educating your kids about the vegan or vegetarian lifestyle can be tough at times, which is where this book steps in. It explains the difference between vegetarian and vegan and goes into the environmental effects of meat production. You’ll also find a good explanation of the health aspects."}</p>
      <p><em>{"Cows are Vegetarians"}</em>{" cleverly explains the reasons to be vegetarian and will provide your kids with answers to the probing questions they are undoubtedly asked. Kids are often asked why they are vegetarian (or vegan!) at school and now they’ll have something important to say."}</p>
      <p>{"One thing it needs more of is inviting illustrations. Sadly, there a only a few black and white images."}</p>
      <p>{"It’s quite a quick read too at 24 pages, but it manages to get the point across without getting lost in the details. At the end of the day, "}<em>{"Cows Are Vegetarians"}</em>{" is a great book to add to your kid’s collection."}</p>
      <p>{"Ages 8-12."}</p>
    </div>
  );
}
