import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5625",
  "slug": "mamas-saris",
  "url": "/reviews/mamas-saris/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/13/mamas-saris/",
  "title": "Mama’s Saris",
  "publishedAt": "2011-07-13",
  "publishedLabel": "July 13th, 2011",
  "excerpt": "A great introduction to Indian-American culture, this book tells the story of a mother and daughter in an Indian-American family, getting ready for the daughter’s seventh birthday. The mother, who wears a sari for…",
  "image": {
    "src": "/media/2011/07/mama-s-saris.jpg",
    "alt": "Mama’s Saris",
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
      "name": "Diwali",
      "slug": "diwali",
      "url": "/topics/diwali/"
    },
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
      "name": "Indian-American Culture",
      "slug": "indian-american-culture",
      "url": "/topics/indian-american-culture/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
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
      "name": "Saris",
      "slug": "saris",
      "url": "/topics/saris/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "A great introduction to Indian-American culture, this book tells the story of a mother and daughter in an Indian-American family, getting ready for the daughter’s seventh birthday. The mother, who wears a sari for…",
    "image": "https://vegbooks.org/media/2011/07/mama-s-saris.jpg"
  },
  "previous": {
    "title": "Bear-ly There",
    "url": "/reviews/bear-ly-there/"
  },
  "next": {
    "title": "Chicken Said Cluck",
    "url": "/reviews/chicken-said-cluck/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/mama-s-saris.jpg"}><img src={"/media/2011/07/mama-s-saris.jpg"} alt={"Mama’s Saris"} width={210} height={210} /></a>
      </figure>
      <p>{"A great introduction to Indian-American culture, "}<a href={"http://www.amazon.com/gp/product/0316011053/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0316011053"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" tells the story of a mother and daughter in an Indian-American family, getting ready for the daughter’s seventh birthday. The mother, who wears a sari for celebrations, is sorting through her big suitcase full of beautiful saris to decide which to wear. The daughter begs to wear a sari, but her mom says saris are for adults because they are too long and hard to wear. The daughter is persistent and mentions all of the ways that she is grown up now that she is seven. Finally mom says yes and drapes her daughter in a beautiful sari of her daughter’s choice. The two look in the mirror and the daughter says, “I think I look like you.”"}</p>
      <p>{"It is hard to find books that show Indian people. This book depicts an Indian family and describes typical Indian family activities, such as celebrating Diwali. My daughter is biracial, half Indian and half white. My wife, who is Indian, gave this book to our daughter for her second birthday and told her that it was a special book about the two of them. They have read it together each night since. It’s a book about a mother and daughter sharing a loving moment and it’s perfect for our family."}</p>
      <p>{"Vegetarian families should be aware that the very special saris are stored in a leather suitcase. Otherwise, I would recommend this book to anyone looking for a book showing a relationship between a mother and daughter or as an introduction to Indian-American family culture."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
