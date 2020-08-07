export default {
  inputs: [],
  module: 'decomposition',
  library: 'sklearn',
  name: 'sklearn.decomposition',
  nodes: [
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['int', null],
          name: 'n_components',
          docstring:
            'Dimensionality of latent space, the number of components of ``X`` that are obtained after ``transform``. If None, n_components is set to the number of features.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['float'],
          name: 'tol',
          docstring: 'Stopping tolerance for EM algorithm.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'copy',
          docstring:
            'Whether to make a copy of X. If ``False``, the input X gets overwritten during fitting.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'max_iter',
          docstring: 'Maximum number of iterations.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          name: 'noise_variance_init',
          docstring:
            'The initial guess of the noise variance for each feature. If None, it defaults to np.ones(n_features)',
          options: ['None ', ' array, shape=(n_features,)'],
          default_value: null,
          expected_shape: '(n_features,)'
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS'],
          name: 'svd_method',
          docstring:
            "Which SVD method to use. If 'lapack' use standard SVD from scipy.linalg, if 'randomized' use fast ``randomized_svd`` function. Defaults to 'randomized'. For most applications 'randomized' will be sufficiently precise while providing significant speed gains. Accuracy can also be improved by setting higher values for `iterated_power`. If this is not sufficient, for maximum precision you should choose 'lapack'.",
          options: ['lapack', 'randomized'],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'iterated_power',
          docstring:
            "Number of iterations for the power method. 3 by default. Only used if ``svd_method`` equals 'randomized'",
          options: null,
          default_value: '3',
          expected_shape: null
        }
      ],
      name: 'FactorAnalysis',
      nodes: [],
      node_functions: [
        {
          inputs: [],
          outputs: [],
          name: '__init__',
          docstring: 'None'
        },
        {
          inputs: [],
          outputs: [],
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator'
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'Training data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
            },
            {
              is_optional: false,
              param_type: [null],
              name: 'y',
              docstring: '',
              options: null,
              default_value: null,
              expected_shape: null
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
          ],
          name: 'fit',
          docstring:
            'Fit the FactorAnalysis model to X using EM\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        y : Ignored\n\n        Returns\n        -------\n        self\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'Training set.',
              options: null,
              default_value: null,
              expected_shape: '[n_samples, n_features]'
            },
            {
              is_optional: false,
              param_type: ['array'],
              name: 'y',
              docstring: 'Target values.',
              options: null,
              default_value: null,
              expected_shape: '[n_samples]'
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
              returned: true,
              param_type: ['array'],
              name: 'X_new',
              docstring: 'Transformed array.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : numpy array of shape [n_samples, n_features]\n            Training set.\n\n        y : numpy array of shape [n_samples]\n            Target values.\n\n        Returns\n        -------\n        X_new : numpy array of shape [n_samples, n_features_new]\n            Transformed array.\n\n        '
        },
        {
          inputs: [
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
              returned: true,
              param_type: ['array'],
              name: 'cov',
              docstring: 'Estimated covariance of data.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'get_covariance',
          docstring:
            'Compute data covariance with the FactorAnalysis model.\n\n        ``cov = components_.T * components_ + diag(noise_variance)``\n\n        Returns\n        -------\n        cov : array, shape (n_features, n_features)\n            Estimated covariance of data.\n        '
        },
        {
          inputs: [
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
              returned: true,
              param_type: ['array'],
              name: 'precision',
              docstring: 'Estimated precision of data.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'get_precision',
          docstring:
            'Compute data precision matrix with the FactorAnalysis model.\n\n        Returns\n        -------\n        precision : array, shape (n_features, n_features)\n            Estimated precision of data.\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'The data',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
            },
            {
              is_optional: true,
              param_type: [null],
              name: 'y',
              docstring: '',
              options: null,
              default_value: null,
              expected_shape: null
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
              returned: true,
              param_type: ['float'],
              name: 'll',
              docstring:
                'Average log-likelihood of the samples under the current model'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'score',
          docstring:
            'Compute the average log-likelihood of the samples\n\n        Parameters\n        ----------\n        X : array, shape (n_samples, n_features)\n            The data\n\n        y : Ignored\n\n        Returns\n        -------\n        ll : float\n            Average log-likelihood of the samples under the current model\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'The data',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
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
              returned: true,
              param_type: ['array'],
              name: 'll',
              docstring: 'Log-likelihood of each sample under the current model'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'score_samples',
          docstring:
            'Compute the log-likelihood of each sample\n\n        Parameters\n        ----------\n        X : array, shape (n_samples, n_features)\n            The data\n\n        Returns\n        -------\n        ll : array, shape (n_samples,)\n            Log-likelihood of each sample under the current model\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'Training data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
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
              returned: true,
              param_type: ['array'],
              name: 'X_new',
              docstring: 'The latent variables of X.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'transform',
          docstring:
            'Apply dimensionality reduction to X using the model.\n\n        Compute the expected mean of the latent variables.\n        See Barber, 21.2.33 (or Bishop, 12.66).\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n            The latent variables of X.\n        '
        }
      ],
      docstring:
        "Factor Analysis (FA)\n\n    A simple linear generative model with Gaussian latent variables.\n\n    The observations are assumed to be caused by a linear transformation of\n    lower dimensional latent factors and added Gaussian noise.\n    Without loss of generality the factors are distributed according to a\n    Gaussian with zero mean and unit covariance. The noise is also zero mean\n    and has an arbitrary diagonal covariance matrix.\n\n    If we would restrict the model further, by assuming that the Gaussian\n    noise is even isotropic (all diagonal entries are the same) we would obtain\n    :class:`PPCA`.\n\n    FactorAnalysis performs a maximum likelihood estimate of the so-called\n    `loading` matrix, the transformation of the latent variables to the\n    observed ones, using expectation-maximization (EM).\n\n    Read more in the :ref:`User Guide <FA>`.\n\n    Parameters\n    ----------\n    n_components : int | None\n        Dimensionality of latent space, the number of components\n        of ``X`` that are obtained after ``transform``.\n        If None, n_components is set to the number of features.\n\n    tol : float\n        Stopping tolerance for EM algorithm.\n\n    copy : bool\n        Whether to make a copy of X. If ``False``, the input X gets overwritten\n        during fitting.\n\n    max_iter : int\n        Maximum number of iterations.\n\n    noise_variance_init : None | array, shape=(n_features,)\n        The initial guess of the noise variance for each feature.\n        If None, it defaults to np.ones(n_features)\n\n    svd_method : {'lapack', 'randomized'}\n        Which SVD method to use. If 'lapack' use standard SVD from\n        scipy.linalg, if 'randomized' use fast ``randomized_svd`` function.\n        Defaults to 'randomized'. For most applications 'randomized' will\n        be sufficiently precise while providing significant speed gains.\n        Accuracy can also be improved by setting higher values for\n        `iterated_power`. If this is not sufficient, for maximum precision\n        you should choose 'lapack'.\n\n    iterated_power : int, optional\n        Number of iterations for the power method. 3 by default. Only used\n        if ``svd_method`` equals 'randomized'\n\n    random_state : int, RandomState instance or None, optional (default=0)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Only used when ``svd_method`` equals 'randomized'.\n\n    Attributes\n    ----------\n    components_ : array, [n_components, n_features]\n        Components with maximum variance.\n\n    loglike_ : list, [n_iterations]\n        The log likelihood at each iteration.\n\n    noise_variance_ : array, shape=(n_features,)\n        The estimated noise variance for each feature.\n\n    n_iter_ : int\n        Number of iterations run.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_digits\n    >>> from sklearn.decomposition import FactorAnalysis\n    >>> X, _ = load_digits(return_X_y=True)\n    >>> transformer = FactorAnalysis(n_components=7, random_state=0)\n    >>> X_transformed = transformer.fit_transform(X)\n    >>> X_transformed.shape\n    (1797, 7)\n\n    References\n    ----------\n    .. David Barber, Bayesian Reasoning and Machine Learning,\n        Algorithm 21.1\n\n    .. Christopher M. Bishop: Pattern Recognition and Machine Learning,\n        Chapter 12.2.4\n\n    See also\n    --------\n    PCA: Principal component analysis is also a latent linear variable model\n        which however assumes equal noise variance for each feature.\n        This extra assumption makes probabilistic PCA faster as it can be\n        computed in closed form.\n    FastICA: Independent component analysis, a latent variable model with\n        non-Gaussian latent variables.\n    ",
      outputs: [
        {
          returned: false,
          param_type: ['array'],
          name: 'components_',
          docstring: 'Components with maximum variance.'
        },
        {
          returned: false,
          param_type: ['list'],
          name: 'loglike_',
          docstring: 'The log likelihood at each iteration.'
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'noise_variance_',
          docstring: 'The estimated noise variance for each feature.'
        },
        {
          returned: false,
          param_type: ['int'],
          name: 'n_iter_',
          docstring: 'Number of iterations run.'
        }
      ]
    },
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['int', 'float', 'str', null],
          name: 'n_components',
          docstring:
            "Number of components to keep. if n_components is not set all components are kept::      n_components == min(n_samples, n_features)  If ``n_components == 'mle'`` and ``svd_solver == 'full'``, Minka's MLE is used to guess the dimension. Use of ``n_components == 'mle'`` will interpret ``svd_solver == 'auto'`` as ``svd_solver == 'full'``.  If ``0 < n_components < 1`` and ``svd_solver == 'full'``, select the number of components such that the amount of variance that needs to be explained is greater than the percentage specified by n_components.  If ``svd_solver == 'arpack'``, the number of components must be strictly less than the minimum of n_features and n_samples.  Hence, the None case results in::      n_components == min(n_samples, n_features) - 1",
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'copy',
          docstring:
            'If False, data passed to fit are overwritten and running fit(X).transform(X) will not yield the expected results, use fit_transform(X) instead.',
          options: null,
          default_value: 'True',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'whiten',
          docstring:
            'When True (False by default) the `components_` vectors are multiplied by the square root of n_samples and then divided by the singular values to ensure uncorrelated outputs with unit component-wise variances.  Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometime improve the predictive accuracy of the downstream estimators by making their data respect some hard-wired assumptions.',
          options: null,
          default_value: 'False',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS'],
          name: 'svd_solver',
          docstring:
            "auto :     the solver is selected by a default policy based on `X.shape` and     `n_components`: if the input data is larger than 500x500 and the     number of components to extract is lower than 80% of the smallest     dimension of the data, then the more efficient 'randomized'     method is enabled. Otherwise the exact full SVD is computed and     optionally truncated afterwards. full :     run exact full SVD calling the standard LAPACK solver via     `scipy.linalg.svd` and select the components by postprocessing arpack :     run SVD truncated to n_components calling ARPACK solver via     `scipy.sparse.linalg.svds`. It requires strictly     0 < n_components < min(X.shape) randomized :     run randomized SVD by the method of Halko et al.  .. versionadded:: 0.18.0",
          options: ['auto', 'full', 'arpack', 'randomized'],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float'],
          name: 'tol',
          docstring:
            "Tolerance for singular values computed by svd_solver == 'arpack'.  .. versionadded:: 0.18.0",
          options: null,
          default_value: '.0',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'iterated_power',
          docstring:
            "Number of iterations for the power method computed by svd_solver == 'randomized'.  .. versionadded:: 0.18.0",
          options: null,
          default_value: 'auto',
          expected_shape: null
        }
      ],
      name: 'PCA',
      nodes: [],
      node_functions: [
        {
          inputs: [],
          outputs: [],
          name: '__init__',
          docstring: 'None'
        },
        {
          inputs: [],
          outputs: [],
          name: '_fit',
          docstring:
            'Dispatch to the right submethod depending on the chosen solver.'
        },
        {
          inputs: [],
          outputs: [],
          name: '_fit_full',
          docstring: 'Fit the model by computing full SVD on X'
        },
        {
          inputs: [],
          outputs: [],
          name: '_fit_truncated',
          docstring:
            'Fit the model by computing truncated SVD (by ARPACK or randomized)\n        on X\n        '
        },
        {
          inputs: [],
          outputs: [],
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator'
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
            },
            {
              is_optional: true,
              param_type: [null],
              name: 'y',
              docstring: 'Ignored',
              options: null,
              default_value: null,
              expected_shape: null
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
          ],
          name: 'fit',
          docstring:
            'Fit the model with X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the instance itself.\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring:
                'Training data, where n_samples is the number of samples and n_features is the number of features.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
            },
            {
              is_optional: true,
              param_type: [null],
              name: 'y',
              docstring: 'Ignored',
              options: null,
              default_value: null,
              expected_shape: null
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
              returned: true,
              param_type: ['array'],
              name: 'X_new',
              docstring: ''
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'fit_transform',
          docstring:
            'Fit the model with X and apply the dimensionality reduction on X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            Training data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        y : Ignored\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n\n        '
        },
        {
          inputs: [
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
              returned: true,
              param_type: ['array'],
              name: 'cov',
              docstring: 'Estimated covariance of data.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'get_covariance',
          docstring:
            'Compute data covariance with the generative model.\n\n        ``cov = components_.T * S**2 * components_ + sigma2 * eye(n_features)``\n        where  S**2 contains the explained variances, and sigma2 contains the\n        noise variances.\n\n        Returns\n        -------\n        cov : array, shape=(n_features, n_features)\n            Estimated covariance of data.\n        '
        },
        {
          inputs: [
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
              returned: true,
              param_type: ['array'],
              name: 'precision',
              docstring: 'Estimated precision of data.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'get_precision',
          docstring:
            'Compute data precision matrix with the generative model.\n\n        Equals the inverse of the covariance but computed with\n        the matrix inversion lemma for efficiency.\n\n        Returns\n        -------\n        precision : array, shape=(n_features, n_features)\n            Estimated precision of data.\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring:
                'New data, where n_samples is the number of samples and n_components is the number of components.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_components)'
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
              returned: true,
              param_type: [null],
              name: 'X_original array-like, shape (n_samples, n_features)',
              docstring: ''
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'inverse_transform',
          docstring:
            'Transform data back to its original space.\n\n        In other words, return an input X_original whose transform would be X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_components)\n            New data, where n_samples is the number of samples\n            and n_components is the number of components.\n\n        Returns\n        -------\n        X_original array-like, shape (n_samples, n_features)\n\n        Notes\n        -----\n        If whitening is enabled, inverse_transform will compute the\n        exact inverse operation, which includes reversing whitening.\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'The data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
            },
            {
              is_optional: true,
              param_type: [null],
              name: 'y',
              docstring: 'Ignored',
              options: null,
              default_value: null,
              expected_shape: null
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
              returned: true,
              param_type: ['float'],
              name: 'll',
              docstring:
                'Average log-likelihood of the samples under the current model'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'score',
          docstring:
            'Return the average log-likelihood of all samples.\n\n        See. "Pattern Recognition and Machine Learning"\n        by C. Bishop, 12.2.1 p. 574\n        or http://www.miketipping.com/papers/met-mppca.pdf\n\n        Parameters\n        ----------\n        X : array, shape(n_samples, n_features)\n            The data.\n\n        y : Ignored\n\n        Returns\n        -------\n        ll : float\n            Average log-likelihood of the samples under the current model\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'The data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
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
              returned: true,
              param_type: ['array'],
              name: 'll',
              docstring: 'Log-likelihood of each sample under the current model'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'score_samples',
          docstring:
            'Return the log-likelihood of each sample.\n\n        See. "Pattern Recognition and Machine Learning"\n        by C. Bishop, 12.2.1 p. 574\n        or http://www.miketipping.com/papers/met-mppca.pdf\n\n        Parameters\n        ----------\n        X : array, shape(n_samples, n_features)\n            The data.\n\n        Returns\n        -------\n        ll : array, shape (n_samples,)\n            Log-likelihood of each sample under the current model\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring:
                'New data, where n_samples is the number of samples and n_features is the number of features.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
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
              returned: true,
              param_type: ['array'],
              name: 'X_new',
              docstring: ''
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'transform',
          docstring:
            'Apply dimensionality reduction to X.\n\n        X is projected on the first principal components previously extracted\n        from a training set.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_features)\n            New data, where n_samples is the number of samples\n            and n_features is the number of features.\n\n        Returns\n        -------\n        X_new : array-like, shape (n_samples, n_components)\n\n        Examples\n        --------\n\n        >>> import numpy as np\n        >>> from sklearn.decomposition import IncrementalPCA\n        >>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])\n        >>> ipca = IncrementalPCA(n_components=2, batch_size=3)\n        >>> ipca.fit(X)\n        IncrementalPCA(batch_size=3, copy=True, n_components=2, whiten=False)\n        >>> ipca.transform(X) # doctest: +SKIP\n        '
        }
      ],
      docstring:
        "Principal component analysis (PCA)\n\n    Linear dimensionality reduction using Singular Value Decomposition of the\n    data to project it to a lower dimensional space.\n\n    It uses the LAPACK implementation of the full SVD or a randomized truncated\n    SVD by the method of Halko et al. 2009, depending on the shape of the input\n    data and the number of components to extract.\n\n    It can also use the scipy.sparse.linalg ARPACK implementation of the\n    truncated SVD.\n\n    Notice that this class does not support sparse input. See\n    :class:`TruncatedSVD` for an alternative with sparse data.\n\n    Read more in the :ref:`User Guide <PCA>`.\n\n    Parameters\n    ----------\n    n_components : int, float, None or string\n        Number of components to keep.\n        if n_components is not set all components are kept::\n\n            n_components == min(n_samples, n_features)\n\n        If ``n_components == 'mle'`` and ``svd_solver == 'full'``, Minka's\n        MLE is used to guess the dimension. Use of ``n_components == 'mle'``\n        will interpret ``svd_solver == 'auto'`` as ``svd_solver == 'full'``.\n\n        If ``0 < n_components < 1`` and ``svd_solver == 'full'``, select the\n        number of components such that the amount of variance that needs to be\n        explained is greater than the percentage specified by n_components.\n\n        If ``svd_solver == 'arpack'``, the number of components must be\n        strictly less than the minimum of n_features and n_samples.\n\n        Hence, the None case results in::\n\n            n_components == min(n_samples, n_features) - 1\n\n    copy : bool (default True)\n        If False, data passed to fit are overwritten and running\n        fit(X).transform(X) will not yield the expected results,\n        use fit_transform(X) instead.\n\n    whiten : bool, optional (default False)\n        When True (False by default) the `components_` vectors are multiplied\n        by the square root of n_samples and then divided by the singular values\n        to ensure uncorrelated outputs with unit component-wise variances.\n\n        Whitening will remove some information from the transformed signal\n        (the relative variance scales of the components) but can sometime\n        improve the predictive accuracy of the downstream estimators by\n        making their data respect some hard-wired assumptions.\n\n    svd_solver : string {'auto', 'full', 'arpack', 'randomized'}\n        auto :\n            the solver is selected by a default policy based on `X.shape` and\n            `n_components`: if the input data is larger than 500x500 and the\n            number of components to extract is lower than 80% of the smallest\n            dimension of the data, then the more efficient 'randomized'\n            method is enabled. Otherwise the exact full SVD is computed and\n            optionally truncated afterwards.\n        full :\n            run exact full SVD calling the standard LAPACK solver via\n            `scipy.linalg.svd` and select the components by postprocessing\n        arpack :\n            run SVD truncated to n_components calling ARPACK solver via\n            `scipy.sparse.linalg.svds`. It requires strictly\n            0 < n_components < min(X.shape)\n        randomized :\n            run randomized SVD by the method of Halko et al.\n\n        .. versionadded:: 0.18.0\n\n    tol : float >= 0, optional (default .0)\n        Tolerance for singular values computed by svd_solver == 'arpack'.\n\n        .. versionadded:: 0.18.0\n\n    iterated_power : int >= 0, or 'auto', (default 'auto')\n        Number of iterations for the power method computed by\n        svd_solver == 'randomized'.\n\n        .. versionadded:: 0.18.0\n\n    random_state : int, RandomState instance or None, optional (default None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`. Used when ``svd_solver`` == 'arpack' or 'randomized'.\n\n        .. versionadded:: 0.18.0\n\n    Attributes\n    ----------\n    components_ : array, shape (n_components, n_features)\n        Principal axes in feature space, representing the directions of\n        maximum variance in the data. The components are sorted by\n        ``explained_variance_``.\n\n    explained_variance_ : array, shape (n_components,)\n        The amount of variance explained by each of the selected components.\n\n        Equal to n_components largest eigenvalues\n        of the covariance matrix of X.\n\n        .. versionadded:: 0.18\n\n    explained_variance_ratio_ : array, shape (n_components,)\n        Percentage of variance explained by each of the selected components.\n\n        If ``n_components`` is not set then all components are stored and the\n        sum of the ratios is equal to 1.0.\n\n    singular_values_ : array, shape (n_components,)\n        The singular values corresponding to each of the selected components.\n        The singular values are equal to the 2-norms of the ``n_components``\n        variables in the lower-dimensional space.\n\n    mean_ : array, shape (n_features,)\n        Per-feature empirical mean, estimated from the training set.\n\n        Equal to `X.mean(axis=0)`.\n\n    n_components_ : int\n        The estimated number of components. When n_components is set\n        to 'mle' or a number between 0 and 1 (with svd_solver == 'full') this\n        number is estimated from input data. Otherwise it equals the parameter\n        n_components, or the lesser value of n_features and n_samples\n        if n_components is None.\n\n    noise_variance_ : float\n        The estimated noise covariance following the Probabilistic PCA model\n        from Tipping and Bishop 1999. See \"Pattern Recognition and\n        Machine Learning\" by C. Bishop, 12.2.1 p. 574 or\n        http://www.miketipping.com/papers/met-mppca.pdf. It is required to\n        compute the estimated data covariance and score samples.\n\n        Equal to the average of (min(n_features, n_samples) - n_components)\n        smallest eigenvalues of the covariance matrix of X.\n\n    References\n    ----------\n    For n_components == 'mle', this class uses the method of `Minka, T. P.\n    \"Automatic choice of dimensionality for PCA\". In NIPS, pp. 598-604`\n\n    Implements the probabilistic PCA model from:\n    `Tipping, M. E., and Bishop, C. M. (1999). \"Probabilistic principal\n    component analysis\". Journal of the Royal Statistical Society:\n    Series B (Statistical Methodology), 61(3), 611-622.\n    via the score and score_samples methods.\n    See http://www.miketipping.com/papers/met-mppca.pdf\n\n    For svd_solver == 'arpack', refer to `scipy.sparse.linalg.svds`.\n\n    For svd_solver == 'randomized', see:\n    `Halko, N., Martinsson, P. G., and Tropp, J. A. (2011).\n    \"Finding structure with randomness: Probabilistic algorithms for\n    constructing approximate matrix decompositions\".\n    SIAM review, 53(2), 217-288.` and also\n    `Martinsson, P. G., Rokhlin, V., and Tygert, M. (2011).\n    \"A randomized algorithm for the decomposition of matrices\".\n    Applied and Computational Harmonic Analysis, 30(1), 47-68.`\n\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.decomposition import PCA\n    >>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])\n    >>> pca = PCA(n_components=2)\n    >>> pca.fit(X)\n    PCA(copy=True, iterated_power='auto', n_components=2, random_state=None,\n      svd_solver='auto', tol=0.0, whiten=False)\n    >>> print(pca.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.9924... 0.0075...]\n    >>> print(pca.singular_values_)  # doctest: +ELLIPSIS\n    [6.30061... 0.54980...]\n\n    >>> pca = PCA(n_components=2, svd_solver='full')\n    >>> pca.fit(X)                 # doctest: +ELLIPSIS +NORMALIZE_WHITESPACE\n    PCA(copy=True, iterated_power='auto', n_components=2, random_state=None,\n      svd_solver='full', tol=0.0, whiten=False)\n    >>> print(pca.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.9924... 0.00755...]\n    >>> print(pca.singular_values_)  # doctest: +ELLIPSIS\n    [6.30061... 0.54980...]\n\n    >>> pca = PCA(n_components=1, svd_solver='arpack')\n    >>> pca.fit(X)\n    PCA(copy=True, iterated_power='auto', n_components=1, random_state=None,\n      svd_solver='arpack', tol=0.0, whiten=False)\n    >>> print(pca.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.99244...]\n    >>> print(pca.singular_values_)  # doctest: +ELLIPSIS\n    [6.30061...]\n\n    See also\n    --------\n    KernelPCA\n    SparsePCA\n    TruncatedSVD\n    IncrementalPCA\n    ",
      outputs: [
        {
          returned: false,
          param_type: ['array'],
          name: 'components_',
          docstring:
            'Principal axes in feature space, representing the directions of maximum variance in the data. The components are sorted by ``explained_variance_``.'
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'explained_variance_',
          docstring:
            'The amount of variance explained by each of the selected components.  Equal to n_components largest eigenvalues of the covariance matrix of X.  .. versionadded:: 0.18'
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'explained_variance_ratio_',
          docstring:
            'Percentage of variance explained by each of the selected components.  If ``n_components`` is not set then all components are stored and the sum of the ratios is equal to 1.0.'
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'singular_values_',
          docstring:
            'The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the ``n_components`` variables in the lower-dimensional space.'
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'mean_',
          docstring:
            'Per-feature empirical mean, estimated from the training set.  Equal to `X.mean(axis=0)`.'
        },
        {
          returned: false,
          param_type: ['int'],
          name: 'n_components_',
          docstring:
            "The estimated number of components. When n_components is set to 'mle' or a number between 0 and 1 (with svd_solver == 'full') this number is estimated from input data. Otherwise it equals the parameter n_components, or the lesser value of n_features and n_samples if n_components is None."
        },
        {
          returned: false,
          param_type: ['float'],
          name: 'noise_variance_',
          docstring:
            'The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See "Pattern Recognition and Machine Learning" by C. Bishop, 12.2.1 p. 574 or http://www.miketipping.com/papers/met-mppca.pdf. It is required to compute the estimated data covariance and score samples.  Equal to the average of (min(n_features, n_samples) - n_components) smallest eigenvalues of the covariance matrix of X.'
        }
      ]
    },
    {
      inputs: [
        {
          is_optional: true,
          param_type: ['int'],
          name: 'n_components',
          docstring:
            'Desired dimensionality of output data. Must be strictly less than the number of features. The default value is useful for visualisation. For LSA, a value of 100 is recommended.',
          options: null,
          default_value: '2',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['str'],
          name: 'algorithm',
          docstring:
            'SVD solver to use. Either "arpack" for the ARPACK wrapper in SciPy (scipy.sparse.linalg.svds), or "randomized" for the randomized algorithm due to Halko (2009).',
          options: null,
          default_value: '"randomized"',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'n_iter',
          docstring:
            'Number of iterations for randomized SVD solver. Not used by ARPACK. The default is larger than the default in `randomized_svd` to handle sparse matrices that may have large slowly decaying spectrum.',
          options: null,
          default_value: '5',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float'],
          name: 'tol',
          docstring:
            'Tolerance for ARPACK. 0 means machine precision. Ignored by randomized SVD solver.',
          options: null,
          default_value: null,
          expected_shape: null
        }
      ],
      name: 'TruncatedSVD',
      nodes: [],
      node_functions: [
        {
          inputs: [],
          outputs: [],
          name: '__init__',
          docstring: 'None'
        },
        {
          inputs: [],
          outputs: [],
          name: '_get_param_names',
          docstring: 'Get parameter names for the estimator'
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'Training data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
            },
            {
              is_optional: true,
              param_type: [null],
              name: 'y',
              docstring: 'Ignored',
              options: null,
              default_value: null,
              expected_shape: null
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
          ],
          name: 'fit',
          docstring:
            'Fit LSI model on training data X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training data.\n\n        y : Ignored\n\n        Returns\n        -------\n        self : object\n            Returns the transformer object.\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'Training data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
            },
            {
              is_optional: true,
              param_type: [null],
              name: 'y',
              docstring: 'Ignored',
              options: null,
              default_value: null,
              expected_shape: null
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
              returned: true,
              param_type: ['array'],
              name: 'X_new',
              docstring:
                'Reduced version of X. This will always be a dense array.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'fit_transform',
          docstring:
            'Fit LSI model to X and perform dimensionality reduction on X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            Training data.\n\n        y : Ignored\n\n        Returns\n        -------\n        X_new : array, shape (n_samples, n_components)\n            Reduced version of X. This will always be a dense array.\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'New data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_components)'
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
              returned: true,
              param_type: ['array'],
              name: 'X_original',
              docstring: 'Note that this is always a dense array.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'inverse_transform',
          docstring:
            'Transform X back to its original space.\n\n        Returns an array X_original whose transform would be X.\n\n        Parameters\n        ----------\n        X : array-like, shape (n_samples, n_components)\n            New data.\n\n        Returns\n        -------\n        X_original : array, shape (n_samples, n_features)\n            Note that this is always a dense array.\n        '
        },
        {
          inputs: [
            {
              is_optional: false,
              param_type: ['array'],
              name: 'X',
              docstring: 'New data.',
              options: null,
              default_value: null,
              expected_shape: '(n_samples, n_features)'
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
              returned: true,
              param_type: ['array'],
              name: 'X_new',
              docstring:
                'Reduced version of X. This will always be a dense array.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          name: 'transform',
          docstring:
            'Perform dimensionality reduction on X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix}, shape (n_samples, n_features)\n            New data.\n\n        Returns\n        -------\n        X_new : array, shape (n_samples, n_components)\n            Reduced version of X. This will always be a dense array.\n        '
        }
      ],
      docstring:
        'Dimensionality reduction using truncated SVD (aka LSA).\n\n    This transformer performs linear dimensionality reduction by means of\n    truncated singular value decomposition (SVD). Contrary to PCA, this\n    estimator does not center the data before computing the singular value\n    decomposition. This means it can work with scipy.sparse matrices\n    efficiently.\n\n    In particular, truncated SVD works on term count/tf-idf matrices as\n    returned by the vectorizers in sklearn.feature_extraction.text. In that\n    context, it is known as latent semantic analysis (LSA).\n\n    This estimator supports two algorithms: a fast randomized SVD solver, and\n    a "naive" algorithm that uses ARPACK as an eigensolver on (X * X.T) or\n    (X.T * X), whichever is more efficient.\n\n    Read more in the :ref:`User Guide <LSA>`.\n\n    Parameters\n    ----------\n    n_components : int, default = 2\n        Desired dimensionality of output data.\n        Must be strictly less than the number of features.\n        The default value is useful for visualisation. For LSA, a value of\n        100 is recommended.\n\n    algorithm : string, default = "randomized"\n        SVD solver to use. Either "arpack" for the ARPACK wrapper in SciPy\n        (scipy.sparse.linalg.svds), or "randomized" for the randomized\n        algorithm due to Halko (2009).\n\n    n_iter : int, optional (default 5)\n        Number of iterations for randomized SVD solver. Not used by ARPACK.\n        The default is larger than the default in `randomized_svd` to handle\n        sparse matrices that may have large slowly decaying spectrum.\n\n    random_state : int, RandomState instance or None, optional, default = None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    tol : float, optional\n        Tolerance for ARPACK. 0 means machine precision. Ignored by randomized\n        SVD solver.\n\n    Attributes\n    ----------\n    components_ : array, shape (n_components, n_features)\n\n    explained_variance_ : array, shape (n_components,)\n        The variance of the training samples transformed by a projection to\n        each component.\n\n    explained_variance_ratio_ : array, shape (n_components,)\n        Percentage of variance explained by each of the selected components.\n\n    singular_values_ : array, shape (n_components,)\n        The singular values corresponding to each of the selected components.\n        The singular values are equal to the 2-norms of the ``n_components``\n        variables in the lower-dimensional space.\n\n    Examples\n    --------\n    >>> from sklearn.decomposition import TruncatedSVD\n    >>> from sklearn.random_projection import sparse_random_matrix\n    >>> X = sparse_random_matrix(100, 100, density=0.01, random_state=42)\n    >>> svd = TruncatedSVD(n_components=5, n_iter=7, random_state=42)\n    >>> svd.fit(X)  # doctest: +NORMALIZE_WHITESPACE\n    TruncatedSVD(algorithm=\'randomized\', n_components=5, n_iter=7,\n            random_state=42, tol=0.0)\n    >>> print(svd.explained_variance_ratio_)  # doctest: +ELLIPSIS\n    [0.0606... 0.0584... 0.0497... 0.0434... 0.0372...]\n    >>> print(svd.explained_variance_ratio_.sum())  # doctest: +ELLIPSIS\n    0.249...\n    >>> print(svd.singular_values_)  # doctest: +ELLIPSIS\n    [2.5841... 2.5245... 2.3201... 2.1753... 2.0443...]\n\n    See also\n    --------\n    PCA\n\n    References\n    ----------\n    Finding structure with randomness: Stochastic algorithms for constructing\n    approximate matrix decompositions\n    Halko, et al., 2009 (arXiv:909) https://arxiv.org/pdf/0909.4061.pdf\n\n    Notes\n    -----\n    SVD suffers from a problem called "sign indeterminacy", which means the\n    sign of the ``components_`` and the output from transform depend on the\n    algorithm and random state. To work around this, fit instances of this\n    class to data once, then keep the instance around to do transformations.\n\n    ',
      outputs: [
        {
          returned: false,
          param_type: ['array'],
          name: 'components_',
          docstring: ''
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'explained_variance_',
          docstring:
            'The variance of the training samples transformed by a projection to each component.'
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'explained_variance_ratio_',
          docstring:
            'Percentage of variance explained by each of the selected components.'
        },
        {
          returned: false,
          param_type: ['array'],
          name: 'singular_values_',
          docstring:
            'The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the ``n_components`` variables in the lower-dimensional space.'
        }
      ]
    }
  ],
  node_functions: [
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['array'],
          name: 'X',
          docstring: 'Data matrix.',
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_features)'
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'n_components',
          docstring: 'Number of dictionary atoms to extract.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'alpha',
          docstring: 'Sparsity controlling parameter.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'max_iter',
          docstring: 'Maximum number of iterations to perform.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['float'],
          name: 'tol',
          docstring: 'Tolerance for the stopping condition.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS'],
          name: 'method',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.',
          options: ['lars', 'cd'],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'dict_init',
          docstring:
            'Initial value for the dictionary for warm restart scenarios.',
          options: null,
          default_value: null,
          expected_shape: '(n_components, n_features),'
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'code_init',
          docstring:
            'Initial value for the sparse code for warm restart scenarios.',
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_components),'
        },
        {
          is_optional: true,
          param_type: ['callable', null],
          name: 'callback',
          docstring: 'Callable that gets invoked every five iterations',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'verbose',
          docstring: 'To control the verbosity of the procedure.',
          options: null,
          default_value: 'False',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'return_n_iter',
          docstring: 'Whether or not to return the number of iterations.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'positive_dict',
          docstring:
            'Whether to enforce positivity when finding the dictionary.  .. versionadded:: 0.20',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'positive_code',
          docstring:
            'Whether to enforce positivity when finding the code.  .. versionadded:: 0.20',
          options: null,
          default_value: null,
          expected_shape: null
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
          returned: true,
          param_type: ['array'],
          name: 'code',
          docstring: 'The sparse code factor in the matrix factorization.'
        },
        {
          returned: true,
          param_type: ['array'],
          name: 'dictionary',
          docstring: 'The dictionary factor in the matrix factorization.'
        },
        {
          returned: true,
          param_type: ['array'],
          name: 'errors',
          docstring: 'Vector of errors at each iteration.'
        },
        {
          returned: true,
          param_type: ['int'],
          name: 'n_iter',
          docstring:
            'Number of iterations run. Returned only if `return_n_iter` is set to True.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      name: 'dict_learning',
      docstring:
        "Solves a dictionary learning matrix factorization problem.\n\n    Finds the best dictionary and the corresponding sparse code for\n    approximating the data matrix X by solving::\n\n        (U^*, V^*) = argmin 0.5 || X - U V ||_2^2 + alpha * || U ||_1\n                     (U,V)\n                    with || V_k ||_2 = 1 for all  0 <= k < n_components\n\n    where V is the dictionary and U is the sparse code.\n\n    Read more in the :ref:`User Guide <DictionaryLearning>`.\n\n    Parameters\n    ----------\n    X : array of shape (n_samples, n_features)\n        Data matrix.\n\n    n_components : int,\n        Number of dictionary atoms to extract.\n\n    alpha : int,\n        Sparsity controlling parameter.\n\n    max_iter : int,\n        Maximum number of iterations to perform.\n\n    tol : float,\n        Tolerance for the stopping condition.\n\n    method : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    dict_init : array of shape (n_components, n_features),\n        Initial value for the dictionary for warm restart scenarios.\n\n    code_init : array of shape (n_samples, n_components),\n        Initial value for the sparse code for warm restart scenarios.\n\n    callback : callable or None, optional (default: None)\n        Callable that gets invoked every five iterations\n\n    verbose : bool, optional (default: False)\n        To control the verbosity of the procedure.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    return_n_iter : bool\n        Whether or not to return the number of iterations.\n\n    positive_dict : bool\n        Whether to enforce positivity when finding the dictionary.\n\n        .. versionadded:: 0.20\n\n    positive_code : bool\n        Whether to enforce positivity when finding the code.\n\n        .. versionadded:: 0.20\n\n    Returns\n    -------\n    code : array of shape (n_samples, n_components)\n        The sparse code factor in the matrix factorization.\n\n    dictionary : array of shape (n_components, n_features),\n        The dictionary factor in the matrix factorization.\n\n    errors : array\n        Vector of errors at each iteration.\n\n    n_iter : int\n        Number of iterations run. Returned only if `return_n_iter` is\n        set to True.\n\n    See also\n    --------\n    dict_learning_online\n    DictionaryLearning\n    MiniBatchDictionaryLearning\n    SparsePCA\n    MiniBatchSparsePCA\n    "
    },
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['array'],
          name: 'X',
          docstring: 'Data matrix.',
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_features)'
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'n_components',
          docstring: 'Number of dictionary atoms to extract.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['float'],
          name: 'alpha',
          docstring: 'Sparsity controlling parameter.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'n_iter',
          docstring: 'Number of iterations to perform.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'return_code',
          docstring:
            'Whether to also return the code U or just the dictionary V.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'dict_init',
          docstring:
            'Initial value for the dictionary for warm restart scenarios.',
          options: null,
          default_value: null,
          expected_shape: '(n_components, n_features),'
        },
        {
          is_optional: true,
          param_type: ['callable', null],
          name: 'callback',
          docstring: 'callable that gets invoked every five iterations',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'batch_size',
          docstring: 'The number of samples to take in each batch.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'verbose',
          docstring: 'To control the verbosity of the procedure.',
          options: null,
          default_value: 'False',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'shuffle',
          docstring:
            'Whether to shuffle the data before splitting it in batches.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS'],
          name: 'method',
          docstring:
            'lars: uses the least angle regression method to solve the lasso problem (linear_model.lars_path) cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). Lars will be faster if the estimated components are sparse.',
          options: ['lars', 'cd'],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'iter_offset',
          docstring:
            'Number of previous iterations completed on the dictionary used for initialization.',
          options: null,
          default_value: '0',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'return_inner_stats',
          docstring:
            'Return the inner statistics A (dictionary covariance) and B (data approximation). Useful to restart the algorithm in an online setting. If return_inner_stats is True, return_code is ignored',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['array', 'tuple'],
          name: 'inner_stats',
          docstring:
            'Inner sufficient statistics that are kept by the algorithm. Passing them at initialization is useful in online settings, to avoid loosing the history of the evolution. A (n_components, n_components) is the dictionary covariance matrix. B (n_features, n_components) is the data approximation matrix',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'return_n_iter',
          docstring: 'Whether or not to return the number of iterations.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'positive_dict',
          docstring:
            'Whether to enforce positivity when finding the dictionary.  .. versionadded:: 0.20',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['bool'],
          name: 'positive_code',
          docstring:
            'Whether to enforce positivity when finding the code.  .. versionadded:: 0.20',
          options: null,
          default_value: null,
          expected_shape: null
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
          returned: true,
          param_type: ['array'],
          name: 'code',
          docstring: 'the sparse code (only returned if `return_code=True`)'
        },
        {
          returned: true,
          param_type: ['array'],
          name: 'dictionary',
          docstring: 'the solutions to the dictionary learning problem'
        },
        {
          returned: true,
          param_type: ['int'],
          name: 'n_iter',
          docstring:
            'Number of iterations run. Returned only if `return_n_iter` is set to `True`.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      name: 'dict_learning_online',
      docstring:
        "Solves a dictionary learning matrix factorization problem online.\n\n    Finds the best dictionary and the corresponding sparse code for\n    approximating the data matrix X by solving::\n\n        (U^*, V^*) = argmin 0.5 || X - U V ||_2^2 + alpha * || U ||_1\n                     (U,V)\n                     with || V_k ||_2 = 1 for all  0 <= k < n_components\n\n    where V is the dictionary and U is the sparse code. This is\n    accomplished by repeatedly iterating over mini-batches by slicing\n    the input data.\n\n    Read more in the :ref:`User Guide <DictionaryLearning>`.\n\n    Parameters\n    ----------\n    X : array of shape (n_samples, n_features)\n        Data matrix.\n\n    n_components : int,\n        Number of dictionary atoms to extract.\n\n    alpha : float,\n        Sparsity controlling parameter.\n\n    n_iter : int,\n        Number of iterations to perform.\n\n    return_code : boolean,\n        Whether to also return the code U or just the dictionary V.\n\n    dict_init : array of shape (n_components, n_features),\n        Initial value for the dictionary for warm restart scenarios.\n\n    callback : callable or None, optional (default: None)\n        callable that gets invoked every five iterations\n\n    batch_size : int,\n        The number of samples to take in each batch.\n\n    verbose : bool, optional (default: False)\n        To control the verbosity of the procedure.\n\n    shuffle : boolean,\n        Whether to shuffle the data before splitting it in batches.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    method : {'lars', 'cd'}\n        lars: uses the least angle regression method to solve the lasso problem\n        (linear_model.lars_path)\n        cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). Lars will be faster if\n        the estimated components are sparse.\n\n    iter_offset : int, default 0\n        Number of previous iterations completed on the dictionary used for\n        initialization.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    return_inner_stats : boolean, optional\n        Return the inner statistics A (dictionary covariance) and B\n        (data approximation). Useful to restart the algorithm in an\n        online setting. If return_inner_stats is True, return_code is\n        ignored\n\n    inner_stats : tuple of (A, B) ndarrays\n        Inner sufficient statistics that are kept by the algorithm.\n        Passing them at initialization is useful in online settings, to\n        avoid loosing the history of the evolution.\n        A (n_components, n_components) is the dictionary covariance matrix.\n        B (n_features, n_components) is the data approximation matrix\n\n    return_n_iter : bool\n        Whether or not to return the number of iterations.\n\n    positive_dict : bool\n        Whether to enforce positivity when finding the dictionary.\n\n        .. versionadded:: 0.20\n\n    positive_code : bool\n        Whether to enforce positivity when finding the code.\n\n        .. versionadded:: 0.20\n\n    Returns\n    -------\n    code : array of shape (n_samples, n_components),\n        the sparse code (only returned if `return_code=True`)\n\n    dictionary : array of shape (n_components, n_features),\n        the solutions to the dictionary learning problem\n\n    n_iter : int\n        Number of iterations run. Returned only if `return_n_iter` is\n        set to `True`.\n\n    See also\n    --------\n    dict_learning\n    DictionaryLearning\n    MiniBatchDictionaryLearning\n    SparsePCA\n    MiniBatchSparsePCA\n\n    "
    },
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['array'],
          name: 'X',
          docstring:
            'Training vector, where n_samples is the number of samples and n_features is the number of features.',
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_features)'
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'n_components',
          docstring:
            'Number of components to extract. If None no dimension reduction is performed.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['LIST_VALID_OPTIONS'],
          name: 'algorithm',
          docstring: 'Apply a parallel or deflational FASTICA algorithm.',
          options: ['parallel', 'deflation', 'optional'],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'whiten',
          docstring:
            'If True perform an initial whitening of the data. If False, the data is assumed to have already been preprocessed: it should be centered, normed and white. Otherwise you will get incorrect results. In this case the parameter n_components will be ignored.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['str'],
          name: 'fun',
          docstring:
            "The functional form of the G function used in the approximation to neg-entropy. Could be either 'logcosh', 'exp', or 'cube'. You can also provide your own function. It should return a tuple containing the value of the function, and of its derivative, in the point. The derivative should be averaged along its last dimension. Example:  def my_g(x):     return x ** 3, np.mean(3 * x ** 2, axis=-1)",
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['dict'],
          name: 'fun_args',
          docstring:
            "Arguments to send to the functional form. If empty or None and if fun='logcosh', fun_args will take value {'alpha' : 1.0}",
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'max_iter',
          docstring: 'Maximum number of iterations to perform.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float'],
          name: 'tol',
          docstring:
            'A positive scalar giving the tolerance at which the un-mixing matrix is considered to have converged.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['array'],
          name: 'w_init',
          docstring:
            "Initial un-mixing array of dimension (n.comp,n.comp). If None (default) then an array of normal r.v.'s is used.",
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'return_X_mean',
          docstring: 'If True, X_mean is returned too.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'compute_sources',
          docstring:
            'If False, sources are not computed, but only the rotation matrix. This can save memory when working with big data. Defaults to True.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'return_n_iter',
          docstring: 'Whether or not to return the number of iterations.',
          options: null,
          default_value: null,
          expected_shape: null
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
          returned: true,
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          name: 'K',
          docstring:
            "If whiten is 'True', K is the pre-whitening matrix that projects data onto the first n_components principal components. If whiten is 'False', K is 'None'."
        },
        {
          returned: true,
          param_type: ['array'],
          name: 'W',
          docstring:
            'Estimated un-mixing matrix. The mixing matrix can be obtained by::      w = np.dot(W, K.T)     A = w.T * (w * w.T).I'
        },
        {
          returned: true,
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          name: 'S',
          docstring: 'Estimated source matrix'
        },
        {
          returned: true,
          param_type: ['array'],
          name: 'X_mean',
          docstring:
            'The mean over features. Returned only if return_X_mean is True.'
        },
        {
          returned: true,
          param_type: ['int'],
          name: 'n_iter',
          docstring:
            'If the algorithm is "deflation", n_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge. This is returned only when return_n_iter is set to `True`.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      name: 'fastica',
      docstring:
        "Perform Fast Independent Component Analysis.\n\n    Read more in the :ref:`User Guide <ICA>`.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        Training vector, where n_samples is the number of samples and\n        n_features is the number of features.\n\n    n_components : int, optional\n        Number of components to extract. If None no dimension reduction\n        is performed.\n\n    algorithm : {'parallel', 'deflation'}, optional\n        Apply a parallel or deflational FASTICA algorithm.\n\n    whiten : boolean, optional\n        If True perform an initial whitening of the data.\n        If False, the data is assumed to have already been\n        preprocessed: it should be centered, normed and white.\n        Otherwise you will get incorrect results.\n        In this case the parameter n_components will be ignored.\n\n    fun : string or function, optional. Default: 'logcosh'\n        The functional form of the G function used in the\n        approximation to neg-entropy. Could be either 'logcosh', 'exp',\n        or 'cube'.\n        You can also provide your own function. It should return a tuple\n        containing the value of the function, and of its derivative, in the\n        point. The derivative should be averaged along its last dimension.\n        Example:\n\n        def my_g(x):\n            return x ** 3, np.mean(3 * x ** 2, axis=-1)\n\n    fun_args : dictionary, optional\n        Arguments to send to the functional form.\n        If empty or None and if fun='logcosh', fun_args will take value\n        {'alpha' : 1.0}\n\n    max_iter : int, optional\n        Maximum number of iterations to perform.\n\n    tol : float, optional\n        A positive scalar giving the tolerance at which the\n        un-mixing matrix is considered to have converged.\n\n    w_init : (n_components, n_components) array, optional\n        Initial un-mixing array of dimension (n.comp,n.comp).\n        If None (default) then an array of normal r.v.'s is used.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    return_X_mean : bool, optional\n        If True, X_mean is returned too.\n\n    compute_sources : bool, optional\n        If False, sources are not computed, but only the rotation matrix.\n        This can save memory when working with big data. Defaults to True.\n\n    return_n_iter : bool, optional\n        Whether or not to return the number of iterations.\n\n    Returns\n    -------\n    K : array, shape (n_components, n_features) | None.\n        If whiten is 'True', K is the pre-whitening matrix that projects data\n        onto the first n_components principal components. If whiten is 'False',\n        K is 'None'.\n\n    W : array, shape (n_components, n_components)\n        Estimated un-mixing matrix.\n        The mixing matrix can be obtained by::\n\n            w = np.dot(W, K.T)\n            A = w.T * (w * w.T).I\n\n    S : array, shape (n_samples, n_components) | None\n        Estimated source matrix\n\n    X_mean : array, shape (n_features, )\n        The mean over features. Returned only if return_X_mean is True.\n\n    n_iter : int\n        If the algorithm is \"deflation\", n_iter is the\n        maximum number of iterations run across all components. Else\n        they are just the number of iterations taken to converge. This is\n        returned only when return_n_iter is set to `True`.\n\n    Notes\n    -----\n\n    The data matrix X is considered to be a linear combination of\n    non-Gaussian (independent) components i.e. X = AS where columns of S\n    contain the independent components and A is a linear mixing\n    matrix. In short ICA attempts to `un-mix' the data by estimating an\n    un-mixing matrix W where ``S = W K X.``\n\n    This implementation was originally made for data of shape\n    [n_features, n_samples]. Now the input is transposed\n    before the algorithm is applied. This makes it slightly\n    faster for Fortran-ordered input.\n\n    Implemented using FastICA:\n    `A. Hyvarinen and E. Oja, Independent Component Analysis:\n    Algorithms and Applications, Neural Networks, 13(4-5), 2000,\n    pp. 411-430`\n\n    "
    },
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['array'],
          name: 'X',
          docstring: 'Constant matrix.',
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_features)'
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'W',
          docstring:
            "If init='custom', it is used as initial guess for the solution.",
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_components)'
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'H',
          docstring:
            "If init='custom', it is used as initial guess for the solution. If update_H=False, it is used as a constant, to solve for W only.",
          options: null,
          default_value: null,
          expected_shape: '(n_components, n_features)'
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'n_components',
          docstring:
            'Number of components, if n_components is not set all features are kept.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS', null],
          name: 'init',
          docstring:
            "Method used to initialize the procedure. Default: 'random'. Valid options:  - 'random': non-negative random matrices, scaled with:     sqrt(X.mean() / n_components)  - 'nndsvd': Nonnegative Double Singular Value Decomposition (NNDSVD)     initialization (better for sparseness)  - 'nndsvda': NNDSVD with zeros filled with the average of X     (better when sparsity is not desired)  - 'nndsvdar': NNDSVD with zeros filled with small random values     (generally faster, less accurate alternative to NNDSVDa     for when sparsity is not desired)  - 'custom': use custom matrices W and H",
          options: [
            ' None ',
            " 'random' ",
            " 'nndsvd' ",
            " 'nndsvda' ",
            " 'nndsvdar' ",
            " 'custom"
          ],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'update_H',
          docstring:
            'Set to True, both W and H will be estimated from initial guesses. Set to False, only W will be estimated.',
          options: null,
          default_value: 'True',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS'],
          name: 'solver',
          docstring:
            "Numerical solver to use: 'cd' is a Coordinate Descent solver that uses Fast Hierarchical     Alternating Least Squares (Fast HALS). 'mu' is a Multiplicative Update solver.  .. versionadded:: 0.17    Coordinate Descent solver.  .. versionadded:: 0.19    Multiplicative Update solver.",
          options: ["cd' ", " 'mu"],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float', 'str'],
          name: 'beta_loss',
          docstring:
            "String must be in {'frobenius', 'kullback-leibler', 'itakura-saito'}. Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from 'frobenius' (or 2) and 'kullback-leibler' (or 1) lead to significantly slower fits. Note that for beta_loss <= 0 (or 'itakura-saito'), the input matrix X cannot contain zeros. Used only in 'mu' solver.  .. versionadded:: 0.19",
          options: null,
          default_value: 'frobenius',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float'],
          name: 'tol',
          docstring: 'Tolerance of the stopping condition.',
          options: null,
          default_value: '1e-4',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'max_iter',
          docstring: 'Maximum number of iterations before timing out.',
          options: null,
          default_value: '200',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float'],
          name: 'alpha',
          docstring: 'Constant that multiplies the regularization terms.',
          options: null,
          default_value: '0.',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float'],
          name: 'l1_ratio',
          docstring:
            'The regularization mixing parameter, with 0 <= l1_ratio <= 1. For l1_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1_ratio = 1 it is an elementwise L1 penalty. For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.',
          options: null,
          default_value: '0.',
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS', null],
          name: 'regularization',
          docstring:
            'Select whether the regularization affects the components (H), the transformation (W), both or none of them.',
          options: ["both' ", " 'components' ", " 'transformation' ", ' None'],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'verbose',
          docstring: 'The verbosity level.',
          options: null,
          default_value: '0',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'shuffle',
          docstring:
            'If true, randomize the order of coordinates in the CD solver.',
          options: null,
          default_value: 'False',
          expected_shape: null
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
          returned: true,
          param_type: ['array'],
          name: 'W',
          docstring: 'Solution to the non-negative least squares problem.'
        },
        {
          returned: true,
          param_type: ['array'],
          name: 'H',
          docstring: 'Solution to the non-negative least squares problem.'
        },
        {
          returned: true,
          param_type: ['int'],
          name: 'n_iter',
          docstring: 'Actual number of iterations.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      name: 'non_negative_factorization',
      docstring:
        "Compute Non-negative Matrix Factorization (NMF)\n\n    Find two non-negative matrices (W, H) whose product approximates the non-\n    negative matrix X. This factorization can be used for example for\n    dimensionality reduction, source separation or topic extraction.\n\n    The objective function is::\n\n        0.5 * ||X - WH||_Fro^2\n        + alpha * l1_ratio * ||vec(W)||_1\n        + alpha * l1_ratio * ||vec(H)||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n        + 0.5 * alpha * (1 - l1_ratio) * ||H||_Fro^2\n\n    Where::\n\n        ||A||_Fro^2 = \\sum_{i,j} A_{ij}^2 (Frobenius norm)\n        ||vec(A)||_1 = \\sum_{i,j} abs(A_{ij}) (Elementwise L1 norm)\n\n    For multiplicative-update ('mu') solver, the Frobenius norm\n    (0.5 * ||X - WH||_Fro^2) can be changed into another beta-divergence loss,\n    by changing the beta_loss parameter.\n\n    The objective function is minimized with an alternating minimization of W\n    and H. If H is given and update_H=False, it solves for W only.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        Constant matrix.\n\n    W : array-like, shape (n_samples, n_components)\n        If init='custom', it is used as initial guess for the solution.\n\n    H : array-like, shape (n_components, n_features)\n        If init='custom', it is used as initial guess for the solution.\n        If update_H=False, it is used as a constant, to solve for W only.\n\n    n_components : integer\n        Number of components, if n_components is not set all features\n        are kept.\n\n    init :  None | 'random' | 'nndsvd' | 'nndsvda' | 'nndsvdar' | 'custom'\n        Method used to initialize the procedure.\n        Default: 'random'.\n        Valid options:\n\n        - 'random': non-negative random matrices, scaled with:\n            sqrt(X.mean() / n_components)\n\n        - 'nndsvd': Nonnegative Double Singular Value Decomposition (NNDSVD)\n            initialization (better for sparseness)\n\n        - 'nndsvda': NNDSVD with zeros filled with the average of X\n            (better when sparsity is not desired)\n\n        - 'nndsvdar': NNDSVD with zeros filled with small random values\n            (generally faster, less accurate alternative to NNDSVDa\n            for when sparsity is not desired)\n\n        - 'custom': use custom matrices W and H\n\n    update_H : boolean, default: True\n        Set to True, both W and H will be estimated from initial guesses.\n        Set to False, only W will be estimated.\n\n    solver : 'cd' | 'mu'\n        Numerical solver to use:\n        'cd' is a Coordinate Descent solver that uses Fast Hierarchical\n            Alternating Least Squares (Fast HALS).\n        'mu' is a Multiplicative Update solver.\n\n        .. versionadded:: 0.17\n           Coordinate Descent solver.\n\n        .. versionadded:: 0.19\n           Multiplicative Update solver.\n\n    beta_loss : float or string, default 'frobenius'\n        String must be in {'frobenius', 'kullback-leibler', 'itakura-saito'}.\n        Beta divergence to be minimized, measuring the distance between X\n        and the dot product WH. Note that values different from 'frobenius'\n        (or 2) and 'kullback-leibler' (or 1) lead to significantly slower\n        fits. Note that for beta_loss <= 0 (or 'itakura-saito'), the input\n        matrix X cannot contain zeros. Used only in 'mu' solver.\n\n        .. versionadded:: 0.19\n\n    tol : float, default: 1e-4\n        Tolerance of the stopping condition.\n\n    max_iter : integer, default: 200\n        Maximum number of iterations before timing out.\n\n    alpha : double, default: 0.\n        Constant that multiplies the regularization terms.\n\n    l1_ratio : double, default: 0.\n        The regularization mixing parameter, with 0 <= l1_ratio <= 1.\n        For l1_ratio = 0 the penalty is an elementwise L2 penalty\n        (aka Frobenius Norm).\n        For l1_ratio = 1 it is an elementwise L1 penalty.\n        For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.\n\n    regularization : 'both' | 'components' | 'transformation' | None\n        Select whether the regularization affects the components (H), the\n        transformation (W), both or none of them.\n\n    random_state : int, RandomState instance or None, optional, default: None\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by `np.random`.\n\n    verbose : integer, default: 0\n        The verbosity level.\n\n    shuffle : boolean, default: False\n        If true, randomize the order of coordinates in the CD solver.\n\n    Returns\n    -------\n    W : array-like, shape (n_samples, n_components)\n        Solution to the non-negative least squares problem.\n\n    H : array-like, shape (n_components, n_features)\n        Solution to the non-negative least squares problem.\n\n    n_iter : int\n        Actual number of iterations.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> X = np.array([[1,1], [2, 1], [3, 1.2], [4, 1], [5, 0.8], [6, 1]])\n    >>> from sklearn.decomposition import non_negative_factorization\n    >>> W, H, n_iter = non_negative_factorization(X, n_components=2,\n    ... init='random', random_state=0)\n\n    References\n    ----------\n    Cichocki, Andrzej, and P. H. A. N. Anh-Huy. \"Fast local algorithms for\n    large scale nonnegative matrix and tensor factorizations.\"\n    IEICE transactions on fundamentals of electronics, communications and\n    computer sciences 92.3: 708-721, 2009.\n\n    Fevotte, C., & Idier, J. (2011). Algorithms for nonnegative matrix\n    factorization with the beta-divergence. Neural Computation, 23(9).\n    "
    },
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['array'],
          name: 'M',
          docstring: 'Matrix to decompose',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['int'],
          name: 'n_components',
          docstring: 'Number of singular values and vectors to extract.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'n_oversamples',
          docstring:
            'Additional number of random vectors to sample the range of M so as to ensure proper conditioning. The total number of random vectors used to find the range of M is n_components + n_oversamples. Smaller number can improve speed but can negatively impact the quality of approximation of singular vectors and singular values.',
          options: null,
          default_value: '10',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'n_iter',
          docstring:
            "Number of power iterations. It can be used to deal with very noisy problems. When 'auto', it is set to 4, unless `n_components` is small (< .1 * min(X.shape)) `n_iter` in which case is set to 7. This improves precision with few components.  .. versionchanged:: 0.18",
          options: null,
          default_value: 'auto',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: [null],
          name: 'power_iteration_normalizer',
          docstring:
            "Whether the power iterations are normalized with step-by-step QR factorization (the slowest but most accurate), 'none' (the fastest but numerically unstable when `n_iter` is large, e.g. typically 5 or larger), or 'LU' factorization (numerically stable but can lose slightly in accuracy). The 'auto' mode applies no normalization if `n_iter` <= 2 and switches to LU otherwise.  .. versionadded:: 0.18",
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: [null],
          name: 'transpose',
          docstring:
            "Whether the algorithm should be applied to M.T instead of M. The result should approximately be the same. The 'auto' mode will trigger the transposition if M.shape[1] > M.shape[0] since this implementation of randomized SVD tend to be a little faster in that case.  .. versionchanged:: 0.18",
          options: null,
          default_value: '',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'flip_sign',
          docstring:
            'The output of a singular value decomposition is only unique up to a permutation of the signs of the singular vectors. If `flip_sign` is set to `True`, the sign ambiguity is resolved by making the largest loadings for each component in the left singular vectors positive.',
          options: null,
          default_value: '',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'random_state',
          docstring:
            'The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`.',
          options: null,
          default_value: 'None',
          expected_shape: null
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
      ],
      name: 'randomized_svd',
      docstring:
        "Computes a truncated randomized SVD\n\n    Parameters\n    ----------\n    M : ndarray or sparse matrix\n        Matrix to decompose\n\n    n_components : int\n        Number of singular values and vectors to extract.\n\n    n_oversamples : int (default is 10)\n        Additional number of random vectors to sample the range of M so as\n        to ensure proper conditioning. The total number of random vectors\n        used to find the range of M is n_components + n_oversamples. Smaller\n        number can improve speed but can negatively impact the quality of\n        approximation of singular vectors and singular values.\n\n    n_iter : int or 'auto' (default is 'auto')\n        Number of power iterations. It can be used to deal with very noisy\n        problems. When 'auto', it is set to 4, unless `n_components` is small\n        (< .1 * min(X.shape)) `n_iter` in which case is set to 7.\n        This improves precision with few components.\n\n        .. versionchanged:: 0.18\n\n    power_iteration_normalizer : 'auto' (default), 'QR', 'LU', 'none'\n        Whether the power iterations are normalized with step-by-step\n        QR factorization (the slowest but most accurate), 'none'\n        (the fastest but numerically unstable when `n_iter` is large, e.g.\n        typically 5 or larger), or 'LU' factorization (numerically stable\n        but can lose slightly in accuracy). The 'auto' mode applies no\n        normalization if `n_iter` <= 2 and switches to LU otherwise.\n\n        .. versionadded:: 0.18\n\n    transpose : True, False or 'auto' (default)\n        Whether the algorithm should be applied to M.T instead of M. The\n        result should approximately be the same. The 'auto' mode will\n        trigger the transposition if M.shape[1] > M.shape[0] since this\n        implementation of randomized SVD tend to be a little faster in that\n        case.\n\n        .. versionchanged:: 0.18\n\n    flip_sign : boolean, (True by default)\n        The output of a singular value decomposition is only unique up to a\n        permutation of the signs of the singular vectors. If `flip_sign` is\n        set to `True`, the sign ambiguity is resolved by making the largest\n        loadings for each component in the left singular vectors positive.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`.\n\n    Notes\n    -----\n    This algorithm finds a (usually very good) approximate truncated\n    singular value decomposition using randomization to speed up the\n    computations. It is particularly fast on large matrices on which\n    you wish to extract only a small number of components. In order to\n    obtain further speed up, `n_iter` can be set <=2 (at the cost of\n    loss of precision).\n\n    References\n    ----------\n    * Finding structure with randomness: Stochastic algorithms for constructing\n      approximate matrix decompositions\n      Halko, et al., 2009 https://arxiv.org/abs/0909.4061\n\n    * A randomized algorithm for the decomposition of matrices\n      Per-Gunnar Martinsson, Vladimir Rokhlin and Mark Tygert\n\n    * An implementation of a randomized algorithm for principal component\n      analysis\n      A. Szlam et al. 2014\n    "
    },
    {
      inputs: [
        {
          is_optional: false,
          param_type: ['array'],
          name: 'X',
          docstring: 'Data matrix',
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_features)'
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'dictionary',
          docstring:
            'The dictionary matrix against which to solve the sparse coding of the data. Some of the algorithms assume normalized rows for meaningful output.',
          options: null,
          default_value: null,
          expected_shape: '(n_components, n_features)'
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'gram',
          docstring: "Precomputed Gram matrix, dictionary * dictionary'",
          options: null,
          default_value: null,
          expected_shape: '(n_components, n_components)'
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'cov',
          docstring: "Precomputed covariance, dictionary' * X",
          options: null,
          default_value: null,
          expected_shape: '(n_components, n_samples)'
        },
        {
          is_optional: false,
          param_type: ['LIST_VALID_OPTIONS'],
          name: 'algorithm',
          docstring:
            "lars: uses the least angle regression method (linear_model.lars_path) lasso_lars: uses Lars to compute the Lasso solution lasso_cd: uses the coordinate descent method to compute the Lasso solution (linear_model.Lasso). lasso_lars will be faster if the estimated components are sparse. omp: uses orthogonal matching pursuit to estimate the sparse solution threshold: squashes to zero all coefficients less than alpha from the projection dictionary * X'",
          options: ['lasso_lars', 'lasso_cd', 'lars', 'omp', 'threshold'],
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'n_nonzero_coefs',
          docstring:
            "Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'` and is overridden by `alpha` in the `omp` case.",
          options: null,
          default_value: '',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['float'],
          name: 'alpha',
          docstring:
            "If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of the reconstruction error targeted. In this case, it overrides `n_nonzero_coefs`.",
          options: null,
          default_value: '',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'copy_cov',
          docstring:
            'Whether to copy the precomputed covariance matrix; if False, it may be overwritten.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: false,
          param_type: ['array'],
          name: 'init',
          docstring:
            "Initialization value of the sparse codes. Only used if `algorithm='lasso_cd'`.",
          options: null,
          default_value: null,
          expected_shape: '(n_samples, n_components)'
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'max_iter',
          docstring:
            "Maximum number of iterations to perform if `algorithm='lasso_cd'`.",
          options: null,
          default_value: '',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int', null],
          name: 'n_jobs',
          docstring:
            'Number of parallel jobs to run. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          options: null,
          default_value: 'None',
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'check_input',
          docstring:
            'If False, the input arrays X and dictionary will not be checked.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['int'],
          name: 'verbose',
          docstring:
            'Controls the verbosity; the higher, the more messages. Defaults to 0.',
          options: null,
          default_value: null,
          expected_shape: null
        },
        {
          is_optional: true,
          param_type: ['bool'],
          name: 'positive',
          docstring:
            'Whether to enforce positivity when finding the encoding.  .. versionadded:: 0.20',
          options: null,
          default_value: null,
          expected_shape: null
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
          returned: true,
          param_type: ['array'],
          name: 'code',
          docstring: 'The sparse codes'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      name: 'sparse_encode',
      docstring:
        "Sparse coding\n\n    Each row of the result is the solution to a sparse coding problem.\n    The goal is to find a sparse array `code` such that::\n\n        X ~= code * dictionary\n\n    Read more in the :ref:`User Guide <SparseCoder>`.\n\n    Parameters\n    ----------\n    X : array of shape (n_samples, n_features)\n        Data matrix\n\n    dictionary : array of shape (n_components, n_features)\n        The dictionary matrix against which to solve the sparse coding of\n        the data. Some of the algorithms assume normalized rows for meaningful\n        output.\n\n    gram : array, shape=(n_components, n_components)\n        Precomputed Gram matrix, dictionary * dictionary'\n\n    cov : array, shape=(n_components, n_samples)\n        Precomputed covariance, dictionary' * X\n\n    algorithm : {'lasso_lars', 'lasso_cd', 'lars', 'omp', 'threshold'}\n        lars: uses the least angle regression method (linear_model.lars_path)\n        lasso_lars: uses Lars to compute the Lasso solution\n        lasso_cd: uses the coordinate descent method to compute the\n        Lasso solution (linear_model.Lasso). lasso_lars will be faster if\n        the estimated components are sparse.\n        omp: uses orthogonal matching pursuit to estimate the sparse solution\n        threshold: squashes to zero all coefficients less than alpha from\n        the projection dictionary * X'\n\n    n_nonzero_coefs : int, 0.1 * n_features by default\n        Number of nonzero coefficients to target in each column of the\n        solution. This is only used by `algorithm='lars'` and `algorithm='omp'`\n        and is overridden by `alpha` in the `omp` case.\n\n    alpha : float, 1. by default\n        If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the\n        penalty applied to the L1 norm.\n        If `algorithm='threshold'`, `alpha` is the absolute value of the\n        threshold below which coefficients will be squashed to zero.\n        If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of\n        the reconstruction error targeted. In this case, it overrides\n        `n_nonzero_coefs`.\n\n    copy_cov : boolean, optional\n        Whether to copy the precomputed covariance matrix; if False, it may be\n        overwritten.\n\n    init : array of shape (n_samples, n_components)\n        Initialization value of the sparse codes. Only used if\n        `algorithm='lasso_cd'`.\n\n    max_iter : int, 1000 by default\n        Maximum number of iterations to perform if `algorithm='lasso_cd'`.\n\n    n_jobs : int or None, optional (default=None)\n        Number of parallel jobs to run.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    check_input : boolean, optional\n        If False, the input arrays X and dictionary will not be checked.\n\n    verbose : int, optional\n        Controls the verbosity; the higher, the more messages. Defaults to 0.\n\n    positive : boolean, optional\n        Whether to enforce positivity when finding the encoding.\n\n        .. versionadded:: 0.20\n\n    Returns\n    -------\n    code : array of shape (n_samples, n_components)\n        The sparse codes\n\n    See also\n    --------\n    sklearn.linear_model.lars_path\n    sklearn.linear_model.orthogonal_mp\n    sklearn.linear_model.Lasso\n    SparseCoder\n    "
    }
  ],
  docstring: '',
  outputs: []
}
