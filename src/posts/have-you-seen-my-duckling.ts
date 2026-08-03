import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Beautiful illustrations depict an American wetland in ",
      {
        "type": "emphasis",
        "children": [
          "Have You Seen My Duckling?"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www2.scholastic.com/browse/contributor.jsp?id=3676",
        "external": true,
        "children": [
          "Nancy Tafuri"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When kiddo was little, she enjoyed looking for the lost duckling, who is barely in view in each of the scenes. Now that she’s 4, she enjoys identifying the other wildlife. She points out the beaver and the frog, and I deliberate over the other animals. I’ve decided that Momma and the ducklings are mallards, the ",
      {
        "type": "link",
        "href": "http://www.birding.com/topbirds/3692gh.asp",
        "external": true,
        "children": [
          "heron is probably a green"
        ]
      },
      ", and the turtle is a painted turtle. (Anyone know the bird near the end? Some kind of merganser?)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
