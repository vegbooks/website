import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/9781419701894.jpg",
    "alt": "Sweet Dreams",
    "href": "/media/2012/04/9781419701894.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Full of comforting rhyme and imagery, ",
      {
        "type": "emphasis",
        "children": [
          "Sweet Dreams"
        ]
      },
      ", written by Rose A. Lewis and illustrated by Jen Corace, tells the story of the nighttime to a young girl before going to bed. While the mother puts pajamas on her daughter, she tells her “Good night, my precious child/May your dreams belong and sweet/and full of great adventures/with the friends you’re soon to meet.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The moon smiles in at the child through the bedroom window, a stuffed toy tiger lays on her bed, and a bunny lamp reminiscent of the bunny in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0060775858/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0060775858",
            "external": true,
            "children": [
              "Goodnight Moon"
            ]
          }
        ]
      },
      " by Margaret Wise Brown glows warmly nearby while a cat curls around the night table. In fact, I started this book expecting a story in the same vein as ",
      {
        "type": "emphasis",
        "children": [
          "Goodnight Moon"
        ]
      },
      " and it is surprisingly not; instead it tells the story of nocturnal animals that eat and cuddle and sing while the little girl sleeps. There is nothing to fear in the night. These animals “come alive in darkness/They have no need of light.” And soon the night will end and the animals and flowers that sleep at night will wake with the sun."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations of the nighttime and daytime scenes, done in pen, ink and watercolor, will captivate children and adults who read this book, and the story is sweet and peaceful and a great bedtime tale. The verse is awkward in one or two places, but it is doubtful children will notice this, and overall it flows organically and gently, like water flowing in a babbling brook under the light of the full moon. All readers, vegetarians, vegans and omnivores, will appreciate this simple story that contrasts day with night."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
