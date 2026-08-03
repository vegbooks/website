import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/09/ahft-book-cover-final.jpg",
    "alt": "AHFT-Book Cover-Final",
    "href": "/media/2013/09/ahft-book-cover-final.jpg",
    "width": 210,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m absolutely enchanted by the new trend in libraries and literacy efforts that partners youth together with canine therapy dogs with the aim of enhancing a child’s reading skills. Studies show that kids who read to canines significantly increase their reading and comprehension skills. Researchers at University of California – Davis found that children who read to dogs increased their reading fluency between 12 percent and 30 percent."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In my neck of the woods, in Santa Barbara, CA, humane education specialist Karen Lee Stevens started her own organization All for Animals, which runs a wonderful program called ARF, or Animals + Reading = Fun. As part of ARF, she wrote and published her first children’s book that she actively uses in the classroom. At the end of each classroom presentation, first and second graders get a complimentary take-home copy of ",
      {
        "type": "emphasis",
        "children": [
          "Animals Have Feelings, Too! Exploring Emotions A to Z"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book does just what its title suggests and uses the letters of the alphabet to showcase the vast range of emotions animals, in this case dogs, and people alike experience (A = affectionate, B = bubbly; C = compassionate). Readers follow the story of Sandy the labrador, who in real life is the therapy dog that goes into classrooms with Karen. What I particularly like about this book are the uncommon adjectives used to describe Sandy, or any animal, for this early elementary audience: voiceless, tender, zonked, envious, impatient. They’ll foster great discussions for parents or educators and their young ones."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Visit the ",
      {
        "type": "link",
        "href": "http://allforanimals.org/arf/",
        "external": true,
        "children": [
          "AFA website"
        ]
      },
      " for more information and a downloadable coloring page inspired by the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
