import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3872",
  "slug": "of-thee-i-sing",
  "url": "/reviews/of-thee-i-sing/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/13/of-thee-i-sing/",
  "title": "Of Thee I Sing",
  "publishedAt": "2011-01-13",
  "publishedLabel": "January 13th, 2011",
  "excerpt": "Barack Obama’s inspiring children’s book Of Thee I Sing is part love song to his daughters and part ode to the heroes who made this country great. Many of the historical figures featured in this book — such as Helen…",
  "image": {
    "src": "/media/2011/01/978-0-375-93527-5.jpg",
    "alt": "Of Thee I Sing",
    "width": 210,
    "height": 270
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
      "name": "Barack Obama",
      "slug": "barack-obama",
      "url": "/topics/barack-obama/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "George Washington",
      "slug": "george-washington",
      "url": "/topics/george-washington/"
    },
    {
      "name": "Geronimo",
      "slug": "geronimo",
      "url": "/topics/geronimo/"
    },
    {
      "name": "Helen Keller",
      "slug": "helen-keller",
      "url": "/topics/helen-keller/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Jackie Robinson",
      "slug": "jackie-robinson",
      "url": "/topics/jackie-robinson/"
    },
    {
      "name": "Loren Long",
      "slug": "loren-long",
      "url": "/topics/loren-long/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sitting Bull",
      "slug": "sitting-bull",
      "url": "/topics/sitting-bull/"
    },
    {
      "name": "United States",
      "slug": "united-states",
      "url": "/topics/united-states/"
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
    "description": "Barack Obama’s inspiring children’s book Of Thee I Sing is part love song to his daughters and part ode to the heroes who made this country great. Many of the historical figures featured in this book — such as Helen…",
    "image": "https://vegbooks.org/media/2011/01/978-0-375-93527-5.jpg"
  },
  "previous": {
    "title": "Our Choice: Young Readers Edition",
    "url": "/reviews/our-choice-young-readers-edition/"
  },
  "next": {
    "title": "Mixed Beasts",
    "url": "/reviews/mixed-beasts/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/978-0-375-93527-5.jpg"}><img src={"/media/2011/01/978-0-375-93527-5.jpg"} alt={"Of Thee I Sing"} width={210} height={270} /></a>
      </figure>
      <p>{"Barack Obama’s inspiring children’s book "}<em>{"Of Thee I Sing"}</em>{" is part love song to his daughters and part ode to the heroes who made this country great."}</p>
      <p>{"Many of the historical figures featured in this book — such as Helen Keller and Jackie Robinson — are universally loved. Others may provoke discussion. Vegetarians of a pacifist inclination may, for example, want to discuss why George Washington is featured as a wartime general, rather than a statesman, and what roles Geronimo and Sitting Bull played in the wars of the 1800s. (They might also tell children that, while not mentioned in the text, "}<a href={"http://en.wikipedia.org/wiki/Helen_Keller#Political_activities"} target="_blank" rel="noopener noreferrer">{"Helen Keller was a pacifist"}</a>{".)"}</p>
      <p>{"Perhaps one of the most interesting questions raised by this book is, “Which heroes have been left out?” There is no mention of the pioneers of the environmental and animal protection movements, such as "}<a href={"http://www.rachelcarson.org/"} target="_blank" rel="noopener noreferrer">{"Rachel Carson"}</a>{", "}<a href={"http://www.americanheritage.com/articles/magazine/ah/1967/1/1967_1_28.shtml"} target="_blank" rel="noopener noreferrer">{"Henry Bergh"}</a>{", and "}<a href={"http://www.aldoleopold.org/AldoLeopold/leopold_bio.shtml"} target="_blank" rel="noopener noreferrer">{"Aldo Leopold"}</a>{". Children may also be sensitive to the fact that while the text is addressed to President Obama’s daughters, only five of the thirteen Americans are women."}</p>
      <p>{"For fun, vegetarian kids may enjoy checking out "}<a href={"http://en.wikipedia.org/wiki/Category:American_vegetarians"} target="_blank" rel="noopener noreferrer">{"this Wikipedia entry about famous American vegetarians"}</a>{" after they’ve read the book. They’ll note at least one of the book’s figures on the list."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
