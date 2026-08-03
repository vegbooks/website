import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 282,
    "height": 426,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Our family loves outdoor movie night screenings, and thankfully these are pretty common in our area. This weekend we went to a screening of “",
      {
        "type": "link",
        "href": "http://www.sonypictures.com/movies/openseason/",
        "external": true,
        "children": [
          "Open Season"
        ]
      },
      ",” which I was excited about because I’ve been wanting to watch it with my kids for a while. It’s a mainstream animated comedy from 2006 with a strong anti-hunting theme. A grizzly bear named Boog (Martin Lawrence) is kept as a pet, living in the garage of a park ranger. A deer named Elliot (Ashton Kutcher) convinces Boog to escape from his cush life indoors to experience the wild. Boog doesn’t like the wild – hunting for food and using the bathroom are among his biggest complaints. But things really start to get bad for Boog when he learns what Open Season is. Boog organizes the forest animals to stage war against the hunters and eventually drive them out of the woods."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Though the movie deals with a pretty scary topic, it is done in such a slapstick way that it is really accessible to all. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/open-season",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this movie for ages 6+. My 7-year-old daughter and 2-year-old son both loved it, though she followed the plot more than he did. My daughter laughed out loud many times throughout the movie. The war the animals stage on the hunters is mostly silly pranks, like stealing their underwear and skunk-bombing them, and that’s about as scary as it gets. The animation is really beautiful, with the Pacific Northwest as a backdrop to the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’m always amazed at how animal-friendly mainstream children’s movies are. This one tackles hunting dead on. We see hunting from the perspective of the hunted, and it’s not good. There is a main hunter that is presented as truly evil. He is a trophy hunter and his cabin is full of stuffed dead animals and when Boog sees this, he is terrified. Hunting is not something my family encounters in our lives and it was a nice introduction of this topic for my daughter. I highly recommend this movie. Animal loving kids will love cheering on the animals and afterwards you might have some great conversations about hunting."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I asked my kids for their takes. My son (2 years old) said “I liked that the dog could talk!” My daughter (7 years old) said this:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "This movie was about a bear who had a person he really loved. He got set out in the wild during open season for the hunters. And the animals decided to fight for their freedom. It’s good for kids who really love animals like me. And they can learn about how every open season hunters come into the woods to kill animals and I don’t think that’s right."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
