import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6611",
  "slug": "teeny-tiny-ernest",
  "url": "/reviews/teeny-tiny-ernest/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/12/27/teeny-tiny-ernest/",
  "title": "Teeny Tiny Ernest",
  "publishedAt": "2011-12-27",
  "publishedLabel": "December 27th, 2011",
  "excerpt": "In Teeny Tiny Ernest, Ernest spends a lot of time navel gazing and fretting about the fact that he is the smallest animal in his cadre of barnyard friends. When he tries silly tricks to make himself appear taller,…",
  "image": {
    "src": "/media/2011/12/teeny-tiny-ernes-rgb.jpg",
    "alt": "Teeny Tiny Ernest",
    "width": 210,
    "height": 169
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
      "name": "Carol A. Camburn",
      "slug": "carol-a-camburn",
      "url": "/topics/carol-a-camburn/"
    },
    {
      "name": "Donkeys",
      "slug": "donkeys",
      "url": "/topics/donkeys/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Laura T. Barnes",
      "slug": "laura-t-barnes",
      "url": "/topics/laura-t-barnes/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Self-Acceptance",
      "slug": "self-acceptance",
      "url": "/topics/self-acceptance/"
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
    "description": "In Teeny Tiny Ernest, Ernest spends a lot of time navel gazing and fretting about the fact that he is the smallest animal in his cadre of barnyard friends. When he tries silly tricks to make himself appear taller,…",
    "image": "https://vegbooks.org/media/2011/12/teeny-tiny-ernes-rgb.jpg"
  },
  "previous": {
    "title": "Snow",
    "url": "/reviews/snow/"
  },
  "next": {
    "title": "Tyrannosaurus Drip",
    "url": "/reviews/tyrannosaurus-drip/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/12/teeny-tiny-ernes-rgb.jpg"}><img src={"/media/2011/12/teeny-tiny-ernes-rgb.jpg"} alt={"Teeny Tiny Ernest"} width={210} height={169} /></a>
      </figure>
      <p>{"In "}<em><a href={"http://www.amazon.com/gp/product/0967468116/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0967468116"} target="_blank" rel="noopener noreferrer">{"Teeny Tiny Ernest"}</a></em>{", Ernest spends a lot of time navel gazing and fretting about the fact that he is the smallest animal in his cadre of barnyard friends. When he tries silly tricks to make himself appear taller, his friends notice his unusual behavior and question him. He reveals that he’s been feeling inadequate, expecting buy-in to his pity party but his friends surprise him. It turns out that they haven’t been thinking about his stature at all because they have been more focused on his friendliness and big heart. In fact, Ernest’s friends point out, there are a number of advantages that come with being small that they can’t enjoy because of their larger size."}</p>
      <p>{"We’ve enjoyed the stories we’ve received to review in "}<a href={"http://barnesyardbooks.com/"} target="_blank" rel="noopener noreferrer">{"this series of picture books about the little donkey and his friends"}</a>{". "}<em>{"Teeny Tiny Ernest"}</em>{" is a particularly nice reminder that we all have our own strengths and challenges and bring our own special gifts to our community. This is a message that I think is especially important for veg kids to have reinforced."}</p>
      <p>{"A great choice for ages 4 and up."}</p>
    </div>
  );
}
