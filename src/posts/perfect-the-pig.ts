import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/9780805047042.jpg",
    "alt": "Perfect the Pig",
    "href": "/media/2010/08/9780805047042.jpg",
    "width": 210,
    "height": 271,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Before ",
      {
        "type": "link",
        "href": "/reviews/granny-gomez-and-jigsaw/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Granny Gomez and Jigsaw"
            ]
          }
        ]
      },
      ", vegetarian and vegan families had Susan Jeschke’s book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.vrg.org/family/Vegetarian-friendly_Kids_Booklist.pdf",
            "external": true,
            "children": [
              "Perfect the Pig"
            ]
          }
        ]
      },
      ". Celebrating porcine intelligence and the human-animal bond, Ms. Jeschke’s storybook also deals with animal cruelty and the problems that arise when we use animals for our own purposes rather than allow them to simply be who they are."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the runt of the litter, Perfect the Pig is ignored by his mother and the other pigs. Nonetheless, when a large sow falls over and cannot get up, he rescues her by helping her up. As a reward for his selflessness, the sow grants him a wish, and Perfect grows wings, which allow him to fly away."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The winged piglet lands on the balcony of a woman named Olive, who feeds him, “then put[s] him to bed and kisse[s] him goodnight.” When the piglet kisses her back, she exclaims, “How perfect!” and decides to name him Perfect. Perfect’s life with Olive is idyllic. She cherishes him and does all she can to care for him and celebrate who he is, painting his portrait and lavishing him with love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Olive lives in a city apartment so she regularly brings Perfect to the roof to fly. On one of those occasions, he gets caught in a storm, which leads to his capture by a man who makes him perform, keeps him in a cage, and threatens him with violence. Happily, Olive eventually finds him and they move to the country."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents will appreciate Ms. Jeschke’s acknowledgment of the fate of most pigs without dwelling on the slaughter of animals. Olive’s attempts to protect Perfect, such as shielding him from seeing the dead pigs hanging in a storefront window, remind me of my own efforts to protect my daughter without being dishonest. People interested in animal rights will also appreciate that the disagreement between Olive and the man over Perfect is settled by a judge who allows the pig to choose."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8. For a lesson plan keyed to the book, visit ",
      {
        "type": "link",
        "href": "http://www.teachkind.org/pdf/Lesson_pigs.pdf",
        "external": true,
        "children": [
          "TeachKind"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
