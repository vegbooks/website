import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/9780803722569.jpg",
    "alt": "Redbird at Rockefeller Center",
    "href": "/media/2011/12/9780803722569.jpg",
    "width": 210,
    "height": 269,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A surprise find at during a swing through a neighboring town’s library, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0803722567/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0803722567",
            "external": true,
            "children": [
              "Redbird at Rockefeller Center"
            ]
          }
        ]
      },
      " is an appealing story based around the famous ",
      {
        "type": "link",
        "href": "http://www.rockefellercenter.com/tour-and-explore/the-tree-at-rockefeller-center/",
        "external": true,
        "children": [
          "Christmas Tree at Rockefeller Center"
        ]
      },
      ". When her mom sells their huge spruce to be the Christmas tree at Rockefeller Center, Kate pleads with her to change her mind because she is certain she’s heard birds living in it. Unmoved, Kate’s mom replies, “What do I care for a dumb bird or two…?” as she pulls a chicken (or turkey?) out of the oven. Sadly, the tree is chopped down and brought into the city, with a little red fledgling hanging on for dear life at the top. As it happens, the year’s theme is red birds, and soon the tree is covered with ornaments in the shape of cardinals. Poor Redbird finds this very confusing because none of the stuffed birds respond to his pleas for help. In the meantime, Kate convinces her mom to trek into the city to double-check that there isn’t a bird in the tree. Wouldn’t you know it…when they arrive, Redbird is asleep and doesn’t stir. Without batting an eyelash, Kate’s mom moves on to the shopping portion of their afternoon in the city."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As one can imagine, Kate and Redbird continue to be very upset about the situation. Tears are shed, and then the magic kicks in: the cardinal ornaments come to life and magically return the tree to its original spot."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This story is a child-friendly Christmastime reflection of the realities of habitat destruction. What are the consequences of cutting down trees? The magic in this story creates a happy ending for Redbird, Kate and others who appreciated the tree in its original location, but unfortunately, outside of children’s literature, original habitat does not magically reappear after mature trees have been harvested."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The tale is told entirely in rhyme, which is neat for the most part though adults may notice that some of the rhyming stretches into clumsiness (in my experience, the children don’t mind)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
