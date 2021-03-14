import s from './style.module.css';


const Layout = ({ title, colorBg = false, urlBg = false, children }) => {
    const styleBgRoot = {};
    if (colorBg) {
        styleBgRoot.backgroundColor = colorBg;
    }
    if (urlBg) {
        styleBgRoot.backgroundImage = `url(${urlBg})`;
    }

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
                    <div className={`${s.desc} ${s.full}`}>
                        <p>
                            {children}
                        </p>
                    </div>
                </article>
            </div>
        </section >
    )
}

export default Layout;