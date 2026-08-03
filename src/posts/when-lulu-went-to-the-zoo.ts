import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/9780761354994.jpg",
    "alt": "When Lulu Went to the Zoo",
    "href": "/media/2010/08/9780761354994.jpg",
    "width": 227,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When I found out my daughter’s camp was taking a field trip to the ",
      {
        "type": "link",
        "href": "http://nationalzoo.si.edu/Animals/AsianElephants/default.cfm",
        "external": true,
        "children": [
          "National Zoo"
        ]
      },
      ", a facility that still keeps elephants and uses ",
      {
        "type": "link",
        "href": "http://news.opb.org/article/3311-activists-protest-zoo-measure-over-elephant-handling/",
        "external": true,
        "children": [
          "free contact"
        ]
      },
      " to handle them, I knew I had to take action. Happily, the wonderful parents on the ",
      {
        "type": "link",
        "href": "http://groups.yahoo.com/group/vrgparents/",
        "external": true,
        "children": [
          "Vegetarian Resource Group’s parent listserv"
        ]
      },
      " suggested I get my daughter a copy of ",
      {
        "type": "emphasis",
        "children": [
          "When Lulu Went to the Zoo"
        ]
      },
      " by Andy Ellis. It’s been the perfect anecdote to the zoo propaganda my daughter has been hearing at camp!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Lulu is an adorable preschooler who can’t stand to see zoo animals in captivity. While ",
      {
        "type": "link",
        "href": "http://www.schoollibraryjournal.com/article/CA6720586.html",
        "external": true,
        "children": [
          "some critics"
        ]
      },
      " have found her solution — working with the zookeepers to create a sanctuary for the animals — to be too idealistic, or “magical,” people familiar with the ",
      {
        "type": "link",
        "href": "http://www.elephants.com/",
        "external": true,
        "children": [
          "Elephant Sanctuary"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www.blackbeautyranch.org/",
        "external": true,
        "children": [
          "Black Beauty Ranch"
        ]
      },
      " might not agree. I know that Lulu has inspired my daughter to come up with some creative alternatives to using public lands for the National Zoo: my favorite is to convert the space to the nation’s largest playground!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’m still waiting to see how my daughter reacts to her camp field trip, but I feel much more confident knowing that she can look up to Lulu as a kid who saw the suffering of animals in what so many others characterize as lighthearted fun."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
