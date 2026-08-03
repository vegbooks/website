import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/mama-s-saris.jpg",
    "alt": "Mama’s Saris",
    "href": "/media/2011/07/mama-s-saris.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A great introduction to Indian-American culture, ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0316011053/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0316011053",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " tells the story of a mother and daughter in an Indian-American family, getting ready for the daughter’s seventh birthday. The mother, who wears a sari for celebrations, is sorting through her big suitcase full of beautiful saris to decide which to wear. The daughter begs to wear a sari, but her mom says saris are for adults because they are too long and hard to wear. The daughter is persistent and mentions all of the ways that she is grown up now that she is seven. Finally mom says yes and drapes her daughter in a beautiful sari of her daughter’s choice. The two look in the mirror and the daughter says, “I think I look like you.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It is hard to find books that show Indian people. This book depicts an Indian family and describes typical Indian family activities, such as celebrating Diwali. My daughter is biracial, half Indian and half white. My wife, who is Indian, gave this book to our daughter for her second birthday and told her that it was a special book about the two of them. They have read it together each night since. It’s a book about a mother and daughter sharing a loving moment and it’s perfect for our family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian families should be aware that the very special saris are stored in a leather suitcase. Otherwise, I would recommend this book to anyone looking for a book showing a relationship between a mother and daughter or as an introduction to Indian-American family culture."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
