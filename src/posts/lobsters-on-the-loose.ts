import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/9780764338267.jpg",
    "alt": "9780764338267",
    "href": "/media/2013/05/9780764338267.jpg",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Last weekend we visited Boston with our four year old daughter. Not living in a coastal town, seafood is not really a part of our life, and beyond fish, I don’t think my daughter was aware that people eat seafood. In Boston, seafood is everywhere. We did a day trip to the coastal town of Rockport, MA. Walking along the pier, we were surrounded by lobster cages and there were buoys attached to lobster cages floating in the water all around us. My daughter asked a lot of questions: How do the lobsters get into these cages? Why can’t they get out? What does a lobster look like? What do they eat? I promised her a book on lobsters when we got home. Luckily, while walking around Boston, we stumbled across this gem."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The brothers in ",
      {
        "type": "emphasis",
        "children": [
          "Lobsters on the Loose"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0764338269/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0764338269&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") love to visit the lobsters in the grocery store, and do so each time they go. However, one day they discover the lobsters are crying. The brothers help the lobsters escape, and the lobster march through the grocery store and hitch a ride out to sea. The brothers, when visiting the beach one day, are treated to a grand ceremony in which every animal in the ocean thanks them for rescuing the lobsters and returning them to the sea."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is cute. The story is engaging with bright and colorful pictures. I would have appreciated a mention of why the lobsters are in the grocery store as it seems they were simply there to be enjoyed like an aquarium and no mention is made of them being eaten. However, it is a nice enough message to say that sea animals don’t like to be in tanks, regardless of why. Parents can use it to further the discussion regarding lobsters being sold for food"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
