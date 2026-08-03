import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/9780374380571.jpg",
    "alt": "Animal Poems",
    "href": "/media/2010/07/9780374380571.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/1-9780374380571-0",
            "external": true,
            "children": [
              "Animal Poems"
            ]
          }
        ]
      },
      " features thoughtful poems about a variety of animals and insects. The late Valerie Worth’s poems unfold from a welcome awareness of the creatures’ perspective. These are not silly childish rhymes but rather more substantial, complex poems containing an abundance of food for thought and discussion. Whether it is about an elephant or whale, wasp or hummingbird, each short poem has been crafted to pack a punch and the words stay with us, as we linger and savor the poem’s focus – the animal’s experiences."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The papercut illustrations by Steve Jenkins (who also illustrated ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/elephants-swim/",
            "children": [
              "Elephants Swim"
            ]
          }
        ]
      },
      ") are a perfect match for the poems, balancing a simplicity of initial appearance with startling complexity upon deeper examination (my own favorite is the porcupine)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages 7 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
