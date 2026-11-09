export const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=120b594058bb96de&rlz=1C1CHBF_en-GBPK1160PK1160&sxsrf=APpeQnueCzJIezI60KXW6sRkHT7Wn1dwZA:1783621233295&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_2jzTpCTAcridbTFPWdxG6t7G2l_cqk6eV2r-1wWNoS8h_H6I1tOBQq4x2mb9XdpDt6fnEcMCh935M03Ef0s77G1f5TQsuv1PuPVl_TjyU8Vlu2vZQ%3D%3D&q=Ether+Property+Hub+Reviews&sa=X&ved=2ahUKEwiizZjwmsaVAxUlOPsDHVSfC_sQ0bkNegQILhAF&cshid=1783621250924542&biw=1920&bih=911&dpr=1";

export const googleReviewsSummary = {
  rating: 5,
  count: 20,
} as const;

export type GoogleReview = {
  quote: string;
  author: string;
  detail: string;
  date: string;
  googleUrl: string;
};

export const googleReviews = [
  {
    quote:
      "Amazing service from Amir Brother. Very professional, communicated clearly throughout the process, responds quickly everytime, and addressed all our questions and concerns. Understood buyer requirements and delivered exactly what needed. Highly recommended for his excellent customer service.",
    author: "sujan pandey",
    detail: "Property buyer",
    date: "a week ago",
    googleUrl: "https://maps.app.goo.gl/dZXpNb2bWszwKG3r8",
  },
  {
    quote:
      "Amir was exceptionally professional throughout the journey to purchase our first SMSF home. He does not only have a wealth of knowledge in real estate to deliver the best result for the client but also has passion to educate the person along the way. He accommodates his property exploration process keeping ease and preference of his clients into an account. Personally I noticed he is doing what he loves doing. He did all the heavy lifting dealing with all the stakeholders in the process. Thank you for your service. Highly recommended!!",
    author: "Saroz Pariyar",
    detail: "SMSF buyer",
    date: "a week ago",
    googleUrl: "https://maps.app.goo.gl/X1Wx3u5dnQMJ8Dsi9",
  },
  {
    quote:
      "I've had the pleasure of working with Amir on several transactions, and he's been fantastic to deal with. He's professional, communicates clearly, and always puts his clients' best interests first. The process was smooth from start to finish, and his attention to detail made every transaction seamless. I highly recommend Amir to anyone looking for a knowledgeable, reliable, and trustworthy buyer's agent.",
    author: "Xin Zidane",
    detail: "Industry partner",
    date: "a week ago",
    googleUrl: "https://maps.app.goo.gl/vHKWKtoTHg4uGpc98",
  },
  {
    quote:
      "Professional and detail oriented throughout my 1st Property Purchase journey. Made it so much easier for us. Would go for him again.",
    author: "Shishir Luitel",
    detail: "First-home buyer",
    date: "2 weeks ago",
    googleUrl: "https://maps.app.goo.gl/X8vgR4fSxP3mwE9n6",
  },
  {
    quote:
      "We had an excellent experience working with Amir as our buyer's agent. From the very beginning, Amir was professional, knowledgeable, and always available to answer our questions. He guided us through every step of the process and made buying a property much less stressful. His market knowledge, attention to detail, and negotiation skills helped us secure a great property at a good price. We truly appreciated his honesty, patience, and dedication throughout the journey. I highly recommend Amir to anyone looking for a reliable and trustworthy buyer's agent.",
    author: "Indra Thapa",
    detail: "Property buyer",
    date: "a month ago",
    googleUrl: "https://maps.app.goo.gl/eHYvbHbB5HcT6u5i6",
  },
  {
    quote:
      "We had a great experience working with Amir Dai while buying our home. He was supportive, professional, and always available to guide us through every step of the process. His help made what could have been a stressful journey feel smooth and manageable. Thank you, Amir Dai, for all your effort and support—we truly appreciate it!",
    author: "Sadhana Poudel",
    detail: "Home buyer",
    date: "2 months ago",
    googleUrl: "https://maps.app.goo.gl/17wmLXVtEdTfumnUA",
  },
  {
    quote:
      "We had a wonderful experience with Amir during the entire process of buying our first home. He was exceptionally supportive, knowledgeable and professional. He worked hard for us and guided us in every step. Looking forward to work with him again. Highly recommended!!!",
    author: "suman baral",
    detail: "First-home buyer",
    date: "2 months ago",
    googleUrl: "https://maps.app.goo.gl/q9EGWadAiwLf8YeR8",
  },
  {
    quote:
      "I had such a great experience working with Amir. He is honestly one of the best buyer's agents I have come across who is very humble, down to earth, and easy to talk to. What really stood out was how genuine he is. He felt more like a brother than just an agent. He always had my best interest at heart and made the whole process feel comfortable and stress-free. Really appreciate his support and would definitely recommend him to anyone looking for a genuine and reliable buyer's agent.",
    author: "Lomas Shrestha",
    detail: "Property buyer",
    date: "2 months ago",
    googleUrl: "https://maps.app.goo.gl/RcSUEdEWywbf9Aqp9",
  },
  {
    quote:
      "I recently did a building and pest inspection for one of Amir's clients and had a great experience. He's really easy to talk to and made sure I had all the info I needed on both the property and the client right from the start. It makes the whole process run much smoother when an agent is that organized. I also really appreciate that he's referred me to other clients since then. If you're looking for a buyers agent who stays on top of the details and treats his partners well, I can't recommend him enough.",
    author: "Leon Peacock",
    detail: "Building inspector",
    date: "2 months ago",
    googleUrl: "https://maps.app.goo.gl/dikc3tVEG9MrsUDr5",
  },
  {
    quote:
      "Working with buyer's agent Amir has been an incredibly relaxing and wonderful experience. As first-time investment property buyers, we couldn't have asked for better guidance from start to settlement. His extensive knowledge and ability to show us numerous properties made the entire process seamless. As a couple, we appreciated how effortlessly Amir understood our shared vision. He negotiated expertly on our behalf and guided us through every step with remarkable patience and professionalism. His deep market knowledge and unwavering dedication transformed what could have been a stressful first investment property purchase into a smooth and confident experience. We highly recommend Amir to anyone looking for a buyer's agent who truly cares about their clients' success.",
    author: "Pushparaj Shrestha",
    detail: "Investor",
    date: "3 months ago",
    googleUrl: "https://maps.app.goo.gl/7WFPvrer611WoURt5",
  },
  {
    quote:
      "Amir guided us from the very beginning, and his dedication and determination to deliver the best possible service were truly impressive. He consistently prioritised client satisfaction and made the entire process smooth and stress-free. We highly recommend Ether Property Hub to anyone looking for reliable and professional service. Thank you, Amir dai.",
    author: "jack sparrow",
    detail: "Property buyer",
    date: "3 months ago",
    googleUrl: "https://maps.app.goo.gl/zcWMTzyzUvSzcsq37",
  },
  {
    quote:
      "Amir is fast and efficient and knows how to get the job done. Every transaction has been smooth and if there are any issues that jump out he works with me to resolve them immediately. Very professional and genuinely nice to work with.",
    author: "Christian Sapuppo",
    detail: "Industry partner",
    date: "3 months ago",
    googleUrl: "https://maps.app.goo.gl/hiZ2BwyYXPz4xA7h9",
  },
  {
    quote:
      "Exceptionally hard working young man. Never misses a client's call. A quick responder, once he is engaged to you your goal becomes his ambition. His humbleness and dedication towards your goal gives you a feeling of brotherhood. I really had an excellent experience finding property with him which later turned into a successful goal securing an amazing property with a good potential in no time. Keep up the good work bro. Will definitely recommend others and will connect to you for my upcoming projects. Thanks again.",
    author: "Prakash Shrestha",
    detail: "Investor",
    date: "7 months ago",
    googleUrl: "https://maps.app.goo.gl/8MCQXkramijr1gwq6",
  },
  {
    quote:
      "First of all, I would like to thank Amir Jee for his support and expertise to help secure our investment property. He is very genuine and friendly. I like his attitude and personality. He is always ready to help and never misses a call. He is very knowledgeable on what he does. Thank you Amir Jee once again for your help and support. I will definitely recommend to my friends and family and love to work with you again in the near future.",
    author: "SAMEER LAMA",
    detail: "Investor",
    date: "7 months ago",
    googleUrl: "https://maps.app.goo.gl/NQzK9xMD7K8o3the8",
  },
  {
    quote:
      "Working with Amir was an absolute pleasure. Amir's communication, honesty, integrity and willingness to listen allowed us to purchase our property with ease. He really made our buying experience so wonderful. Thank you Amir.",
    author: "alina maharjan",
    detail: "Property buyer",
    date: "7 months ago",
    googleUrl: "https://maps.app.goo.gl/rHMKnjNUS5LWFhV96",
  },
  {
    quote:
      "Amir is an incredibly hard working guy. His level of commitment to every client is second to none. He understands the property market so well and has delivered time and again for his clients. You are in good hands with Amir.",
    author: "Ben",
    detail: "Industry partner",
    date: "7 months ago",
    googleUrl: "https://maps.app.goo.gl/omHkhmBSCR6mbtJH8",
  },
  {
    quote:
      "We are extremely impressed by Amir's exceptional market knowledge throughout the home buying process. His knowledgeable insight into real estate market gave us confidence in our investment. He was incredibly helpful, transparent, and responsive throughout the entire process. Thank you Amir. We would gladly recommend him to potential customers.",
    author: "Suman M",
    detail: "Investor",
    date: "8 months ago",
    googleUrl: "https://maps.app.goo.gl/sWscCnymb55TK7Z29",
  },
  {
    quote:
      "I had an excellent experience working with Amir ji. They were knowledgeable, responsive, and really understood what I was looking for. Highly recommend",
    author: "Birain Shrestha",
    detail: "Property buyer",
    date: "9 months ago",
    googleUrl: "https://maps.app.goo.gl/SGhjAwh519zUppP29",
  },
  {
    quote:
      "I'm so grateful with Amir from Ether Property Hub! From day one he made us feel supported and truly listened to what we were looking for. He was always just a call or text away, answering every question with patience and kindness. What really stood out was how much Amir cared and dedicated himself in the process itself — it never felt like just a transaction. He celebrated the win with us, eased our worries and confusion when things got stressful and tricky, and made sure we find the right home, not just any home. I can't recommend Amir enough. If you want someone who's in your corner every step of the way, this is the person to call.",
    author: "Bigyan Shrestha",
    detail: "Home buyer",
    date: "10 months ago",
    googleUrl: "https://maps.app.goo.gl/wtbLBZUwWvQBSf5Z7",
  },
  {
    quote:
      "Amir guided me expertly during the purchasing journey. Checked in with me constantly to make sure I'm comfortable during the purchasing journey. Great service — thank you!",
    author: "Adhish Panta",
    detail: "Property buyer",
    date: "a year ago",
    googleUrl: "https://maps.app.goo.gl/1xJaAvdh1uzd3kYV9",
  },
] as const satisfies readonly GoogleReview[];
