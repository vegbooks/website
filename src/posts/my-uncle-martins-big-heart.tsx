import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2745",
  "slug": "my-uncle-martins-big-heart",
  "url": "/reviews/my-uncle-martins-big-heart/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/03/my-uncle-martins-big-heart/",
  "title": "My Uncle Martin’s Big Heart",
  "publishedAt": "2010-08-03",
  "publishedLabel": "August 3rd, 2010",
  "excerpt": "Angela Farris Watkins recounts her childhood memories of the Rev. Martin Luther King Jr. in the forthcoming book, My Uncle Martin’s Big Heart. Her recollections are warm and personal, and give children an opportunity…",
  "image": {
    "src": "/media/2010/08/my-uncle-martin.jpg",
    "alt": "My Uncle Martin’s Big Heart",
    "width": 210,
    "height": 275
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
      "name": "Activism",
      "slug": "activism",
      "url": "/topics/activism/"
    },
    {
      "name": "Angela Farris Watkins",
      "slug": "angela-farris-watkins",
      "url": "/topics/angela-farris-watkins/"
    },
    {
      "name": "Civil Rights",
      "slug": "civil-rights",
      "url": "/topics/civil-rights/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eric Velasquez",
      "slug": "eric-velasquez",
      "url": "/topics/eric-velasquez/"
    },
    {
      "name": "Martin Luther King",
      "slug": "martin-luther-king",
      "url": "/topics/martin-luther-king/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Social Justice",
      "slug": "social-justice",
      "url": "/topics/social-justice/"
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
    "description": "Angela Farris Watkins recounts her childhood memories of the Rev. Martin Luther King Jr. in the forthcoming book, My Uncle Martin’s Big Heart. Her recollections are warm and personal, and give children an opportunity…",
    "image": "https://vegbooks.org/media/2010/08/my-uncle-martin.jpg"
  },
  "previous": {
    "title": "Unlovable",
    "url": "/reviews/unlovable/"
  },
  "next": {
    "title": "The Blues Go Birding at Wild America’s Shores",
    "url": "/reviews/the-blues-go-birding-at-wild-americas-shores/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/my-uncle-martin.jpg"}><img src={"/media/2010/08/my-uncle-martin.jpg"} alt={"My Uncle Martin’s Big Heart"} width={210} height={275} /></a>
      </figure>
      <p>{"Angela Farris Watkins recounts her childhood memories of the Rev. Martin Luther King Jr. in the forthcoming book, "}<em>{"My Uncle Martin’s Big Heart"}</em>{". Her recollections are warm and personal, and give children an opportunity to understand what motivated one of the most successful social justice movements of the 20th century. "}<a href={"http://www.ericvelasquez.com/"} target="_blank" rel="noopener noreferrer">{"Eric Velasquez’s"}</a>{" portrait-like illustrations help underscore the importance of the subjects of this book, both Dr. King and the cause he led."}</p>
      <p>{"As the title of her book suggests, Dr. Watkins finds that what made her uncle so special from her perspective is what also motivated his politics: his love. Readers are left asking themselves: How can we bring about Dr. King’s view of a world of equality today? How does our love — for our families, our communities, "}<a href={"http://www.usatoday.com/news/nation/2008-01-27-animal-activists_N.htm"} target="_blank" rel="noopener noreferrer">{"animals"}</a>{", or the environment — motivate our actions?"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
