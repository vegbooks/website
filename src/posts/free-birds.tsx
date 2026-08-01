import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9178",
  "slug": "free-birds",
  "url": "/reviews/free-birds/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/07/free-birds/",
  "title": "Free Birds (2013)",
  "publishedAt": "2013-11-07",
  "publishedLabel": "November 7th, 2013",
  "excerpt": "With high hopes, kiddo and I went to the theater to see the new animated family flick “Free Birds” on opening day last Friday. We knew from the previews that it would be funny, and sure enough, that’s what attracted…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Movie pic",
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
      "name": "Family Films",
      "slug": "family-films",
      "url": "/topics/family-films/"
    },
    {
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
    },
    {
      "name": "Vegetarian Thanksgiving",
      "slug": "vegetarian-thanksgiving",
      "url": "/topics/vegetarian-thanksgiving/"
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
    "description": "With high hopes, kiddo and I went to the theater to see the new animated family flick “Free Birds” on opening day last Friday. We knew from the previews that it would be funny, and sure enough, that’s what attracted…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Our School Garden",
    "url": "/reviews/our-school-garden/"
  },
  "next": {
    "title": "Mama Doni’s Jewish Holiday Party (2013)",
    "url": "/reviews/mama-donis-jewish-holiday-party/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Movie pic"} width={210} height={321} /></a>
      </figure>
      <p>{"With high hopes, kiddo and I went to the theater to see the new animated family flick “"}<a href={"http://www.imdb.com/title/tt1621039/"} target="_blank" rel="noopener noreferrer">{"Free Birds"}</a>{"” on opening day last Friday. We knew from the previews that it would be funny, and sure enough, that’s what attracted the family we befriended while waiting for the movie to begin. But I had questions: "}<em>{"Would the turkeys prevail in their quest to get turkey off the Thanksgiving menu? And if so, would their victory get turkey off the menus of the families who flocked to see the movie?"}</em></p>
      <p>{"The answers: Yes, and probably not."}</p>
      <p>{"In short, the plot revolves around two modern-day turkeys traveling back in time to the first Thanksgiving to prevent the Pilgrims from hunting their wild ancestors. After a couple plot twists, they succeed, and the first Thanksgiving is celebrated with pizza, not turkey."}</p>
      <p>{"Still, I don’t have much faith that this movie will convince kids and parents to skip the bird this holiday. On the plus side, the movie does offer criticism of both free-range and confined animal feeding operations (CAFOs, or “factory farms”), going so far as to depict turkeys piled on top of each other in a large industrial facility. Wild turkeys are also depicted as being smart and resourceful, albeit anthropomorphized."}</p>
      <p>{"On the flip side, modern-day domesticated turkeys are characterized as just plain stupid — so stupid, in fact that they welcome being selected for slaughter because they think the farmer is bringing them to “turkey paradise.” This, in my mind, offers parents a convenient out if their kids ask why a bird continues to be part of the holiday tradition."}</p>
      <p>{"The truth is, vegetarian and vegan kids will probably love this movie, as my daughter did. For them, it provides a new story about Thanksgiving and a cool, fun dish to serve as the focus of the meal: pizza. But this is mainstream Hollywood, and while the movie is good, it’s not revolutionary."}</p>
      <p>{"Ages 6 to adult."}</p>
    </div>
  );
}
