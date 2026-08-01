import type { PostMetadata } from '../content/types';

export const article = {
  "id": "145",
  "slug": "alice-in-paris",
  "url": "/reviews/alice-in-paris/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/10/alice-in-paris/",
  "title": "Alice in Paris (1966)",
  "publishedAt": "2009-11-10",
  "publishedLabel": "November 10th, 2009",
  "excerpt": "This old movie, available on DVD, uses the character of Alice in Wonderland to present a variety of classic children’s stories including one featuring the French orphan Madeline. Veg parents should know that while…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany Alice in Paris movie review",
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
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Madeline",
      "slug": "madeline",
      "url": "/topics/madeline/"
    },
    {
      "name": "Meat-eating",
      "slug": "meat-eating",
      "url": "/topics/meat-eating/"
    },
    {
      "name": "vegetarian kids",
      "slug": "vegetarian-kids",
      "url": "/topics/vegetarian-kids/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "This old movie, available on DVD, uses the character of Alice in Wonderland to present a variety of classic children’s stories including one featuring the French orphan Madeline. Veg parents should know that while…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Moo, Baa, La La La!",
    "url": "/reviews/moo-baa-la-la-la/"
  },
  "next": {
    "title": "A Pinky Is a Baby Mouse",
    "url": "/reviews/a-pinky-is-a-baby-mouse/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany Alice in Paris movie review"} width={210} height={321} /></a>
      </figure>
      <p>{"This "}<a href={"http://www.imdb.com/title/tt0126189/"} target="_blank" rel="noopener noreferrer">{"old movie"}</a>{", available on DVD, uses the character of Alice in Wonderland to present a variety of classic children’s stories including one featuring the French orphan Madeline."}</p>
      <p>{"Veg parents should know that while this film depicts a child freeing captive animals from cages, the liberated animals ultimately decide to return to the supposed safety of the circus. (Kiddo seems to think the animals were people in costumes; I must admit that I didn’t watch closely enough to be sure.) Similarly, while the film makes a reference to vegetarianism, it also shows people eating chicken and cheese."}</p>
      <p>{"Rated G. Ages 4-8."}</p>
    </div>
  );
}
