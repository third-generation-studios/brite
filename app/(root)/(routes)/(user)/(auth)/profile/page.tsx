import PageBanner from "@/components/PageBanner";
import Profile from "@/components/layout/profile";

export default function ProfilePage() {
    return (
        <section className="flex flex-col w-full h-full flex-1 bg-white relative">
            {/* TITLE */}
            <PageBanner title="Your Profile" />
            {/* PROFILE CONTENT */}
            <Profile />
        </section>
    );
}
