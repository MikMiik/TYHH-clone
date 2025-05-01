import clsx from "clsx"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faKey } from "@fortawesome/free-solid-svg-icons"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

import styles from "./Header.module.scss"
import mainlogo from "@/assets/images/mainlogo.png"
import Item from "@/components/HeaderNavItem"
import config from "@/config"
import HeaderButton from "@/components/HeaderNavButton"

function Header() {
    return (
        <header>
            <div className={clsx(styles.headerTopBar)}></div>
            <div className={clsx(styles.headerMenu)}>
                <div className={clsx(styles.menuContainer, "d-flex", "align-items-center", "justify-content-centre")}>

                    <Link to={"/"}>
                        <img className={styles.mainLogo} src={mainlogo} alt="Tyhh.net" />
                    </Link>

                    <nav>
                        <ul className="d-flex">
                            <Item goto={config.routes.home}>Trang chủ</Item>
                            <Item goto={config.routes.onlineLearning}>Học Online</Item>
                            <Item goto={config.routes.vipDocuments}>Tài liệu Vip</Item>
                            <Item goto={config.routes.documents}>Tài liệu</Item>
                            <Item goto={config.routes.liveSchedule}>Lịch Live</Item>
                            <Item>Thanh toán</Item>
                        </ul>
                    </nav>
                    
                    <section>
                        <HeaderButton>
                            <FontAwesomeIcon icon={faKey} />
                            Kích hoạt thẻ
                        </HeaderButton>
                        <HeaderButton>
                            <FontAwesomeIcon icon={faUserPlus} />
                            Đăng kí
                        </HeaderButton>
                        <HeaderButton>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                            Đăng nhập
                        </HeaderButton>
                    </section>
                </div>
            </div>
        </header>
    )
}

export default Header
