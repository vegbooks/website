import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10452",
  "slug": "dory",
  "url": "/reviews/dory/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/12/31/dory/",
  "title": "Finding Dory (2016)",
  "publishedAt": "2016-12-31",
  "publishedLabel": "December 31st, 2016",
  "excerpt": "When my older daughter was three, we tried watching “Finding Nemo,” a movie beloved by many but way too scary for my daughter. My youngest is now three, and a parent of a friend of his suggested we watch “Finding…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317
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
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Ellen DeGeneres",
      "slug": "ellen-degeneres",
      "url": "/topics/ellen-degeneres/"
    },
    {
      "name": "Fish",
      "slug": "fish",
      "url": "/topics/fish/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "When my older daughter was three, we tried watching “Finding Nemo,” a movie beloved by many but way too scary for my daughter. My youngest is now three, and a parent of a friend of his suggested we watch “Finding…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Yertle the Turtle",
    "url": "/reviews/yertle-the-turtle/"
  },
  "next": {
    "title": "What’s an Apple? and What’s a Banana?",
    "url": "/reviews/whats-an-apple-and-whats-a-banana/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"When my older daughter was three, we tried watching “"}<a href={"/reviews/finding-nemo/"}>{"Finding Nemo"}</a>{",” a movie beloved by many but way too scary for my daughter. My youngest is now three, and a parent of a friend of his suggested we watch “Finding Dory.” A look of horror must have crossed my face when she said that because she quickly followed it up with “It’s not scary like Finding Nemo!”"}</p>
      <p>{"We were on vacation in Burlington, VT, and wanted to see a movie at the "}<a href={"http://www.sunsetdrivein.com/)"} target="_blank" rel="noopener noreferrer">{"drive-in theatre"}</a>{", and they were playing “Finding Dory,” so we gave it a try. I enjoyed the movie more than “Finding Nemo,” and it’s definitely less scary. My daughter, seven years old, said she really liked the movie, and thought the characters were really funny, but it was sad. My son, three years old, said, “Ooh fish!” when the movie started, but he fell asleep before it ended, though the next day he said that he liked the movie and thought Dory was funny, but was worried because Dory couldn’t find her parents. I thought the movie was quiet and slow but a good story with enjoyable characters."}</p>
      <p>{"Much of the movie takes place in a ocean animal rescue center in California. My daughter loved hearing about how Ellen DeGeneres, the voice of Dory and a animal activist, suggested changes to the script that changed the setting from a Sea World-type aquarium to an animal rescue center. We talked about the power of speaking up for what you believe in. Even in that setting, you do get the feeling that the animals are trapped. It’s clear that though it is a rehabilitation center, many of the animals have been there for years. There is a conversation between a whale shark and a beluga whale in which the whale shark is considering whether or not to escape. The beluga whale says, “There are no walls in the ocean!” and the whale shark gets so excited. There is a big escape scene at the end that is particularly telling. All of the animals in the tanks start shouting “Release, release!”"}</p>
      <p><a href={"https://www.commonsensemedia.org/movie-reviews/finding-dory"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends this movie for ages 6+. I watched it with my children ages 7 and 3."}</p>
    </div>
  );
}
