import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'address@yoursite.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        github: process.env.NEXT_PUBLIC_GITHUB_URL,
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL
    }
}