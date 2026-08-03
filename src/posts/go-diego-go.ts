import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Go, Diego, Go!",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Dora’s cousin ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B001JGKS2E/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B001JGKS2E",
        "external": true,
        "children": [
          "Diego"
        ]
      },
      " is also an adventurer, but Diego is a boy with a mission. At the beginning of each episode, Diego announces, “Hi! I am Diego and I am an animal rescuer!” Then he goes on to exclaim, “I love animals!” With his team, made up of his sister Alicia and Click the camera, each episode revolves around Diego rescuing a wild animal in need. The animals are in somewhat dangerous situations (such as stuck in a tree in a flood), but the show is fun and not too scary. Since each show is about a different animal, each show focuses on learning traits specific to each animal, and at the end of the episode, Alicia reviews the traits we learned and records them in her animal science journal."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter, age 2.5, loves this show. She received a three-episode DVD for Christmas from Grandma and she begs to watch it every day. I think I know those three episodes by heart now. All seasons of the show are available on Netflix instant viewing, so thankfully, we don’t have to only watch those three episodes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "She’s also a big Dora fan. I enjoy Dora for her because she is a great female role model. She goes on outdoor adventures and there is nothing she can’t do. But I also really like Diego because it’s all about helping animals. Diego seems to be aimed at a slightly older demographic than Dora and teaches different skills. While both shows focus on problem solving and Spanish language skills, Dora seems more focused on lists and ordering while Diego is more focused on learning about animals. My favorite thing about both shows is that the main characters are non-white. Like my daughter, the characters have brown skin and big brown eyes, such a rarity in children’s TV and books."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall I think this is a great show, especially for families with concerns about animal welfare."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
