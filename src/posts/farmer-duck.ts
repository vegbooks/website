import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/9781564025968.jpg",
    "alt": "Farmer Duck",
    "href": "/media/2010/04/9781564025968.jpg",
    "width": 225,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Poor, poor Farmer Duck! He irons. He gardens. He even does the dishes. Duck has been picking up the “real” farmer’s slack while the sloth lies in bed, munching on chocolates. Bleary eyed and exhausted from all his (or her… gender really isn’t used for the animals) multitasking, Farmer Duck elicits the empathy of his friends on the farm who plot a coup (a tad Orwellian here) under the light of the moon."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Come morning, both farmers are in for a big surprise as the animals jolt the human farmer out of bed and run him off the property, never to be seen again. None the wiser, Farmer Duck awakes and calls out, “How goes the work?” and instead of a simple answer, receives a “Moo!,” “Baa!,” and “Cluck!” from the barnyard gang, explaining all that had transpired. The tale ends with a picturesque look at the animals working on their farm."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.librarything.com/work/17887",
            "external": true,
            "children": [
              "Farmer Duck"
            ]
          }
        ]
      },
      "’s not just a classic because of its animal liberation theme. It sends a strong message to kids about subscribing to a hard work ethic and what it means to be a true comrade … and sometimes that requires staging an uprising to help a fellow feathered friend."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
