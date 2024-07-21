import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function DropDown(props) {
  const {onChange} = props;
  return (
    <Select
      onChange={onChange}
      placeholder={"Select subscription level"}
      indicator={<KeyboardArrowDown />}
      sx={{
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          transform: 'rotate(0deg)',
        },
        [`&:hover .${selectClasses.indicator}`]: {
          transform: 'rotate(180deg)',
        },
        minWidth: '100%',
      }}
      
    >
      <Option value="None">None</Option>
      <Option value="Level1">Level1</Option>
      <Option value="Level2">Level2</Option>
      <Option value="Level3">Level3</Option>
    </Select>
  );
}