import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10322",
  "slug": "free-willy-2004",
  "url": "/reviews/free-willy-2004/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/04/14/free-willy-2004/",
  "title": "Free Willy (2004)",
  "publishedAt": "2016-04-14",
  "publishedLabel": "April 14th, 2016",
  "excerpt": "We watched “Free Willy” for our family movie night with our six-year-old daughter. I hadn’t seen this movie since it came out years ago. I was amazed at how strong the anti-captivity message is in this lovely family…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 282,
    "height": 426
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
      "name": "Amazon Prime",
      "slug": "amazon-prime",
      "url": "/topics/amazon-prime/"
    },
    {
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
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
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Orcas",
      "slug": "orcas",
      "url": "/topics/orcas/"
    },
    {
      "name": "Streaming Movies",
      "slug": "streaming-movies",
      "url": "/topics/streaming-movies/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
    },
    {
      "name": "Wild Animals in Captivity",
      "slug": "wild-animals-in-captivity",
      "url": "/topics/wild-animals-in-captivity/"
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
    "description": "We watched “Free Willy” for our family movie night with our six-year-old daughter. I hadn’t seen this movie since it came out years ago. I was amazed at how strong the anti-captivity message is in this lovely family…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Achoo! Why Pollen Counts",
    "url": "/reviews/achoo-why-pollen-counts/"
  },
  "next": {
    "title": "Owen & Mzee: The True Story of a Remarkable Friendship",
    "url": "/reviews/owen-mzee-the-true-story-of-a-remarkable-friendship/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={282} height={426} />
      </figure>
      <p>{"We watched “Free Willy” for our family movie night with our six-year-old daughter. I hadn’t seen this movie since it came out years ago. I was amazed at how strong the anti-captivity message is in this lovely family movie."}</p>
      <p>{"The movie shows viscerally how animals are taken from the wild, put into tiny enclosures, and treated as commodities. Willy is sad, scared, and misses his family."}</p>
      <p>{"The scene that best demonstrates aquarium life is a scene in which kids are yelling and pounding on the tank. We hear what Willy is hearing under the water and see him getting more and more upset until he finally rams the glass with his nose. I’m always amazed at the plethora of kid-friendly animal rights movies."}</p>
      <p>{"My daughter loved this movie. She laughed, she cried, and she cried some more. It was really helpful that we spent a week in Puget Sound this summer seeing orcas in the wild. She’s been kind of positive about zoos and aquariums in the past, despite our negative feelings toward them. After seeing this movie she now thinks the practice of putting wild animals in cages is deplorable. For now, that is, until her next field trip to the zoo…."}</p>
      <p><a href={"https://www.commonsensemedia.org/movie-reviews/free-willy"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends this film for ages 6+. We watched it on Amazon Prime."}</p>
    </div>
  );
}
