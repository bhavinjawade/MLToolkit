export default {
  name: 'chemml.models',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [],
  nodes: [
    {
      name: 'MLP',
      docstring:
        '\n    Class associated with Multi-Layer Perceptron (Neural Network)',
      inputs: [
        {
          name: 'nhidden',
          docstring:
            'The number of hidden layers in the neural network (excluding input and output)',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1',
          options: null
        },
        {
          name: 'nneurons',
          docstring:
            'The number of nodes in each hidden layer. Must be of same length as nhidden. default: [100] * nhidden',
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'activations',
          docstring:
            "The activation type for each hidden layer. Must be of same length as nhidden. Refer https://keras.io/activations/ for list of valid activations. default: ['sigmoid'] * nhidden",
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'nepochs',
          docstring: 'Number of training epochs.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '100',
          options: null
        },
        {
          name: 'batch_size',
          docstring: 'Number of training samples in mini-batch',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '100',
          options: null
        },
        {
          name: 'loss',
          docstring:
            'Type of loss used to train the neural network. Refer https://keras.io/losses/ for list of valid losses',
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: 'mean_squared_error',
          options: [
            'mean_squared_error',
            'mean_absolute_error',
            'squared_hinge',
            'hinge',
            'categorical_hinge',
            'categorical_crossentropy',
            'binary_crossentropy',
            'kullback_liebler_divergence'
          ]
        },
        {
          name: 'regression',
          docstring:
            'Decides whether we are training for regression or classification task',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'nclasses',
          docstring:
            'Number of classes labels needs to be specified if regression is False',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: 'None',
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
          docstring:
            '\n        Train the MLP for training data X and targets y',
          inputs: [
            {
              name: 'X',
              docstring: 'Training data',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Training targets',
              param_type: ['array'],
              expected_shape: '[n_samples,]',
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring: '\n        Return prediction for test data X',
          inputs: [
            {
              name: 'X',
              docstring: 'Testing data',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: '',
              docstring: 'Predicted value from model',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'score',
          docstring:
            '\n        Predict results for test data X and compare with true targets y. Returns root mean square error if regression,\n        accuracy if classification\n\n        Parameters\n        ----------\n        X: array_like, shape=[n_samples, n_features]\n            Test data\n\n        y: array_like, shape=[n_samples,]\n            True targets\n\n        Returns\n        -------\n        float\n            root mean square error if regression, accuracy if classification\n        ',
          inputs: [
            {
              name: 'X',
              docstring: 'Test data',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'True targets',
              param_type: ['array'],
              expected_shape: '[n_samples,]',
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring:
                'root mean square error if regression, accuracy if classification',
              param_type: ['float'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'OrganicLorentzLorenz',
      docstring:
        '\n    A machine learning model for Lorentz-Lorenz (LL) estimates of refractive index.\n    The model predicts refractive index, polarizability, and density of an organic molecule using its\n    SMILES representation.\n\n    The model is trained on 100K small organic molecules with their polarizabilities from DFT calculations, densities from\n    molecular dynamics simulations, and refractive index by feeding calculated polarizabilities and densities into the\n    LL model.\n\n    The model is a fully connected artificial neural network with 3 hidden layers. The number of neurons per layers from\n    input layer to the output layer are as follow: 1024 --> 128 --> 64 --> 32 --> [1, 1, 1].\n    ',
      inputs: [],
      outputs: [],
      node_functions: [
        {
          name: '_OrganicLorentzLorenz__represent',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'get_hidden_layer',
          docstring:
            '\n        This functions return the first hidden layer of the model.',
          inputs: [
            {
              name: 'X',
              docstring:
                'If 2D array, must be with 1024 dimension and numerical type. It is recommended to be Morgan fingerprint representation of the molecules. If 1D array, must be an array of `str` type, each element represents a molecule in the SMILES format.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'id',
              docstring:
                'This is the id of hidden layers. It can be any of 1, 2, or 3 for the first, second, or third hidden layer, respectively.',
              param_type: ['int'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'layer_output',
              docstring:
                'The array of shape (length_of_X, 128) as the outputs of the first hidden layer (id=1). The array of shape (length_of_X, 64) as the outputs of the first hidden layer (id=2). The array of shape (length_of_X, 32) as the outputs of the first hidden layer (id=3).',
              param_type: ['array'],
              returned: true
            }
          ]
        },
        {
          name: 'load',
          docstring:
            'This function loads the Keras model. The model consists of 3 hidden layers and more than 140K parameters.',
          inputs: [],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'After loading the model, this function predicts refractive index, polarizability, and density of the entery.',
          inputs: [
            {
              name: 'smiles',
              docstring: 'The SMILES representaion of a molecule.',
              param_type: ['str'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'pprint',
              docstring:
                'If True, a short description of the predicted properties will be printed out.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: false,
              default_value: 'True',
              options: null
            }
          ],
          outputs: [
            {
              name: 'predictions',
              docstring:
                'includes estimates of refractive index, polarizability, and density, respectively.',
              param_type: ['tuple'],
              returned: true
            }
          ]
        },
        {
          name: 'train',
          docstring:
            "\n        This function allows the user to retrain the model on a given data set for some further steps.\n        Thus, all the parameters you are able to pass to a keras model's compile or fit methods can be passed to this\n        function as well.",
          inputs: [
            {
              name: 'X',
              docstring:
                'If 2D array, must be with 1024 dimension and numerical type. It is recommended to be Morgan fingerprint representation of the molecules. If 1D array, must be an array of `str` type, each element represents a molecule in the SMILES format. If dataframe, it can be a 2D frame with one columnd of SMILES or 1024 columns of features.',
              param_type: ['array'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'Y',
              docstring:
                'a list of three numpy arrays for refractive index, polarizability, and density, respectively. The length of arrays must be same as the length of X. If dataframe, it must be a 2D frame with 3 columns, each for one of the properties.',
              param_type: ['array', 'list'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'scale: bool, optional (default: True)',
              docstring:
                'If True the X and Y will be scaled in the same fashion as the original traning process (recommended).',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True',
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
  module: 'models'
}
