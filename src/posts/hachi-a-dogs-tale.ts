import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Hachi: A Dog’s Tale (2010)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Parents, get the tissues for this heartwarming (and heartbreaking) family flick! Based on the same true story as Lesléa Newman’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/hachiko-waits/",
            "children": [
              "Hachiko Waits"
            ]
          }
        ]
      },
      ", this movie is about the faithfulness of a dog who accompanies the man he loves to the train station each day. His devotion is so strong that when the man dies, he continues to wait at the station for him for years after his death."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We rented this DVD for a family movie night, but my nearly 5-year-old daughter ended up sobbing through the movie and was teary when it was time for bed. I think she may have been too young for the themes of death and grief — but even I was deeply affected. Contributing to our reaction undoubtedly was the fact that our family recently suffered an unexpected and tragic loss. That’s not very good timing for a movie like “Hachi.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.thedailygreen.com/environmental-news/latest/oscars-animal-movies-460310",
        "external": true,
        "children": [
          "This film"
        ]
      },
      " moves slowly and deliberately, and vegetarian families will appreciate that brief scenes are depicted from Hachi’s point of view. Some may dislike the fact that Hachi sleeps in a shed out back, instead of in the house with the family, but the man shows his sensitivity to the dog’s needs by bringing him inside during one particularly violent wind storm."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/hachi-dogs-tale",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this film for ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
