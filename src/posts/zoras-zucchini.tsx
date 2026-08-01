import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10132",
  "slug": "zoras-zucchini",
  "url": "/reviews/zoras-zucchini/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/09/10/zoras-zucchini/",
  "title": "Zora’s Zucchini",
  "publishedAt": "2015-09-10",
  "publishedLabel": "September 10th, 2015",
  "excerpt": "Zora’s Zucchini tells the story of a young girl who happens upon some free zucchini plants. She takes them home and begins growing her own garden, only to realize that she has more zucchini than she knows what to do…",
  "image": {
    "src": "/media/2015/09/zoras-zucchini.jpg",
    "alt": "Zoras-Zucchini",
    "width": 484,
    "height": 475
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
      "name": "Anna Raff",
      "slug": "anna-raff",
      "url": "/topics/anna-raff/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
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
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Katherine Pryor",
      "slug": "katherine-pryor",
      "url": "/topics/katherine-pryor/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Vegetable Books",
      "slug": "vegetable-books",
      "url": "/topics/vegetable-books/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
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
    "description": "Zora’s Zucchini tells the story of a young girl who happens upon some free zucchini plants. She takes them home and begins growing her own garden, only to realize that she has more zucchini than she knows what to do…",
    "image": "https://vegbooks.org/media/2015/09/zoras-zucchini.jpg"
  },
  "previous": {
    "title": "Gryphons Aren’t So Great",
    "url": "/reviews/gryphons-arent-so-great/"
  },
  "next": {
    "title": "Fable Comics",
    "url": "/reviews/fable-comics/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p><em>{"Zora’s Zucchini"}</em>{" tells the story of a young girl who happens upon some free zucchini plants. She takes them home and begins growing her own garden, only to realize that she has more zucchini than she knows what to do with. Rather than waste the excess, she creates a community garden swamp, where others bring their excess garden items and everyone takes what they need, leaving behind what they would like to offer to others."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/09/zoras-zucchini.jpg"} alt={"Zoras-Zucchini"} width={484} height={475} />
      </figure>
      <p>{"This is a great book for kids and vegan and vegetarian parents will appreciate the story, too. There is nothing in this book that is not vegetarian friendly, and it has a good message about growing a garden and sharing with others. After reading this book, kids and adults alike may be interested in participating in their own little community garden swap!"}</p>
      <p>{"The last page of the book also offers tips on what to do with extra foods that have been grown in the garden, so they are not wasted. This will make a great book for kids who already have gardens and those you may want to inspire to have one."}</p>
      <p><em><a href={"http://www.readerstoeaters.com/our-books/zoras-zucchini"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" sent a review copy of this picture book, which is geared to kids ages 4 to 8."}</em></p>
    </div>
  );
}
