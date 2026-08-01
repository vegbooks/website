import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5293",
  "slug": "a-dazzling-display-of-dogs",
  "url": "/reviews/a-dazzling-display-of-dogs/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/29/a-dazzling-display-of-dogs/",
  "title": "A Dazzling Display of Dogs",
  "publishedAt": "2011-05-29",
  "publishedLabel": "May 29th, 2011",
  "excerpt": "A Dazzling Display of Dogs is dazzling indeed! The book is comprised of non-linear poems that are set within bright illustrations. Michael Wertz’s graphic illustrations makes each poem sparkle and dance. Author Betsy…",
  "image": {
    "src": "/media/2011/05/978-1-58246-343-8.jpg",
    "alt": "A Dazzling Display of Dogs",
    "width": 210,
    "height": 266
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
      "name": "Animal Shelters",
      "slug": "animal-shelters",
      "url": "/topics/animal-shelters/"
    },
    {
      "name": "Betsy Franco",
      "slug": "betsy-franco",
      "url": "/topics/betsy-franco/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
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
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Michael Wertz",
      "slug": "michael-wertz",
      "url": "/topics/michael-wertz/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "A Dazzling Display of Dogs is dazzling indeed! The book is comprised of non-linear poems that are set within bright illustrations. Michael Wertz’s graphic illustrations makes each poem sparkle and dance. Author Betsy…",
    "image": "https://vegbooks.org/media/2011/05/978-1-58246-343-8.jpg"
  },
  "previous": {
    "title": "Wild Horse Winter",
    "url": "/reviews/wild-horse-winter/"
  },
  "next": {
    "title": "The Secret World of Whales",
    "url": "/reviews/the-secret-world-of-whales/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/978-1-58246-343-8.jpg"}><img src={"/media/2011/05/978-1-58246-343-8.jpg"} alt={"A Dazzling Display of Dogs"} width={210} height={266} /></a>
      </figure>
      <p><em><a href={"http://www.powells.com/biblio/9781582463872?&PID=32442"} target="_blank" rel="noopener noreferrer">{"A Dazzling Display of Dogs"}</a></em>{" is dazzling indeed! The book is comprised of non-linear poems that are set within bright illustrations. "}<a href={"http://www.wertzateria.com/index.html"} target="_blank" rel="noopener noreferrer">{"Michael Wertz’s"}</a>{" graphic illustrations makes each poem sparkle and dance. Author "}<a href={"http://www.betsyfranco.com/"} target="_blank" rel="noopener noreferrer">{"Betsy Franco"}</a>{"keeps her poems short but each captures the essence of the doggie moment. My favorite is “Found at the Pound,” which describes a family’s visit to the shelter, although who can resist “Emmett’s Ode to His Tennis Ball” or “Old Lottie on a Walk”?"}</p>
      <p>{"This is another great book of dog-related poetry that kids ages 4 and up will enjoy reading and looking at."}<strong><br /></strong></p>
    </div>
  );
}
