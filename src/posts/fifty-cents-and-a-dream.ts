import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/12/fifty.jpg",
    "alt": "Fifty",
    "href": "/media/2013/12/fifty.jpg",
    "width": 210,
    "height": 225,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Fifty Cents and a Dream"
        ]
      },
      " covers the humble beginnings of Booker T. Washington, from his early life as a slave through his emancipation, early school attendance, and eventual fulfillment of his goal of attending college.Despite being an owned slave, prohibited by law from attending school or possessing books, young Booker has a longing to learn and a dream to read. As the story progresses, we see him make sacrifices and put in the hard work necessary to meet and exceed every goal he sets for himself. Ultimately, it is a story of perseverance in the face of great adversity."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I will admit that I didn’t know much about Washington prior to receiving my review copy of this book, and felt the story did not go to great lengths to educate me on the topic. But this seems to be by design, as the book leans more towards inspiration than information. For those that do want more detail, the supplementary information in the back of the book , including a comprehensive timeline of Washington’s life and accomplishments, rectifies this issue."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book’s illustrations are stunning and the collage style lends it a near 3-D feel in spots. The raised letters on the cover are a nice touch and the inside cover art is elegant. However, despite the uplifting story, the book overall has a subdued feel. Perhaps it’s meant to match the seriousness of the subject and the hardship that Booker endured throughout his journey, but I’m not sure I’d have picked up the book if browsing. Varying sources list the age range for this book as anywhere from age three to grade four. Due to the content covered in the piece, I’d suggest it is most appropriate for the elementary school reader. Given that slavery is a key theme and related vernacular is used, it would likely be best to have covered the topic first or be prepared for questions."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
