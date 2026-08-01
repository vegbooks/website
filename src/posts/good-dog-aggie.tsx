import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6970",
  "slug": "good-dog-aggie",
  "url": "/reviews/good-dog-aggie/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/02/18/good-dog-aggie/",
  "title": "Good Dog, Aggie",
  "publishedAt": "2012-02-18",
  "publishedLabel": "February 18th, 2012",
  "excerpt": "In this latest installment of the “Aggie and Ben” series, Ben learns that Aggie does not listen well. After she chews his homework, he decides to send her to “Doggie school.” Unfortunately, Aggie does not listen to…",
  "image": {
    "src": "/media/2012/02/good-dog-aggie72.jpg",
    "alt": "Good Dog, Aggie",
    "width": 161,
    "height": 216
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
      "name": "Andrea Zollman",
      "slug": "andrea-zollman",
      "url": "/topics/andrea-zollman/"
    },
    {
      "name": "Chapter Books",
      "slug": "chapter-books",
      "url": "/topics/chapter-books/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
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
      "name": "Frank W. Dormer",
      "slug": "frank-w-dormer",
      "url": "/topics/frank-w-dormer/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Lori Ries",
      "slug": "lori-ries",
      "url": "/topics/lori-ries/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Series",
      "slug": "series",
      "url": "/topics/series/"
    }
  ],
  "reviewer": {
    "name": "Andrea Zollman",
    "slug": "andrea-zollman",
    "url": "/contributors/andrea-zollman/",
    "aliases": [
      "ANDREA ZOLLMAN"
    ]
  },
  "seo": {
    "description": "In this latest installment of the “Aggie and Ben” series, Ben learns that Aggie does not listen well. After she chews his homework, he decides to send her to “Doggie school.” Unfortunately, Aggie does not listen to…",
    "image": "https://vegbooks.org/media/2012/02/good-dog-aggie72.jpg"
  },
  "previous": {
    "title": "Babe: Pig in the City (1998)",
    "url": "/reviews/babe-pig-in-the-city/"
  },
  "next": {
    "title": "Meet Mr. and Mrs. Green",
    "url": "/reviews/meet-mr-and-mrs-green/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/02/good-dog-aggie72.jpg"}><img src={"/media/2012/02/good-dog-aggie72.jpg"} alt={"Good Dog, Aggie"} width={161} height={216} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"https://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=ur2&o=1"} alt={""} width={1} height={1} />
      </figure>
      <p>{"In this latest installment of the “"}<a href={"http://www.amazon.com/mn/search/?_encoding=UTF8&tag=vegbooks-20&linkCode=ur2&camp=1789&creative=390957&field-keywords=aggie%20and%20ben&url=search-alias%3Dstripbooks&sprefix=aggie%20and%20ben%2Cstripbooks%2C420"} target="_blank" rel="noopener noreferrer">{"Aggie and Ben"}</a>{"” series, Ben learns that Aggie does not listen well. After she chews his homework, he decides to send her to “Doggie school.” Unfortunately, Aggie does not listen to the dog trainer either and is dismissed from Doggie school after disrupting the class.."}</p>
      <p>{"Ben trains Aggie in his front yard, attempting to convince her to sit and stay, but instead Aggie chases a squirrel and then a grasshopper. In the chapter “A Bad Dog,” Aggie tears through a hat shop and chases the dogs she sees in the three-way mirror. When I read this book to my son, he laughed at Aggie’s antics throughout the book, and so did I."}</p>
      <p>{"With its short sentences and chapters and colorful illustrations of Aggie’s and Ben’s adventures, this book is designed for beginning readers, and older readers will appreciate its humor. Anyone who has ever experienced the frustration of training a new pet, too, will relate to Ben’s problems with Aggie and his gradual acceptance of her personality. Whether readers call their animal friends companion animals or pets, they will find that this book brings out the positive, negative, and sometimes humorous moments of sharing life with a four-legged friend."}</p>
      <p>{"Ages 4 to 7."}</p>
    </div>
  );
}
