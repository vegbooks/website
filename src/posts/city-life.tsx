import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6752",
  "slug": "city-life",
  "url": "/reviews/city-life/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/10/city-life/",
  "title": "City Life",
  "publishedAt": "2012-01-10",
  "publishedLabel": "January 10th, 2012",
  "excerpt": "We love this book. We got it for our daughter (age 2.5) for Christmas and have read it many times since then. It’s the story of a little girl thinking about all of the fun she and her two moms are going to have in…",
  "image": {
    "src": "/media/2012/01/city-life-cover-jpg.jpg",
    "alt": "City Life",
    "width": 210,
    "height": 209
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Cities",
      "slug": "cities",
      "url": "/topics/cities/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "J. Cecelia Haytko",
      "slug": "j-cecelia-haytko",
      "url": "/topics/j-cecelia-haytko/"
    },
    {
      "name": "Jeanelle Ferreira",
      "slug": "jeanelle-ferreira",
      "url": "/topics/jeanelle-ferreira/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Two-Mom Families",
      "slug": "two-mom-families",
      "url": "/topics/two-mom-families/"
    },
    {
      "name": "Urban",
      "slug": "urban",
      "url": "/topics/urban/"
    },
    {
      "name": "Urban Living",
      "slug": "urban-living",
      "url": "/topics/urban-living/"
    },
    {
      "name": "Wild Animals in Captivity",
      "slug": "wild-animals-in-captivity",
      "url": "/topics/wild-animals-in-captivity/"
    },
    {
      "name": "Zoos",
      "slug": "zoos",
      "url": "/topics/zoos/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "We love this book. We got it for our daughter (age 2.5) for Christmas and have read it many times since then. It’s the story of a little girl thinking about all of the fun she and her two moms are going to have in…",
    "image": "https://vegbooks.org/media/2012/01/city-life-cover-jpg.jpg"
  },
  "previous": {
    "title": "Hairy Hezekiah",
    "url": "/reviews/hairy-hezekiah/"
  },
  "next": {
    "title": "Does a Kangaroo Have a Mother Too?",
    "url": "/reviews/kangaroo/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/01/city-life-cover-jpg.jpg"}><img src={"/media/2012/01/city-life-cover-jpg.jpg"} alt={"City Life"} width={210} height={209} /></a>
      </figure>
      <p>{"We love "}<a href={"http://www.amazon.com/gp/product/1607012995/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1607012995"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{". We got it for our daughter (age 2.5) for Christmas and have read it many times since then. It’s the story of a little girl thinking about all of the fun she and her two moms are going to have in her neighborhood the next day. As she lays in bed listening to the sound of the train go by, she thinks about taking the bus to the museum, eating pretzels from a cart, and feeding pigeons in the park. And as she drifts off to sleep, she thinks, “I like city life the best.”"}</p>
      <p>{"As city dwellers ourselves, this book really resonated with us. So many children’s books are about farming or other things that are just not a part of our lives. Our daughter loves this book because it features two moms, which is like her family, but also because she recognizes all of the images in the book. We take buses and trains, we go to museums, and we walk to the farmers market."}</p>
      <p>{"The text of the book is simple and the illustrations are unique. The pages with text feature large black text on bold colors (orange and green mostly) and the facing pages feature simple hand drawn black and white drawings."}</p>
      <p>{"Because we love this book so much, we find it unfortunate that it depicts both zoos and aquariums. The book is short, maybe 20 pages, so it’s amazing to find two mention of animals in captivity. My daughter, never having been to an aquarium, thinks it’s pretty silly to “take a bus to see the hippopotamus.”"}</p>
      <p>{"Because we like this book so much, we will keep it in our collection, though we find the references to animals in captivity to be quite unfortunate."}</p>
      <p>{"Ages 2-6."}</p>
    </div>
  );
}
