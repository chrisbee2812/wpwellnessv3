import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type ServiceCategory = 'Face' | 'Aesthetics' | 'Body' | 'Wellness';

export type SubService = {
  name: string;
  duration: string;
  price: string;
  details?: string;
};

export type Service = {
  id: string;
  primaryCategory: ServiceCategory;
  secondaryCategories?: ServiceCategory[];
  title: string;
  description: string;
  detailedDescription: string[];
  subTreatments: string[];
  price: string;
  imageId: string;
  isMobile?: boolean;
  subServices?: SubService[];
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
    primaryCategory: 'Face',
    secondaryCategories: ['Aesthetics'],
    title: 'Anti-Wrinkle Injections', 
    description: 'Anti-wrinkle injections are a popular cosmetic treatment used to reduce the appearance of wrinkles.', 
    detailedDescription: [
      "Anti-wrinkle injections are a non-surgical cosmetic treatment used to reduce the appearance of facial wrinkles and lines.",
      "Common treatment areas include forehead lines, glabellar lines (frown lines between the eyebrows), crow’s feet around the eyes, bunny lines on the nose, and lines around the mouth.",
      "Results usually begin to appear within a few days, with full effects visible after 10–14 days. The duration of results varies but generally lasts between 3 to 6 months."
    ],
    subTreatments: [],
    price: 'from £130', 
    imageId: 'anti-wrinkle',
    subServices: [
        { name: '1 Area', duration: '20 mins', price: '£130' },
        { name: '2 Areas', duration: '25 mins', price: '£160' },
        { name: '3 Areas', duration: '30 mins', price: '£200' },
        { name: 'Add-On (Eyebrow Lift, Bunny Lines etc.)', duration: '10 mins', price: '£30' },
    ] 
  },
  { 
    id: 's2', 
    primaryCategory: 'Face',
    secondaryCategories: ['Aesthetics'],
    title: 'Dermal Fillers', 
    description: 'Dermal fillers are used to add volume to the skin, fill wrinkles, and enhance facial features for a more youthful appearance.', 
    detailedDescription: [
      "Dermal fillers are injectable substances used to add volume to the skin, fill wrinkles, and enhance facial features for a more youthful appearance.",
      "They are commonly used to address volume loss in the face, which occurs with aging due to decreased collagen and elastin production, leading to sagging skin, sunken cheeks, and hollowed temples.",
      "These non-surgical treatments are typically administered in areas around the eyes, mouth, nose, cheeks, lips, and jawline to smooth lines, plump lips, restore volume, and improve facial symmetry."
    ],
    subTreatments: [],
    price: 'From £150',
    imageId: 'fillers',
    subServices: [
        { name: 'Lip Filler', duration: '30 mins', price: '£180', details: 'Enhances lip volume and shape for a fuller, more defined look.' },
        { name: 'Marionette Lines', duration: '30 mins', price: '£150', details: 'Softens the lines that run from the corners of the mouth down to the chin.' },
        { name: 'Nasolabial Lines', duration: '30 mins', price: '£150', details: 'Reduces the appearance of smile lines, the creases that run from the nose to the mouth.' },
        { name: 'Filler Dissolver (per area)', duration: '30 mins', price: '£120' },
    ]
  },
  { 
    id: 's3', 
    primaryCategory: 'Face',
    secondaryCategories: ['Aesthetics'], 
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
    imageId: 'facials',
    subServices: [
        { name: 'Hydro Facial Mini', duration: '45 mins', price: '£60' },
        { name: 'Hydro Facial Deluxe', duration: '60 mins', price: '£100' },
        { name: 'Signature Hydro Facial', duration: '90 mins', price: '£120' },
        { name: 'Glass Facial', duration: '60 mins', price: '£120' },
        { name: 'Signature Glass Facial', duration: '2hrs +', price: '£200' },
        { name: 'Allure Gold Therapy Facial', duration: '80 mins', price: '£140' },
        { name: 'Lactocur + Therapy Facial', duration: '70 mins', price: '£110' },
        { name: 'Carbon Peel', duration: '30 mins', price: '£50' },
        { name: 'Chemical Peel (Face)', duration: '30 mins', price: '£60' },
        { name: 'Chemical Peel (Face + Hands)', duration: '45 mins', price: '£70' },
        { name: 'LED Nano Spray with Mini Facial', duration: '25 mins', price: '£20' },
    ] 
  },
  { 
    id: 's6', 
    primaryCategory: 'Face',
    secondaryCategories: ['Aesthetics'],
    title: 'Skin Boosters & Eye Boosters', 
    description: 'Skin boosters and eye boosters designed to improve skin quality, hydration, and texture.', 
    detailedDescription: [
      "Skin boosters and eye boosters are injectable treatments designed to improve skin quality, hydration, and texture, particularly in the delicate under-eye area, offering a non-surgical alternative to dermal fillers for addressing concerns like fine lines, dark circles, and dullness.",
      "These treatments work by delivering hyaluronic acid, polynucleotides, amino acids, and other active ingredients beneath the skin's surface to stimulate collagen and elastin production, enhance firmness, and provide deep, long-lasting hydration without significant volume addition."
    ],
    subTreatments: [],
    price: 'from £70', 
    imageId: 'skin-boosters', 
    subServices: [
        { name: 'Jalupro (Face + Eyes)', duration: '45 mins', price: '£170', details: "Jalupro is designed to improve skin quality by stimulating the body's natural production of collagen and elastin. Contains hyaluronic acid, amino acids and peptides." },
        { name: 'Toskani', duration: '45 mins', price: '£140', details: 'Toskani is a brand of hyaluronic acid skin boosters. It is designed to degrade more slowly, providing longer-lasting results' },
        { name: 'Profhilo', duration: '45 mins', price: '£160', details: 'Profhilo is a hyaluronic acid (HA) skin booster used for bio-remodelling—a treatment that deeply hydrates and improves skin quality by stimulating collagen and elastin production.' },
        { name: 'Lumi Pro', duration: '45 mins', price: '£140', details: 'Lumi Pro is a high-concentration hyaluronic acid skin booster. It delivers intense moisture, stimulates collagen and elastin production, and improves skin texture, firmness, and radiance.' },
        { name: 'Seventy Hyal', duration: '45 mins', price: '£140', details: 'Seventy Hyal 2000 is a hyaluronic acid (HA) skin booster designed for deep hydration and skin rejuvenation. It targets the physiological loss of HA in aging skin.' },
        { name: 'Regevenue', duration: '45 mins', price: '£140' },
        { name: 'Lemon Bottle', duration: '45 mins', price: '£140', details: 'Lemon Bottle is a multi-component skin booster designed for deep hydration, brightening, and anti-aging. It combines hyaluronic acid (HA), 11 amino acids, 4 peptides, 8 vitamins, and antioxidants to nourish the skin at a cellular level and stimulate collagen and elastin production.' },
        { name: 'Sosum', duration: '45 mins', price: '£140', details: 'Sosum is a premium hyaluronic acid (HA) skin booster brand designed for deep hydration, skin revitalization, and anti-aging.' },
        { name: 'Lumi Eyes', duration: '30 mins', price: '£90', details: 'Lumi Eyes is a polynucleotide based skin booster specifically designed for the delicate under-eye area. It is a tissue regenerator that repairs and revitalizes thin, aging skin to reduce dark circles, fine lines, puffiness, and signs of fatigue.' },
        { name: 'Ami Eyes', duration: '30 mins', price: '£70', details: 'Ami Eyes is a polynucleotide based skin booster derived from salmon DNA, designed to rejuvenate the delicate under-eye area and tear trough. It works by stimulating collagen and elastin production, improving skin elasticity, hydration, and texture.' },
        { name: 'Jalupro (Under Eye)', duration: '30 mins', price: '£120' },
    ]
  },
  { 
    id: 's4', 
    primaryCategory: 'Body',
    secondaryCategories: ['Aesthetics', 'Wellness'],
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
    imageId: 'fat-dissolving',
    subServices: [
        { name: 'Fat Dissolving Lemon Bottle', duration: '30 mins', price: '£140' },
        { name: 'LipoLab', duration: '30 mins', price: '£120' },
        { name: 'Aqualyx', duration: '30 mins', price: '£130' },
        { name: 'Cellulite Removal Injections', duration: '30 mins', price: '£100' },
    ]
  },
  { 
    id: 's5', 
    primaryCategory: 'Wellness',
    secondaryCategories: ['Body'],
    title: 'Vitamin Injections', 
    description: 'Vitamin injections deliver essential nutrients directly into the bloodstream, for fast and efficient absorption.', 
    detailedDescription: [
      "Vitamin injections deliver essential nutrients directly into the bloodstream, bypassing the digestive system for faster and more efficient absorption compared to oral supplements.",
      "Our administered injections include Vitamin B12, which supports red blood cell formation, nerve function, and energy metabolism.",
      "Vitamin C, known for its antioxidant properties that support skin health and immune function, and Vitamin D, which is important for general well-being and may be recommended for those feeling tired or rundown.",
    ],
    subTreatments: [],
    price: 'from £30', 
    imageId: 'vitamin-injection',
    subServices: [
        { name: 'Vitamin D', duration: '15 mins', price: '£35', details: 'An essential vitamin, benefiting bone health, immune support, mood regulation, muscle function and more.' },
        { name: 'Vitamin C', duration: '15 mins', price: '£30', details: 'A powerful anitoxidant, providing immune support, collagen synthesis, skin health and more.' },
        { name: 'Vitamin B12', duration: '15 mins', price: '£25', details: 'Vitamin B12 is essential for brain function, nerve health, and red blood cell formation. It aids energy production and mood regulation.' },
        { name: 'Biotin', duration: '15 mins', price: '£35', details: 'Biotin (Vitamin B7) is a water-soluble B-vitamin essential for converting food into energy and maintaining healthy hair, skin, and nails.' },
    ]
  },  
  { 
    id: 's7', 
    primaryCategory: 'Wellness',
    secondaryCategories: ['Body'],
    title: 'Massage & Holistic Therapies', 
    description: 'Experience our incredible hot stone massage, or indulgent foot therapy.', 
    detailedDescription: [
      "Our Hot Stone massage helps relive tension and pain, reduces stress and anxiety, promotes sleep and may even boost your immunity. Such an incredibly relaxing experience, you'll always come back for more.",
      "The Foot therapy treatment is an all encompasing indulgence for your feet. They get exfoliated, massaged, moisturised, and more, to leave your feet feeling and looking incredible."
    ],
    subTreatments: [],
    price: 'from £40', 
    imageId: 'hot-stone',
    subServices: [
        { name: 'Hot Stone Massage', duration: '30 mins', price: '£40' },
        { name: 'Foot Therapy (Wash, Exfoliate, Massage, Mask, Moisturiser)', duration: '45 mins', price: '£45' },
    ] 
  },
  {
    id: 's8',
    primaryCategory: 'Wellness',
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
    imageId: 'pandora-light-therapy',
    subServices: [
        { name: 'Pandora Star Light Therapy – Intro', duration: '20 mins', price: '£25' },
        { name: 'Pandora Star Light Therapy – Full', duration: '40 mins', price: '£45' },
        { name: 'Pandora Star + Breathwork', duration: '60 mins', price: '£60' },
    ]
  },
  {
    id: 's9',
    primaryCategory: 'Aesthetics',
    secondaryCategories: ['Face'],
    title: 'Brows, Lashes & Threading',
    description: 'Experience our many eyebrow and eyelash treatments.',
    detailedDescription: [
      'Brow lamination is a semi-permanent cosmetic treatment that straightens and sets eyebrow hairs in a desired, upward direction, creating a fuller, more defined, and uniformly shaped appearance.',
      'Threading is used for its precision, and is particularly effective for shaping eyebrows and removing fine, stray facial hairs. It is considered a less invasive method compared to waxing, making it suitable for sensitive skin.',
      'We also provide tinting for brows and lashes, click to view all our available treatments.'
    ],
    subTreatments: [],
    price: 'from £7',
    imageId: 'eye-brow-threading',
    subServices: [
        { name: 'Brow Lamination', duration: '30 mins', price: '£25' },
        { name: 'Brow Lamination with Henna', duration: '40 mins', price: '£30' },
        { name: 'Eyebrow Tint', duration: '10 mins', price: '£7' },
        { name: 'Tint & Wax', duration: '15 mins', price: '£15' },
        { name: 'LVL Lash Lift', duration: '45 mins', price: '£40' },
        { name: 'Eyebrow Threading', duration: '10 mins', price: '£9' },
        { name: 'Eyebrow, Lip & Chin Threading', duration: '20 mins', price: '£15' },
    ] 
  },
  { 
    id: 's10', 
    primaryCategory: 'Aesthetics',
    secondaryCategories: ['Face', 'Body'],
    title: 'Cryopen Lesion Removal', 
    description: 'Our safe and precise removal of benign skin lesions.', 
    detailedDescription: [
      "CryoPen Lesion removal is our safe and precise removal of benign skin lesions, including skin tags, warts, verrucas, cherry angiomas, milia, age spots, sun spots, and pigmentation.",
    ],
    subTreatments: [],
    price: 'from £50', 
    imageId: 'cryopen',
    subServices: [
        { name: 'Skin Tags', duration: '15–30 mins', price: 'From £50' },
        { name: 'Cherry Angiomas', duration: '15–30 mins', price: 'From £50' },
        { name: 'Age Spots', duration: '15–30 mins', price: 'From £50' },
        { name: 'Warts', duration: '15–30 mins', price: 'From £50' },
        { name: 'Verrucas', duration: '15–30 mins', price: 'From £50' },
        { name: 'Milia', duration: '15–30 mins', price: 'From £50' },
    ] 
  },
  {
    id: 's11',
    primaryCategory: 'Face',
    secondaryCategories: ['Aesthetics'],
    title: 'Advanced Needling Treatments',
    description: 'Reduce the appearance of facial wrinkles with this popular injectable treatment.',
    detailedDescription: [
      'Microneedling stimulates the production of collagen and elastin, leading to improved skin texture, reduced appearance of scars (including acne, surgical, and burn scars), stretch marks, fine lines, wrinkles, pigmentation, and enlarged pores.',
      'Nano needling is a non-invasive skin treatment designed to improve skin tone, texture, and hydration. It is a gentle process, suitable for all skin types, and safe for use on sensitive areas like the eye and lip regions.',
    ],
    subTreatments: [],
    price: 'from £45',
    imageId: 'nano-needling',
    subServices: [
        { name: 'Microneedling + Mini Facial + Standard Serum', duration: '45 mins', price: 'From £45' },
        { name: 'Microneedling + Mini Facial + Premium Serum', duration: '60 mins', price: 'From £65' },
        { name: 'Nano Needling + Mini Facial + Standard Serum', duration: '45 mins', price: 'From £45' },
        { name: 'Nano Needling + Mini Facial + Premium Serum', duration: '60 mins', price: 'From £65' },
    ] 
  },
  {
    id: 's12',
    primaryCategory: 'Body',
    secondaryCategories: ['Wellness', 'Aesthetics', 'Face'],
    title: 'Body Treatments',
    description: 'Restore volume and fullness to the face, creating a more youthful appearance.',
    detailedDescription: [
      'Our full body scrubs and hydro jelly treatments envigorate, exfoliate and unclog pores to reveal the softer skin underneath.',
      'These processes can help hydrate, detoxify the skin, improve circulation, and enhance the absorption of moisturizers and other skincare products.'
    ],
    subTreatments: [],
    price: 'from £30',
    imageId: 'full-body-scrub',
    subServices: [
        { name: 'Full Body Scrub', duration: '45 mins', price: '£50' },
        { name: 'Hydro Jelly Mask Facial Premium', duration: '40 mins', price: '£50' },
        { name: 'Hydro Jelly Mask Facial Standard', duration: '25 mins', price: '£30' },
    ] 
  },
  {
    id: 's13',
    primaryCategory: 'Wellness',
    secondaryCategories: ['Body'],
    title: 'Ear Wax Removal',
    description: 'Restore your hearing with our earwax suction treatment.',
    detailedDescription: [
      'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision. Our gentle earwax removal service is designed to provide relief from discomfort and enhance your hearing clarity.',
      'Using safe and effective techniques, we carefully remove excess earwax buildup, promoting better ear health and preventing potential complications. Whether you\'re experiencing muffled hearing, tinitus or discomfort, our professional care will leave your ears feeling refreshed and revitalized.',
      'Ideal for those experiencing tinitus or other hearing difficulties, discomfort, or seeking routine ear care.'
    ],
    subTreatments: [],
    price: 'from £30',
    imageId: 'earwax-removal-short',
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
    qualifications: ["Anatomy and Physiology Levels 3, 4 and 5", "Earwax removal with Tympa Health", "Foundation Aesthetics, Botox Dermal Fillers", "Advanced Botox", "Chemical Peels, Tattoo Removal and Carbon Laser Peel from Enhance Me Academy", "Skin Boosters and Vitamin Injections from Elite Manchester", "Hydrodermaebrassion/Korean Glass Facial", "Skin Tag Removal"],    
    treatments: ["s1", "s2", "s3", "s9"]
  },
  { 
    id: 't2', 
    name: 'Katie', 
    role: 'Beauty Therapist', 
    imageId: 'team-member-2',
    bio: [
      "Katie is a fully qualified beautician with over 6 years of experience in the beauty industry.",
      "She specialises in brows and LVL lash lifts, helping clients enhance their natural features with precision and care. Known for her attention to detail and friendly approach, Katie ensures every client feels comfortable and leaves with a boost of confidence.",
    ],
    qualifications: [],
    treatments: ["s9"]
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

export type SubServiceWithParent = SubService & { parentTitle: string };

export function getAllSubServices(): SubServiceWithParent[] {
  return services.flatMap(service => 
    service.subServices 
      ? service.subServices.map(sub => ({ ...sub, parentTitle: service.title }))
      : []
  );
}

export type FeaturedCategory = {
  id: string;
  title: string;
  shortTitle?: string;
  category: string;
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
    category: 'Aesthetics',
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
    category: 'Wellness',
    description: 'Step into a world beyond ordinary relaxation with Pandora Star Light Therapy — an advanced light meditation experience that uses flickering white light to guide your brain into deeply restorative states.',
    detailedDescription: [
        'Step into a world beyond ordinary relaxation with Pandora Star Light Therapy — an advanced light meditation experience that uses flickering white light to guide your brain into deeply restorative states. Whether you’re seeking clarity, relaxation, emotional release, or a shift in consciousness, this 30-minute journey invites you to reconnect with your true self.',
        'Lay back under the soft, flickering light with eyes gently closed. Each session is personalised to your needs — whether you’re seeking calm, energy reset, or emotional release. Most clients leave feeling peaceful, recharged, and often deeply moved.',
        'Ideal for those feeling overwhelmed, anxious, creatively blocked, or seeking a deep inner reset.'
    ],
    imageId: 'pandora-light-therapy-long',
    link: '/services?category=Wellness'
  },
  {
    id: 'fc3',
    title: 'Earwax Liberation, Hear the World Anew',
    shortTitle: 'Earwax Liberation',
    category: 'Mobile',
    description: 'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision.',
    detailedDescription: [
        'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision. Our gentle earwax removal service can be carried out in our clinic, or as a mobile service we can come to perform the treatment in the comfort of your own home. It is designed to provide relief from discomfort and enhance your hearing clarity.',
        'Using safe and effective techniques, we carefully remove excess earwax buildup, promoting better ear health and preventing potential complications. Whether you\'re experiencing muffled hearing, tinitus or discomfort, our professional care will leave your ears feeling refreshed and revitalized.',
        'Ideal for those experiencing tinitus or other hearing difficulties, discomfort, or seeking routine ear care.'
    ],
    imageId: 'earwax-removal',
    link: '/services?category=Mobile'
  },
];

export type SignatureTreatment = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  detailedDescription?: string[];
  imageId: string;
  price: string;
  link: string;
};

export const signatureTreatments: SignatureTreatment[] = [
  {
    id: 'st1',
    title: 'Signature Glass Facial',
    shortTitle: 'Signature Glass Facial',
    description: 'Experience the ultimate luxury facial at West Park Wellness Studio',
    detailedDescription: [
        'Experience the ultimate luxury facial at West Park Wellness Studio. Our Signature Glass Facial blends advanced skin technology with Korean beauty rituals to deliver the flawless, luminous “glass skin” look.',
        'This premium treatment combines deep cleansing, gentle resurfacing, skin booster infusion, and soothing recovery therapies — finishing with medical-grade LED light for radiant, long-lasting results.',
        'Results: Clearer pores, smoother texture, deep hydration, lifted contours, and a crystal-clear glow that feels as good as it looks.'
    ],
    imageId: 'signature-treatment-1',
    price: '£200 (2hrs+)',
    link: '/services?category=Aesthetics'
  },
  {
    id: 'st2',
    title: 'Signature Hydro Facial',
    shortTitle: 'Signature Hydro Facial',
    description: 'Our most popular advanced treatment for deep cleansing, lifting, and hydration.',
    detailedDescription: [
        'Our most popular advanced treatment for deep cleansing, lifting, and hydration.',
        'The Signature Hydro Facial combines exfoliation, Aqua Peel pore cleansing, radiofrequency tightening, EMS micro-lift, and targeted serum infusion — all performed using premium Korean professional beauty products.',
        'Finished with a calming mask, this treatment delivers both results and relaxation.',
        'Results: Clearer pores, smoother texture, firmer skin, and a deeply hydrated glow that lasts.'
    ],
    imageId: 'signature-treatment-2',
    price: '£120 (90 mins)',
    link: '/services?category=Wellness'
  },  
];