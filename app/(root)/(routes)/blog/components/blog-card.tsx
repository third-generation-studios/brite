import type { Blog } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/image-url";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

interface IBlogCardProps {
    blog: Blog;
}

const BlogCard = (props: IBlogCardProps) => {
    const { blog } = props;

    // Format the published date
    const publishedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(blog.publishedAt!));

    // Truncate the excerpt for a cleaner look
    const truncatedExcerpt =
        blog.excerpt && blog.excerpt.length > 120 
            ? `${blog.excerpt.slice(0, 120)}...` 
            : blog.excerpt;

    return (
        <Link 
            href={`/blog/${blog.slug?.current || ""}`}
            className="group"
        >
            <article className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Blog image */}
                <div className="relative w-full h-56 overflow-hidden">
                    <Image
                        src={blog.mainImage?.asset ? imageUrl(blog.mainImage.asset).url() : ""}
                        alt={blog.title || "Blog Image"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    {/* Blog title */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                    </h2>

                    {/* Published date */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-blue-600" />
                            <span>{publishedDate}</span>
                        </div>
                    </div>

                    {/* Truncated excerpt */}
                    <p className="text-slate-600 mb-4 flex-grow line-clamp-3">
                        {truncatedExcerpt}
                    </p>

                    {/* Read more link */}
                    <div className="pt-4 border-t border-slate-200">
                        <span className="text-blue-600 font-semibold group-hover:gap-2 inline-flex items-center transition-all">
                            Read More
                            <span className="ml-2 group-hover:ml-0 transition-all">→</span>
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;