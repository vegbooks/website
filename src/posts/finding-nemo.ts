import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Finding Nemo (2003)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 316,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“Fish are friends, not food!” No wonder ",
      {
        "type": "link",
        "href": "http://www.peta.org/feat/nemo/",
        "external": true,
        "children": [
          "PETA loved"
        ]
      },
      " this animated flick aimed at the preschool and early elementary crowd. While parts were scary for my kiddo, she empathized with the plight of fish in captivity, reasoning that they would be happier in the wild with their families."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Personally, I loved that the sharks had formed a support group to wean themselves from eating fish. How many of us have felt the need for a little help — particularly in the early days of our vegetarianism or veganism? I guess our veg meetups and picnics function as informal support groups, but imagine what the world would be like if people trying to rid themselves of meat-eating had sponsors and twelve-step programs!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/Finding-Nemo.html",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " rates this is as “on” for ages 4+, but some veg kids might appreciate this more when they’re 6+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
