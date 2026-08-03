import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "I received a review copy of ",
      {
        "type": "emphasis",
        "children": [
          "Letters of the West: An ABC Book of the Many Plants, Animals, and Other Curious Features of the West"
        ]
      },
      " from ",
      {
        "type": "link",
        "href": "http://www.craigmorecreations.com/",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      " just after we returned from a road trip that took us alone the length of Nevada from Las Vegas to Lake Tahoe and Carson City. Perfect timing since my 6 and 4 year old had just seen the landscape go from desert to mountain and then back again for our total 16 hours + of driving!"
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/09/lettersofthe-west.jpg",
    "alt": "LettersoftheWest",
    "width": 480,
    "height": 461,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "The book is illustrated on scratchboard with muted colors and it covers features of California, Oregon, Washington, and a bit of Nevada. My favorite was the letter “X” for “xeriscape” (desert landscaping). I think it is a beautiful book and the inclusion of scientific names is very neat. I even learned a new word, “alpenglow,” referring to “when the mountains light up in a rosy hue before sunrise or sunset.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is appropriate for all ages but I would say it skews to older kids that can appreciate the invitation the book seems to have for spotting what is native to their area. It may also be a good baby shower gift because of the beautiful illustrations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "On the subject of learning new words like “alpenglow,” Vegbooks editor Jessica Almy and I were recently talking about words involving hibernation. Being dormant for the summer, for example, is called “estivation” and “brumation” is what reptiles do in the winter. Have you learned any nature-related new terms recently?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
