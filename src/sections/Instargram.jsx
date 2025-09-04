import React from 'react'
import { Link } from 'react-router-dom'
import instar from '../util/instar'

const Instargram = () => {
    return (
        <section className="Instargram">
            <div className="inner instar-inner">
                <div className="t-wrap">
                    <h2 className="tit">Instagram</h2>
                    <p className="handle">@tocobo_official</p>
                </div>

                <ul className="instar-lst">
                    {instar.map(({ id, image, alt, link }) => (
                        <li className="card" key={id}>
                            <Link to={link} aria-label={alt}>
                                <img src={image} alt={alt} loading="lazy" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Instargram
