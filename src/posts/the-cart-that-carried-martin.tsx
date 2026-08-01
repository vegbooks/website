import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9103",
  "slug": "the-cart-that-carried-martin",
  "url": "/reviews/the-cart-that-carried-martin/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/10/05/the-cart-that-carried-martin/",
  "title": "The Cart that Carried Martin",
  "publishedAt": "2013-10-05",
  "publishedLabel": "October 5th, 2013",
  "excerpt": "Eve Bunting’s latest work has my passion for animals, culture, history, artifacts, and social justice all wrapped up into one children’s book that addresses a brief, albeit important moment in our nation’s collective…",
  "image": {
    "src": "/media/2013/10/cart-that-carried-martin-300.jpg",
    "alt": "CartThatCarriedMartin_300",
    "width": 210,
    "height": 190
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Civil Rights",
      "slug": "civil-rights",
      "url": "/topics/civil-rights/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eve Bunting",
      "slug": "eve-bunting",
      "url": "/topics/eve-bunting/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Martin Luther King",
      "slug": "martin-luther-king",
      "url": "/topics/martin-luther-king/"
    },
    {
      "name": "Mules",
      "slug": "mules",
      "url": "/topics/mules/"
    },
    {
      "name": "Social Justice",
      "slug": "social-justice",
      "url": "/topics/social-justice/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Eve Bunting’s latest work has my passion for animals, culture, history, artifacts, and social justice all wrapped up into one children’s book that addresses a brief, albeit important moment in our nation’s collective…",
    "image": "https://vegbooks.org/media/2013/10/cart-that-carried-martin-300.jpg"
  },
  "previous": {
    "title": "Violet Mackerel’s Natural Habitat",
    "url": "/reviews/violet/"
  },
  "next": {
    "title": "Desert Island Disc",
    "url": "/reviews/desert-island-disc/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/10/cart-that-carried-martin-300.jpg"}><img src={"/media/2013/10/cart-that-carried-martin-300.jpg"} alt={"CartThatCarriedMartin_300"} width={210} height={190} /></a>
      </figure>
      <p>{"Eve Bunting’s latest work has my passion for animals, culture, history, artifacts, and social justice all wrapped up into one children’s book that addresses a brief, albeit important moment in our nation’s collective memory: the funeral procession of Martin Luther King Jr."}</p>
      <p><em><a href={"http://www.charlesbridge.com/productdetails.cfm?PC=5786"} target="_blank" rel="noopener noreferrer">{"The Cart that Carried Martin"}</a></em>{"doesn’t focus on Dr. King’s civil rights efforts, but on the mourning rituals that were carried out to honor his life and legacy. A simple wooden cart was discovered outside an antique shop, painted green, and selected to transport Martin from the church, through the streets of Atlanta, Georgia and finally to Morehouse College. This is how museum-housed artifacts are made. Simple, everyday objects that had a front row seat to historic events."}</p>
      <p>{"You know who else has a front row seat more often than we realize? Animals. Belle and Ada were the two mules that pulled the cart –"}</p>
      <blockquote>
        <p>{"“Ordinary mules for an ordinary funeral,” the people told one another. “That was what he wanted.”"}</p>
        <p>{"“The mule is a symbol of freedom,” someone said. “Each slave got a mule and forty acres when he was freed.”"}</p>
      </blockquote>
      <p>{"Isn’t it interesting that mules are considered symbols of freedom, but are domesticated and used for labor purposes themselves?"}</p>
      <p>{"The mules take readers through the crowded streets and church scenes, where it becomes clear that this man is not gone. His great spirit lives on. In our hearts. In our memories. In our values. The beautiful art of Don Tate matches Bunting’s eloquent prose and truly brings this momentous occasion and King’s legacy to light."}</p>
      <p>{"The cart can now be seen at the "}<a href={"http://www.nps.gov/malu/index.htm"} target="_blank" rel="noopener noreferrer">{"Martin Luther King Jr. National Historic Site"}</a>{". Dr. King’s love for animals continues with his widow, Coretta Scott King, who follows a vegan lifestyle."}</p>
      <p>{"Ages 6 – 9."}</p>
    </div>
  );
}
