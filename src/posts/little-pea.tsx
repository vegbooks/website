import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4044",
  "slug": "little-pea",
  "url": "/reviews/little-pea/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/25/little-pea/",
  "title": "Little Pea",
  "publishedAt": "2011-01-25",
  "publishedLabel": "January 25th, 2011",
  "excerpt": "There are a few classic books that belong on every nursery shelf. Take for example Goodnight, Moon by Margaret Wise Brown, Guess How Much I Love You by Sam McBratney and Anita Jeram, and Brown Bear, Brown Bear by…",
  "image": {
    "src": "/media/2011/01/little-pea.jpg",
    "alt": "Little Pea",
    "width": 210,
    "height": 210
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
      "name": "Amy Krouse Rosenthal",
      "slug": "amy-krouse-rosenthal",
      "url": "/topics/amy-krouse-rosenthal/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Candy",
      "slug": "candy",
      "url": "/topics/candy/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
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
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jen Corace",
      "slug": "jen-corace",
      "url": "/topics/jen-corace/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
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
    "description": "There are a few classic books that belong on every nursery shelf. Take for example Goodnight, Moon by Margaret Wise Brown, Guess How Much I Love You by Sam McBratney and Anita Jeram, and Brown Bear, Brown Bear by…",
    "image": "https://vegbooks.org/media/2011/01/little-pea.jpg"
  },
  "previous": {
    "title": "The Rainbow Bunch",
    "url": "/reviews/the-rainbow-bunch/"
  },
  "next": {
    "title": "The Secret Life of Mitch Spinach",
    "url": "/reviews/the-secret-life-of-mitch-spinach/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/little-pea.jpg"}><img src={"/media/2011/01/little-pea.jpg"} alt={"Little Pea"} width={210} height={210} /></a>
      </figure>
      <p>{"There are a few classic books that belong on every nursery shelf. Take for example "}<em>{"Goodnight, Moon"}</em>{" by Margaret Wise Brown, "}<em><a href={"/reviews/guess-how-much-i-love-you/"}>{"Guess How Much I Love You"}</a></em>{" by Sam McBratney and Anita Jeram, and "}<em>{"Brown Bear, Brown Bear"}</em>{" by Eric Carle. You know the kind of books I’m talking about. You might hesitate buying them as baby shower gifts, but only because you hope the expectant parents have them already!"}</p>
      <p>{"Add to that list "}<em><a href={"http://www.herbivoreclothing.com/products/Little-Pea-by-Amy-Krouse-Rosenthal,-illustrated-by-Jen-Corace.html"}>{"Little Pea"}</a></em>{" by Amy Krouse Rosenthal. You won’t remember it from your childhood, but it’s the kind of book that you’ll hope your child will remember from hers (or his)."}</p>
      <p>{"Little Pea is an amiable veggie who enjoys doing most things. The problem is, Little Pea can’t seem to stomach the dinner his parents put before him each night. You see, the Peas eat candy every night, and Mama and Papa Pea insist that Little Pea must eat his candy to grow up to be a big, strong pea."}</p>
      <p>{"Not only do children love the silliness of the book — after all, Little Pea wants only to get through his candy so he can devour a big bowl of spinach for dessert — but parents will enjoy the book’s simple and timeless illustrations. And hey, if it encourages some healthy eating to boot, then all the better!"}</p>
      <p>{"Ages birth to 6."}</p>
    </div>
  );
}
