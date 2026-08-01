import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6963",
  "slug": "babe-pig-in-the-city",
  "url": "/reviews/babe-pig-in-the-city/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/02/16/babe-pig-in-the-city/",
  "title": "Babe: Pig in the City (1998)",
  "publishedAt": "2012-02-16",
  "publishedLabel": "February 16th, 2012",
  "excerpt": "Surprisingly dark for a family film, “Babe: Pig in the City” didn’t please all the fans of the first “Babe” movie who had so eagerly awaited the sequel. Still, animal rights advocates will find much to like in the…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Babe: Pig in the City (1998)",
    "width": 210,
    "height": 316
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Discrimination",
      "slug": "discrimination",
      "url": "/topics/discrimination/"
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
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Homeless Animals",
      "slug": "homeless-animals",
      "url": "/topics/homeless-animals/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Vivisection",
      "slug": "vivisection",
      "url": "/topics/vivisection/"
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
    "description": "Surprisingly dark for a family film, “Babe: Pig in the City” didn’t please all the fans of the first “Babe” movie who had so eagerly awaited the sequel. Still, animal rights advocates will find much to like in the…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Piggie Pie",
    "url": "/reviews/piggie-pie/"
  },
  "next": {
    "title": "Good Dog, Aggie",
    "url": "/reviews/good-dog-aggie/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Babe: Pig in the City (1998)"} width={210} height={316} /></a>
      </figure>
      <p>{"Surprisingly dark for a family film, “Babe: Pig in the City” didn’t please all the fans of the first “"}<a href={"/reviews/babe/"}>{"Babe"}</a>{"” movie who had so eagerly awaited the sequel. Still, animal rights advocates will find much to like in the urban exploits of the titular pig."}</p>
      <p>{"While the theme of pigs-as-food continues in the sequel, the film primarily focuses on the plight of companion animals. The plot revolves around Babe’s adventures after he and the farmer’s wife miss a connecting flight. From their struggle to find accommodations to their heroic efforts to free impounded animals held in cages in the back of a hospital, this film touches on themes of dog and cat homelessness, "}<a href={"http://animallaw.info/articles/ovuspetsandhousinglaws.htm"} target="_blank" rel="noopener noreferrer">{"housing discrimination"}</a>{" against people with companion animals, and even "}<a href={"http://www.banpoundseizure.org/flash.shtml"} target="_blank" rel="noopener noreferrer">{"pound seizure"}</a>{" and vivisection."}</p>
      <p>{"Of course, families will cheer at the happy ending — but kids may need to be reminded along the way that yes, there will be a happy ending, and parents may find that the movie raises a lot of questions."}</p>
      <p>{"One question I couldn’t answer was whether real animals were used in the filming of the movie. Given several scenes involving peril to animals, I found myself hoping that the creators made generous use of CGI, as did the makers of “Rise of the Planet of the Apes” and “"}<a href={"http://www.globalanimal.org/2012/02/03/big-miracle-breaks-the-ice/64976/"} target="_blank" rel="noopener noreferrer">{"Big Miracle"}</a>{".” Anyone know?"}</p>
      <p>{"Ages 6 and up; rated G."}</p>
    </div>
  );
}
