import React from 'react';
import PropTypes from'prop-types';
import styles from './HappyHoursAd.module.scss';

class HappyHourAd extends React.Component {
  constructor(){
    super();
    setInterval(()=>this.forceUpdate(),1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
      
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
      
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  render(){
    let{title, promoDescription} = this.props;
    return(
      <div className={styles.component}>
        <HappyHourAd/>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{this.getCountdownTime() > 23*60*60 ? promoDescription:(this.getCountdownTime())}</div>
      </div>
    );
  }
      
}
HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};
export default HappyHourAd;