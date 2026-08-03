import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/out-of-breath.jpg",
    "alt": "Out of Breath",
    "href": "/media/2011/10/out-of-breath.jpg",
    "width": 210,
    "height": 333,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The angle that brought this book to us at Vegbooks (a free review copy) is that the protagonist in the story is vegan and a vegan vampire also is featured, so I will focus on those aspects as well as the claim that this book is appropriate for kids as young as age 12."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.ourhenhouse.org/2011/10/book-review-%E2%80%9Cout-of-breath%E2%80%9D-by-blair-richmond/",
            "external": true,
            "children": [
              "Out of Breath"
            ]
          }
        ]
      },
      " (by Blair Richmond) there is a lot of “tell” and no “show.” This novel, told in the first person, features a vegan heroine but it is a detail that feels contrived, though ever present. Katherine Healy is “on the run” and finds her way back to a place she grew up. She previously worked at a bar (lying about her age as she is under 21), glibly mentioning that she used her body to earn tips. She has no job, place to stay, or money but the $10 given to her by the lady who picked her up while she was hitchhiking. After spending the money on pizza she opts not to beg on the street and instead samples grapes and other loose food from the local grocery co-op before stealing a “tofu sandwich.” Followed outside by a store employee she attempts to give the sandwich back but instead he informs her he has paid for it and also purchased her an orange juice."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Her story pretty much follows this trajectory again when she contemplates some running shoes (leather free, she makes sure to mention) and ends up with the shoes as an advance on her pay as a part time employee of the shoe store. The owners of the store give her a place to stay as well and she assumes the last name “Jones.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The progression of her tale does not occur from within her character but instead through the favors of others. Katherine is a perpetual damsel in distress that does not act in compassionate and earth conscious ways despite trying to make the point that she is a runner and vegan who wears organic clothing. She lies and steals. She quickly catches the eye of two young men who compete for her attentions: one of whom eats meat (and drinks the blood of humans) and one who is vegan (and drinks the sap of trees). We are never shown what about her is likable; we are told she is beautiful and that the men are handsome but there is no depth to her or justification for her risky behavior."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Though this book sounded appealing because of the ecological and vegan bent, it left me frustrated by the one-note portrayal of veganism. Also, though the physical romance in the book is fairly chaste, the poor choices Healy makes are not ideal examples for young girls or boys."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
