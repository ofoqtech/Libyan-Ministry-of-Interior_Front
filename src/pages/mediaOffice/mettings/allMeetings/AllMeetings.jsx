import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './AllMeetings.css';

import React from 'react';

export default function AllMeetings() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t('meetings.title')}
        header={t('meetings.header')}
      />
      <MainAllMeetings />
    </>
  );
}

function MainAllMeetings() {
  const { t } = useTranslation("global");

  const meetings = [
    {
      image: '/assets/FB_IMG_1740579987780 3.png',
      title: t('meetings.meeting1.title'),
      description: t('meetings.meeting1.description'),
      time: t('meetings.meeting1.time'),
    },
    {
        image: '/assets/FB_IMG_1740579987780 3.png',
        title: t('meetings.meeting1.title'),
        description: t('meetings.meeting1.description'),
        time: t('meetings.meeting1.time'),
      },
      {
        image: '/assets/FB_IMG_1740579987780 3.png',
        title: t('meetings.meeting1.title'),
        description: t('meetings.meeting1.description'),
        time: t('meetings.meeting1.time'),
      },
  ];

  return (
    <section className="MainAllMeetings my-5">
      <div className="container">
        {meetings.map((meeting, index) => (
          <div className="row my-3" key={index}>
            <div className="col-lg-4">
              <img
                style={{ maxWidth: '100%', width: '700px' }}
                src={meeting.image}
                className="mb-3"
                alt=""
              />
            </div>
            <div className="col-lg-8">
              <h5>{meeting.title}</h5>
              <p className="desicionstitle mt-2">{meeting.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="desicionstime">
                  <i className="uil uil-calendar-alt ms-1 mx-2"></i>{meeting.time}
                </span>
                <Link to={'/mediaOffice/meetingsdetails'} className="type">
                  {t('meetings.readMore')}
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button className="page-link">{t('pagination.previous')}</button>
              </li>
              <li className="page-item active">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link">{t('pagination.next')}</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
