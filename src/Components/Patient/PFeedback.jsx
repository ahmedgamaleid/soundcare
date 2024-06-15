import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function PFeedback() {
  const diseases = [
    {
      title: "Bronchiolitis",
      description: "A common lung infection in infants causing inflammation and mucus buildup in the small airways (bronchioles), typically due to viral infections like the respiratory syncytial virus (RSV). Symptoms start with cold-like signs and progress to breathing difficulties and wheezing. Risk factors include being under 2 years old, premature birth, heart or lung conditions, and exposure to tobacco smoke.",
      link: "https://www.mayoclinic.org/diseases-conditions/bronchiolitis/symptoms-causes/syc-20351565"
    },
    {
      title: "Chronic Obstructive Pulmonary Disease (COPD)",
      description: "A chronic inflammatory lung disease causing obstructed airflow, often due to long-term exposure to irritating gases or particulate matter, most commonly from cigarette smoke. Symptoms include shortness of breath, chronic cough with mucus, wheezing, chest tightness, frequent respiratory infections, and fatigue. Risk factors include smoking, exposure to air pollutants, and genetic predisposition.",
      link: "https://www.mayoclinic.org/diseases-conditions/copd/symptoms-causes/syc-20353679"
    },
    {
      title: "Pneumonia",
      description: "An infection that inflames the air sacs in the lungs, which can fill with fluid or pus, caused by bacteria, viruses, or fungi. Symptoms range from mild to severe and include chest pain, cough with phlegm, fever, chills, and difficulty breathing. Risk factors include young age, elderly, chronic diseases, smoking, and weakened immune systems.",
      link: "https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204"
    },
    {
      title: "Upper Respiratory Tract Infection (URTI)",
      description: "Commonly known as the common cold, URTIs involve the nose, sinuses, pharynx, or larynx and are mostly viral. Symptoms include cough, fever, hoarseness, fatigue, runny nose, sore throat, and swollen lymph nodes. Risk factors include close contact with infected individuals, crowded places, smoking, and weakened immune systems.",
      link: "https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605"
    }
  ];

  return (
<div className="diseases-container container">
  {diseases.map((disease, index) => (
    <div key={index} className="disease-card g-4 my-3 p-5 rounded-3">
      <h3 className="disease-title mb-4">{disease.title}</h3>
      <p className="disease-description">{disease.description}</p>
      <a href={disease.link} className="disease-link"><i className="fa-solid fa-link"></i> {disease.title}</a>
    </div>
  ))}
</div>



  
  );
}
