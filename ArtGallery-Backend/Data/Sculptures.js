const data = [
  {
    id: 1,
    img: "https://mikefieldsbronzes.com/wp-content/uploads/2014/12/Unity-Contemporary-Sculpture-Mike-Fields-2.jpg",
    category: "Sculptures",
    price: 25,
    name: "Sculpted Serenity",
    createrName: "Auguste Rodin",
    description:
      "A captivating sculpture that embodies serenity and grace. The artist masterfully captures the essence of tranquility in this timeless piece.",
  },
  {
    id: 2,
    img: "https://www.statuesandsculptures.co.uk/media/catalog/product/cache/ffcebee024d4cb654f757a54b2efe625/s/d/sd-8020a.jpg",
    category: "Sculptures",
    price: 27,
    name: "Serenity in Stone",
    createrName: "Barbara Hepworth",
    description:
      "This stunning sculpture showcases the artist's deep appreciation for the organic forms found in nature. Carved from stone, it exudes a sense of serenity and harmony.",
  },
  {
    id: 3,
    img: "https://fws-files.s3.amazonaws.com/uploads/website/auctions/items/full/3213710_1.jpg",
    category: "Sculptures",
    price: 32,
    name: "Rebirth in Stone",
    createrName: "Alberto Giacometti",
    description:
      "A thought-provoking sculpture that explores the concept of rebirth and transformation. The artist skillfully molds the stone to depict the journey of life and renewal.",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/originals/73/fa/7b/73fa7b194c69f2e8bc68d4fcebc8ea35.jpg",
    category: "Sculptures",
    price: 24,
    name: "Serenity in Stone",
    createrName: "Anish Kapoor",
    description:
      "This captivating sculpture in stone evokes a sense of serenity and introspection. Its smooth curves and polished surface reflect light, creating a mesmerizing visual experience.",
  },
  {
    id: 5,
    img: "https://a.1stdibscdn.com/archivesE/upload/12372/28_15/img_2176/IMG_2176_l.jpeg",
    category: "Sculptures",
    price: 19,
    name: "Contours of Creation",
    createrName: "Henry Moore",
    description:
      "A sculpture that celebrates the beauty of creation and the interconnectedness of all things. The artist skillfully carves the contours, revealing the inherent harmony in nature.",
  },
  {
    id: 6,
    img: "https://th.bing.com/th/id/OIP.GCuMPt86L2Qf5BMUfN6CmQHaO7?pid=ImgDet&rs=1",
    category: "Sculptures",
    price: 29,
    name: "Monumental Balance",
    createrName: "Auguste Rodin",
    description:
      "This monumental sculpture embodies the delicate balance between strength and vulnerability. The artist's mastery is evident in the way the figure exudes both power and grace.",
  },
  {
    id: 7,
    img: "https://2.bp.blogspot.com/-vCgMJTsb_Mo/Ws49_SebxdI/AAAAAAAAYvk/-Q9Pc59FdlANT5EazBE1P6or8iba1uRRQCLcBGAs/s1600/30%2BOf%2BThe%2BWorld%2527s%2BMost%2BIncredible%2BSculptures%2BThat%2BTook%2BOur%2BBreath%2BAway%2B-%2BReflection%2Bsculpture%2Bin%2Bthe%2BUnited%2Bkingdom.jpg",
    category: "Sculptures",
    price: 33,
    name: "Eternal Reflections",
    createrName: "Louise Bourgeois",
    description:
      "An evocative sculpture that delves into the depths of human emotions. The mirror-like surfaces reflect not only the viewer's physical form but also their innermost thoughts and feelings.",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/originals/61/20/1e/61201e3c2c36ea89c65d960644284cdf.jpg",
    category: "Sculptures",
    price: 22,
    name: "Whispers of Bronze",
    createrName: "Henry Moore",
    description:
      "This bronze sculpture whispers tales of ancient wisdom and timelessness. The artist's delicate touch brings the material to life, showcasing the beauty of form and texture.",
  },
  {
    id: 9,
    img: "https://th.bing.com/th/id/OIP.V4ZVabGYzPeGRR9xyRAhkgHaE8?pid=ImgDet&rs=1",
    category: "Sculptures",
    price: 31,
    name: "Sculptural Symphony",
    createrName: "Isamu Noguchi",
    description:
      "This captivating sculpture is a harmonious composition of shapes and lines. The artist's careful arrangement of elements creates a visual symphony that engages and delights the viewer.",
  },
  {
    id: 10,
    img: "https://th.bing.com/th/id/OIP.hzG0LE4D0GchzH0BpvdqJwHaEO?pid=ImgDet&rs=1",
    category: "Sculptures",
    price: 35,
    name: "Breaking the Wall",
    createrName: "Ai Weiwei",
    description:
      "A powerful sculpture that challenges societal norms and speaks out against barriers. The fragmented form represents the breaking down of walls, both physical and metaphorical.",
  },
  {
    id: 11,
    img: "https://designclarity.net/files/design-clarity_human-movement-motion-sculpture_ltxhtjbkqs-1200x742.jpg",
    category: "Sculptures",
    price: 28,
    name: "Harmony in Motion",
    createrName: "Mathurin Moreau",
    description:
      "This exquisite sculpture captures the beauty of harmony and movement. The flowing lines and intricate details bring a sense of grace and elegance to the artwork.",
  },
  {
    id: 12,
    img: "https://th.bing.com/th/id/R.6ddac2b538eff325e3517ad828e0d5d6?rik=XEVaWVElS%2b1v3g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-_8WIq4T1IJY%2fT4jZQZepYmI%2fAAAAAAAAPVo%2fosgT80E5A_M%2fs1600%2fDSC_0529.JPG&ehk=6l%2blWlZLxug6MeoYKaHMyAg4E433sINsWYAgLpslPAA%3d&risl=&pid=ImgRaw&r=0",
    category: "Sculptures",
    price: 26,
    name: "Enchanting Elegance",
    createrName: "Alphonse Mucha",
    description:
      "An enchanting sculpture that embodies elegance and beauty. The artist's attention to detail and flowing forms create a captivating piece that transports viewers to a world of artistry.",
  },
  {
    id: 13,
    img: "https://th.bing.com/th/id/OIP.CN4a0zs4TiFc5quayxh7mQHaHa?pid=ImgDet&rs=1",
    category: "Sculptures",
    price: 23,
    name: "Garden Serenade",
    createrName: "Barbara Hepworth",
    description:
      "This sculpture brings a harmonious serenade to any garden setting. The artist's love for nature shines through as she carves the stone into organic shapes that blend seamlessly with the surroundings.",
  },
  {
    id: 14,
    img: "https://brianfell.org.uk/wp-content/uploads/2019/11/Widescreen-Brian-Fell-Abstract-Art-Sculpture.jpg",
    category: "Sculptures",
    price: 30,
    name: "Abstract Visions",
    createrName: "Hans Arp",
    description:
      "An abstract sculpture that invites viewers to explore the realms of imagination. The artist's playful arrangement of shapes and forms sparks curiosity and opens doors to new interpretations.",
  },
  {
    id: 15,
    img: "https://www.cycladia.com/blog/wp-content/uploads/2014/09/Teodosio_Sectio_05-300x200.jpg",
    category: "Sculptures",
    price: 21,
    name: "Dancing Shadows",
    createrName: "Barbara Hepworth",
    description:
      "This mesmerizing sculpture dances with shadows, captivating viewers with its fluidity and rhythm. The artist's skillful use of negative space and balance creates a sense of graceful movement.",
  },
  {
    id: 16,
    img: "https://i.pinimg.com/originals/e9/3c/90/e93c90d9d2520cce5683ab915ba84832.jpg",
    category: "Sculptures",
    price: 25,
    name: "Boundless Beauty",
    createrName: "Eduardo Chillida",
    description:
      "Boundless Beauty is a mesmerizing sculpture crafted by Eduardo Chillida. The artwork showcases the artist's unique ability to play with space, form, and texture. With its graceful curves and interlocking shapes, this sculpture invites viewers to contemplate the infinite possibilities of beauty.",
  },
  {
    id: 17,
    img: "https://i.pinimg.com/originals/0f/8e/14/0f8e146fc6198f86df498dc1afaeaa5c.jpg",
    category: "Sculptures",
    price: 56,
    name: "Frozen in Time",
    createrName: "Michelangelo",
    description:
      "Frozen in Time is an awe-inspiring sculpture created by the legendary artist Michelangelo. Carved with meticulous precision, this masterpiece captures the essence of eternal beauty. The lifelike details and striking pose immortalize a fleeting moment, leaving viewers in awe of the artist's genius.",
  },
  {
    id: 18,
    img: "https://th.bing.com/th/id/R.64cd678d3efde2e671cf6586a9c46e77?rik=h5%2bVXtK4bQcTlQ&riu=http%3a%2f%2fd310a9hpolx59w.cloudfront.net%2fproduct_photos%2f47179453%2f13front_original.jpg&ehk=FXv%2f%2fWw%2fwybWj579oMhcHCDmLbP25JlEmucHwK6uPb8%3d&risl=&pid=ImgRaw&r=0",
    category: "Sculptures",
    price: 96,
    name: "Eternal Embrace",
    createrName: "Alexander Calder",
    description:
      "Eternal Embrace is a mesmerizing sculpture by Alexander Calder. The artwork depicts a timeless embrace, capturing the essence of love and connection. The fluid lines and balanced composition reflect the artist's mastery of form and movement. This sculpture serves as a poignant reminder of the enduring power of love.",
  },
  {
    id: 19,
    img: "https://i.etsystatic.com/16185665/r/il/ab076e/3166876833/il_fullxfull.3166876833_n42v.jpg",
    category: "Sculptures",
    price: 66,
    name: "The Enigmatic Encounter",
    createrName: "Barbara Hepworth",
    description:
      "The Enigmatic Encounter is a thought-provoking sculpture created by Barbara Hepworth. Its abstract and organic forms evoke a sense of mystery and intrigue. The interplay of negative space and solid elements adds depth and complexity to the artwork. It invites viewers to explore their own interpretations and discover the secrets within.",
  },
  {
    id: 20,
    img: "https://i.pinimg.com/originals/3f/9a/83/3f9a834a1e32b99e4f83f09359481fcb.jpg",
    category: "Sculptures",
    price: 67,
    name: "Harmony in Motion",
    createrName: "Alberto Giacometti",
    description:
      "Harmony in Motion is an intriguing sculpture created by Alberto Giacometti. The artwork captures the essence of movement and balance. The elongated and slender figures evoke a sense of fluidity and grace. This sculpture invites viewers to contemplate the delicate interplay between stillness and motion.",
  },
  {
    id: 21,
    img: "https://i.pinimg.com/736x/de/cb/30/decb304d59a41a02420750474deae7e8--wall-sculptures-green-leaves.jpg",
    category: "Sculptures",
    price: 95,
    name: "Sculptural Melodies",
    createrName: "Louise Bourgeois",
    description:
      "Sculptural Melodies is a captivating sculpture created by Louise Bourgeois. The artwork features intricate forms resembling green leaves that evoke a sense of nature and harmony. The artist's attention to detail and craftsmanship brings a sense of rhythm and melody to this sculpture. It invites viewers to immerse themselves in the graceful beauty of nature and its harmonious melodies.",
  },
  {
    id: 22,
    img: "https://th.bing.com/th/id/OIP.duqyqrcxxkFS_cG9aPDQQgHaHa?pid=ImgDet&rs=1",
    category: "Sculptures",
    price: 46,
    name: "Boundless Beauty",
    createrName: "Auguste Rodin",
    description:
      "Boundless Beauty is an exquisite sculpture created by Auguste Rodin. The artwork captures the essence of beauty in its purest form. The flowing curves and sensual lines of the sculpture celebrate the boundless nature of true beauty. It serves as a testament to Rodin's mastery in capturing the human form and the inherent grace it possesses.",
  },
  {
    id: 23,
    img: "https://th.bing.com/th/id/OIP.ZMn8zPBXzkHRv6z7suyuZQHaJP?pid=ImgDet&rs=1",
    category: "Sculptures",
    price: 38,
    name: "The Dance of Life",
    createrName: "Jeff Koons",
    description:
      "The Dance of Life is a vibrant and energetic sculpture created by Jeff Koons. The artwork captures the joy and dynamism of movement. The figures in the sculpture appear to be engaged in a lively dance, symbolizing the celebration of life and its inherent rhythm. This sculpture invites viewers to embrace the spirit of vitality and exuberance.",
  },
  {
    id: 24,
    img: "https://th.bing.com/th/id/OIP.eQaOjT8Qt-yq_TOVxnj-EwHaFj?pid=ImgDet&rs=1",
    category: "Sculptures",
    price: 72,
    name: "Rebirth in Stone",
    createrName: "Michelangelo",
    description:
      "Rebirth in Stone is a masterpiece sculpture created by Michelangelo. The artwork showcases the artist's extraordinary skill in sculpting stone. The intricate details and lifelike representation convey a sense of awe and admiration for the human form. This sculpture serves as a testament to Michelangelo's genius and his ability to breathe life into cold, hard stone.",
  },
  {
    id: 25,
    img: "https://i.etsystatic.com/9486182/r/il/c64123/1490374630/il_fullxfull.1490374630_qqu7.jpg",
    category: "Sculptures",
    price: 57,
    name: "Sculptural Solitude",
    createrName: "Claes Oldenburg",
    description:
      "Sculptural Solitude is a thought-provoking sculpture created by Claes Oldenburg. The artwork represents a solitary figure, isolated from its surroundings. The oversized and exaggerated form emphasizes the feeling of solitude and introspection. This sculpture invites viewers to contemplate the complexities of solitude and the human experience.",
  },
];
module.exports = data;
