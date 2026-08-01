import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2882",
  "slug": "babe",
  "url": "/reviews/babe/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/16/babe/",
  "title": "Babe (1995)",
  "publishedAt": "2010-08-16",
  "publishedLabel": "August 16th, 2010",
  "excerpt": "I’d seen “Babe” years ago, at a time when I was neither a child nor a parent, so it was fun to revisit the movie with my 4-year-old daughter. What I’d forgotten, or perhaps hadn’t noticed, about the 1995 live-action…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Babe (1995)",
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
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
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
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Farming",
      "slug": "farming",
      "url": "/topics/farming/"
    },
    {
      "name": "Live Action Movies",
      "slug": "live-action-movies",
      "url": "/topics/live-action-movies/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
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
    "description": "I’d seen “Babe” years ago, at a time when I was neither a child nor a parent, so it was fun to revisit the movie with my 4-year-old daughter. What I’d forgotten, or perhaps hadn’t noticed, about the 1995 live-action…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Weslandia",
    "url": "/reviews/weslandia/"
  },
  "next": {
    "title": "Jubela",
    "url": "/reviews/jubela/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Babe (1995)"} width={210} height={317} /></a>
      </figure>
      <p>{"I’d seen “"}<a href={"http://www.rottentomatoes.com/m/1065598-babe/"} target="_blank" rel="noopener noreferrer">{"Babe"}</a>{"” years ago, at a time when I was neither a child nor a parent, so it was fun to revisit the movie with my 4-year-old daughter. What I’d forgotten, or perhaps hadn’t noticed, about the 1995 live-action flick when I’d seen it the first time was that it has a certain darkness and wry humor that you don’t often see in kids movies. In fact, the voice-over, timelessness of the sets and costumes, and the very slight edginess reminded me of the more recent TV show “Pushing Daisies,” which was geared to an adult audience."}</p>
      <p>{"Vegetarian parents probably already know that “Babe” deals with the issue of meat, but I was delighted to learn that the film actually makes kids grapple with why people eat some animals but not others. As the animal characters’ explanations are not very satisfactory — the cat, for example, explains that the cow is for milking, the dogs are for tending sheep, cats are for being beautiful, and ducks and pigs are for eating — viewers must answer the question for themselves. And just so the vegetarians don’t get too smug in their answer that no animal is meant for eating, the film pushes a little further, sparing Babe from becoming Christmas dinner while sacrificing a previously unseen duck instead. Watching Ferdinand the duck mourn over the loss of his friend, makes you feel just a little guilty that you felt a pang of relief when you saw duck, rather than pig, was for dinner."}</p>
      <p>{"This is the kind of movie that the entire family can enjoy together, and vegetarians in particular will be delighted by "}<a href={"http://www.imdb.com/title/tt0112431/quotes"} target="_blank" rel="noopener noreferrer">{"all the great lines"}</a>{" in this movie. (“Pork, they call it – or bacon. They only call them pigs when they’re alive.”) Even if you’ve seen it before, the writing, the scenery, and the thematic elements make this a film worth revisiting."}</p>
      <p>{"Rated G. Captivating for kids as little as ages 4 and 5 with a little adult explanation."}</p>
    </div>
  );
}
