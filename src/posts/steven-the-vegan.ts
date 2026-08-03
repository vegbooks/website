import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/11/cover.jpg",
    "alt": "Steven the Vegan",
    "href": "/media/2012/11/cover.jpg",
    "width": 210,
    "height": 259,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m in love with the vegan community. It’s a richly creative and ingenuitive one that is continuously finding new ways to help animals, raise awareness about animal suffering and facilitate a person’s transition to a plant-based diet. What other community has to tap its own talent to create leather-free shoes, invent meat and dairy alternatives, script documentaries, and of course write books?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Dan Bodenstein, author of the brand new children’s book ",
      {
        "type": "link",
        "href": "http://www.steventhevegan.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Steven the Vegan"
            ]
          },
          ","
        ]
      },
      " is the latest activist-entrepreneur debuting on the vegan kid lit scene. Geared towards early elementary students, ",
      {
        "type": "emphasis",
        "children": [
          "Steven the Vegan"
        ]
      },
      "features a young boy (Steven) who is on his class field trip to a farm sanctuary. During lunchtime, the other kids conveniently ask him why he only eats vegetables. Steven uses all the animals on the farm to explain his lifestyle and dietary choices. In the cutest, most sincere and matter-of-fact ways, his classmates are appalled to learn that the adorable animals they’re interacting with have also been on their plates as pork chops, hamburgers, and nuggets."
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "“I didn’t know bacon was a pig,” said Dwayne, petting the little pig. “I thought bacon was just – um – bacon.”"
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "“Well, I didn’t know that either,” said Andrea, “I’m not eating bacon or anything else that comes from these cute little piggies.”"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Through illustrator Ron Robrahn’s Dora-the-Explorer-type cartoons, readers will bond with the energetic, wide-eyed, happy farm animals and field trippers alike. There’s even a dose of vegan dinosaurs (to explain how powerful one can be on a vegan diet) and African plant eaters too (giraffes, elephants, gorillas) at the end of the book. And in any good story, there’s a idyllic ending with the kids stating they’ll no longer eat animals, leaving Steven glad to know that so many critters will be saved and able to lead enjoyable, free lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Steven the Vegan"
        ]
      },
      " is certainly a simplified tale. Abstaining from eating animals doesn’t necessarily mean animals will end up at a sanctuary. And I did take issue with the pig section. As one student observes the pigs eating slop, she remarks that she’s glad she doesn’t eat pigs. In my experience working at an animal sanctuary, pigs aren’t generally fed slop (perhaps on an industrialized farm) and in fact, they have refined palates, preferring some foods to others. This bit played into the myth that pigs are dirty animals, which is far from the case."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, however, this is a great new title in the vegan kid lit genre. I’m delighted to see such a wonderful work now on the market and available through ",
      {
        "type": "link",
        "href": "http://www.totemtales.com/",
        "external": true,
        "children": [
          "Totem Tales Publishing"
        ]
      },
      ". I’m even more excited to see what other books Bodenstein has in the works!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The author provided a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
