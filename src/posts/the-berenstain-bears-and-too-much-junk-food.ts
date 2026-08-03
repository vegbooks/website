import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/978-0-394-87217-9.jpg",
    "alt": "The Berenstain Bears and Too Much Junk Food",
    "href": "/media/2010/09/978-0-394-87217-9.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "All kids can use the message in ",
      {
        "type": "emphasis",
        "children": [
          "The Berenstain Bears and Too Much Junk Food"
        ]
      },
      "— that healthy, nourishing foods are better than candy and processed snacks — but vegetarian and vegan families might have some heavy editing to do when they read this book. After all, we don’t define “healthy” and “nourishing” the way that Stan and Jan Berenstain do."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I found some of the differences in opinion easy to explain because the Berenstain Bears are after all bears — and bears eat fish, even though we don’t. Still, that didn’t go far enough to explain why the bears delight in drinking milk and eating cheese, which I can only assume is not ",
      {
        "type": "link",
        "href": "http://www.daiyafoods.com/",
        "external": true,
        "children": [
          "Daiya"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Nonetheless, this book started a good conversation for kiddo and me. We discussed the traditional four food groups and what other sources of protein could be. (To the Berenstains’ credit, they do include beans and nuts in the “meat” category, though we’d also add ",
      {
        "type": "link",
        "href": "http://vegweb.com/index.php?board=163.0",
        "external": true,
        "children": [
          "tofu, tempeh, seitan"
        ]
      },
      ", and quinoa.) We also enjoyed the pictures of the nervous, circulatory, muscular, skeletal, and digestive systems. And many of the healthy snack choices are ones we enjoy too: carrot sticks, raisins, and nuts."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All in all, this book is a mixed bag for kids ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
