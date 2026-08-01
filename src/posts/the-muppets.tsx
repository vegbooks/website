import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6500",
  "slug": "the-muppets",
  "url": "/reviews/the-muppets/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/27/the-muppets/",
  "title": "The Muppets (2011)",
  "publishedAt": "2011-11-27",
  "publishedLabel": "November 27th, 2011",
  "excerpt": "Anyone who believes the old adage that publishers and producers can make works featuring male protagonists because they will appeal to both boys and girls (in contrast to female protagonists, which allegedly are of…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Muppets (2011)",
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
      "name": "1980s Culture",
      "slug": "1980s-culture",
      "url": "/topics/1980s-culture/"
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
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Muppets",
      "slug": "muppets",
      "url": "/topics/muppets/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Pop Culture",
      "slug": "pop-culture",
      "url": "/topics/pop-culture/"
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
    "description": "Anyone who believes the old adage that publishers and producers can make works featuring male protagonists because they will appeal to both boys and girls (in contrast to female protagonists, which allegedly are of…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "I Love NY Food",
    "url": "/reviews/i-love-ny-food/"
  },
  "next": {
    "title": "Maggie’s Second Chance",
    "url": "/reviews/maggies-second-chance/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"The Muppets (2011)"} width={210} height={321} /></a>
      </figure>
      <p>{"Anyone who believes the old adage that publishers and producers can make works featuring male protagonists because they will appeal to both boys and girls (in contrast to female protagonists, which allegedly are of little interest to boys) has not watched a movie with my daughter. When we saw “The Muppets” in the theater, she zoned out for the first twenty minutes, repeatedly asking when Miss Piggy would make her appearance. The new character of the movie, Walter, held absolutely no appeal to her."}</p>
      <p>{"On the other hand, I adored this flick, which delivers a heavy dose of nostalgia for those of us who grew up in the ’80s. I loved the Muppet Show as a child — in part because my whole family would make popcorn and gather to watch it each week — and so I instantly connected with Kermit and the gang, and cheered for songs like “The Rainbow Connection” and “Manamana.” I also appreciated this film’s "}<a href={"http://www.gomemphis.com/news/2011/nov/23/movie-reviewsholiday-films-for-kids-the-muppets/"} target="_blank" rel="noopener noreferrer">{"cultural references"}</a>{", from the ’80s robot serving cans of Tab to the nods to contemporary pop culture via "}<a href={"http://www.imdb.com/title/tt1204342/fullcredits#cast"} target="_blank" rel="noopener noreferrer">{"appearances"}</a>{" by stars of the tv shows “Parks and Recreation,” “Modern Family,” and “The Office.”"}</p>
      <p>{"I didn’t notice any aspects of the movie that would be inappropriate for vegetarian or vegan families. While many of the animals are anthropomorphized, I personally appreciate the hens in the film, who sing a song like chickens might."}</p>
      <p>{"Rated PG. Ages 6 and up. For more intel on the movie (including when to take a potty break), check out "}<a href={"http://www.wired.com/geekdad/2011/11/10-things-parents-should-know-about-the-muppets-geekdad-weekly-rewind/"} target="_blank" rel="noopener noreferrer">{"Geek Dad"}</a>{"."}</p>
    </div>
  );
}
