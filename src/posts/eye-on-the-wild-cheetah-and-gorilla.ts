import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/eszterhas-cheetah-cover.jpg",
    "alt": "Eye on the Wild: Cheetah and Gorilla",
    "href": "/media/2012/04/eszterhas-cheetah-cover.jpg",
    "width": 210,
    "height": 228,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Everyone loves baby animals. Even the most jaded adult will admit to succumbing to warm fuzzies when faced with kittens and puppies. ",
      {
        "type": "link",
        "href": "http://www.suzieszterhas.com/",
        "external": true,
        "children": [
          "Suzi Eszterhas"
        ]
      },
      ", an award-winning wildlife photographer, has a new series from ",
      {
        "type": "link",
        "href": "http://www.franceslincoln.com/",
        "external": true,
        "children": [
          "Frances Lincoln"
        ]
      },
      " called ",
      {
        "type": "emphasis",
        "children": [
          "Eye on the Wild"
        ]
      },
      ". The first two of the four-book series are ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1847803016/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1847803016",
            "external": true,
            "children": [
              "Cheetah"
            ]
          }
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1847802990/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1847802990",
            "external": true,
            "children": [
              "Gorilla"
            ]
          }
        ]
      },
      ". A combination of adorable photographs of baby animals with their mothers and families and easy-to-grasp facts about how the animals thrive and grow, these books are interesting and entertaining for children in a range of ages."
    ]
  },
  {
    "type": "image",
    "src": "/media/2012/04/eszterhas-gorilla-cover.jpg",
    "alt": "",
    "href": "/media/2012/04/eszterhas-gorilla-cover.jpg",
    "width": 210,
    "height": 228,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "The books provide excellent opportunities for discussing parent-child relationships, how animals are similar to and different from humans, and to learn about the animals in their own environment. Both the ",
      {
        "type": "emphasis",
        "children": [
          "Cheetah"
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          "Gorilla"
        ]
      },
      " books are mom-centric. In fact, the ",
      {
        "type": "emphasis",
        "children": [
          "Cheetah"
        ]
      },
      " book doesn’t address where the dad or other family members are. My children were definitely curious about where the cubs’ father was, and the book doesn’t provide an explanation for nature’s influence on the Cheetah family make-up."
    ]
  },
  {
    "type": "image",
    "src": "/media/2012/04/gorm-d3750.jpg",
    "alt": "",
    "href": "/media/2012/04/gorm-d3750.jpg",
    "width": 252,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The ",
      {
        "type": "emphasis",
        "children": [
          "Gorilla"
        ]
      },
      " book has a lot of wonderful family scenes including an emphasis on breastfeeding and baby-carrying. The photographs are gorgeous, and they show how close to the Great Apes we really are. Very young children will enjoy looking at the photographs and hearing simple facts, and preschoolers up to age eight or so will be interested in the photographs together with the facts and explanations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For families who wish to steer clear of violence, even in nature, the ",
      {
        "type": "emphasis",
        "children": [
          "Cheetah"
        ]
      },
      " book has mild reference to the mother hunting for her cubs. Otherwise, the books focus on the babies learning to do daily chores and take care of themselves."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
