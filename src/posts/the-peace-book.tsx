import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8309",
  "slug": "the-peace-book",
  "url": "/reviews/the-peace-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/10/23/the-peace-book/",
  "title": "The Peace Book",
  "publishedAt": "2012-10-23",
  "publishedLabel": "October 23rd, 2012",
  "excerpt": "The Peace Book by Todd Parr is perfect for young kids. The words and pictures are simple, yet they have the potential to open the door to a much larger, more complex conversation. Inside, each page describes what…",
  "image": {
    "src": "/media/2012/10/9780316043496.jpg",
    "alt": "The Peace Book",
    "width": 210,
    "height": 210
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
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Kindness to Animals",
      "slug": "kindness-to-animals",
      "url": "/topics/kindness-to-animals/"
    },
    {
      "name": "Peace",
      "slug": "peace",
      "url": "/topics/peace/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Todd Parr",
      "slug": "todd-parr",
      "url": "/topics/todd-parr/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "The Peace Book by Todd Parr is perfect for young kids. The words and pictures are simple, yet they have the potential to open the door to a much larger, more complex conversation. Inside, each page describes what…",
    "image": "https://vegbooks.org/media/2012/10/9780316043496.jpg"
  },
  "previous": {
    "title": "All the Awake Animals",
    "url": "/reviews/all-the-asleep-animals/"
  },
  "next": {
    "title": "Top Picks for Three-Year-Olds (And Happy Birthday to Us!)",
    "url": "/reviews/three-year-olds/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/10/9780316043496.jpg"}><img src={"/media/2012/10/9780316043496.jpg"} alt={"The Peace Book"} width={210} height={210} /></a>
      </figure>
      <p><em>{"The Peace Book"}</em>{" by Todd Parr is perfect for young kids. The words and pictures are simple, yet they have the potential to open the door to a much larger, more complex conversation. Inside, each page describes what peace is. For example, “Peace is… sharing a meal, planting a tree, giving shoes to someone who needs them, helping your neighbor, and making new friends.” There are a few pages that specifically focus on animals, including the page that says “Peace is thinking about someone you love.” On that page, there’s a picture of a boy thinking about a dog, and a dog similarly thinking about a boy. It shows that love goes both ways, and exists between species. The page that says, “Peace is being free” shows a bird flying in the sky. Another page that stands out for its animal compassion message is the page that shows a hen sitting on a bunch of eggs, and says “Peace is keeping someone warm.” The pages that include animals are all positive and help reinforce to the reader that animals have emotions, needs and desires just like us."}</p>
      <p>{"This is a perfect book to use as a tool for talking about real-life, important issues. Each page tackles a different issue related to poverty, animal welfare, environmental protection, and being kind to other people."}</p>
      <p>{"Parents (and educators) can use this book to encourage kids to think about "}<a href={"http://www.nonviolentsolution.org/building_homes.php"} target="_blank" rel="noopener noreferrer">{"what peace is"}</a>{" and where it exists. They can draw pictures and create lists of peaceful situations, and do other types of activities that encourage critical thinking for kids to make a difference in the world."}</p>
      <p>{"Author Todd Parr’s other books are also worth checking out."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
