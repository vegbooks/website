import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/9781589795655-mc-daniel.jpg",
    "alt": "Mardy Murie Did!: Grandmother of Conservation",
    "href": "/media/2011/03/9781589795655-mc-daniel.jpg",
    "width": 210,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I had never heard of Mardy Murie before reading this book, but after reading Jequita Potts McDaniel’s account of this pioneering conservationist, I now have an appreciation for the woman whose work influenced the Wilderness Act of 1964 as well as the Arctic National Wildlife Refuge and the expansion of the Grand Teton National Park in 1950. Zyle’s realistic, full-page illustrations of various wilderness scenes relevant to Murie’s life serve as the background to McDaniel’s short, lyrical verses in the form of questions and then the answer, the lively refrain “Mardy Murie did.” Some of the scenes readers see include a herd of caribou wandering in a meadow, a wolf howling at the moon, dogs pulling a sled, and a snow-covered cabin in a pristine setting with two adults and a child watching the Northern Lights in the midnight sky."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When I read this book to my son it didn’t take him long to catch on and repeat the refrain with me. This is a great book to read aloud to children and is appealing to all audiences interested in learning more about this inspirational woman or the history of conservation. A short biography is included for those interested in learning more about ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Margaret_Murie",
        "children": [
          "Murie’s life"
        ]
      },
      "."
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
