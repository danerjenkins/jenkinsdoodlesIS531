export type PuppyStatus = "Available" | "Reserved" | "Sold";

export interface Puppy {
  id: string;
  name: string;
  nickname?: string;
  gender: "Male" | "Female";
  status: PuppyStatus;
  mainImage: string;
  gallery: { src: string; alt: string }[];
  description: string;
}

export interface ParentDog {
  id: string;
  name: string;
  role: "Mom" | "Dad";
  mainImage: string;
  gallery: { src: string; alt: string }[];
  description: string;
  dnaSummary: string;
}

/* ---------------------------------------------
   9 PUPPIES — FILL IN S3 LINKS AS YOU UPLOAD
---------------------------------------------- */

export const puppies: Puppy[] = [
  /* -------------------- GIRLS -------------------- */

  {
    id: "mint",
    name: "Mint",
    nickname: "Gordita",
    gender: "Female",
    status: "Available",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/mint/IMG_3865.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/mint/IMG_3865.jpg", alt: "Mint 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/mint/IMG_3866.jpg", alt: "Mint 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/mint/IMG_3870.jpg", alt: "Mint 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/mint/IMG_3874.jpg", alt: "Mint 4" },
    ],
    description:
      "Mint (Gordita) - Girl: This curious girl loves to try new things and picks up on everything fast, making her a quick and eager learner. When she’s not exploring or snacking, she’s happiest curled up in your arms, showering you with kisses and cuddles.",
  },

  {
    id: "yellow",
    name: "Yellow",
    nickname: "Fluttershy",
    gender: "Female",
    status: "Available",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/yellow/IMG_3879.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/yellow/IMG_3882.jpg", alt: "Yellow 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/yellow/IMG_3883.jpg", alt: "Yellow 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/yellow/IMG_3890.jpg", alt: "Yellow 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/yellow/IMG_3895.jpg", alt: "Yellow 4" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/yellow/IMG_3901.jpg", alt: "Yellow 5" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/yellow/IMG_3902.jpg", alt: "Yellow 6" },
    ],
    description:
      "Yellow (Fluttershy) - Girl: This sweet girl can be a little shy at first, but once she feels safe, her lively, playful personality comes bursting through. Give her a bit of time to warm up and she’ll reward you with goofy energy and joyful zoomies.",
  },

  {
    id: "white",
    name: "White",
    nickname: "Goldilocks",
    gender: "Female",
    status: "Available",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/white/IMG_3910.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/white/IMG_3911.jpg", alt: "White 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/white/IMG_3917.jpg", alt: "White 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/white/IMG_3923.jpg", alt: "White 3" },
    ],
    description:
      "White (Goldilocks) - Girl: This calm little girl is a total snuggler who loves to cuddle up and dog-pile with her siblings, soaking in all the warmth and closeness. She may be laid-back, but when the mood strikes, she’ll happily jump into play before settling right back in for more cuddles.",
  },

  {
    id: "purple",
    name: "Purple",
    nickname: "Violet",
    gender: "Female",
    status: "Sold",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/purple/IMG_3954.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/purple/IMG_3958.jpg", alt: "Purple 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/purple/IMG_3964.jpg", alt: "Purple 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/purple/IMG_3969.jpg", alt: "Purple 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/purple/IMG_3976.jpg", alt: "Purple 4" },
    ],
    description:
      "Purple (Violet) - Girl: This mellow, curly-haired girl tends to hang back at first, taking everything in at her own pace—but once she feels comfortable, her sweet, playful side comes shining through. She’s a calm little companion who blooms beautifully with a bit of patience and love.",
  },

  {
    id: "red",
    name: "Red",
    nickname: "Georgina",
    gender: "Female",
    status: "Available",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/red/IMG_3848.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/red/IMG_3853.jpg", alt: "Red 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/red/IMG_3855.jpg", alt: "Red 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/red/IMG_3856.jpg", alt: "Red 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/red/IMG_3862.jpg", alt: "Red 4" },
    ],
    description:
      "Red (Georgina) - Girl: This curious little girl always wants to see what you’re up to, watching intently before bouncing into play or wandering off to explore. Whether she’s adventuring or snuggled up in your arms, she loves being right by your side.",
  },

  /* -------------------- BOYS -------------------- */

  {
    id: "blue",
    name: "Blue",
    nickname: "Cosmo",
    gender: "Male",
    status: "Sold",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/blue/IMG_4022.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/blue/IMG_4025.jpg", alt: "Blue 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/blue/IMG_4028.jpg", alt: "Blue 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/blue/IMG_4034.jpg", alt: "Blue 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/blue/IMG_4049.jpg", alt: "Blue 4" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/blue/IMG_4055.jpg", alt: "Blue 5" },
    ],
    description:
      "Blue (Cosmo) - Boy: This curly-coated boy is a bit more reserved and quiet, taking his time to observe the world around him—but don’t be fooled, he’ll happily jump into play when the mood strikes.",
  },

  {
    id: "black",
    name: "Black",
    nickname: "Moony",
    gender: "Male",
    status: "Sold",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/black/IMG_4060.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/black/IMG_4062.jpg", alt: "Black 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/black/IMG_4068.jpg", alt: "Black 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/black/IMG_4069.jpg", alt: "Black 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/black/IMG_4071.jpg", alt: "Black 4" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/black/IMG_4083.jpg", alt: "Black 5" },
    ],
    description:
      "Black (Moony) - Boy: This cuddly boy loves nothing more than being held and snoozing in your arms, but don’t let her sleepy streak fool you. Once he’s up, his playful side comes right out. He’s the perfect mix of cozy companion and cheerful playmate.",
  },

  {
    id: "brown",
    name: "Brown",
    nickname: "Moose",
    gender: "Male",
    status: "Sold",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/brown/IMG_3979.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/brown/IMG_3981.jpg", alt: "Brown 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/brown/IMG_3985.jpg", alt: "Brown 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/brown/IMG_3988.jpg", alt: "Brown 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/brown/IMG_3991.jpg", alt: "Brown 4" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/brown/IMG_4001.jpg", alt: "Brown 5" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/brown/IMG_4007.jpg", alt: "Brown 6" },
    ],
    description:
      "Brown (Moose) - Boy: This fun-loving boy has a wild, goofy streak and is always the first to initiate playtime. Give him a good belly scratch and he’ll melt right into you, then pop back up ready for more adventure.",
  },

  {
    id: "green",
    name: "Green",
    nickname: "Fred",
    gender: "Male",
    status: "Available",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/green/IMG_3929.jpg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/green/IMG_3932.jpg", alt: "Green 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/green/IMG_3935.jpg", alt: "Green 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/green/IMG_3946.jpg", alt: "Green 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/puppies/green/IMG_3948.jpg", alt: "Green 4" },
    ],
    description:
      "Green (Fred) - Boy: This playful little boy loves to romp around but also takes time to sit back and observe the world from his favorite cozy spot. And when he’s ready to unwind, nothing makes him happier than being scooped up and held close.",
  },
];

/* ---------------------------------------------
   PARENTS — SYL & SKY
---------------------------------------------- */

export const parents: ParentDog[] = [
  {
    id: "syl",
    name: "Syl",
    role: "Mom",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/main.jpeg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/1.jpeg", alt: "Syl 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/2.jpeg", alt: "Syl 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/3.jpeg", alt: "Syl 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/4.jpg", alt: "Syl 4" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/5.jpg", alt: "Syl 5" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/6.jpg", alt: "Syl 6" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/7.jpg", alt: "Syl 7" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/syl/8.jpg", alt: "Syl 8" },

    ],
    description:
      "*Description coming soon!*",
    dnaSummary: "42.6% Poodle(Small), 25.6% Poodle (Standard), 31.8% Golden Retriever",
  },
  {
    id: "sky",
    name: "Sky",
    role: "Dad",
    mainImage: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/main.jpeg",
    gallery: [
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/1.jpeg", alt: "Sky 1" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/2.jpeg", alt: "Sky 2" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/3.heic", alt: "Sky 3" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/4.heic", alt: "Sky 4" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/5.heic", alt: "Sky 5" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/6.heic", alt: "Sky 6" },
      { src: "https://jenkinsdoodlesimgs.s3.us-east-2.amazonaws.com/parents/sky/7.heic", alt: "Sky 7" },

    ],
    description:
      "*Description coming soon!*",
    dnaSummary: "66% Poodle (Standard, 22.7% Poodle (Small), 13.3% Labrador Retriever",
  },
];
