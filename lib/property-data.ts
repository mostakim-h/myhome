export interface Property {
    id: string;
    title: string;
    location: string;
    size: string;
    price: string;
    priceInCrore: number;
    features: string[];
    images: string[];
    description: string;
    specifications: Record<string, string>;
    terms: string[];
    contact: {
        phone: string;
        email?: string;
    };
    status: 'available' | 'sold' | 'reserved';
    type: 'land' | 'flat' | 'commercial';
}

export const properties: Property[] = [
    {
        id: '1',
        title: 'ধানমন্ডিতে প্ল্যান পাশসহ প্লট বিক্রি',
        location: 'ধানমন্ডি, ঢাকা',
        size: '২০ কাঠা',
        price: '১১০ কোটি টাকা',
        priceInCrore: 110,
        status: 'available',
        type: 'land',
        features: [
            '২টা বেসমেন্টসহ ১৪ তলা প্লান পাশ',
            'মোট ইউনিট: ৩২ টি',
            'মোট: ১,৩২,৩৫০ স্কয়ার ফিট',
            'মোট পার্কিং: ৫০ টি',
            'দক্ষিণমুখী প্লট',
            'ব্যাংক লোন আছে'
        ],
        images: [
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        ],
        description: 'মিরপুর-ধানমন্ডি রোডের এক প্লট পরের প্লট। নির্ভেজাল প্লট। প্লানের মেয়াদ আছে। মিরপুর রোড হতে এক প্লট পরে। চমৎকার লোকেশান। মালিক ১ জন।',
        specifications: {
            'জমি': '২০ কাঠা',
            'প্ল্যান': '২টা বেসমেন্টসহ ১৪ তলা প্লান পাশ',
            'মোট ইউনিট': '৩২ টি',
            'মোট এরিয়া': '১,৩২,৩৫০ স্কয়ার ফিট',
            'ফ্ল্যাট সাইজ': '২৫৭০, ২৬২৫, ৩০৩৫ স্কয়ার ফিট',
            'প্রতি ফ্লোরে ইউনিট': 'টপ ফ্লোর বাদে প্রতি ফ্লোরে ৩ টা',
            'পার্কিং': '৫০ টি',
            'অবস্থান': 'মিরপুর-ধানমন্ডি রোডের এক প্লট পরের প্লট',
            'মুখ': 'দক্ষিণমুখী',
            'মালিক': '১ জন'
        },
        terms: [
            'মৌজা রেটে রেজিষ্ট্রেশন হবে',
            'অভার বিক্রির সুযোগ নেই',
            'বায়ারকে অবশ্যই ১% কনফার্ম করতে হবে',
            'দাম ১১০ কোটি ফিক্সড। আলোচনার সুযোগ নেই'
        ],
        contact: {
            phone: '+8801812932328',
            email: 'info@99housing.com'
        }
    },
    {
        id: '2',
        title: 'গুলশান-১, রোড-২ এ লাক্সারি ফ্লাট',
        location: 'গুলশান-১, ঢাকা',
        size: '২৬৬০ স্কয়ার ফিট',
        price: 'আলোচনা সাপেক্ষে',
        priceInCrore: 0,
        status: 'available',
        type: 'flat',
        features: [
            '৬ বছরের Used ফ্লাট',
            'Top ফ্লোরে',
            'ইন্টরিয়র করা',
            '২ টা পার্কিং',
            'South/East Facing',
            'স্বনামধন্য কোম্পানির বিল্ডিং'
        ],
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
        ],
        description: 'আর্জেন্ট গুলশান-১, এর ২ নাম্বার রোডে স্বনামধন্য কোম্পানির "২৬৬০" স্কয়ার ফিটের +২ টা পার্কিং সহ ৬ বছরের Used "Top ফ্লোরে" ইন্টরিয়র করা একটি লাক্সারি ফ্লাট বিক্রি হবে!!',
        specifications: {
            'Flat Size': '২৬৬০ স্কয়ার ফিট',
            'Unit': '২',
            'Facing': 'South/East',
            'Bed': '৩',
            'Bath room': '৪',
            'Balcony': '৩',
            'Parking': '২',
            'Building Storied': 'G+৯',
            'Location': 'Road-২, Gulshan-১, Dhaka',
            'Age': '৬ বছর',
            'Floor': 'Top Floor',
            'Interior': 'সম্পূর্ণ ইন্টরিয়র করা'
        },
        terms: [
            'ফ্লাট ভিজিট এবং বিস্তারিত জানতে যোগাযোগ করুন',
            'দাম আলোচনা সাপেক্ষে'
        ],
        contact: {
            phone: '+8801812932328',
            email: 'info@99housing.com'
        }
    }
];

export function getPropertyById(id: string): Property | undefined {
    return properties.find(p => p.id === id);
}

export function getPropertiesByType(type: Property['type']): Property[] {
    return properties.filter(p => p.type === type);
}
