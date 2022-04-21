{/*This file handles the bar at the very top of the screen
  and it can make that bar transparent or change in any colour */}

import { StatusBar } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated = {true} {...props}/> : null;
};

export default FocusedStatusBar;