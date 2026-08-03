import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/9780823417049-1.jpg",
    "alt": "Souperchicken",
    "href": "/media/2010/04/9780823417049-1.jpg",
    "width": 208,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We know that reading is important, but in ",
      {
        "type": "emphasis",
        "children": [
          "Souperchicken"
        ]
      },
      "by ",
      {
        "type": "link",
        "href": "http://www.mjauch.com/",
        "external": true,
        "children": [
          "Mary Jane and Herm Auch"
        ]
      },
      ", Henrietta discovers just how life-saving reading can be. On the farm, Henrietta’s aunts wonder why Henrietta spends so much time reading and so little time laying eggs. When the farmer sends Henrietta’s aunts on “vacation,” she discovers that they’re actually on their way to the Souper Soup Company to become someone’s dinner. Henrietta uses her reading skills to track down her aunts and rescue them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The hens realize a happy ending when they find a vegetarian farmer to live with and get jobs eating tasty insects from her organic garden. (The farmer drinks milk and eats eggs but notes that she doesn’t eat animals.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers will cheer Henrietta’s journey to save her aunts and applaud her rescue of pigs and cows she encounters on the way who are also bound for “vacation.” Tidbits like the “beheading” and “plucking” rooms at the soup factory introduce a bit of reality. Although the puns and wordplay will fly over the heads of younger children, older kids will get a cluck out of them. The quirky, brightly-colored illustrations add an additional layer of fun. An entertaining change from the typical stories featuring farmed animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
