import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10080",
  "slug": "wangari-maathai",
  "url": "/reviews/wangari-maathai/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/03/22/wangari-maathai/",
  "title": "Wangari Maathai: The Woman Who Planted Millions of Trees",
  "publishedAt": "2015-03-22",
  "publishedLabel": "March 22nd, 2015",
  "excerpt": "This straightforward telling of Wangari Maathai: The Woman Who Planted Millions of Trees by Franck Prévot, is accompanied by colorful and beautiful illustrations by Aurélia Fronty that help set the tone of hope and…",
  "image": {
    "src": "/media/2015/03/wangari-300dpi.jpg",
    "alt": "Wangari_300dpi",
    "width": 464,
    "height": 464
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
      "name": "Activism",
      "slug": "activism",
      "url": "/topics/activism/"
    },
    {
      "name": "Aurélia Fronty",
      "slug": "aurelia-fronty",
      "url": "/topics/aurelia-fronty/"
    },
    {
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Franck Prévot",
      "slug": "franck-prevot",
      "url": "/topics/franck-prevot/"
    },
    {
      "name": "Human Rights",
      "slug": "human-rights",
      "url": "/topics/human-rights/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Nobel Peace Prize",
      "slug": "nobel-peace-prize",
      "url": "/topics/nobel-peace-prize/"
    },
    {
      "name": "Social Justice",
      "slug": "social-justice",
      "url": "/topics/social-justice/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "This straightforward telling of Wangari Maathai: The Woman Who Planted Millions of Trees by Franck Prévot, is accompanied by colorful and beautiful illustrations by Aurélia Fronty that help set the tone of hope and…",
    "image": "https://vegbooks.org/media/2015/03/wangari-300dpi.jpg"
  },
  "previous": {
    "title": "Cinderella (2015)",
    "url": "/reviews/cinderella-2015/"
  },
  "next": {
    "title": "Lullaby & Kisses Sweet: Poems to Love with Your Baby",
    "url": "/reviews/lullaby-kisses-sweet-poems-to-love-with-your-baby/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"This straightforward telling of "}<em>{"Wangari Maathai: The Woman Who Planted Millions of Trees"}</em>{" by Franck Prévot, is accompanied by colorful and beautiful illustrations by Aurélia Fronty that help set the tone of hope and action throughout the book. This storybook, based on the true story of a young Kenyan girl who became the leader of an environmental and social movement. Aimed at 6-9 year olds, this book will be interesting and educational for both children and parents."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/03/wangari-300dpi.jpg"} alt={"Wangari_300dpi"} width={464} height={464} />
      </figure>
      <p>{"I read this book aloud to my six year old, and we stopped several times to discuss details and the scenes depicted in the art. Told in the present tense, the events feel like they happened very recently. The story deals with important and difficult issues (British colonialism, gender inequality, environmental impact) in understandable and clear descriptions that allow children to ask age-appropriate questions."}</p>
      <p>{"The story of Wangari Maathai, Nobel Peace Prize winner and environmental and human rights activist, is inspirational. This storybook version of her life demonstrates the importance of family, caring for the earth, and working hard for your values even when faced with opposition. The story highlights actions children can easily relate to, they will connect to Wangari’s desire to plant trees, provide a habitat for animals, help those in need, and stand up for justice."}</p>
      <p>{"The vivid colors and whimsical illustrations are a fantastic accompaniment to the story. With trees and leaves central to the picture themes, readers will enjoy finding hidden surprises in the details. The tone of the story is also supported by the different choices of colors and styles, and the revolution created by Wangari is shown in both realistic and fantastical images in the pages."}</p>
      <p>{"Following the story, which takes the reader through Wangari Maathai’s triumphant election to Parliament and Nobel Peace Prize award, there are photographs and information about Kenya and the legacy Wangari left behind. Highly recommended."}</p>
      <p><em>{"The "}<a href={"http://www.charlesbridge.com/"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{" sent a copy of this book for review."}</em></p>
    </div>
  );
}
