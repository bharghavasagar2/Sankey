import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//import { addInflowType, removeInflowType } from '../redux/reducers/sanKeySlice.js';
import Header from "./commonComponents/HeaderComponent.js";
import ChartComponent from './SankeyChart.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddInflow = (type) => {
    //   dispatch(addInflowType(type));
  };

  const handleRemoveInflow = (type) => {
    // dispatch(removeInflowType(type));
  };

  return (
    <div>
      <Header />
      <ChartComponent />

    </div>
  );
};

export default HomePage;
