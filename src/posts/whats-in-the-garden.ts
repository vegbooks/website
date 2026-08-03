import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/9781584691907.jpg",
    "alt": "9781584691907",
    "href": "/media/2013/05/9781584691907.jpg",
    "width": 210,
    "height": 253,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I thought we might have overdone it. I allowed my four-year-old daughter to pick three recipes from this book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1584691891/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1584691891&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") for us to make for dinner one Friday night – homemade tomato sauce and pasta, cucumber salad, and blueberry pie. How long would dinner take to make? But I was pleasantly surprised – all of the recipes were so easy that we had dinner done in no time at all. The ingredients are simple and fresh and the list of ingredients is short, so each recipe tastes fresh and is simple to prepare."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sadly, my daughter didn’t enjoy all of the recipes we made. Making the recipes did have her excited about trying new things. She loved the cucumber salad, which I don’t think she would have tried if I would have made it by myself. She concluded that she prefers tomato sauce from a jar, which might say more about my cooking style than anything else. And she wasn’t a big fan of blueberry pie though my wife and I thought it was delicious."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This children’s cookbook is an exploration of fruit and vegetables you might find in your own garden. The pictures are big and bold, which make it easy for my daughter to see what the end result will be. The book is short – only about 15 recipes included. My daughter can’t wait to try more recipes. She has her eye on the corn recipe. All of the recipes require adult help since they involve cooking and cutting. It would be nice to include a few recipes that required less adult intervention, but otherwise I am very happy with the recipes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All recipes are vegetarian and many are vegan, though some use butter, honey, and cream cheese. Vegan adaptions can be easily made for each of these products."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We received this book as a review copy from ",
      {
        "type": "link",
        "href": "http://www.dawnpub.com/",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      " and are happy to have added it to our collection."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
