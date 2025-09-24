import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type Service = {
  id: string;
  category: 'Face' | 'Body' | 'Wellness' | 'Aesthetics';
  title: string;
  description: string;
  detailedDescription: string[];
  price: string;
  imageId: string;
  isMobile?: boolean;
};

export type ServiceOverview = {
  id: string;
  imageId: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  detailedDescription: ({ idx: number; description: string })[];
};

export const services: Service[] = [
  { 
    id: 's1', 
    category: 'Face', 
    title: 'HydraFacial Glow', 
    description: 'Deep cleansing, exfoliation, and hydration for an instant glow. Perfect for all skin types.', 
    detailedDescription: [
      "The HydraFacial is an invigorating treatment that can be given in as little as 30 minutes. It delivers long-term skin health and can be tailored to meet the specific needs of all skin types.",
      "It offers instant, noticeable results with no downtime or irritation. The HydraFacial treatment removes dead skin cells and extracts impurities while simultaneously bathing the new skin with cleansing, hydrating and moisturizing serums."
    ],
    price: '$150', 
    imageId: 'service-face-1' 
  },
  { 
    id: 's2', 
    category: 'Face', 
    title: 'Microneedling Rejuvenation', 
    description: 'Stimulates collagen production to reduce fine lines, wrinkles, and acne scars.', 
    detailedDescription: [
      "Microneedling is a minimally invasive procedure that uses fine needles to create tiny punctures in the top layer of the skin. This process works to rejuvenate your skin by boosting collagen production, which in turn reduces the appearance of wrinkles and fine lines and elevates the overall texture of your skin.",
      "This treatment is highly effective for treating acne scars, surgical scars, enlarged pores, and hyperpigmentation."
    ],
    price: '$250', 
    imageId: 'service-face-2' 
  },
  { 
    id: 's3', 
    category: 'Face', 
    title: 'Chemical Peel Clarity', 
    description: 'A custom peel to improve skin texture, tone, and reduce imperfections.', 
    detailedDescription: [
      "Our chemical peels are tailored to your specific skin concerns. By applying a chemical solution to the skin, we can cause it to exfoliate and eventually peel off, revealing new, smoother, and more refined skin underneath.",
      "This is an ideal treatment for those looking to improve the appearance of mild scarring, fine lines, sun damage, and certain types of acne."
    ],
    price: '$180', 
    imageId: 'service-face-3', 
    isMobile: true 
  },
  { 
    id: 's4', 
    category: 'Body', 
    title: 'Velvet Skin Body Polish', 
    description: 'An exfoliating and moisturizing treatment for silky-smooth skin from head to toe.', 
    detailedDescription: [
      "Reveal your softest skin with our Velvet Skin Body Polish. This luxurious treatment involves a gentle exfoliation to buff away dead skin cells, followed by the application of a rich, hydrating moisturizer.",
      "Your skin will feel incredibly smooth, supple, and look radiant."
    ],
    price: '$120', 
    imageId: 'service-body-1', 
    isMobile: true 
  },
  { 
    id: 's5', 
    category: 'Body', 
    title: 'Contouring Body Wrap', 
    description: 'A detoxifying wrap that helps to tone and firm the body, reducing the appearance of cellulite.', 
    detailedDescription: [
      "Our Contouring Body Wrap is a treatment designed to detoxify and tone the body. A mineral-rich formula is applied to the skin, and you are then wrapped in warm towels to promote detoxification and skin tightening.",
      "This treatment can help reduce the appearance of cellulite and leave your skin feeling firmer and more toned."
    ],
    price: '$200', 
    imageId: 'service-body-2' 
  },
  { 
    id: 's6', 
    category: 'Wellness', 
    title: 'Aromatherapy Escape', 
    description: 'A relaxing massage using essential oils to soothe the mind and body.', 
    detailedDescription: [
      "Embark on a sensory journey with our Aromatherapy Escape. This massage uses a custom blend of essential oils to address your specific needs, whether it's to relax, energize, or rebalance.",
      "The combination of gentle massage and aromatic oils will leave you feeling deeply relaxed and rejuvenated."
    ],
    price: '$110', 
    imageId: 'service-wellness-1', 
    isMobile: true 
  },
  { 
    id: 's7', 
    category: 'Wellness', 
    title: 'Hot Stone Harmony', 
    description: 'Melt away tension with a therapeutic hot stone massage that promotes deep relaxation.', 
    detailedDescription: [
      "The Hot Stone Harmony massage uses smooth, heated stones, placed on key points of the body, to warm and relax muscles, allowing the therapist to work on deeper muscle layers.",
      "This deeply relaxing treatment helps to release tension, ease muscle stiffness, and increase circulation, promoting a sense of well-being."
    ],
    price: '$140', 
    imageId: 'service-wellness-2' 
  },
  {
    id: 's8',
    category: 'Aesthetics',
    title: 'Botox',
    description: 'Reduce the appearance of facial wrinkles with this popular injectable treatment.',
    detailedDescription: [
      'Botox is a neurotoxin that temporarily paralyzes muscles, which can reduce the appearance of facial wrinkles.',
      'It is a quick, minimally invasive procedure with no downtime.',
    ],
    price: 'From $300',
    imageId: 'service-aesthetics-1'
  },
  {
    id: 's9',
    category: 'Aesthetics',
    title: 'Dermal Fillers',
    description: 'Restore volume and fullness to the face, creating a more youthful appearance.',
    detailedDescription: [
      'Dermal fillers are gel-like substances that are injected beneath the skin to restore lost volume, smooth lines and soften creases, or enhance facial contours.',
      'Common areas for treatment include cheeks, lips, and nasolabial folds.'
    ],
    price: 'From $500',
    imageId: 'service-aesthetics-2'
  }
];

export const serviceCategories = ['Face', 'Body', 'Wellness', 'Aesthetics', 'Mobile'];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageId: string;
  bio: string[];
  qualifications: string[];
  treatments: string[];
};

export const teamMembers: TeamMember[] = [
  { 
    id: 't1', 
    name: 'Eleonora Vance', 
    role: 'Lead Esthetician', 
    imageId: 'team-member-1',
    bio: [
      "With over a decade of experience in the beauty industry, Eleonora is a master of skincare and aesthetics. Her passion lies in creating personalized treatment plans that deliver visible, lasting results.",
      "She believes in a holistic approach, combining advanced techniques with a deep understanding of skin health to help clients achieve their goals."
    ],
    qualifications: ["Licensed Master Esthetician", "Certified in Advanced Chemical Peels", "HydraFacial Master Certified"],
    treatments: ["s1", "s2", "s3", "s9"]
  },
  { 
    id: 't2', 
    name: 'Julien Beaumont', 
    role: 'Massage Therapist', 
    imageId: 'team-member-2',
    bio: [
      "Julien is a certified massage therapist with a gift for healing touch. He specializes in therapeutic and relaxation massage, drawing from a variety of modalities to best suit his clients' needs.",
      "His intuitive approach helps to release tension, alleviate pain, and promote a profound sense of well-being."
    ],
    qualifications: ["Licensed Massage Therapist", "Certified in Hot Stone Therapy", "Aromatherapy Specialist"],
    treatments: ["s4", "s5", "s6", "s7"]
  },
  { 
    id: 't3', 
    name: 'Sofia Rossi', 
    role: 'Skincare Specialist', 
    imageId: 'team-member-3',
    bio: [
      "Sofia is a dedicated skincare specialist with a passion for helping clients achieve healthy, radiant skin. She is an expert in analyzing skin conditions and recommending effective treatment and home-care regimens.",
      "Her gentle touch and extensive knowledge make every facial a relaxing and educational experience."
    ],
    qualifications: ["Licensed Esthetician", "Certified in Microneedling", "Expert in Cosmetic Ingredient Knowledge"],
    treatments: ["s1", "s2", "s3", "s8"]
  },
];

export function getImageById(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find((img) => img.id === id);
}

export function getServiceById(id: string): Service | undefined {
    return services.find((s) => s.id === id);
}

export type FeaturedCategory = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  detailedDescription?: string[];
  imageId: string;
  link: string;
};

export const featuredCategories: FeaturedCategory[] = [
  {
    id: 'fc1',
    title: 'Modern Aesthetics, Where Beauty Blooms',
    shortTitle: 'Modern Aesthetics',
    description: 'From rejuvenating Botox treatments to the subtle perfection of fillers, our services are designed to enhance your natural beauty and restore a youthful radiance.',
    detailedDescription: [
        'We believe in the transformative power of aesthetics, bringing together science and artistry to redefine and celebrate your individual allure. Join us on this journey to discover the beauty that goes beyond skin deep, an experience crafted with precision, care, and a touch of aesthetic magic.',
        'From rejuvenating Botox treatments to the subtle perfection of fillers, our services are designed to enhance your natural beauty and restore a youthful radiance. Dive into the world of micro-needling, injections, and nourishing vitamins that harmonize to unveil a canvas of timeless elegance.'
    ],
    imageId: 'modern-aesthetics',
    link: '/services?category=Aesthetics'
  },
  {
    id: 'fc2',
    title: 'Pandora Star Light Therapy, A Journey Beyond Relaxation',
    shortTitle: 'Pandora Star Light Therapy',
    description: 'Step into a world beyond ordinary relaxation with Pandora Star Light Therapy — an advanced light meditation experience that uses flickering white light to guide your brain into deeply restorative states.',
    detailedDescription: [
        'Step into a world beyond ordinary relaxation with Pandora Star Light Therapy — an advanced light meditation experience that uses flickering white light to guide your brain into deeply restorative states. Whether you’re seeking clarity, relaxation, emotional release, or a shift in consciousness, this 30-minute journey invites you to reconnect with your true self.',
        'Lay back under the soft, flickering light with eyes gently closed. Each session is personalised to your needs — whether you’re seeking calm, energy reset, or emotional release. Most clients leave feeling peaceful, recharged, and often deeply moved.',
        'Ideal for those feeling overwhelmed, anxious, creatively blocked, or seeking a deep inner reset.'
    ],
    imageId: 'pandora-light-therapy',
    link: '/services?category=Wellness'
  },
  {
    id: 'fc3',
    title: 'Earwax Liberation, Hear the World Anew',
    shortTitle: 'Earwax Liberation',
    description: 'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision.',
    detailedDescription: [
        'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision. Our gentle earwax removal service is designed to provide relief from discomfort and enhance your hearing clarity.',
        'Using safe and effective techniques, we carefully remove excess earwax buildup, promoting better ear health and preventing potential complications. Whether you\'re experiencing muffled hearing, tinitus or discomfort, our professional care will leave your ears feeling refreshed and revitalized.',
        'Ideal for those experiencing tinitus or other hearing difficulties, discomfort, or seeking routine ear care.'
    ],
    imageId: 'earwax-removal',
    link: '/services?category=Mobile'
  },
  {
    id: 'fc4',
    title: 'Oberon Biofeedback Therapy, Harmonize Your Energy',
    shortTitle: 'Oberon Biofeedback Therapy',
    description: 'Oberon Biofeedback system is a non-invasive wellness tool that uses quantum frequency scanning to detect imbalances in the body.',
    detailedDescription: [
        'Our Oberon Biofeedback system is a non-invasive wellness tool that uses quantum frequency scanning to detect imbalances in the body — physically, emotionally, and energetically.',
        'This advanced technology gently scans the body’s internal systems (organs, meridians, microbiome, chakras, and more) using headphones that transmit specific frequencies. It then compares your body’s responses to healthy reference data to highlight any areas of stress, deficiency, or disharmony.',
        'Following the scan, targeted meta-therapy can be applied to help support energetic balance and stimulate the body’s natural self-healing processes.'
    ],
    imageId: 'oberon-biofeedback',
    link: '/services?category=Wellness'
  }
];