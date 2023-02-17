import Header from '@/components/Header';
import '@/styles/globals.css';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


type Props = {
  params: { id: string }
  searchP