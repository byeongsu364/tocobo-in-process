import React from 'react'
import instar from "../util/instar"
import "../styles/sections/instar.scss"

const Instargram = () => {

    const stagger = (base, idx, step = 100) => base + idx * step

    return (
        <div className='inner instar-inner'>
            <div className="t-wrap">
                <h2 className="tit">
                    Instargram
                </h2>
                <p className="txt-4">
                    @tocobo_official
                </p>
            </div>
            <ul className="instar-lst">
                {instar.map((i, index) => (
                    <li key={i.id}
                        data-aos="fade-up"
                        data-aos-delay={stagger(1000, index, 100)}
                    >
                        <a
                            style={{ backgroundImage: `url(${i.image})` }}
                            href={i.link}
                            aria-label={i.alt}
                        >
                            {i.alt}

                            {/* 뱃지 추가 */}
                            <div className="badge">
                                <img src="/images/badge.png" alt="badge" />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Instargram
