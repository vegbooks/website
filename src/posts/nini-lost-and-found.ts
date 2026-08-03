import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/978-0-375-85880-2.jpg",
    "alt": "Nini Lost and Found",
    "href": "/media/2011/05/978-0-375-85880-2.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When indoor kitty Nini spies an open door on a beautiful day, she strolls outside, though it can’t be said that she doesn’t look back and fondly recall all of the cozy spots in the house. However, the sensory delights of the summer day entice her to keep exploring through grasses, garden and woods. As the sunlight fades, Nini realizes too late that the woods contain danger for a domestic cat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Huddled in a dark hiding place, a scared Nini eventually hears the calls of her human companions, encouraging her to come to them. She screws up her courage, dashing homeward through the frightening dark woods and is soon reveling in the comfort of being where she belongs."
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
            "href": "http://www.powells.com/biblio/1-9780375858802-3",
            "external": true,
            "children": [
              "Nini Lost and Found"
            ]
          }
        ]
      },
      " is a charming story that illustrates not only adventures of an adorable tiger kitty but the importance of maintaining a safe environment for one’s animal. Caldecott Honoree ",
      {
        "type": "link",
        "href": "http://www.anita-lobel.com/Anita_Lobel/anita-lobel.com.html",
        "external": true,
        "children": [
          "Anita Lobel"
        ]
      },
      " hits just the right tone in this story with her message and accompanying illustrations. Nini was right to feel anxious about the animals she sensed in the woods, for in reality predators abound and the outdoors is not a safe place for cats — just as outdoor cats make it less safe for birds, small mammals and reptiles."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
