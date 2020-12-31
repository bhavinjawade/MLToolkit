export default {
  name: 'sklearn.model_selection',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'train_test_split',
      docstring:
        'Split arrays or matrices into random train and test subsets\n\n    Quick utility that wraps input validation and\n    ``next(ShuffleSplit().split(X, y))`` and application to input data\n    into a single call for splitting (and optionally subsampling) data in a\n    oneliner.',
      inputs: [
        {
          name: '*arrays',
          docstring:
            'Allowed inputs are lists, numpy arrays, scipy-sparse matrices or pandas dataframes.',
          param_type: ['list'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'test_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If None, the value is set to the complement of the train size. If ``train_size`` is also None, it will be set to 0.25.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'train_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If None, the value is automatically set to the complement of the test size.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'shuffle',
          docstring:
            'Whether or not to shuffle the data before splitting. If shuffle=False then stratify must be None.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'stratify',
          docstring:
            'If not None, data is split in a stratified fashion, using this as the class labels.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        }
      ],
      outputs: [
        {
          name: 'train1',
          docstring: 'Train X attribute',
          param_type: ['array', 'list'],
          returned: true
        },
        {
          name: 'test1',
          docstring: 'Test X attribue',
          param_type: ['array', 'list'],
          returned: true
        },
        {
          name: 'train2',
          docstring: 'Train Y attribute',
          param_type: ['array', 'list'],
          returned: true
        },
        {
          name: 'test2',
          docstring: 'Test Y attribute',
          param_type: ['array', 'list'],
          returned: true
        }
      ]
    },
  ],
  nodes: [
    {
      name: 'train_test_split',
      docstring:
        'Split arrays or matrices into random train and test subsets\n\n    Quick utility that wraps input validation and\n    ``next(ShuffleSplit().split(X, y))`` and application to input data\n    into a single call for splitting (and optionally subsampling) data in a\n    oneliner.',
      node_functions: [
        {
          name: 'split2',
          docstring: 'None',
          inputs: [
            {
              name: '*args',
              docstring:
                'Allowed inputs are lists, numpy arrays, scipy-sparse matrices or pandas dataframes.',
              param_type: ['list'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'train1',
              docstring: 'Train X attribute',
              param_type: ['array', 'list'],
              returned: true
            },
            {
              name: 'test1',
              docstring: 'Test X attribue',
              param_type: ['array', 'list'],
              returned: true
            },
            {
              name: 'train2',
              docstring: 'Train Y attribute',
              param_type: ['array', 'list'],
              returned: true
            },
            {
              name: 'test2',
              docstring: 'Test Y attribute',
              param_type: ['array', 'list'],
              returned: true
            }
          ]
        }
      ],
      inputs: [
        {
          name: 'test_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If None, the value is set to the complement of the train size. If ``train_size`` is also None, it will be set to 0.25.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'train_size',
          docstring:
            'If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If None, the value is automatically set to the complement of the test size.',
          param_type: ['int', 'float', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'shuffle',
          docstring:
            'Whether or not to shuffle the data before splitting. If shuffle=False then stratify must be None.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'stratify',
          docstring:
            'If not None, data is split in a stratified fashion, using this as the class labels.',
          param_type: ['array', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        }
      ],
      outputs: [
        {
          name: 'train1',
          docstring: 'Train X attribute',
          param_type: ['array', 'list'],
          returned: true
        },
        {
          name: 'test1',
          docstring: 'Test X attribue',
          param_type: ['array', 'list'],
          returned: true
        },
        {
          name: 'train2',
          docstring: 'Train Y attribute',
          param_type: ['array', 'list'],
          returned: true
        },
        {
          name: 'test2',
          docstring: 'Test Y attribute',
          param_type: ['array', 'list'],
          returned: true
        }
      ]
    },
    {
      name: 'GridSearchCV',
      docstring:
        'Exhaustive search over specified parameter values for an estimator.\n\n    Important members are fit, predict.\n\n    GridSearchCV implements a "fit" and a "score" method.\n    It also implements "predict", "predict_proba", "decision_function",\n    "transform" and "inverse_transform" if they are implemented in the\n    estimator used.\n\n    The parameters of the estimator used to apply these methods are optimized\n    by cross-validated grid-search over a parameter grid.',
      inputs: [
        {
          name: 'estimator',
          docstring:
            'This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a ``score`` function, or ``scoring`` must be passed.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'param_grid',
          docstring:
            'Dictionary with parameters names (string) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.',
          param_type: ['dict', 'list'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'scoring',
          docstring:
            "A single string (see :ref:`scoring_parameter`) or a callable (see :ref:`scoring`) to evaluate the predictions on the test set.  For evaluating multiple metrics, either give a list of (unique) strings or a dict with names as keys and callables as values.  NOTE that when using custom scorers, each scorer should return a single value. Metric functions returning a list/array of values can be wrapped into multiple scorers that return one value each.  See :ref:`multimetric_grid_search` for an example.  If None, the estimator's score method is used.",
          param_type: ['str', 'dict', 'list', 'tuple', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of jobs to run in parallel. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:      - None, in which case all the jobs are immediately       created and spawned. Use this for lightweight and       fast-running jobs, to avoid delays due to on-demand       spawning of the jobs      - An int, giving the exact number of total jobs that are       spawned      - A string, giving an expression as a function of n_jobs,       as in '2*n_jobs'",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'iid',
          docstring:
            'If True, return the average score across folds, weighted by the number of samples in each test set. In this case, the data is assumed to be identically distributed across the folds, and the loss minimized is the total loss per sample, and not the mean loss across the folds. If False, return the average score across folds. Default is True, but will change to False in version 0.22, to correspond to the standard definition of cross-validation.  .. versionchanged:: 0.20     Parameter ``iid`` will change from True to False by default in     version 0.22, and will be removed in 0.24.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'warn'
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'refit',
          docstring:
            'Refit an estimator using the best found parameters on the whole dataset.  For multiple metric evaluation, this needs to be a string denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.  Where there are considerations other than maximum score in choosing a best estimator, ``refit`` can be set to a function which returns the selected ``best_index_`` given ``cv_results_``.  The refitted estimator is made available at the ``best_estimator_`` attribute and permits using ``predict`` directly on this ``GridSearchCV`` instance.  Also for multiple metric evaluation, the attributes ``best_index_``, ``best_score_`` and ``best_params_`` will only be available if ``refit`` is set and all of them will be determined w.r.t this specific scorer. ``best_score_`` is not returned if refit is callable.  See ``scoring`` parameter to know more about multiple metric evaluation.  .. versionchanged:: 0.20     Support for callable added.',
          param_type: ['bool', 'str', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'verbose',
          docstring: 'Controls the verbosity: the higher, the more messages.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise' but from version 0.22 it will change to np.nan.",
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_train_score',
          docstring:
            'If ``False``, the ``cv_results_`` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        }
      ],
      outputs: [
        {
          name: 'cv_results_',
          docstring:
            "A dict with keys as column headers and values as columns, that can be imported into a pandas ``DataFrame``.  For instance the below given table  +------------+-----------+------------+-----------------+---+---------+ |param_kernel|param_gamma|param_degree|split0_test_score|...|rank_t...| +============+===========+============+=================+===+=========+ |  'poly'    |     --    |      2     |       0.80      |...|    2    | +------------+-----------+------------+-----------------+---+---------+ |  'poly'    |     --    |      3     |       0.70      |...|    4    | +------------+-----------+------------+-----------------+---+---------+ |  'rbf'     |     0.1   |     --     |       0.80      |...|    3    | +------------+-----------+------------+-----------------+---+---------+ |  'rbf'     |     0.2   |     --     |       0.93      |...|    1    | +------------+-----------+------------+-----------------+---+---------+  will be represented by a ``cv_results_`` dict of::      {     'param_kernel': masked_array(data = ['poly', 'poly', 'rbf', 'rbf'],                                  mask = [False False False False]...)     'param_gamma': masked_array(data = [-- -- 0.1 0.2],                                 mask = [ True  True False False]...),     'param_degree': masked_array(data = [2.0 3.0 -- --],                                  mask = [False False  True  True]...),     'split0_test_score'  : [0.80, 0.70, 0.80, 0.93],     'split1_test_score'  : [0.82, 0.50, 0.70, 0.78],     'mean_test_score'    : [0.81, 0.60, 0.75, 0.85],     'std_test_score'     : [0.01, 0.10, 0.05, 0.08],     'rank_test_score'    : [2, 4, 3, 1],     'split0_train_score' : [0.80, 0.92, 0.70, 0.93],     'split1_train_score' : [0.82, 0.55, 0.70, 0.87],     'mean_train_score'   : [0.81, 0.74, 0.70, 0.90],     'std_train_score'    : [0.01, 0.19, 0.00, 0.03],     'mean_fit_time'      : [0.73, 0.63, 0.43, 0.49],     'std_fit_time'       : [0.01, 0.02, 0.01, 0.01],     'mean_score_time'    : [0.01, 0.06, 0.04, 0.04],     'std_score_time'     : [0.00, 0.00, 0.00, 0.01],     'params'             : [{'kernel': 'poly', 'degree': 2}, ...],     }  NOTE  The key ``'params'`` is used to store a list of parameter settings dicts for all the parameter candidates.  The ``mean_fit_time``, ``std_fit_time``, ``mean_score_time`` and ``std_score_time`` are all in seconds.  For multi-metric evaluation, the scores for all the scorers are available in the ``cv_results_`` dict at the keys ending with that scorer's name (``'_<scorer_name>'``) instead of ``'_score'`` shown above. ('split0_test_precision', 'mean_train_precision' etc.)",
          param_type: ['array', 'dict'],
          returned: false
        },
        {
          name: 'best_estimator_',
          docstring:
            'Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if ``refit=False``.  See ``refit`` parameter for more information on allowed values.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_score_',
          docstring:
            'Mean cross-validated score of the best_estimator  For multi-metric evaluation, this is present only if ``refit`` is specified.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'best_params_',
          docstring:
            'Parameter setting that gave the best results on the hold out data.  For multi-metric evaluation, this is present only if ``refit`` is specified.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_index_',
          docstring:
            "The index (of the ``cv_results_`` arrays) which corresponds to the best candidate parameter setting.  The dict at ``search.cv_results_['params'][search.best_index_]`` gives the parameter setting for the best model, that gives the highest mean score (``search.best_score_``).  For multi-metric evaluation, this is present only if ``refit`` is specified.",
          param_type: ['int'],
          returned: false
        },
        {
          name: 'scorer_',
          docstring:
            'Scorer function used on the held out data to choose the best parameters for the model.  For multi-metric evaluation, this attribute holds the validated ``scoring`` dict which maps the scorer key to the scorer callable.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'n_splits_',
          docstring:
            'The number of cross-validation splits (folds/iterations).',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'refit_time_',
          docstring:
            'Seconds used for refitting the best model on the whole dataset.  This is present only if ``refit`` is not False.',
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
          name: '_check_is_fitted',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_format_results',
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
          name: '_run_search',
          docstring: 'Search all candidates in param_grid',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Call decision_function on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``decision_function``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Run fit with all sets of parameters.\n\n        Parameters\n        ----------\n\n        X : array-like, shape = [n_samples, n_features]\n            Training vector, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set. Only used in conjunction with a "Group" `cv`\n            instance (e.g., `GroupKFold`).\n\n        **fit_params : dict of string -> object\n            Parameters passed to the ``fit`` method of the estimator\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape: '[n_samples] or [n_samples, n_output], optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a "Group" `cv` instance (e.g., `GroupKFold`).',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: '**fit_params',
              docstring:
                'Parameters passed to the ``fit`` method of the estimator',
              param_type: ['object', 'str', 'dict'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Call inverse_transform on the estimator with the best found params.\n\n        Only available if the underlying estimator implements\n        ``inverse_transform`` and ``refit=True``.\n\n        Parameters\n        ----------\n        Xt : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'Xt',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Call predict on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_log_proba',
          docstring:
            'Call predict_log_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_log_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_proba',
          docstring:
            'Call predict_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'score',
          docstring:
            'Returns the score on the given data, if the estimator has been refit.\n\n        This uses the score defined by ``scoring`` where provided, and the\n        ``best_estimator_.score`` method otherwise.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n            Input data, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        Returns\n        -------\n        score : float\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Input data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape: '[n_samples] or [n_samples, n_output], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: '',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Call transform on the estimator with the best found parameters.\n\n        Only available if the underlying estimator supports ``transform`` and\n        ``refit=True``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'RandomizedSearchCV',
      docstring:
        "Randomized search on hyper parameters.\n\n    RandomizedSearchCV implements a \"fit\" and a \"score\" method.\n    It also implements \"predict\", \"predict_proba\", \"decision_function\",\n    \"transform\" and \"inverse_transform\" if they are implemented in the\n    estimator used.\n\n    The parameters of the estimator used to apply these methods are optimized\n    by cross-validated search over parameter settings.\n\n    In contrast to GridSearchCV, not all parameter values are tried out, but\n    rather a fixed number of parameter settings is sampled from the specified\n    distributions. The number of parameter settings that are tried is\n    given by n_iter.\n\n    If all parameters are presented as a list,\n    sampling without replacement is performed. If at least one parameter\n    is given as a distribution, sampling with replacement is used.\n    It is highly recommended to use continuous distributions for continuous\n    parameters.\n\n    Note that before SciPy 0.16, the ``scipy.stats.distributions`` do not\n    accept a custom RNG instance and always use the singleton RNG from\n    ``numpy.random``. Hence setting ``random_state`` will not guarantee a\n    deterministic iteration whenever ``scipy.stats`` distributions are used to\n    define the parameter search space.\n\n    Read more in the :ref:`User Guide <randomized_parameter_search>`.\n\n    Parameters\n    ----------\n    estimator : estimator object.\n        A object of that type is instantiated for each grid point.\n        This is assumed to implement the scikit-learn estimator interface.\n        Either estimator needs to provide a ``score`` function,\n        or ``scoring`` must be passed.\n\n    param_distributions : dict\n        Dictionary with parameters names (string) as keys and distributions\n        or lists of parameters to try. Distributions must provide a ``rvs``\n        method for sampling (such as those from scipy.stats.distributions).\n        If a list is given, it is sampled uniformly.\n\n    n_iter : int, default=10\n        Number of parameter settings that are sampled. n_iter trades\n        off runtime vs quality of the solution.\n\n    scoring : string, callable, list/tuple, dict or None, default: None\n        A single string (see :ref:`scoring_parameter`) or a callable\n        (see :ref:`scoring`) to evaluate the predictions on the test set.\n\n        For evaluating multiple metrics, either give a list of (unique) strings\n        or a dict with names as keys and callables as values.\n\n        NOTE that when using custom scorers, each scorer should return a single\n        value. Metric functions returning a list/array of values can be wrapped\n        into multiple scorers that return one value each.\n\n        See :ref:`multimetric_grid_search` for an example.\n\n        If None, the estimator's score method is used.\n\n    n_jobs : int or None, optional (default=None)\n        Number of jobs to run in parallel.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    pre_dispatch : int, or string, optional\n        Controls the number of jobs that get dispatched during parallel\n        execution. Reducing this number can be useful to avoid an\n        explosion of memory consumption when more jobs get dispatched\n        than CPUs can process. This parameter can be:\n\n            - None, in which case all the jobs are immediately\n              created and spawned. Use this for lightweight and\n              fast-running jobs, to avoid delays due to on-demand\n              spawning of the jobs\n\n            - An int, giving the exact number of total jobs that are\n              spawned\n\n            - A string, giving an expression as a function of n_jobs,\n              as in '2*n_jobs'\n\n    iid : boolean, default='warn'\n        If True, return the average score across folds, weighted by the number\n        of samples in each test set. In this case, the data is assumed to be\n        identically distributed across the folds, and the loss minimized is\n        the total loss per sample, and not the mean loss across the folds. If\n        False, return the average score across folds. Default is True, but\n        will change to False in version 0.22, to correspond to the standard\n        definition of cross-validation.\n\n        .. versionchanged:: 0.20\n            Parameter ``iid`` will change from True to False by default in\n            version 0.22, and will be removed in 0.24.\n\n    cv : int, cross-validation generator or an iterable, optional\n        Determines the cross-validation splitting strategy.\n        Possible inputs for cv are:\n\n        - None, to use the default 3-fold cross validation,\n        - integer, to specify the number of folds in a `(Stratified)KFold`,\n        - :term:`CV splitter`,\n        - An iterable yielding (train, test) splits as arrays of indices.\n\n        For integer/None inputs, if the estimator is a classifier and ``y`` is\n        either binary or multiclass, :class:`StratifiedKFold` is used. In all\n        other cases, :class:`KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. versionchanged:: 0.20\n            ``cv`` default value if None will change from 3-fold to 5-fold\n            in v0.22.\n\n    refit : boolean, string, or callable, default=True\n        Refit an estimator using the best found parameters on the whole\n        dataset.\n\n        For multiple metric evaluation, this needs to be a string denoting the\n        scorer that would be used to find the best parameters for refitting\n        the estimator at the end.\n\n        Where there are considerations other than maximum score in\n        choosing a best estimator, ``refit`` can be set to a function which\n        returns the selected ``best_index_`` given the ``cv_results``.\n\n        The refitted estimator is made available at the ``best_estimator_``\n        attribute and permits using ``predict`` directly on this\n        ``RandomizedSearchCV`` instance.\n\n        Also for multiple metric evaluation, the attributes ``best_index_``,\n        ``best_score_`` and ``best_params_`` will only be available if\n        ``refit`` is set and all of them will be determined w.r.t this specific\n        scorer. When refit is callable, ``best_score_`` is disabled.\n\n        See ``scoring`` parameter to know more about multiple metric\n        evaluation.\n\n        .. versionchanged:: 0.20\n            Support for callable added.\n\n    verbose : integer\n        Controls the verbosity: the higher, the more messages.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        Pseudo random number generator state used for random uniform sampling\n        from lists of possible values instead of scipy.stats distributions.\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    error_score : 'raise' or numeric\n        Value to assign to the score if an error occurs in estimator fitting.\n        If set to 'raise', the error is raised. If a numeric value is given,\n        FitFailedWarning is raised. This parameter does not affect the refit\n        step, which will always raise the error. Default is 'raise' but from\n        version 0.22 it will change to np.nan.\n\n    return_train_score : boolean, default=False\n        If ``False``, the ``cv_results_`` attribute will not include training\n        scores.\n        Computing training scores is used to get insights on how different\n        parameter settings impact the overfitting/underfitting trade-off.\n        However computing the scores on the training set can be computationally\n        expensive and is not strictly required to select the parameters that\n        yield the best generalization performance.\n\n    Attributes\n    ----------\n    cv_results_ : dict of numpy (masked) ndarrays\n        A dict with keys as column headers and values as columns, that can be\n        imported into a pandas ``DataFrame``.\n\n        For instance the below given table\n\n        +--------------+-------------+-------------------+---+---------------+\n        | param_kernel | param_gamma | split0_test_score |...|rank_test_score|\n        +==============+=============+===================+===+===============+\n        |    'rbf'     |     0.1     |       0.80        |...|       2       |\n        +--------------+-------------+-------------------+---+---------------+\n        |    'rbf'     |     0.2     |       0.90        |...|       1       |\n        +--------------+-------------+-------------------+---+---------------+\n        |    'rbf'     |     0.3     |       0.70        |...|       1       |\n        +--------------+-------------+-------------------+---+---------------+\n\n        will be represented by a ``cv_results_`` dict of::\n\n            {\n            'param_kernel' : masked_array(data = ['rbf', 'rbf', 'rbf'],\n                                          mask = False),\n            'param_gamma'  : masked_array(data = [0.1 0.2 0.3], mask = False),\n            'split0_test_score'  : [0.80, 0.90, 0.70],\n            'split1_test_score'  : [0.82, 0.50, 0.70],\n            'mean_test_score'    : [0.81, 0.70, 0.70],\n            'std_test_score'     : [0.01, 0.20, 0.00],\n            'rank_test_score'    : [3, 1, 1],\n            'split0_train_score' : [0.80, 0.92, 0.70],\n            'split1_train_score' : [0.82, 0.55, 0.70],\n            'mean_train_score'   : [0.81, 0.74, 0.70],\n            'std_train_score'    : [0.01, 0.19, 0.00],\n            'mean_fit_time'      : [0.73, 0.63, 0.43],\n            'std_fit_time'       : [0.01, 0.02, 0.01],\n            'mean_score_time'    : [0.01, 0.06, 0.04],\n            'std_score_time'     : [0.00, 0.00, 0.00],\n            'params'             : [{'kernel' : 'rbf', 'gamma' : 0.1}, ...],\n            }\n\n        NOTE\n\n        The key ``'params'`` is used to store a list of parameter\n        settings dicts for all the parameter candidates.\n\n        The ``mean_fit_time``, ``std_fit_time``, ``mean_score_time`` and\n        ``std_score_time`` are all in seconds.\n\n        For multi-metric evaluation, the scores for all the scorers are\n        available in the ``cv_results_`` dict at the keys ending with that\n        scorer's name (``'_<scorer_name>'``) instead of ``'_score'`` shown\n        above. ('split0_test_precision', 'mean_train_precision' etc.)\n\n    best_estimator_ : estimator or dict\n        Estimator that was chosen by the search, i.e. estimator\n        which gave highest score (or smallest loss if specified)\n        on the left out data. Not available if ``refit=False``.\n\n        For multi-metric evaluation, this attribute is present only if\n        ``refit`` is specified.\n\n        See ``refit`` parameter for more information on allowed values.\n\n    best_score_ : float\n        Mean cross-validated score of the best_estimator.\n\n        For multi-metric evaluation, this is not available if ``refit`` is\n        ``False``. See ``refit`` parameter for more information.\n\n    best_params_ : dict\n        Parameter setting that gave the best results on the hold out data.\n\n        For multi-metric evaluation, this is not available if ``refit`` is\n        ``False``. See ``refit`` parameter for more information.\n\n    best_index_ : int\n        The index (of the ``cv_results_`` arrays) which corresponds to the best\n        candidate parameter setting.\n\n        The dict at ``search.cv_results_['params'][search.best_index_]`` gives\n        the parameter setting for the best model, that gives the highest\n        mean score (``search.best_score_``).\n\n        For multi-metric evaluation, this is not available if ``refit`` is\n        ``False``. See ``refit`` parameter for more information.\n\n    scorer_ : function or a dict\n        Scorer function used on the held out data to choose the best\n        parameters for the model.\n\n        For multi-metric evaluation, this attribute holds the validated\n        ``scoring`` dict which maps the scorer key to the scorer callable.\n\n    n_splits_ : int\n        The number of cross-validation splits (folds/iterations).\n\n    refit_time_ : float\n        Seconds used for refitting the best model on the whole dataset.\n\n        This is present only if ``refit`` is not False.\n\n    Notes\n    -----\n    The parameters selected are those that maximize the score of the held-out\n    data, according to the scoring parameter.\n\n    If `n_jobs` was set to a value higher than one, the data is copied for each\n    parameter setting(and not `n_jobs` times). This is done for efficiency\n    reasons if individual jobs take very little time, but may raise errors if\n    the dataset is large and not enough memory is available.  A workaround in\n    this case is to set `pre_dispatch`. Then, the memory is copied only\n    `pre_dispatch` many times. A reasonable value for `pre_dispatch` is `2 *\n    n_jobs`.\n\n    See Also\n    --------\n    :class:`GridSearchCV`:\n        Does exhaustive search over a grid of parameters.\n\n    :class:`ParameterSampler`:\n        A generator over parameter settings, constructed from\n        param_distributions.\n\n    ",
      inputs: [
        {
          name: 'estimator',
          docstring:
            'A object of that type is instantiated for each grid point. This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a ``score`` function, or ``scoring`` must be passed.',
          param_type: ['object'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'param_distributions',
          docstring:
            'Dictionary with parameters names (string) as keys and distributions or lists of parameters to try. Distributions must provide a ``rvs`` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly.',
          param_type: ['dict'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'n_iter',
          docstring:
            'Number of parameter settings that are sampled. n_iter trades off runtime vs quality of the solution.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '10'
        },
        {
          name: 'scoring',
          docstring:
            "A single string (see :ref:`scoring_parameter`) or a callable (see :ref:`scoring`) to evaluate the predictions on the test set.  For evaluating multiple metrics, either give a list of (unique) strings or a dict with names as keys and callables as values.  NOTE that when using custom scorers, each scorer should return a single value. Metric functions returning a list/array of values can be wrapped into multiple scorers that return one value each.  See :ref:`multimetric_grid_search` for an example.  If None, the estimator's score method is used.",
          param_type: ['str', 'dict', 'list', 'tuple', 'callable', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'n_jobs',
          docstring:
            'Number of jobs to run in parallel. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'pre_dispatch',
          docstring:
            "Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:      - None, in which case all the jobs are immediately       created and spawned. Use this for lightweight and       fast-running jobs, to avoid delays due to on-demand       spawning of the jobs      - An int, giving the exact number of total jobs that are       spawned      - A string, giving an expression as a function of n_jobs,       as in '2*n_jobs'",
          param_type: ['int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'iid',
          docstring:
            'If True, return the average score across folds, weighted by the number of samples in each test set. In this case, the data is assumed to be identically distributed across the folds, and the loss minimized is the total loss per sample, and not the mean loss across the folds. If False, return the average score across folds. Default is True, but will change to False in version 0.22, to correspond to the standard definition of cross-validation.  .. versionchanged:: 0.20     Parameter ``iid`` will change from True to False by default in     version 0.22, and will be removed in 0.24.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'warn'
        },
        {
          name: 'cv',
          docstring:
            'Determines the cross-validation splitting strategy. Possible inputs for cv are:  - None, to use the default 3-fold cross validation, - integer, to specify the number of folds in a `(Stratified)KFold`, - :term:`CV splitter`, - An iterable yielding (train, test) splits as arrays of indices.  For integer/None inputs, if the estimator is a classifier and ``y`` is either binary or multiclass, :class:`StratifiedKFold` is used. In all other cases, :class:`KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. versionchanged:: 0.20     ``cv`` default value if None will change from 3-fold to 5-fold     in v0.22.',
          param_type: ['int', 'iter'],
          expected_shape: null,
          is_optional: true,
          default_value: null
        },
        {
          name: 'refit',
          docstring:
            'Refit an estimator using the best found parameters on the whole dataset.  For multiple metric evaluation, this needs to be a string denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.  Where there are considerations other than maximum score in choosing a best estimator, ``refit`` can be set to a function which returns the selected ``best_index_`` given the ``cv_results``.  The refitted estimator is made available at the ``best_estimator_`` attribute and permits using ``predict`` directly on this ``RandomizedSearchCV`` instance.  Also for multiple metric evaluation, the attributes ``best_index_``, ``best_score_`` and ``best_params_`` will only be available if ``refit`` is set and all of them will be determined w.r.t this specific scorer. When refit is callable, ``best_score_`` is disabled.  See ``scoring`` parameter to know more about multiple metric evaluation.  .. versionchanged:: 0.20     Support for callable added.',
          param_type: ['bool', 'str', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True'
        },
        {
          name: 'verbose',
          docstring: 'Controls the verbosity: the higher, the more messages.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'random_state',
          docstring:
            'Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None'
        },
        {
          name: 'error_score',
          docstring:
            "Value to assign to the score if an error occurs in estimator fitting. If set to 'raise', the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is 'raise' but from version 0.22 it will change to np.nan.",
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null
        },
        {
          name: 'return_train_score',
          docstring:
            'If ``False``, the ``cv_results_`` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False'
        }
      ],
      outputs: [
        {
          name: 'cv_results_',
          docstring:
            "A dict with keys as column headers and values as columns, that can be imported into a pandas ``DataFrame``.  For instance the below given table  +--------------+-------------+-------------------+---+---------------+ | param_kernel | param_gamma | split0_test_score |...|rank_test_score| +==============+=============+===================+===+===============+ |    'rbf'     |     0.1     |       0.80        |...|       2       | +--------------+-------------+-------------------+---+---------------+ |    'rbf'     |     0.2     |       0.90        |...|       1       | +--------------+-------------+-------------------+---+---------------+ |    'rbf'     |     0.3     |       0.70        |...|       1       | +--------------+-------------+-------------------+---+---------------+  will be represented by a ``cv_results_`` dict of::      {     'param_kernel' : masked_array(data = ['rbf', 'rbf', 'rbf'],                                   mask = False),     'param_gamma'  : masked_array(data = [0.1 0.2 0.3], mask = False),     'split0_test_score'  : [0.80, 0.90, 0.70],     'split1_test_score'  : [0.82, 0.50, 0.70],     'mean_test_score'    : [0.81, 0.70, 0.70],     'std_test_score'     : [0.01, 0.20, 0.00],     'rank_test_score'    : [3, 1, 1],     'split0_train_score' : [0.80, 0.92, 0.70],     'split1_train_score' : [0.82, 0.55, 0.70],     'mean_train_score'   : [0.81, 0.74, 0.70],     'std_train_score'    : [0.01, 0.19, 0.00],     'mean_fit_time'      : [0.73, 0.63, 0.43],     'std_fit_time'       : [0.01, 0.02, 0.01],     'mean_score_time'    : [0.01, 0.06, 0.04],     'std_score_time'     : [0.00, 0.00, 0.00],     'params'             : [{'kernel' : 'rbf', 'gamma' : 0.1}, ...],     }  NOTE  The key ``'params'`` is used to store a list of parameter settings dicts for all the parameter candidates.  The ``mean_fit_time``, ``std_fit_time``, ``mean_score_time`` and ``std_score_time`` are all in seconds.  For multi-metric evaluation, the scores for all the scorers are available in the ``cv_results_`` dict at the keys ending with that scorer's name (``'_<scorer_name>'``) instead of ``'_score'`` shown above. ('split0_test_precision', 'mean_train_precision' etc.)",
          param_type: ['array', 'dict'],
          returned: false
        },
        {
          name: 'best_estimator_',
          docstring:
            'Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if ``refit=False``.  For multi-metric evaluation, this attribute is present only if ``refit`` is specified.  See ``refit`` parameter for more information on allowed values.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_score_',
          docstring:
            'Mean cross-validated score of the best_estimator.  For multi-metric evaluation, this is not available if ``refit`` is ``False``. See ``refit`` parameter for more information.',
          param_type: ['float'],
          returned: false
        },
        {
          name: 'best_params_',
          docstring:
            'Parameter setting that gave the best results on the hold out data.  For multi-metric evaluation, this is not available if ``refit`` is ``False``. See ``refit`` parameter for more information.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'best_index_',
          docstring:
            "The index (of the ``cv_results_`` arrays) which corresponds to the best candidate parameter setting.  The dict at ``search.cv_results_['params'][search.best_index_]`` gives the parameter setting for the best model, that gives the highest mean score (``search.best_score_``).  For multi-metric evaluation, this is not available if ``refit`` is ``False``. See ``refit`` parameter for more information.",
          param_type: ['int'],
          returned: false
        },
        {
          name: 'scorer_',
          docstring:
            'Scorer function used on the held out data to choose the best parameters for the model.  For multi-metric evaluation, this attribute holds the validated ``scoring`` dict which maps the scorer key to the scorer callable.',
          param_type: ['dict'],
          returned: false
        },
        {
          name: 'n_splits_',
          docstring:
            'The number of cross-validation splits (folds/iterations).',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'refit_time_',
          docstring:
            'Seconds used for refitting the best model on the whole dataset.  This is present only if ``refit`` is not False.',
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
          name: '_check_is_fitted',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_format_results',
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
          name: '_run_search',
          docstring: 'Search n_iter candidates from param_distributions',
          inputs: [],
          outputs: []
        },
        {
          name: 'decision_function',
          docstring:
            'Call decision_function on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``decision_function``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Run fit with all sets of parameters.\n\n        Parameters\n        ----------\n\n        X : array-like, shape = [n_samples, n_features]\n            Training vector, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        groups : array-like, with shape (n_samples,), optional\n            Group labels for the samples used while splitting the dataset into\n            train/test set. Only used in conjunction with a "Group" `cv`\n            instance (e.g., `GroupKFold`).\n\n        **fit_params : dict of string -> object\n            Parameters passed to the ``fit`` method of the estimator\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Training vector, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape: '[n_samples] or [n_samples, n_output], optional',
              is_optional: true,
              default_value: null
            },
            {
              name: 'groups',
              docstring:
                'Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a "Group" `cv` instance (e.g., `GroupKFold`).',
              param_type: ['array'],
              expected_shape: '(n_samples,), optional',
              is_optional: true,
              default_value: null
            },
            {
              name: '**fit_params',
              docstring:
                'Parameters passed to the ``fit`` method of the estimator',
              param_type: ['object', 'str', 'dict'],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'get_params',
          docstring:
            'Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : boolean, optional\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ',
          inputs: [
            {
              name: 'deep',
              docstring:
                'If True, will return the parameters for this estimator and contained subobjects that are estimators.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'params',
              docstring: 'Parameter names mapped to their values.',
              param_type: ['str'],
              returned: true
            }
          ]
        },
        {
          name: 'inverse_transform',
          docstring:
            'Call inverse_transform on the estimator with the best found params.\n\n        Only available if the underlying estimator implements\n        ``inverse_transform`` and ``refit=True``.\n\n        Parameters\n        ----------\n        Xt : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'Xt',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict',
          docstring:
            'Call predict on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_log_proba',
          docstring:
            'Call predict_log_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_log_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'predict_proba',
          docstring:
            'Call predict_proba on the estimator with the best found parameters.\n\n        Only available if ``refit=True`` and the underlying estimator supports\n        ``predict_proba``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        },
        {
          name: 'score',
          docstring:
            'Returns the score on the given data, if the estimator has been refit.\n\n        This uses the score defined by ``scoring`` where provided, and the\n        ``best_estimator_.score`` method otherwise.\n\n        Parameters\n        ----------\n        X : array-like, shape = [n_samples, n_features]\n            Input data, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like, shape = [n_samples] or [n_samples, n_output], optional\n            Target relative to X for classification or regression;\n            None for unsupervised learning.\n\n        Returns\n        -------\n        score : float\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Input data, where n_samples is the number of samples and n_features is the number of features.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null
            },
            {
              name: 'y',
              docstring:
                'Target relative to X for classification or regression; None for unsupervised learning.',
              param_type: ['array'],
              expected_shape: '[n_samples] or [n_samples, n_output], optional',
              is_optional: true,
              default_value: null
            }
          ],
          outputs: [
            {
              name: 'score',
              docstring: '',
              param_type: ['float'],
              returned: true
            }
          ]
        },
        {
          name: 'set_params',
          docstring:
            "Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Returns\n        -------\n        self\n        ",
          inputs: [],
          outputs: [
            {
              name: '',
              docstring: '',
              param_type: [null],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring:
            'Call transform on the estimator with the best found parameters.\n\n        Only available if the underlying estimator supports ``transform`` and\n        ``refit=True``.\n\n        Parameters\n        ----------\n        X : indexable, length n_samples\n            Must fulfill the input assumptions of the\n            underlying estimator.\n\n        ',
          inputs: [
            {
              name: 'X',
              docstring:
                'Must fulfill the input assumptions of the underlying estimator.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    }
  ],
  library: 'sklearn',
  module: 'model_selection'
}
