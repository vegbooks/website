import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1805",
  "slug": "growing-vegetable-soup",
  "url": "/reviews/growing-vegetable-soup/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/14/growing-vegetable-soup/",
  "title": "Growing Vegetable Soup",
  "publishedAt": "2010-05-14",
  "publishedLabel": "May 14th, 2010",
  "excerpt": "I enjoy Lois Ehlert’s colorful, captivating books and Growing Vegetable Soup is no exception. Featuring her trademark bold, graphic illustrations and a simple message laid out in large print, she tells a story…",
  "image": {
    "src": "/media/2010/05/9780152325800-lres.jpg",
    "alt": "Growing Vegetable Soup",
    "width": 216,
    "height": 214
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
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Lois Ehlert",
      "slug": "lois-ehlert",
      "url": "/topics/lois-ehlert/"
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
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "I enjoy Lois Ehlert’s colorful, captivating books and Growing Vegetable Soup is no exception. Featuring her trademark bold, graphic illustrations and a simple message laid out in large print, she tells a story…",
    "image": "https://vegbooks.org/media/2010/05/9780152325800-lres.jpg"
  },
  "previous": {
    "title": "Here Comes the Garbage Barge",
    "url": "/reviews/here-comes-the-garbage-barge/"
  },
  "next": {
    "title": "The Cats of Roxville Station",
    "url": "/reviews/cats-roxville/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/9780152325800-lres.jpg"}><img src={"/media/2010/05/9780152325800-lres.jpg"} alt={"Growing Vegetable Soup"} width={216} height={214} /></a>
      </figure>
      <p>{"I enjoy "}<a href={"http://en.wikipedia.org/wiki/Lois_Ehlert"} target="_blank" rel="noopener noreferrer">{"Lois Ehlert’s"}</a>{" colorful, captivating books and "}<em><a href={"http://www.powells.com/biblio/0152050558"} target="_blank" rel="noopener noreferrer">{"Growing Vegetable Soup"}</a></em>{" is no exception. Featuring her trademark bold, graphic illustrations and a simple message laid out in large print, she tells a story perfect for very small children just learning about gardening and growing. Tools are laid out, seeds are planted and with the turn of each page, we delight in watching a vegetable garden sprout and grow. At harvest, a soup is cooked up (the recipe is included in the back) and declared to be the best ever! I especially like that this is a book in which the father appears to be the gardener and cook (many children’s book still feature the mother as grand poo bah around food and kitchen themes)."}</p>
      <p>{"In my part of the world, we are now in the early growing season and I am looking forward to again sharing the the small bits of gardening we do with our kiddo, who is an enthusiastic garden assistant. It is extremely rewarding to see a child nibble her way through the fruits of her labor! Whether or not you have a large plot or just a few herbs or greens in containers, I hope you can share the same experiences with the youngsters in your life. "}<em>{"Growing Vegetable Soup"}</em>{" is an inspiration to do so."}</p>
      <p>{"I recommend this book for ages 2-5."}</p>
    </div>
  );
}
