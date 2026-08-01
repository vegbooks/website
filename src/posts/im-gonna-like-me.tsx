import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2977",
  "slug": "im-gonna-like-me",
  "url": "/reviews/im-gonna-like-me/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/26/im-gonna-like-me/",
  "title": "I’m Gonna Like Me",
  "publishedAt": "2010-08-26",
  "publishedLabel": "August 26th, 2010",
  "excerpt": "In this day and age, kids can use all the positive reinforcement they can get in feeling good about themselves. Other children and society at large can be rather cruel, even to the youngest of minds, pointing out…",
  "image": {
    "src": "/media/2010/08/m-gonna-like-me.jpg",
    "alt": "I’m Gonna Like Me",
    "width": 210,
    "height": 176
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Confidence",
      "slug": "confidence",
      "url": "/topics/confidence/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jamie Lee Curtis",
      "slug": "jamie-lee-curtis",
      "url": "/topics/jamie-lee-curtis/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Self Esteem",
      "slug": "self-esteem",
      "url": "/topics/self-esteem/"
    },
    {
      "name": "Soymilk",
      "slug": "soymilk",
      "url": "/topics/soymilk/"
    },
    {
      "name": "Tofu",
      "slug": "tofu",
      "url": "/topics/tofu/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "In this day and age, kids can use all the positive reinforcement they can get in feeling good about themselves. Other children and society at large can be rather cruel, even to the youngest of minds, pointing out…",
    "image": "https://vegbooks.org/media/2010/08/m-gonna-like-me.jpg"
  },
  "previous": {
    "title": "Garlic- Onion- Beet- Spinach- Mango- Carrot- Grapefruit Juice",
    "url": "/reviews/garlic-onion-beet-spinach-mango-carrot-grapefruit-juice/"
  },
  "next": {
    "title": "Animalia",
    "url": "/reviews/animalia/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/m-gonna-like-me.jpg"}><img src={"/media/2010/08/m-gonna-like-me.jpg"} alt={"I’m Gonna Like Me"} width={210} height={176} /></a>
      </figure>
      <p>{"In this day and age, kids can use all the positive reinforcement they can get in feeling good about themselves. Other children and society at large can be rather cruel, even to the youngest of minds, pointing out personal flaws or quirky differences. Jamie Lee Curtis’ "}<a href={"http://www.jamieleecurtisbooks.com/iglm.html"} target="_blank" rel="noopener noreferrer"><em>{"I’m Gonna Like Me"}</em></a>{" is a call to arms, getting youngsters on board with self appreciation and celebration."}</p>
      <p>{"Narrated by a wannabe firefighter and a forward-thinking fashionista, the book traverses common scenarios that might make a child uncomfortable, upset and even proud: having the wrong answer in class, being picked last for a team, thanking someone for a less-than-exciting birthday present, etc. In each instance, our little champions rhyme their way through and admit “I’m gonna like me when….”"}</p>
      <p>{"For veggie readers, the best tidbit is the cafeteria spread where we read, “I’m gonna like me when I’m sharing my lunch ‘cause just like bananas friends come in a bunch.” In scouring the accompanying drawing we see a few progressive youth, one sporting a Gandhi lunchbox that proclaims “No Beef Allowed” and contains within a small carton of soymilk. Another is pouring Tofu Helper (hot dog flavored) onto the infamous white cube. Last, but not least, is an adorable boy chomping down on the contents of his Cup o’ Lettuce and sitting adjacent to a girl enjoying Global Warming Soup."}</p>
      <p>{"Parents should take note that other kids enjoy items like “T-bone on a Stick” and “Beef Jerky Bow Tie,” and later on in the book, the young fashionista makes octopus stew with her grandmother. I also felt bad for a pet turtle who seemed to be carried around an awful lot in a small cage. But, as vegans, we’re all about compassion, tolerance and changing hearts and minds, right? Why not do it with a bit of flare and enhanced self-esteem à la Jamie Lee Curtis?"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
