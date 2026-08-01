import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9943",
  "slug": "book-of-life-2014",
  "url": "/reviews/book-of-life-2014/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/11/14/book-of-life-2014/",
  "title": "Book of Life (2014)",
  "publishedAt": "2014-11-14",
  "publishedLabel": "November 14th, 2014",
  "excerpt": "The movie “Book of Life” lived up to my expectations and then some. I absolutely loved the clever and detailed animation as well as the story within a story (within a story!). All the characters looked like…",
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
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Day of the Dead",
      "slug": "day-of-the-dead",
      "url": "/topics/day-of-the-dead/"
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
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Latino Culture",
      "slug": "latino-culture",
      "url": "/topics/latino-culture/"
    },
    {
      "name": "Mexico",
      "slug": "mexico",
      "url": "/topics/mexico/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "The movie “Book of Life” lived up to my expectations and then some. I absolutely loved the clever and detailed animation as well as the story within a story (within a story!). All the characters looked like…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Tracks Count",
    "url": "/reviews/tracks-count/"
  },
  "next": {
    "title": "Gordy and the Magic Diet",
    "url": "/reviews/gordy-and-the-magic-diet/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"The movie “"}<a href={"http://www.bookoflifemovie.com/"} target="_blank" rel="noopener noreferrer">{"Book of Life"}</a>{"” lived up to my expectations and then some. I absolutely loved the clever and detailed animation as well as the story within a story (within a story!). All the characters looked like marionettes and the colors were varied and vivid. Black and white was used beautifully for emphasis. Not only was the imagery delightful, but the movie was packed full of life lessons; lessons about friendship, death, honoring family, staying true to yourself, forgiveness, and even touched on some animal rights! Yet, it was not overdone and I felt it added to the storyline. Some of the analogies were trite, but bits of humor or music helped liven up the predictability."}</p>
      <p>{"I enjoyed the cultural elements in this movie and felt they could have been played up more with the music selection. Instead, the music was more pop tunes altered to add a little Latino flavor and I believe it was meant to add humor."}</p>
      <p>{"The story revolves around the Day of the Dead and a bet the Gods make using two boys and a girl. There is love and lots of fast-paced action (which should keep those with short attention spans entertained) and ancestors as well as a trip to the two worlds after death. The characters emphasize keeping our loved ones alive by honoring and remembering them. Those that are not honored, disappear in the Land of the Forgotten. Our hero, Manolo, travels through the worlds on a quest to return to his love and save his town. There are some malevolent bad guys which may scare the young ‘uns but that’s probably why it’s recommended for ages 8 and up. If you haven’t seen it, go take a journey through a this colorful legend."}</p>
      <p>{"Rated PG."}</p>
    </div>
  );
}
