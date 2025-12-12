import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  treatment: string;
  rating: number;
  text: string;
}

export interface Doctor {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}