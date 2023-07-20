import React, { useEffect, useState } from 'react';
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts';
import { DemoSankeyLink, DemoSankeyNode } from '../components/sankey/san';
import { updateChartData, addData, editData, deleteData } from '../redux/reducers/sanKeySlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getSanKeyFomatedData, useCaseDataInitial } from '../api/api';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';


const SankeyChart = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const chartData = useSelector(({ sanKey }) => sanKey?.chartData);
  const [useCaseData, setUseCaseData] = useState(useCaseDataInitial);

  useEffect(() => {
    let sanKeyFomratedDataInitial = getSanKeyFomatedData(useCaseData);
    dispatch(updateChartData(sanKeyFomratedDataInitial));
  }, []);

  const nodeProps = {
    nodeColor: '#8884d8',
    label: 'Node Label',
  };


  const linkProps = {
    linkWidth: 2,
    linkColor: '#aaa',
  };

  const handleEditData = (index, newData) => {
    console.log(index, newData)
    dispatch(editData({ index, newData }));
  };

  const handleAddData = (newData) => {
    setUseCaseData([...useCaseData, newData])
    let sanKeyFomratedDataInitial = getSanKeyFomatedData([...useCaseData, newData]);
    dispatch(updateChartData(sanKeyFomratedDataInitial));
  };

  const handleDeleteData = (index) => {
    dispatch(deleteData(index));
  };

  const renderSankeyChart = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey
          data={chartData}
          node={<DemoSankeyNode {...nodeProps} />}
          link={<DemoSankeyLink {...linkProps} />}
          margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
          onClickNode={(node) => handleEditData(node.index, node)}
          onClickLink={(link) => handleDeleteData(link.index)}
        >
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>
    );
  };



  return (
    <div>
      <h2>Sankey Chart</h2>
      {!_.isEmpty(chartData?.nodes) && renderSankeyChart()}
      <button className="button" onClick={() => handleAddData({ source: 'Salary', target: 'Bills', value: 4000, color: '#83a6ed' })}>
        {t('buttons.addSalary')}
      </button>
      <button className="button" onClick={() => handleAddData({ source: 'Gift', target: 'New Target', value: 1000, color: '#ff0000' })}>
        {t('buttons.addGift')}
      </button>
      <button className="button" onClick={() => handleDeleteData(1)}> {t('buttons.removeSalary')}</button>
    </div>
  );
};

export default SankeyChart;
