import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/operation-redwood.jpg",
    "alt": "Operation Redwood",
    "href": "/media/2011/05/operation-redwood.jpg",
    "width": 210,
    "height": 317,
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
            "href": "http://www.powells.com/biblio?isbn=0810983540",
            "external": true,
            "children": [
              "Operation Redwood"
            ]
          }
        ]
      },
      " is a delightful, fast-paced and absorbing novel about twelve-year old Julian Carter-Li. Julian’s complicated family situation finds him living with his uncle, head of giant investment company, IPX, and his uncle’s family in San Francisco."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One day, Julian reads an email not meant for his eyes, and an entire chain of events is set into motion. Julian and his young friends work together to attempt to save a grove of old-growth redwood trees in northern California from being clear cut. Since the land is part of IPX’s portfolio, Julian’s actions have a direct connection to his uncle and his work. Along the way, we meet many colorful and compelling characters, including Julian’s friends Danny and Robin (co-conspirators in the complex secret plan to save the redwoods), his strong-willed grandmothers, Julian’s young cousin and various members of Robin’s family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author S. Terrell French is an environmental attorney as well as a mother and ",
      {
        "type": "emphasis",
        "children": [
          "Operation Redwood"
        ]
      },
      " is clearly a product of both of these experiences. The politics, personalities, policies and laws surrounding ",
      {
        "type": "link",
        "href": "http://www.wildcalifornia.org/action-issues/programs/industrial-forestry-reform/how-a-timber-harvest-plan-works/",
        "external": true,
        "children": [
          "timber harvest plans"
        ]
      },
      " are complicated and confusing (to say nothing of frustrating), but Ms. French has distilled them all into a very readable and enjoyable story. In Julian, Danny and Robin, she has created characters who are age-appropriate but also very smart and savvy; that they are portrayed as such intelligent, problem-solving kids is very appealing. Adults who are interested in the book will see some very obvious parallels to the ",
      {
        "type": "link",
        "href": "http://www.msnbc.msn.com/id/26858224/",
        "external": true,
        "children": [
          "Headwaters/Pacific Lumber/Maxxam imbroglio"
        ]
      },
      " in the plot and in fact the book features a very informative author’s note about the history and events that have transpired in Humbolt County, CA."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is very highly recommended for ages 9-14, although the story is so well written that older teens and adults will enjoy it as well."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
