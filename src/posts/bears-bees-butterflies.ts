import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/newbearcd.jpg",
    "alt": "Bears, Bees & Butterflies",
    "href": "/media/2011/08/newbearcd.jpg",
    "width": 210,
    "height": 193,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Get ready for Vegbooks’ first CD review! I had the pleasure of meeting the ever so talented Paul Helou at ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/about/events/tafa/",
        "external": true,
        "children": [
          "HSUS’s Taking Action for Animals Conference"
        ]
      },
      " this July, and he graciously provided me a copy of his latest album of nature-inspired songs for children: ",
      {
        "type": "emphasis",
        "children": [
          "Bears, Bees & Butterflies."
        ]
      },
      " Paul is not only a theatrical improviser and actor, but a gifted musician and songwriter, which certainly shines through in this 20-track production geared towards preschoolers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The three-year-old that I care for from time to time really enjoyed listening to Paul’s musical stylings on our car trips around town this week, but I’ll admit that I even started to sing along with Paul. The lyrics and arrangements are so catchy, creative and fun, that you just can’t help it! And each song is quite unique from any other, not only in subject matter, but rhythm and style too. “The Legend of Black Bear Lake” reminds me a sleep-away campfire song, while “Dancing Bumblebee” is the perfect dance tune for preschoolers who want to imagine themselves as these magnificent insects flying around in a garden setting. The entire album is a testament to the beauty of nature, a celebration of our connection to it, and a reminder that we need to take care of it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Pick up a copy and enjoy the sound of acoustic guitars, percussion, fiddle, and even a mandolin on ",
      {
        "type": "emphasis",
        "children": [
          "Bears, Bees & Butterflies!"
        ]
      },
      " For a preview of the songs, visit ",
      {
        "type": "link",
        "href": "http://www.paulhelou.com/home.html",
        "external": true,
        "children": [
          "Paul Helou’s website"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2+"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
