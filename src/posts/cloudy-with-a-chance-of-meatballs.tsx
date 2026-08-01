import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4626",
  "slug": "cloudy-with-a-chance-of-meatballs",
  "url": "/reviews/cloudy-with-a-chance-of-meatballs/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/17/cloudy-with-a-chance-of-meatballs/",
  "title": "Cloudy with a Chance of Meatballs (2009)",
  "publishedAt": "2011-04-17",
  "publishedLabel": "April 17th, 2011",
  "excerpt": "Don’t let the title put you off too much. “Cloudy with a Chance of Meatballs” is actually a decent animated flick. While there aren’t strong animal or environmental themes, vegetarians will be interested to know that…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Cloudy with a Chance of Meatballs (2009)",
    "width": 210,
    "height": 315
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
      "name": "Consumption of Meat",
      "slug": "consumption-of-meat",
      "url": "/topics/consumption-of-meat/"
    },
    {
      "name": "Depictions of Meat in Film",
      "slug": "depictions-of-meat-in-film",
      "url": "/topics/depictions-of-meat-in-film/"
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
      "name": "Food Choices",
      "slug": "food-choices",
      "url": "/topics/food-choices/"
    },
    {
      "name": "Genetically Modified Food",
      "slug": "genetically-modified-food",
      "url": "/topics/genetically-modified-food/"
    },
    {
      "name": "Meteorology",
      "slug": "meteorology",
      "url": "/topics/meteorology/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Science",
      "slug": "science",
      "url": "/topics/science/"
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
    "description": "Don’t let the title put you off too much. “Cloudy with a Chance of Meatballs” is actually a decent animated flick. While there aren’t strong animal or environmental themes, vegetarians will be interested to know that…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "What Is Easter?",
    "url": "/reviews/what-is-easter/"
  },
  "next": {
    "title": "The Great Pig Search",
    "url": "/reviews/the-great-pig-search/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Cloudy with a Chance of Meatballs (2009)"} width={210} height={315} /></a>
      </figure>
      <p>{"Don’t let the title put you off too much. “"}<a href={"http://www.sonypictures.com/movies/cloudywithachanceofmeatballs/"} target="_blank" rel="noopener noreferrer">{"Cloudy with a Chance of Meatballs"}</a>{"” is actually a decent animated flick. While there aren’t strong animal or environmental themes, vegetarians will be interested to know that this movie emphasizes eating in moderation — and that the meatballs in the title don’t actually come from animals."}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0689707495"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Based on "}<a href={"http://www.amazon.com/gp/product/0689707495/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0689707495"}>{"the book by Judi and Ron Barrett"}</a>{", this movie is one that is likely to appeal to a wide range of ages. We’ve seen it twice now. Kiddo loves the music and the fast pace, and I appreciate its emphasis on science and discovery, as well as the innocent love story between the protagonist, an inventor, and a meteorologist who’s trying to pass as a ditzy weather girl."}</p>
      <p>{"There are two animal issues that parents should be aware of. First, the inventor fits his monkey-companion Steve with a thought-translating device, which reveals that he doesn’t think about much more than food. Second, there is a scary scene in which genetically modified headless chicken carcasses come to life and attack people. It ends up being more silly than scary, but still …."}</p>
      <p>{"Veggie families might find that this film inspires some interesting conversation. Would you, for example, eat "}<a href={"http://www.peta.org/b/thepetafiles/archive/2008/04/21/Lab-Meat-Tastes-Like-a-Million-Bucks.aspx"}>{"meat from a laboratory"}</a>{"? Is genetic modification a good idea?"}</p>
      <p>{"Ages 5 and up."}</p>
    </div>
  );
}
