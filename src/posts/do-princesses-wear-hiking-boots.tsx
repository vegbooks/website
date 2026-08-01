import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3008",
  "slug": "do-princesses-wear-hiking-boots",
  "url": "/reviews/do-princesses-wear-hiking-boots/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/04/do-princesses-wear-hiking-boots/",
  "title": "Do Princesses Wear Hiking Boots?",
  "publishedAt": "2010-09-04",
  "publishedLabel": "September 4th, 2010",
  "excerpt": "What is it with princesses? Is it the lovely pink hue of their dresses? Good breeding? Financial success and widespread popularity from being cast in a Disney film? Personally, I find the little princess of Carmela…",
  "image": {
    "src": "/media/2010/09/0873588282.jpg",
    "alt": "Do Princesses Wear Hiking Boots?",
    "width": 210,
    "height": 183
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
      "name": "Carmela LaVigna Coyle",
      "slug": "carmela-lavigna-coyle",
      "url": "/topics/carmela-lavigna-coyle/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Princess",
      "slug": "princess",
      "url": "/topics/princess/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "What is it with princesses? Is it the lovely pink hue of their dresses? Good breeding? Financial success and widespread popularity from being cast in a Disney film? Personally, I find the little princess of Carmela…",
    "image": "https://vegbooks.org/media/2010/09/0873588282.jpg"
  },
  "previous": {
    "title": "The Berenstain Bears’ New Kitten",
    "url": "/reviews/the-berenstain-bears-new-kitten/"
  },
  "next": {
    "title": "Cows Are Vegetarians",
    "url": "/reviews/cows-are-vegetarians/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/0873588282.jpg"}><img src={"/media/2010/09/0873588282.jpg"} alt={"Do Princesses Wear Hiking Boots?"} width={210} height={183} /></a>
      </figure>
      <p>{"What is it with "}<a href={"http://www.phdinparenting.com/2010/03/09/all-i-think-about-is-princesses/"} target="_blank" rel="noopener noreferrer">{"princesses"}</a>{"? Is it the lovely pink hue of their dresses? Good breeding? Financial success and widespread popularity from being cast in a Disney film? Personally, I find the little princess of Carmela LaVigna Coyle’s picture book to be more up my alley than most idolized cartoon heroines."}</p>
      <p>{"In this honest to goodness rhyme of an exploration, a mother answers all her daughter’s questions about the lives of princesses. A few of my favorite Q&A’s …"}</p>
      <p>{"Q: Do princesses climb trees? A: Is there a better way to catch the breeze?"}</p>
      <p>{"Q: Do princesses eat the crusts of their bread? A: They save them for the ducks instead."}</p>
      <p>{"Q: Do princesses have a favorite vegetable? A: They find them all delectable."}</p>
      <p>{"And what would this self-reflective book be without our young protagonist asking her mother if princesses seem at all like her, and, in response, her mother providing a mirror and a message: “Look inside yourself and see…A princess is a place in your heart”?"}</p>
      <p>{"Perfect for the girlie girl in the family that can’t help but be a tomboy too."}</p>
      <p>{"Ages 4–8."}</p>
    </div>
  );
}
