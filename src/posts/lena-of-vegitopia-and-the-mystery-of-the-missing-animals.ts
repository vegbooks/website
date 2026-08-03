import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "The story takes place in Vegitopia, a land where humans and animals live in peace together and no one would ever dream of eating animals. One day, a little girl named Lena who has her own lettuce patch learns that the babies of Vegitopia are going missing. She sends a letter to Princess Vegi for help. The Princess informs her that a bad woman named Carnista took the animals to eat them because Carnista hates vegetables. Lena and Princess Vegi hurry off to Carnista’s castle to save the babies."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/09/lena-vegan-fairytale-book.jpg",
    "alt": "Cover image of Lena of Vegitopia, a vegan fairytale book, for review on Vegbooks",
    "width": 480,
    "height": 385,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "Of course, Carnista refuses to let the baby animals go, arguing that “she has an appetite” and “can’t be expected to live on icky fruits and vegetables.” Then Lena has an idea: she gives Carnista a piece of vegan carrot cake she had been saving in her pocket as a snack. Carnista likes it so much that she lets the babies go and decides never to eat meat again. After a while, her castle stops smelling so foul, the smog around it goes away, and Carnista even starts looking better too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I was a little worried that this story would be too traumatic for my 4-year old (she is really sensitive about kidnapped baby animals!), but the book doesn’t show any pictures of the baby animals locked up so it didn’t produce any tears. It was also refreshing that Lena and Carnista didn’t argue about “eating baby animals is wrong,” since any child inherently understands that taking baby animals from their parents is bad. Instead, Lena frees the animals simply by offering a piece of cake – an approach to vegan activism which usually works better than arguing morals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, Lena is a cute book which won’t just reaffirm the decision not to eat meat, but teach children how to deal with the meat eaters they encounter."
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
            "href": "http://www.veganpublishers.com/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " sent an e-book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
