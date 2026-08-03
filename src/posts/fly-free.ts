import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/fly-free-8550.jpg",
    "alt": "Fly Free!",
    "href": "/media/2011/08/fly-free-8550.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This book is an excellent introduction to the Buddhist concepts of karma and satsarma. Set in Vietnam, the story begins and ends with a young girl named Mai, who longs to set sparrows at a nearby temple free from their cages. The cost to do so is more than Mai’s family can afford, but she helps the vendor feed them. The story notes that in Buddhism, it is considered a good deed to set animals free."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Another girl named Thu is visiting the temple at the same time as Mai. When Thu exits the temple, Mai invites Thu to help her feed the sparrows, setting in motion a circle of kindness toward others without desire for personal benefit– what we now sometimes refer to in our culture as paying it forward. Thu helps a girl on the roadside, and in turn the girl helps an ox cart driver, who later helps a baker…until the good deeds come back to Mai, and a grateful man pays the bird vendor to set the temple sparrows free. The vendor allows Mai to set them free, and the story closes with the young girl reiterating the phrase echoed by all the characters throughout the book: when you do a good deed, it comes back to you."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a handsomely illustrated tale about practicing kindness toward other creatures. This story’s message is an important one. Caregivers should know that there are depictions of animals being used in different ways (including the caged sparrows)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
