import { Link } from 'react-router-dom';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './allLibrary.css';
import React from 'react';
import { useEffect, useState } from "react";

import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';

export default function AllLibrary() {
  const { t } = useTranslation("global");
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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

  const [showModal2, setShowModal2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModal2(true);
  };

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
          <div className="container">
            <div className="row justify-content-center">
              {images.map((img, index) => (
                <div className="col-lg-3 col-md-6 col-12 mb-1" key={index}>
                  <img
                    src={img.link_url}
                    onClick={() => handleImageClick(img)}
                    style={{ cursor: "pointer", width: "100%", height: "200px", objectFit: "cover" }}

                    alt={t("photos.alt_text")}
                    className="img-fluid my-2"
                  />
                </div>
              ))}
            </div>
            {/* Modal */}
            <Modal show={showModal2} onHide={() => setShowModal2(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>{t("photos.title")}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                {selectedImage && (
                  <>
                    <img
                      src={selectedImage?.link_url}
                      alt={t("photos.alt_text")}
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                    <p>{selectedImage?.text}</p>
                  </>
                )}
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-center">
                <Button variant="danger" onClick={() => setShowModal2(false)}>
                  {t("decisionsPage.close")}
                </Button>
              </Modal.Footer>

            </Modal>
          </div>
        )}
      </div>
    </div>
  );

}
