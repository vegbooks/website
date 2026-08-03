import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/savingbaghdad-hc-c.jpg",
    "alt": "Saving the Baghdad Zoo: A True Story of Hope and Heroes",
    "href": "/media/2011/05/savingbaghdad-hc-c.jpg",
    "width": 210,
    "height": 193,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "All too often in human conflict and warfare, animals also suffer although their struggle for survival tends to be put on the backburner. The case was no different during America’s Iraq invasion. The U.S. Army eventually made it into the Baghdad Zoo and the royal palaces where wild animals had been held captive. Some had perished due to starvation and dehydration. Others were stolen to be consumed or sold on the black market, or were lost among the bombs and fighting. Yet a notable number remained locked behind the iron bars of their outdated cages. Cue Major William Sumner’s entrance and a crew of animal lovers and welfare organizations, American, African, and Iraqi, who came to their rescue, providing the basics such as food and water, medical attention, improved housing, and enrichment."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A very touching and appealing photo-essay, ",
      {
        "type": "emphasis",
        "children": [
          "Saving the Baghdad Zoo"
        ]
      },
      " is broken into small chapters, each telling of the rescue of a handful of species – Arabian horses, tortoises, cheetahs, lions, tigers, camels, and bears – along with scientific facts and memorable anecdotes about the animals (such as the first glorious time they set foot on grass). Weaved throughout the text are the complexities involved in such an operation. International animal groups encouraged the relocation of many of the animals to their natural habitats, while keeping the animals in the city was a rallying, unifying and healing act for Iraqis. Sumner tells of needing to buy live donkeys in order to feed the big cats, realizing the injustice of such decisions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Given the difficult ",
      {
        "type": "link",
        "href": "http://www.npr.org/2011/03/31/134957684/robin-williams-brings-baghdads-tiger-to-broadway",
        "external": true,
        "children": [
          "subject matter"
        ]
      },
      ", the authors did an exceptional job documenting and conveying this story to children, all while putting forth important questions for consideration and debate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
