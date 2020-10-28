import $ from 'jquery';
import '../../lib/roundslider/roundslider.css';
import '../../lib/roundslider/roundslider';

import React, { Component } from 'react';

class RoundSlider extends Component {

    componentDidMount() {
        this.$el = $(this.el);
        //   this.$el.roundSlider();
        const defaults = {
            radius: 80,
            width: 20,
            min: 0,
            max: 100,
            step: 1,
            handleSize: "+8",
            handleShape: "dot",
            sliderType: "min-range",
            value: 44
        }

        let change = this.props.change || (() => {})
        
        let config = Object.assign( {}, defaults, this.props.config, { change, create: change } );
        
        const rSlider = this.$el.roundSlider(config);

        // instance that contains setValue
        const rSliderData = rSlider.data("roundSlider");

        if (typeof this.props.setRef === 'function')
            this.props.setRef(rSliderData);
    }
  
    componentWillUnmount() {
      this.$el.roundSlider("destroy");
    }
 
    render() {
      return (
        <div ref={ el => this.el = el }> </div>
      );
    }
  }
  
  export default RoundSlider;