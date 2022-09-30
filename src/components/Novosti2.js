import React, { useEffect, useState } from "react";
import "./Novosti.css";

export default function Novosti() {
  const [isLoading, setIsLoading] = useState(true);

  const hasCovid = localStorage.getItem("covid");

  useEffect(() => {
    setTimeout((e) => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <div className="news">
          <h1>Did you know?</h1>
          <div>
            <h2>Keep yourself and others safe: Do it all!</h2>
            <ul>
              <p>Protect yourself and those around you:</p>
              <li>
                Get vaccinated as soon as it's your turn and follow local
                guidance on vaccination.
              </li>
              <li>
                Keep physical distance of at least 1 metre from others, even if
                they don't appear to be sick. Avoid crowds and close contact.
              </li>
              <li>
                Wear a properly fitted mask when physical distancing is not
                possible and in poorly ventilated settings.
              </li>
              <li>
                Clean your hands frequently with alcohol-based hand rub or soap
                and water.
              </li>
              <li>
                Cover your mouth and nose with a bent elbow or tissue when you
                cough or sneeze. Dispose of used tissues immediately and clean
                hands regularly.
              </li>
              <li>
                If you develop symptoms or test positive for COVID-19,
                self-isolate until you recover.
              </li>
            </ul>
          </div>
          <div>
            <h2>Wear a mask properly</h2>
            <ul>
              <p>To properly wear your mask:</p>
              <li>Make sure your mask covers your nose, mouth and chin.</li>
              <li>
                Clean your hands before you put your mask on, before and after
                you take it off, and after you touch it at any time.
              </li>
              <li>
                When you take off your mask, store it in a clean plastic bag,
                and every day either wash it if it's a fabric mask or dispose of
                it in a trash bin if it's a medical mask.
              </li>
              <li>Don't use masks with valves.</li>
            </ul>
          </div>
          <div>
            <h2>What to do if you feel unwell</h2>
            <ul>
              <p>If you feel unwell, here's what to do.</p>
              <li>
                If you have a fever, cough and difficulty breathing, seek
                medical attention immediately. Call by telephone first and
                follow the directions of your local health authority.
              </li>
              <li>
                Know the full range of symptoms of COVID-19. The most common
                symptoms of COVID-19 are fever, dry cough, tiredness and loss of
                taste or smell. Less common symptoms include aches and pains,
                headache, sore throat, red or irritated eyes, diarrhoea, a skin
                rash or discolouration of fingers or toes.
              </li>
              <li>
                Stay home and self-isolate for 10 days from symptom onset, plus
                three days after symptoms cease. Call your health care provider
                or hotline for advice. Have someone bring you supplies. If you
                need to leave your house or have someone near you, wear a
                properly fitted mask to avoid infecting others.
              </li>
              <li>
                Keep up to date on the latest information from trusted sources,
                such as WHO or your local and national health authorities. Local
                and national authorities and public health units are best placed
                to advise on what people in your area should be doing to protect
                themselves.
              </li>
            </ul>
          </div>
        </div>

        {isLoading === true ? (
          <div className="loader container">
            <i className="fas fa-solid fa-spinner fa-spin"></i>
          </div>
        ) : (
          <div className="loader container">
            {hasCovid === "true" ? (
              <p className="color-red">Позитивен сте</p>
            ) : (
              <p className="color-green">Негативен сте</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
