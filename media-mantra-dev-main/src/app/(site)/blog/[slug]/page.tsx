import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/data/blog";
import { Container } from "@/components/ui/container";
import { createMetadata, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  const ogImage = post.coverImage.startsWith("http") ? post.coverImage : absoluteUrl(post.coverImage);
  return createMetadata({
    title: post.title,
    pathname: `/blog/${slug}`,
    description: post.dek,
    image: ogImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.body?.length ? post.body : [post.dek];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.dek,
    datePublished: post.date,
    image: post.coverImage.startsWith("http") ? post.coverImage : absoluteUrl(post.coverImage),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <main id="main-content" className="flex-1 bg-mm-graphite pb-24 pt-6 text-mm-cream lg:pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Container>
        <Link href="/blog" className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-light">
          ← Blogs
        </Link>
      </Container>
      <div className="relative mt-12 h-[360px] w-full lg:h-[460px]">
        <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-mm-black via-mm-royal/35 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-mm-gold">{post.category}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold md:text-5xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-mm-light">{post.dek}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-mm-light/70">
            {post.date} · {post.readTime}
          </p>
        </Container>
      </div>
      <Container className="mx-auto mt-16 max-w-3xl space-y-7 text-lg leading-relaxed text-mm-light">
        {paragraphs.map((chunk, idx) => (
          <Fragment key={idx}>
            <p>{chunk}</p>
            {idx === 0 && post.articleImage ? (
              <figure className="relative my-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-mm-white/10 md:aspect-[2.2/1]">
                <Image
                  src={post.articleImage}
                  alt={`Illustration for ${post.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 48rem"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mm-black/40 to-transparent" />
              </figure>
            ) : null}
          </Fragment>
        ))}
        <p>
          Editorial processes at Media Mantra Global merge proprietary listening with senior newsroom stewardship — enabling
          clients to intervene in culture with specificity, not spectacle.
        </p>
      </Container>
    </main>
  );
}
