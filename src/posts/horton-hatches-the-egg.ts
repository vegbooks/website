import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/978-0-7393-3931-2.jpg",
    "alt": "Horton Hatches the Egg",
    "href": "/media/2010/02/978-0-7393-3931-2.jpg",
    "width": 241,
    "height": 328,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m just crazy about Dr. Seuss’s elephant ",
      {
        "type": "link",
        "href": "/reviews/horton-hears-a-who-the-book/",
        "external": true,
        "children": [
          "Horton"
        ]
      },
      ". ",
      {
        "type": "emphasis",
        "children": [
          "Horton Hatches the Egg"
        ]
      },
      " is quintessential Horton. He’s heroic, true to his word, and unwavering in his commitment to do good."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When a momma bird needs a break from her nest, Horton reluctantly takes over, keeping her egg warm over the course of months. When it rains, he gets drenched so that no harm will come to the baby inside. When hunters come, he stands (well, sits) his ground, never abandoning the egg for his own safety. And when he’s dragged off to the circus, he dutifully cares for the egg, despite ",
      {
        "type": "link",
        "href": "http://www.circuses.com/",
        "external": true,
        "children": [
          "his own misery"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I won’t spoil the ending but I must tell you that it’s very good, both from a preschooler’s perspective and a vegan momma’s vantage point."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Horton-Hatches-Egg.html",
        "external": true,
        "children": [
          "Ages 4-7"
        ]
      },
      ". Homeschooling parents and teachers might enjoy ",
      {
        "type": "link",
        "href": "http://www.nancypolette.com/LitGuidesText/horton.htm",
        "external": true,
        "children": [
          "this lesson plan"
        ]
      },
      "to accompany the text."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
