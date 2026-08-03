import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/crazyhair-hc-c.jpg",
    "alt": "Crazy Hair",
    "href": "/media/2011/05/crazyhair-hc-c.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This tressed-up, teased and twisted, stylish hair story completely makes the cut for me. Compelling and strange, it sucked me up like Rapunzel’s hair-rope into ",
      {
        "type": "link",
        "href": "http://www.neilgaiman.com/",
        "external": true,
        "children": [
          "Neil Gaiman"
        ]
      },
      " and Dave McKean’s artful scalps. It begins as a brave girl named Bonnie comments about someone’s “crazy hair” and offers to comb it even when warned that it is dangerous. The head of hair belongs to a man who claims he’s grown it since age two and admits that birds and beasts, nest and rest within his crazy hair, and a dozen hunters have gotten lost in there. Of course, Bonnie is undaunted and daringly begins combing through the messy mane and literally gets lost in the locks where she begins taming the inhabitants as well. (AR folks should note no animals were harmed and the hair provides a habitat for all types of wild animals.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "McKean’s magnificent graphic photo/painting/collage montages (reminiscent of Pablo Picasso and Georges Braques cubist style) braided with Geiman’s mesmerizing, rhyming, dynamic descriptions weave an irresistible adventure in and on one’s head. It easily teased and entangled me and my daughter as much as it did Bonnie, and you’ll be itching to pick your way through this hairlarious and creative coil. We’ve marched through this mad hair story several times and I’m betting you will too."
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
