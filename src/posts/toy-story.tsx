import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3709",
  "slug": "toy-story",
  "url": "/reviews/toy-story/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/12/12/toy-story/",
  "title": "Toy Story (1995)",
  "publishedAt": "2010-12-12",
  "publishedLabel": "December 12th, 2010",
  "excerpt": "There’s not much to say about “Toy Story” from a vegetarian perspective. Chances are most kids will enjoy the simple but fun plot line, and there’s certainly very little that would offend anyone, much less…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Toy Story (1995)",
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
      "name": "1990s Movies",
      "slug": "1990s-movies",
      "url": "/topics/1990s-movies/"
    },
    {
      "name": "Chained Dogs",
      "slug": "chained-dogs",
      "url": "/topics/chained-dogs/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Disney",
      "slug": "disney",
      "url": "/topics/disney/"
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
      "name": "Junk Food",
      "slug": "junk-food",
      "url": "/topics/junk-food/"
    },
    {
      "name": "Pixar",
      "slug": "pixar",
      "url": "/topics/pixar/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "There’s not much to say about “Toy Story” from a vegetarian perspective. Chances are most kids will enjoy the simple but fun plot line, and there’s certainly very little that would offend anyone, much less…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Little Owl Lost",
    "url": "/reviews/little-owl-lost/"
  },
  "next": {
    "title": "Tofu and T. rex",
    "url": "/reviews/tofu-and-t-rex/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Toy Story (1995)"} width={210} height={317} /></a>
      </figure>
      <p>{"There’s not much to say about “Toy Story” from a vegetarian perspective. Chances are most kids will enjoy the simple but fun plot line, and there’s certainly very little that would offend anyone, much less vegetarians or vegans."}</p>
      <p>{"That said, watching this 1990s Pixar/ Disney flick with my daughter recently, two things did jump out at me. First, while food does not play a central role in this movie — even though one scene takes place at a pizza place — I did notice that Sid, the toy-torturing boy villain next door, only ate junk food (Fruit Loops and Pop Tarts). Second, his dog, who is also rather menacing, is depicted as "}<a href={"http://www.unchainyourdog.org/WaystoHelp.htm"} target="_blank" rel="noopener noreferrer">{"chained"}</a>{" in one scene. Both issues are portrayed negatively, and I don’t think there’s any chance a child would try to emulate this bad behavior."}</p>
      <p>{"All in all, this movie has a good message: be kind to those less powerful than you. (Or, don’t torture toys. Depends on your perspective.)"}</p>
      <p>{"Rated G. "}<a href={"http://www.commonsensemedia.org/movie-reviews/toy-story-1995"} target="_blank" rel="noopener noreferrer">{"Ages 4 and up."}</a></p>
    </div>
  );
}
