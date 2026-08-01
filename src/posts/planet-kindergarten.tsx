import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9977",
  "slug": "planet-kindergarten",
  "url": "/reviews/planet-kindergarten/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/01/05/planet-kindergarten/",
  "title": "Planet Kindergarten",
  "publishedAt": "2015-01-05",
  "publishedLabel": "January 5th, 2015",
  "excerpt": "I put Planet Kindergarten on our library reservation list as soon as I knew it had been released because we love Sue Ganz-Schmitt’s book, The Princess and the Peanut: A Royally Allergic Fairytale (I reviewed it…",
  "image": {
    "src": "/media/2015/01/planet-kindergarten-fc-lo-res.jpg",
    "alt": "Planet Kindergarten_FC_LoRes",
    "width": 210,
    "height": 204
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Kindergarten",
      "slug": "kindergarten",
      "url": "/topics/kindergarten/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Shane Prigmore",
      "slug": "shane-prigmore",
      "url": "/topics/shane-prigmore/"
    },
    {
      "name": "Sue Ganz-Schmitt",
      "slug": "sue-ganz-schmitt",
      "url": "/topics/sue-ganz-schmitt/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "I put Planet Kindergarten on our library reservation list as soon as I knew it had been released because we love Sue Ganz-Schmitt’s book, The Princess and the Peanut: A Royally Allergic Fairytale (I reviewed it…",
    "image": "https://vegbooks.org/media/2015/01/planet-kindergarten-fc-lo-res.jpg"
  },
  "previous": {
    "title": "Turkey Claus",
    "url": "/reviews/turkey-claus/"
  },
  "next": {
    "title": "The Wild Whale Watch (The Magic School Bus Chapter Book #3)",
    "url": "/reviews/wild-whale-watch/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/01/planet-kindergarten-fc-lo-res.jpg"} alt={"Planet Kindergarten_FC_LoRes"} width={210} height={204} />
      </figure>
      <p>{"I put "}<em>{"Planet Kindergarten"}</em>{" on our library reservation list as soon as I knew it had been released because we love Sue Ganz-Schmitt’s book, "}<em>{"The Princess and the Peanut: A Royally Allergic Fairytale"}</em>{" ("}<a href={"http://www.sunbutter.com/blog/telling-kids-about-food-allergies-crack-open-a-great-kid%E2%80%99s-book/"} target="_blank" rel="noopener noreferrer">{"I reviewed it here"}</a>{"). "}<em>{"Planet Kindergarten"}</em>{" did not disappoint. My daughter is 6 and my son is 4 – both understood and loved the parallels between a boy going to his first day of kindergarten and taking a trip into outer space."}</p>
      <p>{"Kids will also love the bright illustrations – Shane Prigmore has contribution credits that include “"}<a href={"http://en.wikipedia.org/wiki/The_Iron_Giant"} target="_blank" rel="noopener noreferrer">{"The Iron Giant"}</a>{"” and there’s a retro vibe to the design for this book that I really enjoyed. I also found myself chuckling at the clever turns of phrase:"}</p>
      <blockquote>
        <p>{"I try to get used to the new atmosphere, but it’s not like home. For one thing, gravity works differently here. We have to try hard to stay in our seats. And our hands go up a lot."}</p>
      </blockquote>
      <p>{"The only mention of food is at lunch, where our protagonist finds he likes “space food” (the drawings are of an apple, grapes, green gel, and fries). I realize we’re well into the school year already but it would be a great gift for a child entering school next year or one that is starting at a new school in a later grade. Looking at school as an adventure is what I hope my kids will do, even though it can seem a little alien at times. Highly recommended for ages 3 and up."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/01/nasa.jpg"} alt={"NASA"} width={436} height={212} />
      </figure>
      <p><em>{"Also, check out "}<a href={"http://www.chroniclebooks.com/titles/planet-kindergarten.html"} target="_blank" rel="noopener noreferrer">{"the official publisher page"}</a>{" for downloads you can print out like a “space food” wrap for a snack bar or “rocket fuel” for a juice box. My favorite is the card that reads “Message from Home Base” so families can continue the space journey theme into their little one’s first days at school. You can also preview some of the book’s interior."}</em></p>
    </div>
  );
}
