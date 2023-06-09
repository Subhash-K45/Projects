const data = [
  {
    id: 1,
    img: "https://i.etsystatic.com/21122594/r/il/0f3301/2481263476/il_fullxfull.2481263476_ok6w.jpg",
    category: "Contemporary Paintings",
    price: 28,
    name: "Contemporary Painting",
    artist: "Gerhard Richter",
    description:
      "Art that goes beyond the confines of contemporary art, exploring new directions, aesthetics, or modes of artistic expression.",
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/OIP.7mkzzL-r8RFFS0FyEB9jZgHaEK?pid=ImgDet&rs=1",
    category: "Contemporary Paintings",
    price: 22,
    name: "Post-modern art",
    artist: "Neo Rauch",
    description:
      "Art that emerged in the late 20th century, characterized by a rejection of modernist principles and a focus on self-reflection, irony, and the blending of different styles and cultural references.",
  },
  {
    id: 3,
    img: "https://4.bp.blogspot.com/-tm9clyFfFZA/UajZ8t7WdvI/AAAAAAAAAQo/xu-_ieaKv84/s1600/paint-33.jpg",
    category: "Contemporary Paintings",
    price: 21,
    name: "Fine art",
    artist: "Cecily Brown",
    description:
      "Art created primarily for aesthetic purposes, often exhibiting technical skill and conceptual depth.",
  },
  {
    id: 4,
    img: "https://i.etsystatic.com/7424399/r/il/dd5cbc/1226944080/il_fullxfull.1226944080_2m3s.jpg",
    category: "Contemporary Paintings",
    price: 32,
    name: "Neo-expressionism",
    artist: "Jonas Wood",
    description:
      "Art that goes beyond the confines of contemporary art, exploring new directions, aesthetics, or modes of artistic expression.",
  },
  {
    id: 5,
    img: "https://th.bing.com/th/id/R.adc63e58659ff47089b9ea1de8e6c388?rik=%2bcmCnQvmGB72Ow&riu=http%3a%2f%2f3.bp.blogspot.com%2f-LdHC6iPGc_Q%2fVRXAuUrgq7I%2fAAAAAAAACtw%2fGhJ0YDwqnEY%2fs1600%2fabstract-paintings-of-trees-at-night-background-1-hd-wallpapers.jpg&ehk=HbLGC3wxIA0Q1qLnJmMn0zLU4Y0O%2fwA8q%2fZYND0K2rI%3d&risl=&pid=ImgRaw&r=0",
    category: "Contemporary Paintings",
    price: 19,
    name: "Contemporary Tree Art",
    artist: "Neo Rauch",
    description:
      "An art movement that emerged in the late 20th century, characterized by bold, gestural brushwork, intense colors, and emotional or psychological subject matters",
  },
  {
    id: 6,
    img: "https://th.bing.com/th/id/R.082c82fc57fc3ac9bc4f14cddbc421b4?rik=WAWsUSgMYVflHA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-sHkkJAeYj9I%2fUd5iyf6Ti4I%2fAAAAAAAAXBA%2fWpX38QCWe9s%2fs1600%2fColorful%2bPaintings%2bWallpapers%2b%2525281%252529.jpg&ehk=UCXI4ymaAhBDvPCbDHFhiOPc7PtKhmnI5g6XkDNS8ho%3d&risl=&pid=ImgRaw&r=0",
    category: "Contemporary Paintings",
    price: 29,
    name: "Contemporary Tree Art",
    artist: "Adrian Ghenie",
    description:
      "An art movement that emerged in the late 20th century, characterized by bold, gestural brushwork, intense colors, and emotional or psychological subject matters",
  },
  {
    id: 7,
    img: "https://i.redd.it/1n8uufswys411.jpg",
    category: "Contemporary Paintings",
    price: 34,
    name: "Neo-expressionism",
    artist: "Jonas Wood",
    description:
      " Art that does not attempt to represent recognizable objects or scenes, focusing instead on the interplay of color, form, and texture to evoke emotions or ideas.",
  },
  {
    id: 8,
    img: "https://th.bing.com/th/id/OIP.Vq1OKAGnL5CoU_OPCHumCwHaE8?pid=ImgDet&rs=1",
    category: "Contemporary Paintings",
    price: 52,
    name: "Street art",
    artist: "Neo Rauch",
    description:
      "Art created in public spaces, often associated with urban environments, including graffiti, murals, stencils, and other forms of artistic expression.",
  },
  {
    id: 9,
    img: "https://images.designtrends.com/wp-content/uploads/2016/03/09060452/Beautiful-Modern-Painting.jpg",
    category: "Contemporary Paintings",
    price: 45,
    name: "Modern Art",
    artist: "Elizabeth Peyton",
    description:
      " Artistic works created from the late 19th century to the mid-20th century that departed from traditional art forms and embraced experimentation, abstraction, and new techniques.",
  },
  {
    id: 10,
    img: "https://th.bing.com/th/id/R.f8c80f0b09c75ca1e134ef60647b5f37?rik=v4lMnhaWFJAmMw&riu=http%3a%2f%2fpatternshub.com%2fwp-content%2fuploads%2f2016%2f08%2fContemporary-Art-4.jpg&ehk=eS4T6HciNVQS%2faueMx%2fs4ABx%2bsguFsJ%2bAvNF%2bTrnULM%3d&risl=&pid=ImgRaw&r=0",
    category: "Contemporary Paintings",
    price: 69,
    name: "female Urban art",
    artist: "Peter Doig",
    description:
      "Art inspired by or created within urban environments, often incorporating elements of street art, graffiti, and cultural references specific to urban contexts.",
  },
  {
    id: 11,
    img: "https://i.pinimg.com/originals/09/d5/22/09d522d97b18d019ae6d075c99f2207a.jpg",
    category: "Contemporary Paintings",
    price: 48,
    name: "Mixed media art",
    artist: "Elizabeth Peyton",
    description:
      ": Art that incorporates multiple materials, techniques, or mediums, often combining traditional painting with elements of collage, sculpture, or digital processes.",
  },
  {
    id: 12,
    img: "https://th.bing.com/th/id/R.97c032f44a19d53e66abb996d105c085?rik=DaCeCrJaYQT2Og&riu=http%3a%2f%2fi.ebayimg.com%2fimages%2fi%2f231270188810-0-1%2fs-l1000.jpg&ehk=AfrUSEy%2b7C8NnzjYxRUKIGDiVuVxRIurpz%2fbtCS04Y0%3d&risl=&pid=ImgRaw&r=0",
    category: "Contemporary Paintings",
    price: 36,
    name: "Figurative painting",
    artist: "Takashi Murakami",
    description:
      "Art that pushes the boundaries of artistic conventions, challenging established norms and exploring new artistic concepts and techniques.",
  },
  {
    id: 13,
    img: "https://cdn.shopify.com/s/files/1/0145/9109/8944/products/464-7_1500x.jpg?v=1548729699",
    category: "Contemporary Paintings",
    price: 17,
    name: "Elephant Figurative painting",
    artist: "Jenny Saville",
    description:
      "Art that pushes the boundaries of artistic conventions, challenging established norms and exploring new artistic concepts and techniques.",
  },
  {
    id: 14,
    img: "https://i.pinimg.com/originals/60/b0/62/60b06246dafcbfbf52156f2538a1f569.jpg",
    category: "Contemporary Paintings",
    price: 54,
    name: "Sea Canvas Art",
    artist: "Mark Bradford",
    description:
      "Paintings that incorporate innovative approaches, techniques, and subject matters, often departing from traditional artistic conventions.",
  },
  {
    id: 15,
    img: "https://th.bing.com/th/id/OIP.4SYSB5EfOUQv0XNKPM9KIgHaGJ?pid=ImgDet&rs=1",
    category: "Contemporary Paintings",
    price: 39,
    name: "Mixed Media Art",
    artist: "Jonas Wood",
    description:
      " Art that incorporates multiple materials, techniques, or mediums, often combining traditional painting with elements of collage, sculpture, or digital processes.",
  },
  {
    id: 16,
    img: "https://www.bing.com/images/search?view=detailV2&ccid=V89cFcmq&id=442E1EEDDD2BEA4A1167CA1272B4B02BB2C78320&thid=OIP.V89cFcmqwTOusWDBtEFkjgHaKS&mediaurl=https%3a%2f%2fwww.fidostudio.com%2fuploads%2f1%2f2%2f9%2f1%2f129192197%2fs192612268662456200_p157_i2_w2160.jpeg&exph=3000&expw=2160&q=contemporary+paintings&simid=608013738643780780&FORM=IRPRST&ck=6D94D9DDCA66786FFA2F727ECE435B2C&selectedIndex=17,",
    category: "Contemporary Paintings",
    price: 27,
    name: "Digital art",
    artist: "Jenny Saville",
    description:
      "Art created or presented using digital technologies, such as digital painting, computer-generated imagery, interactive installations, or digital prints.",
  },
  {
    id: 17,
    img: "https://www.bing.com/images/search?view=detailV2&ccid=Co6pAUAB&id=67B48B188AE57D41AA01810DADF6B6E68E3CDEB8&thid=OIP.Co6pAUABIJ2ZT7iLnkpG9gHaIB&mediaurl=https%3a%2f%2f2.bp.blogspot.com%2f--JfPffQ8S4c%2fWHzr0M7t-5I%2fAAAAAAAAAxQ%2f2cuP2igwUfMdKtwD06cvq_viCOPBY1seQCLcB%2fs1600%2fWojciech_Babski_12.jpg&exph=759&expw=700&q=contemporary+paintings&simid=608044851402331654&FORM=IRPRST&ck=28599B2373C75C5BF30751A4F935E2A1&selectedIndex=62",
    category: "Contemporary Paintings",
    price: 25,
    name: "Female Figurative Art",
    artist: "Neo Rauch",
    description:
      "Art that pushes the boundaries of artistic conventions, challenging established norms and exploring new artistic concepts and techniques.",
  },
  {
    id: 18,
    img: "https://a.1stdibscdn.com/archivesE/upload/a_4683/a_67224221599745236565/Drawn_To_The_Light__org.jpg",
    category: "Contemporary Paintings",
    price: 15,
    name: "Contemporary Art",
    artist: "Peter Doig",
    description:
      "Art created by artists living and working in the present time, reflecting current cultural, social, and political contexts.",
  },
  {
    id: 19,
    img: "https://i.pinimg.com/474x/0f/93/dc/0f93dcbf3579bc70eb374d7be3205680.jpg",
    category: "Contemporary Paintings",
    price: 88,
    name: "Canvas Painting",
    artist: "Kerry James Marshall",
    description:
      " Art that embraces new ideas, styles, or approaches, often with a focus on pushing artistic boundaries and societal norms.",
  },
  {
    id: 20,
    img: "https://th.bing.com/th/id/OIP.rNHT3SN17zZnJnICNUKf7AHaEb?pid=ImgDet&rs=1",
    category: "Contemporary Paintings",
    price: 61,
    name: "Contemporary Art",
    artist: "Mark Bradford",
    description:
      "Art created by artists living and working in the present time, reflecting current cultural, social, and political contexts.",
  },
  {
    id: 21,
    img: "https://s-media-cache-ak0.pinimg.com/736x/e7/0f/73/e70f7396e1aa82afba771c3fbaabd5e6.jpg",
    category: "Contemporary Paintings",
    price: 22,
    name: "Minimalism",
    artist: "Jonas Wood",
    description:
      "Art characterized by simplicity, austerity, and a reduction of form, often focusing on geometric shapes, clean lines, and a sense of precision or repetition.",
  },
  {
    id: 22,
    img: "https://th.bing.com/th/id/R.44e9a1a747bd1ebc8cb7976532643745?rik=l4ZYAzqiEJqqYw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-_6PAocQoZY4%2fUZt-YV4NTOI%2fAAAAAAAABB0%2fTN8s2GbBSp8%2fs1600%2fcapricorn-the-goat.jpg&ehk=K4T0a%2bHTSh9Irad8FaPd8uV5OyQ95f0KfaOFaKXYycA%3d&risl=&pid=ImgRaw&r=0",
    category: "Contemporary Paintings",
    price: 26,
    name: "Surrealism",
    artist: "Peter Doig",
    description:
      "entury, emphasizing the irrational, subconscious, and dreamlike elements in art, often creating bizarre or uncanny imagery.",
  },
  {
    id: 23,
    img: "https://a.1stdibscdn.com/archivesE/upload/a_4683/a_69986021604336640097/52908612_368252323998097_1128420197946884096_n_1__org.jpg",
    category: "Contemporary Paintings",
    price: 42,
    name: "Street Art",
    artist: "Luc Tuymans",
    description:
      "Art created in public spaces, often associated with urban environments, including graffiti, murals, stencils, and other forms of artistic expression.",
  },
  {
    id: 24,
    img: "https://th.bing.com/th/id/R.7582e488ff0d3ef410546d7d656aad9c?rik=5l8W6vVqe7N3Ng&riu=http%3a%2f%2fwww.lnart.net%2fimages%2fxin4%2fil_1588xN.2086295227_cy1v.jpg&ehk=KlQWDSX5JMHzNmcxUpuxUqTtNEHPT6SmOK7ORnxenQQ%3d&risl=&pid=ImgRaw&r=0",
    category: "Contemporary Paintings",
    price: 48,
    name: "Wall Art",
    artist: "Neo Rauch",
    description:
      "Art that emerged in the 1950s and 1960s, characterized by the use of popular imagery, consumer culture references, and vibrant colors, often challenging the boundaries between high art and mass culture.",
  },
  {
    id: 25,
    img: "https://th.bing.com/th/id/OIP.6w-ZS6tthoHfAr1ylUD45QHaIK?w=170&h=187&c=7&r=0&o=5&pid=1.7",
    category: "Contemporary Paintings",
    price: 33,
    name: "female Figurative Art",
    artist: "Luc Tuymans",
    description:
      " Art that depicts recognizable objects or figures, often exploring themes of identity, representation, and the human form.",
  },
];
module.exports = data;
