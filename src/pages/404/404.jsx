import { useTranslation } from "react-i18next";

function NotFound() {
    const [t, i18n] = useTranslation("global");
    return <section className="not-found w-100">
        <div className="not-found"  style={{backgroundImage: "url('/assets/eror404.png')", backgroundPosition : "center center",  height : "100vh", backgroundRepeat : "no-repeat", backgroundSize : "cover"}}>
        </div>
    </section>
}
export default NotFound;