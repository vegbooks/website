import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2018/11/little-otter-learns-to-swim.jpg",
    "alt": "Little Otter Learns to Swim",
    "width": 300,
    "height": 267,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "With gentle rhymes and a combination of adventure and joy in learning, in ",
      {
        "type": "link",
        "href": "https://www.ohioswallow.com/book/Little+Otter+Learns+to+Swim",
        "external": true,
        "children": [
          "LITTLE OTTER LEARNS TO SWIM"
        ]
      },
      ", author Artie Knapp creates a fun book about a young otter exploring her environment and overcoming her fears. From the first underwater swim to surprising frogs with a dive to Little Otter’s first experience with predators and protection, the tale demonstrates the beauty and dangers of nature while keeping it appropriate for younger elementary school aged readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will relate to the fear of the unknown, perhaps even the fear of learning to swim, that Little Otter exhibits. They will also celebrate overcoming those fears. The beautiful illustrations by Guy Hobbs add to the storyline with details including the flora and fauna of Little Otter’s river home. Standouts include the turtles and butterflies, the bobcat pup, the lily pads and cattails, and the hungry chipmunk watching Little Otter from above."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The endnotes of the book include additional facts about North American River Otters and ways to find out more regarding the animals and ways to help them survive. See ",
      {
        "type": "link",
        "href": "https://youtu.be/SyJUYF9_mQA",
        "external": true,
        "children": [
          "the book trailer here"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a cute book for ages 6-8, although it would make a good rhyming read-aloud book for younger children as well."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
