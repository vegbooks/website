import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "It’s hard not to be amazed by this book by Sarah C. Campbell and Richard P. Campbell. First there’s the surprise of a carnivorous snail. To see one up close, complete with lip extensions that look like a mustache, and to read ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/3528038.Wolfsnail_A_Backyard_Predator",
        "external": true,
        "children": [
          "its story"
        ]
      },
      "* is a genuine treat, at least from an adult’s perspective."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Unfortunately, kiddo doesn’t share my view. Reading about a snail who eats meat, and hearing about how it devoured another snail, made her incredibly sad. When I asked her why, she said that she doesn’t like it when anyone eats meat and that she felt bad for the smaller snail."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I used this book as an opportunity to talk about herbivores and carnivores, using our family cat Cassie as an example of how some animals need to eat meat to survive. You could even use it as a launching point to discuss how your vegetarian child relates to friends and family who eat meat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As much as I like ",
      {
        "type": "link",
        "href": "http://www.sarahccampbell.com/index.php?/2009050651/books/wolfsnail-reviews",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Wolfsnail"
            ]
          }
        ]
      },
      ", I’m planning to return our borrowed copy and hold off a while before I consider buying it for kiddo. For now, we’ll stick to books that make her happy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-10."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "* In case you’re wondering, a wolfsnail actually is an “it.” Like most land snails, Ms. Campbell explains, wolfsnails are hermaphrodites."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
