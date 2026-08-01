import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10895",
  "slug": "now-you-know-what-you-eat",
  "url": "/reviews/now-you-know-what-you-eat/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/10/14/now-you-know-what-you-eat/",
  "title": "Now You Know What You Eat",
  "publishedAt": "2019-10-14",
  "publishedLabel": "October 14th, 2019",
  "excerpt": "Maple Syrup, peanut butter and jelly, and vegetable soup are all included in Valorie Fisher’s new NOW YOU KNOW WHAT YOU EAT. The eye-catching and bright 3D-style graphics are at once simple and detailed. And the…",
  "image": {
    "src": "/media/2019/09/now-you-know-what-you-eat-valorie-fisher.jpg",
    "alt": "Now You Know What You Eat",
    "width": 235,
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Now You Know What You Eat",
      "slug": "now-you-know-what-you-eat",
      "url": "/topics/now-you-know-what-you-eat/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "preschool",
      "slug": "preschool",
      "url": "/topics/preschool/"
    },
    {
      "name": "Valorie Fisher",
      "slug": "valorie-fisher",
      "url": "/topics/valorie-fisher/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "Maple Syrup, peanut butter and jelly, and vegetable soup are all included in Valorie Fisher’s new NOW YOU KNOW WHAT YOU EAT. The eye-catching and bright 3D-style graphics are at once simple and detailed. And the…",
    "image": "https://vegbooks.org/media/2019/09/now-you-know-what-you-eat-valorie-fisher.jpg"
  },
  "previous": {
    "title": "Nic Bishop: Big Cats",
    "url": "/reviews/nic-bishop-big-cats/"
  },
  "next": {
    "title": "Future Engineer",
    "url": "/reviews/future-engineer/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/"}><img src={"/media/2019/09/now-you-know-what-you-eat-valorie-fisher.jpg"} alt={"Now You Know What You Eat"} width={235} height={300} /></a>
      </figure>
      <p>{"Maple Syrup, peanut butter and jelly, and vegetable soup are all included in Valorie Fisher’s new "}<a href={"https://www.indiebound.org/book/9781338215465"} target="_blank" rel="noopener noreferrer"><strong>{"NOW YOU KNOW WHAT YOU EAT"}</strong></a>{". The eye-catching and bright 3D-style graphics are at once simple and detailed. And the various charts, info-graphics, and “Words to Know” sections break down details, making them understandable to children but still interesting and informative for caregivers."}</p>
      <p>{"The book goes into the parts of different whole foods, like apples and corn, and it also delves into the various steps – and other foods – needed to prepare a dill pickle. The illustrations of foods like garlic bulbs, potatoes, and peanuts show both above ground and below-ground growth. Highlighting the many colors included in corn kernels and eggs, as well as the many varieties of apples, pasta, and potatoes offers an opportunity for counting, naming colors, and learning about the diversity in nature."}</p>
      <p>{"The book is vegetarian, but not vegan. Eggs, honey, and milk products are all featured, and the food group graphic includes beef, chicken, and fish. And while alternatives to non-vegan items are not offered, the clear information and graphics will encourage families to talk about the choices they make in their meals and why they make them. For example, in the sections about eggs and honey, discussions about how many eggs a hen lays a year and how many bees and visits to flowers it takes to make one jar of honey are mentioned."}</p>
      <p>{"Readers will find a new appreciation for the work and ingenuity behind seemingly simple meals like macaroni and cheese or a peanut butter and jelly sandwich. "}<a href={"https://www.indiebound.org/book/9781338215465"} target="_blank" rel="noopener noreferrer"><strong>{"NOW YOU KNOW WHAT YOU EAT"}</strong></a>{" will be a book that children (and their caregivers!) return to again and again. Children may also have a kindled interest in cooking, and we recommend cookbooks like "}<a href={"/reviews/plant-powered-protein-cookbook/"} target="_blank" rel="noopener noreferrer">{"Plant Powered Protein Cookbook"}</a>{" that also break-down foods for creating meals."}</p>
    </div>
  );
}
