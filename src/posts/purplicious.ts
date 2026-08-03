import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Kids who have read ",
      {
        "type": "emphasis",
        "children": [
          "Pinkalicious"
        ]
      },
      "by Victoria Kahn and ",
      {
        "type": "link",
        "href": "http://elizabethkann.com/?page_id=4",
        "external": true,
        "children": [
          "Elizabeth Kahn"
        ]
      },
      " know that Pinkalicious loves the color pink! In ",
      {
        "type": "emphasis",
        "children": [
          "Purplicious"
        ]
      },
      ", our bedazzled heroine must decide what to do when all the girls at school decide black is in."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At first, Pinkalicious stands up for her choice. “You don’t need to be a baby or a little girl to like the color pink. Pink is for everyone,” she exclaims when she’s being teased on the bus. “Even my brother likes pink.” Eventually, however, she gets the blues and writes in her diary, “Pink is a lonely color.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While Pinkalicious wavers at one point in the book, going so far as to order vanilla ice cream for fear someone might see her eating a pink confection, she never strays far from her conviction that pink is beautiful. And when she meets a kindred spirit in her art class, she discovers that pink is also powerful. (Pink can make blue into purple, hence the title of the book.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’d recommend this story for ",
      {
        "type": "link",
        "href": "http://www.vegsource.com/parent/",
        "external": true,
        "children": [
          "vegetarian or vegan kids"
        ]
      },
      ", because it explores what it’s like to be different and it affirms the value of staying true to yourself, despite the obstacles."
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
