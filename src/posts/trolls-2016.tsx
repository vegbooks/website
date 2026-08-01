import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10433",
  "slug": "trolls-2016",
  "url": "/reviews/trolls-2016/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/11/18/trolls-2016/",
  "title": "Trolls (2016)",
  "publishedAt": "2016-11-18",
  "publishedLabel": "November 18th, 2016",
  "excerpt": "I took my kids (ages 3 and 7) to see the movie “Trolls.” I had heard that it was about happiness but didn’t know much beyond that, so I was pleasantly surprised at the animal friendly message. In the middle of it, my…",
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
      "name": "Happiness",
      "slug": "happiness",
      "url": "/topics/happiness/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Meat-eating",
      "slug": "meat-eating",
      "url": "/topics/meat-eating/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
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
    "description": "I took my kids (ages 3 and 7) to see the movie “Trolls.” I had heard that it was about happiness but didn’t know much beyond that, so I was pleasantly surprised at the animal friendly message. In the middle of it, my…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Wonderful Wizard of Oz",
    "url": "/reviews/the-wonderful-wizard-of-oz/"
  },
  "next": {
    "title": "The Creepy Case Files of Margo Maloo",
    "url": "/reviews/the-creepy-case-files-of-margo-maloo/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"I took my kids (ages 3 and 7) to see the movie “Trolls.” I had heard that it was about happiness but didn’t know much beyond that, so I was pleasantly surprised at the animal friendly message. In the middle of it, my daughter exclaimed, “You have to review this one!”"}</p>
      <p>{"The entire movie is about the Trolls trying to avoid being eaten by the Bergens. At one point, a scared Troll exclaims, “I don’t want to be food!” There is a lot of color, hair, singing, dancing, and talk of happiness to round out this story about not wanting to be someone else’s food."}</p>
      <p>{"The movie was cute and had a lot of great music. My daughter, age 7, really loved the movie. My son, age 3, was afraid of the Bergens and didn’t really enjoy it. "}<a href={"https://www.commonsensemedia.org/movie-reviews/trolls"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" suggests this movie for ages 6 and older and that seems about right."}</p>
      <p>{"Rated PG."}</p>
    </div>
  );
}
