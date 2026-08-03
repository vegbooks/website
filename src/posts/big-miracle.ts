import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Big Miracle (2012)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ever since I learned that Universal Pictures was making a film recounting the rescue of a family of Alaskan whales in the 1980s, I’ve been looking forward to seeing it. Happily, “",
      {
        "type": "link",
        "href": "http://oceanmiracle.org/?page_id=2",
        "external": true,
        "children": [
          "Big Miracle"
        ]
      },
      ",” starring Drew Barrymore, does not disappoint."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The touching storyline appeals to both kids and adults. A family of three whales — Wilma, Fred, and Bamm-Bamm — are caught under the ice, miles from the open ocean. When a local TV reporter discovers them, the whales are trying to keep a small area of open water from freezing over, despite extreme cold. Prompted by a variety of motivations, ranging from altruism to politics, the human community rallies around them. The first attempt at rescue fails — but undaunted, an unlikely coalition of environmentalists (including Drew Barrymore’s character, based on the real-life heroine ",
      {
        "type": "link",
        "href": "http://www.huffingtonpost.co.uk/cindy-lowry/drew-barrymore-big-miracle-movie-cindy-lowry_b_1265361.html",
        "external": true,
        "children": [
          "Cindy Lowry"
        ]
      },
      "), tribal leaders, an oil baron, and even the Soviets join forces to devise a plan to get the whales to the safety of the open sea."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The live action format can make younger children accustomed to animation (like my daughter) a little antsy, but the story is so good that it’s worth the squirming."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents should be aware of two aspects of this movie that may be difficult for young viewers. First, the film deals with the issue of whaling head on. Not only are there references to members of the local tribe killing whales for their meat, but the opening scene depicts a hunting party preparing to spear a whale. Second, there is death. The baby whale, Bamm-Bamm, is sick and eventually fails to surface in order to breathe. The sadness, however, is short-lived, as one of the most dramatic moments in the rescue effort follows immediately after."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG, this movie is appropriate for ages 6 to adult."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "All the images of whales in this movie are from historic footage or are computer generated (CGI). What’s your favorite animal movie made without the use of live animals?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
