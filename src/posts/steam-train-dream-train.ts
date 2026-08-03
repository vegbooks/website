import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Boy book pic",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“Don’t judge a book by its cover” is cliche for a reason and I wanted to be sure to share that the latest book from the team of author Sherri Duskey Rinker and illustrator Tom Lichtenheld (who wrote and illustrated ",
      {
        "type": "emphasis",
        "children": [
          "Goodnight, Goodnight Construction Site"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://ohmahdeehness.wordpress.com/2012/10/07/book-gift-ideas-for-two-year-olds/",
        "external": true,
        "children": [
          "a favorite in our house"
        ]
      },
      ") is not about a circus train as the cover would make you think. A train with a giraffe and monkey in the caboose on the cover made me uncertain but the book is beautifully done and pretty veg friendly, never fear."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          "Goodnight, Goodnight Construction Site"
        ]
      },
      ", as construction related vehicles tuck in for the night the reader learns their names and in ",
      {
        "type": "emphasis",
        "children": [
          "Steam Train, Dream Train"
        ]
      },
      ", as the train is loaded up for the night you learn the names of various train cars. You may know what a tender is but did you know what a well car, autorack, or reefer car carry? Animals are loading the train with things like dinosaurs, race cars, and ice cream and at the end (spoiler alert) you can see that the dream train is on a track on the floor of a small child’s bedroom."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is one of those books where every design element is just right and the illustrations captivated my son and daughter. The restful prose and fantasy elements (polar bears loading ice cream sundaes into the reefer car, for example) make for another great bedtime book for kids of all ages."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
