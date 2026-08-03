import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Making Good Choices About Renewable Resources",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1435856023/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399349&creativeASIN=1435856023",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Making Good Choices About Renewable Resources"
            ]
          }
        ]
      },
      ", author Jeanne Nagle provides a comprehensive overview of renewable energy: solar, geothermal, wind, hydro and biomass. Each type of power source is discussed in detail, and related issues such as sustainability and conservation are defined and explained."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is very thorough and it is peppered with interesting photos throughout each chapter. Beyond the important knowledge it imparts (and we all know that knowledge is power!), another great aspect of this book is the encouragement and tips that it gives to kids. This book is a great tool for helping kids feel optimistic about the future of renewable energy in our world and empowered to make the changes necessary to bring about that evolution in their daily lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages 9 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
