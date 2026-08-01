import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10038",
  "slug": "beautiful-moon-a-childs-prayer",
  "url": "/reviews/beautiful-moon-a-childs-prayer/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/02/04/beautiful-moon-a-childs-prayer/",
  "title": "Beautiful Moon: A Child’s Prayer",
  "publishedAt": "2015-02-04",
  "publishedLabel": "February 4th, 2015",
  "excerpt": "This lovely book is more about empathy than religion. A boy awakens in the middle of the night to realize he forgot to say his prayers. He kneels and prays for people without homes, for an end to war, for the sick to…",
  "image": {
    "src": "/media/2015/02/9781419707926.jpg",
    "alt": "9781419707926",
    "width": 464,
    "height": 607
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
      "name": "Empathy",
      "slug": "empathy",
      "url": "/topics/empathy/"
    },
    {
      "name": "Eric Velasquez",
      "slug": "eric-velasquez",
      "url": "/topics/eric-velasquez/"
    },
    {
      "name": "Homelessness",
      "slug": "homelessness",
      "url": "/topics/homelessness/"
    },
    {
      "name": "Hunger",
      "slug": "hunger",
      "url": "/topics/hunger/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Prayer",
      "slug": "prayer",
      "url": "/topics/prayer/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Tonya Bolden",
      "slug": "tonya-bolden",
      "url": "/topics/tonya-bolden/"
    },
    {
      "name": "War",
      "slug": "war",
      "url": "/topics/war/"
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
    "description": "This lovely book is more about empathy than religion. A boy awakens in the middle of the night to realize he forgot to say his prayers. He kneels and prays for people without homes, for an end to war, for the sick to…",
    "image": "https://vegbooks.org/media/2015/02/9781419707926.jpg"
  },
  "previous": {
    "title": "Three Little Beavers",
    "url": "/reviews/three-beavers/"
  },
  "next": {
    "title": "Vegetables in Underwear",
    "url": "/reviews/vegetables-in-underwear/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"This lovely book is more about empathy than religion. A boy awakens in the middle of the night to realize he forgot to say his prayers. He kneels and prays for people without homes, for an end to war, for the sick to be healed, and for the hungry to be fed. In turn, the book turns to people in each of those circumstances, showing that they all live under the same beautiful moon."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/02/9781419707926.jpg"} alt={"9781419707926"} width={464} height={607} />
      </figure>
      <p>{"Vegetarian and vegan families will find much to like in this simple, beautifully illustrated picture book. I found the boy’s prayers resonated deeply with me and made me ask myself whether I am doing enough in my life to bring peace and justice to the world. In this way, the boy’s prayers are my own."}</p>
      <p>{"The book touches briefly on two animal themes. In one image, a couple is looking at bare cupboards,"}</p>
      <blockquote>
        <p>{"longing to see them stocked"}<br />{" with"}<br />{" rice and beans,"}<br />{" noodles and peas,"}<br />{" chicken soup and cereal."}</p>
      </blockquote>
      <p>{"And at the end, the boy prays for his loved ones, which include his grandmother, mother, father, sister, teacher, and “Mikey, his turtle.”"}</p>
      <p>{"This book, received as a review copy from "}<a href={"http://www.abramsbooks.com/appleseed.html"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{", is for children ages 3 to 7."}</p>
      <p><em>{"Tell us in the comments: what techniques do you use to cultivate empathy in the children in your life?"}</em></p>
    </div>
  );
}
