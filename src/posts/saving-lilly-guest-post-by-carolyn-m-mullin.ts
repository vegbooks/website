import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Saving Lilly",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 278,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I had appointments lined up early the next morning and knew better than to stay up ‘til 1 a.m. reading this next book, but I couldn’t help myself. ",
      {
        "type": "emphasis",
        "children": [
          "Saving Lilly"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.pegkehret.com/index.html",
        "external": true,
        "children": [
          "Peg Kehret"
        ]
      },
      " (a fellow vegetarian) is an absolute page-turner about two sixth grade friends, Erin and David, who discover the sad truth about animals in circuses. During a research project for their gifted class, they learn how animals are mistreated during training and lead terribly depressing lives. Much of their information for the report came from the Fund for Animals and the ASPCA (great plugs, Peg!)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The timing couldn’t be better for this report as the kids were scheduled to go on a “special” field trip to the Glitter Tent Circus with their homeroom teacher, Mrs. Dawson. Long story short, the kids find themselves in quite a predicament. Mrs. Dawson is determined to relive her happy childhood memories of going to the circus with her grandfather, despite Erin and David’s attempts to show her the astonishing number of animal welfare violations the circus had been cited for. The dynamic duo tries to educate fellow students on the inherent cruelty of using animals for entertainment and encourage them to boycott the field trip, but constantly run up against Mrs. Dawson. Erin and David are a testament to what passion and determination can achieve in the midst of adversity."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "They garner the attention of the media, the school principal and the community at large and help rescue the circus’ lone elephant, Lilly, who is in dire need of medical attention. In the end, the pair inspires and organizes their class to fundraise $8,000 to purchase Lilly and save her from a game park fate (where a trophy hunter would end her life prematurely) and send her to the peaceful pastures of an elephant sanctuary that happened to be located in ",
      {
        "type": "link",
        "href": "http://www.elephants.com/",
        "external": true,
        "children": [
          "Tennessee"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Saving Lilly"
        ]
      },
      "is wonderful read that I highly recommend to inspire young animal lovers. You may want to have some tissues on hand as the book elicited a few tears for me from time to time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
