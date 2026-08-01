import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3064",
  "slug": "new-family-friendly-cookbooks",
  "url": "/reviews/new-family-friendly-cookbooks/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/13/new-family-friendly-cookbooks/",
  "title": "New Family-Friendly Cookbooks",
  "publishedAt": "2010-09-13",
  "publishedLabel": "September 13th, 2010",
  "excerpt": "If there is one thing with which every kitchen should be well-stocked, it would be good cookbooks. They can make a huge difference in what you put on the family table each night. They can also help you to eat more…",
  "image": {
    "src": "/media/2010/09/vegan-on-the-cheap-cover-image.jpg",
    "alt": "New Family-Friendly Cookbooks",
    "width": 210,
    "height": 315
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
      "name": "Cookbooks",
      "slug": "cookbooks",
      "url": "/topics/cookbooks/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegan Cookbooks",
      "slug": "vegan-cookbooks",
      "url": "/topics/vegan-cookbooks/"
    },
    {
      "name": "Vegan Parenting",
      "slug": "vegan-parenting",
      "url": "/topics/vegan-parenting/"
    },
    {
      "name": "Vegan Parents",
      "slug": "vegan-parents",
      "url": "/topics/vegan-parents/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "Vegetarian Cookbooks",
      "slug": "vegetarian-cookbooks",
      "url": "/topics/vegetarian-cookbooks/"
    },
    {
      "name": "Vegetarian Cooking",
      "slug": "vegetarian-cooking",
      "url": "/topics/vegetarian-cooking/"
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
    "description": "If there is one thing with which every kitchen should be well-stocked, it would be good cookbooks. They can make a huge difference in what you put on the family table each night. They can also help you to eat more…",
    "image": "https://vegbooks.org/media/2010/09/vegan-on-the-cheap-cover-image.jpg"
  },
  "previous": {
    "title": "Louise, The Adventures of a Chicken",
    "url": "/reviews/louise/"
  },
  "next": {
    "title": "The Trouble with Dogs, Said Dad",
    "url": "/reviews/the-trouble-with-dogs-said-dad/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/vegan-on-the-cheap-cover-image.jpg"}><img src={"/media/2010/09/vegan-on-the-cheap-cover-image.jpg"} alt={"New Family-Friendly Cookbooks"} width={210} height={315} /></a>
      </figure>
      <p>{"If there is one thing with which every kitchen should be well-stocked, it would be good cookbooks. They can make a huge difference in what you put on the family table each night. They can also help you to eat more nutritiously, and to save money. And two new cookbooks do a great job of accomplishing just that!"}</p>
      <p><em>{"Vegan on the Cheap"}</em>{" by Robin Robertson aims at helping families put economical, yet tasty and nutritious, meals on the table each day. Focusing on money-saving tips, this book will help you feed your family well, without breaking the bank. Each recipe provides an analysis about how much it costs per serving, as well as tips for splurging with it. Try the “Very Veggie Burgers” recipe – you won’t be disappointed!"}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2010/09/double-energy-cover-big.jpg"}><img src={"/media/2010/09/double-energy-cover-big.jpg"} alt={""} width={210} height={241} /></a>
      </figure>
      <p>{"Looking to improve your family’s health and vitality? Check out "}<em><a href={"http://www.newliving.com/issues/february_09/articles/doubleenergydiet.html"} target="_blank" rel="noopener noreferrer">{"The Double Energy Diet"}</a></em>{" by Judi and Shari Zucker. This cookbook focuses on helping families feel good with a variety of nutrition-packed recipes. The book focuses on fueling your body, pregnancy, raising healthy kids, and exercise. While it is not vegan, each recipe also lists the ingredients to include in a vegan version (e.g., ½ cup shredded mozzarella cheese or nondairy shredded cheese). Give the Waldorf salad a try, as it is sure to have the kids asking for more!"}</p>
    </div>
  );
}
