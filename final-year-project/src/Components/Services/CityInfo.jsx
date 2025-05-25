import React from "react";
import dwar2 from "../../assets/dwar2.png"

const places = [
  {
    title: "Mehrangarh Fort",
    description: (
      <p>
        Mehrangarh Fort, located in Jodhpur, Rajasthan, is one of India's
        largest and most majestic forts, built in 1459 by Rao Jodha. Perched
        atop a rocky hill, it offers panoramic views of the Blue City and houses
        a museum showcasing royal artifacts.
      </p>
    ),
    image: "Mehrangarh Fort.jpg",
  },
  {
    title: "Umaid Bhavan Palace",
    description: (
      <p>
        Umaid Bhavan Palace in Jodhpur is one of the world's largest private
        residences, built between 1928 and 1943. It blends Indian and European
        architectural styles and now serves as a luxury hotel, museum, and royal
        residence.{" "}
      </p>
    ),
    image: "Umaid Bhavan Palace.jpg",
  },
  {
    title: "Jaswant Thada",
    description: (
      <p>
        Jaswant Thada is a stunning white marble cenotaph built in 1899 in
        Jodhpur, Rajasthan, in memory of Maharaja Jaswant Singh II. Often called
        the "Taj Mahal of Marwar," it features intricate carvings and peaceful
        gardens overlooking the Mehrangarh Fort.
      </p>
    ),
    image: "Jaswant Thada.jpg",
  },
  {
    title: "Mandore Gardens",
    description: (
      <p>
        Mandore Gardens, situated approximately 9 kilometers north of Jodhpur,
        Rajasthan, is a historic site that once served as the capital of the
        Marwar kingdom before the establishment of Jodhpur city. The gardens are
        renowned for their collection of royal cenotaphs (chhatris), temples,
        and the Hall of Heroes, which features 16 figures carved from a single
        rock, commemorating the region's folk heroes .
      </p>
    ),
    image: "Mandore Gardens.jpg",
  },
];

const data = [
  {
    title: "Sardar Market",
    description: (
      <p>
        Sardar Market, located near the iconic Ghanta Ghar in Jodhpur, is a
        vibrant bazaar offering handicrafts, textiles, spices, and traditional
        Rajasthani items, reflecting the city's rich cultural heritage.
      </p>
    ),
    img: "sardar_market.jpg",
  },
  {
    title: "Bandhani Dupattas",
    description: (
      <p>
        Jodhpur is famous for its vibrant Bandhani dupattas, crafted using
        traditional tie-dye techniques. These colorful fabrics reflect
        Rajasthan’s rich textile heritage and are popular for their intricate
        patterns and elegance.
      </p>
    ),
    img: "bandhani.jpg",
  },
  {
    title: "Mojaris",
    description: (
      <p>
        Jodhpur mojaris are traditional handcrafted leather footwear known for
        their intricate embroidery and vibrant designs. Comfortable and stylish,
        these mojaris showcase the city's rich artisan craftsmanship and
        cultural elegance.
      </p>
    ),
    img: "mojaris.jpg",
  },
  {
    title: "Wooden Crafts",
    description: (
      <p>
        Jodhpur is renowned for its exquisite wooden crafts, including
        intricately carved furniture, decorative items, and antiques. Skilled
        artisans create these timeless pieces, reflecting the city's rich
        heritage and traditional artistry.
      </p>
    ),
    img: "wooden_crafts.jpg",
  },
  {
    title: "Jewelry",
    description: (
      <p>
        Traditional jewelry of Jodhpur includes stunning Kundan, Meenakari, and
        Thewa designs. Crafted with intricate detailing, these ornaments reflect
        royal Rajasthani elegance and are often adorned during weddings and
        festive occasions.
      </p>
    ),
    img: "jewelry.jpg",
  },
];

const CityInfo = () => {
  return (
    <div
      className="bg-[#edeecb] font-serif text-[#693303]"
      style={{ fontFamily: "Garamond, serif" }}
    >
      {/* Header */}
      <div className="flex flex-row items-center justify-center px-8 py-4 gap-0">
        <img
          src="Screenshot_2025-05-06_103716-removebg-preview.png"
          alt="Camel"
          className="h-16 "
        />
        <h1 className="text-3xl text-center md:text-4xl font-bold text-[#693303]">
          City Information
        </h1>
        <img
          src={dwar2}
          alt="Fort Icon"
          className="h-16"
        />
      </div>

      {/* City Info Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-16 py-4 gap-6">
        <div className="lg:w-1/2">
          <img
            src="jodhpur.png"
            alt="Jodhpur"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="lg:w-1/2 bg-[#edeecb] pb-0 p-6 rounded-xl shadow-md border-[3px] border-yellow-700">
          <h2 className="text-3xl font-bold text-[#2f3b55] mb-2">JODHPUR</h2>

          <div className="border-l-4 border-yellow-700 pl-4 mb-4">
            <h3 className="text-xl font-bold text-[#2f3b55]">History</h3>
            <p className="text-base mt-1 text-justify text-wrap">
              Jodhpur, famously known as the "Blue City" of Rajasthan, was
              founded in 1459 by Rao Jodha, the chief of the Rathore clan. After
              shifting his capital from Mandore, he established Jodhpur near the
              edge of the Thar Desert. The city's strategic location on the
              ancient silk and spice route helped it flourish as a major trade
              center for opium, copper, silk, sandals, and other valuable goods.
              The imposing Mehrangarh Fort, built by Rao Jodha, still stands
              tall on a rocky hill overlooking the city, bearing witness to
              centuries of royal history and fierce battles. The fort and its
              surroundings were protected by massive stone walls with seven
              gates, each with its own historical significance. Jodhpur was once
              the capital of the Marwar Kingdom and played a key role in
              Rajputana politics. It witnessed cultural exchanges between the
              Rajputs and Mughals, which enriched its architecture, arts, and
              traditions. The city is also known for its distinctive blue
              houses, originally painted to signify Brahmin homes, but now a
              defining feature of its identity. Today, Jodhpur is a blend of
              regal heritage and vibrant culture, attracting tourists from all
              over the world who come to explore its glorious past and royal
              charm.
            </p>
          </div>

          <p className="text-base leading-relaxed">
            Jodhpur is the second-largest city in the Indian state of Rajasthan
            and is commonly known as the <strong>“Blue City”</strong> for the
            blue-painted houses in its old city area.
            <br />
            <br />
            It is also called the <strong>“Sun City”</strong> due to the
            frequent sunny weather. Dominated by the imposing Mehrangarh Fort,
            the city is renowned for its palaces, forts, temples, and vibrant
            bazaars, embodying the royal splendor of Rajasthan.
          </p>

          <div className="mt-4 flex justify-end">
            <img
              src="Screenshot_2025-05-06_103726-removebg-preview.png"
              alt="Fort Decorative"
              className="h-16"
            />
          </div>
        </div>
      </div>

      {/* Must-Visit Places */}
      <div className="px-4 md:px-16 py-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#693303]  mb-8">
          Must-Visit Places in Jodhpur
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-yellow-50 border-2 border-[#693303] rounded-xl p-4 shadow-md  text-wrap text-justify"
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#693303] mb-2">
                {place.title}
              </h3>
              <p className="text-[#3f3f3f] text-base">{place.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Local Food & Specialties */}
      <div className="bg-[#edeecb] py-10 px-4 text-[#5b2e1d]">
        <div className="max-w-4xl mx-auto border-4 border-[#5b2e1d] p-6 rounded-md shadow-lg bg-[#fefae0]">
          <h2 className="text-3xl font-bold text-center mb-6">
            Local Food & Specialties
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Must-Try Dishes:</h3>
            <div className="space-y-6  text-wrap text-justify">
              {[
                {
                  img: "/dal-baati.jpg",
                  title: "Dal Baati Churma",
                  desc: "Dal Baati Churma is a traditional Rajasthani dish featuring spicy lentils (dal), baked wheat balls (baati),and sweet crushed wheat dessert (churma).",
                },
                {
                  img: "/mirchi-bada.jpg",
                  title: "Mirchi Bada & Pyaaz Kachori",
                  desc: "Mirchi Bada and Pyaaz Kachori are iconic spicy snacks from Rajasthan, loved for their crispiness and bold, flavorful fillings.",
                },
                {
                  img: "/makhaniya-lassi.jpg",
                  title: "Makhaniya Lassi",
                  desc: "Makhaniya Lassi is a rich, creamy yogurt-based drink from Rajasthan, famously topped with a thick layer of malai (cream) and flavored with saffron and cardamom.",
                },
                {
                  img: "/gulab-jamun.webp",
                  title: "Gulab Jamun Ki Sabzi",
                  desc: "Gulab Jamun Ki Sabzi is a unique Rajasthani dish where sweet gulab jamuns are cooked in a spicy, savory gravy.",
                },
              ].map((food, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <img
                    src={food.img}
                    alt={food.title}
                    className="w-24 h-24 rounded-md object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                  />

                  <div>
                    <h4 className="text-lg font-semibold">{food.title}</h4>
                    <p>- {food.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="border-t border-[#5b2e1d] pt-6">
            <h3 className="text-xl font-bold mb-2">Best Places to Eat</h3>
            <p className="italic">(Popular restaurants, street food areas)</p>
            <div className="mt-6 flex justify-center">
              <img
                src="/street-vendor.jpg"
                alt="Street Vendor"
                className="w-32 h-auto"
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-[#edeecb] min-h-screen font-serif px-6 py-10 text-[#4a2d0d]">
        <div className="max-w-4xl mx-auto text-justify text-wrap">
          <h1 className="text-4xl font-bold text-center mb-4">
            SHOPPING & HANDICRAFTS
          </h1>

          {/* Filters
          <div className="flex justify-center mb-6">
            <div className="bg-[#e5b67c] p-4 rounded-xl shadow-md">
              <h2 className="font-bold text-center mb-2">FILTERS</h2>
              <div className="flex flex-col gap-2">
                <button className="bg-[#d95c2b] text-white rounded-full py-1 px-4">
                  Handicrafts
                </button>
                <button className="bg-[#d95c2b] text-white rounded-full py-1 px-4">
                  Textiles
                </button>
                <button className="bg-[#d95c2b] text-white rounded-full py-1 px-4">
                  Jewelry
                </button>
              </div>
            </div>
          </div> */}

          {/* Items */}
          <div className="grid gap-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl w-full h-48 object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:brightness-110 hover:animate-float hover:ring-4 hover:ring-[#4a2d0d]"
                />

                <div>
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </div>
                <div className="md:col-span-2 border-t-2 border-[#4a2d0d] border-dashed mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
