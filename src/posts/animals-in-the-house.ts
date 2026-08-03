import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/animals-in-the-house.jpg",
    "alt": "Animals in the House",
    "href": "/media/2010/06/animals-in-the-house.jpg",
    "width": 211,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s hip. It’s fun. And it’s about my two favorite subjects: animals and history. While written as a Scholastic textbook, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://store.scholastic.com/webapp/wcs/stores/servlet/ProductDisplay_Animals+in+the+House:+A+History+of+Pets+and+People_14479_-1_10052_10051",
            "external": true,
            "children": [
              "Animals in the House"
            ]
          }
        ]
      },
      " is unbelievably reader-friendly, filled with puns, jokes, and lively fonts. Enough cannot be said of the graphic design work either. Always fresh and reflective of the subject at hand, kids can’t help but be drawn into the text and learn a thing or two about our long, evolving relationship with those furred, feathered and scaly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the basics of pet guardianship (like how the term “pet” was coined), through the domestication process and appearances of animals in historical societies (Ancient Greece, Victorian Era, White House) to special chapters just on canines and felines, Keenan’s text is quite thorough and representative of all things pets. On a personal note, I do wish she had used the terms ",
      {
        "type": "link",
        "href": "http://www.guardiancampaign.com/",
        "external": true,
        "children": [
          "guardian"
        ]
      },
      " (see In Defense of Animals’ Guardian Campaign) and companion animal instead of owner and pet!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall the book does a fair job of balancing views on having companion animals. Several sidebars indicate that animal protection organizations, scientists and the like find certain animals to be problematic, namely big cats, primates and even reptiles: “…It is dangerous, unfair to the animals, and environmentally harmful to take animals out of their habitats and bring them home.” Thanks for prompting ethical discussions regarding animals in our homes, Sheila!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
