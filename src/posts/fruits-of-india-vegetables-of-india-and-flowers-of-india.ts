import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/fruits-cover.jpg",
    "alt": "Fruits of India, Vegetables of India, and Flowers of India",
    "href": "/media/2011/01/fruits-cover.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When it’s Indian Night in our household, I’m usually the sous chef prepping all the fruits and veggies for our masalas, curries and chutneys. And when these three titles, ",
      {
        "type": "link",
        "href": "http://www.tarabooks.com/books/books/young-readers/beginners/vegetables-of-india/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Fruits of India"
            ]
          },
          ", ",
          {
            "type": "emphasis",
            "children": [
              "Vegetables of India"
            ]
          },
          ", and ",
          {
            "type": "emphasis",
            "children": [
              "Flowers of India"
            ]
          }
        ]
      },
      ", made their way into my hands, I was not only giddily surprised, but remarked, “Well, it’s about time!” Rarely do baby board books covering the subject of produce broach the exotic, much less in a picturesque format. Photographers Helmut Wolf (Flowers) and Jill Hartley (Vegetables, Fruits) do a remarkable job capturing their subject matter and providing an attractive array of colors, textures, and shapes for little ones to inspect and appreciate."
    ]
  },
  {
    "type": "image",
    "src": "/media/2011/01/vegetables-of-india.jpg",
    "alt": "",
    "href": "/media/2011/01/vegetables-of-india.jpg",
    "width": 210,
    "height": 210,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "While babies may recognize some produce and flowers (watermelon, grapes, carrots, corn, roses), they’ll delight in the unusual (bittergourd, drumstick, ixora, sapota, muskmelon). I only have one “I wish they would have…” So that there’d be a stronger literary component, I wish the authors had included the written names of each plant on its corresponding page. They opted, however, to include them at the end of the publications – without page numbers – which does it make it difficult to reference them. All in all, this is a great mini series for parents and caretakers interested in igniting a flare for foreign fare in their little ones."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For babies and preschoolers."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
