import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/a-home-for-dixie1.jpg",
    "alt": "A Home for Dixie",
    "href": "/media/2010/07/a-home-for-dixie1.jpg",
    "width": 212,
    "height": 212,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Cutie patootie high schooler, Emma Jackson, penned this photo essay as a way to generate awareness of and funding for homeless dogs. Essentially a journal of her experiences looking for and finding her pup, Dixie, at Aunt Mary’s Doghouse, the book is accessible enough for young kids and teaches them that “there are millions of dogs living in animal shelters, abandoned or turned in by owners who can’t take care of them anymore. They don’t have homes or families.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Furthermore, readers see Emma following all the right protocols: her family discusses the potential adoption to ensure they’re making the right choice, Emma sleeps alongside Dixie to calm her down during the first “ruff” night, and the photos show both Dixie and Emma taking care of each other, with one providing walks, food and the like and the other providing constant affection."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s an endearing tale, with even more endearing photographs. An additional perk: portions of the proceeds benefit ",
      {
        "type": "link",
        "href": "http://www.petfinder.com/shelters/NJ209.html",
        "external": true,
        "children": [
          "Petfinder.com and Aunt Mary’s Doghouse"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
