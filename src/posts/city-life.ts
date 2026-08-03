import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/city-life-cover-jpg.jpg",
    "alt": "City Life",
    "href": "/media/2012/01/city-life-cover-jpg.jpg",
    "width": 210,
    "height": 209,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We love ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1607012995/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1607012995",
        "external": true,
        "children": [
          "this book"
        ]
      },
      ". We got it for our daughter (age 2.5) for Christmas and have read it many times since then. It’s the story of a little girl thinking about all of the fun she and her two moms are going to have in her neighborhood the next day. As she lays in bed listening to the sound of the train go by, she thinks about taking the bus to the museum, eating pretzels from a cart, and feeding pigeons in the park. And as she drifts off to sleep, she thinks, “I like city life the best.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As city dwellers ourselves, this book really resonated with us. So many children’s books are about farming or other things that are just not a part of our lives. Our daughter loves this book because it features two moms, which is like her family, but also because she recognizes all of the images in the book. We take buses and trains, we go to museums, and we walk to the farmers market."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The text of the book is simple and the illustrations are unique. The pages with text feature large black text on bold colors (orange and green mostly) and the facing pages feature simple hand drawn black and white drawings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because we love this book so much, we find it unfortunate that it depicts both zoos and aquariums. The book is short, maybe 20 pages, so it’s amazing to find two mention of animals in captivity. My daughter, never having been to an aquarium, thinks it’s pretty silly to “take a bus to see the hippopotamus.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because we like this book so much, we will keep it in our collection, though we find the references to animals in captivity to be quite unfortunate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
