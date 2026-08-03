import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/10/bunnicula-cover.jpg",
    "alt": "Bunnicula_cover",
    "width": 210,
    "height": 312,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The Bunnicula series were my wife’s favorite childhood books. She’s very excited to finally have a child old enough to share this series of books with her. It tells the story of the Monroe family adopting a very strange bunny named Bunnicula."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Good natured but slow-witted Harold the Dog (the narrator) and snobby and well-read Chester the Cat, a very humorous duo, notice something strange about Bunnicula who arrives at the same time that odd things start occurring at the Monroe household. The two investigate the strange bunny, who, SPOILER ALERT, turns out to be a vegetarian vampire bunny who sneaks out of his cage at night to drink the juices of all the fruits and vegetables in the kitchen. Harold and Chester remain suspicious of Bunnicula until something happens in which Bunnicula saves the day and shows himself to be a great addition to the Monroe family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A fun read for Halloween or any time, with lots of books in the series to keep an excited young reader engaged for a long time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 to 12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
