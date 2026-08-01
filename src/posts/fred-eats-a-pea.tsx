import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6740",
  "slug": "fred-eats-a-pea",
  "url": "/reviews/fred-eats-a-pea/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/04/fred-eats-a-pea/",
  "title": "Fred Eats a Pea",
  "publishedAt": "2012-01-04",
  "publishedLabel": "January 4th, 2012",
  "excerpt": "This book tells the story of a real life dog named Fred who goes from a non-veg home to a vegan one when his caretaker, Gertie, becomes too ill to care for him. A large portion of the story sets up how Fred prefers…",
  "image": {
    "src": "/media/2012/01/fred-by-paula-weiner-cover.jpg",
    "alt": "Fred Eats a Pea",
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
      "name": "Aging",
      "slug": "aging",
      "url": "/topics/aging/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Food",
      "slug": "food",
      "url": "/topics/food/"
    },
    {
      "name": "Food Choices",
      "slug": "food-choices",
      "url": "/topics/food-choices/"
    },
    {
      "name": "Healthy Choices",
      "slug": "healthy-choices",
      "url": "/topics/healthy-choices/"
    },
    {
      "name": "Healthy Eating",
      "slug": "healthy-eating",
      "url": "/topics/healthy-eating/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illness",
      "slug": "illness",
      "url": "/topics/illness/"
    },
    {
      "name": "Paula Weiner",
      "slug": "paula-weiner",
      "url": "/topics/paula-weiner/"
    },
    {
      "name": "Peas",
      "slug": "peas",
      "url": "/topics/peas/"
    },
    {
      "name": "Tiffany Whitfield",
      "slug": "tiffany-whitfield",
      "url": "/topics/tiffany-whitfield/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegan Childrens Books",
      "slug": "vegan-childrens-books",
      "url": "/topics/vegan-childrens-books/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
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
    "description": "This book tells the story of a real life dog named Fred who goes from a non-veg home to a vegan one when his caretaker, Gertie, becomes too ill to care for him. A large portion of the story sets up how Fred prefers…",
    "image": "https://vegbooks.org/media/2012/01/fred-by-paula-weiner-cover.jpg"
  },
  "previous": {
    "title": "Vegan Pregnancy Survival Guide",
    "url": "/reviews/vegan-pregnancy-survival-guide/"
  },
  "next": {
    "title": "Grow It Yourself!",
    "url": "/reviews/grow-it-yourself/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/01/fred-by-paula-weiner-cover.jpg"}><img src={"/media/2012/01/fred-by-paula-weiner-cover.jpg"} alt={"Fred Eats a Pea"} width={210} height={204} /></a>
      </figure>
      <p><a href={"http://www.veganstore.com/product/book-fred-eats-a-pea/new-products"} target="_blank" rel="noopener noreferrer">{"This book"}</a>{" tells the story of a real life dog named Fred who goes from a non-veg home to a vegan one when his caretaker, Gertie, becomes too ill to care for him."}</p>
      <p>{"A large portion of the story sets up how Fred prefers people food over dog food but does not like peas, even spitting out the pea from a chicken pot pie while an in-home nurse visits the elderly Gertie. With so much set up, I was surprised that the book quickly resolved when Fred one day decided he liked fresh peas from the garden. Though the book indicates that his sudden affection for peas relates both to his bravery and to his physical similarity to a cow, I didn’t really understand the impetus for the change, nor is it particularly helpful for families working through aversions to particular foods. Still, the resolution — “He ate the pea…and now Fred loves PEAS!” — may encourage some kids to try their peas."}</p>
      <p>{"The illustrations are a little stark but sweet and you can feel that this book was a labor of love. The book concludes with a photo of the real Fred and a loving note from the author in her mother’s memory. There is also a recipe for pasta with a peanut butter sauce and peas but it was not anything we could test due to food allergies."}</p>
      <p>{"Some vegans will smile at the description of the vegan family who takes care of Fred — “‘Vegan’ meant that they do not eat or use anything made from animals. They love animals so much that they regularly go to the country to visit cows, chickens, pigs, lambs, and other animals. There were six frogs, four cats, one dog and a girl named Lauren in the family, along with her parents of course.” Still, the unresolved questions raised by illness, an in-home nurse, and the disappearance of Gertie can be confusing and upsetting for children. The story would be more suited for a chapter book for older kids, so that the themes could be fleshed out for discussion. I know my daughter was most worried about where Gertie went and why Fred had to leave her. I do realize this is meant as a true to life tale, and thus creative storytelling can be slightly limited, but there are too many themes at play for it to be ready for the inquisitive picture book crowd."}</p>
    </div>
  );
}
