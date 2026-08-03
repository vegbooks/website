import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Tinker Bell and the Great Fairy Rescue (2010)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As I’ve ",
      {
        "type": "link",
        "href": "/reviews/princess-smartypants/",
        "children": [
          "previously alluded"
        ]
      },
      ", I am not a huge fan of the Disney princess franchise. Not only am I concerned that we’re inculcating young girls with stories about privilege and a certain brand of feminine beauty – not particularly important values – but I worry about how the characters are mass marketed. My daughter just turned five, and she ",
      {
        "type": "link",
        "href": "http://www.commercialfreechildhood.org/news/2010/04/whatkidsknow.html",
        "external": true,
        "children": [
          "recognizes as many logos as written words"
        ]
      },
      ". Why would I want to expose her to a “character” that manufacturers and retailers can exploit to sell her more stuff? The world already has ",
      {
        "type": "link",
        "href": "http://www.storyofstuff.com/sos.php",
        "external": true,
        "children": [
          "enough stuff"
        ]
      },
      ", and we already produce enough waste."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All that said, watching “Tinker Bell and the Great Fairy Rescue” in isolation is actually a treat. Friendship, nature, and family are important themes. As Tinker Bell befriends a young girl, we learn that fairies play integral roles in nature, helping the seasons change and giving animals their colors. We also watch the girl defend and protect Tinker Bell and her friends, from both the household cat and her naturalist father — and Tink frees a butterfly who’s destined to become a specimen. It’s good for kids to imagine what it’s like to be small and relatively defenseless."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents are unlikely to find the plot riveting, but this film has enough visual appeal that many adults will enjoy watching it once. And the characters have flaws and moods – which makes the movie more interesting than some others in this genre. Parents should also be aware that science is alternatively viewed as cold or cruel. People concerned with the use of animals in research may agree, but this theme is bound to sit uneasily with others."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
