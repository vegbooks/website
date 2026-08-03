import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Jubela",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I never could watch “Bambi” or “The Land before Time” more than once. Any baby, whether animal or human, losing his or her mother is one of the most depressing things I could ever imagine. I do, however, give much credit to these emotionally charged films for helping to lay and build up the foundation of my wide circle of compassion. That our animal brethren can suffer and express joy like we do is something we must teach children – in earnest – from an early age."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the heartland of South Africa’s Swaziland comes this story of an infant rhino who loses his mother to poachers. Fending for himself for days without food and water, Jubela encounters the striking wildlife of his environment: “baby listened to the clicking quills of a passing porcupine,” “elephants, their long, heavy trunks sweeping the earth, brought the sunrise,” “pounding hooves woke baby. A herd of zebra…”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Unlike the harsh realities much of Africa’s wildlife face, ",
      {
        "type": "link",
        "href": "http://www.cristinakessler.com/Books_6.htm",
        "external": true,
        "children": [
          "Jubela’s tale"
        ]
      },
      " is fortuitous and poetically scripted and illustrated. At the Mkhaya Game Reserve, an old mother rhino provided the love and wisdom Jubela needed to survive. This is a stark, but tender look into the hardships of poaching and conservation, orphans and adoption."
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
