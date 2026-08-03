import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/12/dave.jpg",
    "alt": "Dave",
    "href": "/media/2013/12/dave.jpg",
    "width": 210,
    "height": 148,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A gold-hearted alien monster has come to visit us, and he seeks to spread the message that chickens are incredible creatures who deserve to be treated better than their human co-Earthlings are treating them. We can get behind that idea!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Dave is incredulous that on Earth, chickens are eaten. Although there is a silly, playful tone as he delineates the many reasons that chickens are too neat to eat, the underlying message is very thought-provoking (yet appropriate) for kids. For those not currently eating meat, this little gem will buttress that decision. For kids thinking about a veg lifestyle, the perspective of an alien monster is a great vehicle for reframing the way that children are socially instructed about chickens."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With bold graphics, bright colors and a positive message about caring for all life on our planet, ",
      {
        "type": "emphasis",
        "children": [
          "Dave Loves Chickens"
        ]
      },
      "is a great find. Featuring a lovable alien monster and clever rhymes about chickens, this book will resonate with young veggie and veggie-curious kids and their adults, whether or not they are gold-hearted chicken aficionados (though we think by the end of this story, they will be)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The publisher, ",
          {
            "type": "link",
            "href": "http://www.veganpublishers.com/",
            "external": true,
            "children": [
              "Vegan Publishers"
            ]
          },
          " (yes, that’s their name!) provided a copy of this book for review. Order directly through their site ",
          {
            "type": "link",
            "href": "http://www.veganpublishers.com/multimedia-archive/dave-loves-chickens/",
            "external": true,
            "children": [
              "here"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
