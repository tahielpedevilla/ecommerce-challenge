const mock = [
  {
    id: 1,
    category: "Men",
    model: "Nike Air Force 1 '07",
    brand: "Sneaker Company",
    description:
      "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    price: 125,
    oldPrice: 250,
    off: 50,
    stock: 7,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc4622c4-2769-4665-aa6e-42c974a7705e/air-force-1-07-mens-shoes-5QFp5Z.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e248cb89-2222-49d9-a9d5-d38193863e79/air-force-1-07-mens-shoes-5QFp5Z.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0ac482bd-f8e4-4d59-a652-4a50de7dbce5/air-force-1-07-mens-shoes-5QFp5Z.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7cd0845e-4eba-4ccf-8237-bc47f1e31f3e/air-force-1-07-mens-shoes-5QFp5Z.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc4622c4-2769-4665-aa6e-42c974a7705e/air-force-1-07-mens-shoes-5QFp5Z.png",
  },
  {
    id: 2,
    category: "Men",
    model: "Nike Air Max 270",
    brand: "Sneaker Company",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    price: 119,
    oldPrice: 275,
    off: 25,
    stock: 21,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/njyetqigdbjwfgul5ssx/air-max-270-mens-shoes-KkLcGR.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/teknzwtqlkelexo5okx0/air-max-270-mens-shoes-KkLcGR.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ekooqxmzujps9pj0vlak/air-max-270-mens-shoes-KkLcGR.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png",
  },
  {
    id: 3,
    category: "Men",
    model: "Nike Air VaporMax 2021 FK",
    brand: "Sneaker Company",
    description:
      "Spring is in the Air—and also in your step! The VaporMax Air unit uses the pressure from your stride to create a springy bounce with every move. The Flyknit upper is breathable and structured to help keep your feet cool and secure.",
    price: 210,
    oldPrice: 405,
    off: 65,
    stock: 23,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3497e9b8-55cb-47ea-a436-83562ae25506/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/98efa091-32b6-4843-9a83-e3079d226ce4/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/870a1269-1c2d-4751-b037-1563f02d49c8/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b9745508-0e5e-4e45-9073-cfa5249bc276/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3497e9b8-55cb-47ea-a436-83562ae25506/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
  },
  {
    id: 4,
    category: "Men",
    model: "Nike Pegasus Trail 3 GORE-TEX",
    brand: "Sneaker Company",
    description:
      "Journey off the beaten path and into wet weather with the Nike Pegasus Trail 3 GORE-TEX. It's made with the same cushioned comfort you love, plus tough traction and improved midfoot construction for secure, neutral support. The waterproof upper helps keep you moving on rocky trails even when stormy conditions try to slow you down. Don't let the rain stop you, lace up and take on the elements.",
    price: 160,
    oldPrice: 190,
    off: 5,
    stock: 12,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/64fd2cb4-dbac-4d6f-b9e0-029c9451e55f/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes-HG005k.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ef0b210e-ce12-41e3-9472-1628311aaf39/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes-HG005k.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a184b6d6-358a-4b57-a565-5b6ed50dc53f/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes-HG005k.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fb6f468c-16a0-428e-a588-0de8a8e4b1e8/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes-HG005k.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/64fd2cb4-dbac-4d6f-b9e0-029c9451e55f/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes-HG005k.png",
  },
  {
    id: 5,
    category: "Men",
    model: "Nike Air VaporMax 2021 FK",
    brand: "Sneaker Company",
    description:
      "Every Air Max has a story. For the Air Max Plus, that story begins on a beach. A prominent arch draws inspiration from a whale’s tail, while wavy plastic overlays are a nod to palm trees blowing in the breeze. Nike Air units in the heel and forefoot create a Tuned Air experience that offers incredible stability and unbelievable cushioning. Lace them up and step into defiant style.",
    price: 175,
    oldPrice: 230,
    off: 30,
    stock: 9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d373e88e-83f7-4c8b-8870-74dd12ed4ed7/air-max-plus-mens-shoes-x9G2xF.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/87d7f156-14a4-48d5-9594-bb63db387375/air-max-plus-mens-shoes-x9G2xF.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4752946c-d959-4244-82d8-c27fe98725a8/air-max-plus-mens-shoes-x9G2xF.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/62858c13-717c-437e-a308-80f6b7f51009/air-max-plus-mens-shoes-x9G2xF.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d373e88e-83f7-4c8b-8870-74dd12ed4ed7/air-max-plus-mens-shoes-x9G2xF.png",
  },
  {
    id: 6,
    category: "Men",
    model: "Nike Free Crater Trail Moc N7",
    brand: "Sneaker Company",
    description:
      "Looking to Indigenous wisdom to influence design. The Nike Free Crater Trail Moc N7 celebrates the proud history of Native Americans and Indigenous communities. Its intricately woven design honors Native basket making. Suede leather adds a premium touch while the unique lacing system adds stability to the traditional moc design.",
    price: 150,
    oldPrice: 175,
    off: 15,
    stock: 15,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82b2604c-7dec-44ef-a6b7-2ced0716410c/free-crater-trail-moc-n7-shoes-S4KKr0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ba2beb4e-c929-4e18-8fd7-bb51902fb314/free-crater-trail-moc-n7-shoes-S4KKr0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a310629c-deed-4e9e-89a7-980ee73e9b48/free-crater-trail-moc-n7-shoes-S4KKr0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/363d2031-5b0b-4b44-88dc-58c9e730c5a5/free-crater-trail-moc-n7-shoes-S4KKr0.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82b2604c-7dec-44ef-a6b7-2ced0716410c/free-crater-trail-moc-n7-shoes-S4KKr0.png",
  },
  {
    id: 7,
    category: "Women",
    model: "Nike React Miler 2 Shield",
    brand: "Sneaker Company",
    description:
      "Don't let the rain stop your daily running routine. We took the classic look of your favorite runner and added a warm upper with a weatherized coating. Our goal was to keep your feet dry in damp conditions, so we added details like a gusseted and insulated tongue. And with a supportive design built for maximum shock absorption, each step feels stable. Tough, tire-inspired traction creates grip to help keep you moving on slick streets.",
    price: 126.97,
    oldPrice: 140,
    off: 10,
    stock: 9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef1e3e66-22ba-4494-8cf7-c6c8c9166531/react-miler-2-shield-womens-weatherized-road-running-shoes-vSxHRL.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4311a1d8-246c-4f72-8b17-e30c66fedfb5/react-miler-2-shield-womens-weatherized-road-running-shoes-vSxHRL.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9ed45497-e84d-4075-9f44-9d5ce568ad08/react-miler-2-shield-womens-weatherized-road-running-shoes-vSxHRL.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/249cd04e-41dc-4edf-9c64-0d4e7a154d87/react-miler-2-shield-womens-weatherized-road-running-shoes-vSxHRL.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef1e3e66-22ba-4494-8cf7-c6c8c9166531/react-miler-2-shield-womens-weatherized-road-running-shoes-vSxHRL.png",
  },
  {
    id: 8,
    category: "Women",
    model: "Nike Court Legacy",
    brand: "Sneaker Company",
    description:
      "Honoring a history rooted in tennis culture, the Nike Court Legacy brings you a comfy slip-on in a modern, street-worthy design. Made with soft, durable fabric and featuring heritage stitching and a mini-Swoosh design, it lets you blend sport and fashion.",
    price: 55,
    oldPrice: 100,
    off: 45,
    stock: 43,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e21d25ad-04c3-4a7d-a005-a635c4a84396/court-legacy-womens-slip-on-39kf7S.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b0698d2a-da45-4513-ba9b-7af1419434cf/court-legacy-womens-slip-on-39kf7S.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/290aa6fd-bf8d-4741-ae1c-eac128527ad4/court-legacy-womens-slip-on-39kf7S.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0d327ecf-b3dc-4512-836d-6e21526cf4d8/court-legacy-womens-slip-on-39kf7S.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e21d25ad-04c3-4a7d-a005-a635c4a84396/court-legacy-womens-slip-on-39kf7S.png",
  },
  {
    id: 9,
    category: "Women",
    model: "Nike ZoomX SuperRep Surge",
    brand: "Sneaker Company",
    description:
      "The Nike ZoomX SuperRep Surge is built for classes and workouts that keep you moving. From the treadmill to the rowing machine to strength training, you get the amazing energy return of ultralight Nike ZoomX foam.",
    price: 126.97,
    oldPrice: 140,
    off: 20,
    stock: 13,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/759cb586-938e-47d3-b773-0a42d1aeb3c7/zoomx-superrep-surge-womens-endurance-class-shoes-88S52W.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c28190c2-dbc5-44a3-85b6-24b746c02643/zoomx-superrep-surge-womens-endurance-class-shoes-88S52W.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c0ed7fa5-152e-4d91-83ba-e8137e24f5d9/zoomx-superrep-surge-womens-endurance-class-shoes-88S52W.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a70b9e3a-9baa-40ea-9d0b-b572072277af/zoomx-superrep-surge-womens-endurance-class-shoes-88S52W.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/759cb586-938e-47d3-b773-0a42d1aeb3c7/zoomx-superrep-surge-womens-endurance-class-shoes-88S52W.png",
  },
  {
    id: 10,
    category: "Women",
    model: "Nike Burrow SE",
    brand: "Sneaker Company",
    description:
      "There's nothing like cozying up to a campfire. Nothing like adventure. But also, there's nothing like the comfort of home. The Nike Burrow lets you bridge worlds. Slip them on and get lounging or step out of the tent and enjoy the fresh mountain air. Its fleece-like lining helps keep you warm. The marshmallow soft foam midsole/outsole with grippy traction pattern adds spring to your step.",
    price: 60,
    oldPrice: 110,
    off: 60,
    stock: 13,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c26a6ee3-257b-491a-81e8-9306eb733759/burrow-womens-slipper-Mwlm1j.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d5b251d6-3df3-410a-843d-2c01f24108b1/burrow-womens-slipper-Mwlm1j.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ef5ec57a-c7cf-4052-a6dd-73a376fca30d/burrow-womens-slipper-Mwlm1j.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f713d2d6-b35e-4fb6-9a3b-6044b7aaab7a/burrow-womens-slipper-Mwlm1j.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c26a6ee3-257b-491a-81e8-9306eb733759/burrow-womens-slipper-Mwlm1j.png",
  },
  {
    id: 11,
    category: "Women",
    model: "Nike Air Force 1 High Utility 2.0",
    brand: "Sneaker Company",
    description:
      "Crafted to take you places, the Nike Air Force 1 High Utility 2.0 brings a tough, military-like inspiration to AF1 style. Its heavy-duty tumbled leather upper with coating is designed to help you stay dry. Large, winter-ready lugs on the outsole give you traction without added height. The strap uses a sleek metal hook emblematic of traditional military dress.",
    price: 125,
    oldPrice: 210,
    off: 0,
    stock: 22,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f3733d25-3f73-4a96-aebd-625098b25198/air-force-1-high-utility-2-womens-boot-jLkHtj.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3be118f5-1558-40d3-8e86-3e7aa639b7a9/air-force-1-high-utility-2-womens-boot-jLkHtj.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/40e4612a-a958-49eb-99c4-1100785c8884/air-force-1-high-utility-2-womens-boot-jLkHtj.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a890c447-50dd-438e-825e-d22514be3cae/air-force-1-high-utility-2-womens-boot-jLkHtj.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f3733d25-3f73-4a96-aebd-625098b25198/air-force-1-high-utility-2-womens-boot-jLkHtj.png",
  },
  {
    id: 12,
    category: "Women",
    model: "Nike Air Force 1 '07",
    brand: "Sneaker Company",
    description:
      "The '82 hoops original returns with peace, love and, of course, a cushy Air-Sole unit. Soft suede, custom embroidery and a peace-sign tongue complete the groovy vibe.",
    price: 110,
    oldPrice: 140,
    off: 25,
    stock: 15,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/51862330-f221-4d70-829e-06543748854d/air-force-1-07-womens-shoes-42nTfv.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9e0d7dbc-4d47-4ad2-bc6a-c832a28fb9d4/air-force-1-07-womens-shoes-42nTfv.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ab716c20-276d-4a5b-bfd0-48c800f3fc54/air-force-1-07-womens-shoes-42nTfv.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e423ee9d-c833-441b-ae6f-4d39eaed7ab9/air-force-1-07-womens-shoes-42nTfv.png",
    ],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/51862330-f221-4d70-829e-06543748854d/air-force-1-07-womens-shoes-42nTfv.png",
  },
];

export default mock;
