import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type Service = {
  id: string;
  category: 'Face' | 'Body' | 'Wellness' | 'Aesthetics';
  title: string;
  description: string;
  detailedDescription: string[];
  subTreatments: string[];
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
    title: 'Anti-Wrinkle Injections', 
    description: 'Anti-wrinkle injections are a popular cosmetic treatment used to reduce the appearance of wrinkles.', 
    detailedDescription: [
      "Anti-wrinkle injections are a non-surgical cosmetic treatment used to reduce the appearance of facial wrinkles and lines.",
      "Common treatment areas include forehead lines, glabellar lines (frown lines between the eyebrows), crow’s feet around the eyes, bunny lines on the nose, and lines around the mouth.",
      "Results usually begin to appear within a few days, with full effects visible after 10–14 days. The duration of results varies but generally lasts between 3 to 6 months."
    ],
    subTreatments: [],
    price: 'from £130', 
    imageId: 'service-face-1' 
  },
  { 
    id: 's2', 
    category: 'Face', 
    title: 'Dermal Fillers', 
    description: 'Dermal fillers are used to add volume to the skin, fill wrinkles, and enhance facial features for a more youthful appearance.', 
    detailedDescription: [
      "Dermal fillers are injectable substances used to add volume to the skin, fill wrinkles, and enhance facial features for a more youthful appearance.",
      "They are commonly used to address volume loss in the face, which occurs with aging due to decreased collagen and elastin production, leading to sagging skin, sunken cheeks, and hollowed temples.",
      "These non-surgical treatments are typically administered in areas around the eyes, mouth, nose, cheeks, lips, and jawline to smooth lines, plump lips, restore volume, and improve facial symmetry."
    ],
    subTreatments: [],
    price: 'from £150', 
    imageId: 'service-face-2' 
  },
  { 
    id: 's3', 
    category: 'Face', 
    title: 'Skin Boosters & Eye Boosters', 
    description: 'Skin boosters and eye boosters designed to improve skin quality, hydration, and texture.', 
    detailedDescription: [
      "Skin boosters and eye boosters are injectable treatments designed to improve skin quality, hydration, and texture, particularly in the delicate under-eye area, offering a non-surgical alternative to dermal fillers for addressing concerns like fine lines, dark circles, and dullness.",
      "These treatments work by delivering hyaluronic acid, polynucleotides, amino acids, and other active ingredients beneath the skin's surface to stimulate collagen and elastin production, enhance firmness, and provide deep, long-lasting hydration without significant volume addition."
    ],
    subTreatments: [],
    price: 'from £70', 
    imageId: 'service-face-3', 
  },
  { 
    id: 's4', 
    category: 'Body', 
    title: 'Fat Dissolving Injections', 
    description: 'Fat dissolving injections are a minimally invasive cosmetic treatment designed to break down fat cells in specific areas of the body.', 
    detailedDescription: [
      "Fat dissolving injections, also known as lipolytic injections or non-surgical liposuction, are a minimally invasive cosmetic treatment designed to break down fat cells in specific areas of the body.",
      "The treatment works by injecting a naturally occurring compound in the body, that aids in fat absorption directly into targeted fat deposits.",
      "Common treatment areas include the double chin, abdomen, thighs, love handles, underarms, flanks, inner thighs, and buttocks.",
      "The procedure is particularly effective for reducing small, stubborn pockets of fat that do not respond to diet and exercise."
    ],
    subTreatments: [],
    price: 'from £120', 
    imageId: 'service-body-1'
  },
  { 
    id: 's5', 
    category: 'Body', 
    title: 'Vitamin Injections', 
    description: 'Vitamin injections deliver essential nutrients directly into the bloodstream, for fast and efficient absorption.', 
    detailedDescription: [
      "Vitamin injections deliver essential nutrients directly into the bloodstream, bypassing the digestive system for faster and more efficient absorption compared to oral supplements.",
      "Our administered injections include Vitamin B12, which supports red blood cell formation, nerve function, and energy metabolism.",
      "Vitamin C, known for its antioxidant properties that support skin health and immune function, and Vitamin D, which is important for general well-being and may be recommended for those feeling tired or rundown.",
    ],
    subTreatments: [],
    price: 'from £30', 
    imageId: 'service-body-2' 
  },
  { 
    id: 's6', 
    category: 'Wellness', 
    title: 'Facial & Skin Treatments', 
    description: 'Various cosmetic treatments designed to achieve a smooth, radiant, and translucent complexion', 
    detailedDescription: [
      "Experience a range of facial and skin treatments designed to give you a smooth, radiant and translucent complexion.",
      "Our Hydro Facial treatments cleanse, exfoliate, extract impurities and hydrate the skin, offering immediate results.",
      "Our Carbon facial, exfoliates the skin, cleanses pores and stimulates collagen production for improved texture and firmness.",
      "Our chemical facial exfoliates away dead or damaged skin, revealing the fresher, brighter, and more youthful-looking skin beneath."
    ],
    subTreatments: [],
    price: 'from £20', 
    imageId: 'service-wellness-1', 
  },
  { 
    id: 's7', 
    category: 'Wellness', 
    title: 'Massage & Holistic Therapies', 
    description: 'Experience our incredible hot stone massage, or indulgent foot therapy.', 
    detailedDescription: [
      "Our Hot Stone massage helps relive tension and pain, reduces stress and anxiety, promotes sleep and may even boost your immunity. Such an incredibly relaxing experience, you'll always come back for more.",
      "The Foot therapy treatment is an all encompasing indulgence for your feet. They get exfoliated, massaged, moisturised, and more, to leave your feet feeling and looking incredible."
    ],
    subTreatments: [],
    price: 'from £40', 
    imageId: 'service-wellness-2' 
  },
  {
    id: 's8',
    category: 'Wellness',
    title: 'Pandora Star Light Therapies',
    description: ' Pandora Star provides immersive visual and sensory experiences, supporting relaxation and encouraging creative exploration.',
    detailedDescription: [
      'Using LED lights arranged in a sacred geometrical pattern, PandoraStar can be programmed to produce high frequency light for the brain to decode in unique ways.',
      'The light is often used for entering meditation, hypnosis, and trance states for personal and spiritual development. PandoraStar provides immersive visual and sensory experiences, supporting relaxation and encouraging creative exploration.',
      'People often report experiencing vivid closed-eye visuals, time distortion, lucid dreamlike and visionary states, and out-of-body experiences while using the light.',
      'Pandora Star light therapy can aid with stress, anxiety, pain and sleep disorders, memory and concentration, creativity and general focus. Each session is programmed for your desired outcome.'
    ],
    subTreatments: [],
    price: 'from £25',
    imageId: 'service-aesthetics-1'
  },
  {
    id: 's9',
    category: 'Aesthetics',
    title: 'Brows, Lashes & Threading',
    description: 'Experience our many eyebrow and eyelash treatments.',
    detailedDescription: [
      'Brow lamination is a semi-permanent cosmetic treatment that straightens and sets eyebrow hairs in a desired, upward direction, creating a fuller, more defined, and uniformly shaped appearance.',
      'Threading is used for its precision, and is particularly effective for shaping eyebrows and removing fine, stray facial hairs. It is considered a less invasive method compared to waxing, making it suitable for sensitive skin.',
      'We also provide tinting for brows and lashes, click to view all our available treatments.'
    ],
    subTreatments: [],
    price: 'from £7',
    imageId: 'service-aesthetics-2'
  },
  { 
    id: 's10', 
    category: 'Wellness', 
    title: 'Cryopen Lesion Removal', 
    description: 'Our safe and precise removal of benign skin lesions.', 
    detailedDescription: [
      "CryoPen Lesion removal is our safe and precise removal of benign skin lesions, including skin tags, warts, verrucas, cherry angiomas, milia, age spots, sun spots, and pigmentation.",
    ],
    subTreatments: [],
    price: 'from £50', 
    imageId: 'service-wellness-2' 
  },
  {
    id: 's11',
    category: 'Aesthetics',
    title: 'Advanced Needling Treatments',
    description: 'Reduce the appearance of facial wrinkles with this popular injectable treatment.',
    detailedDescription: [
      'Microneedling stimulates the production of collagen and elastin, leading to improved skin texture, reduced appearance of scars (including acne, surgical, and burn scars), stretch marks, fine lines, wrinkles, pigmentation, and enlarged pores.',
      'Nano needling is a non-invasive skin treatment designed to improve skin tone, texture, and hydration. It is a gentle process, suitable for all skin types, and safe for use on sensitive areas like the eye and lip regions.',
    ],
    subTreatments: [],
    price: 'from £45',
    imageId: 'service-aesthetics-1'
  },
  {
    id: 's12',
    category: 'Aesthetics',
    title: 'Body Treatments',
    description: 'Restore volume and fullness to the face, creating a more youthful appearance.',
    detailedDescription: [
      'Our full body scrubs and hydro jelly treatments envigorate, exfoliate and unclog pores to reveal the softer skin underneath.',
      'These processes can help hydrate, detoxify the skin, improve circulation, and enhance the absorption of moisturizers and other skincare products.'
    ],
    subTreatments: [],
    price: 'from £30',
    imageId: 'service-aesthetics-2'
  },
  {
    id: 's13',
    category: 'Aesthetics',
    title: 'Ear Wax Removal',
    description: 'Restore your hearing with our earwax suction treatment.',
    detailedDescription: [
      'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision. Our gentle earwax removal service is designed to provide relief from discomfort and enhance your hearing clarity.',
      'Using safe and effective techniques, we carefully remove excess earwax buildup, promoting better ear health and preventing potential complications. Whether you\'re experiencing muffled hearing, tinitus or discomfort, our professional care will leave your ears feeling refreshed and revitalized.',
      'Ideal for those experiencing tinitus or other hearing difficulties, discomfort, or seeking routine ear care.'
    ],
    subTreatments: [],
    price: 'from £30',
    imageId: 'service-aesthetics-2',
    isMobile: true 
  },
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
    name: 'Becky', 
    role: 'Founder / Owner', 
    imageId: 'team-member-1',
    bio: [
      "Becky is the founder of West Park Wellness Studio, where she combines her passion for holistic health with advanced wellness technology.",
      "With training in biofeedback, skincare, and non-invasive treatments, she helps clients restore balance in both body and mind. Becky believes in creating a safe, welcoming space where every client feels cared for, respected, and empowered on their journey to healing and confidence."
    ],
    qualifications: ["Licensed Master Esthetician", "Certified in Advanced Chemical Peels", "HydraFacial Master Certified"],
    treatments: ["s1", "s2", "s3", "s9"]
  },
  { 
    id: 't2', 
    name: 'Katie', 
    role: 'Beauty Therapist', 
    imageId: 'team-member-2',
    bio: [
      "Katie is a fully qualified beautician with over 6 years of experience in the beauty industry.",
      "She specialises in brows and LVL lash lifts, helping clients enhance their natural features with precision and care. Known for her attention to detail and friendly approach, Katie ensures every client feels comfortable and leaves with a boost of confidence."
    ],
    qualifications: ["Licensed Massage Therapist", "Certified in Hot Stone Therapy", "Aromatherapy Specialist"],
    treatments: ["s4", "s5", "s6", "s7"]
  },
  // { 
  //   id: 't3', 
  //   name: 'Sofia Rossi', 
  //   role: 'Skincare Specialist', 
  //   imageId: 'team-member-3',
  //   bio: [
  //     "Sofia is a dedicated skincare specialist with a passion for helping clients achieve healthy, radiant skin. She is an expert in analyzing skin conditions and recommending effective treatment and home-care regimens.",
  //     "Her gentle touch and extensive knowledge make every facial a relaxing and educational experience."
  //   ],
  //   qualifications: ["Licensed Esthetician", "Certified in Microneedling", "Expert in Cosmetic Ingredient Knowledge"],
  //   treatments: ["s1", "s2", "s3", "s8"]
  // },
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
  // {
  //   id: 'fc4',
  //   title: 'Oberon Biofeedback Therapy, Harmonize Your Energy',
  //   shortTitle: 'Oberon Biofeedback Therapy',
  //   description: 'Oberon Biofeedback system is a non-invasive wellness tool that uses quantum frequency scanning to detect imbalances in the body.',
  //   detailedDescription: [
  //       'Our Oberon Biofeedback system is a non-invasive wellness tool that uses quantum frequency scanning to detect imbalances in the body — physically, emotionally, and energetically.',
  //       'This advanced technology gently scans the body’s internal systems (organs, meridians, microbiome, chakras, and more) using headphones that transmit specific frequencies. It then compares your body’s responses to healthy reference data to highlight any areas of stress, deficiency, or disharmony.',
  //       'Following the scan, targeted meta-therapy can be applied to help support energetic balance and stimulate the body’s natural self-healing processes.'
  //   ],
  //   imageId: 'oberon-biofeedback',
  //   link: '/services?category=Wellness'
  // }
];