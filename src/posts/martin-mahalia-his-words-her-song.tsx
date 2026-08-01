import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10060",
  "slug": "martin-mahalia-his-words-her-song",
  "url": "/reviews/martin-mahalia-his-words-her-song/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/02/11/martin-mahalia-his-words-her-song/",
  "title": "Martin & Mahalia: His Words, Her Song",
  "publishedAt": "2015-02-11",
  "publishedLabel": "February 11th, 2015",
  "excerpt": "Martin & Mahalia is a book that wants to be read out loud. Andrea Davis Pinkney combines history, biography, and poetry to tell a story of two influential people in the Civil Rights Movement: Martin Luther King Jr.,…",
  "image": {
    "src": "/media/2015/02/m-mimage.jpg",
    "alt": "MMimage",
    "width": 464,
    "height": 359
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
      "name": "Andrea Davis Pinkney",
      "slug": "andrea-davis-pinkney",
      "url": "/topics/andrea-davis-pinkney/"
    },
    {
      "name": "Brian Pinkney",
      "slug": "brian-pinkney",
      "url": "/topics/brian-pinkney/"
    },
    {
      "name": "Civil Rights",
      "slug": "civil-rights",
      "url": "/topics/civil-rights/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Gospel Music",
      "slug": "gospel-music",
      "url": "/topics/gospel-music/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Mahalia Jackson",
      "slug": "mahalia-jackson",
      "url": "/topics/mahalia-jackson/"
    },
    {
      "name": "Martin Luther King",
      "slug": "martin-luther-king",
      "url": "/topics/martin-luther-king/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
    },
    {
      "name": "Peacemakers",
      "slug": "peacemakers",
      "url": "/topics/peacemakers/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Martin & Mahalia is a book that wants to be read out loud. Andrea Davis Pinkney combines history, biography, and poetry to tell a story of two influential people in the Civil Rights Movement: Martin Luther King Jr.,…",
    "image": "https://vegbooks.org/media/2015/02/m-mimage.jpg"
  },
  "previous": {
    "title": "Vegetables in Underwear",
    "url": "/reviews/vegetables-in-underwear/"
  },
  "next": {
    "title": "A Penguin Named Patience: A Hurricane Katrina Rescue Story",
    "url": "/reviews/a-penguin-named-patience-a-hurricane-katrina-rescue-story/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p><em>{"Martin & Mahalia"}</em>{" is a book that wants to be read out loud. Andrea Davis Pinkney combines history, biography, and poetry to tell a story of two influential people in the Civil Rights Movement: Martin Luther King Jr., civil rights leader; and Mahalia Jackson, “Queen of Gospel” music. With artful illustrations by Brian Pinkney and colorful text in varying sizes, it reaches towards spoken word and song, emphasizing the power of words and music. The collaboration between author and illustrator cleverly reiterates the partnership between Martin and Mahalia. Colorful and casual, the story plays up the strength and positive impact Martin and Mahalia made and takes a brief journey from segregation to the March on Washington for Jobs and Freedom, a defining moment in civil rights history."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/02/m-mimage.jpg"} alt={"MMimage"} width={464} height={359} />
      </figure>
      <p>{"Brilliantly and artistically written and illustrated, it evokes emotions while telling an amazing story. The Pinkneys added a note from each of them at the end which fills in biographical, historical, and personal details that were not included in the main story (like last names, other well known people in the civil rights movement, Presidents, and inspiration). A list of additional reading and discography follows as well as an illustrated timeline."}</p>
      <p>{"Ages 6 +."}</p>
      <p><em><a href={"http://www.hachettebookgroup.com/kids/"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" sent a copy of this book for review."}</em></p>
    </div>
  );
}
