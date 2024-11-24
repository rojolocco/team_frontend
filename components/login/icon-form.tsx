import { motion } from 'framer-motion';
import Image from 'next/image';

export default function iconForm() {
    return (
        <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-4"
        >
            <div className="p-1 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 ring-1 ring-primary/20">
                <Image
                    src="/assets/icons/ICONO_GUIMAR_COLOR.png"
                    alt="Guimar Seguros"
                    width={50}
                    height={50}
                    priority
                />
            </div>
        </motion.div>
    )
}
