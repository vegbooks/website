import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3859",
  "slug": "the-princess-and-the-frog",
  "url": "/reviews/the-princess-and-the-frog/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/03/the-princess-and-the-frog/",
  "title": "The Princess and the Frog (2009)",
  "publishedAt": "2011-01-03",
  "publishedLabel": "January 3rd, 2011",
  "excerpt": "I have to admit that a good part of my enchantment with Disney’s 2009 flick “The Princess and the Frog” has to do with its toe-tapping soundtrack, and the role that jazz plays in the New Orleans-based storyline. This…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Princess and the Frog (2009)",
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
      "name": "Crocodiles",
      "slug": "crocodiles",
      "url": "/topics/crocodiles/"
    },
    {
      "name": "Disney",
      "slug": "disney",
      "url": "/topics/disney/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Jazz",
      "slug": "jazz",
      "url": "/topics/jazz/"
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
      "name": "Princess",
      "slug": "princess",
      "url": "/topics/princess/"
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
    "description": "I have to admit that a good part of my enchantment with Disney’s 2009 flick “The Princess and the Frog” has to do with its toe-tapping soundtrack, and the role that jazz plays in the New Orleans-based storyline. This…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Getting to the Bottom of Global Warming: An Isabel Soto Investigation",
    "url": "/reviews/getting-to-the-bottom-of-global-warming-an-isabel-soto-investigation/"
  },
  "next": {
    "title": "My Friend Whale",
    "url": "/reviews/my-friend-whale/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"The Princess and the Frog (2009)"} width={210} height={317} /></a>
      </figure>
      <p>{"I have to admit that a good part of my enchantment with Disney’s 2009 flick “The Princess and the Frog” has to do with its toe-tapping soundtrack, and the role that jazz plays in the New Orleans-based storyline. This "}<a href={"http://www.imdb.com/title/tt0780521/"} target="_blank" rel="noopener noreferrer">{"retelling of the Frog Prince"}</a>{", now available on DVD, also features beautiful animation and a spunky princess who is notably less passive, and harder working, than some of the older Disney princesses."}</p>
      <p>{"Families interested in animal rights will likely cringe when the lead character Tiana first encounters the prince-turned-frog: she shrieks and tries to flatten him with a book. In her defense, he "}<em>{"was talking"}</em>{" to her. And it would be an understatement to say that when Tiana herself becomes a frog, she begins to appreciate the amphibians a little bit more. Your kids probably will too. Add on that two of the most likable characters in the entire movie are a crocodile and a lightning bug, and all in all, you’ve got a pretty animal-friendly movie."}</p>
      <p>{"While this movie doesn’t have the same kind of witty one-liners that have delighted me in other Disney flicks (take, for example, "}<a href={"/reviews/the-little-mermaid/"}>{"“The Little Mermaid”"}</a>{"), I did appreciate the running joke that frogs are not covered in slime, but in mucus."}</p>
      <p>{"Rated G. Ages 5-12. For activities related to the movie, visit "}<a href={"http://family.go.com/disney/pkg-disney-character-fun/pkg-disney-princess-and-the-frog/"} target="_blank" rel="noopener noreferrer">{"Disney Family"}</a>{"."}</p>
    </div>
  );
}
