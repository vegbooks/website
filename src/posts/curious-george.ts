import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/01/0395159938-lres1.jpg",
    "alt": "Curious George",
    "href": "/media/2010/01/0395159938-lres1.jpg",
    "width": 219,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Revisiting the original book about everyone’s ",
      {
        "type": "link",
        "href": "http://blog.seattlepi.com/tv/archives/105365.asp",
        "external": true,
        "children": [
          "favorite chimpanzee"
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          "Curious George"
        ]
      },
      "by Margret and H.A. Ray, I was surprised by some of the details I’d forgotten as a child. Of course, The Man with the Yellow Hat baits and captures George, removing him from his African homeland and ",
      {
        "type": "link",
        "href": "http://www.savewildelephants.com/",
        "external": true,
        "children": [
          "ultimately placing him in a zoo"
        ]
      },
      " — there’s that. But there is also the bit where George smokes a pipe and another part where George is placed in prison."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I don’t think there’s anyone who doesn’t love Curious George’s sense of adventure, but there’s lots to talk about after you read the original book. What, for example, is the difference between the prison and the zoo? Why would George love one and not the other? (I’d also throw in a quick chat about the dangers of smoking.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A related note: There was ",
      {
        "type": "link",
        "href": "http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2006/02/10/GEORGE.TMP",
        "external": true,
        "children": [
          "a lot of controversy"
        ]
      },
      " surrounding the release of the Curious George movie several years ago. What did you think? I’ve yet to see it, but kiddo and I love Jack Johnson’s soundtrack."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
