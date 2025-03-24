'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FallingLeaf.module.css";

interface FallingLeafProps {
    src: string;
    delay: number;
    duration: number;
    x: number;
    rotate: number;
    width?: number;
    height?: number;
}

const FallingLeaf = ({
                         src,
                         delay,
                         duration,
                         x,
                         rotate,
                         width = 50,
                         height = 50
                     }: FallingLeafProps) => {
    return (
        <motion.div
            className={styles.fallingLeaf}
            initial={{ y: -100, x: x, opacity: 0, rotate: rotate }}
            animate={{
                y: typeof window !== 'undefined' ? window.innerHeight : 1000,
                opacity: 1,
                rotate: rotate + Math.random() * 360
            }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeIn"
            }}
        >
            <Image
                src={src}
                alt="Падающий листок"
                width={width}
                height={height}
                priority={true}
            />
        </motion.div>
    );
};

export default FallingLeaf;