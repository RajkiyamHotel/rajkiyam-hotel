export const allImage = [
    //receptions
    {
        id: 1,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1740922184/rec_wqoozs.jpg",
        displayToMain: true,
        roomType: "all"
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741428914/rec2_pyy23g.jpg",
        displayToMain: true,
        roomType: "all"
    },
    //standard room type
    {
        id: 3,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1740922112/room11_mcql9f.jpg",
        displayToMain: true,
        roomType: "standard"
    },
    {
        id:4,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1740922111/room7_ccr1dp.jpg",
        displayToMain: true,
        roomType: "standard"
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1740922108/balcoy_wzvgxs.jpg",
        displayToMain: false,
        roomType: "standard"
    },
    {
        id: 6,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1740933407/standartRoom_washroom_vx1amn.jpg",
        displayToMain: false,
        roomType: "standard"
    },
    //delux room type
    {
        id: 7,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741425631/delux1_xljofc.jpg",
        displayToMain: true,
        roomType: "delux"
    },
    {
        id:8,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741425783/delex2_w9leuo.jpg",
        displayToMain: true,
        roomType: "delux"
    },
    {
        id: 9,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741425909/table_bkybvv.jpg",
        displayToMain: false,
        roomType: "delux"
    },
    {
        id: 10,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741426024/washroom2_jrovpa.jpg",
        displayToMain: false,
        roomType: "delux"
    },
    //double room type
    {
        id: 11,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741448203/double_lfeqpm.jpg",
        displayToMain: true,
        roomType: "double"
    },
    {
        id:12,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741448408/double2_f5fo0r.jpg",
        displayToMain: true,
        roomType: "double"
    },
    {
        id: 13,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741448628/double3_sniokt.jpg",
        displayToMain: true,
        roomType: "double"
    },
    {
        id: 14,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741448550/double_washroom_joxfcm.jpg",
        displayToMain: false,
        roomType: "double"
    },
    //others
    {
        id: 15,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741455634/bed_qgmiiy.jpg",
        displayToMain: true,
        roomType: "all"
    },
    {
        id: 16,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741455580/all3_ritcxd.jpg",
        displayToMain: true,
        roomType: "all"
    },
    {
        id: 17,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741455544/all2_mr9bhx.jpg",
        displayToMain: true,
        roomType: "all"
    },
    {
        id: 18,
        url: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741455509/all1_uqmzl3.jpg",
        displayToMain: true,
        roomType: "all"
    },
]

export const allImageMainPage = allImage
    .filter(image => image.displayToMain === true)
    .map(image => image.url);

export const roomTypeDetailsStandard = [
    "Balcony for relaxation",
    "Terrace with views",
    "Ideal for your travel group",
    "1 Room for 2 Guests",
    "Common Dining available"
]

export const roomTypeDetailsDelux = [
    "Terrace with views",
    "1 Room for 2 Guests",
    "Common Dining available"
]

export const roomTypeDetailsDouble = [
    "Terrace with views",
    "Ideal for your travel group",
    "1 Room for 2 Guests",
    "Common Dining available"
]

export const roomTypeMain = `The Deluxe King Room is spacious and beautifully appointed. 
                            A unique blend of contemporary design and attention to detail 
                            are the rooms are the perfect choice for business and leisure travelers. 
                            Each room is fitted with modern amenities like Wifi, wardrobe, 
                            laundry service, attached bathroom with essential toiletries.`

// from google drive fo test
// export const allImageMainPage = ['https://drive.google.com/uc?export=view&id=1iWSvJK2m_fG3Fjt7fa6XutOFT8n9HAkD']
// export const allImageMainPage = ['https://drive.usercontent.google.com/download?id=1iWSvJK2m_fG3Fjt7fa6XutOFT8n9HAkD&export=view&authuser=0']