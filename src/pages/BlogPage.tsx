import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { BlogCard } from "@/components/molecules/BlogCard";
import { blogData } from "@/data/blog.data";

const BlogPage = () => {
  const sortedPosts = [...blogData].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <MainLayout>
      <PageTransition>
        <section className="section-spacing">
          <div className="content-wrapper">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <SectionHeading
                title="Blog & Journal"
                subtitle="Thoughts on frontend development, design, and the craft of building for the web"
              />
            </div>

            {/* Posts grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {sortedPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default BlogPage;
