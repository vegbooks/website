import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/06/saving-emma-the-pig.jpg",
    "alt": "The Biggest Little Farm: Saving Emma the Pig",
    "href": "/reviews/the-biggest-little-farm-saving-emma-the-pig/",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "The story of ",
      {
        "type": "link",
        "href": "https://us.macmillan.com/books/9781250187796",
        "external": true,
        "children": [
          "SAVING EMMA THE PIG"
        ]
      },
      " is the first in a new picture book series based on John Chester’s short films about ",
      {
        "type": "emphasis",
        "children": [
          "The Biggest Little Farm."
        ]
      },
      " Now a children’s book author, Chester is an Emmy Winning documentary filmmaker and farmer. This first story sets a gentle and loving tone that shows both the circle of nature and how humans don’t have all the solutions for the animal world."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story opens when Emma the Pig arrives to the farm just as she is about to have a litter of piglets. She is very skinny and not well, and when her SEVENTEEN piglets arrive Emma stops producing milk. To give her a break, the farmers bring the piglets into their home to care for them and tend to Emma in the barn. She gets better, but won’t eat…not even her favorite treat of apples. It’s only when the piglets are brought back to Emma that she starts to eat…A LOT."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story continues with Emma nurturing her piglets, becoming lonely when they are moved to a pasture to graze and roam, and finally finding a new rooster friend. The emphasis is on the animals throughout the picture book, in fact the farmers are never shown. Jennifer Meyer’s illustrations are gorgeous and lush. The images are able to convey sadness and worry in some instances and humor and joy in others. Greasy the rooster is especially expressive."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The end of the book has a brief history of the farm as well as a photo of the author and Emma accompanying an epilogue that updates readers on Emma. Families may want to also check out ",
      {
        "type": "link",
        "href": "https://vimeo.com/181645122",
        "external": true,
        "children": [
          "the short film on which the book is based"
        ]
      },
      ". ",
      {
        "type": "strong",
        "children": [
          "One caveat"
        ]
      },
      ": Caregivers should watch the clip first because the book glosses over a detail or two that may be upsetting or confusing to children."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
