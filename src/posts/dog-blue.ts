import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/9780763638818.jpg",
    "alt": "Dog Blue",
    "href": "/media/2011/01/9780763638818.jpg",
    "width": 210,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Bertie loves the color blue, so much that he’s got a blue dog collar and pretends he has a ",
      {
        "type": "emphasis",
        "children": [
          "blue"
        ]
      },
      "dog. So when a “black and white, beautiful, spotted, perfect dog” comes into his life, he decides that he should give the dog something blue: the name Blue!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will appreciate the simple affection of a boy for his dog, and parents will appreciate that the book models good caretaking. Bertie feeds Blue, pets him, takes him for walks, and plays with him. The only “gray area” in this book is how Blue came into Bertie’s life. The reader is told that Blue was a “tiny dog, all alone and looking for an owner.” While this ",
      {
        "type": "emphasis",
        "children": [
          "sounds"
        ]
      },
      " like a rescue situation, I would have appreciated if a brief visit to the animal shelter was involved."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Still, this book is a good read and has been recommended by several humane organizations, including the ",
      {
        "type": "link",
        "href": "http://www.humanesocietyofnortheastgeorgia.org/education/reading.php",
        "external": true,
        "children": [
          "Humane Society of Northeast Georgia"
        ]
      },
      " and the now-defunct Humane Society Youth."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
