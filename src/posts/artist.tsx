import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1890",
  "slug": "artist",
  "url": "/reviews/artist/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/12/artist/",
  "title": "Artist to Artist",
  "publishedAt": "2010-06-12",
  "publishedLabel": "June 12th, 2010",
  "excerpt": "Artist to Artist is an amazing collection of 23 successful children’s book illustrators/authors giving encouragement and advice to children. Authors like Eric Carle, Tomi dePaola, Leo Lionni, Maurice Sendak, and…",
  "image": {
    "src": "/media/2010/06/artist-to-artist1.jpg",
    "alt": "Artist to Artist",
    "width": 212,
    "height": 257
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
      "name": "Chris Van Allsburg",
      "slug": "chris-van-allsburg",
      "url": "/topics/chris-van-allsburg/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eric Carle",
      "slug": "eric-carle",
      "url": "/topics/eric-carle/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Leo Lionni",
      "slug": "leo-lionni",
      "url": "/topics/leo-lionni/"
    },
    {
      "name": "Maurice Sendak",
      "slug": "maurice-sendak",
      "url": "/topics/maurice-sendak/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Tomi dePaola",
      "slug": "tomi-depaola",
      "url": "/topics/tomi-depaola/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Artist to Artist is an amazing collection of 23 successful children’s book illustrators/authors giving encouragement and advice to children. Authors like Eric Carle, Tomi dePaola, Leo Lionni, Maurice Sendak, and…",
    "image": "https://vegbooks.org/media/2010/06/artist-to-artist1.jpg"
  },
  "previous": {
    "title": "Winston of Churchill",
    "url": "/reviews/winston-of-churchill/"
  },
  "next": {
    "title": "Wild Animals in Captivity",
    "url": "/reviews/animals-in-captivity/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/artist-to-artist1.jpg"}><img src={"/media/2010/06/artist-to-artist1.jpg"} alt={"Artist to Artist"} width={212} height={257} /></a>
      </figure>
      <p><em>{"Artist to Artist"}</em>{" is an amazing collection of 23 successful children’s book illustrators/authors giving encouragement and advice to children. Authors like Eric Carle, Tomi dePaola, Leo Lionni, Maurice Sendak, and Chris Van Allsburg share words of wisdom in a letter format. Also included are photos of the professional artists as children and an artistic self-portrait as well as a fold-out page containing multiple colorful examples of each artist’s work. A wonderfully intimate method of teaching children about art, artists, authors, book illustration, and the variety in creative processes. The fold-out pages make it more interactive for the child and the portraits help them identify each artist/author."}</p>
      <p>{"Although my three year old is a bit young for this book, she enjoyed folding out the pages and looking at the colorful illustrations. This is one I would love to have in my own personal library as a wonderful reference. I am anxious to see if this becomes a series since there are so many wonderful picture book artists out there. The proceeds of the book go to the "}<a href={"http://www.eric-carle.com/museum.html"} target="_blank" rel="noopener noreferrer">{"Eric Carle Museum of Picture Book Art"}</a>{"."}</p>
      <p>{"Ages elementary-adult."}</p>
    </div>
  );
}
