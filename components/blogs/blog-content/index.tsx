"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { useBlog } from "@/hooks/blogs";
import { creatoDisplay } from "@/lib/fonts";
import styles from "./styles.module.css";

export const BlogContent: FC = () => {
  const blog = useBlog();

  if (!blog.data) return null;

  return (
    <section className={"py-12 bg-white"}>
      <Container className={"max-w-3xl space-y-8"}>
        <div className={`space-y-12 ${creatoDisplay.className}`}>
          <h1 className={"text-3xl md:text-4xl lg:text-5xl font-medium"}>
            {blog.data.title}
          </h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: blog.data.content,
            }}
          />
          <div className={"flex space-x-5"}>
            <div className={"w-1 rounded-xl bg-secondary min-h-20"} />
            <div>
              <div className="flex items-center space-x-3">
                <Image
                  src={"/images/avatar.jpg"}
                  alt={"Avatar"}
                  width={60}
                  height={60}
                  className={"size-10 md:size-15 rounded-full object-cover"}
                />
                <div
                  className={
                    "font-medium text-xs md:text-sm lg:text-base xl:text-lg"
                  }
                >
                  <p className={"p-0"}>{blog.data.author}</p>
                  <p className={"text-secondary p-0"}>Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          {blog.data.prev_blog && (
            <Button size={"lg"} asChild variant={"ghost"}>
              <Link href={`/blogs/${blog.data.prev_blog}`}>Previous</Link>
            </Button>
          )}
          {blog.data.next_blog && (
            <Button asChild size={"lg"}>
              <Link href={`/blogs/${blog.data.next_blog}`}>Next</Link>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};
