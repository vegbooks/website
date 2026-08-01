import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4495",
  "slug": "a-book-of-sleep",
  "url": "/reviews/a-book-of-sleep/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/07/a-book-of-sleep/",
  "title": "A Book of Sleep",
  "publishedAt": "2011-03-07",
  "publishedLabel": "March 7th, 2011",
  "excerpt": "A delightful animal tale for bedtime or anytime. Il Sung Na writes a simply sweet story of a night owl who witnesses a variety of sleeping creatures and their unique ways of snoozing. The playful, artistic…",
  "image": {
    "src": "/media/2011/03/978-0-375-86618-0.jpg",
    "alt": "A Book of Sleep",
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
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
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Il Sung Na",
      "slug": "il-sung-na",
      "url": "/topics/il-sung-na/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Owls",
      "slug": "owls",
      "url": "/topics/owls/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sleep",
      "slug": "sleep",
      "url": "/topics/sleep/"
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
    "description": "A delightful animal tale for bedtime or anytime. Il Sung Na writes a simply sweet story of a night owl who witnesses a variety of sleeping creatures and their unique ways of snoozing. The playful, artistic…",
    "image": "https://vegbooks.org/media/2011/03/978-0-375-86618-0.jpg"
  },
  "previous": {
    "title": "The Three Pigs",
    "url": "/reviews/the-three-pigs/"
  },
  "next": {
    "title": "Mardy Murie Did!: Grandmother of Conservation",
    "url": "/reviews/mardy-murie-did-grandmother-of-conservation/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/978-0-375-86618-0.jpg"}><img src={"/media/2011/03/978-0-375-86618-0.jpg"} alt={"A Book of Sleep"} width={210} height={210} /></a>
      </figure>
      <p>{"A delightful animal tale for bedtime or anytime. "}<a href={"http://www.ilsungna.com/home.htm"} target="_blank" rel="noopener noreferrer">{"Il Sung Na"}</a>{" writes a simply sweet story of a night owl who witnesses a variety of sleeping creatures and their unique ways of snoozing. The playful, artistic illustrations made me smile and my daughter laugh. Phrases such as “some sleep with one eye open” encourage a child’s wonder and curiosity while the art titillates the imagination and tickles the funny bone. Easily manageable for a small child as a cozy board book."}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
