import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/9780763622817.jpg",
    "alt": "Breakfast in the Rainforest",
    "href": "/media/2010/02/9780763622817.jpg",
    "width": 231,
    "height": 218,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/9780763622817?&PID=32442",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Breakfast in the Rainforest"
            ]
          }
        ]
      },
      ", award-winning photographer ",
      {
        "type": "link",
        "href": "http://www.wildfoto.com/intro.html",
        "external": true,
        "children": [
          "Richard Sobol"
        ]
      },
      " details his trip to Africa to see rare ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Mountain_Gorilla",
        "external": true,
        "children": [
          "mountain gorillas"
        ]
      },
      " in their native habitat. This book is not simply a glossy biology of gorillas. There is plenty of information about the gorillas’ life cycle but Sobol also chronicles the complexities of his trip to Uganda’s Bwindi Impenetrable National Park — from expensive gorilla tracking permits to the journey to the remote rainforest location to the smell he experiences when he first meets up with the gorillas and much more. He shares observations about the subsistence farmers who live in the gorillas’ range and the park rangers who work to protect the gorillas. Sharing these details make his remarkable adventure seem more accessible."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We loved hearing about the beauty of the gorillas as well as the life of the rangers charged with protecting them. The information is set forth in a straightforward way that is appropriate for young audiences, although the text is fairly lengthy for very little ones. The photographs are, as you might imagine, fabulous. Sobol notes out at the end of the book that he is not a vegetarian, though the gorillas are!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend sharing this beautiful and informative book about mountain gorillas and their human neighbors with nature lovers of any age though its best for ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
