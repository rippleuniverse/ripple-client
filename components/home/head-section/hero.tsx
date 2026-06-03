"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const Hero: FC = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const isHeadingInView = useInView(headingRef, {
    margin: "-150px",
  });
  const isImageInView = useInView(imageRef, {
    margin: "-150px",
  });

  return (
    <section>
      <Container
        className={
          "max-w-4xl text-center space-y-6 md:space-y-8 overflow-hidden relative"
        }
      >
        <motion.h1
          ref={headingRef}
          className={`text-white text-center ${madeSoulmaze.className} text-2xl md:text-3xl lg:text-5xl xl:text-6xl`}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: {},
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            C
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            r
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            e
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            a
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            t
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            i
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            v
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            e
          </motion.span>
          <br />{" "}
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
            className={"text-secondary"}
          >
            T
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
            className={"text-secondary"}
          >
            e
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
            className={"text-secondary"}
          >
            c
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
            className={"text-secondary"}
          >
            h
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
            className={"text-secondary"}
          >
            l
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
            className={"text-secondary"}
          >
            a
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
            className={"text-secondary"}
          >
            b
          </motion.span>{" "}
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            f
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            o
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            r
          </motion.span>{" "}
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            t
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            h
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            e
          </motion.span>
          <br />{" "}
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            F
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            u
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            t
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            u
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            r
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            e
          </motion.span>
        </motion.h1>
        <p className={"text-[#F5F3F0B2] text-xs md:text-base lg:text-lg"}>
          Ripple Universe™ equips creatives, technologists, and innovators with
          the skills, community, and culture needed to thrive in AI and emerging
          tech.
        </p>
        <div className={"flex justify-center"}>
          <Button asChild variant={"secondary"} size={"lg"}>
            <Link href={"/signup"}>Join the Community</Link>
          </Button>
        </div>
        <motion.div
          ref={imageRef}
          initial={{ scale: 0, origin: 0, opacity: 0 }}
          animate={{
            scale: isImageInView ? 1 : 0,
            opacity: isImageInView ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={""}
        >
          <Image
            src={"/images/home/hero-1.png"}
            className={"object-cover w-full"}
            alt={"Hero 1"}
            width={900}
            height={625}
          />
        </motion.div>
      </Container>
    </section>
  );
};

export const HeroImages: FC = () => {
  return (
    <>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className={"w-48 md:w-72 lg:w-96 absolute right-0 top-24"}
      >
        <Image
          src={"/images/home/hero-2.png"}
          alt={"Hero 2"}
          width={355}
          height={800}
          className={"w-full object-cover"}
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className={"w-16 md:w-36 absolute left-0 bottom-32 md:bottom-44"}
      >
        <Image
          src={"/images/home/hero-3.png"}
          alt={"Hero 2"}
          width={185}
          height={195}
          className={"w-full object-cover"}
        />
      </motion.div>
    </>
  );
};
