import React from 'react';
import VCHeader from '../components/vc-header'
const Main = function (props:any) {
  return (
    <div>
      <VCHeader></VCHeader>
      {props.children}
    </div>
  )
}
export default Main;