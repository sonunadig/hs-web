import banner from '../../assets/header.png';
import ai from '../../assets/ai.png';
import iot from '../../assets/iot.png';
import appdev from '../../assets/appdev.png';
import HsCard from '../layout/Card';
import './Home.css';

function Home() {
  return (
    <div>
        <section className="header-section">
        <div className='header-bg'>
        <div className="header-image">
            <img src={banner} alt='banner' />
        </div>
        <div className="header-content">
            <h4>Making IT Happen</h4>
            <h1>Humanoid Systems</h1>
            <p>We help businesses choose the right technologies and harness their full potential for growth. 
                Our motto is Strong Relationships, Constant Partnership, and Growing Together.</p>
        </div>
        </div>
    </section>
    <section className='sol-section'>
        <div className='section_padding sol-bg'>
        <div className='sol-heading'>
        <h4>Real Needs & Perfect Solutions.</h4>
        <h2>Our Innovative Solutions</h2>
        </div>
        <div className='sol-cards'>
            <HsCard imgUrl={ai} title='Artificial Intelligence' text='With a goal to create a beautiful user experience, our team supports your business in deploying the right AI technologies for automating and optimizing routine processes and tasks saving you time and money.'/>
            <HsCard imgUrl={appdev} title='App Development' text='Our team of Flutter Developers provides you with fast, secure, beautifully designed apps, rich in features,  have a great functionality and user interface, deepening your customer engagement and growth.'/>
            <HsCard imgUrl={iot} title='IOT Solutions' text='Internet of Things are radically transforming the way we live and do business. Our team of IoT experts is adept at providing you with the right kind of IoT technologies that have security, reliability, scalability, and flexibility built into them.'/>
        </div>
        </div>
    </section>
    </div>
  )
}

export default Home;
