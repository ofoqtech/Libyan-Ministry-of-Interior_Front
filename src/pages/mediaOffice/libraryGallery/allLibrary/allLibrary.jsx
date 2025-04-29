import { Link } from 'react-router-dom';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './allLibrary.css';
import React from 'react';
import { useEffect, useState } from "react";

import { useTranslation } from 'react-i18next';

export default function AllLibrary() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t('library.imageLibrary')}
        header={t('library.breadcrumb')}
      />
      <MainAllLibrary />
    </>
  );
}

function MainAllLibrary() {
  const { t } = useTranslation("global");

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true); 
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pictures/home_pictures`);
        const result = await response.json();
        setImages(result.result || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); 
      }
    };
  
    fetchImages();
  }, []);
  
  return (
    <div className="photos-section my-5">
    <div className="decisions-gallery">
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">{t("loading")}</span>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          {images.map((img, index) => (
            <div className="col-lg-3 col-md-6 col-12 mb-1" key={index}>
              <img
                src={img.link_url}
                alt={t("photos.alt_text")}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

}
