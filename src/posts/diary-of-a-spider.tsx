import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2685",
  "slug": "diary-of-a-spider",
  "url": "/reviews/diary-of-a-spider/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/24/diary-of-a-spider/",
  "title": "Diary of a Spider",
  "publishedAt": "2010-07-24",
  "publishedLabel": "July 24th, 2010",
  "excerpt": "Since spiders are probably one of the most feared creatures around, it stands to reason that a book providing a view of things from their side would make interesting reading. And this book does not disappoint! Diary…",
  "image": {
    "src": "/media/2010/07/diary-of-a-spider.jpg",
    "alt": "Diary of a Spider",
    "width": 210,
    "height": 277
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
      "name": "Doreen Cronin",
      "slug": "doreen-cronin",
      "url": "/topics/doreen-cronin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Living in Harmony with Nature",
      "slug": "living-in-harmony-with-nature",
      "url": "/topics/living-in-harmony-with-nature/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Spiders",
      "slug": "spiders",
      "url": "/topics/spiders/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "Since spiders are probably one of the most feared creatures around, it stands to reason that a book providing a view of things from their side would make interesting reading. And this book does not disappoint! Diary…",
    "image": "https://vegbooks.org/media/2010/07/diary-of-a-spider.jpg"
  },
  "previous": {
    "title": "The Ugly Vegetables",
    "url": "/reviews/the-ugly-vegetables/"
  },
  "next": {
    "title": "Earth Matters",
    "url": "/reviews/earth-matters/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/diary-of-a-spider.jpg"}><img src={"/media/2010/07/diary-of-a-spider.jpg"} alt={"Diary of a Spider"} width={210} height={277} /></a>
      </figure>
      <p>{"Since spiders are probably one of the most feared creatures around, it stands to reason that a book providing a view of things from their side would make interesting reading. And this book does not disappoint!"}</p>
      <p><em><a href={"http://www.curledupkids.com/diaryspi.htm"} target="_blank" rel="noopener noreferrer">{"Diary of a Spider"}</a></em>{" is a personal account of a spider going through its normal routines of building webs, conducting vacuum drills, and showing the fragility of their existence. The book even ends with the spider writing that it would be great if people wouldn’t judge all spiders based on a few that bite."}</p>
      <p>{"From the snapshots included in the front and back, including one that shows the spider’s favorite book is "}<em><a href={"http://www.care2.com/causes/animal-welfare/blog/animal-rights-reading-a-top-ten-summer-book-list/"} target="_blank" rel="noopener noreferrer">{"Charlotte’s Web"}</a></em>{", this is an entertaining look at these small creatures which, when we find them in our homes, we scoop up and take outdoors."}</p>
      <p>{"This is a cute book for children since it teaches that all creatures should be respected and have the right to live, including spiders. It helps to show their personality, demonstrate that they have interests, and explain that humans and spiders can get along if they try."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
