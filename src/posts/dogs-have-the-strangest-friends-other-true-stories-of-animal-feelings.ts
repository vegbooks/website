import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/dogs-have-the-strangest-friends.jpg",
    "alt": "Dogs Have the Strangest Friends & Other True Stories of Animal Feelings",
    "href": "/media/2011/03/dogs-have-the-strangest-friends.jpg",
    "width": 210,
    "height": 290,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I had the pleasure of hosting ",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=tEnQdRIpUFQ",
        "external": true,
        "children": [
          "Jeffrey Moussaieff Masson"
        ]
      },
      " at a conference some years ago at Farm Sanctuary. He’s as down-to-earth as the animals he depicts in his books on animal sentience. Most recognized for ",
      {
        "type": "emphasis",
        "children": [
          "When Elephants Weep"
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          "Dogs Never Lie About Love"
        ]
      },
      ", Masson is a committed animal advocate and vegan and that shines through in ",
      {
        "type": "link",
        "href": "http://www.jeffreymasson.com/books/dogs-have-the-strangest-friends.html",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Dogs Have the Strangest Friends"
            ]
          }
        ]
      },
      ", a children’s compilation recounting the unique bonds animals have had amongst themselves."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Masson could have easily left this book as a warm and fuzzy compilation of tales he’s heard or witnessed over the years, but he makes a point of addressing issues important to us Vegbooks readers:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“I stopped drinking milk because I believe that a cow or a goat produces milk for her own babies, not for us. And I gave up butter and cheese, too… Milk was easy to give up because wonderful-tasting substitutes, soy milk and rice milk, are so easy to buy now.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers will dive into these stories that depict the emotional world of animals: an elephant who comes to the rescue of a rhinoceros, a mother cat who saves her kittens from a burning building, a peregrine falcon who mourns the loss of his mate while trying to care for his young, and many other touching anecdotes. Kids will inevitably learn (if it wasn’t already apparent to them), that animals are just as self aware, kindhearted, giving, and expressive as human beings. Shirley Felts’ soft, beautiful watercolor images compliment the text nicely. Another must have for the bookshelf."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
