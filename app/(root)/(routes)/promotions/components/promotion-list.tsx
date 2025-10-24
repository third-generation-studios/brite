import type { Promotion } from "@/sanity.types";
import PromotionCard from "./promotion-card";

interface PromotionListProps {
    promotions: Promotion[];
    status: "active" | "upcoming" | "expired";
}

const PromotionList = ({ promotions, status }: PromotionListProps) => {
    if (promotions.length === 0) {
        return <p className="text-slate-400">No promotions available.</p>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.map((promotion, index) => (
                <PromotionCard
                    key={`${promotion._id}-${index}`}
                    promotion={promotion}
                    status={status}
                />
            ))}
        </div>
    );
};

export default PromotionList;
