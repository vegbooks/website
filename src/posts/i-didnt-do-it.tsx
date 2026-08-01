import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4487",
  "slug": "i-didnt-do-it",
  "url": "/reviews/i-didnt-do-it/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/13/i-didnt-do-it/",
  "title": "I Didn’t Do It",
  "publishedAt": "2011-03-13",
  "publishedLabel": "March 13th, 2011",
  "excerpt": "Dog lovers will be especially appreciative of Patricia MacLachlan and Emily MacLachlan Charest’s I Didn’t Do It, a short volume of poems illustrating various facets of life from a dog’s perspective. All of the dogs…",
  "image": {
    "src": "/media/2011/04/t-do-it.jpg",
    "alt": "I Didn’t Do It",
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Emily MacLachlan Charest",
      "slug": "emily-maclachlan-charest",
      "url": "/topics/emily-maclachlan-charest/"
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
      "name": "Katy Schneider",
      "slug": "katy-schneider",
      "url": "/topics/katy-schneider/"
    },
    {
      "name": "Patricia MacLachlan",
      "slug": "patricia-maclachlan",
      "url": "/topics/patricia-maclachlan/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
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
    "description": "Dog lovers will be especially appreciative of Patricia MacLachlan and Emily MacLachlan Charest’s I Didn’t Do It, a short volume of poems illustrating various facets of life from a dog’s perspective. All of the dogs…",
    "image": "https://vegbooks.org/media/2011/04/t-do-it.jpg"
  },
  "previous": {
    "title": "Abe Lincoln Loved Animals",
    "url": "/reviews/abe-lincoln-loved-animals/"
  },
  "next": {
    "title": "No Ordinary Olive",
    "url": "/reviews/no-ordinary-olive/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/t-do-it.jpg"}><img src={"/media/2011/04/t-do-it.jpg"} alt={"I Didn’t Do It"} width={210} height={258} /></a>
      </figure>
      <p>{"Dog lovers will be especially appreciative of Patricia MacLachlan and Emily MacLachlan Charest’s "}<a href={"http://www.powells.com/biblio/1-9780061358333-2"} target="_blank" rel="noopener noreferrer"><em>{"I Didn’t Do It"}</em></a>{", a short volume of poems illustrating various facets of life from a dog’s perspective. All of the dogs in the story appear to be both loving and loved, if not a little bit silly sometimes. Illustrator Katy Schneider evocatively illustrates each poem to provide a real sense of the individual dogs, their voices and their stories. In our home, we especially like the poem about what the dog likes…and the one about what the dog does not like!"}</p>
      <p><em>{"I Didn’t Do It"}</em>{" is a sweet addition to libraries of kids who love companion canines. Ages 4 and up."}</p>
    </div>
  );
}
