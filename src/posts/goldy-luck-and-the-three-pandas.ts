import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This is a cute take on the Goldilocks story set in an apartment complex in Chinatown. It tells the story of Goldy Luck, an unlucky girl, on the morning of the Chinese New Year. Goldy Luck’s mom sends her to visit the Chans, a family of Pandas that live in their apartment complex. The Chans aren’t home, but that doesn’t stop Goldy Luck from eating their porridge, breaking their chair, and sleeping in their bed. When the Chans come home, Goldy Luck runs away embarrassed."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/10/goldy-luck-three-pandas.jpg",
    "alt": "GoldyLuckThreePandas",
    "width": 480,
    "height": 370,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "Then comes a very nice addition to the traditional Goldilocks story. Goldy Luck immediately feels bad for what she did and goes back to apologize to the Chans, bringing a bowl of porridge from her house to replace the one she ate. They wish each other Happy New Year and invite Goldy Luck to help them make turnip cakes. Goldy Luck and the littlest Chan become fast friends. Taking responsibility for her actions will bring her good luck in the new year, and good luck starts with making new friends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like this modern take on a traditional story. It’s a great introduction to Chinese culture that would be nice for a Chinese American family and for others as well. There is a recipe provided at the end of the book for the turnip cakes that feature prominently in the plot. The recipe is not vegetarian. Vegan and vegetarian recipes for turnip cakes can be found online, like ",
      {
        "type": "link",
        "href": "http://justbento.com/handbook/recipe-collection-mains/vegan-turnip-cake-or-daikon-radish-cake",
        "external": true,
        "children": [
          "this one"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages 4-7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " sent a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
