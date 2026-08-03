import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/978-0-440-40830-7.jpg",
    "alt": "The Little Island",
    "href": "/media/2011/09/978-0-440-40830-7.jpg",
    "width": 210,
    "height": 174,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book the way I love ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/32929.Goodnight_Moon",
            "external": true,
            "children": [
              "Goodnight, Moon"
            ]
          }
        ]
      },
      ". I love its simplicity. I love that it touches on the metaphysical, but does not dwell. And above all, I love its illustrations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Margaret Wise Brown wrote both books, and in each, her simple prose inspires calming, classical illustrations. ",
      {
        "type": "link",
        "href": "http://www.leonardweisgard.com/index.htm",
        "external": true,
        "children": [
          "Leonard Weisgard"
        ]
      },
      ", a prolific artist who illustrated a host of children’s books in the mid-1900s, often collaborated with Wise Brown, and ",
      {
        "type": "emphasis",
        "children": [
          "The Little Island"
        ]
      },
      "is a perfect example of how well suited his paintings were for her words."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the book primarily focuses on the natural history of the little island through the seasons, depicting seals, gulls, and lobsters, there are several pages of dialogue between the island and a kitten who had arrived by boat. In this back-and-forth, the kitten tries to determine the nature of the island and discovers that it is connected to everything else by land beneath the water’s surface."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian families should be aware that the kitten threatens to — but does not — eat a fish. Instead:"
    ]
  },
  {
    "type": "address",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "[T]he fish told the kitten"
        ]
      }
    ]
  },
  {
    "type": "address",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "how all land is one land"
        ]
      }
    ]
  },
  {
    "type": "address",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "under the sea."
        ]
      }
    ]
  },
  {
    "type": "address",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The cat’s eyes were shining"
        ]
      }
    ]
  },
  {
    "type": "address",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "with the secret of it."
        ]
      }
    ]
  },
  {
    "type": "address",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "And because he loved secrets he believed."
        ]
      }
    ]
  },
  {
    "type": "address",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "And he let the fish go."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This soothing picture book is a great read for children ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
