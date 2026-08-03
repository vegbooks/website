import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/everglades-cover.jpg",
    "alt": "One Night in the Everglades",
    "href": "/media/2012/06/everglades-cover.jpg",
    "width": 210,
    "height": 198,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Aimed at ages 8 and up, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.nationalparkstraveler.com/review/2012/fireside-read-one-night-everglades9991",
            "external": true,
            "children": [
              "One Night in the Everglades"
            ]
          }
        ]
      },
      " is in interesting combination of picture book and environmental science text. There are beautiful illustrations to accompany the story of a night in the Florida Everglades, an area teeming with life, much of which is endangered. The first third of the book details some of the plants and animals of the area and then leads into the author’s night spent researching and taking samples to determine the health of the ecosystem and what could be done to save it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter is not in the target age range but she did enjoy the illustrations. The text is supplemented by sidebars with information about new terms used in the book, such as floc, which is made up of decaying plant material. A new plant (to me) was the ",
      {
        "type": "emphasis",
        "children": [
          "Utricularia,"
        ]
      },
      "a carnivorous plant that traps zooplankton. Another portion of the book of note for veg families comes when Laurel and Dan, the scientists in the book, are happened upon by a “frog gigger,” someone that catches frogs for consumption in restaurants. The book, in a matter of fact way, describes what a frog gigger does and shares that the gigger is glad for conservation efforts because “[h]is way of life, and that of his friends and family, depends on the Everglades having healthy plants and animals and lots of clean water.” No mention is made of whether this is a form of exploiting the area but the advocacy component of the book is fairly restrained so this approach is in keeping with that established tone."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Tips at the end of the book suggest turning the water off when brushing your teeth, taking quick showers as opposed to baths, fixing leaks, and recycling to preserve the natural treasure of the Everglades. If the child in your life is interested in the work that scientists do in the field, I think this would be a neat book to check out but as usual be ready to discuss some of the issues raised. I especially enjoyed the children’s illustrations of scenes from the story that are part of the book’s design."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Also available in a Spanish language edition."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
