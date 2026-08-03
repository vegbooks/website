import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/12/michael-recycle-christmas1.jpg",
    "alt": "Michael Recycle Saves Christmas",
    "href": "/media/2012/12/michael-recycle-christmas1.jpg",
    "width": 210,
    "height": 194,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "All families who care about animals should also care about the planet. After all, having a healthy planet involves helping to take care of the animals and ensuring that they will have all they need to naturally survive and thrive. Yet we live in a society filled with consumerism, disposables, and a “shop ’til you drop” mentality, especially when it comes to Christmas. This is why I found ",
      {
        "type": "emphasis",
        "children": [
          "Michael Recycle Saves Christmas"
        ]
      },
      " to be a welcome breath of fresh air!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Written in an entertaining and fast-moving rhyming pattern, the book tells a story of how Santa needed help in order to have enough toys for everyone. Rather than use fresh resources or hit all the stores they can find, Michael Recycle springs into action and uses his imagination and things like tires, chestnuts, scissors and glue in order to make gifts."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a good book that is fun to read and offers a good environmental message for children. While there are references to cookies, sweets, and a feast fit for a king, there are no images or references that vegetarian and vegan parents would prefer their children not to be exposed to. This story makes a nice addition to any child’s book collection!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
