import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/curseofakkad.jpg",
    "alt": "The Curse of Akkad: Climate Upheavals that Rocked Human History",
    "href": "/media/2011/05/curseofakkad.jpg",
    "width": 207,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://site.annickpress.com/catalog/catalog.aspx?title=Curse%20of%20Akkad,%20The",
            "external": true,
            "children": [
              "The Curse of Akkad"
            ]
          }
        ]
      },
      " may seem like an ancient Egyptian legend, but it reflects the demise of another of the world’s greatest civilizations; the first one in fact, dating some 4,000 years ago. Due largely to changes in weather, this Mesopotamian city dissolved following a severe drought that eventually turned the land into a literal dust bowl. This one case is a classic example of the many so vividly described in Peter Christie’s book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Droughts, flooding, changing sunspots, volcanic eruptions, and dramatic fluctuations in temperature are credited (at least partially) for the downfalls of Mongolian (1332), Peruvian (750), Native American (1130), and an astounding number of other societies. Christie makes this a stimulating historical journey by adding in anecdotal examples of what transpired during these trying times, some even a bit gothic: driven by desperation during Europe’s Little Ice Age, grave robbers devoured the brains of those they came across. He also recounts fascinating tidbits on how these life- and planet-changing events influenced art, war, literature, and music in sidebars, which are illustrated with photographs and paintings or maps."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, this is an attention-grabbing piece of nonfiction that will hit home hard the urgency in reducing our personal contributions to global warming (read: less TV, more bike riding). Our current climate change is on a different scale than anything humans have seen before and Christie makes that very clear."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 10+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
