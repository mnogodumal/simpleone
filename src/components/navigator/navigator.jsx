import React, { useState } from 'react';
import Tabs from './tabs';
import Filter from './filter';
import List from './list';

export default function Navigator() {
  return (
    <div className='flex'>
      <Tabs />
      <div>
        <Filter />
        <List />
      </div>
    </div>
  );
}