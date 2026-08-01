import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6789",
  "slug": "one-more-acorn",
  "url": "/reviews/one-more-acorn/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/21/one-more-acorn/",
  "title": "One More Acorn",
  "publishedAt": "2012-01-21",
  "publishedLabel": "January 21st, 2012",
  "excerpt": "In honor of Squirrel Appreciation Day, I thought it would be appropriate to review a book that my daughter received from some fellow squirrel enthusiasts entitled One More Acorn. The story follows a father grey…",
  "image": {
    "src": "/media/2012/01/9780670010837-medium-one-more-acorn.jpg",
    "alt": "One More Acorn",
    "width": 210,
    "height": 181
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
      "name": "Autumn",
      "slug": "autumn",
      "url": "/topics/autumn/"
    },
    {
      "name": "Civil Rights",
      "slug": "civil-rights",
      "url": "/topics/civil-rights/"
    },
    {
      "name": "Don Freeman",
      "slug": "don-freeman",
      "url": "/topics/don-freeman/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fall",
      "slug": "fall",
      "url": "/topics/fall/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "President Kennedy",
      "slug": "president-kennedy",
      "url": "/topics/president-kennedy/"
    },
    {
      "name": "Roy Freeman",
      "slug": "roy-freeman",
      "url": "/topics/roy-freeman/"
    },
    {
      "name": "Seasons",
      "slug": "seasons",
      "url": "/topics/seasons/"
    },
    {
      "name": "Squirrels",
      "slug": "squirrels",
      "url": "/topics/squirrels/"
    },
    {
      "name": "Urban Wildlife",
      "slug": "urban-wildlife",
      "url": "/topics/urban-wildlife/"
    },
    {
      "name": "Washington D.C.",
      "slug": "washington-d-c",
      "url": "/topics/washington-d-c/"
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
    "description": "In honor of Squirrel Appreciation Day, I thought it would be appropriate to review a book that my daughter received from some fellow squirrel enthusiasts entitled One More Acorn. The story follows a father grey…",
    "image": "https://vegbooks.org/media/2012/01/9780670010837-medium-one-more-acorn.jpg"
  },
  "previous": {
    "title": "Born to Be Wild (2012)",
    "url": "/reviews/born-to-be-wild/"
  },
  "next": {
    "title": "From Trash to Treasure",
    "url": "/reviews/from-trash-to-treasure/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/01/9780670010837-medium-one-more-acorn.jpg"}><img src={"/media/2012/01/9780670010837-medium-one-more-acorn.jpg"} alt={"One More Acorn"} width={210} height={181} /></a>
      </figure>
      <p>{"In honor of "}<a href={"http://www.washingtonpost.com/blogs/the-buzz/post/squirrel-appreciation-day-lets-hear-it-for-sciuridae/2012/01/20/gIQABngFEQ_blog.html"} target="_blank" rel="noopener noreferrer">{"Squirrel Appreciation Day"}</a>{", I thought it would be appropriate to review a book that my daughter received from some fellow squirrel enthusiasts entitled "}<em><a href={"http://www.kirkusreviews.com/book-reviews/don-freeman/one-more-acorn/"} target="_blank" rel="noopener noreferrer">{"One More Acorn"}</a></em>{"."}</p>
      <p>{"The story follows a father grey squirrel in the late fall, as he searches for a buried acorn. People have descended upon Washington, D.C., the city in which the squirrel lives, for a parade, and he anxiously scurries around their feet in search of "}<em>{"one more acorn"}</em>{". Set against a stunning backdrop that includes "}<a href={"http://www.nps.gov/nr/travel/wash/dc30.htm"} target="_blank" rel="noopener noreferrer">{"Lafayette Square"}</a>{" and the Washington Monument, the book sets the drama in the squirrel’s life — finding food for his family to last the winter — against the drama of out-of-town visitors gathered in the nation’s capital for what is clearly a monumental event."}</p>
      <p>{"The real drama and charm of this book, however, are in the story behind the story. Written and illustrated in both the 1960s and the early 2000s, this picture book represents a collaboration between a son and his father, Don Freeman, the author and illustrator of some of the most beloved children’s books, including "}<em><a href={"http://www.commonsensemedia.org/book-reviews/corduroy"} target="_blank" rel="noopener noreferrer">{"Corduroy"}</a></em>{". A note at the end of the book explains that Don Freeman began the book when he visited Washington to cover hearings on the Civil Rights Bill in 1963 for "}<em>{"Christian Science Monitor"}</em>{". Saddened, however, by the subsequent assassination of President Kennedy, the elder Freeman never finished the book, and it wasn’t until his son, Roy Freeman, inherited his father’s sketch books and notes that the story was completed."}</p>
      <p>{"The end result is a beautiful, seamless book that will enchant children and adults alike. It’s a great pick for anyone who likes squirrels, and would be particularly apt as reading material during a visit to Washington."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
