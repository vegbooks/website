import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Babe: Pig in the City (1998)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 316,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Surprisingly dark for a family film, “Babe: Pig in the City” didn’t please all the fans of the first “",
      {
        "type": "link",
        "href": "/reviews/babe/",
        "children": [
          "Babe"
        ]
      },
      "” movie who had so eagerly awaited the sequel. Still, animal rights advocates will find much to like in the urban exploits of the titular pig."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the theme of pigs-as-food continues in the sequel, the film primarily focuses on the plight of companion animals. The plot revolves around Babe’s adventures after he and the farmer’s wife miss a connecting flight. From their struggle to find accommodations to their heroic efforts to free impounded animals held in cages in the back of a hospital, this film touches on themes of dog and cat homelessness, ",
      {
        "type": "link",
        "href": "http://animallaw.info/articles/ovuspetsandhousinglaws.htm",
        "external": true,
        "children": [
          "housing discrimination"
        ]
      },
      " against people with companion animals, and even ",
      {
        "type": "link",
        "href": "http://www.banpoundseizure.org/flash.shtml",
        "external": true,
        "children": [
          "pound seizure"
        ]
      },
      " and vivisection."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Of course, families will cheer at the happy ending — but kids may need to be reminded along the way that yes, there will be a happy ending, and parents may find that the movie raises a lot of questions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One question I couldn’t answer was whether real animals were used in the filming of the movie. Given several scenes involving peril to animals, I found myself hoping that the creators made generous use of CGI, as did the makers of “Rise of the Planet of the Apes” and “",
      {
        "type": "link",
        "href": "http://www.globalanimal.org/2012/02/03/big-miracle-breaks-the-ice/64976/",
        "external": true,
        "children": [
          "Big Miracle"
        ]
      },
      ".” Anyone know?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 and up; rated G."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
