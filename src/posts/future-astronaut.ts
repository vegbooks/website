import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/06/900.jpeg",
    "alt": "Future Astronaut",
    "href": "/",
    "width": 278,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "A new board book in the Future Baby series is out today! ",
      {
        "type": "link",
        "href": "https://kids.scholastic.com/kids/book/future-astronaut-by-lori-alexander/",
        "external": true,
        "children": [
          "FUTURE ASTRONAUT"
        ]
      },
      " is adorable and informative and it even includes a lesson in languages. The big-headed babies in the book are compared to astronauts as they go to the doctor, eat their meals, and float in space. Suggested for infants through three-years-old, the book is a perfect way for children to imagine themselves traveling in a rocket ship, or just having an adventure."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The simple text and consistent comparison style in Lori Alexander’s story ensures that young readers will understand both what the astronauts are doing and how their own daily routines relate. Allison Black’s illustrations are joyful and colorful, and the faces share clear emotions that children will be able to identify and emulate. Together, the text and imagery create a wonderful book that will be read again and again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The end of Future Astronaut has “fun facts” also chosen to relate to a young child’s day. Did you know that crackers and bread aren’t allowed in space because crumbs float into astronauts’ eyes and noses? No crackers?!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended for ages 0-3 years."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
