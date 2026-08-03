import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/9780316203340.jpg",
    "alt": "Gem",
    "href": "/media/2012/06/9780316203340.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When I first opened my review copy of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "https://www.kirkusreviews.com/book-reviews/holly-hobbie/gem/",
            "external": true,
            "children": [
              "Gem"
            ]
          }
        ]
      },
      ", written and illustrated by Holly Hobbie, I gasped at how beautiful the watercolors were. The book opens with a wintertime letter from a grandmother to her granddaughter, introducing the pictures to follow as the story of the previous year when a little toad named Gem emerged from his winter slumber and found his way to a girl and her garden. I loved the idea of a grandmother painting a story for her granddaughter to remember warmer times."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Little Gem almost gets hit by a car and has a close call with a predatory bird but makes his way along until he is spied by the granddaughter in the story, Hope. The book remains wordless until Hope’s letter back to her grandmother but in the images we see her catch and hold little Gem, only to release him into the yard. He contentedly sits looking at the moon at night and we get to see Hope’s letter which reads in part, “I can’t believe I wanted to keep him for a pet at first. Toads are not pets. They want to be free, like everything does.” What a neat sentiment — we get to see that the impulse of a child is to explore his or her surroundings but that it is best to let creatures in the wild stay in their natural habitats."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The last notes of the book include some facts about toads, including one I was not aware of which is that fortunate toads can live to be 40 years of age. As Hope writes, “[…] everything is amazing the more you learn about it.” As most of this story is clear from the illustrations I was able to read it to be 22 month old and 3-1/2 year old with both enjoying it. My daughter said, “I liked how he went and found a girl,” and my son liked pointing out little Gem on each page. Highly recommended for budding nature enthusiasts."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
