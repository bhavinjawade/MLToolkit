export default {
  name: 'sklearn.metrics',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [],
  nodes: [
    {
      name: 'Regression Metrics',
      docstring:
        'Module to provide functions for most common metrics to evaluate Regression Models',
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: 'r2_score',
          docstring:
            'R^2 (coefficient of determination) regression score function.\n\n    Best possible score is 1.0 and it can be negative (because the\n    model can be arbitrarily worse). A constant model that always\n    predicts the expected value of y, disregarding the input features,\n    would get a R^2 score of 0.0.',
          inputs: [
            {
              name: 'y_true',
              docstring: 'Ground truth (correct) target values.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y_pred',
              docstring: 'Estimated target values.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '(n_samples), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'multioutput',
              docstring:
                "Defines aggregating of multiple output scores. Array-like value defines weights used to average scores. Default is \"uniform_average\".  'raw_values' :     Returns a full set of scores in case of multioutput input.  'uniform_average' :     Scores of all outputs are averaged with uniform weight.  'variance_weighted' :     Scores of all outputs are averaged, weighted by the variances     of each individual output.",
              param_type: ['array', 'LIST_VALID_OPTIONS', null],
              expected_shape: '(n_outputs)',
              is_optional: true,
              default_value: 'uniform_average',
              options: ['raw_values', 'uniform_average', 'variance_weighted']
            }
          ],
          outputs: [
            {
              name: 'z',
              docstring:
                "The R^2 score or ndarray of scores if 'multioutput' is 'raw_values'.",
              param_type: ['array', 'float'],
              returned: true
            }
          ]
        },
        {
          name: 'mean_absolute_error',
          docstring: 'Mean absolute error regression loss',
          inputs: [
            {
              name: 'y_true',
              docstring: 'Ground truth (correct) target values.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y_pred',
              docstring: 'Estimated target values.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '(n_samples), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'multioutput',
              docstring:
                "Defines aggregating of multiple output scores. Array-like value defines weights used to average scores. Default is \"uniform_average\".  'raw_values' :     Returns a full set of scores in case of multioutput input.  'uniform_average' :     Scores of all outputs are averaged with uniform weight.",
              param_type: ['array', 'LIST_VALID_OPTIONS', null],
              expected_shape: '(n_outputs)',
              is_optional: true,
              default_value: 'uniform_average',
              options: ['raw_values', 'uniform_average']
            }
          ],
          outputs: [
            {
              name: 'loss',
              docstring:
                "If multioutput is 'raw_values', then mean absolute error is returned for each output separately. If multioutput is 'uniform_average' or an ndarray of weights, then the weighted average of all output errors is returned.  MAE output is non-negative floating point. The best value is 0.0.",
              param_type: ['array', 'float'],
              returned: true
            }
          ]
        },
        {
          name: 'mean_squared_error',
          docstring: 'Mean squared error regression loss',
          inputs: [
            {
              name: 'y_true',
              docstring: 'Ground truth (correct) target values.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y_pred',
              docstring: 'Estimated target values.',
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              is_optional: false,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '(n_samples), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'multioutput',
              docstring:
                "Defines aggregating of multiple output scores. Array-like value defines weights used to average scores. Default is \"uniform_average\".  'raw_values' :     Returns a full set of scores in case of multioutput input.  'uniform_average' :     Scores of all outputs are averaged with uniform weight.",
              param_type: ['array', 'LIST_VALID_OPTIONS', null],
              expected_shape: '(n_outputs)',
              is_optional: true,
              default_value: 'uniform_average',
              options: ['raw_values', 'uniform_average']
            }
          ],
          outputs: [
            {
              name: 'loss',
              docstring:
                'A non-negative floating point value (the best value is 0.0), or an array of floating point values, one for each individual target.',
              param_type: ['array', 'float'],
              returned: true
            }
          ]
        }
      ],
      nodes: [],
      placeholder: true
    },
    {
      name: 'Classification Metrics',
      docstring:
        'Module to provide functions for most common metrics to evaluate Classification Models',
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: 'accuracy_score',
          docstring:
            'Accuracy classification score.\n\n    In multilabel classification, this function computes subset accuracy:\n    the set of labels predicted for a sample must *exactly* match the\n    corresponding set of labels in y_true.',
          inputs: [
            {
              name: 'y_true',
              docstring: 'Ground truth (correct) labels.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'y_pred',
              docstring: 'Predicted labels, as returned by a classifier.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            },
            {
              name: 'normalize',
              docstring:
                'If ``False``, return the number of correctly classified samples. Otherwise, return the fraction of correctly classified samples.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True'
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring:
                'If ``normalize == True``, return the fraction of correctly classified samples (float), else returns the number of correctly classified samples (int).  The best performance is 1 with ``normalize == True`` and the number of samples with ``normalize == False``.',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'confusion_matrix',
          docstring:
            'Compute confusion matrix to evaluate the accuracy of a classification\n\n    By definition a confusion matrix :math:`C` is such that :math:`C_{i, j}`\n    is equal to the number of observations known to be in group :math:`i` but\n    predicted to be in group :math:`j`.\n\n    Thus in binary classification, the count of true negatives is\n    :math:`C_{0,0}`, false negatives is :math:`C_{1,0}`, true positives is\n    :math:`C_{1,1}` and false positives is :math:`C_{0,1}`.',
          inputs: [
            {
              name: 'y_true',
              docstring: 'Ground truth (correct) target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y_pred',
              docstring: 'Estimated targets as returned by a classifier.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'labels',
              docstring:
                'List of labels to index the matrix. This may be used to reorder or select a subset of labels. If none is given, those that appear at least once in ``y_true`` or ``y_pred`` are used in sorted order.',
              param_type: ['array'],
              expected_shape: '[n_classes], optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'sample_weight',
              docstring: 'Sample weights.',
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'C',
              docstring: 'Confusion matrix',
              param_type: ['array'],
              returned: true
            }
          ]
        }
      ],
      nodes: [],
      placeholder: true
    }
  ],
  library: 'sklearn',
  module: 'metrics'
}
