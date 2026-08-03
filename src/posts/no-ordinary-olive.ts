import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/noordinaryolive-fc.jpg",
    "alt": "No Ordinary Olive",
    "href": "/media/2011/03/noordinaryolive-fc.jpg",
    "width": 210,
    "height": 186,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This delightful story about a precocious child cheers on children’s creativity and imagination. Even with stifling school agendas, lively children can re-animate a class and educational staff. At least in Olive’s world. Olive, who is extraordinary since birth with the loudest cry, whose parents supported her every endeavor with praise and possibilities, and who was undaunted by a teacher’s punishment or being sent to the principal’s office, forces the administration to recognize their own unhealthy prohibitive restrictiveness in comparison to her energetic, creative nature. Different can be difficult in a school system and it’s a wonder this girl isn’t constricted by the pressure to conform at school or that her parents didn’t step in to begin homeschooling. Thankfully, through her parents’ unwavering support as well as her own irrepressible temperament, she has a confidence that insulates her from all the school disapproval and ably resolves her own problems. And she manages to teach the administrators a thing or two before making an agreement to curb distracting behaviors during class without compromising her energetic ingenuity or imagination."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Cute and detailed illustrations accompany this creative enthusiast’s tale. I am surprised the story didn’t become a pro-homeschooling tale but am glad the focus never shifted from Olive and her center-stage role in her own education. Olive reminds me a bit of all the geniuses (like ",
      {
        "type": "link",
        "href": "http://physics.about.com/b/2007/09/19/physics-myth-month-einstein-failed-mathematics.htm",
        "external": true,
        "children": [
          "Albert Einstein"
        ]
      },
      ") who had difficulties in the classroom."
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
