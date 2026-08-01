import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3716",
  "slug": "little-owl-lost",
  "url": "/reviews/little-owl-lost/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/12/10/little-owl-lost/",
  "title": "Little Owl Lost",
  "publishedAt": "2010-12-10",
  "publishedLabel": "December 10th, 2010",
  "excerpt": "Little Owl Lost is a sweet book about the tale of an baby owlet lost in the forest. With the help of other forest creatures, he is eventually reunited with his mom. The book’s uniquely colored and stylized…",
  "image": {
    "src": "/media/2010/12/9780763650223.jpg",
    "alt": "Little Owl Lost",
    "width": 210,
    "height": 220
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
      "name": "Chris Haughton",
      "slug": "chris-haughton",
      "url": "/topics/chris-haughton/"
    },
    {
      "name": "Community",
      "slug": "community",
      "url": "/topics/community/"
    },
    {
      "name": "Fear",
      "slug": "fear",
      "url": "/topics/fear/"
    },
    {
      "name": "Forest",
      "slug": "forest",
      "url": "/topics/forest/"
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
      "name": "Overcoming Fear",
      "slug": "overcoming-fear",
      "url": "/topics/overcoming-fear/"
    },
    {
      "name": "Owls",
      "slug": "owls",
      "url": "/topics/owls/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Squirrel",
      "slug": "squirrel",
      "url": "/topics/squirrel/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "Little Owl Lost is a sweet book about the tale of an baby owlet lost in the forest. With the help of other forest creatures, he is eventually reunited with his mom. The book’s uniquely colored and stylized…",
    "image": "https://vegbooks.org/media/2010/12/9780763650223.jpg"
  },
  "previous": {
    "title": "Wurst Case Scenario",
    "url": "/reviews/wurst-case-scenario/"
  },
  "next": {
    "title": "Toy Story (1995)",
    "url": "/reviews/toy-story/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/12/9780763650223.jpg"}><img src={"/media/2010/12/9780763650223.jpg"} alt={"Little Owl Lost"} width={210} height={220} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0763650226"} alt={""} width={1} height={1} />
      </figure>
      <p><a href={"http://www.amazon.com/gp/product/0763650226?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0763650226"} target="_blank" rel="noopener noreferrer"><em>{"Little Owl Lost"}</em></a>{" is a sweet book about the tale of an baby owlet lost in the forest. With the help of other forest creatures, he is eventually reunited with his mom. The book’s uniquely colored and stylized illustrations and font are striking and visually pleasing."}</p>
      <p><em>{"Little Owl Lost"}</em>{" borrows on the theme found in the classic book "}<a href={"http://www.amazon.com/Are-You-Mother-P-D-Eastman/dp/0394800184/ref=sr_1_1?s=books&ie=UTF8&qid=1291749236&sr=1-1"} target="_blank" rel="noopener noreferrer"><em>{"Are You My Mother"}</em>{"?"}</a>{" but we have fun moving through the forest with Little Owl and his friend Squirrel as they search for – and find – Mama Owl by a process of elimination. The themes of helping others who may be scared or vulnerable and the importance of community are well illustrated for young ones."}</p>
      <p>{"I really enjoyed the "}<a href={"http://chrishaughton.com/"} target="_blank" rel="noopener noreferrer">{"author/illustrator Chris Haughton’s"}</a>{" description of the evolution of "}<em>{"Little Owl Lost"}</em>{", which I read about "}<a href={"http://chrishaughton.com/a-bit-lost-the-making-of"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</p>
      <p>{"Recommended for toddlers and up (though note that this is not currently available as a board book)."}</p>
    </div>
  );
}
