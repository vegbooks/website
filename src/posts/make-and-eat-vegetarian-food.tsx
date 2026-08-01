import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1981",
  "slug": "make-and-eat-vegetarian-food",
  "url": "/reviews/make-and-eat-vegetarian-food/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/28/make-and-eat-vegetarian-food/",
  "title": "Make and Eat Vegetarian Food",
  "publishedAt": "2010-05-28",
  "publishedLabel": "May 28th, 2010",
  "excerpt": "Most children love helping to cook, and learning to cook healthy vegetarian food is a skill that will last them a lifetime. Make and Eat Vegetarian Food by Susannah Blake is a vegetarian cookbook for kids ages 9-12.…",
  "image": {
    "src": "/media/2010/05/9781435828605.png",
    "alt": "Make and Eat Vegetarian Food",
    "width": 211,
    "height": 270
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
      "name": "Cookbooks for Kids",
      "slug": "cookbooks-for-kids",
      "url": "/topics/cookbooks-for-kids/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Susannah Blake",
      "slug": "susannah-blake",
      "url": "/topics/susannah-blake/"
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
    },
    {
      "name": "vegetarian kids",
      "slug": "vegetarian-kids",
      "url": "/topics/vegetarian-kids/"
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
    "description": "Most children love helping to cook, and learning to cook healthy vegetarian food is a skill that will last them a lifetime. Make and Eat Vegetarian Food by Susannah Blake is a vegetarian cookbook for kids ages 9-12.…",
    "image": "https://vegbooks.org/media/2010/05/9781435828605.png"
  },
  "previous": {
    "title": "Just a Dream",
    "url": "/reviews/just-a-dream/"
  },
  "next": {
    "title": "Mama, Is It Summer Yet?",
    "url": "/reviews/mama-is-it-summer-yet/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/9781435828605.png"}><img src={"/media/2010/05/9781435828605.png"} alt={"Make and Eat Vegetarian Food"} width={211} height={270} /></a>
      </figure>
      <p>{"Most children love helping to cook, and learning to cook healthy vegetarian food is a skill that will last them a lifetime."}</p>
      <p><em>{"Make and Eat Vegetarian Food"}</em>{" by Susannah Blake is a vegetarian cookbook for kids ages 9-12. The cookbook offers detailed instructions and images showing, step by step, how to prepare each ingredient, making it simple and interesting to follow along."}</p>
      <p>{"Young cooks will be introduced to making such dishes as chunky pasta, "}<a href={"http://www.theppk.com/recipes/dbrecipes/recipe.php?MainID=1"} target="_blank" rel="noopener noreferrer">{"tofu"}</a>{" kebabs, tasty hummus, and baked potato with chili, among other recipes. The book also includes helpful information about kitchen equipment, which will be easy for kids to understand."}</p>
      <p><a href={"http://veganhealth.org/articles/realveganchildren"} target="_blank" rel="noopener noreferrer">{"Vegan parents"}</a>{" should take note that not all of the recipes are vegan; dairy is touted as a healthy part of a balanced diet, and a recipe is included for scrambled eggs. One of the downsides to this book is that the author could have put more emphasis on "}<a href={"http://www.vrg.org/nutrition/protein.htm"} target="_blank" rel="noopener noreferrer">{"plant-based protein"}</a>{", rather than including so much discussion of non-vegetarian sources and dairy. She also states that meat and fish provide protein and that, if you take them out of your diet, you need to find other good sources to replace them. In actuality, many vegetarian children have never had those items in their diet to begin with."}</p>
    </div>
  );
}
