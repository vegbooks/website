import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/0618448942-lres1.jpg",
    "alt": "Meow Ruff",
    "href": "/media/2010/07/0618448942-lres1.jpg",
    "width": 219,
    "height": 216,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "While in school, were you ever challenged by a language arts teacher to create a poem that fashioned the outline of a shape? Joyce Sidman and Michelle Berg have taken the concept of ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Concrete_poetry",
        "external": true,
        "children": [
          "concrete poetry"
        ]
      },
      ", also known as visual or shape poetry, and made a spectacular-in-the-vernacular, full-length picture book that’s not only literary eye candy, but has subtle earth-friendly messages throughout."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Basic storyline is that a puppy escapes his cookie cutter house and runs over “tramped-on, not-lawn, much-trod (gum wad), crack-filled, anthill,” words that form the gray pavement. Down the road, we find an abandoned kitten who thinks, “where did they go? i’m alone? have they really left me here?” Dog chases cat, both get swept up inside of a thunderous storm, find refuge together, and become friends. The canine’s guardian eventually finds him and sweeps the kitten up in his arms. (Awww! How we love happy endings.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "But my words cannot do justice to ",
      {
        "type": "emphasis",
        "children": [
          "Meow Ruff"
        ]
      },
      ". To really appreciate the “plump bright dome of sugary white white-muffin” clouds, you’ll just have to pick up a copy for yourself. And to further sweeten the deal, know that Sidman is an ASPCA Henry Bergh award recipient and Ms. Berg is a guardian to a loveable mutt."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids can have a try at nature-inspired concrete poetry on this ",
      {
        "type": "link",
        "href": "http://www.wild-about-woods.org.uk/elearning/concretepoetry/",
        "external": true,
        "children": [
          "fun site"
        ]
      },
      " sponsored by the UK-based Woodland Trust."
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
