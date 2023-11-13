import style from './MainHeadingImages.module.css';

const MainHeadingImages = () => {
    return (
        <>
            <div className={`${style.mainContainer} row g-0`}>

                <div className={`${style.mainImg1} col-lg-4 col-sm-12  `}>
                    <div className={style.container}>
                        <img
                        
                        src='https://images.pexels.com/photos/4817384/pexels-photo-4817384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            className={style.img1}
                            alt='image1'
                        />
                        <p className={style.text_overlay}>
                                <h2 className={style.title}>Elegance Redefined: Unveiling the Latest Trends in Fashion</h2>
                                Explore the dynamic world of fashion, where style meets innovation. From runway glamour to street chic, discover your unique fashion statement.
                        </p>
                    </div>
                </div>
                <div className={`${style.mainImg2} col-lg-8 col-sm-12 row g-0`}>
                    <div className={`${style.mainImg3} col-lg-12  col-sm-12`}>
                        <div className={style.container}>
                            <img
                                src='https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                className={style.img2}
                                alt='image2'
                            />
                            <p className={style.text_overlay}>
                                <h2 className={style.title}>Beyond the Stars: A Journey into the Mysteries of the Universe</h2>
                                Embark on an interstellar odyssey as we unravel the cosmic wonders. From black holes to distant galaxies, the universe invites us to dream big.
                                  </p>
                        </div>
                    </div>
                    <div className={`${style.mainImg3} col-lg-6 col-sm-12`}>
                        <div className={style.container}>
                        <img
                            src='https://images.pexels.com/photos/4572176/pexels-photo-4572176.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            className={style.img3}
                            alt='image3'
                        />
                        <p className={style.text_overlay}>
                                <h2 className={style.title}>Wanderlust Chronicles: Tales from Around the Globe</h2>
                                Venture into the heart of travel, where cultures collide, and landscapes unfold. Let these travel stories be your passport to endless adventures.
                                   </p>
                        </div>
                        
                    </div>
                    <div className={`${style.mainImg3} col-lg-6 col-sm-12`}>
                        <div className={style.container}>
                        <img
                            
                        src='https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            className={style.img4}
                            alt='image4'
                        />
                        <p className={style.text_overlay}>
                                <h2 className={style.title}>Land of the Rising Sun: Exploring the Rich Tapestry of Japan</h2>
                                Immerse yourself in the beauty of Japan, where ancient traditions harmonize with modern life. From cherry blossoms to sushi delights, discover the essence of Japan.
                                </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainHeadingImages;
