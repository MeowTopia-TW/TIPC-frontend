import { Inter, Noto_Serif_TC, Noto_Sans_TC } from 'next/font/google';
import localFont from 'next/font/local';


// 英文字體 - Inter
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 中文字體 - Noto Serif TC (思源宋體) - Bold 700
export const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-noto-serif-tc',
  display: 'swap',
});

// 中文字體 - Noto Sans TC (思源黑體)
export const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
});

// 中文字體 - Taipei Sans TC
export const taipeiSansTC = localFont({
  src: '../../public/font/TaipeiSansTCBeta-Regular.ttf',
  variable: '--font-taipei-sans-tc',
  display: 'swap',
});
