import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/10/9780316043496.jpg",
    "alt": "The Peace Book",
    "href": "/media/2012/10/9780316043496.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Peace Book"
        ]
      },
      " by Todd Parr is perfect for young kids. The words and pictures are simple, yet they have the potential to open the door to a much larger, more complex conversation. Inside, each page describes what peace is. For example, “Peace is… sharing a meal, planting a tree, giving shoes to someone who needs them, helping your neighbor, and making new friends.” There are a few pages that specifically focus on animals, including the page that says “Peace is thinking about someone you love.” On that page, there’s a picture of a boy thinking about a dog, and a dog similarly thinking about a boy. It shows that love goes both ways, and exists between species. The page that says, “Peace is being free” shows a bird flying in the sky. Another page that stands out for its animal compassion message is the page that shows a hen sitting on a bunch of eggs, and says “Peace is keeping someone warm.” The pages that include animals are all positive and help reinforce to the reader that animals have emotions, needs and desires just like us."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a perfect book to use as a tool for talking about real-life, important issues. Each page tackles a different issue related to poverty, animal welfare, environmental protection, and being kind to other people."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents (and educators) can use this book to encourage kids to think about ",
      {
        "type": "link",
        "href": "http://www.nonviolentsolution.org/building_homes.php",
        "external": true,
        "children": [
          "what peace is"
        ]
      },
      " and where it exists. They can draw pictures and create lists of peaceful situations, and do other types of activities that encourage critical thinking for kids to make a difference in the world."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author Todd Parr’s other books are also worth checking out."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
