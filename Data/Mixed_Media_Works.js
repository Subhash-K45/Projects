const data = [
    {
      id: 1,
      img: 'https://www.artfulflight.com/wp-content/gallery/mixed-media-paintings/IMG_2961.jpg',
      category: 'Mixed Media Works',
      price: 19,
      name: 'Collage Art',
      artist: 'Emily',
      description: 'A vibrant collage art piece that combines various materials such as paper, magazine cutouts, and acrylic paint. This artwork showcases a playful composition and a rich color palette.'
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/originals/90/52/5e/90525ec4896b141d835ca30652e07464.jpg',
      category: 'Mixed Media Works',
      price: 25,
      name: 'Mixed Up Painting',
      artist: 'Robert',
      description: 'A captivating mixed media painting that incorporates elements of abstraction and realism. This artwork features a harmonious blend of acrylic paint, ink, and textured materials.'
    },
    {
      id: 3,
      img: 'https://image.invaluable.com/housePhotos/ashcroftandmoore/82/692182/H20734-L238796821.jpg',
      category: 'Mixed Media Works',
      price: 62,
      name: 'Modern Abstract Painting',
      artist: 'Alex',
      description: 'A contemporary mixed media painting characterized by bold brushstrokes, geometric shapes, and a fusion of acrylic paint and collage elements. This artwork evokes a sense of energy and movement.'
    },
    {
      id: 4,
      img: 'https://i.pinimg.com/originals/ae/f3/b7/aef3b7d90a73cb6a046f993720e4e465.jpg',
      category: 'Mixed Media Works',
      price: 26,
      name: 'Kitty',
      artist: 'Olivia',
      description: 'A charming mixed media artwork depicting a playful kitten using a combination of watercolor, colored pencils, and collage techniques. This piece captures the innocence and curiosity of feline companions.'
    },
    {
      id: 5,
      amg: 'https://jennysserendipity.files.wordpress.com/2015/08/filipino-artist-jonathan-benitez-mixed-media-collage-art-and-environmental-art-11.jpg',
      category: 'Mixed Media Works',
      price: 57,
      name: 'Collage Environmental Art',
      artist: 'Robert',
      description: 'An impactful mixed media collage artwork that explores environmental themes. This piece incorporates recycled materials, newspaper clippings, and paint to convey a message of sustainability.'
    },
    {
      id: 6,
      amg: 'https://www.artisticmoods.com/wp-content/uploads/1.chrzest%C2%B415.jpg',
      category: 'Mixed Media Works',
      price: 19,
      name: 'Wall Paintings',
      artist: 'Alex',
      description: 'A series of mixed media wall paintings that combine elements of graffiti, stenciling, and acrylic paint. These artworks add a dynamic and urban touch to any space.'
    },{
        id: 7,
        img: 'https://i.pinimg.com/originals/84/08/ae/8408ae197775207190640befffa483a7.jpg',
        category: 'Mixed Media Works',
        price: 34,
        name: 'Collage Art',
        artist: 'Jessica',
        description: 'A visually captivating collage art piece that combines various materials such as vintage photographs, fabric, and found objects. This artwork tells a unique narrative through its layered composition.'
      },
      {
        id: 8,
        img: 'https://i.pinimg.com/originals/db/4f/bd/db4fbd4e9b441f03fc7b1fc58de40eea.jpg',
        category: 'Mixed Media Works',
        price: 42,
        name: 'Media Work on Destructive Material',
        artist: 'Daniel',
        description: 'An intriguing mixed media artwork created on unconventional and destructive materials. This piece challenges traditional art forms and invites viewers to question societal norms.'
      },
      {
        id: 9,
        img: 'https://www.svenpfrommer.com/wp-content/uploads/2012/07/NY_color32.jpg',
        category: 'Mixed Media Works',
        price: 44,
        name: 'Visual Art',
        artist: 'Megan',
        description: 'A visually striking mixed media artwork that combines elements of photography, digital manipulation, and hand-painted details. This piece explores the intersection of technology and art.'
      },
      {
        id: 10,
        img: 'https://th.bing.com/th/id/R.303b10bd4b70c3e50801770d2642df92?rik=41s%2b0V5MG87oLQ&riu=http%3a%2f%2fkeaganomaraart.weebly.com%2fuploads%2f2%2f1%2f8%2f8%2f21880486%2fs318181219657908141_p5_i3_w1920.jpeg&ehk=oLO%2bbrwTkzI0q0RkL6hsBC0jVVY1Lxkh6ty863lAPkU%3d&risl=&pid=ImgRaw&r=0',
        category: 'Mixed Media Works',
        price: 63,
        name: 'Paper Art',
        artist: 'Sarah',
        aescription: 'A delicate and intricate mixed media artwork crafted entirely from meticulously hand-cut paper. This piece showcases the artist\'s attention to detail and mastery of paper manipulation.'
      },
      {
        id: 11,
        img: 'https://a.1stdibscdn.com/archivesE/upload/1121189/f_185499821585836647002/18549982_org.jpg',
        category: 'Mixed Media Works',
        price: 63,
        name: 'Pair Mixed Media Work',
        artist: 'John',
        description: 'A stunning pair of mixed media artworks designed to be displayed together. These pieces complement each other through their contrasting color schemes and complementary themes.'
      }, {
        id: 12,
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1e0f506988753.560287a203e49.jpg',
        category: 'Mixed Media Works',
        price: 79,
        name: 'Abstract Collage',
        artist: 'Sophia',
        description: 'An abstract mixed media collage artwork that explores the interplay of colors, shapes, and textures. This piece invites viewers to interpret and engage with its dynamic composition.'
      },
      {
        id: 13,
        img: 'https://i.pinimg.com/originals/f3/78/56/f37856e5d537c2a14c75cb28528e1d5b.jpg',
        category: 'Mixed Media Works',
        price: 55,
        name: 'Nature-inspired Sculpture',
        artist: 'Elijah',
        description: 'A captivating mixed media sculpture that combines organic elements, such as wood and stones, with man-made materials like metal and resin. This artwork blurs the boundaries between nature and art.'
      },
      {
        id: 14,
        img: 'https://i.pinimg.com/originals/8d/19/cb/8d19cbe7c5373b6477aae8f5e8c18e0b.jpg',
        category: 'Mixed Media Works',
        price: 36,
        name: 'Collage Portrait',
        artist: 'Emma',
        description: 'A unique mixed media portrait created through a combination of painting, collage, and digital techniques. This artwork captures the essence and personality of the subject in an unconventional way.'
      },
      {
        id: 15,
        img: 'https://i.pinimg.com/originals/ff/2e/5d/ff2e5d8b6ef2a1d9ae61ed2f4c6bb46d.jpg',
        category: 'Mixed Media Works',
        price: 43,
        name: 'Textured Abstract Art',
        artist: 'Noah',
        description: 'A captivating mixed media artwork characterized by its textured surfaces and abstract forms. This piece invites viewers to explore its tactile qualities and interpret its visual language.'
      },
      {
        id: 16,
        img: 'https://i.pinimg.com/originals/a5/59/2a/a5592a95117c63448e62559f8f2c5a1b.jpg',
        category: 'Mixed Media Works',
        price: 28,
        name: 'Vintage Collage',
        artist: 'Ava',
        description: 'A nostalgic mixed media collage artwork that incorporates vintage photographs, ephemera, and handwritten elements. This piece evokes a sense of time and nostalgia.'
      },
      {
        id: 17,
        img: 'https://i.pinimg.com/originals/c1/f9/9f/c1f99f37f8623c2eab2c4cde7580573e.jpg',
        category: 'Mixed Media Works',
        price: 61,
        name: 'Urban Landscape Painting',
        artist: 'Liam',
        description: 'A dynamic mixed media painting that captures the energy and vibrancy of an urban landscape. This artwork combines acrylic paint, ink, and graffiti-inspired elements.'
      },
      {
        id: 18,
        img: 'https://i.pinimg.com/originals/66/8d/61/668d619f3ff8e523dc1ae269246d7314.jpg',
        category: 'Mixed Media Works',
        price: 37,
        name: 'Assemblage Art',
        artist: 'Charlotte',
        description: 'A thought-provoking mixed media assemblage artwork created by combining found objects, discarded materials, and personal artifacts. This piece challenges conventional notions of art and beauty.'
      },
      {
        id: 19,
        img: 'https://i.pinimg.com/originals/60/3f/59/603f594c494b4bfe943cdce6b7a38d0a.jpg',
        category: 'Mixed Media Works',
        price: 48,
        name: 'Abstract Sculpture',
        artist: 'Henry',
        description: 'An abstract mixed media sculpture that explores the interplay of shapes, textures, and materials. This artwork invites viewers to experience its three-dimensional form from various angles.'
      },
      {
        id: 20,
        img: 'https://i.pinimg.com/originals/40/1d/52/401d527d8a8df909de3fd6a3318a51ff.jpg',
        category: 'Mixed Media Works',
        price: 31,
        name: 'Experimental Art',
        artist: 'Sophie',
        description: 'An experimental mixed media artwork that pushes the boundaries of traditional art forms. This piece combines unconventional materials and techniques to create a visually intriguing composition.'
      },
      {
        id: 21,
        img: 'https://i.pinimg.com/originals/6f/42/76/6f4276f50e75d37c43c10797cbfaa5f1.jpg',
        category: 'Mixed Media Works',
        price: 53,
        name: 'Abstract Expressionism',
        artist: 'Benjamin',
        description: 'A powerful mixed media artwork inspired by the abstract expressionism movement. This piece uses bold brushstrokes, vibrant colors, and a variety of materials to convey emotions and energy.'
      },
      {
        id: 22,
        img: 'https://i.pinimg.com/originals/9d/22/5e/9d225e0fe0c76dd0633eefaa558d93d9.jpg',
        category: 'Mixed Media Works',
        price: 39,
        name: 'Surreal Collage',
        artist: 'Olivia',
        description: 'A surreal mixed media collage artwork that combines unexpected elements and juxtapositions to create a dreamlike and thought-provoking composition. This piece challenges the viewer\'s perception and invites interpretation.'
      },
      {
        id: 23,
        img: 'https://i.pinimg.com/originals/40/46/f5/4046f5b3fe5b6727c6c9b13667b6f208.jpg',
        category: 'Mixed Media Works',
        price: 49,
        name: 'Abstract Nature',
        artist: 'Ethan',
        description: 'An abstract mixed media artwork inspired by the beauty and complexity of nature. This piece combines organic forms, textures, and vibrant colors to create a visually engaging composition.'
      },
      {
        id: 24,
        img: 'https://i.pinimg.com/originals/c5/8d/89/c58d892999ef8a229e659a7ad5ab3d08.jpg',
        category: 'Mixed Media Works',
        price: 32,
        name: 'Digital Collage',
        artist: 'Isabella',
        description: 'A digital mixed media collage artwork created through a combination of photography, graphic design, and digital manipulation. This piece explores the intersection of traditional and digital art forms.'
      },
      {
        id: 25,
        img: 'https://i.pinimg.com/originals/50/df/9e/50df9e85ea8c9cb2e5d2181b22fe8d1a.jpg',
        category: 'Mixed Media Works',
        price: 56,
        name: 'Abstract Figurative Art',
        artist: 'James',
        description: 'An abstract figurative mixed media artwork that explores the human form through expressive brushwork, textures, and a vibrant color palette. This piece invites viewers to contemplate the complexities of the human experience.'
      }
    ]

module.exports=data