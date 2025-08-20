import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import './guidance.css';

function Guidance() {
  const { t, i18n } = useTranslation("global");
  const [instructions, setInstructions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // State for video player
  const [playingVideo, setPlayingVideo] = useState(null);
  
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalVideos, setTotalVideos] = useState(0);
  const [perPage, setPerPage] = useState(6); // تقليل عدد الفيديوهات في كل صفحة

  useEffect(() => {
    const fetchInstructions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api_instructions?page=${currentPage}&per_page=${perPage}`, {
          headers: {
            'lang': i18n.language,
          },
        });
        const result = await response.json();
        if (result.status === 'success') {
          setInstructions(result.result.data || []);
          
          // Update pagination info
          if (result.result.pagination) {
            setCurrentPage(result.result.pagination.current_page || 1);
            setTotalPages(result.result.pagination.pages_count || 1);
            setTotalVideos(result.result.pagination.total || 0);
            setPerPage(result.result.pagination.per_page || 6);
          }
        }
      } catch (error) {
        console.error('Error fetching instructions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstructions();
  }, [i18n.language, currentPage]);

  const handleVideoClick = (instruction) => {
    if (instruction.link) {
      if (playingVideo === instruction.id) {
        // إذا كان الفيديو يعمل بالفعل، أوقفه
        setPlayingVideo(null);
      } else {
        // تشغيل الفيديو الجديد
        setPlayingVideo(instruction.id);
      }
    }
  };

  const handleCloseVideo = (videoId) => {
    setPlayingVideo(null);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      // Reset video player when changing page
      setPlayingVideo(null);
    }
  };

  // دالة لاستخراج YouTube thumbnail
  const getYouTubeThumbnail = (url) => {
    if (!url) return '/assets/logo.png';
    
    try {
      const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      if (videoId && videoId[1]) {
        return `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg`;
      }
    } catch (error) {
      console.error('Error extracting YouTube thumbnail:', error);
    }
    
    return '/assets/logo.png';
  };

  // دالة لاستخراج YouTube video ID
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    try {
      const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      return videoId ? videoId[1] : null;
    } catch (error) {
      console.error('Error extracting YouTube video ID:', error);
      return null;
    }
  };

  // دالة لإنشاء YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : null;
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <>
      <GlobalContainer
        text={t('guidance.title') || 'الإرشاد والتوعية'}
        header={t('guidance.header') || 'الإرشاد والتوعية'}
      />

      <section className="guidance-page">
        <div className="container">
          <div className="guidance-header">
            <h2 className="guidance-title">
              {t('guidance.subtitle') || 'فيديوهات إرشادية وتوعوية'}
            </h2>
            <p className="guidance-description">
              {t('guidance.description') || 'مجموعة من الفيديوهات الإرشادية والتوعوية المهمة'}
            </p>
          </div>

          <div className="guidance-content">
            {isLoading ? (
              <div className="guidance-loading-skeleton">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <div key={index} className="guidance-skeleton-item">
                    <div className="guidance-skeleton-thumbnail"></div>
                    <div className="guidance-skeleton-content">
                      <div className="guidance-skeleton-title"></div>
                      <div className="guidance-skeleton-text"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : instructions.length > 0 ? (
              <>
                <div className="guidance-grid">
                  {instructions.map((instruction) => (
                    <div 
                      key={instruction.id} 
                      className={`guidance-item ${playingVideo === instruction.id ? 'playing' : ''}`}
                    >
                      {playingVideo === instruction.id ? (
                        // Video Player Section
                        <div className="guidance-video-player-container">
                          <div className="guidance-video-player-header">
                            <h4 className="guidance-video-player-title">{instruction.title}</h4>
                            <div className="guidance-video-player-controls">
                              <button 
                                className="guidance-video-control-btn close-btn"
                                onClick={() => handleCloseVideo(instruction.id)}
                                title="إغلاق الفيديو"
                              >
                                <i className="uil uil-times"></i>
                              </button>
                            </div>
                          </div>
                          <div className="guidance-video-iframe-container">
                            <iframe
                              src={getYouTubeEmbedUrl(instruction.link)}
                              title={instruction.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="guidance-video-iframe"
                            ></iframe>
                          </div>
                        </div>
                      ) : (
                        // Thumbnail Section
                        <>
                          <div 
                            className="guidance-thumbnail"
                            onClick={() => handleVideoClick(instruction)}
                          >
                            <img 
                              src={getYouTubeThumbnail(instruction.link)} 
                              alt={instruction.title}
                              onError={(e) => {
                                e.target.src = '/assets/logo.png';
                              }}
                            />
                            <div className="guidance-play-overlay">
                              <i className="uil uil-play-circle"></i>
                            </div>
                            <div className="guidance-video-duration">
                              <i className="uil uil-video"></i>
                            </div>
                          </div>
                          <div className="guidance-info">
                            <h3 className="guidance-video-title">{instruction.title}</h3>
                            <div className="guidance-actions">
                              <button 
                                className="guidance-watch-btn"
                                onClick={() => handleVideoClick(instruction)}
                              >
                                <i className="uil uil-play me-2"></i>
                                {t('guidance.watchVideo') || 'مشاهدة الفيديو'}
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination - Always show if there are videos */}
                <div className="guidance-pagination">
                  <div className="pagination-info">
                    <span>
                      عرض {((currentPage - 1) * perPage) + 1} إلى {Math.min(currentPage * perPage, totalVideos)} من {totalVideos} فيديو
                    </span>
                  </div>
                  
                  <div className="pagination-controls">
                    {/* Previous Button */}
                    <button
                      className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="uil uil-angle-left-b"></i>
                      {t('pagination.previous') || 'السابق'}
                    </button>

                    {/* Page Numbers */}
                    <div className="page-numbers">
                      {getPageNumbers().map((page, index) => (
                        <button
                          key={index}
                          className={`page-number ${page === currentPage ? 'active' : ''} ${page === '...' ? 'dots' : ''}`}
                          onClick={() => typeof page === 'number' && handlePageChange(page)}
                          disabled={page === '...'}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      {t('pagination.next') || 'التالي'}
                      <i className="uil uil-angle-right-b"></i>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-instructions-message">
                <p>{t('guidance.noInstructions') || 'لا توجد فيديوهات إرشادية متاحة حالياً'}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Guidance;
