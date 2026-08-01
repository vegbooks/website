import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11118",
  "slug": "one-small-hop",
  "url": "/reviews/one-small-hop/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/06/24/one-small-hop/",
  "title": "One Small Hop",
  "publishedAt": "2021-06-24",
  "publishedLabel": "June 24th, 2021",
  "excerpt": "ONE SMALL HOP by Madelyn Rosenberg intertwines a climate dystopia with the persistent hope of middle grade fiction. The novel follows Jonathan “Ahab” Goldstein and his group of friends as they navigate typical middle…",
  "image": {
    "src": "/media/2021/06/one-small-hop.jpg",
    "alt": "One Small Hop",
    "width": 267,
    "height": 400
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
      "name": "Climate Change",
      "slug": "climate-change",
      "url": "/topics/climate-change/"
    },
    {
      "name": "middle grade",
      "slug": "middle-grade",
      "url": "/topics/middle-grade/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "ONE SMALL HOP by Madelyn Rosenberg intertwines a climate dystopia with the persistent hope of middle grade fiction. The novel follows Jonathan “Ahab” Goldstein and his group of friends as they navigate typical middle…",
    "image": "https://vegbooks.org/media/2021/06/one-small-hop.jpg"
  },
  "previous": {
    "title": "Finding Home",
    "url": "/reviews/finding-home/"
  },
  "next": {
    "title": "Allergic",
    "url": "/reviews/allergic/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2021/06/one-small-hop.jpg"} alt={"One Small Hop"} width={267} height={400} />
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781338565614"} target="_blank" rel="noopener noreferrer"><strong>{"ONE SMALL HOP by Madelyn Rosenberg"}</strong></a>{" intertwines a climate dystopia with the persistent hope of middle grade fiction. The novel follows Jonathan “Ahab” Goldstein and his group of friends as they navigate typical middle school conflicts and trying to save the world. The novel is set in the not-too-distant future where climate change has hastened extinctions of animals and the toxicity and scarcity of everything from the ocean to plant life. Showers are limited to two minutes, falling into the ocean causes welts and respiratory infections, and being uncovered in the sun is dangerous, even for a short time. Ahab and his friends, Davy and Delphinium (Delph), begin their adventures when a rare find, a live lobster, is found by Leroy, one of their classmates. The lobster dies in the hands of the Environmental Police Force (EFP), and the group decides to go searching for more sea life. When they find the “last bullfrog in Maine,” they decide to save the world, one small hop at a time."}</p>
      <p>{"Middle grade readers will appreciate the depiction of resentment towards the older generation for allowing the environment to collapse, and they will be impressed with the antics, determination, and bravery of the friends. Details about improved technology (everyone has "}<em>{"very smart"}</em>{" phones called “Ones,” indoor nature parks with imitation plants and animals, virtual reality field trips) are familiar enough to be believable in this world. Through it all, friendships and values, coming-of-age scenarios, and typical middle grade adventures are developed. Especially strong is the thread of how Ahab comes to terms with his feelings towards people he doesn’t appreciate or trust, from his father to his classmate Leroy to a mysterious connection nicknamed “Mole Rat.” The progression is portrayed in an authentic and heartfelt manner. When the group makes a momentous decision towards the end of the novel, it’s easy to relate to the sadness and fear different characters experience."}</p>
      <p><a href={"https://www.indiebound.org/book/9781338565614"} target="_blank" rel="noopener noreferrer">{"ONE SMALL HOP"}</a>{" is a satisfying read for young people who have noticed the disconnect between lip service about caring for the environment and the actions people take on an everyday basis. The main characters are likable and well-developed, and the writing is at once easy to read and stimulating. Human behavior, as well as SUVs, pollution, overuse of resources and more all receive moments of condemnation from the perspective of the “next generation.” And the wistful memories from parents of flower beds, real ice cream, and relaxing by the ocean are met with a mixture of sadness and eye-rolling from the kids who have grown up with “ficken,” covered bike rails, and shower quotas thanks to the perceived former apathy of their parents."}</p>
      <p>{"Highly recommended."}</p>
    </div>
  );
}
