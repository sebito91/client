// @flow
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react'
import Box from './box'
import Text from './text'
import ScrollView from './scroll-view'
import {storiesOf} from '../stories/storybook'
import {globalMargins, globalStyles, globalColors} from '../styles'

const load = () => {
  storiesOf('Box', module).add('Box', () => (
    <ScrollView style={{flex: 1}}>
      {Object.keys(globalMargins).map(size => (
        <Box key={size} style={{...globalStyles.flexBoxRow, margin: 30, width: '100%'}}>
          <Box style={{...globalStyles.flexBoxColumn, alignItems: 'flex-end', width: '50%'}}>
            <Box
              style={{
                borderColor: globalColors.grey,
                borderStyle: 'dashed',
                borderWidth: 2,
                height: globalMargins[size],
                marginRight: 24,
                width: globalMargins[size],
              }}
            />
          </Box>
          <Box style={{width: '50%'}}>
            <Text type="BodySmall">{size}: </Text>
            <Text type="BodySmall">{globalMargins[size]}px</Text>
          </Box>
        </Box>
      ))}
    </ScrollView>
  ))
}

export default load
