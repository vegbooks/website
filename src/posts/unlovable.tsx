import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2700",
  "slug": "unlovable",
  "url": "/reviews/unlovable/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/02/unlovable/",
  "title": "Unlovable",
  "publishedAt": "2010-08-02",
  "publishedLabel": "August 2nd, 2010",
  "excerpt": "In Unlovable, Alfred is a dog that is different – so much so that he is repeatedly told by the other animals in the house that he is unlovable. Even the other dogs don’t really care to play with him. Because of this,…",
  "image": {
    "src": "/media/2010/08/180-unlovable-cover-copy.jpg",
    "alt": "Unlovable",
    "width": 210,
    "height": 210
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
      "name": "Dan Yaccarino",
      "slug": "dan-yaccarino",
      "url": "/topics/dan-yaccarino/"
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
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Self Esteem",
      "slug": "self-esteem",
      "url": "/topics/self-esteem/"
    },
    {
      "name": "Self-Acceptance",
      "slug": "self-acceptance",
      "url": "/topics/self-acceptance/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "In Unlovable, Alfred is a dog that is different – so much so that he is repeatedly told by the other animals in the house that he is unlovable. Even the other dogs don’t really care to play with him. Because of this,…",
    "image": "https://vegbooks.org/media/2010/08/180-unlovable-cover-copy.jpg"
  },
  "previous": {
    "title": "Oil Spill!",
    "url": "/reviews/oil-spill/"
  },
  "next": {
    "title": "My Uncle Martin’s Big Heart",
    "url": "/reviews/my-uncle-martins-big-heart/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/180-unlovable-cover-copy.jpg"}><img src={"/media/2010/08/180-unlovable-cover-copy.jpg"} alt={"Unlovable"} width={210} height={210} /></a>
      </figure>
      <p>{"In "}<em>{"Unlovable"}</em>{", Alfred is a dog that is different – so much so that he is repeatedly told by the other animals in the house that he is unlovable. Even the other dogs don’t really care to play with him. Because of this, he feels bad about himself, and his self-confidence is nonexistent."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2010/08/181-unlovable-1st-spread-copy.jpg"}><img src={"/media/2010/08/181-unlovable-1st-spread-copy.jpg"} alt={""} width={210} height={106} /></a>
      </figure>
      <p>{"One day, new neighbors move in next door, and they have a dog. As Alfred speaks to the other dog through the fence, they cannot see each other; because of this, he feels he is able to carry on the relationship. Sure that the other dog would find him unlovable if they were to meet face to face, he hides when the other dog digs through the fence to visit Alfred in person."}</p>
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/182-unlovable-al-rex-copy.jpg"}><img src={"/media/2010/08/182-unlovable-al-rex-copy.jpg"} alt={""} width={210} height={108} /></a>
      </figure>
      <p>{"Yet Alfred sees something completely unexpected – the dog from next door is the same type of dog he is, so there is no way that he could be found to be unlovable. Immediately, they are best of friends!"}</p>
      <p>{"This is a great book for any child who feels "}<a href={"http://www.askdrsears.com/html/6/t061500.asp"} target="_blank" rel="noopener noreferrer">{"unattractive or different"}</a>{", or who has a hard time making friends. It demonstrates that there is someone out there for every person, and that everyone is lovable!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
