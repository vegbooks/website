import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/say-hello-to-zorro.jpg",
    "alt": "Say Hello to Zorro!",
    "href": "/media/2011/06/say-hello-to-zorro.jpg",
    "width": 210,
    "height": 205,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Mister Bud had the life that I’d wish for all dogs — a loving home and things of his own. So, he’d be forgiven, even if he weren’t a little gray in the snout, for being resentful about the arrival of a second dog. Given his particular enthusiasm about his invariable routine (read: he’s set in his ways), the reader understands when he’s bent out of shape to meet his new companion, Zorro. Soon, however, the two dogs discover, to their mutual surprise, that they enjoy doing the same things, and on the ",
      {
        "type": "emphasis",
        "children": [
          "same schedule"
        ]
      },
      "to boot, and “suddenly, the walks were more fun,” nap time was more comfy, and life was more exciting."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Like ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/some-dog/",
            "children": [
              "Some Dog!"
            ]
          }
        ]
      },
      ", I think ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://wherethebestbooksare.blogspot.com/2011/03/say-hello-to-zorro.html",
            "external": true,
            "children": [
              "Say Hello to Zorro!"
            ]
          }
        ]
      },
      " would be a great read for kids preparing for the arrival of a new sibling, or to help children understand why their dog or cat might have a hard time adjusting to a new arrival. ",
      {
        "type": "link",
        "href": "http://cartergoodrich.com/",
        "external": true,
        "children": [
          "Carter Goodrich"
        ]
      },
      " creates a particularly realistic rendering, with the dogs finding joy in their everyday routine together (instead of some dramatic event triggering their affection) and with occasional grumpiness sneaking in even after the dogs have come to love each other."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families with dogs will crack up at the illustrations, which are humorous and apt. (If you know a pug, you’ll particularly appreciate Zorro’s expressions!) I also like that Goodrich depicts the woman in the story as mostly out of frame, save for legs, feet, and hands (that dole out pets and attach the leash). Sometimes I think that’s how my cat sees me."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
