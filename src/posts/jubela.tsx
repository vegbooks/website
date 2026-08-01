import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2835",
  "slug": "jubela",
  "url": "/reviews/jubela/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/17/jubela/",
  "title": "Jubela",
  "publishedAt": "2010-08-17",
  "publishedLabel": "August 17th, 2010",
  "excerpt": "I never could watch “Bambi” or “The Land before Time” more than once. Any baby, whether animal or human, losing his or her mother is one of the most depressing things I could ever imagine. I do, however, give much…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Jubela",
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
      "name": "Adoption",
      "slug": "adoption",
      "url": "/topics/adoption/"
    },
    {
      "name": "Africa",
      "slug": "africa",
      "url": "/topics/africa/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Cristina Kessler",
      "slug": "cristina-kessler",
      "url": "/topics/cristina-kessler/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Mothers",
      "slug": "mothers",
      "url": "/topics/mothers/"
    },
    {
      "name": "Poaching",
      "slug": "poaching",
      "url": "/topics/poaching/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rhinos",
      "slug": "rhinos",
      "url": "/topics/rhinos/"
    },
    {
      "name": "South Africa",
      "slug": "south-africa",
      "url": "/topics/south-africa/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "I never could watch “Bambi” or “The Land before Time” more than once. Any baby, whether animal or human, losing his or her mother is one of the most depressing things I could ever imagine. I do, however, give much…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Babe (1995)",
    "url": "/reviews/babe/"
  },
  "next": {
    "title": "Curious Creatures",
    "url": "/reviews/curious-creatures/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Jubela"} width={210} height={315} /></a>
      </figure>
      <p>{"I never could watch “Bambi” or “The Land before Time” more than once. Any baby, whether animal or human, losing his or her mother is one of the most depressing things I could ever imagine. I do, however, give much credit to these emotionally charged films for helping to lay and build up the foundation of my wide circle of compassion. That our animal brethren can suffer and express joy like we do is something we must teach children – in earnest – from an early age."}</p>
      <p>{"From the heartland of South Africa’s Swaziland comes this story of an infant rhino who loses his mother to poachers. Fending for himself for days without food and water, Jubela encounters the striking wildlife of his environment: “baby listened to the clicking quills of a passing porcupine,” “elephants, their long, heavy trunks sweeping the earth, brought the sunrise,” “pounding hooves woke baby. A herd of zebra…”"}</p>
      <p>{"Unlike the harsh realities much of Africa’s wildlife face, "}<a href={"http://www.cristinakessler.com/Books_6.htm"} target="_blank" rel="noopener noreferrer">{"Jubela’s tale"}</a>{" is fortuitous and poetically scripted and illustrated. At the Mkhaya Game Reserve, an old mother rhino provided the love and wisdom Jubela needed to survive. This is a stark, but tender look into the hardships of poaching and conservation, orphans and adoption."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
