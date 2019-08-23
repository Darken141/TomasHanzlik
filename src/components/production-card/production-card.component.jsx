import React, { useState } from 'react';
import { animated, Transition, Spring } from 'react-spring/renderprops';

const ProductionCard = ({ id, img, name, text, hidden }) => {
    const [ showComponent, changeShowComponent ] = useState(false);

    return (     
        <div 
            className="production-card"
            onClick={() => {
                changeShowComponent(!showComponent)            
            }}
        >
        <div 
            className='production-card__image'
                style={{
                    backgroundImage: `url(${img})`
                }}
            />
            {showComponent ? null : (
                <h1 className='production-card__title'>
                    {name}
                </h1>
            )}

            <Transition
                native
                items={showComponent}
                from={{ opacity: 0, width: '100%'}}
                enter={{ opacity: 1, width: '100%'}}
                leave={{ opacity: 0, width: '100%'}}
                config={{ duration: 500}}
                >
                {show => show && (props => (
                <animated.div style={props} className='second-div'>
                    <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    config={{duration: 500}}
                    >
                    { props => (
                        <div style={props} className='production-card__slide'>
                            <div className="production-card__slide-description">
                                {text}
                            </div>
                            <Spring
                                from={{opacity: 0}}
                                to={{ opacity: 1}}
                                config={{delay: 500}}
                            >
                            { props => (
                                <button style={props} className='production-card__slide-button'>
                                    Preist na web
                                </button>
                            )}

                            </Spring>
                        </div>
                    )}
                    </Spring>
                </animated.div>
                ))}
            </Transition>
            </div>
            
    )
}


export default ProductionCard;
    // {
    //     showComponent ? (
    //     <div className='production-card__slide'>
    //         <div className="production-card__slide-description">
    //             {text}
    //         </div>
    //         <button className='production-card__slide-button'>
    //             Preist na web
    //         </button>
    //     </div>
    //     ) : null
    // }