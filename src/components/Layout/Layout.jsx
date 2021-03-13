import s from './style.module.css';


const Layout = ({ title, colorBg = false, urlBg = false, descr }) => {
    const styleBgRoot = colorBg ? { background: 'pink' } : {};
    // const styleBg = urlBg ? { backgroundImage: './bg1.jpg' } : {};
    return (
        <section className={s.root} style={styleBgRoot} >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc_full}>
                        <p>
                            {descr}
                        </p>
                    </div>
                </article>
            </div>
        </section >
    )
}

export default Layout;