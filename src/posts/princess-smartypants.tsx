import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2591",
  "slug": "princess-smartypants",
  "url": "/reviews/princess-smartypants/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/18/princess-smartypants/",
  "title": "Princess Smartypants",
  "publishedAt": "2010-07-18",
  "publishedLabel": "July 18th, 2010",
  "excerpt": "The love of all things princess has driven saner parents than me crazy, so when my daughter started talking about Belle, Cinderella, and the rest of the Disney clan (despite having never seen the movies), I knew I…",
  "image": {
    "src": "/media/2010/07/princess-smartypants.jpg",
    "alt": "Princess Smartypants",
    "width": 210,
    "height": 178
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
      "name": "1980s Childrens Literature",
      "slug": "1980s-childrens-literature",
      "url": "/topics/1980s-childrens-literature/"
    },
    {
      "name": "Animal Care",
      "slug": "animal-care",
      "url": "/topics/animal-care/"
    },
    {
      "name": "Babette Cole",
      "slug": "babette-cole",
      "url": "/topics/babette-cole/"
    },
    {
      "name": "Dragons",
      "slug": "dragons",
      "url": "/topics/dragons/"
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
      "name": "Feminism",
      "slug": "feminism",
      "url": "/topics/feminism/"
    },
    {
      "name": "Independence",
      "slug": "independence",
      "url": "/topics/independence/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Princess",
      "slug": "princess",
      "url": "/topics/princess/"
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
    "description": "The love of all things princess has driven saner parents than me crazy, so when my daughter started talking about Belle, Cinderella, and the rest of the Disney clan (despite having never seen the movies), I knew I…",
    "image": "https://vegbooks.org/media/2010/07/princess-smartypants.jpg"
  },
  "previous": {
    "title": "Baby Whales Drink Milk",
    "url": "/reviews/baby-whales-drink-milk/"
  },
  "next": {
    "title": "Animal Poems",
    "url": "/reviews/animal-poems/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/princess-smartypants.jpg"}><img src={"/media/2010/07/princess-smartypants.jpg"} alt={"Princess Smartypants"} width={210} height={178} /></a>
      </figure>
      <p>{"The love of all things princess has driven saner parents than me crazy, so when my daughter started talking about Belle, Cinderella, and the rest of the "}<a href={"http://thedisneyprincesses.yolasite.com/"} target="_blank" rel="noopener noreferrer">{"Disney clan"}</a>{" (despite having never seen the movies), I knew I had to do something. Happily, I stumbled across "}<em><a href={"http://www.commonsensemedia.org/book-reviews/Princess-Smartypants.html"} target="_blank" rel="noopener noreferrer">{"Princess Smartypants"}</a></em>{" by "}<a href={"http://www.babette-cole.com/"} target="_blank" rel="noopener noreferrer">{"Babette Cole"}</a>{". I knew from the cover image that this would not be typical princess lit — but little did I know that one of the main charms of Princess Smartypants, in addition to her wild motorcycle riding, is her love of animals."}</p>
      <p>{"In a twist on the princess genre, Ms. Cole’s heroine seeks not to find the perfect prince, but rather to avoid marrying at all. When her mother the Queen insists that she should “stop messing about” with her animals and find herself a husband, she sends potential suitors on quests to do all the things that come naturally her to her — among the tasks is feeding her large toothy dragons."}</p>
      <p>{"I won’t give away the ending, except to say that parents sick of so-called "}<a href={"http://www.parentsconnect.com/connect/boards/hot_topics/discussion_debate/chat_it_up_thread.jhtml?tID=93648"} target="_blank" rel="noopener noreferrer">{"princess syndrome"}</a>{", especially feminists, will love it. Aunties and teachers who prefer being a “Ms.” to a “Mrs.” should definitely consider reading this book to the girls in their lives."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
