import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Rickie and Henri",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A book about interspecies friendship? Written by Jane Goodall, hero for animals and founder of ",
      {
        "type": "link",
        "href": "http://www.rootsandshoots.org/",
        "external": true,
        "children": [
          "Roots and Shoots"
        ]
      },
      "? AND illustrated by ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/author/list/188645.Alan_Marks",
        "external": true,
        "children": [
          "Alan Marks"
        ]
      },
      "? Imagine my excitement when I found this title at my local library!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Based on a true story, this book is geared to kids a little older than most picture books. After depicting the love between an infant chimpanzee and her mother, ",
      {
        "type": "emphasis",
        "children": [
          "Rickie and Henri"
        ]
      },
      " dives into a very serious subject: wildlife trade."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A gunshot rings through the forest. Rickie’s mother is dead or mortally injured, and the small chimpanzee is torn from her side and then dragged, wounded and grieving, through the forest by poachers intent on selling her at the market. Fortunately, a kind man confronts the poachers about their actions, and they run away, leaving him to raise Rickie himself. It is at his home, while he is away on a business trip, that Rickie befriends Henri, a dog, and the two become fast friends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the end, Rickie must go to a chimpanzee sanctuary so that she can be with others of her kind. Henri is upset, but soon has a canine companion by his side."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book ends with a note from Jane Goodall about the chimpanzee sanctuaries she has established, and a frank discussion of her desire to return these highly intelligent and social animals to the wild and the obstacles she faces."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With depictions of violence and death, and fairly dense text, this picture book is best for kids ages 6 to 8. You can view the full book ",
      {
        "type": "link",
        "href": "http://www.minedition.com/en/book/73/",
        "external": true,
        "children": [
          "online"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
