import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type Service = {
  id: string;
  category: 'Face' | 'Body' | 'Wellness' | 'Mind' | 'Ears';
  title: string;
  description: string;
  price: string;
  imageId: string;
};

export type ServiceOverview = {
  id: string;
  imageId: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  detailedDescription: (string | { idx: number; description: string })[];
};

export const services: Service[] = [
  { id: 's1', category: 'Face', 
    title: 'Modern Aesthetics', 
    description: 'From rejuvenating Botox treatments to the subtle perfection of fillers, our services are designed to enhance your natural beauty and restore a youthful radiance.',
    price: '$300',
    imageId: 'service-face-1' 
  },
  { id: 's2', category: 'Mind', title: 'Pandora Star Light Therapy', description: 'Step into a world beyond ordinary relaxation with Pandora Star Light Therapy — an advanced light meditation experience that uses flickering white light to guide your brain into deeply restorative states.', price: '$250', imageId: 'service-face-2' },
  { id: 's3', category: 'Ears', title: 'Earwax Liberation', description: 'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision.', price: '$180', imageId: 'service-face-3' },
  { id: 's4', category: 'Body', title: 'Velvet Skin Body Polish', description: 'An exfoliating and moisturizing treatment for silky-smooth skin from head to toe.', price: '$120', imageId: 'service-body-1' },
  { id: 's5', category: 'Body', title: 'Contouring Body Wrap', description: 'A detoxifying wrap that helps to tone and firm the body, reducing the appearance of cellulite.', price: '$200', imageId: 'service-body-2' },
  { id: 's6', category: 'Wellness', title: 'Aromatherapy Escape', description: 'A relaxing massage using essential oils to soothe the mind and body.', price: '$110', imageId: 'service-wellness-1' },
  { id: 's7', category: 'Wellness', title: 'Hot Stone Harmony', description: 'Melt away tension with a therapeutic hot stone massage that promotes deep relaxation.', price: '$140', imageId: 'service-wellness-2' },
];

export const serviceOverviews: ServiceOverview[] = [
  { 
    id: 'so1',
    imageId: 'service-face-1',
    title: 'Modern Aesthetics, Where Beauty Blooms',
    shortTitle: 'Modern Aesthetics',
    shortDescription: 'From rejuvenating Botox treatments to the subtle perfection of fillers, our services are designed to enhance your natural beauty and restore a youthful radiance.',
    detailedDescription: [
      {
        idx: 0,
        description: 'We believe in the transformative power of aesthetics, bringing together science and artistry to redefine and celebrate your individual allure. Join us on this journey to discover the beauty that goes beyond skin deep, an experience crafted with precision, care, and a touch of aesthetic magic.',
      },
      {
        idx: 1,
        description: 'From rejuvenating Botox treatments to the subtle perfection of fillers, our services are designed to enhance your natural beauty and restore a youthful radiance. Dive into the world of micro-needling, injections, and nourishing vitamins that harmonize to unveil a canvas of timeless elegance.'
      },
    ]

  },
  { 
    id: 'so2',
    imageId: 'service-face-2',
    title: 'Pandora Star Light Therapy, A Journey Beyond Relaxation',
    shortTitle: 'Pandora Star Light Therapy',
    shortDescription: 'Step into a world beyond ordinary relaxation with Pandora Star Light Therapy — an advanced light meditation experience that uses flickering white light to guide your brain into deeply restorative states.',
    detailedDescription: [
      {
        idx: 0,
        description: 'Step into a world beyond ordinary relaxation with Pandora Star Light Therapy — an advanced light meditation experience that uses flickering white light to guide your brain into deeply restorative states. Whether you’re seeking clarity, relaxation, emotional release, or a shift in consciousness, this 30-minute journey invites you to reconnect with your true self.',
      },
      {
        idx: 1,
        description: 'Lay back under the soft, flickering light with eyes gently closed. Each session is personalised to your needs — whether you’re seeking calm, energy reset, or emotional release. Most clients leave feeling peaceful, recharged, and often deeply moved.'
      },
      {
        idx: 2,
        description: 'Ideal for those feeling overwhelmed, anxious, creatively blocked, or seeking a deep inner reset.'
      }
    ]
  },
  { 
    id: 'so3',
    imageId: 'service-face-3',
    title: 'Earwax Liberation, Hear the World Anew',
    shortTitle: 'Earwax Liberation',
    shortDescription: 'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision.',
    detailedDescription: [
      {
        idx: 0,
        description: 'Experience the soothing harmony of a clean auditory canvas, ensuring your ears are free to absorb the sounds of life with crystal-clear precision. Our gentle earwax removal service is designed to provide relief from discomfort and enhance your hearing clarity.',
      },
      {
        idx: 1,
        description: 'Using safe and effective techniques, we carefully remove excess earwax buildup, promoting better ear health and preventing potential complications. Whether you\'re experiencing muffled hearing, tinitus or discomfort, our professional care will leave your ears feeling refreshed and revitalized.'
      },
      {
        idx: 2,
        description: 'Ideal for those experiencing tinitus or other hearing difficulties, discomfort, or seeking routine ear care.'
      }
    ]
  },
  { 
    id: 'so4',
    imageId: 'service-face-3',
    title: 'Oberon Biofeedback Therapy, Harmonize Your Energy',
    shortTitle: 'Oberon Biofeedback Therapy',
    shortDescription: 'Oberon Biofeedback system is a non-invasive wellness tool that uses quantum frequency scanning to detect imbalances in the body.',
    detailedDescription: [
      {
        idx: 0,
        description: 'Our Oberon Biofeedback system is a non-invasive wellness tool that uses quantum frequency scanning to detect imbalances in the body — physically, emotionally, and energetically.',
      },
      {
        idx: 1,
        description: 'This advanced technology gently scans the body’s internal systems (organs, meridians, microbiome, chakras, and more) using headphones that transmit specific frequencies. It then compares your body’s responses to healthy reference data to highlight any areas of stress, deficiency, or disharmony.'
      },
      {
        idx: 2,
        description: 'Following the scan, targeted meta-therapy can be applied to help support energetic balance and stimulate the body’s natural self-healing processes.'
      }
    ]
  },  
]

export const serviceCategories = ['Face', 'Body', 'Wellness', 'Mind', 'Ears'] as const;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageId: string;
};

export const teamMembers: TeamMember[] = [
  { id: 't1', name: 'Eleonora Vance', role: 'Lead Esthetician', imageId: 'team-member-1' },
  { id: 't2', name: 'Julien Beaumont', role: 'Massage Therapist', imageId: 'team-member-2' },
  { id: 't3', name: 'Sofia Rossi', role: 'Skincare Specialist', imageId: 'team-member-3' },
];

export function getImageById(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find((img) => img.id === id);
}