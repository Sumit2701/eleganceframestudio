 const filterList = {
  none: {
    name: 'none',
    filters: [

      // You can add more filters here if needed
    ]
  },
    sepia: {
      name: 'sepia',
      filters: [
        { filterType: 'sepia', value: 120 },
        { filterType: 'contrast', value: 150 }  
        // Add more filters specific to sepia
      ]
    },
    grayscale: {
      name: 'grayscale',
      filters: [
        { filterType: 'grayscale', value: 100 },
        { filterType: 'contrast', value: 150 }
        // Add more filters specific to grayscale
      ]
    },
    nostalgicNeg: {
      name: 'nostalgicNeg',
      filters: [
        { filterType: 'contrast', value: 150 },
        { filterType: 'brightness', value: 100 },
        { filterType: 'sepia', value: 100 },
        { filterType: 'saturate', value: 100 },
        { filterType: 'invert', value: 0 },
        // Other effects not achievable directly via CSS filters are commented out
      ]
    },
    customFilter: {
      name: 'customFilter',
      filters: [
        { filterType: 'contrast', value: 150 },
        { filterType: 'brightness', value: 100 },
 
      ]
    }
    
    // Add more filters here
  };
export default filterList;
