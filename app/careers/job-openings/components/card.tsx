"use client";

import React from "react";
import { Job } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface IJobOpeningsCardProps {
    job: Job;
}

const JobOpeningsCard = (props: IJobOpeningsCardProps) => {
    const { job } = props;
    const router = useRouter();

    // Format the published date
    const publishedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(job.publishedAt!));

    // Truncate the excerpt for a cleaner look
    const truncatedExcerpt =
        job.excerpt!.length > 100 ? `${job.excerpt!.slice(0, 100)}...` : job.excerpt;

    return (
        <div
            key={job._id}
            className="group relative p-6 bg-white shadow-lg rounded-2xl border-2 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
            {/* Status Badge */}
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Hiring Now
            </div>

            {/* Job Icon */}
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white rounded-full p-3">
                    <FaBriefcase size={20} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-blue-600">
                        Position
                    </p>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {job.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 mb-4 line-clamp-3">
                {truncatedExcerpt}
            </p>

            {/* Location and Date */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-600" />
                    <span>{publishedDate}</span>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex gap-2">
                <button
                    onClick={() => router.push(`/careers/job-openings/${job.slug?.current}`)}
                    className="flex-1 text-blue-600 font-semibold group-hover:gap-2 inline-flex items-center justify-center transition-all border border-blue-600 rounded-lg py-2 px-4 hover:bg-blue-50"
                >
                    View Details
                    <span className="ml-2 group-hover:ml-0 transition-all">→</span>
                </button>
                <button
                    onClick={() => router.push(`/careers/job-openings/application/${job.slug?.current}`)}
                    className="flex-1 bg-blue-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-700 transition-all"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobOpeningsCard;
