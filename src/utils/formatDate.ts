type formatSpecificDateProps = { day: number; month: string; year: number };
type MonthTypeProps = "short" | "numeric" | "2-digit" | "long" | "narrow";

export const formatSpecificDate = (
  date: Date,
  monthType: MonthTypeProps = "short"
): formatSpecificDateProps => {
  const day = date.getDate(); // Day of the month
  const month = date.toLocaleString("default", { month: monthType }); // Short month name (e.g., Jan)
  const year = date.getFullYear(); // Full year
  return { day: day, month: month, year: year };
};

export const LATESTPOST = [
  {
    title: "We’ve Been Nominate...",
    content: "Advice, News",
    date: { year: 2022, month: 1, day: 10 },
  },
  {
    title: "We Were Invited to the Ho...",
    content: "Advice, News",
    date: { year: 2022, month: 1, day: 10 },
  },
  {
    title: "Tidal Treks MD Present...",
    content: "Advice, News",
    date: { year: 2022, month: 11, day: 29 },
  },
  {
    title: "Mother’s Day Sunday...",
    content: "Advice, News",
    date: { year: 2022, month: 2, day: 22 },
  },
  {
    title: "Tidal Treks MD Present...",
    content: "Advice, News",
    date: { year: 2022, month: 11, day: 29 },
  },
];

export const LINKS = [
  { title: "HOME", link: "/" },
  { title: "BOOK A CRUISE", link: "/book-a-cruise" },
  { title: "MENUS", link: "/menus" },
  { title: "PRIVATE EVENTS", link: "/private-events" },
  { title: "BUSINESS EVENTS", link: "/business-events" },
  { title: "ROUTE", link: "/route" },
  { title: "GALLERY", link: "/gallery" },
  // { title: "GIFT CARDS", link: "/gift-card" },
  { title: "BLOG", link: "/blog" },
];

export const EVENTACTIVITYLINK = [
  // {
  //   name: "Evening dinner cruise",
  //   src: "/book-lunch-dinner-wpcf_368x212-1.jpg",
  //   link: "/",
  // },
  // {
  //   name: "Sunday lunch cruises",
  //   src: "/IMG_1987-wpcf_368x212.jpg",
  //   link: "/",
  // },
  // {
  //   name: "Afternoon tea cruises",
  //   src: "/2018-11-06-at-17.30.366-1-wpcf_368x212.jpeg",
  //   link: "/",
  // },
  {
    name: "valentines cruises",
    src: "/IMG_5071-wpcf_368x212.jpeg",
    link: "/valentines-cruise",
  },
  {
    name: "private events",
    src: "/IMG_1603.JPG",
    link: "/private-events",
  },
  {
    name: "business events",
    src: "/IMG_1601.JPG",
    link: "/business-events",
  },
];

export const ACTIVITY = [
  {
    description:
      "Discover breathtaking waterways and unforgettable journeys with Tidal Treks’ unique cruises!",
    src: "/IMG_1603.JPG",
  },
  {
    description:
      "Indulge in a flavorful meal surrounded by captivating and picturesque landscapes.",
    src: "/usp-2.jpg",
  },
  {
    description:
      "Welcome aboard the purpose-built Tidal treks event center, perfect for hosting gatherings of any size.",
    src: "/IMG_1598.JPG",
  },
];

export const EVENTROUTE = [
  {
    title: "Discover Coastal Beauty with Tidal Treks",
    description: `Immerse yourself in breathtaking waterfront views, where history
              meets the beauty of nature. Whether you're seeking adventure or
              tranquility, our cruises promise a unique perspective of the world
              around you—an experience you’ll treasure forever.`,
    src: "/usp-albert-dock.jpg",
  },
  {
    title: "Host Your Perfect Event with Tidal Treks",
    description: `With flexible seating, audio-visual facilities, exceptional
              catering, and an on-board bar, Tidal Treks provides the perfect
              setting for unforgettable private or corporate events, ensuring a
              unique and memorable experience on the water.`,
    src: "/usp-seating-760x398.jpg",
  },
  {
    title: "Savor Delicious Meals with Tidal Treks",
    description: `Indulge in our expertly crafted set menu, designed to suit every
              taste. As you cruise in tranquility, our dedicated staff will
              serve your meal, perfectly paired with drinks, for an
              unforgettable dining experience on the water.`,
    src: "/AdobeStock_78931456-760x398.jpeg",
  },
];

export const EVENTVENUE = [
  {
    title: "Birthday Parties",
    description: `We provide the perfect venue for landmark birthday parties whether it’s a 21st or an 80th! Our team will help you arrange catering, entertainment, decorations and drinks for a night to be remembered.`,
    src: "/birthday-parties-760x398.jpg",
    amount: "From £25 per person",
  },
  {
    title: "Wedding Receptions",
    description: `If you are looking for a special and intimate wedding reception venue then we can help. Enjoy the stunning views of the Albert Dock whilst you celebrate in style with friends and family on a relaxing cruise.`,
    src: "/wedding-receptions-760x398.jpg",
    amount: "From £25 per person",
  },
  {
    title: "Christenings",
    description: `Your child’s christening is a very special occasion shared with close friends and family. Celebrate this special event with a cruise on Tida Treks. Our team will work with your to create your perfect event.`,
    src: "/christenings-communions-760x398.jpg",
    amount: "From £25 per person",
  },
  {
    title: "General Private Events",
    description: `We can host a wide range of other private events including reunions, engagement parties and many more. Contact our team to discuss your exact requirements and we’ll work with you to create the perfect event.`,
    src: "/other-personal-events-760x398.jpg",
    amount: "From £25 per person",
  },
];
export const EVENTBUSINESS = [
  {
    title: "CHRISTMAS PARTY",
    description: `Make your Christmas party unforgettable with our expert planning. Tida Treks offers a magical venue for festive celebrations, perfect for creating lasting memories. Let us handle every detail while you enjoy a flawless and spacious event`,
    src: "/Business-Events-04-760x398.jpg",
    amount: "From £25 per person",
  },
  {
    title: "OFFICE PARTIES",
    description: `Planning a memorable celebration for your team? Let us create a unique experience on board. Our expert team will tailor every detail of the event to match your vision, ensuring an unforgettable occasion for your staff.`,
    src: "/Business-Events-02-760x398.jpg",
    amount: "From £25 per person",
  },
  {
    title: "meetings & presentation",
    description: `Need a unique venue for your next meeting or networking event? Book The Floating Grace! Equipped with full audio-visual facilities, WiFi, and power outlets, it’s the perfect space to inspire creativity and connect in style.`,
    src: "/other-personal-events-760x398.jpg",
    amount: "From £25 per person",
  },
];

export const EVENTSFOOD = [
  {
    show: true,
    title: " Evening Dinner Cruise",
    date: "Wednesday to Saturday",
    description: `Our evening dinner cruises provide a special and atmospheric dining experience, perfect for a relaxed evening with friends and family or a romantic meal with a significant other. Board the boat at the Albert Dock, our staff will then serve your two course meal as you peacefully cruise through Liverpool’s historic docks.`,
    footer: `Please provide us with advanced notice if any member of your party have allergies or special dietary requirements.`,
    src: "/AdobeStock_78931456-760x398.jpeg",
    lists: [
      "2 hour evening dinner cruise",
      "2 course dinner",
      "On-board bar",
      "Board at 7pm",
      "Set sail at 7:30pm",
      "Returns at 9pm",
    ],
    amount: 35,
  },
  {
    show: false,
    title: "Sunday Lunch Cruise",
    date: "Sunday",
    description: `For a different take on the classic Sunday lunch experience step aboard Tida Treks for a relaxing cruise. Our talented chefs prepare a tasty two-course set lunch, with children’s menus available, so there really is something for everyone. Board the boat at the Albert Dock and enjoy a relaxing cruise down Liverpool’s historic docks as our staff serve your meal. Best enjoyed with friends and family.`,
    footer: `Please provide us with advanced notice if any member of your party have allergies or special dietary requirements.`,
    src: "/Book-A-Cruise-09-368x328.jpg",
    lists: [
      "2 hour lunch cruise",
      "2 course lunch",
      "On-board bar",
      "Option 1",
      "Board at 12pm",
      "Set sail at 12:30pm",
      "Returns at 2pm",
      "Option 2",
      "Board at 3pm",
      "Set sail at 3:30pm",
      "Returns at 5pm",
    ],
    amount: 25,
  },
  {
    show: false,
    title: "Afternoon Tea Cruise",
    date: "Monday & Tuesday",
    description: `Enjoy a delightful afternoon tea experience with a twist on Tida Treks. Our talented chefs prepare a selection of sandwiches, cakes, and scones, served with tea or coffee. Board the boat at the Albert Dock and enjoy a relaxing cruise down Liverpool’s historic docks as our staff serve your meal. Best enjoyed with friends and family.`,
    footer: `Please provide us with advanced notice if any member of your party have allergies or special dietary requirements.`,
    src: "/Afternoon-Tea-Cruise-368x328.jpg",
    lists: [
      "2 hour afternoon tea cruise",
      "Afternoon tea",
      "On-board bar",
      "Board at 12pm",
      "Set sail at 12:30pm",
      "Returns at 2pm",
    ],
    amount: 20,
  },
];

export const GALLERY = [
  {
    title: "Rotary club dinner",
    date: new Date(2017, 8, 15),
    src: [
      "/5.jpeg",
      "/birthday-parties-760x398.jpg",
      "/Business-Events-02-760x398.jpg",
      "/Business-Events-04-760x398.jpg",
      "/christenings-communions-760x398.jpg",
      "/FG-Saloon-new-chairs-cropped.jpg",
      "/IMG_1598.JPG",
      "/IMG_1601.JPG",
      "/IMG_1603.JPG",
      "/other-personal-events-760x398.jpg",
      "/personal-events-splash-image.jpg",
      "/usp-albert-dock.jpg",
      "/usp-seating-760x398.jpg",
      "/wedding-receptions-760x398.jpg",
    ],
  },
  {
    title: "Christiening",
    date: new Date(2017, 8, 15),
    src: [
      "/3.jpeg",
      "/9-768x576.jpeg",
      "/11-768x576.jpeg",
      "/12-768x576.jpeg",
      "/13-768x576.jpeg",
      "/14-768x432.png",
      "/15-768x432.png",
      "/16-768x432.png",
      "/IMG_1603.JPG",
      "/4-768x576.jpeg",
    ],
  },
  {
    title: "The boat",
    date: new Date(2016, 10, 1),
    src: [
      "/IMG_2488.jpg",
      "/book-business.jpg",
      "/IMG_2042-1-768x576.jpg",
      "/IMG_1923-768x576.jpg",
      "/IMG_1924-768x348.jpg",
      "/IMG_1978-1-768x576.jpg",
      "/IMG_2488-768x576.jpg",
    ],
  },
  {
    title: "21st birthday party",
    date: new Date(2017, 8, 15),
    src: [
      "/image1.jpeg",
      // "/8-wpcf_368x212.jpeg",
      "/IMG_2056-240x180.jpg",
      "/IMG_2055-240x180.jpg",
      "/IMG_2053-240x180.jpg",
      "/IMG_2052-240x180.jpg",
      "/IMG_2042-240x180.jpg",
      "/IMG_2059-240x180.jpg",
      "/IMG_2058-240x180.jpg",
    ],
  },
  {
    title: "Free mason event",
    date: new Date(2017, 8, 15),
    src: [
      "/IMG_1965.jpg",
      "/IMG_1966-240x180.jpg",
      "/IMG_1933-240x180.jpg",
      "/IMG_1931-240x180.jpg",
      "/IMG_1926-240x180.jpg",
      "/IMG_1991-240x180.jpg",
      "/IMG_1989-240x180.jpg",
      "/IMG_1987-240x180.jpg",
      "/IMG_1984-240x180.jpg",
      "/IMG_1983-240x180.jpg",
      "/IMG_1982-240x180.jpg",
      "/IMG_1977-240x180.jpg",
      "/IMG_1969-240x180.jpg",
    ],
  },
  {
    title: "Halloween party",
    date: new Date(2016, 9, 29),
    src: [
      "/IMG_0051.jpg",
      "/IMG_0047-240x180.jpg",
      "/IMG_0052-240x180.jpg",
      "/IMG_0053-250x126.jpg",
      "/IMG_0054-240x180.jpg",
      "/IMG_0055-240x180.jpg",
      "/IMG_0056-240x180.jpg",
      "/IMG_0057-240x180.jpg",
      "/IMG_0058-240x180.jpg",
      "/IMG_0059-240x180.jpg",
      "/IMG_0060-240x180.jpg",
      "/IMG_0062-240x180.jpg",
      "/IMG_0063-240x180.jpg",
      "/IMG_0066-240x180.jpg",
      "/IMG_0039-240x180.jpg",
    ],
  },
];

export const BLOGPOST = [
  {
    title: "Welcome to Tidal Treks: Your Adventure Awaits!",
    src: "/Business-Events-04-760x398.jpg",
    date: new Date(2020, 1, 11),
    description: `Are you ready to embark on a journey like no other? Tidal Treks is here to redefine your idea of adventure and relaxation, offering unforgettable boat cruise experiences that promise to take your breath away. Whether you're craving the thrill of the open seas, a tranquil escape from the everyday hustle, or a unique setting to celebrate life's moments, Tidal Treks is your perfect host. At Tidal Treks, we’re more than just a boat cruise service; we’re curators of memories. Our cruises are designed to immerse you in the wonders of nature while delivering an unparalleled sense of luxury and comfort. Picture yourself gliding across serene waters, feeling the gentle sea breeze on your face, and witnessing breathtaking views that stay etched in your heart forever. For the thrill-seekers, our adventure cruises take you to explore hidden coves, unspoiled shores, and the mysteries of the ocean. Dive into the excitement and discover the untamed beauty of the waters`,
  },
  {
    title: "Celebrating the Launch of Tidal Treks!",
    src: "/4-768x576.jpeg",
    date: new Date(2016, 9, 29),
    description: `The moment we’ve all been waiting for has finally arrived—Tidal Treks is officially setting sail! We couldn’t be more thrilled to welcome you to the beginning of what promises to be an extraordinary adventure. From the gentle lapping of waves to the exhilaration of exploring hidden treasures of the sea, Tidal Treks is here to make your dreams of life on the water a reality. We’re incredibly grateful for the support and enthusiasm we’ve received as we’ve prepared for this launch. From our passionate team to the wonderful community that has embraced our vision, Tidal Treks is the product of countless hours of hard work, collaboration, and a shared love for the ocean. Thank you for believing in us and being a part of this milestone.`,
  },
];

export const BOOKINGS = [
  {
    id: "1",
    title: "SUNDAY LUNCH CRUISE",
    date: "Sunday",
    title2:
      "Sunday Roast Dinner Cruise Book during Dec Go to Christmas Dinner Cruise or call to book 07540373838",
    description: "",
    details: "£27per Adult | All ages l 2 Hours l Vegan options available!",
    infoTitle: "2 Course Sunday Roast Cruise",
    info: [
      "Every Sunday",
      "2 hour Roast Dinner cruise",
      "Historical Guided Cruise",
      "2 course lunch",
      "On-board bar",
      "Music on board",
    ],
    rates: { adult: 27, child: 12 },
    about:
      "For a different take on the classic Sunday lunch experience step aboard The Tidal treks for a relaxing cruise. Our talented chefs prepare a tasty Two-course set lunch, with children’s menus available, so there really is something for everyone. Board the boat at the Albert Dock and enjoy a relaxing cruise down Liverpool’s historic docks as our staff serve your meal. Best enjoyed with friends and family.",
    options: "Vegan & Veggie options available",
    src: "/book-lunch-dinner-wpcf_368x212-1.jpg",
    img: "/Book-A-Cruise-09-368x328.jpg",
  },
  {
    id: "2",
    title: "EVENING DINNER CRUISE",
    title2: "Evening Dinner Cruise",
    date: "Wednesday to Saturday",
    description:
      "Tidal treks Corner of Salthouse Quay & Gower Street Salthouse Dock, Royal Albert Dock Complex.",
    details:
      "Best-seller! | £38 per Adult | All ages l  2 Hours l Board at 19:00 | Vegan options available!",
    infoTitle: "2 Course Evening Dinner Cruise",
    info: [
      "2 hour evening dinner cruise",
      "Every day from Wednesday to Saturday",
      "2-course dinner",
      "On-board bar",
      "Board at 19:00",
      "Set sail at 19:30",
      "Return between 21:00- 21:30",
    ],
    rates: { adult: 38, child: 12 },
    about:
      "Our evening dinner cruises provide a special and atmospheric dining experience, perfect for a relaxed evening with friends and family or a romantic dinner with a significant other. Board the boat at the Albert Dock. Our staff will then serve your two-course dinner as you peacefully cruise through Liverpool’s historic docks.",
    options: "Vegan options available!",
    src: "/IMG_1987-wpcf_368x212.jpg",
    img: "/AdobeStock_78931456-760x398.jpeg",
  },
  {
    id: "4",
    title: "AFTERNOON TEA CRUISE",
    title2: "Afternoon Tea Cruise on Board Tidal treks",
    description: "",
    date: "Monday & Tuesday",
    details: "£22 per Adult l All ages l 2 Hours",
    infoTitle: "Afternoon Tea & Biscuit Historical Guided Cruise",
    info: ["From Wednesday to Saturday", "Historical guided tour included"],
    rates: { adult: 22, child: 10 },
    about:
      "Enjoy an afternoon historical guided cruise on board Tidal treks whilst enjoying tea, cream scones, cakes and sandwiches. We sail half an hour after the boarding time.",
    options: "",
    src: "/2018-11-06-at-17.30.366-1-wpcf_368x212.jpeg",
    img: "/Afternoon-Tea-Cruise-368x328.jpg",
  },

  {
    id: "3",
    title: "MID-MORNING CRUISE",
    title2: "Morning Tea & Sandwiches Cruise",
    date: "Monday & Tuesday",
    description: "",
    details: "£12 per Adult | Board at 10:00",
    infoTitle: "Mid Morning Tea & Biscuit Historical Guided Cruise",
    info: [
      "Every weekday from Monday to Friday",
      "1 hour tea & biscuit cruise",
      "Historical guided tour included",
      "Board at 10:00 am",
      "Set sail at 10:30 am",
      "Return at 11:30 am",
    ],
    rates: { adult: 12, child: 4 },
    about:
      "Enjoy a mid morning 1 hour historical guided cruise on board Tidal treks whilst enjoying a tea & biscuit. Boarding begins at 10am, as we set sail at 10:30am.",
    options: "",
  },
];
