import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9041",
  "slug": "the-five-lives-of-our-cat-zook",
  "url": "/reviews/the-five-lives-of-our-cat-zook/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/08/20/the-five-lives-of-our-cat-zook/",
  "title": "The Five Lives of Our Cat Zook",
  "publishedAt": "2013-08-20",
  "publishedLabel": "August 20th, 2013",
  "excerpt": "Kiddo and I read this book together over the summer. I never expected how much I would enjoy the narrator, Oona, and how I’d be drawn into the plot. Now that we’re done, I can say without hesitation that The Five…",
  "image": {
    "src": "/media/2013/08/zook-pb.jpg",
    "alt": "ZOOK_PB",
    "width": 216,
    "height": 300
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Chapter Books",
      "slug": "chapter-books",
      "url": "/topics/chapter-books/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
    },
    {
      "name": "Death of a Pet",
      "slug": "death-of-a-pet",
      "url": "/topics/death-of-a-pet/"
    },
    {
      "name": "Family",
      "slug": "family",
      "url": "/topics/family/"
    },
    {
      "name": "Grief",
      "slug": "grief",
      "url": "/topics/grief/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Joanne Rocklin",
      "slug": "joanne-rocklin",
      "url": "/topics/joanne-rocklin/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Puberty",
      "slug": "puberty",
      "url": "/topics/puberty/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "Kiddo and I read this book together over the summer. I never expected how much I would enjoy the narrator, Oona, and how I’d be drawn into the plot. Now that we’re done, I can say without hesitation that The Five…",
    "image": "https://vegbooks.org/media/2013/08/zook-pb.jpg"
  },
  "previous": {
    "title": "Blink of an Eye",
    "url": "/reviews/blink/"
  },
  "next": {
    "title": "Monster on the Hill",
    "url": "/reviews/monster-on-the-hill/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/08/zook-pb.jpg"}><img src={"/media/2013/08/zook-pb.jpg"} alt={"ZOOK_PB"} width={216} height={300} /></a>
      </figure>
      <p>{"Kiddo and I read this book together over the summer. I never expected how much I would enjoy the narrator, Oona, and how I’d be drawn into the plot. Now that we’re done, I can say without hesitation that "}<em>{"The Five Lives of Our Cat Zook"}</em>{" ranks among my favorite chapter books that we’ve read together. Kiddo concurs."}</p>
      <p>{"My daughter is a rising second grader — younger than the book’s intended audience — and so she did not know from the beginning (as I did) that the titular character Zook would die at the book’s end. I dropped hints along the way and asked her questions to get her thinking about the connections between Zook’s illness and Oona’s father’s cancer (which caused his death before the book began). Still, when Zook eventually died, she cried and cried. A little bit of her cried for our cat Midge, who died when kiddo was 3 and who features prominently in many family stories, but most of her cried for Zook and Oona. Loving our cat Cassie just as much as Oona loved Zook, my daughter understood what that loss might be like, and she deeply empathized with Oona."}</p>
      <p>{"I highly recommend you read this book with your child if you can. There’s a lot to talk about. Oona is a complicated character — flawed and deeply loyal — and much of her inner world revolves around trying to distinguish among truth, lies, and storytelling. She’s at the very beginning of puberty, and she experiences her first crush and conflicting emotions about her widowed mother falling in love. But don’t be afraid — it’s not all serious! Oona tells some fantastic stories to her younger brother Freddy about their cat Zook’s previous lives (hence the book’s title). And she formulates funny, clever theories about the world, some wrong and others spot on."}</p>
      <p>{"Vegetarian and vegan families should be aware that one character, Oona’s grandmother, is described as being a vegetarian who makes an exception for lox, and that several scenes take place in a neighborhood pizzeria where the characters eat pizza and fried zucchini."}</p>
      <p>{"Ages 8 to 11."}</p>
      <p><em>{"I received this book as a review copy from "}<a href={"http://www.abramsbooks.com/amulet.html"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{"."}</em></p>
    </div>
  );
}
