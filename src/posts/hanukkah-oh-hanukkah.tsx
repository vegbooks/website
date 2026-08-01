import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6803",
  "slug": "hanukkah-oh-hanukkah",
  "url": "/reviews/hanukkah-oh-hanukkah/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/12/12/hanukkah-oh-hanukkah/",
  "title": "Hanukkah, Oh Hanukkah",
  "publishedAt": "2012-12-12",
  "publishedLabel": "December 12th, 2012",
  "excerpt": "In Hanukkah, Oh Hanukkah(Amazon affiliate link), Susan L. Roth’s collages depict a mouse family celebrating Hanukkah alongside the lyrics to a song about the holiday. The mice light a menorah, dance the hora, eat…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Hanukkah, Oh Hanukkah",
    "width": 210,
    "height": 139
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
      "name": "Collage",
      "slug": "collage",
      "url": "/topics/collage/"
    },
    {
      "name": "Holidays",
      "slug": "holidays",
      "url": "/topics/holidays/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jewish Culture",
      "slug": "jewish-culture",
      "url": "/topics/jewish-culture/"
    },
    {
      "name": "Mice",
      "slug": "mice",
      "url": "/topics/mice/"
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
    "description": "In Hanukkah, Oh Hanukkah(Amazon affiliate link), Susan L. Roth’s collages depict a mouse family celebrating Hanukkah alongside the lyrics to a song about the holiday. The mice light a menorah, dance the hora, eat…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Why Do My Feet Say YES When My Head Says NO?",
    "url": "/reviews/feet-say-yes/"
  },
  "next": {
    "title": "Santa’s Littlest Helper",
    "url": "/reviews/santas-littlest-helper/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Hanukkah, Oh Hanukkah"} width={210} height={139} /></a>
      </figure>
      <p>{"In "}<em>{"Hanukkah, Oh Hanukkah"}</em>{"("}<a href={"http://www.amazon.com/gp/product/0142407011/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0142407011&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{"), Susan L. Roth’s collages depict a mouse family celebrating Hanukkah alongside the lyrics to a song about the holiday. The mice light a menorah, dance the hora, eat latkes (potato pancakes) together, and play with dreidels, all basked in the light of a menorah “to remind us of days long ago.” The book closes with sheet music for the song upon which the book is based."}</p>
      <p>{"For those of us introducing our children to the holiday, the charming illustrations and message of togetherness shines through. Families with older children may want to supplement the book with a more detailed story of the background of Hanukkah but my three-year-old enjoyed this book."}</p>
    </div>
  );
}
