import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/birchbark-brigade-8426.jpg",
    "alt": "The Birchbark Brigade",
    "href": "/media/2011/04/birchbark-brigade-8426.jpg",
    "width": 210,
    "height": 267,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "While I’d like to say I’m pretty up to date on the tragedy of modern fur farming and hunting, I know very little about its antecedents. I picked up this extensive historical text by farmer Cris Peterson mainly to see if beavers, the main animal hunted to near extinction by Native Americans and trapper-explorers in the 1700’s (when fur trapping was at its peak), were represented or spoken of at all. On page 85, the industrious beaver gets a mere three paragraphs in a sidebar, with a brief introduction on sleeping habits and construction of their dams. The remaining words are dedicated to their hunting: “Hunters cut holes through the ice near a beaver lodge and lowered nets through the holes. Then one man broke apart the lodge with an ax. As the animals tried to escape, they were caught in the nets and killed.” Lovely. Nothing about their sentience or intelligence."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Peterson is a skilled writer, but this particular text is very much one-sided. She depicts the lives of famous explorers and Indians who made their mark in fur trade history and contributed to America and Canada’s discovery and expansion. She chronicles the daily rituals a trapper and his society take up, including warfare, colonization, annual celebrations, visits to outposts, etc. She tracks how commerce of the day worked, from the beaver “harvesting” in North America’s rough country to the making of Beaver hats for European aristocracy. To think that so many animal families were destroyed so brutally for a fashion craze…"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In this day and age, even reputable scientists, historians, and academics recognize the need to include or reflect upon societal values when investigating issues of the past or current day. A redeeming factor in ",
      {
        "type": "link",
        "href": "http://www.boydsmillspress.com/books/calkins-creek/birchbark-brigade",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Birchbark Brigade"
            ]
          }
        ]
      },
      " would have been an afterword on the subject-at-hand, explaining how difficult it was for beaver populations to rebound or the development of animal-friendly fibers that have taken the place of inhumane, old-fashioned animal pelts. Even just a small narrative on beaver life would have sufficed. Overall, this is an interesting read for those curious about the fur industry’s past and its spawning of America’s exploration; it’s just too anthropocentric."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
