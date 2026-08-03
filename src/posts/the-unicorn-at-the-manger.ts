import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/12/082981146x1.jpg",
    "alt": "The Unicorn at the Manger",
    "href": "/media/2009/12/082981146x1.jpg",
    "width": 180,
    "height": 235,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.all-creatures.org/cva/default.htm",
        "external": true,
        "children": [
          "Vegetarian Christians"
        ]
      },
      " can take comfort in Roger L. Robbennolt’s ",
      {
        "type": "emphasis",
        "children": [
          "The Unicorn at the Manger: Yearlong Stories of the Holy Night"
        ]
      },
      ". While animals are relegated to the role of a living backdrop in some traditional nativity tales, the Rev. Robbennolt puts them front and center, exploring how the animals interact with Jesus and how His coming illuminates their treatment."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is divided into chapters that stand on their own as short stories. The chapter entitled “The Owl Who Found Freedom,” for example, retells the Epiphany story. It opens by explaining that Melchior’s camel led the way to the manger “because he bore not only a king but a compass.” Each morning, the narrator explains, the kings would consult the living compass, an owl, to determine the direction to take. Upon arriving in Bethlehem, the kings prepared to sacrifice the owl as a gift to the spirits who guided them, when Joseph stopped them. “This a place of life — not a place of death,” he chastised the kings. “Old sacrifices are unnecessary. …[Jesus] has come to free those held captive — right down to tiny owls.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is appropriate for all ages. It is out of print but is available secondhand."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
