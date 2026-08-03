import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/978-0-553-11383-9-1.jpg",
    "alt": "Good Dog",
    "href": "/media/2010/04/978-0-553-11383-9-1.jpg",
    "width": 208,
    "height": 272,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We can only speculate as to how dogs think and reason, but I find ",
      {
        "type": "link",
        "href": "http://www.redroom.com/author/maya-gottfried",
        "external": true,
        "children": [
          "Maya Gottfried"
        ]
      },
      "’s poetic interpretations to be rather spot on. Covering 16 canine breeds from Springer spaniels to mutts, ",
      {
        "type": "link",
        "href": "http://www.zakanitch.com/",
        "external": true,
        "children": [
          "Robert Rahway Zakanitch"
        ]
      },
      "’s beautiful full-page portraits – when set to Gottfried’s free verse poems – really capture the personality of each pooch. For the chow, we read: “Listen up! It’s time to go. / Get the leash. Let’s hit the road. / I’ve got a bone to pick with a Chihuahua. / And there’s a coupla dachshunds that need a barking-to.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The text is simple enough for kids to read on their own, but challenging little ones to use different voices for each canine character would be a fun activity. Perhaps a high pitched, whiney voice for the pomeranian who just got a powder puff-looking haircut? Or a deep, gruff tone for the bulldog who just wants a “hug and a bone.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Personally, I’d keep this on the coffee table too as even adults and visiting company would get a kick out of the humorous writings and entertaining visuals."
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
