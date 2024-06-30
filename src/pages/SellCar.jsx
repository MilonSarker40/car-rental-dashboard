import React from 'react';
import sellCar from '../assets/images/sell-car.png';
import '../styles/sell-car.css';
import TrakingChart from '../charts/TrakingChart';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';

const SellCar = () => {
    const percentage = 55;
    const percentage02 = 45;
    return (
        <div className='sell__car'>
            <div className='sell__car-wrapper'>
                <h2 className='sell__car-title'>Sell Car</h2>
                <div className='sell__car-top'>
                    <div className='sell__car-img'> 
                       <h2>2023 Mercedes Benz</h2>
                        <img src={sellCar} alt='Sell Car Img' />
                    </div>
                    <div className='traking__history'>
                        <TrakingChart />
                    </div>
                </div>
                <div className='offer__wrapper'>
                    <div className='offer__top'>
                        <h2 className='sell__car-title'>Offers</h2>
                        <div className='filter__widget-01'>
                            <select>
                                <option value='toyota'>Toyota</option>
                                <option value='bmw'>Bmw</option>
                                <option value='audi'>Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className='offer__list'>
                        <div className='offer__item'>
                            <div className='box__01'>
                                <h3 className='client__name'>Jhon Doe</h3>
                                <h6 className='avg__price'>$11,605 <span>Average Price</span></h6>
                                <h6 className='market__price'>Market Average is Price $11,244</h6>
                                <span className='arrow__key'><i class="ri-arrow-right-line"></i></span>
                            </div>
                            <div className='circle__wrapper'>
                                <div className='box__02'>
                                    <CircularProgressbar 
                                    value={percentage} 
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        // Colors
                                        pathColor:'#01d293',
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        textSize:'18px',
                                    })}
                                    />;
                                </div>
                                <h4>Impression Share</h4>
                            </div>
                            <div className='box__03'>
                                <span className="model__spend-icon">
                                    <i class="ri-car-line"></i>
                                </span>
                                <h6 className="spend__amount">$1174</h6>
                                <p className="spend__title">Model Spend</p>
                            </div>
                            <div className='box__04'>
                                <span className="model__spend-icon">
                                    <i class="ri-share-forward-line"></i>
                                </span>
                                <h6 className="spend__amount">$1174</h6>
                                <p className="spend__title">Model Spend</p>
                            </div>
                            <div className='box__05'>
                                <span className="model__spend-icon">
                                    <i class="ri-money-dollar-circle-line"></i>
                                </span>
                                <h6 className="spend__amount">$811</h6>
                                <p className="spend__title">Spend Per Unit Turned</p>
                            </div>
                        </div>
                        <div className='offer__item'>
                            <div className='box__01'>
                                <h3 className='client__name'>Killiam James</h3>
                                <h6 className='avg__price'>$16,605 <span>Average Price</span></h6>
                                <h6 className='market__price'>Market Average is Price $16,244</h6>
                                <span className='arrow__key'><i class="ri-arrow-right-line"></i></span>
                            </div>
                            <div className='circle__wrapper'>
                                <div className='box__02'>
                                    <CircularProgressbar 
                                    value={percentage02} 
                                    text={`${percentage02}%`}
                                    styles={buildStyles({
                                        // Colors
                                        pathColor:'#01d293',
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        textSize:'18px',
                                    })}
                                    />;
                                </div>
                                <h4>Impression Share</h4>
                            </div>
                            <div className='box__03'>
                                <span className="model__spend-icon">
                                    <i class="ri-car-line"></i>
                                </span>
                                <h6 className="spend__amount">$1174</h6>
                                <p className="spend__title">Model Spend</p>
                            </div>
                            <div className='box__04'>
                                <span className="model__spend-icon">
                                    <i class="ri-share-forward-line"></i>
                                </span>
                                <h6 className="spend__amount">$1174</h6>
                                <p className="spend__title">Model Spend</p>
                            </div>
                            <div className='box__05'>
                                <span className="model__spend-icon">
                                    <i class="ri-money-dollar-circle-line"></i>
                                </span>
                                <h6 className="spend__amount">$811</h6>
                                <p className="spend__title">Spend Per Unit Turned</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellCar;
