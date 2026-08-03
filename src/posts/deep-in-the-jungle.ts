import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/053-deep-in-the-jungle-cover.jpg",
    "alt": "Deep in the Jungle",
    "href": "/media/2010/07/053-deep-in-the-jungle-cover.jpg",
    "width": 206,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What happens when you take an arrogant jungle lion and put him in a circus? He finds that he much preferred life in the jungle, and he returns with a new, more refined attitude toward his animal neighbors."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/1888533.Deep_in_the_Jungle",
            "external": true,
            "children": [
              "Deep in the Jungle"
            ]
          }
        ]
      },
      ", author Dan Yaccarino takes a look at circuses through the eyes of a mighty lion. The lion is recruited, believing that he is going to become famous, only to find that he is put into a circus. In traditional circus fashion, he is placed in a cage and made to perform to the crack of a whip."
    ]
  },
  {
    "type": "image",
    "src": "/media/2010/07/054-deep-in-the-jungle-animal-image.jpg",
    "alt": "",
    "href": "/media/2010/07/054-deep-in-the-jungle-animal-image.jpg",
    "width": 193,
    "height": 216,
    "align": "left"
  },
  {
    "type": "image",
    "src": "/media/2010/07/055-deep-in-the-jungle-happy-animals.jpg",
    "alt": "",
    "href": "/media/2010/07/055-deep-in-the-jungle-happy-animals.jpg",
    "width": 193,
    "height": 175,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Unhappy with this arrangement, the lion decides to eat his way back to the jungle, starting by eating his trainer in order to break free. He eventually finds his way back to the jungle where he and the other animals belong. This time, however, he has a much softer outlook and treats the other animals with respect."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian parents who are teaching their kids about ",
      {
        "type": "link",
        "href": "http://www.thevegetariansite.com/ethics_regan.htm",
        "external": true,
        "children": [
          "animal rights"
        ]
      },
      " and the downside of the circus will appreciate this story. It reminds us that the grass is not always greener on the other side, and that animals prefer their freedom."
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
