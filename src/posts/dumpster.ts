import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/dumpster.jpg",
    "alt": "The Dumpster Diver",
    "href": "/media/2010/02/dumpster.jpg",
    "width": 218,
    "height": 253,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I must admit that I’m a fan of ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Dumpster_diving",
        "external": true,
        "children": [
          "dumpster diving"
        ]
      },
      ", the act of venturing into dumpsters (or other similar venues) to salvage other peoples’ trash that I would consider treasure. Much of the furniture outfitting my college apartment (in a shabby-chic-kind-of-way) was discovered roadside. So I when I found this title in an independent bookstore in Seattle, I was quite the excited one. In Janet S. Wong’s ",
      {
        "type": "emphasis",
        "children": [
          "The Dumpster Diver"
        ]
      },
      ", a small clan of kids from an urban apartment building idolize their neighbor Steve, who is an electrician by trade, but scuba diver of the alley dumpsters come weekend (he really does sport scuba gear!). The kids make up the triumvirate known as the Diving Team and assist Steve in his explorations and reinvent the way items like lamps and blenders are used and create fantastical inventions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While some creations border on the not-so-safe like the “paraskater,” a mobile contraption made of skis on wheels that harnesses air flow (and consequently propels the device) through employment of an umbrella, most are harmless. Steve does wind up in a DIY made wheelchair at the end of the tale because the dumpster’s contents cave-in beneath him. This is a good book not only to discuss general safety, but also the subjects of environmentalism, recycling and developing a sense of community with one’s neighbors."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
