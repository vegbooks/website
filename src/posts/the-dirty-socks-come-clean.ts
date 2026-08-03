import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/12/the-dirty-socks-come-clean-cover-art-300dpi.jpg",
    "alt": "Dirty Socks Come Clean kids music CD cover for review by Sandi Lancaster depicts a washing machine full of socks",
    "href": "/media/2013/12/the-dirty-socks-come-clean-cover-art-300dpi.jpg",
    "width": 210,
    "height": 187,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I must confess, I hadn’t heard of ",
      {
        "type": "link",
        "href": "http://www.dirtysockfuntimeband.com/",
        "external": true,
        "children": [
          "The Dirty Sock Funtime Band"
        ]
      },
      " before receiving the CD to review. The CD is a quirky compilation of original children’s songs that defies categorization into any one genre. After listening to the CD a few times, there were a few standout songs that easily became favorites for both me and my two children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The first song on the CD, “The Dirty Socks Come Clean”, has an energetic vibe that makes it fun to listen to, with goofy exclamations like “Let’s smellabrate!” (that the dirty socks are clean). “Garbage Bugs” is a catchy tune that describes bugs that like to eat…well, garbage, contrasting the people watching the bugs saying “yuck, yuck, yuck” with the garbage bugs saying “yum, yum, yum.” “We’re in Love”, featuring Laurie Berkner, is a silly but charming tune that my two year old requests to hear over and over again. “Mama’s Song” is a sweet ballad with a great emotional feel, although I’m not sure I’m on board with the theme of the lyrics, which tell a child that their mom loves them more than anyone else, and that their mom is more beloved by the child than anyone else. For kids with two parents, the lyrics leave me feeling sorry for the other parent who was deemed a bit lesser!"
    ]
  },
  {
    "type": "image",
    "src": "/media/2013/12/dirty-sock-funtime-band-white-300dpi-photo-credit-matthew-edginton.jpg",
    "alt": "Dirty Sock Funtime Band photo of kids music band with drums",
    "href": "/media/2013/12/dirty-sock-funtime-band-white-300dpi-photo-credit-matthew-edginton.jpg",
    "width": 210,
    "height": 127,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "“Lenny the Cat” is a sweet love song written to Lenny, a pet cat. The singer enthusiastically professes great love for Lenny, whose previous owner gave him away. Animal advocates may appreciate this as a subtle support for adopting shelter animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are two songs on the CD which may not readily fall in line with a vegetarian or vegan family’s values: “Cheese World,” a song which is basically an ode to cheese, and “I’m Hungry,” in which the singer lists cheeseburgers and ice cream among the foods (and non-foods!) that the singer wants to eat. Both songs are silly and light-hearted, but the non-vegan lyrics are worth noting for families who try to keep meat and dairy out of the lyrics sung in their home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There were a few songs on the CD that were not as beloved in our house – including a couple that felt a bit chaotic and abrasive to me. But overall, there are definitely some wonderful, catchy, and unique songs here to enjoy. For families who don’t wish to make the non-vegan lyrics a deal-breaker, the two songs with non-vegan lyrics could probably be addressed with vegan children by a light-hearted comment about “our version” of the song being about “vegan cheese,” or something of the like."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
