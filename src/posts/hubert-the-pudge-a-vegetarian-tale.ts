import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/hubert-the-pudge1.jpg",
    "alt": "Hubert the Pudge",
    "width": 216,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This book by ",
      {
        "type": "link",
        "href": "http://www.hdrescher.com/",
        "external": true,
        "children": [
          "Henrik Drescher"
        ]
      },
      " doesn’t beat around the bush. It’s the story of a horrible pudge processing farm where the ",
      {
        "type": "link",
        "href": "http://farmsanctuary.org/issues/factoryfarming/pork/gestationcrates.html",
        "external": true,
        "children": [
          "animals are kept confined"
        ]
      },
      " until it’s time for slaughter. Happily, one small pudge named Hubert escapes on the rare occasion that Farmer Jake lets the animals outside while he cleans the barn. Hubert grows large in the jungle then returns to free his friends and strong-arm Jake into doing something better with his life. In the end, Jake cleans up his act, finds love, and opens a ",
      {
        "type": "link",
        "href": "http://blog.peta.org/archives/tofu_pups/",
        "external": true,
        "children": [
          "tofu hot dog"
        ]
      },
      " company."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love that this book exposes the horrors of animal agriculture in a kid-friendly way (though parts might be scary for some), but I’m not nuts about the illustrations. That said, I’ll be the first to admit that the ",
      {
        "type": "link",
        "href": "http://www.book-by-its-cover.com/childrens/hubert-the-pudge-a-vegetarian-tale",
        "external": true,
        "children": [
          "aesthetics of this quirky book"
        ]
      },
      "are definitely a matter of personal taste. You and your kid might go wild for Hubert, the pudges, and the wacky coifs of Jake and his bride Heidi. Or you might be like me, studiously sticking to the text so I don’t need to look at the pictures."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8. For more info, visit the ",
      {
        "type": "link",
        "href": "http://www.navs-online.org/webstore/books/for-children-youth/hubert-the-pudge.html",
        "external": true,
        "children": [
          "North American Vegetarian Society"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www.librarything.com/work/2013493",
        "external": true,
        "children": [
          "Library Thing"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
