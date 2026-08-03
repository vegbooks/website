import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/10/love-you-when-cover.jpg",
    "alt": "Love You When",
    "href": "/media/2012/10/love-you-when-cover.jpg",
    "width": 210,
    "height": 183,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Open your eyes; love is everywhere. ",
      {
        "type": "emphasis",
        "children": [
          "Love You When"
        ]
      },
      " by Linda Kranz is a sensory exploration of the concept of unconditional love. My favorite line is: ",
      {
        "type": "emphasis",
        "children": [
          "I only have to look at you and by your expression I know what you are thinking."
        ]
      },
      "This line reminds me that is love an open and unconditional willingness to receive and accept. Kranz clearly describes love as a state of being; an awareness, not just a feeling. Love is within each and every one of us."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love how Kranz reassures us with simple daily occurrences, to illustrate love. Fireflies, rainbows, butterflies, clouds, leaves and stars are there for all to see. We all have the power to imagine, create and be free. Love is that power. Kranz’s imagery and words are a reminder of the universal quality of love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Her descriptive words are accentuated by rock collages in which she magically creates a moment in nature by blending together rocks of all colors shapes and sizes. I truly feel the wonder of nature and an element of surprise as I turn each page."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is a delight for children and lovers alike. It calms the mind and alleviates the anxiety we feel when separated from a loved one. For it is comforting to know that we can be reminded of love by looking at natural wonders. This is particularly comforting for young children as they fall asleep at night. For adults it is a reminder that curiousity, that desire to explore, keeps us vibrant."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Perhaps Kranz’s work falls near and dear to my heart because I feel such a deep connection to nature. Each time I see a rainbow, I think of my grandfather smiling. When I see a ladybug, I am always in awe of its deep red color and eager to count its spots. This curiousity makes me feel alive and vibrant each day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The only thing that disappoints me about Kranz’s book is the title, ",
      {
        "type": "emphasis",
        "children": [
          "Love You When"
        ]
      },
      " for it suggests that love follows after a particular event. Love is omnipresent and ever present if you are willing to open your eyes. In my humble opinion, the title should be ",
      {
        "type": "emphasis",
        "children": [
          "Love You Everywhere."
        ]
      }
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
            "href": "https://rowman.com/",
            "external": true,
            "children": [
              "Rowman & Littlefield"
            ]
          },
          " provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
