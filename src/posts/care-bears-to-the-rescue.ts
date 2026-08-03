import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Care Bears to the Rescue (2011)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I watched this movie with my daughter (2 years old) and her friend (3 years old). We were doing overnight babysitting and thought a movie night would be fun. I loved the Care Bears as a kid but knew nothing about this movie or the current incarnation of our 80’s cartoon friends. I took a chance on ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B004CYVZ2C/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=B004CYVZ2C",
        "external": true,
        "children": [
          "this movie"
        ]
      },
      " through instant streaming on Netflix. Actually, we started watching this after my first choice bombed. Turns out my daughter is scared of the Peculiar Purple Pie Man from Strawberry Shortcake, so my first 80’s cartoon revival failed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s a stretch to call this a movie. It’s more like three episodes pieced together with the framework of an awards ceremony. The Care Bears of Care-A-Lot are getting awards for the best rescues and after each award is given, we watch a clip of the rescue. This type of framework seems to make it easier for younger viewers to follow as they don’t have to keep track of a long storyline."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The movie was cute enough. The three year old really enjoyed it. He was laughing at all of the right spots. It seems my two year old was still a bit young to follow the story, but enjoyed it anyway. Care Bears in general are a caring bunch and this movie was all about rescuing, so it’s a good theme for children. The bears were in trouble and needed help but not so much that it scared my easily scare-able two year old."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I really like the theme of the second mini-episode. One of the bears, Share Bear I believe, encounters a baby bug that seems lonely. She decides that he needs a home and keeps him as a pet. She calls him Nibbly because he really likes to eat. Well, it turns out that Nibbly really, really likes to eat. Nibbly starts to eat everything in sight. Care-A-Lot is being turned into his feeding grounds and he is eating buildings, parks, statues, and more. The other bears are not too pleased and inform Share Bear that she needs to do something. She talks a lot about pet responsibility and how you can’t just get rid of a pet because you don’t like it, which is a great message. But then her friends inform her that Nibbly isn’t really made to be a pet. Nibbly is a wild animal that should live outdoors, which is also a great message. Nibbly isn’t fit for an urban environment, so the Bears grow a garden on a nearby cloud that is large enough to sustain Nibbly for a long time and they set him free. Other bugs hear about the garden and fly from far away to live with him and Nibbly is no longer lonely. Share Bear is sad to lose her friend and pet but happy to know that he is in a better place and will be much happier from now on. Of course Share Bear wins the award."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
