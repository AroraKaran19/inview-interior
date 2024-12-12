export class ItemCategory {
  tag: string;
  image: string;
  redirect: string;
  description: string;
  list_images: string[];
  showDetails?: boolean;
  Details?: boolean;
  shareCopy?: boolean;
  constructor(tag: string, image: string, redirect: string, description: string, list_images: string[], showDetails?: boolean, Details?: boolean, shareCopy?: boolean) {
    this.tag = tag;
    this.image = image;
    this.redirect = redirect;
    this.description = description;
    this.list_images = list_images;
    this.showDetails = (showDetails) ? showDetails : false;
    this.Details = (Details) ? Details : false;
    this.shareCopy = (shareCopy) ? shareCopy : false;
  }
}

export const categoryData = [
  {
    tag: "Bedroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bedroom",
    description: "A cozy and comfortable space designed for rest and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Kitchen",
    image: "/category/category2.jpg",
    redirect: "/categories/kitchen",
    description: "A functional and stylish kitchen for cooking and dining.",
    list_images: ["/category/category2.jpg", "/category/category2.jpg", "/category/category2.jpg"],
  },
  {
    tag: "Living Room",
    image: "/category/category3.jpg",
    redirect: "/categories/living-room",
    description: "A spacious area for entertaining guests and spending time with family.",
    list_images: ["/category/category3.jpg", "/category/category3.jpg", "/category/category3.jpg"],
  },
  {
    tag: "Bathroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bathroom",
    description: "A serene and private area for personal hygiene and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Drawing Room",
    image: "/category/category4.jpg",
    redirect: "/categories/drawing-room",
    description: "An elegant space for formal gatherings and creative activities.",
    list_images: ["/category/category4.jpg", "/category/category4.jpg", "/category/category4.jpg"],
  },
  {
    tag: "Kitchen",
    image: "/category/category2.jpg",
    redirect: "/categories/kitchen",
    description: "A functional and stylish kitchen for cooking and dining.",
    list_images: ["/category/category2.jpg", "/category/category2.jpg", "/category/category2.jpg"],
  },
  {
    tag: "Bedroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bedroom",
    description: "A cozy and comfortable space designed for rest and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Bathroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bathroom",
    description: "A serene and private area for personal hygiene and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Living Room",
    image: "/category/category3.jpg",
    redirect: "/categories/living-room",
    description: "A spacious area for entertaining guests and spending time with family.",
    list_images: ["/category/category3.jpg", "/category/category3.jpg", "/category/category3.jpg"],
  },
  {
    tag: "Bedroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bedroom",
    description: "A cozy and comfortable space designed for rest and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Drawing Room",
    image: "/category/category4.jpg",
    redirect: "/categories/drawing-room",
    description: "An elegant space for formal gatherings and creative activities.",
    list_images: ["/category/category4.jpg", "/category/category4.jpg", "/category/category4.jpg"],
  },
  {
    tag: "Kitchen",
    image: "/category/category2.jpg",
    redirect: "/categories/kitchen",
    description: "A functional and stylish kitchen for cooking and dining.",
    list_images: ["/category/category2.jpg", "/category/category2.jpg", "/category/category2.jpg"],
  },
  {
    tag: "Bathroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bathroom",
    description: "A serene and private area for personal hygiene and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Living Room",
    image: "/category/category3.jpg",
    redirect: "/categories/living-room",
    description: "A spacious area for entertaining guests and spending time with family.",
    list_images: ["/category/category3.jpg", "/category/category3.jpg", "/category/category3.jpg"],
  },
  {
    tag: "Bedroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bedroom",
    description: "A cozy and comfortable space designed for rest and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Kitchen",
    image: "/category/category2.jpg",
    redirect: "/categories/kitchen",
    description: "A functional and stylish kitchen for cooking and dining.",
    list_images: ["/category/category2.jpg", "/category/category2.jpg", "/category/category2.jpg"],
  },
  {
    tag: "Bathroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bathroom",
    description: "A serene and private area for personal hygiene and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Living Room",
    image: "/category/category3.jpg",
    redirect: "/categories/living-room",
    description: "A spacious area for entertaining guests and spending time with family.",
    list_images: ["/category/category3.jpg", "/category/category3.jpg", "/category/category3.jpg"],
  },
  {
    tag: "Bedroom",
    image: "/category/category1.jpg",
    redirect: "/categories/bedroom",
    description: "A cozy and comfortable space designed for rest and relaxation.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "/category/category1.jpg"],
  },
  {
    tag: "Drawing Room",
    image: "/category/category4.jpg",
    redirect: "/categories/drawing-room",
    description: "An elegant space for formal gatherings and creative activities.",
    list_images: ["/category/category4.jpg", "/category/category4.jpg", "/category/category4.jpg"],
  },
  {
    tag: "Office",
    image: "/category/category4.jpg",
    redirect: "/categories/office",
    description: "A productive workspace equipped with essential office tools.",
    list_images: ["/category/category4.jpg", "/category/category4.jpg", "/category/category4.jpg"],
  },
  {
    tag: "Library",
    image: "/category/category2.jpg",
    redirect: "/categories/library",
    description: "A quiet place filled with books for reading and research.",
    list_images: ["/category/category2.jpg", "/category/category2.jpg", "/category/category2.jpg"],
  },
  {
    tag: "Garden",
    image: "/category/category4.jpg",
    redirect: "/categories/garden",
    description: "A beautiful outdoor space for relaxation and nature enjoyment.",
    list_images: ["/category/category4.jpg", "/category/category4.jpg", "/category/category4.jpg"],
  },
  {
    tag: "Guest Room",
    image: "/category/category1.jpg",
    redirect: "/categories/guest-room",
    description: "A welcoming room for visitors to stay and feel comfortable.",
    list_images: ["/category/category1.jpg", "/category/category1.jpg", "//category/category1.jpg"],
  },
  {
    tag: "Study",
    image: "/category/category3.jpg",
    redirect: "/categories/study",
    description: "A focused area for learning, working, and studying.",
    list_images: ["/category/category3.jpg", "/category/category3.jpg", "/category/category3.jpg"],
  }
];
