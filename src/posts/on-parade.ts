import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "On Parade",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s about time for an honest, open, factual, and focused discussion with older children about how animals suffer in our society."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rob Laidlaw, author of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/animals-in-captivity/",
            "children": [
              "Wild Animals in Captivity"
            ]
          }
        ]
      },
      " and founder of ",
      {
        "type": "link",
        "href": "http://www.zoocheck.com/",
        "external": true,
        "children": [
          "Zoocheck Canada"
        ]
      },
      ", recognized that and addresses his latest work, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.zoocheck.com/wildanimalsincaptivity.html",
            "external": true,
            "children": [
              "On Parade"
            ]
          }
        ]
      },
      ", on the subject of animals in entertainment. In reading this book, tweens and their older peers will come to acknowledge the pervasive exploitation of animals: from those eaten on reality TV shows like Fear Factor, to “novelty animals” used for tourist photos, to the “edutainment” shows held at zoo and wildlife parks where animals perform tricks as a means of generating laughter. But the buck doesn’t stop there. Rodeos, traveling shows, magic shows, swim-with-dolphin programs, horse and greyhound racing, and of course bloodsports are all well covered in ",
      {
        "type": "emphasis",
        "children": [
          "On Parade"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What stands this book apart from an animal rights soapbox is that he’s included countless pieces of evidence to support the general statement that the entertainment industry does not meet the needs of wild animals in captivity: citings of animal welfare violations, mentions of undercover investigations, and testimony from whistleblowers. ",
      {
        "type": "emphasis",
        "children": [
          "On Parade"
        ]
      },
      " turns out to be an ideal resource for students writing a paper on the subject matter."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I will say that the statistics and incidences are depressing and can become mind-numbing. It’s hard to soak in the widespread abuse, neglect and outright cruelty these animals face. But it’s not something compassionate kids will want to ignore. They will want to be in the know. And it’s about time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
