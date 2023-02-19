import Header from '@/components/Header';
import '@/styles/globals.css';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export const metadata: Metadata = {
  title: 'در کسری از ثانیه، بایویی خیره‌کننده و جذاب بساز!',
  description: 'اینجا می‌تونی با چند کلیک ساده، بایویی شخصی‌سازی شده و جذاب که نمایانگر واقعی شخصیت توه، بسازی.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'در کسری از ثانیه، بایویی خیره‌کننده و جذاب بساز!',
    description: 'اینجا می‌تونی با چند کلیک ساده، بایویی شخصی‌سازی شده و جذاب که نمایانگر واقعی شخصیت توه، بسازی.',
    images: [{
      url: 'https://bio.eindev.ir/screenshot.png',
      width: '300