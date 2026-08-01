import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6059",
  "slug": "first-pooch",
  "url": "/reviews/first-pooch/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/26/first-pooch/",
  "title": "First Pooch",
  "publishedAt": "2011-09-26",
  "publishedLabel": "September 26th, 2011",
  "excerpt": "I’m charmed by Carole Boston Weatherford’s picture book on how First Dog Bo became part of the First Family. Living in Washington, DC, my family and I are intimate with the president’s motorcade, helicopters, and…",
  "image": {
    "src": "/media/2011/09/s-pick-a-pet.jpg",
    "alt": "First Pooch",
    "width": 210,
    "height": 270
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
      "name": "Amy Bates",
      "slug": "amy-bates",
      "url": "/topics/amy-bates/"
    },
    {
      "name": "Barack Obama",
      "slug": "barack-obama",
      "url": "/topics/barack-obama/"
    },
    {
      "name": "Carole Boston Weatherford",
      "slug": "carole-boston-weatherford",
      "url": "/topics/carole-boston-weatherford/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Family",
      "slug": "family",
      "url": "/topics/family/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "President",
      "slug": "president",
      "url": "/topics/president/"
    },
    {
      "name": "Washington D.C.",
      "slug": "washington-d-c",
      "url": "/topics/washington-d-c/"
    },
    {
      "name": "White House",
      "slug": "white-house",
      "url": "/topics/white-house/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "I’m charmed by Carole Boston Weatherford’s picture book on how First Dog Bo became part of the First Family. Living in Washington, DC, my family and I are intimate with the president’s motorcade, helicopters, and…",
    "image": "https://vegbooks.org/media/2011/09/s-pick-a-pet.jpg"
  },
  "previous": {
    "title": "Naturally Wild Musicians",
    "url": "/reviews/naturally-wild-musicians/"
  },
  "next": {
    "title": "The Owly Books",
    "url": "/reviews/the-owly-books/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/09/s-pick-a-pet.jpeg"}><img src={"/media/2011/09/s-pick-a-pet.jpg"} alt={"First Pooch"} width={210} height={270} /></a>
      </figure>
      <p>{"I’m charmed by Carole Boston Weatherford’s picture book on "}<a href={"/reviews/now-hiring-white-house-dog/"}>{"how First Dog Bo became part of the First Family"}</a>{". Living in Washington, DC, my family and I are intimate with the president’s motorcade, helicopters, and even the National Christmas Tree on the south lawn. But the man himself? We know as much about him and his family as anyone with a cable connection. So we enjoyed this peek into the president’s life from the perspective of his daughters, and of course the heartwarming story of how Bo found his home."}</p>
      <p>{"The real-life details of the First Family’s search for a White House dog irked me a little when they were in the news. Remember how the Obamas promised to rescue a dog from a shelter, but "}<a href={"http://www.msnbc.msn.com/id/30194173/ns/health-pet_health/t/obamas-new-pooch-rescue-or-not/"} target="_blank" rel="noopener noreferrer">{"ultimately did not"}</a>{"? Fortunately, this book does a good job of sticking to the facts without glamorizing breeders or downplaying the importance of shelters."}</p>
      <p>{"People concerned with animal rights will note that the book states, in small type under a portrait, that George W. Bush “owned” a terrier. And in recounting the promises of presidents over the years, the book also describes that Calvin Coolidge promised to put “a chicken in every pot and a car in every garage.” (Fortunately, the bird pictured is still alive, and the people holding the pot appear clueless that they’re supposed to eat the poor bird.)"}</p>
      <p>{"All in all, this is a fun read about the White House for kids ages 3-7."}</p>
    </div>
  );
}
