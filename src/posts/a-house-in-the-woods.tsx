import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8641",
  "slug": "a-house-in-the-woods",
  "url": "/reviews/a-house-in-the-woods/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/03/11/a-house-in-the-woods/",
  "title": "A House in the Woods",
  "publishedAt": "2013-03-11",
  "publishedLabel": "March 11th, 2013",
  "excerpt": "In A House in the Woods, friendly neighbors living together in the forest include pigs, a moose and a bear. They shuffle residences and share fun adventures but the living situation seems amiss. Moose has a…",
  "image": {
    "src": "/media/2013/03/9780763652777.jpg",
    "alt": "A House in the Woods",
    "width": 210,
    "height": 243
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
      "name": "Co-Housing",
      "slug": "co-housing",
      "url": "/topics/co-housing/"
    },
    {
      "name": "Cooperation",
      "slug": "cooperation",
      "url": "/topics/cooperation/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Inga Moore",
      "slug": "inga-moore",
      "url": "/topics/inga-moore/"
    },
    {
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sharing",
      "slug": "sharing",
      "url": "/topics/sharing/"
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
    "description": "In A House in the Woods, friendly neighbors living together in the forest include pigs, a moose and a bear. They shuffle residences and share fun adventures but the living situation seems amiss. Moose has a…",
    "image": "https://vegbooks.org/media/2013/03/9780763652777.jpg"
  },
  "previous": {
    "title": "Animal Playground: Playful Tracks from Around the World",
    "url": "/reviews/animal-playground-playful-tracks-from-around-the-world/"
  },
  "next": {
    "title": "Here Come the Humpbacks!",
    "url": "/reviews/here-come-the-humpbacks/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/03/9780763652777.jpg"}><img src={"/media/2013/03/9780763652777.jpg"} alt={"A House in the Woods"} width={210} height={243} /></a>
      </figure>
      <p>{"In "}<em>{"A House in the Woods"}</em>{", friendly neighbors living together in the forest include pigs, a moose and a bear. They shuffle residences and share fun adventures but the living situation seems amiss. Moose has a well-received idea: why not build a house where all could live together? Realizing that this is a task beyond their capabilities, they call their friends the Beaver Builders to assist them (the beavers insist on being paid in peanut-butter sandwiches)."}</p>
      <p>{"Working together, all of the animals focus on building and furnishing their new home. The story makes a strong case for co-housing, between collaborative shopping for the peanut butter and bread to pay the beavers and assembling the sandwiches together to having some residents clean the kitchen after dinner while others head to bed."}</p>
      <p>{"This book is a cute story of friends illustrates the joy of amicable collaboration and the simple pleasures found in enjoying each other’s company."}</p>
      <p><em>{"The "}<a href={"http://www.candlewick.com/"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{" provided a review copy of this book."}</em></p>
    </div>
  );
}
