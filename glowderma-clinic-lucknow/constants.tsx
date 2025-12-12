import { 
  Sparkles, 
  Droplets, 
  Zap, 
  Sun, 
  ScanFace, 
  Microscope, 
  Syringe, 
  UserCheck, 
  ShieldCheck, 
  Award, 
  Clock 
} from 'lucide-react';
import { Service, Testimonial, Doctor, NavItem, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Doctor', href: '#doctor' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
];

export const SERVICES: Service[] = [
  {
    id: 'acne',
    title: 'Acne & Scar Treatment',
    description: 'Advanced protocols including peels and lasers to clear active acne and reduce scarring.',
    icon: Sparkles
  },
  {
    id: 'hair',
    title: 'Hair Loss Solutions',
    description: 'Comprehensive hair restoration using PRP, mesotherapy, and growth factor treatments.',
    icon: Droplets
  },
  {
    id: 'laser',
    title: 'Laser Hair Reduction',
    description: 'Pain-free, full-body laser hair reduction using US-FDA approved diode technology.',
    icon: Zap
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Botox',
    description: 'Turn back time with fillers, thread lifts, and wrinkle reduction therapies.',
    icon: Clock
  },
  {
    id: 'brightening',
    title: 'Skin Brightening',
    description: 'Medi-facials and laser toning to reduce pigmentation and restore your natural glow.',
    icon: Sun
  },
  {
    id: 'hydra',
    title: 'HydraFacial MD',
    description: 'Deep cleansing and hydration treatment for instant radiance before special events.',
    icon: ScanFace
  },
  {
    id: 'mole',
    title: 'Mole & Wart Removal',
    description: 'Safe and scar-less removal of benign skin growths using RF technology.',
    icon: Microscope
  },
  {
    id: 'boosters',
    title: 'Skin Boosters',
    description: 'Injectable hydration treatments to improve skin elasticity and texture.',
    icon: Syringe
  }
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: 15, suffix: '+', icon: Clock },
  { label: 'Happy Patients', value: 10000, suffix: '+', icon: UserCheck },
  { label: 'Procedures', value: 50, suffix: '+', icon: ShieldCheck },
  { label: 'Awards Won', value: 12, suffix: '', icon: Award },
];

export const DOCTOR: Doctor = {
  name: 'Dr. Ananya Sharma',
  role: 'Chief Dermatologist & Hair Transplant Surgeon',
  qualifications: 'MBBS, MD (Dermatology), FAM (Fellowship in Aesthetic Medicine)',
  bio: 'With over 15 years of clinical experience in Gomti Nagar, Dr. Ananya Sharma combines medical expertise with artistic precision. She specializes in corrective aesthetics and has transformed the lives of over 10,000 patients.',
  specialties: ['Clinical Dermatology', 'Laser Surgery', 'Pediatric Dermatology', 'Trichology'],
  image: 'https://picsum.photos/seed/doctor1/400/500' // Placeholder
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Verma',
    age: 28,
    treatment: 'Laser Hair Reduction',
    rating: 5,
    text: "I was skeptical about laser treatment, but the results at GlowDerma have been fantastic. Dr. Sharma made me feel so comfortable. Best clinic in Lucknow!"
  },
  {
    id: '2',
    name: 'Rahul Singh',
    age: 35,
    treatment: 'PRP for Hair Loss',
    rating: 5,
    text: "The hair fall treatment actually worked. I've seen significant regrowth after 4 sessions of PRP. The staff is very professional and hygiene is top-notch."
  },
  {
    id: '3',
    name: 'Sneha Gupta',
    age: 42,
    treatment: 'Anti-Aging Facial',
    rating: 5,
    text: "My skin feels 10 years younger. The HydraFacial is a must-try. I love the ambiance of the clinic, it doesn't feel like a hospital at all."
  }
];
