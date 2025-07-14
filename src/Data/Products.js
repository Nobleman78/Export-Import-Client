const products = [
    {
        id: 1,
        name: "Dell XPS 13",
        img: "https://media.istockphoto.com/id/1188018336/photo/half-closed-laptop-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=hma7cisEDw0d51uLbuBzwhpLqAVISGXnN526AxRElig=",
        price: 1200,
        brand: "Dell",
        quality: "New",
        description: "Dell XPS 13 with Intel i7 and 16GB RAM.",
        madeIn: "USA",
        availability: "In Stock"
    },
    {
        id: 2,
        name: "iPhone 14 Pro Max",
        img: "https://m.media-amazon.com/images/I/513FAMDqgXL._AC_UY218_.jpg",
        price: 999,
        brand: "Apple",
        quality: "New",
        description: "128GB storage, Midnight Black.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 3,
        name: "Samsung 970 EVO Plus SSD",
        img: "https://m.media-amazon.com/images/I/71OYNmVRFhL._AC_UY218_.jpg",
        price: 150,
        brand: "Samsung",
        quality: "New",
        description: "NVMe M.2 SSD, 1TB.",
        madeIn: "South Korea",
        availability: "Limited Stock"
    },
    {
        id: 4,
        name: "LG UHD 4K Monitor",
        img: "https://m.media-amazon.com/images/I/717BynQinOL._AC_UY218_.jpg",
        price: 350,
        brand: "LG",
        quality: "New",
        description: "27” IPS Display with HDR10.",
        madeIn: "Vietnam",
        availability: "In Stock"
    },
    {
        id: 5,
        name: "Fossil Gen 6 Smartwatch",
        img: "https://m.media-amazon.com/images/I/71DP0v5VqhL._AC_UY218_.jpg",
        price: 200,
        brand: "Fossil",
        quality: "New",
        description: "Smartwatch with AMOLED display.",
        madeIn: "India",
        availability: "In Stock"
    },

    {
        id: 33,
        name: "Dell Wired Optical Mouse",
        img: "https://m.media-amazon.com/images/I/71MpdHUaiYL._AC_UY218_.jpg",
        price: 8,
        brand: "Dell",
        quality: "Used",
        description: "Dell MS116 Wired USB Mouse.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 34,
        name: "Redragon K552 Mechanical Keyboard",
        img: "https://m.media-amazon.com/images/I/71FSIp+tDNL._AC_UY218_.jpg",
        price: 30,
        brand: "Redragon",
        quality: "Used",
        description: "Compact Mechanical Gaming Keyboard.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 6,
        name: "Spigen Rugged Armor Case",
        img: "https://m.media-amazon.com/images/I/610V9tXzKuL._AC_UY218_.jpg",
        price: 15,
        brand: "Spigen",
        quality: "New",
        description: "Case for iPhone 14.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 35,
        name: "Logitech K120 Keyboard",
        img: "https://m.media-amazon.com/images/I/51r8H1pOevL._AC_UY218_.jpg",
        price: 12,
        brand: "Logitech",
        quality: "Used",
        description: "USB Wired Keyboard for Everyday Use.",
        madeIn: "Vietnam",
        availability: "In Stock"
    },
    {
        id: 36,
        name: "ASUS AC750 Dual-Band Router",
        img: "https://m.media-amazon.com/images/I/71YgExlAfzL._AC_UY218_.jpg",
        price: 35,
        brand: "ASUS",
        quality: "Used",
        description: "WiFi Router with 4 Antennas and Parental Control.",
        madeIn: "Taiwan",
        availability: "In Stock"
    },
    {
        id: 37,
        name: "TP-Link Archer C20 Router",
        img: "https://m.media-amazon.com/images/I/61sJYOnV9gL._AC_UY218_.jpg",
        price: 28,
        brand: "TP-Link",
        quality: "Used",
        description: "Dual Band WiFi Router, 733Mbps.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 38,
        name: "Netgear 5-Port Gigabit Switch",
        img: "https://m.media-amazon.com/images/I/71PN4QhjkDL._AC_UY218_.jpg",
        price: 30,
        brand: "Netgear",
        quality: "Used",
        description: "GS305 5-Port Metal Ethernet Switch.",
        madeIn: "Vietnam",
        availability: "In Stock"
    },
    {
        id: 39,
        name: "ASUS ROG Strix G15",
        img: "https://m.media-amazon.com/images/I/71zuMSjwDfL._AC_UY218_.jpg",
        price: 850,
        brand: "ASUS",
        quality: "Used",
        description: "Gaming Laptop, Ryzen 7, RTX 3050.",
        madeIn: "Taiwan",
        availability: "Limited Stock"
    },
    {
        id: 40,
        name: "HP ZBook 15 G3 Mobile Workstation",
        img: "https://m.media-amazon.com/images/I/81YJFTgyAoL._AC_UY218_.jpg",
        price: 600,
        brand: "HP",
        quality: "Used",
        description: "Intel Xeon, 16GB RAM, 512GB SSD.",
        madeIn: "USA",
        availability: "In Stock"
    },
    {
        id: 7,
        name: "Corsair Vengeance LPX RAM",
        img: "https://m.media-amazon.com/images/I/61wCOVcyvFL._AC_UY218_.jpg",
        price: 90,
        brand: "Corsair",
        quality: "New",
        description: "16GB (2x8GB) DDR4 3200MHz.",
        madeIn: "Taiwan",
        availability: "In Stock"
    },
    {
        id: 8,
        name: "Samsung Galaxy A74 5G",
        img: "https://m.media-amazon.com/images/I/61s7W4UjnoL._AC_UY218_.jpg",
        price: 599,
        brand: "Samsung",
        quality: "New",
        description: "128GB, Prism Silver.",
        madeIn: "South Korea",
        availability: "Out of Stock"
    },
    
    {
        id: 10,
        name: "Acer 144Hz Monitor",
        img: "https://m.media-amazon.com/images/I/71yo3bmyBnL._AC_UY218_.jpg",
        price: 270,
        brand: "Acer",
        quality: "New",
        description: "24” Full HD IPS, 144Hz refresh rate.",
        madeIn: "Malaysia",
        availability: "Limited Stock"
    },
    {
        id: 11,
        name: "G.Skill Ripjaws V RAM",
        img: "https://m.media-amazon.com/images/I/618SEnJR1nL._AC_UY218_.jpg",
        price: 70,
        brand: "G.Skill",
        quality: "New",
        description: "16GB (2x8GB) DDR4 3000MHz.",
        madeIn: "Taiwan",
        availability: "In Stock"
    },
    {
        id: 12,
        name: "WD Blue SATA SSD",
        img: "https://m.media-amazon.com/images/I/71DvBmAUduL._AC_UY218_.jpg",
        price: 110,
        brand: "WD",
        quality: "New",
        description: "1TB SATA SSD.",
        madeIn: "Thailand",
        availability: "In Stock"
    },
    {
        id: 13,
        name: "OtterBox Commuter Case",
        img: "https://m.media-amazon.com/images/I/71Go+X-xMOL._AC_UY218_.jpg",
        price: 10,
        brand: "OtterBox",
        quality: "New",
        description: "Case for Galaxy S21.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 14,
        name: "Garmin Venu Sq Music",
        img: "https://m.media-amazon.com/images/I/61e+g1OYkkL._AC_UY218_.jpg",
        price: 299,
        brand: "Garmin",
        quality: "New",
        description: "GPS Smartwatch with music.",
        madeIn: "USA",
        availability: "In Stock"
    },
    {
        id: 15,
        name: "MacBook Air M2",
        img: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg",
        price: 1500,
        brand: "Apple",
        quality: "New",
        description: "13” Retina Display, M2 chip.",
        madeIn: "China",
        availability: "Pre-Order"
    },
    {
        id: 16,
        name: "Xiaomi Redmi Note 13 Pro",
        img: "https://m.media-amazon.com/images/I/51pk5PzpzZL._AC_UY218_.jpg",
        price: 349,
        brand: "Xiaomi",
        quality: "New",
        description: "256GB, Graphite Gray.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 17,
        name: "Crucial MX500 SSD",
        img: "https://m.media-amazon.com/images/I/51zhuXxYuRL._AC_UY218_.jpg",
        price: 180,
        brand: "Crucial",
        quality: "New",
        description: "2TB 3D NAND SATA SSD.",
        madeIn: "Singapore",
        availability: "In Stock"
    },
    {
        id: 18,
        name: "Ringke Fusion-X Case",
        img: "https://m.media-amazon.com/images/I/71J03voAOtL._AC_UY218_.jpg",
        price: 8,
        brand: "Ringke",
        quality: "New",
        description: "Case for Pixel 7.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 19,
        name: "Kingston Fury Beast RAM",
        img: "https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_UY218_.jpg",
        price: 60,
        brand: "Kingston",
        quality: "New",
        description: "8GB DDR4 3200MHz RAM.",
        madeIn: "USA",
        availability: "In Stock"
    },
    {
        id: 20,
        name: "Amazfit GTR 4 Smartwatch",
        img: "https://m.media-amazon.com/images/I/61b-75iHbuL._AC_UY218_.jpg",
        price: 250,
        brand: "Amazfit",
        quality: "New",
        description: "Smartwatch with Alexa and GPS.",
        madeIn: "China",
        availability: "In Stock"
    },

    {
        id: 21,
        name: "HP ProBook 450 G6",
        img: "https://m.media-amazon.com/images/I/51WIY71pJxL._AC_SX569_.jpg",
        price: 450,
        brand: "HP",
        quality: "Used",
        description: "HP ProBook 450 G6, Intel i5, 8GB RAM, 256GB SSD.",
        madeIn: "USA",
        availability: "In Stock"
    },
    {
        id: 22,
        name: "Dell Latitude E7470",
        img: "https://m.media-amazon.com/images/I/810lvgawLkL._AC_UY218_.jpg",
        price: 380,
        brand: "Dell",
        quality: "Used",
        description: "Dell Latitude E7470, i5 6th Gen, 8GB RAM, 256GB SSD.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 23,
        name: "ASUS VivoBook 14",
        img: "https://m.media-amazon.com/images/I/61lvElgnZZL._AC_UY218_.jpg",
        price: 420,
        brand: "ASUS",
        quality: "Used",
        description: "ASUS VivoBook 14, Ryzen 5, 8GB RAM, 512GB SSD.",
        madeIn: "Taiwan",
        availability: "In Stock"
    },
    {
        id: 24,
        name: "Dell 24-Inch Monitor",
        img: "https://m.media-amazon.com/images/I/71OlXltl18L._AC_UY218_.jpg",
        price: 130,
        brand: "Dell",
        quality: "Used",
        description: "Dell SE2419Hx 24” Full HD IPS Monitor.",
        madeIn: "Malaysia",
        availability: "In Stock"
    },
    {
        id: 9,
        name: "HP Pavilion 15",
        img: "https://m.media-amazon.com/images/I/71aTEZOda0L._AC_UY218_.jpg",
        price: 890,
        brand: "HP",
        quality: "New",
        description: "Ryzen 7, 512GB SSD.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 25,
        name: "HP EliteDisplay E243 Monitor",
        img: "https://m.media-amazon.com/images/I/81W0mzhCINL._AC_UY218_.jpg",
        price: 120,
        brand: "HP",
        quality: "Used",
        description: "23.8” Full HD IPS LED Monitor.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 26,
        name: "ASUS RT-AC66U Router",
        img: "https://m.media-amazon.com/images/I/71pmK61jO5L._AC_UY218_.jpg",
        price: 55,
        brand: "ASUS",
        quality: "Used",
        description: "Dual-band Gigabit Wireless Router with AiRadar.",
        madeIn: "Taiwan",
        availability: "In Stock"
    },
    {
        id: 27,
        name: "TP-Link TL-SF1005D Switch",
        img: "https://m.media-amazon.com/images/I/71C646qzDnL._AC_UY218_.jpg",
        price: 15,
        brand: "TP-Link",
        quality: "Used",
        description: "5-Port Fast Ethernet Switch.",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 28,
        name: "Corsair Vengeance DDR4 RAM",
        img: "https://m.media-amazon.com/images/I/61TMLVSJIYL._AC_UY218_.jpg",
        price: 45,
        brand: "Corsair",
        quality: "Used",
        description: "8GB DDR4 3000MHz RAM Module.",
        madeIn: "Taiwan",
        availability: "In Stock"
    },
    {
        id: 29,
        name: "Kingston 8GB DDR3 RAM",
        img: "https://m.media-amazon.com/images/I/81twuDZd0eL._AC_UY218_.jpg",
        price: 25,
        brand: "Kingston",
        quality: "Used",
        description: "8GB DDR3L 1600MHz Laptop RAM.",
        madeIn: "USA",
        availability: "In Stock"
    },
    {
        id: 30,
        name: "Dell Laptop Battery",
        img: "https://m.media-amazon.com/images/I/61dNfUgu8OL._AC_UY218_.jpg",
        price: 40,
        brand: "Dell",
        quality: "Used",
        description: "Dell Inspiron 15-5000 Series Battery (WDX0R).",
        madeIn: "China",
        availability: "In Stock"
    },
    {
        id: 31,
        name: "HP Pavilion Battery",
        img: "https://m.media-amazon.com/images/I/51fAIWZbwyS._AC_UY218_.jpg",
        price: 38,
        brand: "HP",
        quality: "Used",
        description: "Battery for HP Pavilion X360 14M.",
        madeIn: "Malaysia",
        availability: "In Stock"
    },
    {
        id: 32,
        name: "Logitech M185 Wireless Mouse",
        img: "https://m.media-amazon.com/images/I/61v0F70qBqL._AC_UY218_.jpg",
        price: 10,
        brand: "Logitech",
        quality: "Used",
        description: "Compact Wireless Mouse with USB Receiver.",
        madeIn: "China",
        availability: "In Stock"
    },

];


export default products