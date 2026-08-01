import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3373",
  "slug": "the-best-cat-in-the-world",
  "url": "/reviews/the-best-cat-in-the-world/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/25/the-best-cat-in-the-world/",
  "title": "The Best Cat in the World",
  "publishedAt": "2010-10-25",
  "publishedLabel": "October 25th, 2010",
  "excerpt": "Prolific children’s author Lesléa Newman has penned a poignant tale of love and loss — themes that are familiar to readers of her work — that will help children grieve the death of a companion and learn to love…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "The Best Cat in the World",
    "width": 210,
    "height": 139
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Grief",
      "slug": "grief",
      "url": "/topics/grief/"
    },
    {
      "name": "Lesléa Newman",
      "slug": "leslea-newman",
      "url": "/topics/leslea-newman/"
    },
    {
      "name": "Loss",
      "slug": "loss",
      "url": "/topics/loss/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Ronald Himler",
      "slug": "ronald-himler",
      "url": "/topics/ronald-himler/"
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
    "description": "Prolific children’s author Lesléa Newman has penned a poignant tale of love and loss — themes that are familiar to readers of her work — that will help children grieve the death of a companion and learn to love…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Happy Birthday, Baby!",
    "url": "/reviews/happy-birthday-baby/"
  },
  "next": {
    "title": "Biscuit Finds a Friend",
    "url": "/reviews/biscuit-finds-a-friend/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"The Best Cat in the World"} width={210} height={139} /></a>
      </figure>
      <p>{"Prolific children’s author Lesléa Newman has penned a poignant tale of love and loss — "}<a href={"/reviews/hachiko-waits/"}>{"themes that are familiar"}</a>{" to readers of her work — that will help children grieve the death of a companion and learn to love again."}</p>
      <p>{"Told from the point of view of a young boy named Victor (who’s probably 7 or 8 years old), "}<em><a href={"http://books.google.com/books?id=_Wm4bXUUmDMC&printsec=frontcover&dq=best+cat+in+the+world&source=bl&ots=OcOQGqcNbI&sig=36yWT273T-f1wOKFRh4H339T034&hl=en&ei=p0LETN"} target="_blank" rel="noopener noreferrer">{"The Best Cat in the World"}</a></em>{" describes a feline companion named Charlie — a companion so wonderful that Victor often reminds him he’s the “best cat in the world.” When Charlie doesn’t get up one morning, Victor and his mother bring him to the vet, who tells them that she cannot make him young again."}</p>
      <p>{"Victor’s grief for Charlie is palpable. He cries. He cannot eat. And when Victor’s mother suggests that they adopt a new cat, Victor refuses. Still, when he receives a phone call from the vet asking if he can help with a kitten in desperate need of a home, he agrees to come meet her."}</p>
      <p>{"Victor quickly warms up to the new kitten, but she is not Charlie. She does not sleep where Charlie slept, and she does not enjoy being held the same way. But she finds a way into his heart by being herself. At the end of the book, Victor holds the new kitten while looking out the window at Charlie’s grave. He asks, “Who is the best cat in world?” and his new kitten purrs a rumbling reply."}</p>
      <p>{"My daughter, being 4, could not understand that two cats could be the “best cat in the world,” but having lost a feline companion earlier in life, she could relate to Victor’s loss and the deep relationship he shared with Charlie. As for me, this book chokes me up each time I read it, in part because it’s sad, but also because it speaks to a truth about the connection we can have with members of other species if we open ourselves up to love."}</p>
      <p>{"Vegan parents should note that the one mention of food is vegetarian but presumably not vegan — Victor says he is unable to eat his favorite food, macaroni and cheese."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
