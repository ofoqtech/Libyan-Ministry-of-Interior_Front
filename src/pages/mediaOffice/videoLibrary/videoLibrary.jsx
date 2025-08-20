import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import './videoLibrary.css';

function VideoLibrary() {
  const { t, i18n } = useTranslation("global");
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingVideos, setIsLoadingVideos] = useState(false);
  // State for video player
  const [playingVideo, setPlayingVideo] = useState(null);
  
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalVideos, setTotalVideos] = useState(0);
  const [perPage, setPerPage] = useState(3); // تقليل عدد الفيديوهات في كل صفحة

  // Fetch video categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api_video_categories`, {
          headers: {
            'lang': i18n.language,
          },
        });
        const result = await response.json();
        if (result.status === 'success' && result.result.length > 0) {
          setCategories(result.result);
          setActiveTab(result.result[0].id);
        }
      } catch (error) {
        console.error('Error fetching video categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [i18n.language]);

  // Fetch videos when active tab changes
  useEffect(() => {
    if (activeTab) {
      setCurrentPage(1); // Reset to first page when changing category
      fetchVideos(activeTab, 1);
    }
  }, [activeTab, i18n.language]);

  const fetchVideos = async (categoryId, page = 1) => {
    setIsLoadingVideos(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api_category_videos/${categoryId}?page=${page}&per_page=${perPage}`, {
        headers: {
          'lang': i18n.language,
        },
      });
      const result = await response.json();
      if (result.status === 'success') {
        setVideos(result.result.data || []);
        
        // Update pagination info
        if (result.result.pagination) {
          setCurrentPage(result.result.pagination.current_page || 1);
          setTotalPages(result.result.pagination.pages_count || 1);
          setTotalVideos(result.result.pagination.total || 0);
          setPerPage(result.result.pagination.per_page || 3);
        }
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoadingVideos(false);
    }
  };

  const handleTabClick = (categoryId) => {
    setActiveTab(categoryId);
    // Reset video player when changing category
    setPlayingVideo(null);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      fetchVideos(activeTab, page);
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

  const handleVideoClick = (video) => {
    if (video.link) {
      if (playingVideo === video.id) {
        // إذا كان الفيديو يعمل بالفعل، أوقفه
        setPlayingVideo(null);
      } else {
        // تشغيل الفيديو الجديد
        setPlayingVideo(video.id);
      }
    }
  };

  const handleCloseVideo = (videoId) => {
    setPlayingVideo(null);
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
        text={t('videoLibrary.title') || 'مكتبة الفيديوهات'}
        header={t('videoLibrary.header') || 'مكتبة الفيديوهات'}
      />

      <section className="video-library-page">
        <div className="container">
          {/* Tabs Section */}
          <div className="video-library-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`video-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => handleTabClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="video-library-content">
            {isLoadingVideos ? (
              <div className="video-loading-skeleton">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="video-skeleton-item">
                    <div className="video-skeleton-thumbnail"></div>
                    <div className="video-skeleton-title"></div>
                  </div>
                ))}
              </div>
            ) : videos.length > 0 ? (
              <>
                <div className="video-grid">
                  {videos.map((video) => (
                    <div 
                      key={video.id} 
                      className={`video-item ${playingVideo === video.id ? 'playing' : ''}`}
                    >
                      {playingVideo === video.id ? (
                        // Video Player Section
                        <div className="video-player-container">
                          <div className="video-player-header">
                            <h4 className="video-player-title">{video.title}</h4>
                            <div className="video-player-controls">
                              <button 
                                className="video-control-btn close-btn"
                                onClick={() => handleCloseVideo(video.id)}
                                title="إغلاق الفيديو"
                              >
                                <i className="uil uil-times"></i>
                              </button>
                            </div>
                          </div>
                          <div className="video-iframe-container">
                            <iframe
                              src={getYouTubeEmbedUrl(video.link)}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="video-iframe"
                            ></iframe>
                          </div>
                        </div>
                      ) : (
                        // Thumbnail Section
                        <>
                          <div 
                            className="video-thumbnail"
                            onClick={() => handleVideoClick(video)}
                          >
                            <img 
                              src={getYouTubeThumbnail(video.link)} 
                              alt={video.title}
                              onError={(e) => {
                                e.target.src = '/assets/logo.png';
                              }}
                            />
                            <div className="video-play-overlay">
                              <i className="uil uil-play-circle"></i>
                            </div>
                          </div>
                          <div className="video-info">
                            <h3 className="video-title">{video.title}</h3>
                            <p className="video-description">
                              {video.description || 'فيديو إرشادي من مكتبة الفيديوهات'}
                            </p>
                            <button 
                              className="video-play-btn"
                              onClick={() => handleVideoClick(video)}
                            >
                              <i className="uil uil-play me-2"></i>
                              {t('videoLibrary.playVideo') || 'تشغيل الفيديو'}
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination - Always show if there are videos */}
                <div className="video-pagination">
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
              <div className="no-videos-message">
                <p>{t('videoLibrary.noVideos') || 'لا توجد فيديوهات في هذه الفئة'}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoLibrary;
