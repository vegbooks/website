import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3950",
  "slug": "mixed-beasts",
  "url": "/reviews/mixed-beasts/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/14/mixed-beasts/",
  "title": "Mixed Beasts",
  "publishedAt": "2011-01-14",
  "publishedLabel": "January 14th, 2011",
  "excerpt": "Inside Mixed Beasts, you’ll find a collection of fictional beasts discovered by Zoologist and Professor Julius Duckworth O’Hare Esq. Each odd beast is a combination of two animals or two “things.” For example, there…",
  "image": {
    "src": "/media/2011/01/1769-cv-hr.jpg",
    "alt": "Mixed Beasts",
    "width": 210,
    "height": 280
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
      "name": "Ants",
      "slug": "ants",
      "url": "/topics/ants/"
    },
    {
      "name": "Creativity",
      "slug": "creativity",
      "url": "/topics/creativity/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Kenyon Cox",
      "slug": "kenyon-cox",
      "url": "/topics/kenyon-cox/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Wallace Edwards",
      "slug": "wallace-edwards",
      "url": "/topics/wallace-edwards/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "Inside Mixed Beasts, you’ll find a collection of fictional beasts discovered by Zoologist and Professor Julius Duckworth O’Hare Esq. Each odd beast is a combination of two animals or two “things.” For example, there…",
    "image": "https://vegbooks.org/media/2011/01/1769-cv-hr.jpg"
  },
  "previous": {
    "title": "Of Thee I Sing",
    "url": "/reviews/of-thee-i-sing/"
  },
  "next": {
    "title": "Madeline and the Bad Hat",
    "url": "/reviews/madeline-and-the-bad-hat/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/1769-cv-hr.jpg"}><img src={"/media/2011/01/1769-cv-hr.jpg"} alt={"Mixed Beasts"} width={210} height={280} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1553377966"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Inside "}<em><a href={"http://www.amazon.com/gp/product/1553377966?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1553377966"} target="_blank" rel="noopener noreferrer">{"Mixed Beasts"}</a></em>{", you’ll find a collection of fictional beasts discovered by Zoologist and Professor Julius Duckworth O’Hare Esq. Each odd beast is a combination of two animals or two “things.” For example, there is a rhinocerostrich, a kangarooster, and a flamingocart."}</p>
      <p>{"The book is set up as a field guide (a fancy one at that!)—each page features a new beast, with a short poem describing the beast and a beautiful illustration of him in his natural habitat. If you look closely, you’ll discover more mixed beasts on each page who are all named in the appendix. Some of these beasts are also a play on words using the real name of an animal, such as the bullfrog—a frog with bull features—and the armyant, an ant dressed as a soldier. Kids will have fun finding them on each page and naming them. A couple of neat ones that I discovered were the manateapot (a manatee shaped as a teapot) and fowlball (a fowl with a baseball for a body)."}</p>
      <p>{"This book is perfect for encouraging kids to think creatively and outside the box. It’s engaging and unique. It would be especially great for teachers of all kinds—elementary, art, library, English, etc. They can can create lessons around the book encouraging kids to come up with their own mixed beasts. The ideas are endless!"}</p>
      <p>{"Ages 3-10."}</p>
    </div>
  );
}
