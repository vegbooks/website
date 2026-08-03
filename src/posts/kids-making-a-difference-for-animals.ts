import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/aspca-kids.jpg",
    "alt": "Kids Making a Difference for Animals",
    "href": "/media/2010/10/aspca-kids.jpg",
    "width": 210,
    "height": 222,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0470410868",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "When talking to kids about animals, something I like to ask them is how they can help creatures big and small. “I can be a veterinarian.” “I adopted my dog from the shelter.” These are the more common responses. But in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0470410868?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0470410868",
            "external": true,
            "children": [
              "Kids Making a Difference for Animals"
            ]
          }
        ]
      },
      ", readers will be astounded and inspired by the incredible number of feats children just like them have accomplished for all sorts of animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From anti-whaling petitioning to becoming superstar canine foster parents, the kids featured in this book are incredibly innovative and will show your young one how to make the most of their passions and resources. Kids need to believe in their own potential ",
      {
        "type": "emphasis",
        "children": [
          "and"
        ]
      },
      "realize it, and acting on behalf of animals is a great way to not only boost self confidence, but set one’s eyes on a goal and work towards obtaining it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the book is fairly colorful and dotted with photographs of the profiled kids and animals, it is text heavy and can be a bit repetitive as most stories are presented in the same fashion. A great resource, however, for any young animal lover."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "P.S. – I highly recommend the ",
      {
        "type": "link",
        "href": "http://www.aspca.org/aspcakids/",
        "external": true,
        "children": [
          "ASPCA Kids website"
        ]
      },
      "!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
