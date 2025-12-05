import { notFound } from "next/navigation";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { getPosts } from "@/utils/utils";
import { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/BlogPageContent";

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  const locales = ['en', 'es'];
  return posts.flatMap((post) =>
    locales.map((locale) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "blog", "posts"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function Blog({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "blog", "posts"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${blog.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <BlogPageContent post={post} />
    </>
  );
}
