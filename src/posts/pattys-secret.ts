import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/01/patty.jpeg",
    "alt": "Patty",
    "href": "/reviews/pattys-secret/",
    "width": 210,
    "height": 232,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I was able to review a free pdf copy of ",
      {
        "type": "emphasis",
        "children": [
          "Patty’s Secret"
        ]
      },
      " for the purposes of reviewing it for Vegbooks. Written by Leneille Moon and illustrated by Brandon Fall, the titular Patty tries to pretend that she doesn’t have food allergies with disastrous results. All is well in the end, but not before Patty (a young little pig) knowingly eats a peanut butter cupcake at a school party and requires an epinephrine injection to counter her subsequent anaphylactic reaction. Leneille Moon supports her local food allergy organization out of a portion of the profits from ",
      {
        "type": "link",
        "href": "http://pattyssecret.com/?p=15",
        "external": true,
        "children": [
          "her book"
        ]
      },
      " and she is a fellow food allergy mom so I appreciate her advocacy efforts with this book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations were very appealing to my 3-year-old son and 5-year-old daughter but I admit I had to alter* the text as I read aloud. They thought the animals depicted were cute. My daughter identified with Patty’s allergic reaction (she is depicted with hives and swelling) so I think handling this book depends on the audience. Perhaps older kids can use the story of Patty as an opportunity to point out issues with how she, her parents, the school, and her classmates handle her allergies. After Patty is injected with epinephrine she continues the school day instead of going to the hospital, for example. Considering the risk of biphasic reactions (imagine an aftershock that can occur even with no new exposure to an allergen for even a day after ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Anaphylaxis",
        "external": true,
        "children": [
          "an initial exposure"
        ]
      },
      " and that even epinephrine should be followed by a second dose within as little as 10 to 15 minutes, for parents reading the book I’d want the guidance to be correct and for children I’d want them to know what they can really expect. (Source: ",
      {
        "type": "link",
        "href": "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3500036/",
        "external": true,
        "children": [
          "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3500036/"
        ]
      },
      " via: ",
      {
        "type": "link",
        "href": "http://blog.onespotallergy.com/2013/12/another-life-lost-to-anaphylaxis-let-us-make-this-the-last-one/",
        "external": true,
        "children": [
          "http://blog.onespotallergy.com/2013/12/another-life-lost-to-anaphylaxis-let-us-make-this-the-last-one/"
        ]
      },
      ")"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Further, given that prevailing standards of care recommend epinephrine injection upon known ingestion, that waiting until a reaction manifests physically can be terribly ",
      {
        "type": "link",
        "href": "http://www.kcra.com/news/local-news/news-sacramento/witnesses-share-warning-after-girl-dies-biting-into-dessert/-/12969376/21236412/-/o72sdt/-/index.html",
        "external": true,
        "children": [
          "dangerous"
        ]
      },
      ". The risk Patty takes in order to avoid being embarrassed is troubling and I struggled with this review because I love the food allergy community and wouldn’t want to be disloyal to the efforts of my fellow advocates but I want to offer my remarks to the wider audience that Vegbooks reaches because awareness is so crucial to the cause of keeping individuals with food allergies safe. Nuts are a huge source of protein for many vegetarian and vegan families so being educated about nut and other allergies is important."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All this said, I think what the book is getting at is that not communicating an allergy can cause harm. Children do need to be advocates for their own safety – I read recently in Donna DeCosta, M.D.’s ",
      {
        "type": "emphasis",
        "children": [
          "A Little Bit Can Hurt: The Shocking Truth About Food Allergies — Why We Should Care, What We Can Do"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0989329100/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0989329100&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") of situations where adults or caregivers may be incredulous about allergies and could even intentionally expose children to their allergens. For veg families, perhaps the book can spark discussion on not only supporting those with allergies but about pressure they may feel to “fit in” and eat foods that are either unsafe for them or harmful to animals. For parents in general, the book highlights that we can’t assume our children will communicate their needs and we need to model disclosure for them in a positive way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Food allergies are an epidemic, affecting one in 13 children in the United States. For more information about food allergies, check out ",
          {
            "type": "link",
            "href": "http://www.kidswithfoodallergies.org/",
            "external": true,
            "children": [
              "Kids With Food Allergies"
            ]
          },
          "."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "* Some of my changes included eliminating the reference to the epinephrine auto injector as a “magic shot” (personal preference to have my daughter respect that epinephrine is medicine. I also shifted the plot as a whole to be about a reaction at school in general instead of having Patty knowingly consume her allergen. Instead of Patty’s brother carrying her epinephrine (very odd to me) I just said he retrieved it from Patty’s bag. The book has a lot of potential, I just think one can’t be too careful when it comes to educating families about appropriate procedure in the event of anaphylaxis."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
