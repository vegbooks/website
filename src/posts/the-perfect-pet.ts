import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/the-perfect-pet.jpg",
    "alt": "The Perfect Pet",
    "href": "/media/2010/09/the-perfect-pet.jpg",
    "width": 210,
    "height": 179,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A dog is too loud. A horse is too big. What’s an animal-loving kid to do when her parents’ response to every species she suggests is “no”?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As much as she likes the “pet” cactus her parents gave her, Elizabeth, the main character in this lighthearted book by ",
      {
        "type": "link",
        "href": "http://margiepalatini.com/",
        "external": true,
        "children": [
          "Margie Palatini"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.harpercollins.com/authors/12885/Bruce_Whatley/index.aspx",
        "external": true,
        "children": [
          "Bruce Whatley"
        ]
      },
      ", is still hankering for a companion. So when she discovers a bug just hanging out in her room, she decides to adopt him as her own and names him Doug."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will enjoy the humor. Expect a few giggles when Elizabeth’s dad whispers, “Think we should have said yes to the dog?” And parents will like the open-minded approach Elizabeth’s parents demonstrate when they accept Doug as part of the family. You might also find that this book provides a good opportunity to discuss the differences (and similarities) among species: Why do some people think dogs are good pets, but bugs are for exterminating?"
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
