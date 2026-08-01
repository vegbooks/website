import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4390",
  "slug": "i-love-animals",
  "url": "/reviews/i-love-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/03/i-love-animals/",
  "title": "I Love Animals",
  "publishedAt": "2011-03-03",
  "publishedLabel": "March 3rd, 2011",
  "excerpt": "My toddler loves this book. Its simple repetitiveness keeps her interested to the end, when she often says, “Again.” It starts with the statement “I love animals,” and each page is an expression of love for a…",
  "image": {
    "src": "/media/2011/03/9781564026620.jpg",
    "alt": "I Love Animals",
    "width": 210,
    "height": 252
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Ducks",
      "slug": "ducks",
      "url": "/topics/ducks/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Flora McDonnell",
      "slug": "flora-mcdonnell",
      "url": "/topics/flora-mcdonnell/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "My toddler loves this book. Its simple repetitiveness keeps her interested to the end, when she often says, “Again.” It starts with the statement “I love animals,” and each page is an expression of love for a…",
    "image": "https://vegbooks.org/media/2011/03/9781564026620.jpg"
  },
  "previous": {
    "title": "14 Cows for America",
    "url": "/reviews/14-cows-for-america/"
  },
  "next": {
    "title": "The Three Pigs",
    "url": "/reviews/the-three-pigs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/9781564026620.jpg"}><img src={"/media/2011/03/9781564026620.jpg"} alt={"I Love Animals"} width={210} height={252} /></a>
      </figure>
      <p>{"My toddler loves this book. Its simple repetitiveness keeps her interested to the end, when she often says, “Again.” It starts with the statement “I love animals,” and each page is an expression of love for a different farm animal. “I love the ducks waddling to the water. I love the donkeys braying hee-haw.” After each statement, my daughter looks at me earnestly and repeats the animal love. “Mommy, I love ducks.” It’s adorable. The book ends with “I love animals and I hope they love me,” and shows a little girl surrounded by all of the animals."}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1564026620"} alt={""} width={1} height={1} />
      </figure>
      <p>{"For vegetarian parents, what’s not to love? Typical farm animals are featured, but no mention is made of them being on a farm. The simple, earnest love for animals is the base reason many of us are vegetarians. "}<a href={"http://www.amazon.com/gp/product/1564026620?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1564026620"} target="_blank" rel="noopener noreferrer">{"This book"}</a>{" helps us share this love of animals with our youngsters."}</p>
      <p>{"Ages Baby-Toddler."}</p>
    </div>
  );
}
