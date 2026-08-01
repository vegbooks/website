import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1996",
  "slug": "duck-soup",
  "url": "/reviews/duck-soup/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/14/duck-soup/",
  "title": "Duck Soup",
  "publishedAt": "2010-06-14",
  "publishedLabel": "June 14th, 2010",
  "excerpt": "In Duck Soup by Jackie Urbanovic, all of Max’s friends believe he must have fallen into a pot of soup he was preparing. Frantic to get their friend out of the pot of soup, they strain it and search for him in all of…",
  "image": {
    "src": "/media/2010/06/duck-soup-hc-c.jpg",
    "alt": "Duck Soup",
    "width": 222,
    "height": 212
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
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
    },
    {
      "name": "Consumption of Animals",
      "slug": "consumption-of-animals",
      "url": "/topics/consumption-of-animals/"
    },
    {
      "name": "Ducks",
      "slug": "ducks",
      "url": "/topics/ducks/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jackie Urbanovic",
      "slug": "jackie-urbanovic",
      "url": "/topics/jackie-urbanovic/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "In Duck Soup by Jackie Urbanovic, all of Max’s friends believe he must have fallen into a pot of soup he was preparing. Frantic to get their friend out of the pot of soup, they strain it and search for him in all of…",
    "image": "https://vegbooks.org/media/2010/06/duck-soup-hc-c.jpg"
  },
  "previous": {
    "title": "Wild Animals in Captivity",
    "url": "/reviews/animals-in-captivity/"
  },
  "next": {
    "title": "The Three Little Pigs: An Architectural Tale",
    "url": "/reviews/the-three-little-pigs-an-architectural-tale/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/duck-soup-hc-c.jpg"}><img src={"/media/2010/06/duck-soup-hc-c.jpg"} alt={"Duck Soup"} width={222} height={212} /></a>
      </figure>
      <p>{"In "}<em>{"Duck Soup"}</em>{" by "}<a href={"http://www.jackieurbanovic.com/"} target="_blank" rel="noopener noreferrer">{"Jackie Urbanovic"}</a>{", all of Max’s friends believe he must have fallen into a pot of soup he was preparing. Frantic to get their friend out of the pot of soup, they strain it and search for him in all of the vegetables they come across, questioning whether they might be body parts."}</p>
      <p>{"Meanwhile, Max (who is a duck) has actually slipped outside into the herb garden to gather chives, which he feels is the missing ingredient in his soup. When Max comes back in, much to the surprise of his friends, he finds that they have pretty much dumped his entire pot of soup down the drain in an effort to save him."}</p>
      <p><a href={"http://www.goodreads.com/book/show/2619209.Duck_Soup"} target="_blank" rel="noopener noreferrer">{"This is a cute story about helping friends"}</a>{", and conceivably saving a duck from being eaten, at the same time. In the end, the soup is lost, but the friends all gather to dine on pizza, salad, etc. Vegetarian parents may care to know that other non-vegetarian soups are mentioned as ones that Max had made in the past, and that, in the end, the pizza is topped with fish."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
