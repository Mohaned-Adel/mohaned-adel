import './Introduction.css'
import IMG from '../../assets/images/main-img.jpg'

const Introduction = () => {
    return (
        <section id="introduction" className="SectionSlice is-sticky image">
            <img src={IMG} className="section__image" />
        </section>
    )
}

export default Introduction;