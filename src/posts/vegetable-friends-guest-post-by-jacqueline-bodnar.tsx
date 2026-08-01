import type { PostMetadata } from '../content/types';

export const article = {
  "id": "687",
  "slug": "vegetable-friends-guest-post-by-jacqueline-bodnar",
  "url": "/reviews/vegetable-friends-guest-post-by-jacqueline-bodnar/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/01/26/vegetable-friends-guest-post-by-jacqueline-bodnar/",
  "title": "Vegetable Friends",
  "publishedAt": "2010-01-26",
  "publishedLabel": "January 26th, 2010",
  "excerpt": "Vegetable Friendsby Tony Lawlor and Bruce Kociemba is an older book, but still widely available for used purchase. It is a great book for vegetarian kids since its focus is to introduce certain vegetables to young…",
  "image": {
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Vegetable Friends",
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
      "name": "Bruce Kociemba",
      "slug": "bruce-kociemba",
      "url": "/topics/bruce-kociemba/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Healthy Eating",
      "slug": "healthy-eating",
      "url": "/topics/healthy-eating/"
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
      "name": "Tony Lawlor",
      "slug": "tony-lawlor",
      "url": "/topics/tony-lawlor/"
    },
    {
      "name": "Vegetable Books",
      "slug": "vegetable-books",
      "url": "/topics/vegetable-books/"
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
    "description": "Vegetable Friendsby Tony Lawlor and Bruce Kociemba is an older book, but still widely available for used purchase. It is a great book for vegetarian kids since its focus is to introduce certain vegetables to young…",
    "image": "https://vegbooks.org/media/2011/07/toddler-baby-reading.jpg"
  },
  "previous": {
    "title": "Ratatouille (2007)",
    "url": "/reviews/ratatouille-guest-post-by-jennifer-gannett/"
  },
  "next": {
    "title": "Saving Lilly",
    "url": "/reviews/saving-lilly-guest-post-by-carolyn-m-mullin/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/toddler-baby-reading.jpg"}><img src={"/media/2011/07/toddler-baby-reading.jpg"} alt={"Vegetable Friends"} width={210} height={300} /></a>
      </figure>
      <p><em>{"Vegetable Friends"}</em>{"by "}<a href={"http://www.thedripdrops.com/"} target="_blank" rel="noopener noreferrer">{"Tony Lawlor"}</a>{" and Bruce Kociemba is an older book, but still widely available for used purchase. It is a great book for vegetarian kids since its focus is to introduce certain vegetables to young children."}</p>
      <p>{"The author takes a fun, rhyming approach to explaining how potatoes, corn, mushrooms, tomatoes, broccoli, and celery are all grown and their many varied uses. Kids love the way the story flows and the personality that each vegetable takes on. There is, however,one reference that vegetarian parents may not approve of, in which the author states that farm animals love corn."}</p>
      <p>{"If you can get your hands on a used copy of this veggie–friendly book, you will not be disappointed. Chances are, you will enjoy reading the book every bit as much as the kids do!"}</p>
      <p>{"Ages 2-5."}<br /></p>
    </div>
  );
}
