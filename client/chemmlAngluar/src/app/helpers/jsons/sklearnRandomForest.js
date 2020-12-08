export default {
    name: 'sklearn.ensemble',
    docstring: '',
    inputs: [],
    outputs: [],
    node_functions: [
      {
        name: 'l1_min_c',
        docstring:
          "\n    Return the lowest bound for C such that for C in (l1_min_C, infinity)\n    the model is guaranteed not to be empty. This applies to l1 penalized\n    classifiers, such as LinearSVC with penalty='l1' and\n    linear_model.LogisticRegression with penalty='l1'.\n\n    This value is valid if class_weight parameter in fit() is not set.\n\n    Parameters\n    ----------\n    X : array-like or sparse matrix, shape = [n_samples, n_features]\n        Training vector, where n_samples in the number of samples and\n        n_features is the number of features.\n\n    y : array, shape = [n_samples]\n        Target vector relative to X\n\n    loss : {'squared_hinge', 'log'}, default 'squared_hinge'\n        Specifies the loss function.\n        With 'squared_hinge' it is the squared hinge loss (a.k.a. L2 loss).\n        With 'log' it is the loss of logistic regression models.\n\n    fit_intercept : bool, default: True\n        Specifies if the intercept should be fitted by the model.\n        It must match the fit() method parameter.\n\n    intercept_scaling : float, default: 1\n        when fit_intercept is True, instance vector x becomes\n        [x, intercept_scaling],\n        i.e. a \"synthetic\" feature with constant value equals to\n        intercept_scaling is appended to the instance vector.\n        It must match the fit() method parameter.\n\n    Returns\n    -------\n    l1_min_c : float\n        minimum value for C\n    ",
        inputs: [
          {
            name: 'X',
            docstring:
              'Training vector, where n_samples in the number of samples and n_features is the number of features.',
            param_type: ['array'],
            expected_shape: '[n_samples, n_features]',
            is_optional: false,
            default_value: null,
            options: null
          },
          {
            name: 'y',
            docstring: 'Target vector relative to X',
            param_type: ['array'],
            expected_shape: '[n_samples]',
            is_optional: false,
            default_value: null,
            options: null
          },
          {
            name: 'loss',
            docstring:
              "Specifies the loss function. With 'squared_hinge' it is the squared hinge loss (a.k.a. L2 loss). With 'log' it is the loss of logistic regression models.",
            param_type: ['LIST_VALID_OPTIONS'],
            expected_shape: null,
            is_optional: true,
            default_value: 'squared_hinge',
            options: ['squared_hinge', 'log', 'default squared_hinge']
          },
          {
            name: 'fit_intercept',
            docstring:
              'Specifies if the intercept should be fitted by the model. It must match the fit() method parameter.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: 'True',
            options: null
          },
          {
            name: 'intercept_scaling',
            docstring:
              'when fit_intercept is True, instance vector x becomes [x, intercept_scaling], i.e. a "synthetic" feature with constant value equals to intercept_scaling is appended to the instance vector. It must match the fit() method parameter.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '1',
            options: null
          },
          {
            name: 'obj',
            docstring:
              'True/False flag to indicate reusing the same instance instead of creating a new one',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: false,
            options: null
          }
        ],
        outputs: [
          {
            name: 'l1_min_c',
            docstring: 'minimum value for C',
            param_type: ['float'],
            returned: true
          },
          {
            name: 'obj',
            docstring:
              'True/False flag to indicate reusing the same instance instead of creating a new one',
            param_type: ['bool'],
            returned: true
          }
        ]
      }
    ],
    nodes: [
      {
        name: 'OneClassSVM',
        docstring:
          'Unsupervised Outlier Detection.\n\n    Estimate the support of a high-dimensional distribution',
        inputs: [
          {
            name: 'kernel',
            docstring:
              "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to precompute the kernel matrix.",
            param_type: ['LIST_VALID_OPTIONS'],
            expected_shape: null,
            is_optional: true,
            default_value: 'rbf',
            options: ['linear', 'poly', 'rbf', 'sigmoid', 'precomputed']
          },
          {
            name: 'degree',
            docstring:
              "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
            param_type: ['int'],
            expected_shape: null,
            is_optional: true,
            default_value: '3',
            options: null
          },
          {
            name: 'gamma',
            docstring:
              "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma.",
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: 'auto',
            options: null
          },
          {
            name: 'coef0',
            docstring:
              "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '0.0',
            options: null
          },
          {
            name: 'tol',
            docstring: 'Tolerance for stopping criterion.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: null,
            options: null
          },
          {
            name: 'nu',
            docstring:
              'An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1]. By default 0.5 will be taken.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '0.5',
            options: null
          },
          {
            name: 'shrinking',
            docstring: 'Whether to use the shrinking heuristic.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: null,
            options: null
          },
          {
            name: 'cache_size',
            docstring: 'Specify the size of the kernel cache (in MB).',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: null,
            options: null
          },
          {
            name: 'verbose',
            docstring:
              'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: 'False',
            options: null
          },
          {
            name: 'max_iter',
            docstring:
              'Hard limit on iterations within solver, or -1 for no limit.',
            param_type: ['int'],
            expected_shape: null,
            is_optional: true,
            default_value: '-1',
            options: null
          }
        ],
        outputs: [
          {
            name: 'support_',
            docstring: 'Indices of support vectors.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'support_vectors_',
            docstring: 'Support vectors.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'dual_coef_',
            docstring:
              'Coefficients of the support vectors in the decision function.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'coef_',
            docstring:
              'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is readonly property derived from `dual_coef_` and `support_vectors_`',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'intercept_',
            docstring: 'Constant in the decision function.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'offset_',
            docstring:
              'Offset used to define the decision function from the raw scores. We have the relation: decision_function = score_samples - `offset_`. The offset is the opposite of `intercept_` and is provided for consistency with other outlier detection algorithms.',
            param_type: ['float'],
            returned: false
          }
        ],
        node_functions: [
          {
            name: '__init__',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_compute_kernel',
            docstring: 'Return the data transformed by a callable kernel',
            inputs: [],
            outputs: []
          },
          {
            name: '_decision_function',
            docstring:
              'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
            inputs: [
              {
                name: 'X',
                docstring: '',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              }
            ],
            outputs: [
              {
                name: 'X',
                docstring:
                  'Returns the decision function of the sample for each class in the model.',
                param_type: ['array'],
                returned: true
              }
            ]
          },
          {
            name: '_dense_decision_function',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_dense_fit',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_dense_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_coef',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_param_names',
            docstring: 'Get parameter names for the estimator',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_tags',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_decision_function',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_fit',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_validate_for_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_validate_targets',
            docstring:
              'Validation of y and class_weight.\n\n        Default implementation for SVR and one-class; overridden in BaseSVC.\n        ',
            inputs: [],
            outputs: []
          },
          {
            name: '_warn_from_fit_status',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: 'decision_function',
            docstring:
              'Signed distance to the separating hyperplane.\n\n        Signed distance is positive for an inlier and negative for an outlier.',
            inputs: [
              {
                name: 'X',
                docstring: 'Data.',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'dec',
                docstring: 'Returns the decision function of the samples.',
                param_type: ['array'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'fit',
            docstring:
              '\n        Detects the soft boundary of the set of samples X.',
            inputs: [
              {
                name: 'X',
                docstring:
                  'Set of samples, where n_samples is the number of samples and n_features is the number of features.',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'sample_weight',
                docstring:
                  'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
                param_type: ['array'],
                expected_shape: '(n_samples,)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'y',
                docstring: 'not used, present for API consistency by convention.',
                param_type: [null],
                expected_shape: null,
                is_optional: true,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'fit_predict',
            docstring:
              'Performs fit on X and returns labels for X.\n\n        Returns -1 for outliers and 1 for inliers.',
            inputs: [
              {
                name: 'X',
                docstring: 'Input data.',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'y',
                docstring: 'not used, present for API consistency by convention.',
                param_type: [null],
                expected_shape: null,
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'y',
                docstring: '1 for inliers, -1 for outliers.',
                param_type: ['array'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'predict',
            docstring:
              '\n        Perform classification on samples in X.\n\n        For a one-class model, +1 or -1 is returned.',
            inputs: [
              {
                name: 'X',
                docstring:
                  'For kernel="precomputed", the expected shape of X is [n_samples_test, n_samples_train]',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'y_pred',
                docstring: 'Class labels for samples in X.',
                param_type: ['array'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'score_samples',
            docstring: 'Raw scoring function of the samples.',
            inputs: [
              {
                name: 'X',
                docstring: '',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'score_samples',
                docstring:
                  'Returns the (unshifted) scoring function of the samples.',
                param_type: ['array'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          }
        ],
        nodes: []
      },
      {
        name: 'SVC',
        docstring:
          'C-Support Vector Classification.\n\n    The implementation is based on libsvm. The fit time scales at least\n    quadratically with the number of samples and may be impractical\n    beyond tens of thousands of samples.\n\n    The multiclass support is handled according to a one-vs-one scheme.\n\n    For details on the precise mathematical formulation of the provided\n    kernel functions and how `gamma`, `coef0` and `degree` affect each\n    other, see the corresponding section in the narrative documentation:\n    :ref:`svm_kernels`.',
        inputs: [
          {
            name: 'C',
            docstring: 'Penalty parameter C of the error term.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '1.0',
            options: null
          },
          {
            name: 'kernel',
            docstring:
              "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to pre-compute the kernel matrix from data matrices; that matrix should be an array of shape ``(n_samples, n_samples)``.",
            param_type: ['LIST_VALID_OPTIONS'],
            expected_shape: null,
            is_optional: true,
            default_value: 'rbf',
            options: ['linear', 'poly', 'rbf', 'sigmoid', 'precomputed']
          },
          {
            name: 'degree',
            docstring:
              "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
            param_type: ['int'],
            expected_shape: null,
            is_optional: true,
            default_value: '3',
            options: null
          },
          {
            name: 'gamma',
            docstring:
              "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma.",
            param_type: ['float', 'str'],
            expected_shape: null,
            is_optional: true,
            default_value: 'auto',
            options: null
          },
          {
            name: 'coef0',
            docstring:
              "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '0.0',
            options: null
          },
          {
            name: 'shrinking',
            docstring: 'Whether to use the shrinking heuristic.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: 'True',
            options: null
          },
          {
            name: 'probability',
            docstring:
              'Whether to enable probability estimates. This must be enabled prior to calling `fit`, and will slow down that method.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: 'False',
            options: null
          },
          {
            name: 'tol',
            docstring: 'Tolerance for stopping criterion.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '1e-3',
            options: null
          },
          {
            name: 'class_weight',
            docstring:
              'Set the parameter C of class i to class_weight[i]*C for SVC. If not given, all classes are supposed to have weight one. The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``',
            param_type: ['str', 'dict'],
            expected_shape: null,
            is_optional: true,
            default_value: null,
            options: null
          },
          {
            name: 'verbose',
            docstring:
              'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: 'False',
            options: null
          },
          {
            name: 'max_iter',
            docstring:
              'Hard limit on iterations within solver, or -1 for no limit.',
            param_type: ['int'],
            expected_shape: null,
            is_optional: true,
            default_value: '-1',
            options: null
          },
          {
            name: 'decision_function_shape',
            docstring:
              "Whether to return a one-vs-rest ('ovr') decision function of shape (n_samples, n_classes) as all other classifiers, or the original one-vs-one ('ovo') decision function of libsvm which has shape (n_samples, n_classes * (n_classes - 1) / 2). However, one-vs-one ('ovo') is always used as multi-class strategy.",
            param_type: ['LIST_VALID_OPTIONS'],
            expected_shape: null,
            is_optional: true,
            default_value: 'ovr',
            options: ['ovr', 'ovo']
          }
        ],
        outputs: [
          {
            name: 'support_',
            docstring: 'Indices of support vectors.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'support_vectors_',
            docstring: 'Support vectors.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'n_support_',
            docstring: 'Number of support vectors for each class.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'dual_coef_',
            docstring:
              'Coefficients of the support vector in the decision function. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'coef_',
            docstring:
              'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is a readonly property derived from `dual_coef_` and `support_vectors_`.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'intercept_',
            docstring: 'Constants in decision function.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'fit_status_',
            docstring: '0 if correctly fitted, 1 otherwise (will raise warning)',
            param_type: ['int'],
            returned: false
          },
          {
            name: 'probA_',
            docstring: '',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'probB_',
            docstring:
              'If probability=True, the parameters learned in Platt scaling to produce probability estimates from decision values. If probability=False, an empty array. Platt scaling uses the logistic function ``1 / (1 + exp(decision_value * probA_ + probB_))`` where ``probA_`` and ``probB_`` are learned from the dataset.',
            param_type: ['array'],
            returned: false
          }
        ],
        node_functions: [
          {
            name: '__init__',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_check_proba',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_compute_kernel',
            docstring: 'Return the data transformed by a callable kernel',
            inputs: [],
            outputs: []
          },
          {
            name: '_decision_function',
            docstring:
              'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
            inputs: [
              {
                name: 'X',
                docstring: '',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              }
            ],
            outputs: [
              {
                name: 'X',
                docstring:
                  'Returns the decision function of the sample for each class in the model.',
                param_type: ['array'],
                returned: true
              }
            ]
          },
          {
            name: '_dense_decision_function',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_dense_fit',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_dense_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_dense_predict_proba',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_coef',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_param_names',
            docstring: 'Get parameter names for the estimator',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_tags',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_predict_log_proba',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_predict_proba',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_decision_function',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_fit',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_predict_proba',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_validate_for_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_validate_targets',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_warn_from_fit_status',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: 'decision_function',
            docstring:
              "Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_classes * (n_classes-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n            If decision_function_shape='ovr', the shape is (n_samples,\n            n_classes).\n\n        Notes\n        -----\n        If decision_function_shape='ovo', the function values are proportional\n        to the distance of the samples X to the separating hyperplane. If the\n        exact distances are required, divide the function values by the norm of\n        the weight vector (``coef_``). See also `this question\n        <https://stats.stackexchange.com/questions/14876/\n        interpreting-distance-from-hyperplane-in-svm>`_ for further details.\n        If decision_function_shape='ovr', the decision function is a monotonic\n        transformation of ovo decision function.\n        ",
            inputs: [
              {
                name: 'X',
                docstring: 'Data.',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'X',
                docstring:
                  "Returns the decision function of the sample for each class in the model. If decision_function_shape='ovr', the shape is (n_samples, n_classes), (n_samples, n_classes * (n_classes-1) / 2) otherwise",
                param_type: ['array'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'fit',
            docstring: 'Fit the SVM model according to the given training data.',
            inputs: [
              {
                name: 'X',
                docstring:
                  'Training vectors, where n_samples is the number of samples and n_features is the number of features. For kernel="precomputed", the expected shape of X is (n_samples, n_samples).',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'y',
                docstring:
                  'Target values (class labels in classification, real numbers in regression)',
                param_type: ['array'],
                expected_shape: '(n_samples,)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'sample_weight',
                docstring:
                  'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
                param_type: ['array'],
                expected_shape: '(n_samples,)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'predict',
            docstring:
              'Perform classification on samples in X.\n\n        For an one-class model, +1 or -1 is returned.',
            inputs: [
              {
                name: 'X',
                docstring:
                  'For kernel="precomputed", the expected shape of X is [n_samples_test, n_samples_train]',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'y_pred',
                docstring: 'Class labels for samples in X.',
                param_type: ['array'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'score',
            docstring:
              'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.',
            inputs: [
              {
                name: 'X',
                docstring: 'Test samples.',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'y',
                docstring: 'True labels for X.',
                param_type: ['array'],
                expected_shape: '(n_samples) or (n_samples, n_outputs)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'sample_weight',
                docstring: 'Sample weights.',
                param_type: ['array'],
                expected_shape: '[n_samples], optional',
                is_optional: true,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'score',
                docstring: 'Mean accuracy of self.predict(X) wrt. y.',
                param_type: ['float'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          }
        ],
        nodes: []
      },
      {
        name: 'SVR',
        docstring:
          'Epsilon-Support Vector Regression.\n\n    The free parameters in the model are C and epsilon.\n\n    The implementation is based on libsvm. The fit time complexity\n    is more than quadratic with the number of samples which makes it hard\n    to scale to datasets with more than a couple of 10000 samples. ',
        inputs: [
          {
            name: 'kernel',
            docstring:
              "Specifies the kernel type to be used in the algorithm. It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or a callable. If none is given, 'rbf' will be used. If a callable is given it is used to precompute the kernel matrix.",
            param_type: ['LIST_VALID_OPTIONS'],
            expected_shape: null,
            is_optional: true,
            default_value: 'rbf',
            options: ['linear', 'poly', 'rbf', 'sigmoid', 'precomputed']
          },
          {
            name: 'degree',
            docstring:
              "Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.",
            param_type: ['int'],
            expected_shape: null,
            is_optional: true,
            default_value: '3',
            options: null
          },
          {
            name: 'gamma',
            docstring:
              "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.  Current default is 'auto' which uses 1 / n_features, if ``gamma='scale'`` is passed then it uses 1 / (n_features * X.var()) as value of gamma. ",
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: 'auto',
            options: null
          },
          {
            name: 'coef0',
            docstring:
              "Independent term in kernel function. It is only significant in 'poly' and 'sigmoid'.",
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '0.0',
            options: null
          },
          {
            name: 'tol',
            docstring: 'Tolerance for stopping criterion.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '1e-3',
            options: null
          },
          {
            name: 'C',
            docstring: 'Penalty parameter C of the error term.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '1.0',
            options: null
          },
          {
            name: 'epsilon',
            docstring:
              'Epsilon in the epsilon-SVR model. It specifies the epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value.',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: '0.1',
            options: null
          },
          {
            name: 'shrinking',
            docstring: 'Whether to use the shrinking heuristic.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: 'True',
            options: null
          },
          {
            name: 'cache_size',
            docstring: 'Specify the size of the kernel cache (in MB).',
            param_type: ['float'],
            expected_shape: null,
            is_optional: true,
            default_value: null,
            options: null
          },
          {
            name: 'verbose',
            docstring:
              'Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.',
            param_type: ['bool'],
            expected_shape: null,
            is_optional: true,
            default_value: 'False',
            options: null
          },
          {
            name: 'max_iter',
            docstring:
              'Hard limit on iterations within solver, or -1 for no limit.',
            param_type: ['int'],
            expected_shape: null,
            is_optional: true,
            default_value: '-1',
            options: null
          }
        ],
        outputs: [
          {
            name: 'support_',
            docstring: 'Indices of support vectors.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'support_vectors_',
            docstring: 'Support vectors.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'dual_coef_',
            docstring:
              'Coefficients of the support vector in the decision function.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'coef_',
            docstring:
              'Weights assigned to the features (coefficients in the primal problem). This is only available in the case of a linear kernel.  `coef_` is readonly property derived from `dual_coef_` and `support_vectors_`.',
            param_type: ['array'],
            returned: false
          },
          {
            name: 'intercept_',
            docstring: 'Constants in decision function.',
            param_type: ['array'],
            returned: false
          }
        ],
        node_functions: [
          {
            name: '__init__',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_compute_kernel',
            docstring: 'Return the data transformed by a callable kernel',
            inputs: [],
            outputs: []
          },
          {
            name: '_decision_function',
            docstring:
              'Evaluates the decision function for the samples in X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n\n        Returns\n        -------\n        X : array-like, shape (n_samples, n_class * (n_class-1) / 2)\n            Returns the decision function of the sample for each class\n            in the model.\n        ',
            inputs: [
              {
                name: 'X',
                docstring: '',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              }
            ],
            outputs: [
              {
                name: 'X',
                docstring:
                  'Returns the decision function of the sample for each class in the model.',
                param_type: ['array'],
                returned: true
              }
            ]
          },
          {
            name: '_dense_decision_function',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_dense_fit',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_dense_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_coef',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_param_names',
            docstring: 'Get parameter names for the estimator',
            inputs: [],
            outputs: []
          },
          {
            name: '_get_tags',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_decision_function',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_fit',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_sparse_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_validate_for_predict',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: '_validate_targets',
            docstring:
              'Validation of y and class_weight.\n\n        Default implementation for SVR and one-class; overridden in BaseSVC.\n        ',
            inputs: [],
            outputs: []
          },
          {
            name: '_warn_from_fit_status',
            docstring: 'None',
            inputs: [],
            outputs: []
          },
          {
            name: 'fit',
            docstring: 'Fit the SVM model according to the given training data.',
            inputs: [
              {
                name: 'X',
                docstring:
                  'Training vectors, where n_samples is the number of samples and n_features is the number of features. For kernel="precomputed", the expected shape of X is (n_samples, n_samples).',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'y',
                docstring:
                  'Target values (class labels in classification, real numbers in regression)',
                param_type: ['array'],
                expected_shape: '(n_samples,)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'sample_weight',
                docstring:
                  'Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.',
                param_type: ['array'],
                expected_shape: '(n_samples,)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'predict',
            docstring:
              'Perform regression on samples in X.\n\n        For an one-class model, +1 (inlier) or -1 (outlier) is returned.',
            inputs: [
              {
                name: 'X',
                docstring:
                  'For kernel="precomputed", the expected shape of X is (n_samples_test, n_samples_train).',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'y_pred',
                docstring: '',
                param_type: ['array'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          },
          {
            name: 'score',
            docstring:
              'Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.',
            inputs: [
              {
                name: 'X',
                docstring:
                  'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.',
                param_type: ['array'],
                expected_shape: '(n_samples, n_features)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'y',
                docstring: 'True values for X.',
                param_type: ['array'],
                expected_shape: '(n_samples) or (n_samples, n_outputs)',
                is_optional: false,
                default_value: null,
                options: null
              },
              {
                name: 'sample_weight',
                docstring: 'Sample weights.',
                param_type: ['array'],
                expected_shape: '[n_samples], optional',
                is_optional: true,
                default_value: null,
                options: null
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                expected_shape: null,
                is_optional: true,
                default_value: false,
                options: null
              }
            ],
            outputs: [
              {
                name: 'score',
                docstring: 'R^2 of self.predict(X) wrt. y.',
                param_type: ['float'],
                returned: true
              },
              {
                name: 'obj',
                docstring:
                  'True/False flag to indicate reusing the same instance instead of creating a new one',
                param_type: ['bool'],
                returned: true
              }
            ]
          }
        ],
        nodes: []
      }
    ],
    library: 'sklearn',
    module: 'svm'
  }
  