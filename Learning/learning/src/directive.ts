export interface Directives{
    id: number;
    name: string;
    image: string;
    price: string;
}

export const directive=[
    {
        "id" : 1,
        "name": "Realme 8",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61s4+WrPGoL._SY355_.jpg",
        "price": "$140"
    },
    {
        "id" : 2,
        "name": "iPhone 14 Pro",
        "image": "https://ivenus.in/wp-content/uploads/2022/09/iphone-14-Pro-family-2022-1.png",
        "price": "$1200"
    },
    {
        "id" : 3,
        "name": "Samsung Galaxy note 10",
        "image": "https://image-us.samsung.com/us/smartphones/galaxy-note10/v1/images/galaxy-note10_highlights_mobile_kv.jpg",
        "price": "$130"
    },
    {
        "id" : 4,
        "name": "Vivo Y21",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-Iv_zErXBNCKTr6cr2pumibuosrJ6s2AVA&usqp=CAU",
        "price": "$100"
    },
    {
        "id" : 5,
        "name": "Poco X3 Pro",
        "image": "https://www.notebookcheck.net/typo3temp/_processed_/f/b/csm_4_zu_3_Teaser_neu_8f394e99a8.jpg",
        "price": "$130"
    },
    {
        "id" : 6,
        "name": "Xiaomi 12 Pro",
        "image": "data:image/jpeg;base64,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",
        "price": "$1200"
    },
    {
        "id" : 7,
        "name": "Redmi note 10 Pro",
        "image": "https://i02.appmifile.com/558_operator_in/12/08/2021/872bfbfc22ae0c5ab4224883a1cc060f.png",
        "price": "$130"
    },
    {
        "id" : 8,
        "name": "Samsung S21 FE",
        "image": "https://images.samsung.com/is/image/samsung/p6pim/in/sm-g990ezwginu/gallery/in-galaxy-s21-fe-g990-sm-g990ezwginu-thumb-530606604?imwidth=480",
        "price": "$100"
    },
    {
        "id" : 9,
        "name": "OPPO A5",
        "image": "https://i.gadgets360cdn.com/products/large/1530947258_635_oppo_a5.jpg?downsize=*:360",
        "price": "$140"
    },
    {
        "id" : 10,
        "name": "Nothing 2",
        "image": "https://m-cdn.phonearena.com/images/phones/83426-940/Nothing-Phone-1.jpg",
        "price": "$1200"
    },
    {
        "id" : 11,
        "name": "Huawei Mate 30 Pro",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DHfzWdodgaFaoKmvvmwwjavnc4tLy895V416eWZidB6REAinKOlEL4MADSgcg2osPVI&usqp=CAU",
        "price": "$130"
    },
    {
        "id" : 12,
        "name": "Motorola Edge 30 Ultra",
        "image": "https://fscl01.fonpit.de/devices/56/2456.png",
        "price": "$100"
    },
    {
        "id" : 13,
        "name": "HTC U20 5G",
        "image": "https://www.gizmochina.com/wp-content/uploads/2020/06/HTC-U20-5G-1.jpg",
        "price": "$140"
    },
    {
        "id" : 14,
        "name": "Sony Xperia 1 iv",
        "image": "https://cdn.shopify.com/s/files/1/1034/1611/products/1652237429_1702930_700x.jpg?v=1676538911",
        "price": "$1200"
    },
    {
        "id" : 15,
        "name": "Rog phone 5s",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5s.jpg",
        "price": "$130"
    },
    {
        "id" : 16,
        "name": "Nokia G22",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/nokia-g22-2023.jpg",
        "price": "$100"
    }
]