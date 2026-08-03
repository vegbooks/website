import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/winston-cvr.jpg",
    "alt": "Winston of Churchill",
    "href": "/media/2010/07/winston-cvr.jpg",
    "width": 199,
    "height": 156,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Pictures of polar bears clinging to small bits of ice have been a primary ",
      {
        "type": "link",
        "href": "http://www.newscientist.com/article/dn2285-climate-change-threatens-polar-bears.html",
        "external": true,
        "children": [
          "rallying symbol for the fight to stop global climate change"
        ]
      },
      ". In ",
      {
        "type": "emphasis",
        "children": [
          "Winston of Churchill: One Bear’s Battle Against Global Warming"
        ]
      },
      ", the bears take matters into their own paws, thanks to the courage and foresight of Winston, who leads the bears in a campaign to defend their ice-dependent homes. Since ",
      {
        "type": "link",
        "href": "http://blog.sustainablog.org/the-top-causes-of-global-warming-natural-or-human/",
        "external": true,
        "children": [
          "people are the primary cause of global warming"
        ]
      },
      ", Winston mobilizes the bears to protest in front of the tourists (complete with signs and chants) to make them aware of how their destructive actions are melting the ice and destroying the bears’ land."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Winston of Churchill"
        ]
      },
      " is a fun, playful way to introduce kids to the issue of global warming, the importance of ",
      {
        "type": "link",
        "href": "http://www.nature.org/initiatives/climatechange/calculator/",
        "external": true,
        "children": [
          "personal responsibility"
        ]
      },
      " (Winston’s wife points out that his cigar pollutes, too), and the power of taking positive, peaceful action. Although the quotes and references to the World War II leader will be lost on kids, parents may appreciate them. Great for sparking age-appropriate discussion about an important topic that affects everyone."
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
