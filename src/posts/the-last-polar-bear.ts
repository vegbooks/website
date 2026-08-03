import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/the-last-polar-bear.jpg",
    "alt": "The Last Polar Bear",
    "href": "/media/2011/01/the-last-polar-bear.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.jeancraigheadgeorge.com/",
        "external": true,
        "children": [
          "Jean Craighead George"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.minorart.com/",
        "external": true,
        "children": [
          "Wendell Minor"
        ]
      },
      ", the team responsible for ",
      {
        "type": "link",
        "href": "/reviews/the-wolves-are-back/#more-1223",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Wolves Are Back"
            ]
          }
        ]
      },
      ", bring us an Arctic tale. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.harpercollinschildrens.com/books/Last-Polar-Bear/?isbn13=9780061240676&tctid=100",
            "external": true,
            "children": [
              "The Last Polar Bear"
            ]
          }
        ]
      },
      "focuses upon young Tigluk, who encounters a polar bear in his Arctic village. Ignoring the warnings of the adult villagers, Tigluk has a close encounter with the bear, named Nanuq. Realizing he has received an important message from her, Tigluk and his grandmother work together to mend a family boat and voyage north in the Arctic Ocean. After paddling for days, they find an abandoned polar bear cub on an ice floe. They know that he is Nanuq’s cub, the last polar bear, and gather him into their kayak to bring him home and care for him in the warming world."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is peppered with references to the obvious consequences of climate change that Tigluk and his fellow villagers observe, including the fact that there are fewer ice floes than there once were. As Tigluk and his Aka discuss, no more ice floes means no more Nanuqs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Of course this story’s trajectory is in some ways far-fetched — but that is nothing new in the realm of children’s literature. What is striking, though, is the undercurrent of sadness that runs through the book. While the imagined ending is a fortuitous one for the individual cub, the events chronicled are markers of some deeply distressing events in our world. This book is especially timely right now, given some of the recent decisions in the ",
      {
        "type": "link",
        "href": "http://content.usatoday.com/communities/greenhouse/post/2010/12/alaska-sue-polar-bear-protection/1",
        "external": true,
        "children": [
          "United States regarding the status of polar bears and their habitat"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents and caregivers may want to know that there are multiple references to items made from sealskin, and Tigluk and Aka wear fur-lined coats throughout the course of the book. These illustrations and references may open the door to discussions about the relationships that native tribes have (and have had) with animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is for ages 5 and up, though sensitive children (or their parents) may find the subject matter difficult. Learn more about the book and see some of the beautiful illustrations by checking out ",
      {
        "type": "link",
        "href": "http://www.minorart.com/images09/PolarBear-desktop.mov",
        "external": true,
        "children": [
          "this interview with Wendell Minor"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
