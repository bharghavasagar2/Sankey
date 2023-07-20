
export const inflowData = [
  { id: 1, type: 'Salary', amount: 5000 },
  { id: 2, type: 'Gift', amount: 0 },
];

// Mock data for the outflow types
export const outflowData = [
  { id: 1, type: 'Bills', amount: 3000 },
  { id: 2, type: 'Others', amount: 0 },
];

// Mock data for the additional information on hovering
export const additionalInfoData = {
  Salary: 'Additional information about Salary',
  Gift: 'Additional information about Gift',
  Bills: 'Additional information about Bills',
  Others: 'Additional information about Others',
};

export let useCaseDataInitial = [
  { source: 'Income', target: 'Salary', value: 5000, color: '#8884d8' },
  { source: 'Salary', target: 'Bills', value: 3000, color: '#83a6ed' },
  { source: 'Bills', target: 'Electric Bill', value: 1000, color: '#8dd1e1' },
  { source: 'Bills', target: 'Mobile Bill', value: 2000, color: '#82ca9d' },
];

export const getSanKeyFomatedData = (useCaseData) => {
  const data = {
    nodes: [],
    links: [],
  };

  Array.isArray(useCaseData) && useCaseData.forEach((dataPoint, index) => {
    const { source, target, value, color } = dataPoint;

    if (!data.nodes.find((node) => node.name === source)) {
      data.nodes.push({ name: source });
    }

    if (!data.nodes.find((node) => node.name === target)) {
      data.nodes.push({ name: target });
    }

    data.links.push({
      source: data.nodes.findIndex((node) => node.name === source),
      target: data.nodes.findIndex((node) => node.name === target),
      value,
      color,
    });
  });

  return data;
}



// const data = {
//   nodes: [],
//   links: [],
// };

// chartData.forEach((dataPoint, index) => {
//   const { source, target, value, color } = dataPoint;

//   if (!data.nodes.find((node) => node.name === source)) {
//     data.nodes.push({ name: source });
//   }

//   if (!data.nodes.find((node) => node.name === target)) {
//     data.nodes.push({ name: target });
//   }

//   data.links.push({
//     source: data.nodes.findIndex((node) => node.name === source),
//     target: data.nodes.findIndex((node) => node.name === target),
//     value,
//     color,
//   });
// });
