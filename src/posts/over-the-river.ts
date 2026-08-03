import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/over-the-river-a-turkeys-tale.jpg",
    "alt": "Over the River: A Turkey’s Tale",
    "href": "/media/2010/11/over-the-river-a-turkeys-tale.jpg",
    "width": 252,
    "height": 252,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Using Lydia Maria Child’s poem, “",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Over_the_River_and_through_the_Woods",
        "external": true,
        "children": [
          "Over the River and Through the Woods"
        ]
      },
      "” as a backdrop for his book ",
      {
        "type": "emphasis",
        "children": [
          "Over the River: A Turkey’s Tale"
        ]
      },
      ", Derek Anderson spins this classic Thanksgiving piece by featuring a family of turkeys traveling through the countryside to visit grandmother’s house."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the turkeys walk along a snowy path, they greet a horse carrying a sled, an play on the poem’s line “the horse knows the way to carry the sleigh through white and drifted snow.” Another picture shows a boy and his dog preparing to go turkey hunting. The family’s path converges with the boy and the dog chases the turkeys, so they scramble into a barn to hide. Meanwhile, grandma and grandpa turkey wait for the family to arrive. They are aptly named “The Gobblers.” The dog tails the turkeys all the way to the front door of grandmother’s house but the sled-riding horse saves the day. Finally, all the animals (dog included) enjoy a Thanksgiving dinner, consisting of a platter heaped with grapes, apples, and a horn of plenty and dog biscuits for the dog. Meanwhile, the boy, who has no idea his dog has befriended the turkeys, stands outside calling for his faithful hound."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Distinctive acrylic illustrations and a humane ending to ",
      {
        "type": "link",
        "href": "http://well.blogs.nytimes.com/2010/11/04/a-vegan-chef-dishes-up-thanksgiving/",
        "external": true,
        "children": [
          "Thanksgiving"
        ]
      },
      " make this book a fun read-aloud for parents wishing to share this classic poem with their children in picture book form. A musical score to accompany the poem is included on the inside of the book’s cover."
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
