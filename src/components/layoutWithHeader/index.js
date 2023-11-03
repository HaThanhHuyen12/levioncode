import Footer from "../../pages/Footer/Footer";
import HeaderProfile from "../../pages/Header/HeaderProfile";

export default function LayoutWithHeader ({children}) {

    return(
        <>
            <HeaderProfile />
            {children}
            <Footer />
        </>
    )
}