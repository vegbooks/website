import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10203",
  "slug": "i-am-yoga",
  "url": "/reviews/i-am-yoga/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/11/09/i-am-yoga/",
  "title": "I Am Yoga",
  "publishedAt": "2015-11-09",
  "publishedLabel": "November 9th, 2015",
  "excerpt": "I Am Yoga by Susan Verde teaches us that when we align our hearts, minds and bodies anything is possible. Yoga, a Sanskrit word meaning “to join,” is a practice that enables each one of us to connect with the many…",
  "image": {
    "src": "/media/2015/11/9781419716645.jpg",
    "alt": "9781419716645",
    "width": 480,
    "height": 481
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
      "name": "Anger",
      "slug": "anger",
      "url": "/topics/anger/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Nonviolence",
      "slug": "nonviolence",
      "url": "/topics/nonviolence/"
    },
    {
      "name": "Peter H. Reynolds",
      "slug": "peter-h-reynolds",
      "url": "/topics/peter-h-reynolds/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Self-Acceptance",
      "slug": "self-acceptance",
      "url": "/topics/self-acceptance/"
    },
    {
      "name": "Susan Verde",
      "slug": "susan-verde",
      "url": "/topics/susan-verde/"
    },
    {
      "name": "Yoga",
      "slug": "yoga",
      "url": "/topics/yoga/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "I Am Yoga by Susan Verde teaches us that when we align our hearts, minds and bodies anything is possible. Yoga, a Sanskrit word meaning “to join,” is a practice that enables each one of us to connect with the many…",
    "image": "https://vegbooks.org/media/2015/11/9781419716645.jpg"
  },
  "previous": {
    "title": "I Am Abraham Lincoln (Ordinary People Change the World)",
    "url": "/reviews/i-am-abraham-lincoln-ordinary-people-change-the-world/"
  },
  "next": {
    "title": "Not a Nugget",
    "url": "/reviews/not-a-nugget/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p><em>{"I Am Yoga"}</em>{" by Susan Verde teaches us that when we align our hearts, minds and bodies anything is possible."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/11/9781419716645.jpg"} alt={"9781419716645"} width={480} height={481} />
      </figure>
      <p>{"Yoga, a Sanskrit word meaning “to join,” is a practice that enables each one of us to connect with the many elements on this earth in our own special way. Once we know we can carve out a unique spot that feels right for us, we know we are never alone."}</p>
      <p>{"This book not only is a great introduction to yoga, but teaches children to embrace their individuality, as a gift and not something to fear. In a world, that can seem overwhelmingly large, it is nice to know that this practice of yoga, can make us feel one in our being. This book sends a beautiful message. It shows children that there is no one right way to feel and when we have feelings that seem unmanageable, there is a way to experience them that feels safe. I love how it incorporates references to nonviolence and anger management skills."}</p>
      <p>{"The illustrated guide at the back of the book introduces children to basic poses and explains them in an active and explorative manner."}</p>
    </div>
  );
}
