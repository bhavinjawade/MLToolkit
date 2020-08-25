export default {
  name: 'chemml.wrapper.preprocessing',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [],
  nodes: [
    {
      name: 'SaveCSV',
      docstring:
        '\n    Write pandas DataFrame to a comma-seprated-values(CSV) file.',
      inputs: [
        {
          name: 'file_path',
          docstring: 'The path for the CSV file',
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'record_time',
          docstring:
            'If True, the current time will be added to the file name.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False',
          options: null
        },
        {
          name: 'index',
          docstring:
            'If True, the index of the dataframe will be also stored as the first column.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False',
          options: null
        },
        {
          name: 'header',
          docstring: 'If True, the header of the dataframe will be stored.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False',
          options: null
        }
      ],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'write',
          display_name: 'write',
          docstring:
            '\n        Write DataFrame to a comma-seprated-values CSV) file.',
          inputs: [
            {
              name: 'df',
              docstring: 'The input pandas dataframe',
              param_type: ['dataframe'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'main_directory',
              docstring:
                'if there is a main directory for entire chemml wrapper project',
              param_type: ['str'],
              expected_shape: null,
              is_optional: true,
              default_value: '',
              options: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'SaveFile',
      docstring:
        '\n    Write any input data to a file in string format.\n    This is good for making text files and keeping track of intermediate data.',
      inputs: [
        {
          name: 'file_path',
          docstring: 'The path for the CSV file',
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'record_time',
          docstring:
            'If True, the current time will be added to the file name.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False',
          options: null
        }
      ],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'write',
          display_name: 'write',
          docstring:
            '\n        This function Write an input data X to a file as a string.',
          inputs: [
            {
              name: 'df',
              docstring: 'The input pandas dataframe',
              param_type: ['dataframe'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'main_directory',
              docstring:
                'if there is a main directory for entire chemml wrapper project',
              param_type: ['str'],
              expected_shape: null,
              is_optional: true,
              default_value: '',
              options: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    }
  ],
  library: 'chemml',
  module: 'wrapper.preprocessing'
}