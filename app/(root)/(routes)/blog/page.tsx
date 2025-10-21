import { getAllBlogs } from "@/sanity/lib/blogs/getAllBlogs";
import BlogCard from "./components/blog-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brite Exterior Cleaning Blog | Tips, News, and Updates",
    description:
        "Stay informed with the latest tips, news, and updates from Brite Exterior Cleaning. Learn how to keep your property looking pristine with expert advice.",
    openGraph: {
        title: "Brite Exterior Cleaning Blog",
        description:
            "Stay informed with the latest tips, news, and updates from Brite Exterior Cleaning.",
        url: "https://briteclt.com/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning Blog",
        description:
            "Stay informed with the latest tips, news, and updates from Brite Exterior Cleaning.",
    },
};

export default async function BlogPage() {
    const blogs = await getAllBlogs();

    if (!blogs) {
        return;
    }

    if (blogs.length < 1) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 flex mt-10 items-center justify-center">
                <div className="text-center">
                    <p className="text-slate-400 text-xl">No blog posts available yet.</p>
                    <p className="text-slate-500 mt-4">Check back soon for expert tips and insights!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 mt-10">
            {/* Hero Section */}
            <div className="text-white px-4 py-24 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
                <p className="text-xl text-slate-300">
                    Expert tips, industry insights, and the latest news from Brite Exterior Cleaning
                </p>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog: any) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}