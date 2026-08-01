import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10529",
  "slug": "star-wars-the-last-jedi-2017",
  "url": "/reviews/star-wars-the-last-jedi-2017/",
  "legacyUrl": "https://vegbooks.org/index.php/2017/12/29/star-wars-the-last-jedi-2017/",
  "title": "Star Wars: The Last Jedi (2017)",
  "publishedAt": "2017-12-29",
  "publishedLabel": "December 29th, 2017",
  "excerpt": "My family has mad love for all things Star Wars and the latest movie is no exception. We saw “The Last Jedi” as a family and my 8-year-old daughter said, “That was just amazing! It’s the best movie I’ve ever seen!”…",
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
      "name": "Depictions of Meat in Film",
      "slug": "depictions-of-meat-in-film",
      "url": "/topics/depictions-of-meat-in-film/"
    },
    {
      "name": "Diversity",
      "slug": "diversity",
      "url": "/topics/diversity/"
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
      "name": "Fantasy",
      "slug": "fantasy",
      "url": "/topics/fantasy/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Gender",
      "slug": "gender",
      "url": "/topics/gender/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Star Wars",
      "slug": "star-wars",
      "url": "/topics/star-wars/"
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
    "description": "My family has mad love for all things Star Wars and the latest movie is no exception. We saw “The Last Jedi” as a family and my 8-year-old daughter said, “That was just amazing! It’s the best movie I’ve ever seen!”…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "JANE (2017)",
    "url": "/reviews/jane-2017/"
  },
  "next": {
    "title": "One Day a Dot",
    "url": "/reviews/one-day-a-dot/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"My family has mad love for all things Star Wars and the latest movie is no exception. We saw “The Last Jedi” as a family and my 8-year-old daughter said, “That was just amazing! It’s the best movie I’ve ever seen!”"}</p>
      <p>{"The latest movies in the Star Wars franchise do an excellent job of presenting a diverse cast which includes males and female and people of different races and ethnicities. Many articles have been written about the role of women in “The Last Jedi,” such as this one from Bustle with the excellent title, “"}<a href={"https://www.bustle.com/p/the-last-jedi-makes-treating-women-as-equals-seem-easy-because-it-is-7592812"} target="_blank" rel="noopener noreferrer">{"The Last Jedi Makes Treating Women As Equal Seem Easy – Because It Is"}</a>{".” The Last Jedi is a great movie to introduce to all children (males and females) for the diversity alone."}</p>
      <p>{"Another great aspect of the film that I wasn’t expecting is the treatment of animals. I was blown away by some aspects, detailed better than I can in "}<a href={"https://www.peta2.com/news/animal-rights-messages-in-the-last-jedi/"} target="_blank" rel="noopener noreferrer">{"this article from Peta2"}</a>{"."}</p>
      <p>{"The Last Jedi is rated PG-13. "}<a href={"https://www.commonsensemedia.org/movie-reviews/star-wars-episode-viii-the-last-jedi"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends it for ages 10 and over. We watched it with our 8-year-old. My wife watched the movie first and then told our daughter the story, including who dies, so that she would be prepared to handle it in the theatre, which was a very helpful tactic."}</p>
      <p>{"Now go see the film! And May the Force Be With You."}</p>
    </div>
  );
}
