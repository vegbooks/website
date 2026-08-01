import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4239",
  "slug": "the-animal-rescue-store",
  "url": "/reviews/the-animal-rescue-store/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/02/11/the-animal-rescue-store/",
  "title": "The Animal Rescue Store",
  "publishedAt": "2011-02-11",
  "publishedLabel": "February 11th, 2011",
  "excerpt": "“Let me root, root, root for the home team. If they don’t win it’s a shame.” Let’s just say I was rooting for this book, but with more than three strikes The Animal Rescue Store is awash. Based on and inspired by a…",
  "image": {
    "src": "/media/2011/02/97756-animalrescue-4cc.jpg",
    "alt": "The Animal Rescue Store",
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
      "name": "Anne Wilson",
      "slug": "anne-wilson",
      "url": "/topics/anne-wilson/"
    },
    {
      "name": "Books to Avoid",
      "slug": "books-to-avoid",
      "url": "/topics/books-to-avoid/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Elizabeth Swados",
      "slug": "elizabeth-swados",
      "url": "/topics/elizabeth-swados/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "Rats",
      "slug": "rats",
      "url": "/topics/rats/"
    },
    {
      "name": "Snakes",
      "slug": "snakes",
      "url": "/topics/snakes/"
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
    "description": "“Let me root, root, root for the home team. If they don’t win it’s a shame.” Let’s just say I was rooting for this book, but with more than three strikes The Animal Rescue Store is awash. Based on and inspired by a…",
    "image": "https://vegbooks.org/media/2011/02/97756-animalrescue-4cc.jpg"
  },
  "previous": {
    "title": "The People Who Hugged the Trees",
    "url": "/reviews/the-people-who-hugged-the-trees/"
  },
  "next": {
    "title": "The Misadventures of Ori Tang",
    "url": "/reviews/the-misadventures-of-ori-tang/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/02/97756-animalrescue-4cc.jpg"}><img src={"/media/2011/02/97756-animalrescue-4cc.jpg"} alt={"The Animal Rescue Store"} width={210} height={270} /></a>
      </figure>
      <p>{"“Let me root, root, root for the home team. If they don’t win it’s a shame.”"}</p>
      <p>{"Let’s just say I was rooting for this book, but with more than three strikes "}<em><a href={"http://www.arthuralevinebooks.com/book.asp?bookid=85"} target="_blank" rel="noopener noreferrer">{"The Animal Rescue Store"}</a></em>{" is awash. Based on and inspired by a “vagabond zoo” in New York City (more of a pet storefront) run by Buddy Shapiro, the establishment takes in needy animals (llamas, tarantulas, ferrets, guinea pigs) and finds new homes for them. That seems like the making of a good tale, right?"}</p>
      <p>{"Author and “slam poet” Elizabeth Swados writes from both the patron’s and animals’ perspectives, but the resulting text tends to be bipolar, jarred, and at times an incoherent presentation of their thoughts (a fun challenge for any orator).The more flowing poems can be outright damning of the sentience and intelligence of animals: “…But those big poppy eyes / Got no sad or glad. / A-duuuh / They’re cold as – well, fish / They don’t feel nothin’ / Empty inside.” And some critters who do find sanctuary are still in danger: After stating “You boil lobsters / You broil lobsters / You barbeque lobsters,” a girl rescues and informs the crustacean that, “I better close the tank / Because there’s a risk / Of mom boiling you.” The frog, who is also used for practical jokes, doesn’t seem to have a much better fate."}</p>
      <p>{"There are some sweet spots in this publication, such as an elderly Mrs. Finklestein who eagerly wants to adopt a rat, or the young woman who overcomes her fright of snakes to the point where she exclaims, “Hey there sweet snake. / Gimme a kiss / Ssssss.” But overall, this book of poetry is a loose cannon that’s better left in the nosebleed section of the library. For a title that’s written in the same spirit, but with compassion, try Maya Gottfried’s "}<em><a href={"/reviews/good-dog/"}>{"Good Dog"}</a></em>{"."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
