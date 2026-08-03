import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/image002.jpg",
    "alt": "Vegetarian Cooking for Beginners",
    "href": "http://www.myubam.com/ecommerce/details.asp?sid=E0699&gid=122350463&title=Vegetarian+Cooking+for+beginners&sqlwhere=submit%3Dsearch%26search%3Dvegetarian%2Bcooking",
    "width": 175,
    "height": 246,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The Usborne Cooking School released ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.myubam.com/ecommerce/details.asp?sid=E0699&gid=122350463&title=Vegetarian+Cooking+for+beginners&sqlwhere=submit%3Dsearch%26search%3Dvegetarian%2Bcooking",
            "children": [
              "Vegetarian Cooking for Beginners"
            ]
          }
        ]
      },
      " in 2003. Geared toward the tween+ crowd, it covers some of the basics involved in food preparation, from slicing to grating. It also briefly explains what a garlic clove or broccoli floret is and other helpful hints and tips. There are just enough recipes (~23) to provide its users with a sampling of different cooking techniques and ethnic flavor."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Not all the recipes are vegan, although most are. Those that would be a challenge to veganize include Eggs Flamenco and Baked Spanish Omelet. Other recipes range from Mexican Bean Soup to Veggie Burgers to Tropical Spiced Rice. One of the strongest things the cookbook has going for it are the illustrated steps, which show what utensils and cookware to use and what the dish should look like at any given stage during the cooking process."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the meager offering of vegetarian cookbooks for youth, this is a decent addition. Whether or not the offerings will tempt the taste buds of picky eaters is another story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9+, with parental supervision and assistance highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
