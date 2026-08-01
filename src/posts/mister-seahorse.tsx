import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6219",
  "slug": "mister-seahorse",
  "url": "/reviews/mister-seahorse/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/03/mister-seahorse/",
  "title": "Mister Seahorse",
  "publishedAt": "2011-11-03",
  "publishedLabel": "November 3rd, 2011",
  "excerpt": "We are big Eric Carle fans but it was not until recently that we got a copy of Mister Seahorse in board book form. It follows Mister Seahorse through the ocean as he cares for his and Mrs. Seahorse’s eggs. On his way…",
  "image": {
    "src": "/media/2011/10/mister-seahorse.jpg",
    "alt": "Mister Seahorse",
    "width": 210,
    "height": 300
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
      "name": "Father's Day",
      "slug": "fathers-day",
      "url": "/topics/fathers-day/"
    },
    {
      "name": "Fathers",
      "slug": "fathers",
      "url": "/topics/fathers/"
    },
    {
      "name": "Fish",
      "slug": "fish",
      "url": "/topics/fish/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Oceans",
      "slug": "oceans",
      "url": "/topics/oceans/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Seahorses",
      "slug": "seahorses",
      "url": "/topics/seahorses/"
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
    "description": "We are big Eric Carle fans but it was not until recently that we got a copy of Mister Seahorse in board book form. It follows Mister Seahorse through the ocean as he cares for his and Mrs. Seahorse’s eggs. On his way…",
    "image": "https://vegbooks.org/media/2011/10/mister-seahorse.jpg"
  },
  "previous": {
    "title": "Re-Craft",
    "url": "/reviews/re-craft/"
  },
  "next": {
    "title": "Turk and Runt",
    "url": "/reviews/turk-and-runt/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/10/mister-seahorse.jpg"}><img src={"/media/2011/10/mister-seahorse.jpg"} alt={"Mister Seahorse"} width={210} height={300} /></a>
      </figure>
      <p>{"We are big Eric Carle fans but it was not until recently that we got a copy of "}<a href={"http://www.amazon.com/gp/product/0399254900/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0399254900"} target="_blank" rel="noopener noreferrer"><em>{"Mister Seahorse"}</em></a>{" in board book form. It follows Mister Seahorse through the ocean as he cares for his and Mrs. Seahorse’s eggs. On his way he meets with other fathers caring for their young. Interspersed between each of the fellow fathers are clear plastic pages of scenery that highlight the protective coloration of various sea creatures he encounters as well. At the end of his journey, Mister Seahorse’s eggs hatch. When one baby seahorse tries to return to his father’s pouch, Mister Seahorse says that “I do love you, but now you are ready to be on your own.”"}</p>
      <p>{"I loved the science components of this book, it sparked some really good discussions about camouflage with my three year old and my one year old enjoyed the feel of the plastic pages. The note from the author explains that most fish families leave eggs on their own after laying them. “But there are exceptions such as the seahorse, stickleback, tilapia, Kurtus nurseryfish, pipefish, bullhead catfish, and some others.”"}</p>
      <p>{"The illustrations are engaging and I think books that share the beauty of the oceans and the wildlife contained therein are a great choice for veg families. Another great Eric Carle book!"}</p>
      <p>{"Ages 3 and up."}</p>
    </div>
  );
}
