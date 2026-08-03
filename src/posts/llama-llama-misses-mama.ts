import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/llama.jpg",
    "alt": "Llama Llama Misses Mama",
    "href": "/media/2010/07/llama.jpg",
    "width": 210,
    "height": 216,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter and I completely related to adorable Llama Llama and his experiences on his first day of school. The author, ",
      {
        "type": "link",
        "href": "http://www.annadewdney.com/Annas_website/Home.html",
        "external": true,
        "children": [
          "Anna Dewdney"
        ]
      },
      ", manages to describe the minute details and emotions of preparing and going to school for the first time using clever rhyming sentences. Each page consists of colorful and expressive illustrations that show Llama’s feelings of excitement, anxiety, sadness, and joy in his home and school environment. The rhyme, rhythm and pictures all appeal to a child (as well as her mama)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For little attached ones like my daughter who love their mamas so tightly, your child may also especially relate to the lines, “Llama misses Mama so… Why did Mama Llama go?” Ms. Dewdney definitely manages to capture the mommy guilt perfectly with a few lines and images! Thankfully, there’s a positive spin and mommies everywhere can be optimistic that their children can have a good transition into school or daycare. The teachers and children (all depicted as different animals) help Llama overcome his separation anxiety and transition into the social setting. As parents, we can all hope that our children will be treated as compassionately and inclusively as Llama is and that they will also learn to enjoy school experiences. The joyful reunion between mother and child takes place across two pages (my preschooler claims, “this is the part I like!”) and details such as the flying crayons as Llama runs to mama emphasizes the strength of emotions of the moment."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Llama Llama Misses Mama"
        ]
      },
      " is must-have for any mom and soon-to-be school age child."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. For activities to accompany the book,visit ",
      {
        "type": "link",
        "href": "http://www.teachervision.fen.com/childrens-book/printable/62361.html",
        "external": true,
        "children": [
          "TeacherVision"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
