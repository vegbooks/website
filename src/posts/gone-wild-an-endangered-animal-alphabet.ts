import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Gone Wild: An Endangered Animal Alphabet",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 140,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://davidmclimans.com/3.htm",
            "external": true,
            "children": [
              "Gone Wild, An Endangered Animal Alphabet"
            ]
          }
        ]
      },
      ", David McLimans creates a beautifully artistic animal alphabet that reminds us of the variety of animal life sharing our earth. The unique black and white animal letters (in the style of a pictogram) paired with details about the 26 critically endangered, endangered, or vulnerable species of animals earns him the Caldecott Honor. Each page focuses on a large letter sprouting ears, teeth, scales, beaks, or horns that are playfully reminiscent of the animal. Each page also includes an informative box detailing the class, habitat, range, threat, status and a mini, red wood-block style image of the animal. The bold, fun graphics and simple colors leaves a strong visual impact. A section at the end of the book, provides additional zoological detail, information about what is threatening each species, and a listing of websites for organizations that help endangered species."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As Mr. McLimans states in his introduction:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“The earth is an amazing, beautiful, wondrous, diverse, and fragile planet. By protecting and saving animals and their habitats, we are also protecting ourselves.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I absolutely loved the illustrations in this book and its urging for us to learn about the broader world around us and how we humans impact it. Mr. McLimans encourages us to get to know our animal neighbors and instills the need for activism to protect them in this visual delight."
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
