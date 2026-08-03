import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/9781404860193-1.jpg",
    "alt": "What If There Were No Bees?",
    "href": "/media/2010/11/9781404860193-1.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This bug’s eye view of life as a grasslands honeybee illustrates the paramount role they play in an ecosystem, as pollinators of wildflowers and crops and sources of food for creatures higher up in the food chain. As many Vegbooks readers may know, there has been a ",
      {
        "type": "link",
        "href": "http://www.cbsnews.com/stories/2010/03/24/tech/main6328765.shtml",
        "external": true,
        "children": [
          "significant decline"
        ]
      },
      " in bee populations over the last four years, and the forecast isn’t promising, even with increased efforts to intensely study and improve their lot."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I appreciate most in this nonfiction work are the vivid scenes generated through a mix of traditional illustration, gouache, airbrush, and digital methods. As the serious repercussions of a world without bees emerge in the text, the corresponding landscapes bring attention to blackened silhouettes of the plant and animal species that would negatively be affected. Imagine grasslands with bears hungry for honey, without spring blooms or smaller rodents scurrying about, and no bountiful berries for us humans to savor."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I appreciate that author Suzanna Slade did not broach the subject of humans eating honey since such a sweetener is reaped using quite ",
      {
        "type": "link",
        "href": "http://www.peta.org/issues/Animals-Used-for-Food/honey-from-factory-farmed-bees.aspx",
        "external": true,
        "children": [
          "inhumane tactics"
        ]
      },
      ", as many vegans are fully aware."
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
