import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data, type) {
  var average = _.round(_.sum(data) / data.length);
  if (type == "C")
    average -= 273.5;
  return average;
}

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data, props.units)} {props.units}</div>
    </div>
  );
}
