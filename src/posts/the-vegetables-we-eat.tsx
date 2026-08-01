import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2467",
  "slug": "the-vegetables-we-eat",
  "url": "/reviews/the-vegetables-we-eat/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/02/the-vegetables-we-eat/",
  "title": "The Vegetables We Eat",
  "publishedAt": "2010-07-02",
  "publishedLabel": "July 2nd, 2010",
  "excerpt": "Why vegetables have a bad rap amongst the younger crowd, I haven’t the faintest idea. Even when the school cafeteria overcooked the broccoli, I enjoyed it. Maybe that’s because vegetables were a rarity in my Mexican…",
  "image": {
    "src": "/media/2010/06/9780823421534.jpg",
    "alt": "The Vegetables We Eat",
    "width": 212,
    "height": 215
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
      "name": "Gail Gibbons",
      "slug": "gail-gibbons",
      "url": "/topics/gail-gibbons/"
    },
    {
      "name": "Healthy Eating",
      "slug": "healthy-eating",
      "url": "/topics/healthy-eating/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Why vegetables have a bad rap amongst the younger crowd, I haven’t the faintest idea. Even when the school cafeteria overcooked the broccoli, I enjoyed it. Maybe that’s because vegetables were a rarity in my Mexican…",
    "image": "https://vegbooks.org/media/2010/06/9780823421534.jpg"
  },
  "previous": {
    "title": "The Little Mermaid (1989)",
    "url": "/reviews/the-little-mermaid/"
  },
  "next": {
    "title": "To Market, To Market",
    "url": "/reviews/to-market-to-market/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/9780823421534.jpg"}><img src={"/media/2010/06/9780823421534.jpg"} alt={"The Vegetables We Eat"} width={212} height={215} /></a>
      </figure>
      <p>{"Why vegetables have a bad rap amongst the younger crowd, I haven’t the faintest idea. Even when the school cafeteria overcooked the broccoli, I enjoyed it. Maybe that’s because vegetables were a rarity in my Mexican childhood home."}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0823421538"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Now I’m in league with “the fresher, the better” school of thought and applaud books like Gail Gibbons’ "}<em><a href={"http://www.amazon.com/gp/product/0823421538?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0823421538"} target="_blank" rel="noopener noreferrer">{"The Vegetables We Eat"}</a></em>{" for stimulating excitement for and wonder of plant-based edibles. Just as colorful as the veggies you’d find so nicely displayed at Whole Foods, this book breaks them down into their various sub-categories: growing season (annual/perennial) and edible part (leaf/bulb/flower bud/root/tuber/stem/fruit/seed). Ms. Gibbons even dedicates an entire page to the soybean and all its multiple uses! Towards the end, we find descriptions on different ways to garden – from container to monoculture, packaging options (frozen, canned, fresh), and venues for purchase (supermarkets, farmer’s markets). Fun miscellaneous facts can be found on the last page. Did you know that Benjamin Franklin introduced soybeans to the U.S. from France in the 1800’s?"}</p>
      <p>{"Another good, wholesome book to encourage better eating habits…and who doesn’t need that these days?"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
