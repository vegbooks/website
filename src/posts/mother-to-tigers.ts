import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/mothersto-tigers-cover.jpg",
    "alt": "Mother to Tigers",
    "href": "/media/2011/06/mothersto-tigers-cover.jpg",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I tend to oppose ",
      {
        "type": "link",
        "href": "http://www.bornfree.org.uk/campaigns/zoo-check/captive-wildlife-issues/",
        "external": true,
        "children": [
          "zoos"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "/reviews/gorilla/",
        "external": true,
        "children": [
          "zoo literature for children"
        ]
      },
      ". As much as zoos try to replicate the natural habitats of exotic animals, an image from a childhood visit to a zoo is indelibly marked in my mind: the eyes of a nonhuman primate behind thick plexiglass looking blankly forward, seeming not to see me or anything else at all."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So I was quite surprised that this striking biography of Helen Martini, the Bronx Zoo’s first woman zookeeper and the founder of its animal nursery, struck a chord with me."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Helen’s story reminds me that some great changes can begin modestly. When her husband-zookeeper brought home a pitiful tiger cub destined for a certain death, she learned how to care for tigers first then other wildlife babies in her kitchen, soon opening a nursery at the zoo and changing the way that zoos cared for the animals born in their care. “Before Helen arrived, no tiger born at the Zoo had ever survived. She raised twenty-seven, along with yapoks and marmosets, gorillas and chimpanzees, deer and ring-tailed lemurs.” The reader also learns that her approach spread to other zoos, who opened up nurseries of their own."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Of course, this isn’t zoo propoganda like most children’s books set in zoos. Perceptive readers will wonder why it was that animals born in zoos were so certain to perish, and why their own parents were incapable of providing the care they needed to survive. Although the author, George Ella Lyon, does not answer these questions, her text is likely to generate some thoughtful dialogue. (Add another reason to love this book: visit her ",
      {
        "type": "link",
        "href": "http://www.georgeellalyon.com/activism.html",
        "external": true,
        "children": [
          "website"
        ]
      },
      ", and you’ll discover that she’s also an environmental activist!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In a note at the end of the book, Lyon tells us that Helen Martini was born in 1912 and left the zoo in 1960. It’s unlikely that she’s still alive today. Still, if she were, I wonder what zoo practices she’d want to change, and how she’d go about doing so."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
