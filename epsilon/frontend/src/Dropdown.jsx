import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function Dropdown() {
    return (
    <Select
      placeholder="Select a Membership Tier..."
      indicator={<KeyboardArrowDown />}
      sx={{
        
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="None">None</Option>
      <Option value="Level1">Level1</Option>
      <Option value="Level2">Level2</Option>
      <Option value="Level3">Level3</Option>
      
    </Select>
  );
}