import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5773",
  "slug": "black-cat",
  "url": "/reviews/black-cat/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/25/black-cat/",
  "title": "Black Cat",
  "publishedAt": "2011-08-25",
  "publishedLabel": "August 25th, 2011",
  "excerpt": "Black Cat is the rhythmic, melodious story of a black cat who moves through the urban environment of New York City — and not the opulent neighborhood that redtailed hawk Pale Male chose as his home. Christopher…",
  "image": {
    "src": "/media/2011/08/black-cat-cover.jpg",
    "alt": "Black Cat",
    "width": 210,
    "height": 258
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Christopher Myers",
      "slug": "christopher-myers",
      "url": "/topics/christopher-myers/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Homeless Animals",
      "slug": "homeless-animals",
      "url": "/topics/homeless-animals/"
    },
    {
      "name": "Homelessness",
      "slug": "homelessness",
      "url": "/topics/homelessness/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "New York City",
      "slug": "new-york-city",
      "url": "/topics/new-york-city/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Black Cat is the rhythmic, melodious story of a black cat who moves through the urban environment of New York City — and not the opulent neighborhood that redtailed hawk Pale Male chose as his home. Christopher…",
    "image": "https://vegbooks.org/media/2011/08/black-cat-cover.jpg"
  },
  "previous": {
    "title": "Moonshot: The Flight of Apollo 11",
    "url": "/reviews/moonshot-the-flight-of-apollo-11/"
  },
  "next": {
    "title": "Magic Trash",
    "url": "/reviews/magic-trash/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/black-cat-cover.jpg"}><img src={"/media/2011/08/black-cat-cover.jpg"} alt={"Black Cat"} width={210} height={258} /></a>
      </figure>
      <p><em><a href={"http://www.amazon.com/gp/product/0590033751/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0590033751"} target="_blank" rel="noopener noreferrer">{"Black Cat"}</a></em>{" is the rhythmic, melodious story of a black cat who moves through the urban environment of New York City — and not the "}<a href={"/reviews/pale-male-citizen-hawk-of-new-york-city/"}>{"opulent neighborhood that redtailed hawk Pale Male chose as his home"}</a>{". "}<a href={"http://www2.scholastic.com/browse/contributor.jsp?id=3258"} target="_blank" rel="noopener noreferrer">{"Christopher Myers’s"}</a>{" graphic collage illustrations captivate us as he takes us through some of the aspects of urban life that are less frequently chronicled in children’s literature. The collages serve to illustrate the answer to the narrator’s question to the black street cat: where is your home? As the feline passes through busy urban streets, decaying housing projects, graffiti covered walls, no-netted basketball hoops and across bodega signs, he corroborates the reader’s suspicion that his home is anywhere he roams."}</p>
      <p>{"Kids who love cats will likely want to talk about life on the streets from the cat’s perspective. This artful book opens the door to important conversations about homeless animals– even those who believe their home is wherever they may roam."}</p>
      <p>{"Ages 4 and up."}</p>
    </div>
  );
}
