import React from 'react'
import Toggle from 'material-ui/Toggle'

const OnOff = handleProp => {
  <Toggle onClick={handleProp('onOff')} />
}

export default OnOff
