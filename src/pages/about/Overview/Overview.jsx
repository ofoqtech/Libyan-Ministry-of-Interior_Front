import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import './Overview.css';
export function Overview() {
    const [t, i18n] = useTranslation("global");
    return <>
        <GlobalContainer
            t={t}
            text={t("aboutMinistryPage.pageTitle")}
            header={t("aboutMinistryPage.breadcrumb")}
        />        <OverviewDetalis t={t} />
    </>
}


function OverviewDetalis({ t }) {

    return (
        <section className="overviewDetails my-5">
            <div className="container">
                <span className="type my-2">{t("overview.ministry_name")}</span>
                <p className="my-3">{t("overview.ministry_description")}</p>
                <h5 className="mt-5">{t("overview.core_tasks_title")}</h5>
                <ol className="mb-3">
                    {Array.from({ length: 24 }).map((_, index) => (
                        <li key={index}>{t(`overview.task_${index + 1}`)}</li>
                    ))}
                </ol>
            </div>
        </section>
    );
}


