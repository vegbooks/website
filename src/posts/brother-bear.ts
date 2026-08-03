import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Movie pic",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 320,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Wow, I was blown away by this Disney movie. My daughter and I enjoyed this as a movie night feature. It is an intense movie and she reacted strongly to it, but days later she was still talking about it and she says it is one of her favorite movies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The movie (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B00005JMFH/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005JMFH&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") tells a story of a spirited Inuit boy Kenai who lived long ago. When his older brother Sitka is killed in a fight with a bear, Kenai seeks revenge by killing the bear. This angers the spirits, including Sitka. Sitka and the other spirits transform Kenai into a bear until he can show compassion and love bears. As a bear, Kenai befriends a bear cub Koda who has been abandoned by his mother. Through his journey and his friendship with Koda, Kenai’s perceptions of bears changes from believing they are unthinking monsters to realizing they are sentient beings with families they love. I won’t give away the twist but it is truly heart-wrenching."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“Brother Bear” was nominated for an Academy Award in 2004 for best animated feature, losing out to another movie beloved by animal lovers, “",
      {
        "type": "link",
        "href": "/reviews/finding-nemo/",
        "children": [
          "Finding Nemo"
        ]
      },
      ".” It is a beautiful movie that I would definitely recommend for movie night for the entire family. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/brother-bear",
        "external": true,
        "children": [
          "Commonsense Media"
        ]
      },
      " recommends it for ages 5+. I enjoyed it with my daughter who is four and a half."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
