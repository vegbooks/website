import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/dog-of-discovery.jpg",
    "alt": "Dog of Discovery: A Newfoundland’s Adventures with Lewis and Clark",
    "href": "/media/2011/05/dog-of-discovery.jpg",
    "width": 203,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This tale is not for the faint of heart! Lewis and Clark, the championed explorers of the then unchartered North American lands, would not have made the trepidatious journey through rattlesnake-, grizzly bear-, thorn-, rapids-, and sometimes threatening Native American-populated lands without the presence of a trusted comrade: Seaman, a Newfoundland canine."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author Laurence Pringle does what historians should always do, in my humble opinion, and that’s to include animals whenever possible in their historical renderings. Who were the animal characters that color a story? What was their perspective or experiences? Seaman was a spirited hunter, retriever, guard dog, and friend during a most trying and rewarding adventure, and Pringle recounts the dog’s exploits (and intelligently infers and fills in the blank when needed) from information contained within Lewis and Clark’s diaries."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is far from a vegetarian-friendly account, but then again not much was back in the 1800’s. Most of the Corps of Discovery members hunt with rabidity and consume even dogs (yes, Seaman is fed his own species; Clark, however, doesn’t partake of canine fare). Dog meat was rather popular in Indian circles. BUT, this remains a wonderfully interesting historical work that brings animals into the cast of characters of a very special American narrative."
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
