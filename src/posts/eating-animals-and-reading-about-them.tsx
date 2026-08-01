import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2524",
  "slug": "eating-animals-and-reading-about-them",
  "url": "/reviews/eating-animals-and-reading-about-them/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/09/eating-animals-and-reading-about-them/",
  "title": "Eating Animals and Reading About Them",
  "publishedAt": "2010-07-09",
  "publishedLabel": "July 9th, 2010",
  "excerpt": "In its May/June issue, The Horn Book (a leading journal about children’s literature) featured an article by vegetarian and children’s book author Jennifer Armstrong. Ms. Armstrong tackled the apparent inconsistency…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Eating Animals and Reading About Them",
    "width": 238,
    "height": 158
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
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Michael Croland",
      "slug": "michael-croland",
      "url": "/topics/michael-croland/"
    },
    {
      "name": "Raising Vegan Kids",
      "slug": "raising-vegan-kids",
      "url": "/topics/raising-vegan-kids/"
    },
    {
      "name": "The Horn Book",
      "slug": "the-horn-book",
      "url": "/topics/the-horn-book/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
    },
    {
      "name": "Vegan Parents",
      "slug": "vegan-parents",
      "url": "/topics/vegan-parents/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "vegetarian kids",
      "slug": "vegetarian-kids",
      "url": "/topics/vegetarian-kids/"
    }
  ],
  "reviewer": {
    "name": "Michael Croland",
    "slug": "michael-croland",
    "url": "/contributors/michael-croland/",
    "aliases": [
      "MICHAEL CROLAND"
    ]
  },
  "seo": {
    "description": "In its May/June issue, The Horn Book (a leading journal about children’s literature) featured an article by vegetarian and children’s book author Jennifer Armstrong. Ms. Armstrong tackled the apparent inconsistency…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Beachcombing",
    "url": "/reviews/beachcombing/"
  },
  "next": {
    "title": "When Lulu Went to the Zoo",
    "url": "/reviews/when-lulu-went-to-the-zoo/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Eating Animals and Reading About Them"} width={238} height={158} /></a>
      </figure>
      <p>{"In its May/June issue, "}<em>{"The Horn Book"}</em>{" (a leading journal about children’s literature) featured an article by vegetarian and children’s book author Jennifer Armstrong. Ms. Armstrong tackled the apparent inconsistency between feeding animals to children and teaching them to do the right thing by using animals as models for good behavior. Check out "}<a href={"http://www.hbook.com/magazine/articles/2010/may10_armstrong.asp"} target="_blank" rel="noopener noreferrer">{"the full article"}</a>{", and here’s an excerpt:"}</p>
      <p><em>{"[W]hat I am suggesting is that if you love children’s literature, you cannot kill animals just because they taste good on a bun. There’s more than a bit of hypocrisy involved in urging children to empathize with pandas and polar bears and bunnies and ducks in books and at a distance and then feeding them hamburgers and sliced deli meats. The United States kills approximately ten billion land animals every year for human consumption, which works out to over one million animals per hour. No number of books about runaway bunnies, or ducklings negotiating Boston traffic, or terrific and radiant pigs can compensate for that scale of violence, in my opinion. How does a child’s developing moral/ethical self resolve the jarring disconnect between the animal books she is given to read in the library and the animal meat she is given for lunch in the cafeteria? What is she to make of the trusted adult who holds in one hand a living baby chick to caress with tender care and a chicken nugget in the other hand to eat with special sauce?"}</em></p>
      <p>{"Not surprisingly, the article generated a couple of "}<a href={"http://www.hbook.com/magazine/letters/jul10.asp"} target="_blank" rel="noopener noreferrer">{"letters to the editor"}</a>{" in the July/August issue. A self-professed “country girl” defended “the oldest and cruelest law: life feeds on life, and death shows no mercy.” Another letter praised the article for getting the message out there."}</p>
    </div>
  );
}
