import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/08/what-if-you-could-sniff-like-a-shark-1.jpg",
    "alt": "What if You Could Sniff Like a Shark?",
    "width": 400,
    "height": 400
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338356083",
        "external": true,
        "children": [
          "WHAT IF YOU COULD SNIFF LIKE A SHARK?"
        ]
      },
      " is a fun and informative picture book is all about the amazing “superpowers” of various ocean animals. Author Sandra Markle has collected the wonderful abilities of sharks, jellyfish, the giant octopus, sea turtles, and more and paired them with fun ways kids could utilize them. The inventive and silly scenes are followed by interesting facts about each animal. The book provides fantastic opportunities for imaginative conversations and learning about the featured ocean animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highlights in the book include learning about the giant Pacific octopus’ siphon as an escape mechanism, seeing the massive claws of a coconut crab up close, and checking out the firefly squid’s ability to create light. The photographs are paired with Howard McWilliams’ fanciful illustrations of kids enjoying the “superpowers” of each ocean creature. The colorful, larger-than-life images contrast with the detailed photographs and facts. Readers of all ages will certainly learn something and revel in the scenes throughout the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
