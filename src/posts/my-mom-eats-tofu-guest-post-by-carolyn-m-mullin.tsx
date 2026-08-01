import type { PostMetadata } from '../content/types';

export const article = {
  "id": "410",
  "slug": "my-mom-eats-tofu-guest-post-by-carolyn-m-mullin",
  "url": "/reviews/my-mom-eats-tofu-guest-post-by-carolyn-m-mullin/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/09/my-mom-eats-tofu-guest-post-by-carolyn-m-mullin/",
  "title": "My Mom Eats Tofu",
  "publishedAt": "2009-12-09",
  "publishedLabel": "December 9th, 2009",
  "excerpt": "Summer is an easy-going and loving daughter, but she’s anxious about bringing a friend home to meet her mom and experience their alternative, green ways of living: eating vegan, composting, shopping at the farmer’s…",
  "image": {
    "src": "/media/2009/12/mmet-cvr21.jpg",
    "alt": "My Mom Eats Tofu",
    "width": 210,
    "height": 260
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
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Recycled Paper Books",
      "slug": "recycled-paper-books",
      "url": "/topics/recycled-paper-books/"
    },
    {
      "name": "Robyn Ringgold",
      "slug": "robyn-ringgold",
      "url": "/topics/robyn-ringgold/"
    },
    {
      "name": "Sea Vegetables",
      "slug": "sea-vegetables",
      "url": "/topics/sea-vegetables/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "Summer is an easy-going and loving daughter, but she’s anxious about bringing a friend home to meet her mom and experience their alternative, green ways of living: eating vegan, composting, shopping at the farmer’s…",
    "image": "https://vegbooks.org/media/2009/12/mmet-cvr21.jpg"
  },
  "previous": {
    "title": "The Giving Tree",
    "url": "/reviews/the-giving-tree/"
  },
  "next": {
    "title": "The Unicorn at the Manger",
    "url": "/reviews/the-unicorn-at-the-manger/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2009/12/mmet-cvr21.jpg"}><img src={"/media/2009/12/mmet-cvr21.jpg"} alt={"My Mom Eats Tofu"} width={210} height={260} /></a>
      </figure>
      <p>{"Summer is an easy-going and loving daughter, but she’s anxious about bringing a friend home to meet her mom and experience their alternative, green ways of living: eating vegan, composting, shopping at the farmer’s support, supporting the local co-op, among other health- and environmentally-conscious practices. Long story short, the friend has a wonderful time at Summer’s home and is eager to visit again."}</p>
      <p>{"The aspect I love most about this book written by Robyn Ringgold is the myriad of fun foods mentioned that expand upon its title, "}<a href={"http://www.solarpub.com/"} target="_blank" rel="noopener noreferrer"><em>{"My Mom Eats Tofu"}</em></a>{". From listing spices such as lemongrass and rosemary to diving into the sea to explore the world of underwater vegetables (think nori and kelp), the book serves as a vehicle to get kids excited about healthy fare. A more in-depth glossary is provided for adults who may also be new to these ingredients."}</p>
      <p>{"Appropriate for ages 5-10. Printed on recycled paper."}</p>
    </div>
  );
}
