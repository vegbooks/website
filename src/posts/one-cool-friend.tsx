import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7989",
  "slug": "one-cool-friend",
  "url": "/reviews/one-cool-friend/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/07/25/one-cool-friend/",
  "title": "One Cool Friend",
  "publishedAt": "2012-07-25",
  "publishedLabel": "July 25th, 2012",
  "excerpt": "One Cool Friend by Toni Buzzeo (pictures by David Small) explores the quirky interests of a father and son in an accepting and playful way. Elliot is a little man with manners. Dressed in a tux, Elliot cannot be…",
  "image": {
    "src": "/media/2012/07/9780803734135-medium-one-cool-friend.jpg",
    "alt": "One Cool Friend",
    "width": 210,
    "height": 163
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
      "name": "Activities",
      "slug": "activities",
      "url": "/topics/activities/"
    },
    {
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Aquariums",
      "slug": "aquariums",
      "url": "/topics/aquariums/"
    },
    {
      "name": "Communication",
      "slug": "communication",
      "url": "/topics/communication/"
    },
    {
      "name": "David Small",
      "slug": "david-small",
      "url": "/topics/david-small/"
    },
    {
      "name": "Differences",
      "slug": "differences",
      "url": "/topics/differences/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fathers",
      "slug": "fathers",
      "url": "/topics/fathers/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Parenting",
      "slug": "parenting",
      "url": "/topics/parenting/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Penguins",
      "slug": "penguins",
      "url": "/topics/penguins/"
    },
    {
      "name": "Toni Buzzeo",
      "slug": "toni-buzzeo",
      "url": "/topics/toni-buzzeo/"
    },
    {
      "name": "Wild Animals in Captivity",
      "slug": "wild-animals-in-captivity",
      "url": "/topics/wild-animals-in-captivity/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "One Cool Friend by Toni Buzzeo (pictures by David Small) explores the quirky interests of a father and son in an accepting and playful way. Elliot is a little man with manners. Dressed in a tux, Elliot cannot be…",
    "image": "https://vegbooks.org/media/2012/07/9780803734135-medium-one-cool-friend.jpg"
  },
  "previous": {
    "title": "Harmony on the Farm",
    "url": "/reviews/harmony-on-the-farm/"
  },
  "next": {
    "title": "Hippopposites",
    "url": "/reviews/hippopposites/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/07/9780803734135-medium-one-cool-friend.jpg"}><img src={"/media/2012/07/9780803734135-medium-one-cool-friend.jpg"} alt={"One Cool Friend"} width={210} height={163} /></a>
      </figure>
      <p><em>{"One Cool Friend"}</em>{" by Toni Buzzeo (pictures by David Small) explores the quirky interests of a father and son in an accepting and playful way."}</p>
      <p>{"Elliot is a little man with manners. Dressed in a tux, Elliot cannot be bothered with childhood fun. When his father asks him to go to the aquarium one afternoon, Elliot obliges but you sense it is not his cup of tea. At the aquarium, he searches for a place free of mobs of kids only, much to his delight to find, penguins. He identifies with the penguins because they are dressed like he, in black and white. Later when his father asks if he is having fun, Elliot responds, “Can, I have some money to buy a penguin?” Elliot’s father sees a sign in the gift store window "}<em>{"Today’s Special Plush Penguins $19.95"}</em>{" and hands him a twenty dollar bill. Little does his father know that Elliot went to the penguin pond and placed a real live penguin in his backpack. Father and son may live in the same house but clearly they are miles apart. This is evident by the fact that Elliot’s father thought he would be satisfied with a mere toy Penguin."}</p>
      <p>{"When Elliot and his father return home, they realize that they are not all that different. Elliot goes to great lengths to hide the penguin from his father, a seemingly eccentric man fascinated by maps of the Great Reef Barrier, the Galapagos Island and turtles. Only for his father to discover a live penguin in his bathtub and Elliot to realize that Captain Cook is not a story book character but his father’s pet turtle!"}</p>
      <p>{"The book demonstrates miscommunications between parents and children and at the same time embraces uniqueness of both the father and son. I feel this is a great book to teach children about individuality and acceptances of differences."}</p>
      <p>{"Ages 5 and up. For a curriculum guide and activity kit to accompany the book, visit the "}<a href={"http://www.tonibuzzeo.com/booksonecoolfriend.html"} target="_blank" rel="noopener noreferrer">{"author’s website"}</a>{"."}</p>
    </div>
  );
}
