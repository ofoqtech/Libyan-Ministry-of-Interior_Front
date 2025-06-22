import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import "./desicions.css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Desicions() {
  const [t] = useTranslation("global");
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalContainer
        text={t("decisionsPage.pageTitle")}
        header={t("decisionsPage.breadcrumb")}
      />
      <DesicionsInformations t={t} />
    </>
  );
}

function DesicionsInformations({ t }) {
  const [desicions, setDesicions] = useState([]);
  const [filteredDesicions, setFilteredDesicions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedDesicion, setSelectedDesicion] = useState(null); // Selected desicion for modal
  const { i18n } = useTranslation("global");

  useEffect(() => {
    const getDesicions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/decisions/all_decisions?page=${currentPage}?isMobile=false`,
          {
            headers: {
              "Content-Type": "application/json",
              "lang": i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setDesicions(response.data.result.data);
          setFilteredDesicions(response.data.result.data); // Set filtered data
          setLastPage(response.data.result.pagination.last_page);
        }
      } catch (err) {
        const errorMsg =
          err.response?.data?.message ||
          err.message ||
          t("somethingWentWrong");
        toast.error(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    getDesicions();
  }, [currentPage, i18n.language]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter decisions based on search query
    const filtered = desicions.filter((decision) =>
      decision.text.toLowerCase().includes(query)
    );
    setFilteredDesicions(filtered);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  // Function to handle modal opening
  const openModal = (desicion) => {
    setSelectedDesicion(desicion);
    setShowModal(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedDesicion(null); // Reset selected desicion
  };

  return (
    <section className="desicionsinformations my-5">
      <div className="container">
        <div className="search-container mb-4">
          <input
            type="text"
            className="form-control"
            placeholder={t("decisionsPage.searchPlaceholder")}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {loading ? (
          <div className="row justify-content-center my-3">
            <div className="col-lg-6">
              <div className="skeleton-wrapper">
                <div className="skeleton-image mb-3"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text short mb-2"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row justify-content-center my-3">
              {filteredDesicions.map((desicion, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  style={{cursor : "pointer"}}
                  key={index}
                  onClick={() => openModal(desicion)} // Open modal on card click
                >
                  <div className="card p-4 text-center h-100">
                    <span className="type mx-auto d-block">
                      {t("decisions.category_1")}
                    </span>
                    <p className="desicionstitle mt-2">{desicion?.text.slice(0,100)}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="desicionstime mx-auto d-block">
                        <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                        {desicion?.created_at?.slice(0, 10)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {lastPage > 1 && (
              <div className="pagination-controls d-flex justify-content-center mt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="btn btn-outline-primary mx-2"
                >
                  {t("pagination.previous")}
                </button>
                {[...Array(lastPage)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`btn mx-1 ${
                      currentPage === index + 1
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === lastPage}
                  className="btn btn-outline-primary mx-2"
                >
                  {t("pagination.next")}
                </button>
              </div>
            )}

            {filteredDesicions.length === 0 && <p>{t("noData")}</p>}
          </>
        )}
      </div>

      {/* Modal for displaying decision details */}
      {showModal && selectedDesicion && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {t("decisionsPage.modalTitle")}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <h6 style={{lineHeight : '2.0'}}>{selectedDesicion.text}</h6>
                <p>{selectedDesicion.description}</p>
                <p>{t("decisionsPage.createdAt")}: {selectedDesicion.created_at}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  {t("decisionsPage.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
