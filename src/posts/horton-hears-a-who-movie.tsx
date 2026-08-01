import type { PostMetadata } from '../content/types';

export const article = {
  "id": "139",
  "slug": "horton-hears-a-who-movie",
  "url": "/reviews/horton-hears-a-who-movie/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/13/horton-hears-a-who-movie/",
  "title": "Horton Hears a Who! (2008)",
  "publishedAt": "2009-11-13",
  "publishedLabel": "November 13th, 2009",
  "excerpt": "I absolutely adore Dr. Seuss’s storybook Horton Hears a Who! and the 1970 animated short of the same name (sometimes included with the old Grinch on DVD). So when I heard that talents Jim Carrey, Steve Carell, and…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Horton Hears a Who! (2008)",
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
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Horton",
      "slug": "horton",
      "url": "/topics/horton/"
    },
    {
      "name": "Movies Based on Books",
      "slug": "movies-based-on-books",
      "url": "/topics/movies-based-on-books/"
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
    "description": "I absolutely adore Dr. Seuss’s storybook Horton Hears a Who! and the 1970 animated short of the same name (sometimes included with the old Grinch on DVD). So when I heard that talents Jim Carrey, Steve Carell, and…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Low Song",
    "url": "/reviews/low-song/"
  },
  "next": {
    "title": "All In A Day",
    "url": "/reviews/all-in-a-day/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Horton Hears a Who! (2008)"} width={210} height={321} /></a>
      </figure>
      <p>{"I absolutely adore Dr. Seuss’s storybook "}<a href={"/reviews/horton-hears-a-who-the-book/"}><em>{"Horton Hears a Who!"}</em></a>{" and the 1970 animated short of the same name (sometimes included with the old "}<em>{"Grinch"}</em>{" on DVD). So when I heard that talents "}<a href={"http://www.imdb.com/title/tt0451079/"} target="_blank" rel="noopener noreferrer">{"Jim Carrey, Steve Carell, and Carol Burnett"}</a>{" were teaming up to do the voice work for a full-length feature film based on the book, I had high hopes."}</p>
      <p><a href={"http://www.commonsensemedia.org/movie-reviews/dr-seuss-horton-hears-who"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends this film for kids ages 4 and up, so we waited until after kiddo’s 4th birthday to make a huge bowl of popcorn with margarine and nutritional yeast and have our first family movie night. Unfortunately, we were disappointed. While kiddo did like some of the silliness in the movie — she wants me to tell you that Horton shaking his bottom was funny — the parts featuring villain Vlad were too scary for her. And to my dismay, I heard her repeating language from the movie (the word “boob”) that I thought was inappropriate for little kids."}</p>
      <p>{"As for me, I was put off by the film’s lack of a coherent message. While Horton did recite his catch phrase from the book — “A person’s a person, no matter how small” — it was unclear whether the movie was about the consequences of stifling imagination, or believing in what you can’t see, or even the existence of life on other planets. The book’s emphasis on standing up for others and being true to yourself, no matter the consequences, was somehow lost in the shuffle."}</p>
      <p>{"Rated G. Ages 5-10. While there are a few jokes geared to parents, such as the fussy momma kangaroo’s reference to pouch-schooling, I don’t think most adults will enjoy this one."}</p>
    </div>
  );
}
