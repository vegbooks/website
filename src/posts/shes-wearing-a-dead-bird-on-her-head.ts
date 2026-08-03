import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "She’s Wearing a Dead Bird on Her Head!",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 216,
    "height": 143,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.justonemorebook.com/2009/03/09/interview-with-kathryn-lasky/",
        "external": true,
        "children": [
          "Kathryn Lasky"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www2.scholastic.com/browse/contributor.jsp?id=2441",
        "external": true,
        "children": [
          "David Catrow’s"
        ]
      },
      " award-winning book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/198000.She_s_Wearing_a_Dead_Bird_on_Her_Head_",
            "external": true,
            "children": [
              "She’s Wearing a Dead Bird on Her Head!"
            ]
          }
        ]
      },
      "tells the true story of the founding of the Audubon Society. I, for one, had no idea that the venerable bird organization had been founded to end the killing birds for their plumes, nor that its founders had taken a stance against hunting from the very beginning."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story of Harriet Hemenway and Minna Hall — two women who did not even have the right to vote — will inspire young activists and give them a history lesson to boot. Not only did these politically disenfranchised women succeed in shutting down a warehouse that trafficked in bird pelts, but they created an organization to work for the protection of birds for generations to come."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.vegfamily.com/vegan-children/vegan-thanksgiving-stories.htm",
        "external": true,
        "children": [
          "Vegetarian parents"
        ]
      },
      " will also be delighted to learn that Ms. Lasky even tackles the issue of ",
      {
        "type": "emphasis",
        "children": [
          "eating"
        ]
      },
      "birds. “[F]or one awful minute they all imagine songbirds instead of apples in their pies,” she writes — leading some undoubtedly to conclude that perhaps some day people will look back on some of the foods our society considers acceptable with the disdain we now feel toward warbler pie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-9. For activities to accompany the book, visit ",
      {
        "type": "link",
        "href": "http://www.birds.cornell.edu/education/educators/sheswearingadeadbird_activitypage",
        "external": true,
        "children": [
          "Cornell Lab of Ornithology"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
