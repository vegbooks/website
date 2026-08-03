import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/darwin.jpg",
    "alt": "Animals Charles Darwin Saw: An Around-the-World Adventure",
    "href": "/media/2011/07/darwin.jpg",
    "width": 210,
    "height": 217,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "With special attention paid to the animals encountered during the travels of Robert Scott, Christopher Columbus, Marco Polo, and Charles Darwin, author ",
      {
        "type": "link",
        "href": "http://sandra-markle.blogspot.com/",
        "external": true,
        "children": [
          "Sandra Markle"
        ]
      },
      " not only created an award-winning book series, but made important headway in providing kid-friendly lit within the burgeoning field of Human-Animal Studies (HAS)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In light of history, HAS examines the relationships between nonhuman and human animals and can help shed light on the past, its influence on our contemporary era and implications for our shared future. The four explorers presented in her series are exemplary in highlighting this fact. Darwin, the revolutionary man who altered many people’s understanding of how living creatures came to be and continue to evolve, would never have formulated his legendary conclusions were it not for the animals he discovered on his voyage upon the HMS Beagle."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers will journey with Darwin as he sails around the world in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.chroniclebooks.com/index/main,book-info/store,books/products_id,7964/",
            "external": true,
            "children": [
              "Animals Charles Darwin Saw"
            ]
          }
        ]
      },
      ", and develop alongside him the theory of evolution, transmutation, and natural selection, all while enjoying Zina Saunders’ (see her awesome ",
      {
        "type": "link",
        "href": "http://www.zinasaunders.com/animation/images/05-02-11-factory-farms/agribusiness.html",
        "external": true,
        "children": [
          "anti-factory farming cartoons"
        ]
      },
      "!) colorful, block print-like illustrations of their wild and fanciful destinations. The animals and Darwin’s initial reactions to seeing flamingos, having beetle juice squirted into his mouth, or seeing an octopus change colors will be just as exciting and novel to the book’s readers as it likely was for Charles Darwin himself."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Just a cautionary note – as was common with naturalists of yesteryear, Darwin killed thousands of animals for preservation as scientific specimens and they are depicted within the text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 7-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
