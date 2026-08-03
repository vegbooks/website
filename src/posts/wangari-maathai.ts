import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This straightforward telling of ",
      {
        "type": "emphasis",
        "children": [
          "Wangari Maathai: The Woman Who Planted Millions of Trees"
        ]
      },
      " by Franck Prévot, is accompanied by colorful and beautiful illustrations by Aurélia Fronty that help set the tone of hope and action throughout the book. This storybook, based on the true story of a young Kenyan girl who became the leader of an environmental and social movement. Aimed at 6-9 year olds, this book will be interesting and educational for both children and parents."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/03/wangari-300dpi.jpg",
    "alt": "Wangari_300dpi",
    "width": 464,
    "height": 464,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "I read this book aloud to my six year old, and we stopped several times to discuss details and the scenes depicted in the art. Told in the present tense, the events feel like they happened very recently. The story deals with important and difficult issues (British colonialism, gender inequality, environmental impact) in understandable and clear descriptions that allow children to ask age-appropriate questions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story of Wangari Maathai, Nobel Peace Prize winner and environmental and human rights activist, is inspirational. This storybook version of her life demonstrates the importance of family, caring for the earth, and working hard for your values even when faced with opposition. The story highlights actions children can easily relate to, they will connect to Wangari’s desire to plant trees, provide a habitat for animals, help those in need, and stand up for justice."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The vivid colors and whimsical illustrations are a fantastic accompaniment to the story. With trees and leaves central to the picture themes, readers will enjoy finding hidden surprises in the details. The tone of the story is also supported by the different choices of colors and styles, and the revolution created by Wangari is shown in both realistic and fantastical images in the pages."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Following the story, which takes the reader through Wangari Maathai’s triumphant election to Parliament and Nobel Peace Prize award, there are photographs and information about Kenya and the legacy Wangari left behind. Highly recommended."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " sent a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
