import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/978-1-883672-54-6.jpg",
    "alt": "Hey, Little Ant",
    "width": 210,
    "height": 167,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://heylittleant.wordpress.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Hey, Little Ant"
            ]
          }
        ]
      },
      ", written by father-daughter duo Hannah (then nine-years-old) and Phillip Hoose, is by far my favorite children’s book. Honestly! It has everything you could possibly wish for – inviting artwork, relatable scenarios, quick, upbeat writing, and a prompting message that leaves the reader with an ethical quagmire."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kid encounters a tiny ant in the crevice of the sidewalk. He contemplates squishing him, but through enchanting, rhyming dialogue the table is turned. Ant shows Kid that his fellow insects rely on him (we see images of Ant reading to his own children, sharing food with comrades) and asks Kid if he would appreciate being squished, seeing as how they’re more alike than previously thought. The book doesn’t outright suggest that killing ants is bad, but readers are challenged to make the rationale on their own. However, it would be hard to refute that ants deserve respect and consideration after reading ",
      {
        "type": "emphasis",
        "children": [
          "Hey, Little Ant"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a truly fantastic ",
      {
        "type": "link",
        "href": "http://heylittleant.wordpress.com/educators/",
        "external": true,
        "children": [
          "resource"
        ]
      },
      " (lesson plans and activities abound!) for fostering discussions on bullying, tolerance, and conflict resolution; dichotomies of big/small, powerful/powerless and animal welfare; science studies and entomology. And to support my fanfare of this one-of-a-kind publication are the testimonials from my former AmeriCorps students. They requested the book more times than I can count and loved holding it, as some of the graphics require that you flip the book vertically in order to see them properly. It’s also available in Spanish under the title ",
      {
        "type": "emphasis",
        "children": [
          "Oye, Hormiguita"
        ]
      },
      "!"
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
