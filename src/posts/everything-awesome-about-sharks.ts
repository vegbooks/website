import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/07/everything-awesome-sharks-1.jpg",
    "alt": "Everything Awesome About Sharks",
    "width": 341,
    "height": 400
  },
  {
    "type": "paragraph",
    "children": [
      "The full title of this fantastic non-fiction book by Mike Lowery is ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338359732",
        "external": true,
        "children": [
          "EVERYTHING AWESOME ABOUT SHARKS AND OTHER UNDERWATER CREATURES"
        ]
      },
      ". The cover promises “totally shocking facts!” and the book certainly delivers. The colorful book is broken up into parts like “Out Amazing Oceans!” “SHARKS!” and “Extreme Marine Habitats.” Each section is stuffed with really amazing information (Do you know what Point Nemo is? How about what The Bloop! actually was?) and delightful illustrations that accentuate facts and entertain readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Lowery’s pacing is excellent for the intended audience of 7-10 year olds; he doesn’t give away prime nuggets right away. He uses interest in sharks to educate about fish in general. And he touches on various shark facts to juxtapose characteristics and preferences to highlight unique attributes. Then POW! Lowery inserts a “fun fact” about what has been found inside sharks’ stomachs. It’s the perfect balance between real-life horror and cartoonish glee for its readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book also spotlights the coral reefs and some of the thousands of species that live in them, the glowing creatures of the Deep Sea and the Dark Zone (hello, Vampire Squid!), and even narwhals make an appearance. Part Five is short, but in its “Save the Sharks” theme it points out that plastic has been found in 100% of sea turtles and that by 2050 the ocean will contain more plastic than fish. Ugh! The section concludes with some tangible actions young readers can take to help stem the flow of plastic into the oceans."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The drawing style and comic-like captions are aimed at the older elementary crowd, but more mature readers will definitely learn a lot and find the style hilarious as well. The information is digestible and fun, and it doesn’t talk down to readers or waste time with the obvious. ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338359732",
        "external": true,
        "children": [
          "Everything Awesome About Sharks and Other Underwater Creatures"
        ]
      },
      " is highly recommended!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
