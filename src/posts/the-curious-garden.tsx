import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1798",
  "slug": "the-curious-garden",
  "url": "/reviews/the-curious-garden/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/24/the-curious-garden/",
  "title": "The Curious Garden",
  "publishedAt": "2010-05-24",
  "publishedLabel": "May 24th, 2010",
  "excerpt": "Liam, a curious young urbanite, looks at the drab, grey concrete bleakness around him and wonders if it could be different. While he’s out exploring, a few neglected pieces of greenery peeking out from an abandoned…",
  "image": {
    "src": "/media/2010/06/9780316015479.jpg",
    "alt": "The Curious Garden",
    "width": 217,
    "height": 279
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
      "name": "Children's Choice Book Awards",
      "slug": "childrens-choice-book-awards",
      "url": "/topics/childrens-choice-book-awards/"
    },
    {
      "name": "E.B. White Read Aloud Award Winner",
      "slug": "e-b-white-read-aloud-award-winner",
      "url": "/topics/e-b-white-read-aloud-award-winner/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "New York City",
      "slug": "new-york-city",
      "url": "/topics/new-york-city/"
    },
    {
      "name": "Peter Brown",
      "slug": "peter-brown",
      "url": "/topics/peter-brown/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Urban Wildlife",
      "slug": "urban-wildlife",
      "url": "/topics/urban-wildlife/"
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
    "description": "Liam, a curious young urbanite, looks at the drab, grey concrete bleakness around him and wonders if it could be different. While he’s out exploring, a few neglected pieces of greenery peeking out from an abandoned…",
    "image": "https://vegbooks.org/media/2010/06/9780316015479.jpg"
  },
  "previous": {
    "title": "Pete and Pickles",
    "url": "/reviews/pete-and-pickles/"
  },
  "next": {
    "title": "Just a Dream",
    "url": "/reviews/just-a-dream/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/9780316015479.jpg"}><img src={"/media/2010/06/9780316015479.jpg"} alt={"The Curious Garden"} width={217} height={279} /></a>
      </figure>
      <p>{"Liam, a curious young urbanite, looks at the drab, grey concrete bleakness around him and wonders if it could be different. While he’s out exploring, a few neglected pieces of greenery peeking out from an abandoned track bed assure him that it can be. And the tale of "}<a href={"http://www.peterbrownstudio.com/"} target="_blank" rel="noopener noreferrer">{"Peter Brown’s"}</a>{" "}<em><a href={"http://www.powells.com/biblio/1-9780316015479-0"} target="_blank" rel="noopener noreferrer">{"The Curious Garden"}</a></em>{" is off and running."}</p>
      <p>{"Throughout the growing season, Liam educates himself about gardening and attends to the scraggly plants that quickly become a cohesive garden. Under his care, the garden thrives and spreads down the tracks, taking on a life of its own. When snowy winter comes, Liam spends it preparing for spring. His planning pays off during the next growing season and the greenery continues to spread throughout the city. This good work inspires others and new gardeners spring into action, joining Liam in the joy of urban gardening. Mr. Brown’s illustrations are a perfect balance of hauntingly honest (pre-garden), humorous (an ill-disguised Liam attempting to clandestinely dump a wheelbarrow of sod and flowers onto a sidewalk is one of my favorites) and brightly cheerful (fantastical shrubs and flowers). The book ends many years later with the adult Liam and his young family enjoying gardening together on the same raised tracks."}</p>
      <p>{"An author’s note at the end discusses Manhattan’s "}<a href={"http://www.thehighline.org/"} target="_blank" rel="noopener noreferrer">{"High Line"}</a>{", the inspiration for the story."}</p>
      <p>{"This is a lovely book to share with city, suburban and country kids alike from ages 4 and up. It might be a nice springboard for discussion around some larger issues having to do with greening urban areas, rails-to-trails and other trackbed conversions and the power of one person to inspire many other to create positive change."}</p>
      <p>{"p.s. – Peter Brown won "}<a href={"http://www.cbcbooks.org/news/22"} target="_blank" rel="noopener noreferrer">{"Illustrator of the Year"}</a>{" at the Children’s Choice Book Awards earlier this month for this beautiful book."}</p>
    </div>
  );
}
