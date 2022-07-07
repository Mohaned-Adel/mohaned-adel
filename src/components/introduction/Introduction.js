import './Introduction.css'
import IMG from '../../assets/images/main-img.jpg'

const Introduction = () => {
    return (
        <section id="introduction" className="SectionSlice is-sticky image">
            <img src={IMG} className="section__image" alt='My Personal img' />
        </section>
    )
}

export default Introduction;