import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9310",
  "slug": "jane-and-the-dragon",
  "url": "/reviews/jane-and-the-dragon/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/12/22/jane-and-the-dragon/",
  "title": "Jane and the Dragon",
  "publishedAt": "2013-12-22",
  "publishedLabel": "December 22nd, 2013",
  "excerpt": "There once was a lady in waiting Let’s call her Jane. That girl wasn’t ordinary- No way for me a lady stuck in waiting I’d rather battle fire-breathing dragons I knew I could prove that a girl could be a Knight…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Movie pic",
    "width": 210,
    "height": 321
  },
  "categories": [
    {
      "name": "Television",
      "slug": "television",
      "url": "/television/"
    }
  ],
  "tags": [
    {
      "name": "Courage",
      "slug": "courage",
      "url": "/topics/courage/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Feminism",
      "slug": "feminism",
      "url": "/topics/feminism/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Loyalty",
      "slug": "loyalty",
      "url": "/topics/loyalty/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Princess",
      "slug": "princess",
      "url": "/topics/princess/"
    },
    {
      "name": "Television",
      "slug": "television",
      "url": "/topics/television/"
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
    "description": "There once was a lady in waiting Let’s call her Jane. That girl wasn’t ordinary- No way for me a lady stuck in waiting I’d rather battle fire-breathing dragons I knew I could prove that a girl could be a Knight…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "There Are No Animals in This Book (Only Feelings)",
    "url": "/reviews/no-animals/"
  },
  "next": {
    "title": "The Dirty Socks Come Clean",
    "url": "/reviews/the-dirty-socks-come-clean/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Movie pic"} width={210} height={321} /></a>
      </figure>
      <blockquote>
        <p>{"There once was a lady in waiting"}<br />{" Let’s call her Jane."}<br />{" That girl wasn’t ordinary-"}<br />{" No way for me a lady stuck in waiting"}<br />{" I’d rather battle fire-breathing dragons"}<br />{" I knew I could prove that a girl could be a Knight"}<br />{" Though my friends all laughed at me"}<br />{" but…"}<br />{" I wouldn’t be discouraged and trained in secret"}<br />{" Then a dragon pinched the Royal Prince"}<br />{" and everyone was freaking"}<br />{" So I went alone to the dragon’s home"}<br />{" to slay the dragon"}<br />{" Hey now, hey now now"}<br />{" Jane and the Dragon are best friends now"}<br />{" Dragon’s sweet, he let me save the young Prince"}<br />{" Then the King made me a Knight apprentice"}<br />{" Hey now hey now now…"}<br />{" With Dragon’s help I’ll be a Knight someday"}</p>
      </blockquote>
      <p>{"These are the lyrics to the theme song for the TV series "}<a href={"http://www.qubo.com/shows/jane"} target="_blank" rel="noopener noreferrer"><em>{"Jane and the Dragon"}</em></a>{". The show follows a girl in ninth-century England as she trains to become a knight, aided in her adventures by her best friend, a dragon. My four-year-old daughter loves this show, and I’ll have to admit that it’s growing on me. I avoided it at first because our family tries to avoid anything that even appears to be part of the princess complex. But the more I was exposed to this show, the more I grew to like it. It is an anti-princess show. The lead character Jane does not want to be a princess or a lady – she wants to be a knight. As a knight apprentice, Jane trains and performs various tasks and duties around the castle. Themes of integrity, loyalty, friendship ,and courage are woven through the stories. It’s a show I can get behind – a good show for boys and girls to enjoy and learn from."}</p>
      <p>{"In the show, Jane and the dragon are best friends and he aids her in many of her castle duties and knight training. The back story of how they became friends is not explored within the TV show. It was explained in the original "}<a href={"http://en.wikipedia.org/wiki/Jane_and_the_Dragon"} target="_blank" rel="noopener noreferrer"><em>{"Jane and the Dragon"}</em></a>{" book by Martin Baynton which is now out-of-print. I would love to know more of the back-story, but even without it, there is a strong animal-friendly message to the show."}</p>
      <p>{"I highly recommend this TV show to preschool and early elementary children. The theme song alone provides both a feminist you-can-be-and-do-anything message and an animal-friendly message at the start of each show."}</p>
    </div>
  );
}
