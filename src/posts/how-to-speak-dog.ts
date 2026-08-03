import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/04/how-to-speak-dog.jpg",
    "alt": "How To Speak Dog",
    "href": "/media/2020/04/how-to-speak-dog.jpg",
    "width": 202,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781426313738",
            "external": true,
            "children": [
              "HOW TO SPEAK DOG"
            ]
          }
        ]
      },
      " by Aline Alexander Newman and Gary Weitzman, D.V.M. is irreverent and nutty and fun and incredibly informative. With scores of body language, barking, and general dog-behavior examples to learn, any child who adores dogs will be absorbed and entertained in perpetuity. As with most National Geographic children’s publications, the photographs and graphics are sometimes silly and sometimes adorable, but always kid-friendly and on topic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This colorful book explains sweet doggy behaviors like putting a pay on your knee and licking your face, and it goes into concerning actions like ear scratching and chewing the woodwork around your home. Everything is explained in easy-to-understand language and images. Important for children — really everyone — there is also a page about greeting a “new” dog that includes how to approach and handle meeting a dog in public. One important section in “Body Talk” is the “Wiggles Away From You” tips. Children especially can get into sticky situations with dogs, and the authors explain how a dog may feel with a relatable comparison: “Hugging might feel as scary to a dog as it would to you if a bigger kid sat on your chest and refused to get off.” Yikes!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is so much to learn in ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781426313738",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "How to Speak Dog"
            ]
          }
        ]
      },
      ", and families will refer back to the different sections time and again. The different types of barks and tail wags and facial expressions. Younger children can focus on the photos and graphics and “fun facts,” while older children and adults can learn about the nuances of canine behavior and dog facts."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
