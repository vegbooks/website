import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/04/llama-glamarama.jpg",
    "alt": "Llama Glamarama and Free to Be Elephant Me",
    "href": "/media/2021/04/llama-glamarama.jpg",
    "width": 275,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Two more books about being true to yourself are out now. ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338736182",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "LLAMA GLAMARAMA"
            ]
          }
        ]
      },
      " focuses on Larry the Llama who loves to dance (shhhh!) and ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338734270",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "FREE TO BE ELEPHANT ME"
            ]
          }
        ]
      },
      " follows a small elephant named Num-Num who discovers his Me-ness and inspires all around him. Both are geared towards pre-school and early elementary readers, and both are expressive options for read-aloud."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Llama Glamarama"
        ]
      },
      ", written by Simon James Green and illustrated by Garry Parsons, is a glorious, flamboyant, rainbow-bright picture book about learning to share who you are and realizing that everyone also has something different and special about themselves. Larry loves to dance, but llamas are well-behaved and calm, so he hides his passion from even his closest llama friends. After leaving home and discovering a place where everyone dances and loves bright colors, Larry returns and lets his friends know that he loves to dance. To his surprise, each of his friends has a secret of their own — and everyone is happy to finally fully be who they are! Of course, they celebrate with a rollicking dance party."
    ]
  },
  {
    "type": "image",
    "src": "/media/2021/04/free-to-be-elephant-me.jpg",
    "alt": "",
    "href": "/media/2021/04/free-to-be-elephant-me.jpg",
    "width": 245,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Free to Be Elephant Me,"
        ]
      },
      " written by Giles Andreae and illustrated by Guy Parker-Rees",
      {
        "type": "emphasis",
        "children": [
          ","
        ]
      },
      " is just as delightful, but it has a more poignant journey to the celebration of self. Every young elephant must display their talents for an elephant name bestowed by the elephant king, Elephant Mighty. Everyone else seems to know exactly what their special talent is — except for Num-Num. The cruel king ends up naming Num-Num “Elephant Nothing-At-All,” and the little elephant moves far away. Away from tradition and expectations, little Num-Num finds friends quickly thanks to his kindness and generosity. With confidence his new friends help bolster, Num-Num returns home and announces that he is naming himself ",
      {
        "type": "emphasis",
        "children": [
          "Elephant Me,"
        ]
      },
      " and his declaration that “Being YOU is ENOUGH” brings the king to tears. All the animals then celebrate with…you guessed it, a rollicking dance party."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Both picture books have colorful, action-packed pages filled with animals and myriad details for children to discover. Despite the similar messages, the books are more complimentary than repetitive. ",
      {
        "type": "emphasis",
        "children": [
          "Llama Glamarama"
        ]
      },
      ", with its rainbow theme and allusions to Donna Summer and Pride, has a positive LGBTQ+ slant. ",
      {
        "type": "emphasis",
        "children": [
          "Free to Be Elephant Me"
        ]
      },
      " is more about feeling inadequate and realizing that our traditional accomplishments are not equal to our worth. Children and caregivers will enjoy them both!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
