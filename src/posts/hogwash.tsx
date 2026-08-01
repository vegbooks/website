import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5511",
  "slug": "hogwash",
  "url": "/reviews/hogwash/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/25/hogwash/",
  "title": "Hogwash",
  "publishedAt": "2011-06-25",
  "publishedLabel": "June 25th, 2011",
  "excerpt": "Kids will laugh aloud as they turn the pages of Hogwash. It’s silly and funny, and it has an important message about respecting animals for who they are. In the story, Farmer decides to bathe all of his animals…",
  "image": {
    "src": "/media/2011/06/hogwash-jacket-final1.jpg",
    "alt": "Hogwash",
    "width": 210,
    "height": 214
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
      "name": "Dirt",
      "slug": "dirt",
      "url": "/topics/dirt/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Farm",
      "slug": "farm",
      "url": "/topics/farm/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Karma Wilson",
      "slug": "karma-wilson",
      "url": "/topics/karma-wilson/"
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
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "Kids will laugh aloud as they turn the pages of Hogwash. It’s silly and funny, and it has an important message about respecting animals for who they are. In the story, Farmer decides to bathe all of his animals…",
    "image": "https://vegbooks.org/media/2011/06/hogwash-jacket-final1.jpg"
  },
  "previous": {
    "title": "Goose’s Story",
    "url": "/reviews/gooses-story/"
  },
  "next": {
    "title": "Beautiful Yetta: The Yiddish Chicken",
    "url": "/reviews/beautiful-yetta-the-yiddish-chicken/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/hogwash-jacket-final1.jpg"}><img src={"/media/2011/06/hogwash-jacket-final1.jpg"} alt={"Hogwash"} width={210} height={214} /></a>
      </figure>
      <p>{"Kids will laugh aloud as they turn the pages of "}<em><a href={"http://www.publishersweekly.com/978-0-316-98840-7"} target="_blank" rel="noopener noreferrer">{"Hogwash"}</a></em>{". It’s silly and funny, "}<em>{"and"}</em>{" it has an important message about respecting animals for who they are."}</p>
      <p>{"In the story, Farmer decides to bathe all of his animals including the dogs, cats, goats, cows, ducks and pigs. However, the pigs have other plans. They do not want to be washed with soap and water! Farmer tries every trick he can think of to wash the pigs, but the pigs outsmart him in every attempt. They board up their pen, wear umbrellas and rubber suits, and hold up various signs including one that says “No Hogwash for us today. Pigs love dirt—so go away.”"}</p>
      <p>{"In his final effort to wash the pigs, Farmer sets out on his plane with plans to squirt the pigs with water and shampoo from above. However, the plane runs out of gas and he crashes. He ends up landing headfirst into the pigs’ muddy pen. Instead of being angry, he has a great time splashing around in the mud with the pigs. From then on Farmer gives up trying to bathe the pigs and actually joins them every other day in their pen with his swimsuit on and towel in hand for a mud bath!"}</p>
      <p>{"Animal lovers will cheer at this book’s great ending. In today’s society, the Farmer (nowadays, agribusiness) usually comes out on top, but not in this book. The pigs win here (at least in one of their battles…hopefully they will fight just as hard for their lives). They didn’t want to be washed with soap and water (in fact, pigs are "}<a href={"http://www.veganpeace.com/animal_facts/Pigs.htm"} target="_blank" rel="noopener noreferrer">{"extremely clean animals"}</a>{", despite the stereotype), so they stood their ground and they won. It’s a happy ending for the pigs…and for the Farmer who ends up joining them for mud baths."}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
