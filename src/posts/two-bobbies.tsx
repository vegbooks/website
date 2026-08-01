import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2991",
  "slug": "two-bobbies",
  "url": "/reviews/two-bobbies/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/01/two-bobbies/",
  "title": "Two Bobbies",
  "publishedAt": "2010-09-01",
  "publishedLabel": "September 1st, 2010",
  "excerpt": "It’s been five years since Hurricane Katrina first struck New Orleans. While much of the city seems to have recuperated, sections like the Lower Ninth Ward look more like untamed fields than once lively homesteads.…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Two Bobbies",
    "width": 210,
    "height": 297
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Animal Welfare Books for Kids",
      "slug": "animal-welfare-books-for-kids",
      "url": "/topics/animal-welfare-books-for-kids/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Chained Dogs",
      "slug": "chained-dogs",
      "url": "/topics/chained-dogs/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Disasters",
      "slug": "disasters",
      "url": "/topics/disasters/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Kirby Larson",
      "slug": "kirby-larson",
      "url": "/topics/kirby-larson/"
    },
    {
      "name": "Mary Nethery",
      "slug": "mary-nethery",
      "url": "/topics/mary-nethery/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "It’s been five years since Hurricane Katrina first struck New Orleans. While much of the city seems to have recuperated, sections like the Lower Ninth Ward look more like untamed fields than once lively homesteads.…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "What’s in My Garden?",
    "url": "/reviews/garden/"
  },
  "next": {
    "title": "Forever Young",
    "url": "/reviews/foreveryoung/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Two Bobbies"} width={210} height={297} /></a>
      </figure>
      <p>{"It’s been five years since Hurricane Katrina first struck New Orleans. While much of the city seems to have recuperated, sections like the Lower Ninth Ward look more like untamed fields than once lively homesteads. And emotional stories like that of the "}<a href={"http://www.twobobbies.com/"} target="_blank" rel="noopener noreferrer"><em>{"Two Bobbies"}</em></a>{" still sit with us, reminding us of our fragility in the face of nature and the importance of keeping our family members, human and non-, safe and close at hand. (Speaking of which, do you have an "}<a href={"http://www.fema.gov/kids/pets.htm"} target="_blank" rel="noopener noreferrer">{"emergency plan"}</a>{" in place for your animal family?)"}</p>
      <p>{"Tailless, but certainly not friendless, blind Bob Cat and previously chained canine, Bobbi, were abandoned (the authors speculate) when Katrina hit. They fended for themselves for four months, enduring hunger, danger and other struggles we can only imagine. The solemn beauty of the book is that it shows the incredible strength of friendship in the midst of harrowing hardship. New Orleans resident and illustrator, "}<a href={"http://jean-cassels.com/"} target="_blank" rel="noopener noreferrer">{"Jean Cassels"}</a>{", does a superb job capturing the stark, post-disaster landscape and the bright future that awaits the unlikely pair of friends. Thanks to Best Friends Animal Society volunteers and a TV appearance on CNN (I <3 you, Anderson Cooper!), the dynamic duo eventually finds a suitable new home."}</p>
      <p>{"Two Bobbies can be used to discuss natural disasters and the need for preparation, volunteering/ animal rescue efforts, what it means to be a good guardian/suitable adopter, and "}<a href={"http://www.unchainyourdog.org/"}>{"chained dog issues"}</a>{". A percentage of the proceeds benefit Best Friends."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
