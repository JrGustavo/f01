interface IPricingCard {
    price: number;
    title: string;
    benefits: string[];
    id: number;
    oneliner: string;
}

const pricingCards: IPricingCard[] = [
    {
        price: 0,
        title: "Free",
        benefits: [
            "1 User",
            "Basic Support",
            "10GB Storage",
            "Limited Access"
        ],
        id: 1,
        oneliner: "For the casual user"
    },
    {
        price: 10,
        title: "Pro",
        benefits: [
            "5 Users",
            "Pro Support",
            "100GB Storage",
            "Full Access"
        ],
        id: 2,
        oneliner: "For the professional"
    },
    {
        price: 30,
        title: "Business",
        benefits: [
            "Unlimited Users",
            "Full Support",
            "Unlimited Storage",
            "Full Access"
        ],
        id: 3,
        oneliner: "For the business owner"
    },
]

export default pricingCards;