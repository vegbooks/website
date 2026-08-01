import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2649",
  "slug": "i-heard-it-from-alice-zucchini",
  "url": "/reviews/i-heard-it-from-alice-zucchini/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/27/i-heard-it-from-alice-zucchini/",
  "title": "I Heard It from Alice Zucchini",
  "publishedAt": "2010-07-27",
  "publishedLabel": "July 27th, 2010",
  "excerpt": "I Heard It From Alice Zucchini: Poems About the Garden spans the course of all four seasons. The poems are narrated by various garden denizens at different places and times in their growing grounds, and the book…",
  "image": {
    "src": "/media/2010/07/alice-zucchini.jpg",
    "alt": "I Heard It from Alice Zucchini",
    "width": 210,
    "height": 309
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
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Juanita Havill",
      "slug": "juanita-havill",
      "url": "/topics/juanita-havill/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
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
    "description": "I Heard It From Alice Zucchini: Poems About the Garden spans the course of all four seasons. The poems are narrated by various garden denizens at different places and times in their growing grounds, and the book…",
    "image": "https://vegbooks.org/media/2010/07/alice-zucchini.jpg"
  },
  "previous": {
    "title": "Llama Llama Misses Mama",
    "url": "/reviews/llama-llama-misses-mama/"
  },
  "next": {
    "title": "Cow",
    "url": "/reviews/cow/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/alice-zucchini.jpg"}><img src={"/media/2010/07/alice-zucchini.jpg"} alt={"I Heard It from Alice Zucchini"} width={210} height={309} /></a>
      </figure>
      <p><em><a href={"http://www.powells.com/biblio?show=HARDCOVER:USED:9780811839624:7.95"} target="_blank" rel="noopener noreferrer">{"I Heard It From Alice Zucchini: Poems About the Garden"}</a></em>{" spans the course of all four seasons. The poems are narrated by various garden denizens at different places and times in their growing grounds, and the book offers the opportunity to contemplate gardening from a perspective other than that of a human gardener. One of our favorite poems was "}<a href={"http://books.google.com/books?id=q5aCW1spc5UC&dq=i+heard+it+from+alice+zucchini&printsec=frontcover&source=bn&hl=en&ei=rqcVTO2DJsH68Abqr5mJCg&sa=X&oi=book_result&ct=result&resnum=4&ved=0CCcQ6AEwAw#v=onepage&q&f=false"} target="_blank" rel="noopener noreferrer">{"the first one"}</a>{", entitled “When I Grow Up,” in which we listen in on the chatter of seeds as they envision what lies ahead– especially enjoyable because at the time we were sprouting our own seeds for our small garden. "}<em>{"Cinderella"}</em>{" fans will enjoy a poetic retelling of an aspect of the fairy tale in this volume."}</p>
      <p>{"The enjoyable illustrations round out the short poetry pieces and feature an expressive little fairy in each one. I recommend this book for ages 4 and up."}</p>
    </div>
  );
}
