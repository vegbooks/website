import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/09/now-you-know-what-you-eat-valorie-fisher.jpg",
    "alt": "Now You Know What You Eat",
    "href": "/",
    "width": 235,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Maple Syrup, peanut butter and jelly, and vegetable soup are all included in Valorie Fisher’s new ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338215465",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "NOW YOU KNOW WHAT YOU EAT"
            ]
          }
        ]
      },
      ". The eye-catching and bright 3D-style graphics are at once simple and detailed. And the various charts, info-graphics, and “Words to Know” sections break down details, making them understandable to children but still interesting and informative for caregivers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book goes into the parts of different whole foods, like apples and corn, and it also delves into the various steps – and other foods – needed to prepare a dill pickle. The illustrations of foods like garlic bulbs, potatoes, and peanuts show both above ground and below-ground growth. Highlighting the many colors included in corn kernels and eggs, as well as the many varieties of apples, pasta, and potatoes offers an opportunity for counting, naming colors, and learning about the diversity in nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is vegetarian, but not vegan. Eggs, honey, and milk products are all featured, and the food group graphic includes beef, chicken, and fish. And while alternatives to non-vegan items are not offered, the clear information and graphics will encourage families to talk about the choices they make in their meals and why they make them. For example, in the sections about eggs and honey, discussions about how many eggs a hen lays a year and how many bees and visits to flowers it takes to make one jar of honey are mentioned."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers will find a new appreciation for the work and ingenuity behind seemingly simple meals like macaroni and cheese or a peanut butter and jelly sandwich. ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338215465",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "NOW YOU KNOW WHAT YOU EAT"
            ]
          }
        ]
      },
      " will be a book that children (and their caregivers!) return to again and again. Children may also have a kindled interest in cooking, and we recommend cookbooks like ",
      {
        "type": "link",
        "href": "/reviews/plant-powered-protein-cookbook/",
        "external": true,
        "children": [
          "Plant Powered Protein Cookbook"
        ]
      },
      " that also break-down foods for creating meals."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
