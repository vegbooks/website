import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2640",
  "slug": "fantastic-mr-fox",
  "url": "/reviews/fantastic-mr-fox/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/14/fantastic-mr-fox/",
  "title": "Fantastic Mr. Fox",
  "publishedAt": "2010-07-14",
  "publishedLabel": "July 14th, 2010",
  "excerpt": "When mean, crusty farmers become fed up with Mr. Fox’s pilfering of their poultry, they decide to eradicate Mr. Fox and his family. They declare a full-on war against Mr. Fox and declare their intentions to stop at…",
  "image": {
    "src": "/media/2010/07/fantastic-mr-fox.jpg",
    "alt": "Fantastic Mr. Fox",
    "width": 204,
    "height": 300
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
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Farming",
      "slug": "farming",
      "url": "/topics/farming/"
    },
    {
      "name": "Foxes",
      "slug": "foxes",
      "url": "/topics/foxes/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Roald Dahl",
      "slug": "roald-dahl",
      "url": "/topics/roald-dahl/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "When mean, crusty farmers become fed up with Mr. Fox’s pilfering of their poultry, they decide to eradicate Mr. Fox and his family. They declare a full-on war against Mr. Fox and declare their intentions to stop at…",
    "image": "https://vegbooks.org/media/2010/07/fantastic-mr-fox.jpg"
  },
  "previous": {
    "title": "The Puppy Who Wanted a Boy",
    "url": "/reviews/the-puppy-who-wanted-a-boy/"
  },
  "next": {
    "title": "She’s Wearing a Dead Bird on Her Head!",
    "url": "/reviews/shes-wearing-a-dead-bird-on-her-head/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/fantastic-mr-fox.jpg"}><img src={"/media/2010/07/fantastic-mr-fox.jpg"} alt={"Fantastic Mr. Fox"} width={204} height={300} /></a>
      </figure>
      <p>{"When mean, crusty farmers become fed up with Mr. Fox’s pilfering of their poultry, they decide to eradicate Mr. Fox and his family. They declare a full-on war against Mr. Fox and declare their intentions to stop at nothing to achieve their goal of annihilating the Fox family. This includes stakeouts with guns and vivid depictions of construction machinery ruthlessly gorging the ground in an attempt to rout out the foxes."}</p>
      <p>{"It is soon apparent that the farmers’ wrath doesn’t only impact the foxes– other woodland creatures are caught in the fray. With the titular character described as fantastic, you know that a resolution will manifest, and charismatic Mr. Fox does not disappoint. He creates a carnivorous feast for the hungry and upset animals caught in the fallout, with some carrots for the rabbits thrown in as well. The question of why rabbits are dining with so many hungry carnivores remains a fairly open one."}</p>
      <p>{"Mr. Fox is affable, and many non-veg children and families have no hesitation aligning themselves with this witty father. He does, however, steal and eat an awful lot of birds for his family, making the story line a much tougher sell for veg families. The life of the farmed birds is, as in our current cultural structure, not given much weight."}</p>
      <p>{"Parents will also want to note that "}<a href={"http://www.commonsensemedia.org/book-reviews/Fantastic-Mr-Fox.html"} target="_blank" rel="noopener noreferrer">{"there is a lot of violence"}</a>{", extreme disrespect for other living beings and the earth, discussion of drinking and starvation, and some less than ideal role modeling. To my way of thinking, if this book is being read by a young veg family member, it is worth the time for an adult to go over some of the themes and discuss the young readers’ reactions with them."}</p>
      <p>{"This book is for older kids, ages 8 and up."}</p>
    </div>
  );
}
