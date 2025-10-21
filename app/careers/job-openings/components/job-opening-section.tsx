import React from "react";
import JobOpeningsCard from "./card";
import { Job } from "@/sanity.types";

interface IJobOpeningsProps {
    jobs: Job[];
}

const JobOpeningSection = (props: IJobOpeningsProps) => {
    const { jobs } = props;
    return (
        <div className="max-w-7xl mx-auto px-4 pb-24">
            <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <h2 className="text-3xl font-bold text-white">Current Openings</h2>
                </div>
                {jobs.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
                            <JobOpeningsCard key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <p className="text-slate-400 text-xl">No job openings available at this time.</p>
                        <p className="text-slate-500 mt-4">Check back soon for exciting opportunities!</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default JobOpeningSection;
