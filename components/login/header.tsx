import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { useTheme } from 'next-themes';

export default function HeaderLogin() {
    const { theme, setTheme } = useTheme();
    
    return (
        <header className="w-full fixed top-0 left-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center p-4">
                <Link href="https://www.guimarseguros.com/">
                    {theme === 'dark' ? (
                        <Image
                            src="/assets/images/LOGO_GUIMAR_COLOR_2.png" // Logo para dark mode
                            alt="Guimar Seguros"
                            width={150}
                            height={50}
                            priority
                        />
                    ) : (
                        <Image
                            src="/assets/images/LOGO_GUIMAR_COLOR_1.png" // Logo para light mode
                            alt="Guimar Seguros"
                            width={150}
                            height={50}
                            priority
                        />
                    )}
                </Link>
                <ModeToggle />
            </div>
        </header>
    )
}
