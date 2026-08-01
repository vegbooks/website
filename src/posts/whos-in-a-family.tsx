import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6948",
  "slug": "whos-in-a-family",
  "url": "/reviews/whos-in-a-family/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/02/12/whos-in-a-family/",
  "title": "Who’s in a Family?",
  "publishedAt": "2012-02-12",
  "publishedLabel": "February 12th, 2012",
  "excerpt": "We’ve been reading this book a lot lately. We picked it up at a garage sale over the summer, but it wasn’t until recently that my 2.5 year old became interested in it. The book depicts many different types of…",
  "image": {
    "src": "/media/2012/02/978-1-883672-66-9.jpg",
    "alt": "Who’s in a Family?",
    "width": 210,
    "height": 245
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
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Diverse Families",
      "slug": "diverse-families",
      "url": "/topics/diverse-families/"
    },
    {
      "name": "Divorce",
      "slug": "divorce",
      "url": "/topics/divorce/"
    },
    {
      "name": "Father's Day",
      "slug": "fathers-day",
      "url": "/topics/fathers-day/"
    },
    {
      "name": "Fathers",
      "slug": "fathers",
      "url": "/topics/fathers/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Grandparents",
      "slug": "grandparents",
      "url": "/topics/grandparents/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Mother's Day",
      "slug": "mothers-day",
      "url": "/topics/mothers-day/"
    },
    {
      "name": "Mothers",
      "slug": "mothers",
      "url": "/topics/mothers/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robert Skutch",
      "slug": "robert-skutch",
      "url": "/topics/robert-skutch/"
    },
    {
      "name": "Two-Dad Families",
      "slug": "two-dad-families",
      "url": "/topics/two-dad-families/"
    },
    {
      "name": "Two-Mom Families",
      "slug": "two-mom-families",
      "url": "/topics/two-mom-families/"
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
    "description": "We’ve been reading this book a lot lately. We picked it up at a garage sale over the summer, but it wasn’t until recently that my 2.5 year old became interested in it. The book depicts many different types of…",
    "image": "https://vegbooks.org/media/2012/02/978-1-883672-66-9.jpg"
  },
  "previous": {
    "title": "Emily and Carlo",
    "url": "/reviews/emily-and-carlo/"
  },
  "next": {
    "title": "Piggie Pie",
    "url": "/reviews/piggie-pie/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/02/978-1-883672-66-9.jpg"}><img src={"/media/2012/02/978-1-883672-66-9.jpg"} alt={"Who’s in a Family?"} width={210} height={245} /></a>
      </figure>
      <p>{"We’ve been reading "}<a href={"http://www.amazon.com/gp/product/188367266X/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=188367266X"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" a lot lately. We picked it up at a garage sale over the summer, but it wasn’t until recently that my 2.5 year old became interested in it. The book depicts many different types of families. Families shown in the book are mixed race, two mom, two dad, single moms and single dads, grandparents and children, divorced families, and families that don’t have any children at all. The book shows that a family can take many different forms and concludes that a family is made up of the people who love you the most."}</p>
      <p>{"This book is not as well done as one of our other family favorites, "}<em>{"The Family Book"}</em>{" by Todd Parr, but I give it credit for its age. It was written in the mid-nineties, so it was probably pretty amazing back then. The illustrations are fun and the families are depicted having fun – sledding, canoeing, doing puzzles and puppet shows. The tone and illustrations give the possibly preachy topic a bit of fun. My daughter loves to read it and point out people that she knows that have the families depicted – especially when it comes to pointing out our family, which is two moms, a child, and a dog."}</p>
      <p>{"One aspect of the book that I particularly like is the inclusion of animal families. The book begins with the statement, “Families are made up of people, and animals have families too.” Then as various types of human families are described, corresponding animal families are described as well. For example, after depicting the single mom family, it is shown that chimpanzees are also raised by a single mom. While I think the animals are included in the book to show that different family structures are natural, this kind of inclusion also helps youngsters to realize that animal families make strong bonds just as human families do."}</p>
      <p>{"Ages 2+."}</p>
    </div>
  );
}
