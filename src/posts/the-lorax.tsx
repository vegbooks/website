import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7200",
  "slug": "the-lorax",
  "url": "/reviews/the-lorax/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/03/30/the-lorax/",
  "title": "The Lorax (2012)",
  "publishedAt": "2012-03-30",
  "publishedLabel": "March 30th, 2012",
  "excerpt": "“Unless someone like you cares a whole awful lot, nothing is going to get better, it’s not!” – Dr. Seuss For anyone who is already a fan of The Lorax book by Dr. Seuss, “The Lorax” movie lives up to the hype. There…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Lorax (2012)",
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
      "name": "Activism",
      "slug": "activism",
      "url": "/topics/activism/"
    },
    {
      "name": "Amy Sharp",
      "slug": "amy-sharp",
      "url": "/topics/amy-sharp/"
    },
    {
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Dr. Seuss",
      "slug": "dr-seuss",
      "url": "/topics/dr-seuss/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Kids Movies",
      "slug": "environmental-kids-movies",
      "url": "/topics/environmental-kids-movies/"
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
      "name": "Trees",
      "slug": "trees",
      "url": "/topics/trees/"
    }
  ],
  "reviewer": {
    "name": "Amy Sharp",
    "slug": "amy-sharp",
    "url": "/contributors/amy-sharp/",
    "aliases": [
      "AMY SHARP"
    ]
  },
  "seo": {
    "description": "“Unless someone like you cares a whole awful lot, nothing is going to get better, it’s not!” – Dr. Seuss For anyone who is already a fan of The Lorax book by Dr. Seuss, “The Lorax” movie lives up to the hype. There…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Great Turkey Race",
    "url": "/reviews/the-great-turkey-race/"
  },
  "next": {
    "title": "Only One Ocean",
    "url": "/reviews/only-one-ocean/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"The Lorax (2012)"} width={210} height={321} /></a>
      </figure>
      <p>{"“Unless someone like you cares a whole awful lot, nothing is going to get better, it’s not!” – Dr. Seuss"}</p>
      <p>{"For anyone who is already a fan of "}<em>{"The Lorax"}</em>{" book by Dr. Seuss, “"}<a href={"http://www.veggiehomes.com/2012/03/11/movie-night-and-vegan-options-at-the-theater/"} target="_blank" rel="noopener noreferrer">{"The Lorax"}</a>{"” movie lives up to the hype. There are many connections to be drawn to the vegan lifestyle, including concepts such as buying power and "}<a href={"http://en.wikipedia.org/wiki/Unintended_consequences"}>{"unintended consequences"}</a>{" and the interconnectivity with protecting animals, promoting good health, and preserving the environment."}</p>
      <p>{"Characters such as “The Once-ler,” an entrepreneur, are complex. You want to hate him for what he did, but he is so – human. The movie illustrates that anyone (even a young boy named Ted) can make a difference. At a pivotal point in the film, when Ted stands up to educate his complacent community (emulating The Lorax), a real live young boy one row behind me in the theater actually gasped at his courage and later said, “That was so scary.”"}</p>
      <p>{"Alas, Ted’s motivation is for a girl, which will likely make the younger kids groan and through it all, Ted is being stalked by a greedy businessman that might be a little scary for younger children, especially because it seems like Ted is going to get in trouble. [Adults might be reminded of a George Orwell’s"}<br />{" "}<em>{"Nineteen Eighty-Four"}</em>{" “Big Brother is watching you” kind of creepy.]"}</p>
      <p>{"While this film is thoroughly entertaining and your kids might beg for the soundtrack, it roots a little closer to reality than your average PG rated film. Even the lack of a syrupy “happily ever after” highlights that there is opportunity for a happy ending, but it’s up to the people to make it happen. Depending on the age and maturity of both children and adults alike, the characters and content will provide "}<a href={"http://www.meettheshannons.net/2012/03/cupcakes-unofficially-inspired-by-lorax.html"} target="_blank" rel="noopener noreferrer">{"fodder for conversation"}</a>{" and reference far beyond the end of the movie."}</p>
      <p>{"Recommended for ages 6 and up."}</p>
    </div>
  );
}
