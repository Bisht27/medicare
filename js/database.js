
export const SPECIALTIES = [
  "All", "Cardiologist", "Dermatologist", "Neurologist",
  "Orthopedic", "Pediatrician", "Gynecologist", "Ophthalmologist",
  "Psychiatrist", "ENT", "General Physician"
];

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    specialty: "Cardiologist",
    qualification: "MBBS, MD (Cardiology), DM",
    experience: 18,
    rating: 4.9,
    reviews: 842,
    hospital: "Apollo Hospitals",
    location: "Connaught Place, Delhi",
    consultationFee: 1200,
    onlineConsultationFee: 800,
    availability: ["Mon", "Wed", "Fri"],
    nextSlot: "Today, 3:00 PM",
    image: null,
    languages: ["English", "Hindi"],
    about: "Specialist in interventional cardiology with 18+ years experience. Expert in angioplasty, pacemaker implantation, and heart failure management.",
    services: ["ECG", "Echo", "Angiography Consultation", "Heart Failure Management"],
    awards: ["Best Cardiologist Award 2022", "Excellence in Medicine 2020"],
    contact: { phone: "+91-98765-43210", email: "dr.mehta@apollodelhi.com" }
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    qualification: "MBBS, MD (Dermatology)",
    experience: 12,
    rating: 4.8,
    reviews: 1203,
    hospital: "Fortis Healthcare",
    location: "Vasant Kunj, Delhi",
    consultationFee: 900,
    onlineConsultationFee: 600,
    availability: ["Tue", "Thu", "Sat"],
    nextSlot: "Tomorrow, 11:00 AM",
    image: null,
    languages: ["English", "Hindi", "Punjabi"],
    about: "Award-winning dermatologist specializing in cosmetic procedures, acne treatment, and skin cancer detection.",
    services: ["Skin Biopsy", "Laser Treatment", "Chemical Peels", "Hair Loss Treatment"],
    awards: ["Top Dermatologist Delhi 2023"],
    contact: { phone: "+91-98765-11223", email: "dr.sharma@fortis.com" }
  },
  {
    id: 3,
    name: "Dr. Rahul Verma",
    specialty: "Neurologist",
    qualification: "MBBS, MD, DM (Neurology)",
    experience: 22,
    rating: 4.7,
    reviews: 567,
    hospital: "Max Super Speciality",
    location: "Saket, Delhi",
    consultationFee: 1500,
    onlineConsultationFee: 1000,
    availability: ["Mon", "Tue", "Thu"],
    nextSlot: "Today, 5:30 PM",
    image: null,
    languages: ["English", "Hindi"],
    about: "Senior neurologist with expertise in epilepsy, stroke management, and neurodegenerative disorders.",
    services: ["EEG", "EMG", "Nerve Conduction Study", "Stroke Rehabilitation"],
    awards: ["National Award for Medical Excellence 2021"],
    contact: { phone: "+91-99887-65432", email: "dr.verma@maxhospital.in" }
  },
  {
    id: 4,
    name: "Dr. Sneha Patel",
    specialty: "Pediatrician",
    qualification: "MBBS, MD (Pediatrics), Fellowship",
    experience: 9,
    rating: 4.9,
    reviews: 2104,
    hospital: "Rainbow Children's Hospital",
    location: "Dwarka, Delhi",
    consultationFee: 700,
    onlineConsultationFee: 500,
    availability: ["Mon", "Wed", "Thu", "Sat"],
    nextSlot: "Today, 2:00 PM",
    image: null,
    languages: ["English", "Hindi", "Gujarati"],
    about: "Dedicated pediatrician specializing in child development, vaccination programs, and neonatal care.",
    services: ["Vaccination", "Growth Monitoring", "Newborn Care", "Child Nutrition Counseling"],
    awards: ["Best Pediatrician Award 2023"],
    contact: { phone: "+91-98654-32109", email: "dr.patel@rainbow.com" }
  },
  {
    id: 5,
    name: "Dr. Kavya Nair",
    specialty: "Gynecologist",
    qualification: "MBBS, MS (OB-GYN), Fellowship in Infertility",
    experience: 15,
    rating: 4.8,
    reviews: 934,
    hospital: "Cloudnine Hospitals",
    location: "Malviya Nagar, Delhi",
    consultationFee: 1100,
    onlineConsultationFee: 750,
    availability: ["Tue", "Wed", "Fri", "Sat"],
    nextSlot: "Tomorrow, 9:00 AM",
    image: null,
    languages: ["English", "Hindi", "Malayalam"],
    about: "Expert in high-risk pregnancies, infertility treatment, laparoscopic surgeries, and women's health.",
    services: ["Prenatal Care", "Fertility Treatment", "Laparoscopy", "Menopause Management"],
    awards: ["Excellence in Women's Health 2022"],
    contact: { phone: "+91-97654-32100", email: "dr.nair@cloudnine.in" }
  },
  {
    id: 6,
    name: "Dr. Aditya Singh",
    specialty: "Orthopedic",
    qualification: "MBBS, MS (Orthopedics), Fellowship in Joint Replacement",
    experience: 20,
    rating: 4.6,
    reviews: 678,
    hospital: "Indian Spinal Injuries Centre",
    location: "Vasant Kunj, Delhi",
    consultationFee: 1300,
    onlineConsultationFee: 900,
    availability: ["Mon", "Wed", "Fri"],
    nextSlot: "Today, 4:30 PM",
    image: null,
    languages: ["English", "Hindi"],
    about: "Renowned orthopedic surgeon specializing in joint replacement, spine surgery, and sports medicine.",
    services: ["Joint Replacement", "Spine Surgery", "Arthroscopy", "Fracture Management"],
    awards: ["Best Surgeon Award 2021", "National Orthopedic Excellence 2019"],
    contact: { phone: "+91-96543-21098", email: "dr.singh@isic.co.in" }
  }
];

export const LAB_TESTS = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    category: "Blood Test",
    description: "Measures different components of blood including RBCs, WBCs, and platelets.",
    preparation: "No special preparation required",
    reportTime: "Same Day",
    prices: {
      1: 350,
      2: 299,
      3: 380,
      4: 199
    }
  },
  {
    id: 2,
    name: "Lipid Profile",
    category: "Blood Test",
    description: "Checks cholesterol levels — total, HDL, LDL, and triglycerides.",
    preparation: "12-hour fasting required",
    reportTime: "Same Day",
    prices: { 1: 650, 2: 549, 3: 700, 4: 399 }
  },
  {
    id: 3,
    name: "HbA1c (Diabetes Test)",
    category: "Blood Test",
    description: "Measures average blood sugar levels over the past 3 months.",
    preparation: "No fasting required",
    reportTime: "Same Day",
    prices: { 1: 450, 2: 399, 3: 500, 4: 299 }
  },
  {
    id: 4,
    name: "Thyroid Profile (T3, T4, TSH)",
    category: "Hormone Test",
    description: "Evaluates thyroid gland function and hormone levels.",
    preparation: "Morning sample preferred",
    reportTime: "Same Day",
    prices: { 1: 750, 2: 649, 3: 800, 4: 499 }
  },
  {
    id: 5,
    name: "Vitamin D (25-OH)",
    category: "Vitamin Test",
    description: "Measures vitamin D levels to check for deficiency.",
    preparation: "No preparation required",
    reportTime: "Same Day",
    prices: { 1: 1200, 2: 999, 3: 1300, 4: 799 }
  },
  {
    id: 6,
    name: "Liver Function Test (LFT)",
    category: "Organ Function",
    description: "Assesses liver health through enzyme and protein levels.",
    preparation: "8-hour fasting recommended",
    reportTime: "Same Day",
    prices: { 1: 850, 2: 749, 3: 900, 4: 599 }
  },
  {
    id: 7,
    name: "Kidney Function Test (KFT)",
    category: "Organ Function",
    description: "Evaluates kidney performance through creatinine and BUN levels.",
    preparation: "No special preparation",
    reportTime: "Same Day",
    prices: { 1: 750, 2: 649, 3: 800, 4: 549 }
  },
  {
    id: 8,
    name: "COVID-19 RT-PCR",
    category: "Infection Test",
    description: "Gold-standard test for detecting active COVID-19 infection.",
    preparation: "No food/water 30 min before",
    reportTime: "6–12 hours",
    prices: { 1: 500, 2: 450, 3: 499, 4: null }
  }
];

export const IMAGING_SERVICES = [
  {
    id: 1,
    name: "MRI Brain",
    category: "MRI",
    duration: "45–60 min",
    preparation: "Remove metal objects; inform about implants",
    prices: {
      apollo: 8500,
      fortis: 9200,
      max: 7800,
      aiims: 3500,
      medanta: 10000
    }
  },
  {
    id: 2,
    name: "MRI Spine (Lumbar)",
    category: "MRI",
    duration: "40–50 min",
    preparation: "No jewelry; comfortable clothing",
    prices: {
      apollo: 7500,
      fortis: 8200,
      max: 7000,
      aiims: 3000,
      medanta: 9500
    }
  },
  {
    id: 3,
    name: "CT Scan Head",
    category: "CT Scan",
    duration: "15–20 min",
    preparation: "Remove metal objects",
    prices: {
      apollo: 3500,
      fortis: 3800,
      max: 3200,
      aiims: 1500,
      medanta: 4500
    }
  },
  {
    id: 4,
    name: "CT Scan Chest",
    category: "CT Scan",
    duration: "20–25 min",
    preparation: "Breathe normally; no metal",
    prices: {
      apollo: 4500,
      fortis: 5000,
      max: 4200,
      aiims: 2000,
      medanta: 5500
    }
  },
  {
    id: 5,
    name: "CT Scan Abdomen",
    category: "CT Scan",
    duration: "30–40 min",
    preparation: "6-hour fasting; oral contrast may be needed",
    prices: {
      apollo: 5500,
      fortis: 6000,
      max: 5200,
      aiims: 2500,
      medanta: 7000
    }
  },
  {
    id: 6,
    name: "X-Ray Chest (PA view)",
    category: "X-Ray",
    duration: "5–10 min",
    preparation: "No metal objects",
    prices: {
      apollo: 500,
      fortis: 600,
      max: 450,
      aiims: 150,
      medanta: 700
    }
  },
  {
    id: 7,
    name: "X-Ray Knee (AP + Lateral)",
    category: "X-Ray",
    duration: "10 min",
    preparation: "No special prep",
    prices: {
      apollo: 600,
      fortis: 700,
      max: 550,
      aiims: 200,
      medanta: 800
    }
  },
  {
    id: 8,
    name: "Ultrasound Abdomen",
    category: "Ultrasound",
    duration: "20–30 min",
    preparation: "4-hour fasting; full bladder",
    prices: {
      apollo: 1500,
      fortis: 1800,
      max: 1400,
      aiims: 600,
      medanta: 2000
    }
  },
  {
    id: 9,
    name: "DEXA Scan (Bone Density)",
    category: "Bone Scan",
    duration: "20–30 min",
    preparation: "No calcium supplements 24 hrs before",
    prices: {
      apollo: 2500,
      fortis: 2800,
      max: 2200,
      aiims: 1000,
      medanta: 3500
    }
  },
  {
    id: 10,
    name: "PET Scan",
    category: "Nuclear Medicine",
    duration: "3–4 hours",
    preparation: "6-hour fasting; no strenuous exercise",
    prices: {
      apollo: 18000,
      fortis: 19500,
      max: 17000,
      aiims: 10000,
      medanta: 22000
    }
  }
];

export const IMAGING_CENTERS = {
  apollo: { name: "Apollo Hospitals", location: "Connaught Place", contact: "+91-11-2692-5801" },
  fortis: { name: "Fortis Healthcare", location: "Vasant Kunj", contact: "+91-11-4277-6222" },
  max: { name: "Max Super Speciality", location: "Saket", contact: "+91-11-2651-5050" },
  aiims: { name: "AIIMS Delhi", location: "Ansari Nagar", contact: "+91-11-2658-8500" },
  medanta: { name: "Medanta Hospital", location: "Gurugram", contact: "+91-124-4141-414" }
};

export const HEALTH_PACKAGES = [
  {
    id: 1,
    name: "Basic Wellness",
    tests: ["CBC", "Blood Sugar", "Urine Analysis", "Lipid Profile"],
    originalPrice: 2500,
    price: 999,
    labId: 2,
    popular: false
  },
  {
    id: 2,
    name: "Comprehensive Health",
    tests: ["CBC", "LFT", "KFT", "Lipid Profile", "Thyroid", "Blood Sugar", "Vitamin D", "HbA1c"],
    originalPrice: 7500,
    price: 2999,
    labId: 2,
    popular: true
  },
  {
    id: 3,
    name: "Cardiac Risk",
    tests: ["Lipid Profile", "ECG", "hs-CRP", "Homocysteine", "Troponin"],
    originalPrice: 4500,
    price: 1999,
    labId: 1,
    popular: false
  },
  {
    id: 4,
    name: "Diabetes Management",
    tests: ["FBS", "PPBS", "HbA1c", "Insulin", "Microalbumin", "Creatinine"],
    originalPrice: 3800,
    price: 1599,
    labId: 4,
    popular: false
  }
];