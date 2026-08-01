import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2682",
  "slug": "munchie-madness",
  "url": "/reviews/munchie-madness/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/21/munchie-madness/",
  "title": "Munchie Madness",
  "publishedAt": "2010-07-21",
  "publishedLabel": "July 21st, 2010",
  "excerpt": "Being a big fan of getting kids interested in cooking, I was excited to come across a vegetarian cookbook that is aimed at teens. Munchie Madness: Vegetarian Meals for Teens is a cookbook that goes right to the heart…",
  "image": {
    "src": "/media/2010/07/munchie.jpg",
    "alt": "Munchie Madness",
    "width": 213,
    "height": 320
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
      "name": "Bobbie Hinman",
      "slug": "bobbie-hinman",
      "url": "/topics/bobbie-hinman/"
    },
    {
      "name": "Cookbooks for Kids",
      "slug": "cookbooks-for-kids",
      "url": "/topics/cookbooks-for-kids/"
    },
    {
      "name": "Cooking",
      "slug": "cooking",
      "url": "/topics/cooking/"
    },
    {
      "name": "Dorothy R. Bates",
      "slug": "dorothy-r-bates",
      "url": "/topics/dorothy-r-bates/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Robert Oser",
      "slug": "robert-oser",
      "url": "/topics/robert-oser/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegetarian Cookbooks",
      "slug": "vegetarian-cookbooks",
      "url": "/topics/vegetarian-cookbooks/"
    },
    {
      "name": "Vegetarian Cooking",
      "slug": "vegetarian-cooking",
      "url": "/topics/vegetarian-cooking/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "Being a big fan of getting kids interested in cooking, I was excited to come across a vegetarian cookbook that is aimed at teens. Munchie Madness: Vegetarian Meals for Teens is a cookbook that goes right to the heart…",
    "image": "https://vegbooks.org/media/2010/07/munchie.jpg"
  },
  "previous": {
    "title": "Happy Feet (2007)",
    "url": "/reviews/happy-feet/"
  },
  "next": {
    "title": "10 Little Rubber Ducks",
    "url": "/reviews/10-little-rubber-ducks/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/munchie.jpg"}><img src={"/media/2010/07/munchie.jpg"} alt={"Munchie Madness"} width={213} height={320} /></a>
      </figure>
      <p>{"Being a big fan of getting kids interested in cooking, I was excited to come across a vegetarian cookbook that is aimed at teens. "}<em><a href={"http://www.vegfamily.com/book-reviews/munchie-madness.htm"} target="_blank" rel="noopener noreferrer">{"Munchie Madness: Vegetarian Meals for Teens"}</a></em>{" is a cookbook that goes right to the heart of most teenagers, giving them information on how to make many of their favorites – everything from pizzas and smoothies to burgers, tasty treats and desserts!"}</p>
      <p>{"Refreshingly, this book opens by providing information about the conditions that most animals endure in the meat and dairy industry. It then progresses from providing information about cruelty to animals to offering a bevy of nutritional tips for the vegetarian teen. Finally, it offers quick lunch ideas and a host of recipes for foods that most teens would adore, including French fries, chili dogs, and even falafel."}</p>
      <p>{"While the broader term “vegetarian” is depicted in the title, all 120 quick recipes appeared to be vegan and are easy enough for teens to follow. If you have a teen vegetarian or know one, this is an ideal book to help them start learning how to prepare their own tasty, healthy, vegan meals!"}</p>
    </div>
  );
}
