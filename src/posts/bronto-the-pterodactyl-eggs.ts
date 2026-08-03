import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/bronto-cover-small.jpg",
    "alt": "Bronto & the Pterodactyl Eggs",
    "href": "/media/2012/08/bronto-cover-small.jpg",
    "width": 210,
    "height": 233,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I had to say “of course” when offered a review copy of ",
      {
        "type": "emphasis",
        "children": [
          "Bronto & the Pterodactyl Eggs"
        ]
      },
      " because my son and daughter are big dinosaur fans. The watercolor and ink illustrations by Charlotte Vivian Rodenberg are sweet and engaging, there are even small illustrations on some pages that are fun for little ones to spot."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One day Bronto (an Apatosaurus, the term Brontosaurus is ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Apatosaurus",
        "external": true,
        "children": [
          "not used scientifically"
        ]
      },
      ") discovers an unattended nest of Pterodactyl eggs and uses leaves and the warmth of his head to protect them from the elements. As he sleeps with his head gently resting on the eggs (I was reminded a little of ",
      {
        "type": "link",
        "href": "/reviews/horton-hatches-the-egg/",
        "children": [
          "Horton"
        ]
      },
      " the elephant), he dreams of flying with the Pterodactyl babies and teaching them to steer clear of smoking volcanoes. In the waking hours that follow, Bronto must save the eggs from an erupting volcano by burying them in the dirt and fleeing for safe ground himself. The eggs eventually hatch and the small Pterodactyl hatchlings take flight together with Bronto looking on from the vantage point of a hill in the distance."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The prose is simple enough for the 4 and up age group it is aimed at but it also respects that children will want to know the proper names for dinosaurs and even the molten lava that erupts from the volcano. From the pacing and author biography sharing that the story was originally one told with puppets, you can tell the text was well honed before the illustration stage. My daughter was concerned when the volcano erupted but was happy to see that everyone was okay in the end, proclaiming that the “hot lava” was her favorite part. We talked about why Bronto would bury the eggs and run for safety instead of taking them with him and she speculated (incorrectly) that Bronto was the eggs’ father and their mother was absent. I can see where she would get the idea from the dream illustrations when Bronto has wings and is flying. We enjoyed reading and discussing the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The compassionate herbivore Bronto is a great character for veg kids. In fact, I really like dinosaurs in general as a talking point when it comes to carnivores, omnivores, herbivores, and predation in general which is a concept that can be difficult for veg children to grapple with."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
