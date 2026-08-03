import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/all-about-turkeys-cover.jpg",
    "alt": "All About Turkeys",
    "href": "/media/2011/11/all-about-turkeys-cover.jpg",
    "width": 210,
    "height": 175,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We picked up ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0590481479/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0590481479",
            "external": true,
            "children": [
              "All About Turkeys"
            ]
          }
        ]
      },
      " at the library and have been enjoying it a great deal during the last few weeks. Author and illustrator ",
      {
        "type": "link",
        "href": "http://www.jimarnosky.com/",
        "external": true,
        "children": [
          "Jim Arnosky"
        ]
      },
      " provides detailed facts and images about the bird that is always late November’s talk of the town: the turkey. Our young fact collector loved hearing about all of the details about wild turkeys, and I learned a great deal myself (for example, wild turkeys can fly up to fifty miles per hour, though they are not winter migrators). This knowledge made for interesting conversation as we rambled through suburban yards in the dark one recent evening, seeking out an injured wild turkey we’d seen at dusk (what the book doesn’t mention is that a one-legged hopping turkey can be difficult to find in this environment). My child reminded me that the hopping turkey would probably be ok even without a stint at wildlife rehab because turkeys are powerful birds who can only be killed by high level canine or feline predators — or humans."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book does not talk about the wild turkey’s less fortunate domestic counterpart. It is, however, a nice way to introduce some of the traits of turkeys to kids. I’m looking forward to checking out some more books by Mr. Arnosky."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
