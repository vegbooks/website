import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/incorrigibles-hc-c.jpg",
    "alt": "The Incorrigible Children of Ashton Place: The Mysterious Howling",
    "href": "/media/2011/04/incorrigibles-hc-c.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Good series are hard to come by. Here’s one for fans of the witty and spellbinding writing of Harry Potter and Lemony Snicket. Set in 19th-century England, the novel tells the story of 15-year-old Penelope Lumley, a Swanburne Academy for Poor Bright Females graduate and newly hired governess to Alexander, Beowulf, and Cassiopeia. Previously raised by wolves, the three children are now the trophies and property of the shady Lord Fredrick of Ashton Place. His loathsome wife, Lady Constance, is a repulsed, hands-off figure for the youngsters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.kirkusreviews.com/blog/childrens/2010-childrens-best-incorrigible-children-ashton-p/",
        "external": true,
        "children": [
          "Other reviewers"
        ]
      },
      "of this book can speak to the entertainment value of author Maryrose Wood’s first installment in the series, but for a Vegbooks take, I’ll sum up and present the thoughtful and sensitive persona of Penelope in light of animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One significant reason as to why animal-loving Penelope seeks out the governess position is that animal care would fall within her jurisdiction. (Little did she know that the advertisement was between-the-lines referring to feral children.) Her favorite fiction series, which she recites and rereads with gusto, involves horses and a heroine who rescues them from (prospective) abusive situations, such as the circus and abattoir. And with the lines so blurred to everyone but Penelope as to whether these are children or wild animals, ethological (animal behavior), ethical and animal welfare scenarios and interlocutions abound. Readers witness the children’s reaction to rifles (we can infer one killed their wolf parents), taxidermied animals in the Lord’s library, and hunting parties assembled on the grounds."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A great read for middle schoolers and adults who fancy a youthful and loquacious Victorian mystery."
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
