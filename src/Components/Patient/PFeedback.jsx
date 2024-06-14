import React from 'react';


export default function PFeedback() {
  return (
    <div className="container Diseases">
      <h2 className="headerrr">Types of Pulmonary Diseases</h2>
      <div className="disease-grid">
        <div className="disease">
          <div className="disease-content">
            <h3 className="disease-title">Bronchiolitis</h3>
            <p className="paragraph">
              A common lung infection in infants causing inflammation and mucus buildup in the small airways (bronchioles), typically due to viral infections like the respiratory syncytial virus (RSV). Symptoms start with cold-like signs and progress to breathing difficulties and wheezing. Risk factors include being under 2 years old, premature birth, heart or lung conditions, and exposure to tobacco smoke.
            </p>
          </div>
          <div className="disease-link">
            <a href="https://www.mayoclinic.org/diseases-conditions/bronchiolitis/symptoms-causes/syc-20351565" className="link">Learn more about bronchiolitis</a>
          </div>
        </div>
        <div className="disease">
          <div className="disease-content">
            <h3 className="disease-title">Chronic Obstructive Pulmonary Disease (COPD)</h3>
            <p className="paragraph">
              A chronic inflammatory lung disease causing obstructed airflow, often due to long-term exposure to irritating gases or particulate matter, most commonly from cigarette smoke. Symptoms include shortness of breath, chronic cough with mucus, wheezing, chest tightness, frequent respiratory infections, and fatigue. Risk factors include smoking, exposure to air pollutants, and genetic predisposition.
            </p>
          </div>
          <div className="disease-link">
            <a href="https://www.mayoclinic.org/diseases-conditions/copd/symptoms-causes/syc-20353679" className="link">Learn more about COPD</a>
          </div>
        </div>
        <div className="disease">
          <div className="disease-content">
            <h3 className="disease-title">Pneumonia</h3>
            <p className="paragraph">
              An infection that inflames the air sacs in the lungs, which can fill with fluid or pus, caused by bacteria, viruses, or fungi. Symptoms range from mild to severe and include chest pain, cough with phlegm, fever, chills, and difficulty breathing. Risk factors include young age, elderly, chronic diseases, smoking, and weakened immune systems.
            </p>
          </div>
          <div className="disease-link">
            <a href="https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204" className="link">Learn more about pneumonia</a>
          </div>
        </div>
        <div className="disease">
          <div className="disease-content">
            <h3 className="disease-title">Upper Respiratory Tract Infection (URTI)</h3>
            <p className="paragraph">
              Commonly known as the common cold, URTIs involve the nose, sinuses, pharynx, or larynx and are mostly viral. Symptoms include cough, fever, hoarseness, fatigue, runny nose, sore throat, and swollen lymph nodes. Risk factors include close contact with infected individuals, crowded places, smoking, and weakened immune systems.
            </p>
          </div>
          <div className="disease-link">
            <a href="https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605" className="link">Learn more about URTIs</a>
          </div>
        </div>
        {/* Add more disease sections here */}
      </div>
    </div>
  );
}
