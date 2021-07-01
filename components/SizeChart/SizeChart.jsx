import React from 'react'
import style from './sizeChart.module.css'

const SizeChart = () => {
     const Sizes = ['XS', 'S', 'M', 'L', 'XL']
     return (
          <div>
               {Sizes.map((item=>{
                    <div>
                         <span>{item}</span>
                    </div>
               }))}
               
          </div>
     );
}

export default SizeChart;