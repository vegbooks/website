import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5962",
  "slug": "the-lucky-lobsters",
  "url": "/reviews/the-lucky-lobsters/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/02/the-lucky-lobsters/",
  "title": "The Lucky Lobsters",
  "publishedAt": "2011-09-02",
  "publishedLabel": "September 2nd, 2011",
  "excerpt": "Life isn’t so lucky for most lobsters. Snatched from their habitats, they are kept in crowded tanks until they’re bought and boiled alive. Given new evidence that despite their simple nervous systems, lobsters may…",
  "image": {
    "src": "/media/2011/08/lucky-lobsters.jpg",
    "alt": "The Lucky Lobsters",
    "width": 210,
    "height": 263
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
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Animal Suffering",
      "slug": "animal-suffering",
      "url": "/topics/animal-suffering/"
    },
    {
      "name": "Books for Vegetarian Kids",
      "slug": "books-for-vegetarian-kids",
      "url": "/topics/books-for-vegetarian-kids/"
    },
    {
      "name": "Crustaceans",
      "slug": "crustaceans",
      "url": "/topics/crustaceans/"
    },
    {
      "name": "E-Books",
      "slug": "e-books",
      "url": "/topics/e-books/"
    },
    {
      "name": "Gary Dorion",
      "slug": "gary-dorion",
      "url": "/topics/gary-dorion/"
    },
    {
      "name": "Jennifer Taylor",
      "slug": "jennifer-taylor",
      "url": "/topics/jennifer-taylor/"
    },
    {
      "name": "Lobsters",
      "slug": "lobsters",
      "url": "/topics/lobsters/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
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
    "description": "Life isn’t so lucky for most lobsters. Snatched from their habitats, they are kept in crowded tanks until they’re bought and boiled alive. Given new evidence that despite their simple nervous systems, lobsters may…",
    "image": "https://vegbooks.org/media/2011/08/lucky-lobsters.jpg"
  },
  "previous": {
    "title": "Chick ‘n’ Pug",
    "url": "/reviews/chick-n-pug/"
  },
  "next": {
    "title": "Bears, Bees & Butterflies",
    "url": "/reviews/bears-bees-butterflies/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/lucky-lobsters.jpg"}><img src={"/media/2011/08/lucky-lobsters.jpg"} alt={"The Lucky Lobsters"} width={210} height={263} /></a>
      </figure>
      <p>{"Life isn’t so lucky for most lobsters. Snatched from their habitats, they are kept in crowded tanks until they’re bought and boiled alive. Given new evidence that despite their simple nervous systems, lobsters may "}<a href={"http://dsc.discovery.com/news/2009/03/27/crab-lobster-pain.html"} target="_blank" rel="noopener noreferrer">{"feel pain"}</a>{" and I think you’d be hard pressed to find any human who’d be willing to trade their lot for the life of a lobster."}</p>
      <p>{"Into this sad state of affairs, enter Gary Dorion’s children’s book, "}<em>{"The Lucky Lobsters."}</em>{"Written after he "}<a href={"http://gary-dorion.blogspot.com/2011/08/no-exit-lucky-lobsters-why-i-wrote-this.html"} target="_blank" rel="noopener noreferrer">{"liberated some crustaceans"}</a>{" from traps in the Atlantic Ocean, this book looks at life from the lobster’s point of view. The characters in Dorion’s story face the same unenviable fate as so many of their kin, but instead of being boiled alive, they find themselves returned home. Talk about lucky."}</p>
      <p>{"The storybook lobsters are not freed from their traps underwater, like the lobsters Dorion encountered while diving. Instead, he chose for their freedom to be purchased. As a vegan, I would never buy lobsters from a store in order to free them, because I wouldn’t want my purchase to support lobster-fishing and -selling — but I understand Dorion’s choice. First, I think this approach may be more palatable to some parents, who want to present bright-line rules about stealing to their children. Second, this decision allows the reader to experience what a store lobster tank must be like from a lobster’s perspective. I, for one, had never considered that in addition to crowding, the lobsters may face hunger, since there is no food in the tank."}</p>
      <p><a href={"http://www.amazon.com/gp/product/1412046610/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1412046610"} target="_blank" rel="noopener noreferrer">{"This book"}</a>{" is a great choice for vegetarian and vegan children ages 5-8."}</p>
    </div>
  );
}
