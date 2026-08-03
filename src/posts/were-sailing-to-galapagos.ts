import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "We’re Sailing to Galapagos",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "We’re Sailing to Galapagos"
        ]
      },
      " by Laurie Krebs (illustrated by Grazia Restelli) explores some of the unique creatures living on the ",
      {
        "type": "link",
        "href": "http://www.galapagos.org/",
        "external": true,
        "children": [
          "Galapagos Islands"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author steps us through a week-long visit to the Pacific where we join the inhabitants of a small red sailboat as they experience a new creature every day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Each set of pages announces the day of the week, introduces the animal, and discusses their distinct physical characteristics and mannerisms using clever rhymes and bright illustrations. Chorus repetition pulls the reader through the book with the refrain, “We’re sailing to Galapagos. I wonder who we’ll see.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The rare animals discussed will likely be unfamiliar to most young readers, and include albatrosses, giant tortoises, lava crabs, and blue-foot boobies, among others. The pictures are mostly collage style, somewhat similar to those found in Eric Carle books such as the popular ",
      {
        "type": "emphasis",
        "children": [
          "Very Hungry Caterpillar"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is no discussion of evolution, environmentalism or other deep issues to be found within the story text; it’s just a happy book accompanied by some fascinating facts and great illustrations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This colorful voyage is designed for kids preschool to grade 3. End notes go into further depth about the Galapagos, Charles Darwin, and some additional animals that were not included in the story."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
