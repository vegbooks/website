import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2697",
  "slug": "swine-divine",
  "url": "/reviews/swine-divine/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/09/swine-divine/",
  "title": "Swine Divine",
  "publishedAt": "2010-08-09",
  "publishedLabel": "August 9th, 2010",
  "excerpt": "Animals are dressed up on a regular basis and made to appear as something they are not. It may be in a circus, a show or even a photo shoot, as in Swine Divine. In this book, Rosie is a pig who gets a bath and then…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Swine Divine",
    "width": 210,
    "height": 315
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
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Jan Carr",
      "slug": "jan-carr",
      "url": "/topics/jan-carr/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
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
    "description": "Animals are dressed up on a regular basis and made to appear as something they are not. It may be in a circus, a show or even a photo shoot, as in Swine Divine. In this book, Rosie is a pig who gets a bath and then…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Mothers Are Like That",
    "url": "/reviews/mothers-are-like-that/"
  },
  "next": {
    "title": "The Fox and the Hound (1981)",
    "url": "/reviews/the-fox-and-the-hound/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Swine Divine"} width={210} height={315} /></a>
      </figure>
      <p>{"Animals are dressed up on a regular basis and made to appear as something they are not. It may be in a circus, a show or even a photo shoot, as in "}<em><a href={"http://www.plcmc.lib.nc.us/bookhive/books/details.asp?id=272"} target="_blank" rel="noopener noreferrer">{"Swine Divine"}</a></em>{". In this book, Rosie is a pig who gets a bath and then is taken to a photographer to have some pictures taken."}</p>
      <p>{"The problem is, Rosie doesn’t like the way she is being dressed up and posed for those photos. She’s made to wear such things as a bonnet and a tutu, and is even put into a pot of fake flowers and made to balance on a ball. All the while, the photographer continues to snap shots of the pig."}</p>
      <p>{"Rosie decides she has had enough and just wants to go back to being a pig in the mud. She breaks free from the photographer, running all the way home. In the end, she is back doing what she loves to do."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
