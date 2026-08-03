import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "101 Dalmatians (1961)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Revisiting this classic animated film with my little girl, I realized for the first time ",
      {
        "type": "emphasis",
        "children": [
          "how much"
        ]
      },
      " of the plot is one big chase scene. Still, if you can stand that, you’ll find yourself cheering for the Dalmatians as they try to elude Cruella de Vil and her goons."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the film approaches its fiftieth birthday, it’s amazing to consider how progressive “101 Dalmatians” was for its time. Not only is the movie’s anti-fur message still relevant– especially now that ",
      {
        "type": "link",
        "href": "http://animals.change.org/blog/view/why_you_shouldnt_be_wearing_even_faux_fur_trims",
        "external": true,
        "children": [
          "fur trim"
        ]
      },
      " is so ubiquitous — but people who care about animals will also appreciate that the dogs are considered part of the family. Still, one small part of the plot does seem dated — Roger and Anita (the humans in the film) allow their dogs Pongo and Perdita to mate. With so many lovely dogs in need of homes now, it’s worth giving your kiddo a gentle reminder that the best option in 2010 is to adopt."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/101-Dalmatians.html",
        "external": true,
        "children": [
          "Ages 5-12"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
