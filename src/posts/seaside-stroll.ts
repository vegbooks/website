import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/03/seaside-stroll.jpg",
    "alt": "Seaside Stroll",
    "href": "/media/2021/03/seaside-stroll.jpg",
    "width": 280,
    "height": 217,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781580899321",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "SEASIDE STROLL"
            ]
          }
        ]
      },
      " by Charles Trevino will convince families with even the most ardent aversion to cold to venture out for a beach walk no matter the weather. Written as a narrative collection of S-words, this beautiful picture book follows a rambunctious little girl as she explores the snowy, sandy beach with her mother. Seagulls, stones, shells, seaweed, and more are all a part of the adventures as our protagonist delights in her surroundings. Children can find barnacles and crabs of different types as well as sea starts, anemones, and a variety of seaweed in the pictures."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The words are sensory and descriptive, and Trevino’s skillful ability to lead readers through the story without “telling” it is impressive. One particularly effective part of the story involving a favorite doll: “Steady step, stolid step, shaky step…stumble. Swish…swirl…surge…surprised! Slip…splash…sink…soaked!” Not only is this an excellent book to have fun with onomatopoeia, but for pre-readers and early readers, the words will be fun to repeat aloud and read on their own. For caregivers who want to go the extra mile, pointing out nouns, adjectives, verbs, and interjections will be easy and fun. The author also discussing his inspiration and elaborates on the use of each type of word and the format in the end pages."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781580899321",
        "external": true,
        "children": [
          "SEASIDE STROLL"
        ]
      },
      " illustrations by Maribel Lechuga are powerful in their storytelling as well. The waves splash against the shore and the wind blows hair and lifts seagull wings. The expressions of wonder and joy convey just as much personality as the shock and sniffling sadness the little girl shows. The joyful activity on the beach becomes contemplative stillness from one page to another using colors, textures, and details galore. There are myriad details for children to discover and notice throughout."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
