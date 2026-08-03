import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/moomin.jpg",
    "alt": "The Book About Moomin, Mymble, and Little My",
    "href": "/media/2011/06/moomin.jpg",
    "width": 225,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We discovered the world of the ",
      {
        "type": "link",
        "href": "http://www.moomin.com/eng/index.html",
        "children": [
          "Moomins"
        ]
      },
      " via this book when my cousin sent it from Finland as a gift for my son (now almost 1) and daughter (now almost 3). It is her daughter’s favorite book and I can see why. It has a Dr. Seuss-like quality in that it features vivid colors and characters in a strange and interesting world, made all the more amazing by die cut pages. I didn’t think books like this were being published in 1952, but almost every page connects to the next page via cut outs that enhance the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Translated into English prose, the book tells the story of Moomintroll on his way to bring milk home to his mother. He comes upon Mymble who is crying about losing her little sister, Little My. Now, Little My actually ran away because she is impish but Moomin and Mymble set out to find her. When they are sucked into a vacuum and call for help, Little My comes to their rescue and the three make their way through the adventure homeward. Upon arriving home, it turns out the milk is “sour and cheesy” so they declare that they have a “great excuse for drinking sweet pink berry juice.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I don’t find the milk references problematic especially considering the characters are also offered roses and shells as food in the book. My daughter loved the book and we have since found more adventures in the world of the Moomins. The best thing is that the bulk of the Moomin books are more like small novels, so if your little one is into this book, there are some wonderful reads ahead like ",
      {
        "type": "emphasis",
        "children": [
          "Comet in Moominland"
        ]
      },
      ". A fantastic, unique read aloud book that encourages the reader to guess what is next and use their imagination."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Good for reading aloud to children as young as 2-1/2, although older kids will like this one too."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
