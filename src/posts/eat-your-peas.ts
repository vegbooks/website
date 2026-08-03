import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Eat Your Peas",
    "href": "/media/2011/07/toddler-baby-reading.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What caregiver is a stranger to the push-pull that can arise around young kids and eating? Although the dynamic plays out differently in each relationship, more than a few of us are guilty of trying to cajole children to eat their veggies. The mom in ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0789426676/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0789426676",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Eat Your Peas"
            ]
          }
        ]
      },
      " not only cajoles but downright bribes her daughter by offering her the moon (literally!) if she’ll eat her peas. There is a lot of silliness in the offers — from the absurd number of desserts to the entire continent of Africa to chocolate factories and much much more, Daisy’s mom takes the concept of motivation to a new level of daffiness. Eventually, Daisy points out a bit of hypocrisy inherent in her Mom’s direction to eat her peas since Mom herself is not eating her brussels sprouts!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Animal activists will note that some of the enticements offered by Mom include wild animals and a zoo — a chance to talk about this if it feels right to your preschooler."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
