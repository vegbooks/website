import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Girl Reading",
    "width": 220,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My 8-year-old daughter has been making her way through every book in the ",
      {
        "type": "emphasis",
        "children": [
          "Vet Volunteers"
        ]
      },
      " book series available at our local library. The series combines her love of mystery novels (she’s also reading every ",
      {
        "type": "emphasis",
        "children": [
          "Nancy Drew"
        ]
      },
      " book available) with her love of animals. The series, an ",
      {
        "type": "emphasis",
        "children": [
          "American Girl"
        ]
      },
      " spin-off, follows 11-year-old Maggie whose Grandmother owns a veterinary clinic and her four friends who volunteer at the clinic. In each book there is an animal mystery. In the first book, there is a crisis involving 10 sick puppies that arrive together at the clinic. It’s found that the puppies were bred in an illegal puppy mill which the kids help shut down."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The most recent book has inspired her to take action. In ",
      {
        "type": "emphasis",
        "children": [
          "Treading Water"
        ]
      },
      ", the Vet Volunteers discover pets abandoned after Easter, including baby chicks, baby ducks, and bunnies. They launch a campaign to stop the community from giving animals as pets. Immediately my daughter started designing a poster to hang at her school with a similar message that she wants to display prior to Easter."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’ve never read these books. My recommendation comes solely from seeing what kind of reaction they elicit in my daughter. She loves to read them and has read about 10 of them in the last 2 weeks. But even better, these books have inspired her to take action for animals. I highly recommend Vet Volunteers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Amazon recommends these books for ages 8-12 and that seems about right."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
