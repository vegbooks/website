import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1312",
  "slug": "im-a-vegetarian",
  "url": "/reviews/im-a-vegetarian/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/14/im-a-vegetarian/",
  "title": "I’m a Vegetarian",
  "publishedAt": "2010-04-14",
  "publishedLabel": "April 14th, 2010",
  "excerpt": "Not many books about vegetarianism are aimed specifically at the younger crowd. But I’m a Vegetarian: Amazing Facts and Ideas for Healthy Vegetarians by Ellen Schwartz does just that, being a book about vegetarianism…",
  "image": {
    "src": "/media/2010/04/i-am-a-vegetarian.jpg",
    "alt": "I’m a Vegetarian",
    "width": 210,
    "height": 272
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
      "name": "Books for Vegetarian Kids",
      "slug": "books-for-vegetarian-kids",
      "url": "/topics/books-for-vegetarian-kids/"
    },
    {
      "name": "Ellen Schwartz",
      "slug": "ellen-schwartz",
      "url": "/topics/ellen-schwartz/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Recipes",
      "slug": "recipes",
      "url": "/topics/recipes/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
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
    "description": "Not many books about vegetarianism are aimed specifically at the younger crowd. But I’m a Vegetarian: Amazing Facts and Ideas for Healthy Vegetarians by Ellen Schwartz does just that, being a book about vegetarianism…",
    "image": "https://vegbooks.org/media/2010/04/i-am-a-vegetarian.jpg"
  },
  "previous": {
    "title": "Animal Watch",
    "url": "/reviews/animal-watch/"
  },
  "next": {
    "title": "Ladybug Girl",
    "url": "/reviews/ladybug-girl/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/i-am-a-vegetarian.jpg"}><img src={"/media/2010/04/i-am-a-vegetarian.jpg"} alt={"I’m a Vegetarian"} width={210} height={272} /></a>
      </figure>
      <p>{"Not many books about vegetarianism are aimed specifically at the younger crowd. But "}<em><a href={"http://www.goodreads.com/book/show/711808.I_m_a_Vegetarian_Amazing_facts_and_ideas_for_healthy_vegetarians"} target="_blank" rel="noopener noreferrer">{"I’m a Vegetarian: Amazing Facts and Ideas for Healthy Vegetarians"}</a></em>{" by Ellen Schwartz does just that, being a book about vegetarianism specifically written for those ages 9-12."}</p>
      <p>{"If you have a child in this age group, it may be a good idea to pick up a copy. Not only can it come in handy for your child, but it may be a good book to keep on the shelf for their inquisitive friends to borrow."}</p>
      <p>{"The book explains the types of vegetarians, discusses why people choose vegetarianism, offers advice on how to deal with parents who oppose vegetarianism, and provides information on healthy vegetarian eating. These pre-teens will even learn about genetically modified foods, ocean farming, and the history of lentils and "}<a href={"http://en.wikipedia.org/wiki/Quinoa"} target="_blank" rel="noopener noreferrer">{"quinoa"}</a>{"!"}</p>
      <p>{"Filled with information that supports their decision to be vegetarian, as well as tips on the ins and outs of vegetarian nutrition, this book is a helpful tool for those who are being raised vegetarian, who have chosen it for themselves, or who just want to learn more about vegetarianism."}</p>
      <p>{"The book also includes some vegetarian recipes, with tips on how to veganize them."}</p>
      <p>{"Ages 9 to 12."}</p>
    </div>
  );
}
