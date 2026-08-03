import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/02/0395716918-hres.jpg",
    "alt": "Piggie Pie",
    "href": "/media/2012/02/0395716918-hres.jpg",
    "width": 210,
    "height": 190,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A delectable, veg-friendly story about a wicked witch named Gritch who gets a craving for piggie pie. Of course the witch is not veg-friendly, but we can happily cheer on the clever piggies as they outsmart her. The tale was so edible the first helping that my daughter and I have gone back to gobble it up a second and third time!Although Gritch is clearly not a vegetarian, the dilemma she has in hunting down the main ingredient for a piggie pie is entertaining and humorously illustrated. Howard Fine does a spectacular job illustrating expressively unattractive witches, exciting perspective, and flavorful details. Even though my daughter and I were rooting for the piggies, we found there was something appealing about the omnivorous old hag that made us like her character despite her temper tantrums, green and warty appearance, and lack of empathy. We also enjoyed the drizzled references to children’s songs and piggie fairy tales."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are so juicy and dripping with delicious details, that I couldn’t resist eating up Margie Palatini’s ",
      {
        "type": "emphasis",
        "children": [
          "Zoom Broom"
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          "Broom Mates"
        ]
      },
      ", the follow-up stories about Gritch the Witch. Have yourself a taste of ",
      {
        "type": "emphasis",
        "children": [
          "Piggie Pie"
        ]
      },
      " to see if Gritch the Witch whets your appetite for more Palatini and Fine feasts."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
