import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/lost-and-found.jpg",
    "alt": "Lost and Found: Three Dog Stories",
    "href": "/media/2011/07/lost-and-found.jpg",
    "width": 210,
    "height": 243,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "At some point we all get lost, and, if we’re lucky, we have a canine companion to help see us through…and vice versa. In Jim LaMarche’s triad of tender stories that feature child-dog friendships, he weaves through being lost and being found, finding home and nurturing home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Being lost could mean any number of things – physically lost, financially lost, emotionally lost – and this is certainly observed in the tales:"
    ]
  },
  {
    "type": "list",
    "items": [
      [
        "“Molly” – Anna, because of sassy fit, is sent to her room. With angst and determination she sets off to build her own abode with Molly, her dog, in the woods. As the sun sets, so do Anna’s hopes about finding her way back to her mom and her home."
      ],
      [
        "“Ginger” – Jules is off on a backwoods adventure with his folks. Ginger, the family dog, is along for the ride until she finds a deer to chase. Then she seems to be gone for good."
      ],
      [
        "“Yuki” –Although Jack desperately wants to keep Yuki, a dog he finds, his mom’s unemployment and small trailer make it financially and physically impossible. Elderly Mrs. Merino is soon reunited with Yuki and offers sanctuary and employment to both mother and son."
      ]
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Naturally, all the stories have happy endings, but what I also love are the different family dynamics at play. Jack’s mother seems to running a single-parent household. Jules’ family is African-American. Anna’s father isn’t mentioned or seen in the book. Perhaps your family can see itself in one of these narratives so beautifully and calmingly illustrated by LaMarche, but enjoying a ",
      {
        "type": "link",
        "href": "http://www.vegeusa.com/",
        "external": true,
        "children": [
          "faux version"
        ]
      },
      " of the tuna or bologna sandwiches referenced in the text."
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
