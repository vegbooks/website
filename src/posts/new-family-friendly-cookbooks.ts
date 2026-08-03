import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/vegan-on-the-cheap-cover-image.jpg",
    "alt": "New Family-Friendly Cookbooks",
    "href": "/media/2010/09/vegan-on-the-cheap-cover-image.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If there is one thing with which every kitchen should be well-stocked, it would be good cookbooks. They can make a huge difference in what you put on the family table each night. They can also help you to eat more nutritiously, and to save money. And two new cookbooks do a great job of accomplishing just that!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Vegan on the Cheap"
        ]
      },
      " by Robin Robertson aims at helping families put economical, yet tasty and nutritious, meals on the table each day. Focusing on money-saving tips, this book will help you feed your family well, without breaking the bank. Each recipe provides an analysis about how much it costs per serving, as well as tips for splurging with it. Try the “Very Veggie Burgers” recipe – you won’t be disappointed!"
    ]
  },
  {
    "type": "image",
    "src": "/media/2010/09/double-energy-cover-big.jpg",
    "alt": "",
    "href": "/media/2010/09/double-energy-cover-big.jpg",
    "width": 210,
    "height": 241,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Looking to improve your family’s health and vitality? Check out ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.newliving.com/issues/february_09/articles/doubleenergydiet.html",
            "external": true,
            "children": [
              "The Double Energy Diet"
            ]
          }
        ]
      },
      " by Judi and Shari Zucker. This cookbook focuses on helping families feel good with a variety of nutrition-packed recipes. The book focuses on fueling your body, pregnancy, raising healthy kids, and exercise. While it is not vegan, each recipe also lists the ingredients to include in a vegan version (e.g., ½ cup shredded mozzarella cheese or nondairy shredded cheese). Give the Waldorf salad a try, as it is sure to have the kids asking for more!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
