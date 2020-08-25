export default {
  name: 'chemml.wrapper.preprocessing',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [],
  nodes: [
    {
      name: 'SplitColumns',
      docstring: '\n    This method splits a data matrix by columns.',
      inputs: [
        {
          name: 'selection',
          docstring:
            "if positive integer, it's the number of columns to be selected from left side of dataframe and returns as first data frame (df1). if negative integer, it's the number of columns to be selected from right side of dataframe and returns as first data frame (df1).",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1',
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
          name: 'fit',
          display_name: 'split_columns',
          docstring:
            '\n        The main function to split the input dataframe.',
          inputs: [
            {
              name: 'X',
              docstring: 'the input array',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'X1',
              docstring: 'Left part of the split data matrix',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'X2',
              docstring: 'Right part of the split data matrix',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'TrainTestSplit',
      docstring:
        'A module to split a data matrix into train and test (or validation) samples',
      inputs: [
        {
          name: 'test_fraction',
          docstring:
            'The fraction of samples to be selected for the test. If a value not in (0, 1.0) is provided we default to 0.25',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '0.25',
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
          name: 'split',
          display_name: 'train_test_split',
          docstring:
            'The function to call for performing the split of the data matrix',
          inputs: [
            {
              name: 'X',
              docstring: 'the input array',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'X1',
              docstring:
                'The training data matrix with ((1 - test_fraction) * n_samples) rows',
              param_type: ['array'],
              returned: true
            },
            {
              name: 'X2',
              docstring:
                'The testing data matrix with (test_fraction * n_samples) rows',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    }
  ],
  library: 'chemml',
  module: 'wrapper.preprocessing'
}
