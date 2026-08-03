import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Puppy School",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ivy League vs. Community College. White Collar vs. Blue. India’s Caste System. No matter where we look, in virtually every culture, there’s a discrimination of some sort, either based on skin color, heritage or economic status. While we tout that we’re all equal (under the eyes of God or within a democratic society), achieving the same opportunities as other citizens can be quite a difficult endeavor. For Monkey, the adorable mutt whose story we follow in ",
      {
        "type": "link",
        "href": "http://www.puppyschoolthebook.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Puppy School"
            ]
          }
        ]
      },
      ", attempting to gain entry into the elite, pedigree-only educational institution is nearly impossible. Nearly being the key word."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In a serendipitous accident, Monkey is covered in black paint, lending him a Labrador look that fits in with a band of puppies, including his closest friend Burton, from his farm that are on their way to Puppy School. While Monkey struggles with proper posture and other “petiquette” behaviors, he and Burton excel in friendship, bravery, honesty, and generosity. These qualities are best demonstrated when Burton is sent away to Muttly Manor, a decrepit jail of sorts for miscreant canines, and Monkey must put everything on the line to save his friend and the other incarcerated pups."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Puppy School"
        ]
      },
      " is a page-turner for the action and adventure contained within, but also because of its heartwarming and sincere message of hope, community and egalitarianism. Author and actor David Dayan Fisher is ",
      {
        "type": "link",
        "href": "http://www.bookmasters.com/marktplc/03069.htm",
        "external": true,
        "children": [
          "donating 50% of the proceeds to dog rescues and dog pounds"
        ]
      },
      ", including In Defense of Animals!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
