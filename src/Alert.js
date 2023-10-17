import React from 'react'

export default function Alert(props) {
  return (
    <><div className='lmc'>
      <div className="alert alert-success alert-dismissable">
  <strong>Success</strong> {props.alert}
</div>
</div>
    </>
  )
}


