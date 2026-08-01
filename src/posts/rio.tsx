import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5225",
  "slug": "rio",
  "url": "/reviews/rio/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/17/rio/",
  "title": "Rio (2011)",
  "publishedAt": "2011-05-17",
  "publishedLabel": "May 17th, 2011",
  "excerpt": "The animated movie “Rio” really had me at the first scene, where all the birds of the rainforest ascend into the sky to sing and fly in a huge, showy musical number. Add to the lush animation and the spirited music a…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Rio (2011)",
    "width": 210,
    "height": 321
  },
  "categories": [
    {
      "name": "Movies",
      "slug": "movies",
      "url": "/movies/"
    }
  ],
  "tags": [
    {
      "name": "Animated",
      "slug": "animated",
      "url": "/topics/animated/"
    },
    {
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Brazil",
      "slug": "brazil",
      "url": "/topics/brazil/"
    },
    {
      "name": "Captive Wildlife",
      "slug": "captive-wildlife",
      "url": "/topics/captive-wildlife/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jemaine Clement",
      "slug": "jemaine-clement",
      "url": "/topics/jemaine-clement/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
    },
    {
      "name": "Parrots",
      "slug": "parrots",
      "url": "/topics/parrots/"
    },
    {
      "name": "Pet Stores",
      "slug": "pet-stores",
      "url": "/topics/pet-stores/"
    },
    {
      "name": "Pet Trade",
      "slug": "pet-trade",
      "url": "/topics/pet-trade/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rainforest",
      "slug": "rainforest",
      "url": "/topics/rainforest/"
    },
    {
      "name": "Wild Animals in Captivity",
      "slug": "wild-animals-in-captivity",
      "url": "/topics/wild-animals-in-captivity/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "The animated movie “Rio” really had me at the first scene, where all the birds of the rainforest ascend into the sky to sing and fly in a huge, showy musical number. Add to the lush animation and the spirited music a…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Memorial Day Surprise",
    "url": "/reviews/memorial-day-surprise/"
  },
  "next": {
    "title": "Animals that Changed the World",
    "url": "/reviews/animals-that-changed-the-world/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Rio (2011)"} width={210} height={321} /></a>
      </figure>
      <p>{"The animated movie “Rio” really had me at the first scene, where all the birds of the rainforest ascend into the sky to sing and fly in a huge, showy musical number. Add to the lush animation and the spirited music a storyline that revolves around the evils of the "}<a href={"http://animal.discovery.com/tv/fatal-attractions/exotic-pet-trade-overview.html"} target="_blank" rel="noopener noreferrer">{"pet trade"}</a>{" and wild animals belonging in the wild, and you know I was in movie heaven."}</p>
      <p>{"My daughter, who is 5 years old, enjoyed the humor, repeatedly cracking up until tears came down her face, and my husband was pleasantly surprised to discover that the voice of one of the main bad guys, a cockatoo, was none other than "}<a href={"http://www.imdb.com/name/nm1318596/"} target="_blank" rel="noopener noreferrer">{"Jemaine Clement"}</a>{" from “Flight of the Conchords.” Needless to say, we had a great time watching this family flick."}</p>
      <p>{"The story follows Blu, a blue macaw, from the time he is a fledgling in the rainforest of Brazil until he becomes a father, saving his species from extinction. Along the way, he serendipitously escapes from a truck hauling him to a pet store, lives in a bookstore in Minnesota, meets and eventually falls in love with the last female of his kind, overcomes his fear of flying, escapes wildlife traffickers, and rescues a bunch of other birds. As you can guess, this story moves fast!"}</p>
      <p>{"Vegetarian families should know that meat is depicted briefly in one scene, but not in a very appetizing way. Parents should also be prepared to discuss with their kids the message this movie has about pet stores and about keeping wildlife captive — while it may seem obvious to grownups, pet stores saw a surge of clown fish sales after “"}<a href={"/reviews/finding-nemo/"}>{"Finding Nemo"}</a>{",” despite its anti-captivity theme."}</p>
      <p>{"Rated G, this movie is appropriate for kids ages 4 and up."}</p>
    </div>
  );
}
