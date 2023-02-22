import React from 'react';
import './Newsletter.css';

import { Container ,Row , Col} from 'reactstrap' ;
import maleTourist from '../assets/images/male-tourist.png'


const NewsLetter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6' >
                    <div className="mewsletter__content">
                        <h2>Subscribe now to get useful travelling information.</h2>

                        <div className="newsletter__input">
                            <input type='email' placeholder='Enter your email'/>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sequi molestiae quaerat deserunt dolor labore? Perspiciatis maiores,
                         beatae sed cupiditate voluptate sapiente, magnam exercitationem
                          nobis veritatis facilis officia ullam sunt distinctio!
                        </p>
                    </div>
                </Col>
                <Col lg='6' >
                    <div className="newsletter__img">
                        <img src={maleTourist} alt=""  />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default NewsLetter;