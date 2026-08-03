import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "With a portion of its proceeds benefiting the ",
      {
        "type": "link",
        "href": "http://www.fundforanimals.org/",
        "external": true,
        "children": [
          "Fund for Animals"
        ]
      },
      ", it’s hard not to love ",
      {
        "type": "emphasis",
        "children": [
          "The Adventures of Taxi Dog"
        ]
      },
      " by Debra and Sal Barracca. After having hailed a real life cabbie who kept his canine companion in the front seat during his shifts, the Barraccas were inspired to write a charming, rhyming tale of a New York City taxi cab driver, Jim, who rescues a street dog he later names Maxi. Teaming up with talented artist ",
      {
        "type": "link",
        "href": "http://www.tlchicken.com/view_story.php?ARTid=322",
        "external": true,
        "children": [
          "Mark Buehner"
        ]
      },
      ", the picture book highlights the ever important issue of animal homelessness and shows how dogs need good food, a warm home and plenty of TLC. Kids will also get a taste for what metropolitan-living is like with scenic depictions of NYC."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there are two non-veggie elements to the book (the pair split a hot dog and meet circus entertainers that have a performing chimpanzee), parents can tailor the book to meet their ethics. Perhaps Jim and Maxi found a veggie hot dog option at the stand? Maybe the circus clowns employed a fake chimpanzee? This could develop into a nice discussion about how no animal should be forced into the entertainment industry. Although it must be said that Maxi is a natural comedian."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "P.S. – This is also a Reading Rainbow-endorsed book!"
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
