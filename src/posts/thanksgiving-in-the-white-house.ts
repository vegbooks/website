import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/9780805065305.jpg",
    "alt": "Thanksgiving in the White House",
    "href": "/media/2010/11/9780805065305.jpg",
    "width": 210,
    "height": 166,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Abraham Lincoln’s son, Tad (also called Tadpole by his father), was a sure spitfire in the White House, allegedly bombarding the Cabinet Room door with a toy cannon, amongst other antics. In Gary Hines’ ",
      {
        "type": "link",
        "href": "http://www.aghines.com/gary/thanksgiving.htm",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Thanksgiving in the White House"
            ]
          }
        ]
      },
      ", readers learn about Tad’s friendship with an exceptional turkey named Jack and how his fate was tied to the first official Thanksgiving proclaimed by Lincoln in 1863 and the presidential pardoning of this first feathered friend."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overhearing the cook refer to Jack as a “plump gobbler” that’ll make a “glorious feast,” Tad races to his father’s office, tears streaming down his cheek, hollering “Pa! Pa! …They’re going to kill Jack! You can’t let them do it, Pa. It would be mean and wicked!” Tad goes on to state his case: “He’s a good turkey, and I don’t want him killed. He has as much a right to live as anybody. You pardon soldiers all the times, Pa. Can’t you pardon Jack?” The rest is history as President Lincoln orders an official pardon for the bird. The cook, on the other hand, doesn’t spare the hen and pig for dinner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This based-on-a-true-story tale is one of the most famous turkey-related incidents in American history, and a happy one at that. And Hines does a nice job framing it with issues current of the day, as he positions Tad observing a long line of citizens waiting to see the President either as wounded soldiers, job seekers or Civil War widows."
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
