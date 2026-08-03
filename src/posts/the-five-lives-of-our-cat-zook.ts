import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/08/zook-pb.jpg",
    "alt": "ZOOK_PB",
    "href": "/media/2013/08/zook-pb.jpg",
    "width": 216,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo and I read this book together over the summer. I never expected how much I would enjoy the narrator, Oona, and how I’d be drawn into the plot. Now that we’re done, I can say without hesitation that ",
      {
        "type": "emphasis",
        "children": [
          "The Five Lives of Our Cat Zook"
        ]
      },
      " ranks among my favorite chapter books that we’ve read together. Kiddo concurs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter is a rising second grader — younger than the book’s intended audience — and so she did not know from the beginning (as I did) that the titular character Zook would die at the book’s end. I dropped hints along the way and asked her questions to get her thinking about the connections between Zook’s illness and Oona’s father’s cancer (which caused his death before the book began). Still, when Zook eventually died, she cried and cried. A little bit of her cried for our cat Midge, who died when kiddo was 3 and who features prominently in many family stories, but most of her cried for Zook and Oona. Loving our cat Cassie just as much as Oona loved Zook, my daughter understood what that loss might be like, and she deeply empathized with Oona."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend you read this book with your child if you can. There’s a lot to talk about. Oona is a complicated character — flawed and deeply loyal — and much of her inner world revolves around trying to distinguish among truth, lies, and storytelling. She’s at the very beginning of puberty, and she experiences her first crush and conflicting emotions about her widowed mother falling in love. But don’t be afraid — it’s not all serious! Oona tells some fantastic stories to her younger brother Freddy about their cat Zook’s previous lives (hence the book’s title). And she formulates funny, clever theories about the world, some wrong and others spot on."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan families should be aware that one character, Oona’s grandmother, is described as being a vegetarian who makes an exception for lox, and that several scenes take place in a neighborhood pizzeria where the characters eat pizza and fried zucchini."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8 to 11."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I received this book as a review copy from ",
          {
            "type": "link",
            "href": "http://www.abramsbooks.com/amulet.html",
            "external": true,
            "children": [
              "the publisher"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
