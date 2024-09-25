import React, { useState } from "react";
import { SERVICE_CATEGORIES, SERVICES } from "../../ListConstants.js";
import "../OurServices/OurServices.scss"


export default function OurServiceContainer() {

  const [selectedTopic, setSelectedTopic] = useState(SERVICES["OT"]);
  const [selectedTopicLable, setSelectedTopicLable] = useState(
    SERVICE_CATEGORIES[0].label
  );

  const [categoryId, setCategoryId] = useState(SERVICE_CATEGORIES[0].id);

  console.log(SERVICES["OT"]);

  function handleSelect(selectedButton) {
    setSelectedTopic(SERVICES[selectedButton.id]);
    setSelectedTopicLable(selectedButton.label);
    setCategoryId(selectedButton.id);
  }

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = (key) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div id='service' className="services_container">
      <div className="services">
        <div className="service_header">
          <h1>Our Professional Services</h1>
          <p>
            "We provide professional services such as Occupational Therapy,
            Physiotherapy, Speech Therapy, Special Education, Yoga, Physical
            Fitness and Nutrition. Our Services extend to both neurotypical and
            neurodivergent individuals with and without developmental delays"
          </p>
        </div>
        <div className="service_list">
          {SERVICE_CATEGORIES.map((btnMenu, index) => (
            <div
              onClick={() => handleSelect(btnMenu)}
              className={
                selectedTopicLable === btnMenu.label ? "selected-service" : ""
              }
            >
              <p
                className={
                  selectedTopicLable === btnMenu.label ? "selected-text" : ""
                }
              >
                {btnMenu.label}
              </p>
              <div
                className={
                  selectedTopicLable === btnMenu.label
                    ? "selected-line"
                    : "hover_line"
                }
              ></div>
            </div>
          ))}
        </div>
        <div className="service_detail_container">
          <div className="service_cards_container">
            {Object.keys(selectedTopic).map((key) => (
              <div
                key={key}
                className={`service-card ${categoryId ? "zoom_in" : ""}`}
              >
                <div className="image_container">
                  <div className="image_card">
                    <img
                      src={selectedTopic[key].image}
                      alt={selectedTopic[key].title}
                      className="service-image"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  key={key}
                  className={`service_card_img_content ${isReadMore[key] ? "expanded" : ""
                    }`}
                >
                  <h3>{selectedTopic[key].title}</h3>
                  <p>
                    {isReadMore[key]
                      ? selectedTopic[key].description
                      : selectedTopic[key].description.slice(0, 300)}
                    {selectedTopic[key].description.length > 300 && (
                      <span onClick={() => toggleReadMore(key)}>
                        {isReadMore[key] ? "Show Less" : "...Read More"}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
