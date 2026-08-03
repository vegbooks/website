import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/toddler-baby-reading.jpg",
    "alt": "The Snow Bear",
    "href": "/media/2010/12/toddler-baby-reading.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Snow Bear"
        ]
      },
      " is a beautiful wintry tale of a polar bear cub who awakens from hibernation with his mother nowhere in sight. So with the help of his forest friends—Ox, Goose, Moose, Fox, Wolf, and Rabbit—he decides to build a mother bear out of snow to keep him company. Together, they use their individual skills. For example, Goose helps pat down the snow with her webbed feet, and Wolf brushes in fur marks with his big, bushy tail. As dusk approaches, all the animals are called home by their mothers, and the little bear finds himself all alone in the middle of the snowy forest. So he curls up next to the snow bear and falls asleep. He awakens to a familiar scent at dawn and finds that the snow bear has been replaced by his real mother. You can almost feel the relief and comfort of the cub through the page!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0525466584?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0525466584",
        "external": true,
        "children": [
          "touch-and-feel book"
        ]
      },
      " embossed with different textures on each page so that the snow feels soft and the animals’ fur feels rough, which makes it especially nice for younger children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the moment you open this book, you feel as if you’ve stepped into a winter wonderland. The illustrations and the snowflakes sprinkled throughout each page evoke a cold, arctic feel—a tranquil oasis where animals live peacefully."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
