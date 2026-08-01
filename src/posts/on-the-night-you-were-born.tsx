import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4551",
  "slug": "on-the-night-you-were-born",
  "url": "/reviews/on-the-night-you-were-born/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/19/on-the-night-you-were-born/",
  "title": "On the Night You Were Born",
  "publishedAt": "2011-03-19",
  "publishedLabel": "March 19th, 2011",
  "excerpt": "On the Night You Were Born is a very sweet book, perfect for bedtime. This book shows kids just how special they really are. The book is based around a child’s birth. Kids will learn that on the night they were born,…",
  "image": {
    "src": "/media/2011/04/9780312346065.jpg",
    "alt": "On the Night You Were Born",
    "width": 210,
    "height": 208
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
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Nancy Tillman",
      "slug": "nancy-tillman",
      "url": "/topics/nancy-tillman/"
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
      "name": "Zoos",
      "slug": "zoos",
      "url": "/topics/zoos/"
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
    "description": "On the Night You Were Born is a very sweet book, perfect for bedtime. This book shows kids just how special they really are. The book is based around a child’s birth. Kids will learn that on the night they were born,…",
    "image": "https://vegbooks.org/media/2011/04/9780312346065.jpg"
  },
  "previous": {
    "title": "Looking for Easter",
    "url": "/reviews/looking-for-easter/"
  },
  "next": {
    "title": "Dogs Have the Strangest Friends & Other True Stories of Animal Feelings",
    "url": "/reviews/dogs-have-the-strangest-friends-other-true-stories-of-animal-feelings/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/9780312346065.jpg"}><img src={"/media/2011/04/9780312346065.jpg"} alt={"On the Night You Were Born"} width={210} height={208} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0312346069"} alt={""} width={1} height={1} />
      </figure>
      <p><em><a href={"http://www.amazon.com/gp/product/0312346069/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0312346069"}>{"On the Night You Were Born"}</a></em>{" is a very sweet book, perfect for bedtime. This book shows kids just how special they really are."}</p>
      <p>{"The book is based around a child’s birth. Kids will learn that on the night they were born, the world took notice. The moon smiled (and stayed up until the next morning), the stars peeked into the window, and heaven blew trumpets and horns. The universe announced their arrival; the wind and the rain whispered their name across the land, through the trees, and over the ocean. The geese flew home, and polar bears danced. It was a very special day!"}</p>
      <p>{"This book is a great reminder to kids that they are loved and are one-of-a-kind. They should celebrate themselves. Its message helps reinforce positive self-esteem and confidence—very important qualities for kids to possess."}</p>
      <p>{"The only non animal-friendly issue in this book was the reference to polar bears asleep in zoos because they were up dancing all night. Of course, we all know the reality: Polar bears in zoos live unnatural, sad, and lonely lives."}</p>
      <p>{"The subtle rhymes and soft images of animals and nature on each page make this story very calming and comforting."}</p>
      <p>{"Overall, a beautifully written story—with beautiful illustrations to match—that young kids will enjoy."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
