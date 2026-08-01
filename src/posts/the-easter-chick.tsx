import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1241",
  "slug": "the-easter-chick",
  "url": "/reviews/the-easter-chick/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/17/the-easter-chick/",
  "title": "The Easter Chick",
  "publishedAt": "2010-03-17",
  "publishedLabel": "March 17th, 2010",
  "excerpt": "Author Geraldine Elschner and illustrator Alexandra Junge have put together a brilliantly multi-faceted book in The Easter Chick. Not only does book tell the story of an egg that wants to hatch on Easter, but it…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Easter Chick",
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
      "name": "Alexandra Junge",
      "slug": "alexandra-junge",
      "url": "/topics/alexandra-junge/"
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
      "name": "Geraldine Elschner",
      "slug": "geraldine-elschner",
      "url": "/topics/geraldine-elschner/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Spring",
      "slug": "spring",
      "url": "/topics/spring/"
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
    "description": "Author Geraldine Elschner and illustrator Alexandra Junge have put together a brilliantly multi-faceted book in The Easter Chick. Not only does book tell the story of an egg that wants to hatch on Easter, but it…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Hachiko Waits",
    "url": "/reviews/hachiko-waits/"
  },
  "next": {
    "title": "Tillie Lays an Egg",
    "url": "/reviews/tillie-lays-an-egg/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"The Easter Chick"} width={210} height={139} /></a>
      </figure>
      <p>{"Author Geraldine Elschner and illustrator "}<a href={"http://www.alexandrajunge.de/"} target="_blank" rel="noopener noreferrer">{"Alexandra Junge"}</a>{" have put together a brilliantly multi-faceted book in "}<em>{"The Easter Chick"}</em>{". Not only does book tell the story of an egg that wants to hatch on Easter, but it includes a clear and memorable description of how to determine when Easter is (I know I’m always confused about how they decide when Easter is) each year. The book also contains simple illustrations of phases of the moon, a recital of the days of the week, and hidden rabbits throughout the book for an Easter bunny search and find. Even though the story is geared for kids older than my three-year old, she still enjoyed the facial expressions on the animals and had a great time finding the hidden rabbits. I’m not sure if she remembers the three things that help set the date for Easter each year, but I sure do!"}</p>
      <p>{"The story is entertaining with uniquely stylized illustrations that camouflage that it is marvelously fun teaching tool. Junge’s images are colorful and very expressive. Although not overtly religious, one of the illustrations contains three crosses in the background and sheep in the foreground. This subtlety, cleverness, and focus on the egg as a chick versus "}<a href={"http://www.wesleyan.edu/wsa/warn/eon/batteryfarming/index.html"} target="_blank" rel="noopener noreferrer">{"egg as food or object"}</a>{" makes this my top pick for a "}<a href={"http://www.veganoutreach.org/whyvegan/"} target="_blank" rel="noopener noreferrer">{"vegan"}</a>{"-friendly Easter story."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
