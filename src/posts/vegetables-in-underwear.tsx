import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10041",
  "slug": "vegetables-in-underwear",
  "url": "/reviews/vegetables-in-underwear/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/02/06/vegetables-in-underwear/",
  "title": "Vegetables in Underwear",
  "publishedAt": "2015-02-06",
  "publishedLabel": "February 6th, 2015",
  "excerpt": "I love this book. It all starts with the title, I think. I love the whimsy and humor of picturing vegetables in underwear. This may be the case where you really can judge a book by its cover. If you’re not giggling…",
  "image": {
    "src": "/media/2015/02/veggiein-underwear-cvr.jpg",
    "alt": "VeggieinUnderwear_CVR",
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
      "name": "Jared Chapman",
      "slug": "jared-chapman",
      "url": "/topics/jared-chapman/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Potty Training",
      "slug": "potty-training",
      "url": "/topics/potty-training/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Underwear",
      "slug": "underwear",
      "url": "/topics/underwear/"
    },
    {
      "name": "Vegetable Books",
      "slug": "vegetable-books",
      "url": "/topics/vegetable-books/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
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
    "description": "I love this book. It all starts with the title, I think. I love the whimsy and humor of picturing vegetables in underwear. This may be the case where you really can judge a book by its cover. If you’re not giggling…",
    "image": "https://vegbooks.org/media/2015/02/veggiein-underwear-cvr.jpg"
  },
  "previous": {
    "title": "Beautiful Moon: A Child’s Prayer",
    "url": "/reviews/beautiful-moon-a-childs-prayer/"
  },
  "next": {
    "title": "Martin & Mahalia: His Words, Her Song",
    "url": "/reviews/martin-mahalia-his-words-her-song/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/02/veggiein-underwear-cvr.jpg"} alt={"VeggieinUnderwear_CVR"} width={210} height={210} />
      </figure>
      <p>{"I love this book. It all starts with the title, I think. I love the whimsy and humor of picturing vegetables in underwear. This may be the case where you really can judge a book by its cover. If you’re not giggling when you read the title and see broccoli in red briefs, this probably isn’t the book for you. Everyone else, read on!"}</p>
      <p>{"Using simple language and bright, eye-catching illustrations, this book’s got a straightforward theme:"}</p>
      <blockquote>
        <p>{"I wear underwear."}<br />{" You wear underwear."}<br />{" We all wear underwear!"}</p>
      </blockquote>
      <p>{"Don’t call them underwear? No worries, the book helpfully supplies a bunch of synonyms: Drawers! Undies! Briefs! Underpants! Each is shown on a vegetable of a different size and shape: pea, carrot, celery, corn."}</p>
      <p>{"For a child transitioning from diapers to underwear, this book provides encouragement in a very upbeat, humorous, silly way. But kids who already have the potty mastered may also enjoy this book, as it highlights a bunch of awesome vegetables. In addition to the aforementioned classic veggies, this book also depicts onion, eggplant, radish, mushroom, squash, turnip, potato, and a variety of baby veggies."}</p>
      <p>{"My only hesitation in recommending this book is that it’s a classic picture book with paper pages, which may be too delicate for some early-adopters of undies."}</p>
      <p>{"Ages 2-5."}</p>
      <p><em>{"I received a copy of this book from "}<a href={"http://www.abramsbooks.com/appleseed.html"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{"."}</em></p>
    </div>
  );
}
