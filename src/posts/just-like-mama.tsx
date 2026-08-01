import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1760",
  "slug": "just-like-mama",
  "url": "/reviews/just-like-mama/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/08/just-like-mama/",
  "title": "Just Like Mama",
  "publishedAt": "2010-05-08",
  "publishedLabel": "May 8th, 2010",
  "excerpt": "Lesléa Newman, author of Hachiko Waits, wrote a lovely book entitled Just Like Mamathat hit bookstores last month. She collaborates with illustrator Julia Gorton on a tribute to motherhood, which is narrated by a…",
  "image": {
    "src": "/media/2010/05/just-like-mama.jpg",
    "alt": "Just Like Mama",
    "width": 240,
    "height": 240
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
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Julia Gorton",
      "slug": "julia-gorton",
      "url": "/topics/julia-gorton/"
    },
    {
      "name": "Lesléa Newman",
      "slug": "leslea-newman",
      "url": "/topics/leslea-newman/"
    },
    {
      "name": "Mothers",
      "slug": "mothers",
      "url": "/topics/mothers/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "Lesléa Newman, author of Hachiko Waits, wrote a lovely book entitled Just Like Mamathat hit bookstores last month. She collaborates with illustrator Julia Gorton on a tribute to motherhood, which is narrated by a…",
    "image": "https://vegbooks.org/media/2010/05/just-like-mama.jpg"
  },
  "previous": {
    "title": "Rainbows in the River",
    "url": "/reviews/rainbows-in-the-river/"
  },
  "next": {
    "title": "Duck on a Bike",
    "url": "/reviews/duck-on-a-bike/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/just-like-mama.jpg"}><img src={"/media/2010/05/just-like-mama.jpg"} alt={"Just Like Mama"} width={240} height={240} /></a>
      </figure>
      <p><a href={"http://www.lesleanewman.com/biography.htm"} target="_blank" rel="noopener noreferrer">{"Lesléa Newman"}</a>{", author of "}<em><a href={"/reviews/hachiko-waits/"}>{"Hachiko Waits"}</a></em>{", wrote a lovely book entitled "}<em>{"Just Like Mama"}</em>{"that hit bookstores last month. She collaborates with illustrator Julia Gorton on a tribute to motherhood, which is narrated by a little girl one summer day."}</p>
      <p>{"My daughter, who is just beginning to read, loves the use of repetition in the book. I will read “Half a dozen dangling braids all hanging in a row,/ then each one tied up tightly with a brightly colored bow./ Nobody combs my hair …” and she will complete the line, “just like Mama.”"}</p>
      <p>{"Vegetarian parents will appreciate that while food has a special place in this book, the meals are ones that might be served in your house: apple pancakes and cocoa for breakfast, peanut butter sandwiches with apples for lunch, and spaghetti for dinner. While there are depictions of whipped cream and milk, they could easily be "}<a href={"http://www.soyatoo.com/"} target="_blank" rel="noopener noreferrer">{"soy"}</a>{"."}</p>
      <p>{"I also like that the mother and daughter spend time together outdoors gardening and finding frogs. Some families concerned about animal rights, however, may not enjoy the part of the book where the pair plays dress-up and Mama pretends to be a “lion tamer” teaching her daughter to roar."}</p>
      <p>{"Ages 4 to 7."}</p>
    </div>
  );
}
