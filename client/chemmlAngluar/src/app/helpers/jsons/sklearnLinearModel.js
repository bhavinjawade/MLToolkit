export default {
  name: 'sklearn.linear_model',
  outputs: [],
  docstring: '',
  inputs: [],
  module: 'linear_model',
  node_functions: [
    {
      name: 'enet_path',
      outputs: [
        {
          name: 'alphas',
          returned: true,
          param_type: ['array'],
          docstring: 'The alphas along the path where models are computed.'
        },
        {
          name: 'coefs',
          returned: true,
          param_type: ['array'],
          docstring: 'Coefficients along the path.'
        },
        {
          name: 'dual_gaps',
          returned: true,
          param_type: ['array'],
          docstring:
            'The dual gaps at the end of the optimization for each alpha.'
        },
        {
          name: 'n_iters',
          returned: true,
          param_type: ['array'],
          docstring:
            'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha. (Is returned when ``return_n_iter`` is set to True).'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        "Compute elastic net path with coordinate descent\n\n    The elastic net optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        1 / (2 * n_samples) * ||y - Xw||^2_2\n        + alpha * l1_ratio * ||w||_1\n        + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^Fro_2\n        + alpha * l1_ratio * ||W||_21\n        + 0.5 * alpha * (1 - l1_ratio) * ||W||_Fro^2\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <elastic_net>`.\n\n    Parameters\n    ----------\n    X : {array-like}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,) or (n_samples, n_outputs)\n        Target values\n\n    l1_ratio : float, optional\n        float between 0 and 1 passed to elastic net (scaling between\n        l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso\n\n    eps : float\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If None alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    check_input : bool, default True\n        Skip input validation checks, including the Gram matrix when provided\n        assuming there are handled by the caller when check_input=False.\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n        (Is returned when ``return_n_iter`` is set to True).\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    See also\n    --------\n    MultiTaskElasticNet\n    MultiTaskElasticNetCV\n    ElasticNet\n    ElasticNetCV\n    ",
      inputs: [
        {
          name: 'X',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '(n_samples, n_features)',
          docstring:
            'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
          is_optional: false,
          options: ['array-like}', ' shape (n_samples', ' n_features)']
        },
        {
          name: 'y',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_samples,) or (n_samples, n_outputs)',
          docstring: 'Target values',
          is_optional: false,
          options: null
        },
        {
          name: 'l1_ratio',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'float between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). ``l1_ratio=1`` corresponds to the Lasso',
          is_optional: true,
          options: null
        },
        {
          name: 'eps',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
          is_optional: false,
          options: null
        },
        {
          name: 'n_alphas',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring: 'Number of alphas along the regularization path',
          is_optional: true,
          options: null
        },
        {
          name: 'alphas',
          default_value: null,
          param_type: ['array'],
          expected_shape: null,
          docstring:
            'List of alphas where to compute the models. If None alphas are set automatically',
          is_optional: true,
          options: null
        },
        {
          name: 'precompute',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          is_optional: false,
          options: ['True ', ' False ', " 'auto' ", ' array-like']
        },
        {
          name: 'Xy',
          default_value: null,
          param_type: ['array'],
          expected_shape: null,
          docstring:
            'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
          is_optional: true,
          options: null
        },
        {
          name: 'copy_X',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'coef_init',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          expected_shape: '(n_features, ) | None',
          docstring: 'The initial values of the coefficients.',
          is_optional: false,
          options: ['array, shape (n_features, ) ', ' None']
        },
        {
          name: 'verbose',
          default_value: null,
          param_type: ['int', 'bool'],
          expected_shape: null,
          docstring: 'Amount of verbosity.',
          is_optional: false,
          options: null
        },
        {
          name: 'return_n_iter',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'whether to return the number of iterations or not.',
          is_optional: false,
          options: null
        },
        {
          name: 'positive',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
          is_optional: true,
          options: null
        },
        {
          name: 'check_input',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Skip input validation checks, including the Gram matrix when provided assuming there are handled by the caller when check_input=False.',
          is_optional: true,
          options: null
        },
        {
          name: '**params',
          default_value: null,
          param_type: [null],
          expected_shape: null,
          docstring:
            'keyword arguments passed to the coordinate descent solver.',
          is_optional: false,
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
      ]
    },
    {
      name: 'lars_path',
      outputs: [
        {
          name: 'alphas',
          returned: true,
          param_type: ['array'],
          docstring:
            'Maximum of covariances (in absolute value) at each iteration. ``n_alphas`` is either ``max_iter``, ``n_features`` or the number of nodes in the path with ``alpha >= alpha_min``, whichever is smaller.'
        },
        {
          name: 'active',
          returned: true,
          param_type: ['array'],
          docstring: 'Indices of active variables at the end of the path.'
        },
        {
          name: 'coefs',
          returned: true,
          param_type: ['array'],
          docstring: 'Coefficients along the path'
        },
        {
          name: 'n_iter',
          returned: true,
          param_type: ['int'],
          docstring:
            'Number of iterations run. Returned only if return_n_iter is set to True.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        "Compute Least Angle Regression or Lasso path using LARS algorithm [1]\n\n    The optimization objective for the case method='lasso' is::\n\n    (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    in the case of method='lars', the objective function is only known in\n    the form of an implicit equation (see discussion in [1])\n\n    Read more in the :ref:`User Guide <least_angle_regression>`.\n\n    Parameters\n    -----------\n    X : array, shape: (n_samples, n_features)\n        Input data.\n\n    y : array, shape: (n_samples)\n        Input targets.\n\n    Xy : array-like, shape (n_samples,) or (n_samples, n_targets),             optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    Gram : None, 'auto', array, shape: (n_features, n_features), optional\n        Precomputed Gram matrix (X' * X), if ``'auto'``, the Gram\n        matrix is precomputed from the given X, if there are more samples\n        than features.\n\n    max_iter : integer, optional (default=500)\n        Maximum number of iterations to perform, set to infinity for no limit.\n\n    alpha_min : float, optional (default=0)\n        Minimum correlation along the path. It corresponds to the\n        regularization parameter alpha parameter in the Lasso.\n\n    method : {'lar', 'lasso'}, optional (default='lar')\n        Specifies the returned model. Select ``'lar'`` for Least Angle\n        Regression, ``'lasso'`` for the Lasso.\n\n    copy_X : bool, optional (default=True)\n        If ``False``, ``X`` is overwritten.\n\n    eps : float, optional (default=``np.finfo(np.float).eps``)\n        The machine-precision regularization in the computation of the\n        Cholesky diagonal factors. Increase this for very ill-conditioned\n        systems.\n\n    copy_Gram : bool, optional (default=True)\n        If ``False``, ``Gram`` is overwritten.\n\n    verbose : int (default=0)\n        Controls output verbosity.\n\n    return_path : bool, optional (default=True)\n        If ``return_path==True`` returns the entire path, else returns only the\n        last point of the path.\n\n    return_n_iter : bool, optional (default=False)\n        Whether to return the number of iterations.\n\n    positive : boolean (default=False)\n        Restrict coefficients to be >= 0.\n        This option is only allowed with method 'lasso'. Note that the model\n        coefficients will not converge to the ordinary-least-squares solution\n        for small values of alpha. Only coefficients up to the smallest alpha\n        value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by\n        the stepwise Lars-Lasso algorithm are typically in congruence with the\n        solution of the coordinate descent lasso_path function.\n\n    Returns\n    --------\n    alphas : array, shape: [n_alphas + 1]\n        Maximum of covariances (in absolute value) at each iteration.\n        ``n_alphas`` is either ``max_iter``, ``n_features`` or the\n        number of nodes in the path with ``alpha >= alpha_min``, whichever\n        is smaller.\n\n    active : array, shape [n_alphas]\n        Indices of active variables at the end of the path.\n\n    coefs : array, shape (n_features, n_alphas + 1)\n        Coefficients along the path\n\n    n_iter : int\n        Number of iterations run. Returned only if return_n_iter is set\n        to True.\n\n    See also\n    --------\n    lasso_path\n    LassoLars\n    Lars\n    LassoLarsCV\n    LarsCV\n    sklearn.decomposition.sparse_encode\n\n    References\n    ----------\n    .. [1] \"Least Angle Regression\", Effron et al.\n           http://statweb.stanford.edu/~tibs/ftp/lars.pdf\n\n    .. [2] `Wikipedia entry on the Least-angle regression\n           <https://en.wikipedia.org/wiki/Least-angle_regression>`_\n\n    .. [3] `Wikipedia entry on the Lasso\n           <https://en.wikipedia.org/wiki/Lasso_(statistics)>`_\n\n    ",
      inputs: [
        {
          name: 'X',
          default_value: null,
          param_type: ['array'],
          expected_shape: ': (n_samples, n_features)',
          docstring: 'Input data.',
          is_optional: false,
          options: null
        },
        {
          name: 'y',
          default_value: null,
          param_type: ['array'],
          expected_shape: ': (n_samples)',
          docstring: 'Input targets.',
          is_optional: false,
          options: null
        },
        {
          name: 'Xy',
          default_value: null,
          param_type: ['array'],
          expected_shape:
            '(n_samples,) or (n_samples, n_targets),             optional',
          docstring:
            'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
          is_optional: true,
          options: null
        },
        {
          name: 'Gram',
          default_value: null,
          param_type: ['array', null],
          expected_shape: ': (n_features, n_features), optional',
          docstring:
            "Precomputed Gram matrix (X' * X), if ``'auto'``, the Gram matrix is precomputed from the given X, if there are more samples than features.",
          is_optional: true,
          options: null
        },
        {
          name: 'max_iter',
          default_value: '500',
          param_type: ['int'],
          expected_shape: null,
          docstring:
            'Maximum number of iterations to perform, set to infinity for no limit.',
          is_optional: true,
          options: null
        },
        {
          name: 'alpha_min',
          default_value: '0',
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Minimum correlation along the path. It corresponds to the regularization parameter alpha parameter in the Lasso.',
          is_optional: true,
          options: null
        },
        {
          name: 'method',
          default_value: 'lar',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            "Specifies the returned model. Select ``'lar'`` for Least Angle Regression, ``'lasso'`` for the Lasso.",
          is_optional: true,
          options: ['lar', " 'lasso'}", " optional (default='lar')"]
        },
        {
          name: 'copy_X',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'If ``False``, ``X`` is overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'eps',
          default_value: '``np.finfonp.float.eps``',
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems.',
          is_optional: true,
          options: null
        },
        {
          name: 'copy_Gram',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'If ``False``, ``Gram`` is overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'verbose',
          default_value: '0',
          param_type: ['int'],
          expected_shape: null,
          docstring: 'Controls output verbosity.',
          is_optional: true,
          options: null
        },
        {
          name: 'return_path',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If ``return_path==True`` returns the entire path, else returns only the last point of the path.',
          is_optional: true,
          options: null
        },
        {
          name: 'return_n_iter',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'Whether to return the number of iterations.',
          is_optional: true,
          options: null
        },
        {
          name: 'positive',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            "Restrict coefficients to be >= 0. This option is only allowed with method 'lasso'. Note that the model coefficients will not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (``alphas_[alphas_ > 0.].min()`` when fit_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent lasso_path function.",
          is_optional: true,
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
      ]
    },
    {
      name: 'lasso_path',
      outputs: [
        {
          name: 'alphas',
          returned: true,
          param_type: ['array'],
          docstring: 'The alphas along the path where models are computed.'
        },
        {
          name: 'coefs',
          returned: true,
          param_type: ['array'],
          docstring: 'Coefficients along the path.'
        },
        {
          name: 'dual_gaps',
          returned: true,
          param_type: ['array'],
          docstring:
            'The dual gaps at the end of the optimization for each alpha.'
        },
        {
          name: 'n_iters',
          returned: true,
          param_type: ['array'],
          docstring:
            'The number of iterations taken by the coordinate descent optimizer to reach the specified tolerance for each alpha.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        "Compute Lasso path with coordinate descent\n\n    The Lasso optimization function varies for mono and multi-outputs.\n\n    For mono-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    For multi-output tasks it is::\n\n        (1 / (2 * n_samples)) * ||Y - XW||^2_Fro + alpha * ||W||_21\n\n    Where::\n\n        ||W||_21 = \\sum_i \\sqrt{\\sum_j w_{ij}^2}\n\n    i.e. the sum of norm of each row.\n\n    Read more in the :ref:`User Guide <lasso>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape (n_samples, n_features)\n        Training data. Pass directly as Fortran-contiguous data to avoid\n        unnecessary memory duplication. If ``y`` is mono-output then ``X``\n        can be sparse.\n\n    y : ndarray, shape (n_samples,), or (n_samples, n_outputs)\n        Target values\n\n    eps : float, optional\n        Length of the path. ``eps=1e-3`` means that\n        ``alpha_min / alpha_max = 1e-3``\n\n    n_alphas : int, optional\n        Number of alphas along the regularization path\n\n    alphas : ndarray, optional\n        List of alphas where to compute the models.\n        If ``None`` alphas are set automatically\n\n    precompute : True | False | 'auto' | array-like\n        Whether to use a precomputed Gram matrix to speed up\n        calculations. If set to ``'auto'`` let us decide. The Gram\n        matrix can also be passed as argument.\n\n    Xy : array-like, optional\n        Xy = np.dot(X.T, y) that can be precomputed. It is useful\n        only when the Gram matrix is precomputed.\n\n    copy_X : boolean, optional, default True\n        If ``True``, X will be copied; else, it may be overwritten.\n\n    coef_init : array, shape (n_features, ) | None\n        The initial values of the coefficients.\n\n    verbose : bool or integer\n        Amount of verbosity.\n\n    return_n_iter : bool\n        whether to return the number of iterations or not.\n\n    positive : bool, default False\n        If set to True, forces coefficients to be positive.\n        (Only allowed when ``y.ndim == 1``).\n\n    **params : kwargs\n        keyword arguments passed to the coordinate descent solver.\n\n    Returns\n    -------\n    alphas : array, shape (n_alphas,)\n        The alphas along the path where models are computed.\n\n    coefs : array, shape (n_features, n_alphas) or             (n_outputs, n_features, n_alphas)\n        Coefficients along the path.\n\n    dual_gaps : array, shape (n_alphas,)\n        The dual gaps at the end of the optimization for each alpha.\n\n    n_iters : array-like, shape (n_alphas,)\n        The number of iterations taken by the coordinate descent optimizer to\n        reach the specified tolerance for each alpha.\n\n    Notes\n    -----\n    For an example, see\n    :ref:`examples/linear_model/plot_lasso_coordinate_descent_path.py\n    <sphx_glr_auto_examples_linear_model_plot_lasso_coordinate_descent_path.py>`.\n\n    To avoid unnecessary memory duplication the X argument of the fit method\n    should be directly passed as a Fortran-contiguous numpy array.\n\n    Note that in certain cases, the Lars solver may be significantly\n    faster to implement this functionality. In particular, linear\n    interpolation can be used to retrieve model coefficients between the\n    values output by lars_path\n\n    Examples\n    ---------\n\n    Comparing lasso_path and lars_path with interpolation:\n\n    >>> X = np.array([[1, 2, 3.1], [2.3, 5.4, 4.3]]).T\n    >>> y = np.array([1, 2, 3.1])\n    >>> # Use lasso_path to compute a coefficient path\n    >>> _, coef_path, _ = lasso_path(X, y, alphas=[5., 1., .5])\n    >>> print(coef_path)\n    [[0.         0.         0.46874778]\n     [0.2159048  0.4425765  0.23689075]]\n\n    >>> # Now use lars_path and 1D linear interpolation to compute the\n    >>> # same path\n    >>> from sklearn.linear_model import lars_path\n    >>> alphas, active, coef_path_lars = lars_path(X, y, method='lasso')\n    >>> from scipy import interpolate\n    >>> coef_path_continuous = interpolate.interp1d(alphas[::-1],\n    ...                                             coef_path_lars[:, ::-1])\n    >>> print(coef_path_continuous([5., 1., .5]))\n    [[0.         0.         0.46915237]\n     [0.2159048  0.4425765  0.23668876]]\n\n\n    See also\n    --------\n    lars_path\n    Lasso\n    LassoLars\n    LassoCV\n    LassoLarsCV\n    sklearn.decomposition.sparse_encode\n    ",
      inputs: [
        {
          name: 'X',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '(n_samples, n_features)',
          docstring:
            'Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If ``y`` is mono-output then ``X`` can be sparse.',
          is_optional: false,
          options: [
            'array-like',
            ' sparse matrix}',
            ' shape (n_samples',
            ' n_features)'
          ]
        },
        {
          name: 'y',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_samples,), or (n_samples, n_outputs)',
          docstring: 'Target values',
          is_optional: false,
          options: null
        },
        {
          name: 'eps',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Length of the path. ``eps=1e-3`` means that ``alpha_min / alpha_max = 1e-3``',
          is_optional: true,
          options: null
        },
        {
          name: 'n_alphas',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring: 'Number of alphas along the regularization path',
          is_optional: true,
          options: null
        },
        {
          name: 'alphas',
          default_value: null,
          param_type: ['array'],
          expected_shape: null,
          docstring:
            'List of alphas where to compute the models. If ``None`` alphas are set automatically',
          is_optional: true,
          options: null
        },
        {
          name: 'precompute',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument.",
          is_optional: false,
          options: ['True ', ' False ', " 'auto' ", ' array-like']
        },
        {
          name: 'Xy',
          default_value: null,
          param_type: ['array'],
          expected_shape: null,
          docstring:
            'Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.',
          is_optional: true,
          options: null
        },
        {
          name: 'copy_X',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'coef_init',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array', null],
          expected_shape: '(n_features, ) | None',
          docstring: 'The initial values of the coefficients.',
          is_optional: false,
          options: ['array, shape (n_features, ) ', ' None']
        },
        {
          name: 'verbose',
          default_value: null,
          param_type: ['int', 'bool'],
          expected_shape: null,
          docstring: 'Amount of verbosity.',
          is_optional: false,
          options: null
        },
        {
          name: 'return_n_iter',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'whether to return the number of iterations or not.',
          is_optional: false,
          options: null
        },
        {
          name: 'positive',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If set to True, forces coefficients to be positive. (Only allowed when ``y.ndim == 1``).',
          is_optional: true,
          options: null
        },
        {
          name: '**params',
          default_value: null,
          param_type: [null],
          expected_shape: null,
          docstring:
            'keyword arguments passed to the coordinate descent solver.',
          is_optional: false,
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
      ]
    },
    {
      name: 'lasso_stability_path',
      outputs: [
        {
          name: 'alphas_grid',
          returned: true,
          param_type: ['array'],
          docstring:
            'The grid points between 0 and 1: alpha/alpha_max  scores_path : array, shape = [n_features, n_grid]     The scores for each feature along the path.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        'DEPRECATED: The function lasso_stability_path is deprecated in 0.19 and will be removed in 0.21.\n\nStability path based on randomized Lasso estimates\n\n    Parameters\n    ----------\n    X : array-like, shape = [n_samples, n_features]\n        training data.\n\n    y : array-like, shape = [n_samples]\n        target values.\n\n    scaling : float, optional, default=0.5\n        The alpha parameter in the stability selection article used to\n        randomly scale the features. Should be between 0 and 1.\n\n    random_state : int, RandomState instance or None, optional, default=None\n        The generator used to randomize the design.  If int, random_state is\n        the seed used by the random number generator; If RandomState instance,\n        random_state is the random number generator; If None, the random number\n        generator is the RandomState instance used by `np.random`.\n\n    n_resampling : int, optional, default=200\n        Number of randomized models.\n\n    n_grid : int, optional, default=100\n        Number of grid points. The path is linearly reinterpolated\n        on a grid between 0 and 1 before computing the scores.\n\n    sample_fraction : float, optional, default=0.75\n        The fraction of samples to be used in each randomized design.\n        Should be between 0 and 1. If 1, all samples are used.\n\n    eps : float, optional\n        Smallest value of alpha / alpha_max considered\n\n    n_jobs : int or None, optional (default=None)\n        Number of CPUs to use during the resampling.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : boolean or integer, optional\n        Sets the verbosity amount\n\n    Returns\n    -------\n    alphas_grid : array, shape ~ [n_grid]\n        The grid points between 0 and 1: alpha/alpha_max\n\n    scores_path : array, shape = [n_features, n_grid]\n        The scores for each feature along the path.\n    ',
      inputs: [
        {
          name: 'X',
          default_value: null,
          param_type: ['array'],
          expected_shape: '[n_samples, n_features]',
          docstring:
            'training data.  y : array-like, shape = [n_samples]     target values.  scaling : float, optional, default=0.5     The alpha parameter in the stability selection article used to     randomly scale the features. Should be between 0 and 1.  random_state : int, RandomState instance or None, optional, default=None     The generator used to randomize the design.  If int, random_state is     the seed used by the random number generator; If RandomState instance,     random_state is the random number generator; If None, the random number     generator is the RandomState instance used by `np.random`.  n_resampling : int, optional, default=200     Number of randomized models.  n_grid : int, optional, default=100     Number of grid points. The path is linearly reinterpolated     on a grid between 0 and 1 before computing the scores.  sample_fraction : float, optional, default=0.75     The fraction of samples to be used in each randomized design.     Should be between 0 and 1. If 1, all samples are used.  eps : float, optional     Smallest value of alpha / alpha_max considered  n_jobs : int or None, optional (default=None)     Number of CPUs to use during the resampling.     ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.     ``-1`` means using all processors. See :term:`Glossary <n_jobs>`     for more details.  verbose : boolean or integer, optional     Sets the verbosity amount',
          is_optional: false,
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
      ]
    },
    {
      name: 'logistic_regression_path',
      outputs: [
        {
          name: 'coefs',
          returned: true,
          param_type: ['array'],
          docstring:
            "List of coefficients for the Logistic Regression model. If fit_intercept is set to True then the second dimension will be n_features + 1, where the last item represents the intercept. For ``multiclass='multinomial'``, the shape is (n_classes, n_cs, n_features) or (n_classes, n_cs, n_features + 1)."
        },
        {
          name: 'Cs',
          returned: true,
          param_type: ['array'],
          docstring: 'Grid of Cs used for cross-validation.'
        },
        {
          name: 'n_iter',
          returned: true,
          param_type: ['array'],
          docstring: 'Actual number of iteration for each Cs.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        "Compute a Logistic Regression model for a list of regularization\n    parameters.\n\n    This is an implementation that uses the result of the previous model\n    to speed up computations along the set of solutions, making it faster\n    than sequentially calling LogisticRegression for the different parameters.\n    Note that there will be no speedup with liblinear solver, since it does\n    not handle warm-starting.\n\n    Read more in the :ref:`User Guide <logistic_regression>`.\n\n    Parameters\n    ----------\n    X : array-like or sparse matrix, shape (n_samples, n_features)\n        Input data.\n\n    y : array-like, shape (n_samples,) or (n_samples, n_targets)\n        Input data, target values.\n\n    pos_class : int, None\n        The class with respect to which we perform a one-vs-all fit.\n        If None, then it is assumed that the given problem is binary.\n\n    Cs : int | array-like, shape (n_cs,)\n        List of values for the regularization parameter or integer specifying\n        the number of regularization parameters that should be used. In this\n        case, the parameters will be chosen in a logarithmic scale between\n        1e-4 and 1e4.\n\n    fit_intercept : bool\n        Whether to fit an intercept for the model. In this case the shape of\n        the returned array is (n_cs, n_features + 1).\n\n    max_iter : int\n        Maximum number of iterations for the solver.\n\n    tol : float\n        Stopping criterion. For the newton-cg and lbfgs solvers, the iteration\n        will stop when ``max{|g_i | i = 1, ..., n} <= tol``\n        where ``g_i`` is the i-th component of the gradient.\n\n    verbose : int\n        For the liblinear and lbfgs solvers set verbose to any positive\n        number for verbosity.\n\n    solver : {'lbfgs', 'newton-cg', 'liblinear', 'sag', 'saga'}\n        Numerical solver to use.\n\n    coef : array-like, shape (n_features,), default None\n        Initialization value for coefficients of logistic regression.\n        Useless for liblinear solver.\n\n    class_weight : dict or 'balanced', optional\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one.\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``.\n\n        Note that these weights will be multiplied with sample_weight (passed\n        through the fit method) if sample_weight is specified.\n\n    dual : bool\n        Dual or primal formulation. Dual formulation is only implemented for\n        l2 penalty with liblinear solver. Prefer dual=False when\n        n_samples > n_features.\n\n    penalty : str, 'l1' or 'l2'\n        Used to specify the norm used in the penalization. The 'newton-cg',\n        'sag' and 'lbfgs' solvers support only l2 penalties.\n\n    intercept_scaling : float, default 1.\n        Useful only when the solver 'liblinear' is used\n        and self.fit_intercept is set to True. In this case, x becomes\n        [x, self.intercept_scaling],\n        i.e. a \"synthetic\" feature with constant value equal to\n        intercept_scaling is appended to the instance vector.\n        The intercept becomes ``intercept_scaling * synthetic_feature_weight``.\n\n        Note! the synthetic feature weight is subject to l1/l2 regularization\n        as all other features.\n        To lessen the effect of regularization on synthetic feature weight\n        (and therefore on the intercept) intercept_scaling has to be increased.\n\n    multi_class : str, {'ovr', 'multinomial', 'auto'}, default: 'ovr'\n        If the option chosen is 'ovr', then a binary problem is fit for each\n        label. For 'multinomial' the loss minimised is the multinomial loss fit\n        across the entire probability distribution, *even when the data is\n        binary*. 'multinomial' is unavailable when solver='liblinear'.\n        'auto' selects 'ovr' if the data is binary, or if solver='liblinear',\n        and otherwise selects 'multinomial'.\n\n        .. versionadded:: 0.18\n           Stochastic Average Gradient descent solver for 'multinomial' case.\n        .. versionchanged:: 0.20\n            Default will change from 'ovr' to 'auto' in 0.22.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`. Used when ``solver`` == 'sag' or\n        'liblinear'.\n\n    check_input : bool, default True\n        If False, the input arrays X and y will not be checked.\n\n    max_squared_sum : float, default None\n        Maximum squared sum of X over samples. Used only in SAG solver.\n        If None, it will be computed, going through all the samples.\n        The value should be precomputed to speed up cross validation.\n\n    sample_weight : array-like, shape(n_samples,) optional\n        Array of weights that are assigned to individual samples.\n        If not provided, then each sample is given unit weight.\n\n    Returns\n    -------\n    coefs : ndarray, shape (n_cs, n_features) or (n_cs, n_features + 1)\n        List of coefficients for the Logistic Regression model. If\n        fit_intercept is set to True then the second dimension will be\n        n_features + 1, where the last item represents the intercept. For\n        ``multiclass='multinomial'``, the shape is (n_classes, n_cs,\n        n_features) or (n_classes, n_cs, n_features + 1).\n\n    Cs : ndarray\n        Grid of Cs used for cross-validation.\n\n    n_iter : array, shape (n_cs,)\n        Actual number of iteration for each Cs.\n\n    Notes\n    -----\n    You might get slightly different results with the solver liblinear than\n    with the others since this uses LIBLINEAR which penalizes the intercept.\n\n    .. versionchanged:: 0.19\n        The \"copy\" parameter was removed.\n    ",
      inputs: [
        {
          name: 'X',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          docstring: 'Input data.',
          is_optional: false,
          options: null
        },
        {
          name: 'y',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_samples,) or (n_samples, n_targets)',
          docstring: 'Input data, target values.',
          is_optional: false,
          options: null
        },
        {
          name: 'pos_class',
          default_value: null,
          param_type: ['int', null],
          expected_shape: null,
          docstring:
            'The class with respect to which we perform a one-vs-all fit. If None, then it is assumed that the given problem is binary.',
          is_optional: false,
          options: null
        },
        {
          name: 'Cs',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array', 'int'],
          expected_shape: '(n_cs,)',
          docstring:
            'List of values for the regularization parameter or integer specifying the number of regularization parameters that should be used. In this case, the parameters will be chosen in a logarithmic scale between 1e-4 and 1e4.',
          is_optional: false,
          options: ['int ', ' array-like, shape (n_cs,)']
        },
        {
          name: 'fit_intercept',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether to fit an intercept for the model. In this case the shape of the returned array is (n_cs, n_features + 1).',
          is_optional: false,
          options: null
        },
        {
          name: 'max_iter',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring: 'Maximum number of iterations for the solver.',
          is_optional: false,
          options: null
        },
        {
          name: 'tol',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Stopping criterion. For the newton-cg and lbfgs solvers, the iteration will stop when ``max{|g_i | i = 1, ..., n} <= tol`` where ``g_i`` is the i-th component of the gradient.',
          is_optional: false,
          options: null
        },
        {
          name: 'verbose',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring:
            'For the liblinear and lbfgs solvers set verbose to any positive number for verbosity.',
          is_optional: false,
          options: null
        },
        {
          name: 'solver',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring: 'Numerical solver to use.',
          is_optional: false,
          options: ['lbfgs', " 'newton-cg", " 'liblinear", " 'sag", " 'saga"]
        },
        {
          name: 'coef',
          default_value: 'None',
          param_type: ['array', null],
          expected_shape: '(n_features,), default None',
          docstring:
            'Initialization value for coefficients of logistic regression. Useless for liblinear solver.',
          is_optional: true,
          options: null
        },
        {
          name: 'class_weight',
          default_value: null,
          param_type: ['dict'],
          expected_shape: null,
          docstring:
            'Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``.  Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.',
          is_optional: true,
          options: null
        },
        {
          name: 'dual',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=False when n_samples > n_features.',
          is_optional: false,
          options: null
        },
        {
          name: 'penalty',
          default_value: null,
          param_type: ['str'],
          expected_shape: null,
          docstring:
            "Used to specify the norm used in the penalization. The 'newton-cg', 'sag' and 'lbfgs' solvers support only l2 penalties.",
          is_optional: false,
          options: null
        },
        {
          name: 'intercept_scaling',
          default_value: '1.',
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Useful only when the solver \'liblinear\' is used and self.fit_intercept is set to True. In this case, x becomes [x, self.intercept_scaling], i.e. a "synthetic" feature with constant value equal to intercept_scaling is appended to the instance vector. The intercept becomes ``intercept_scaling * synthetic_feature_weight``.  Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.',
          is_optional: true,
          options: null
        },
        {
          name: 'multi_class',
          default_value: 'ovr',
          param_type: ['LIST_VALID_OPTIONS', 'str'],
          expected_shape: null,
          docstring:
            "If the option chosen is 'ovr', then a binary problem is fit for each label. For 'multinomial' the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. 'multinomial' is unavailable when solver='liblinear'. 'auto' selects 'ovr' if the data is binary, or if solver='liblinear', and otherwise selects 'multinomial'.  .. versionadded:: 0.18    Stochastic Average Gradient descent solver for 'multinomial' case. .. versionchanged:: 0.20     Default will change from 'ovr' to 'auto' in 0.22.",
          is_optional: true,
          options: [
            'str',
            " {'ovr",
            " 'multinomial",
            " 'auto'}",
            " default: 'ovr"
          ]
        },
        {
          name: 'random_state',
          default_value: 'None',
          param_type: ['int', null],
          expected_shape: null,
          docstring:
            "The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``solver`` == 'sag' or 'liblinear'.",
          is_optional: true,
          options: null
        },
        {
          name: 'check_input',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'If False, the input arrays X and y will not be checked.',
          is_optional: true,
          options: null
        },
        {
          name: 'max_squared_sum',
          default_value: 'None',
          param_type: ['float', null],
          expected_shape: null,
          docstring:
            'Maximum squared sum of X over samples. Used only in SAG solver. If None, it will be computed, going through all the samples. The value should be precomputed to speed up cross validation.',
          is_optional: true,
          options: null
        },
        {
          name: 'sample_weight',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_samples,) optional',
          docstring:
            'Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.',
          is_optional: true,
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
      ]
    },
    {
      name: 'orthogonal_mp',
      outputs: [
        {
          name: 'coef',
          returned: true,
          param_type: ['array'],
          docstring:
            'Coefficients of the OMP solution. If `return_path=True`, this contains the whole coefficient path. In this case its shape is (n_features, n_features) or (n_features, n_targets, n_features) and iterating over the last axis yields coefficients in increasing order of active features.'
        },
        {
          name: 'n_iters',
          returned: true,
          param_type: ['array', 'int'],
          docstring:
            'Number of active features across every target. Returned only if `return_n_iter` is set to True.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        "Orthogonal Matching Pursuit (OMP)\n\n    Solves n_targets Orthogonal Matching Pursuit problems.\n    An instance of the problem has the form:\n\n    When parametrized by the number of non-zero coefficients using\n    `n_nonzero_coefs`:\n    argmin ||y - X\\gamma||^2 subject to ||\\gamma||_0 <= n_{nonzero coefs}\n\n    When parametrized by error using the parameter `tol`:\n    argmin ||\\gamma||_0 subject to ||y - X\\gamma||^2 <= tol\n\n    Read more in the :ref:`User Guide <omp>`.\n\n    Parameters\n    ----------\n    X : array, shape (n_samples, n_features)\n        Input data. Columns are assumed to have unit norm.\n\n    y : array, shape (n_samples,) or (n_samples, n_targets)\n        Input targets\n\n    n_nonzero_coefs : int\n        Desired number of non-zero entries in the solution. If None (by\n        default) this value is set to 10% of n_features.\n\n    tol : float\n        Maximum norm of the residual. If not None, overrides n_nonzero_coefs.\n\n    precompute : {True, False, 'auto'},\n        Whether to perform precomputations. Improves performance when n_targets\n        or n_samples is very large.\n\n    copy_X : bool, optional\n        Whether the design matrix X must be copied by the algorithm. A false\n        value is only helpful if X is already Fortran-ordered, otherwise a\n        copy is made anyway.\n\n    return_path : bool, optional. Default: False\n        Whether to return every value of the nonzero coefficients along the\n        forward path. Useful for cross-validation.\n\n    return_n_iter : bool, optional default False\n        Whether or not to return the number of iterations.\n\n    Returns\n    -------\n    coef : array, shape (n_features,) or (n_features, n_targets)\n        Coefficients of the OMP solution. If `return_path=True`, this contains\n        the whole coefficient path. In this case its shape is\n        (n_features, n_features) or (n_features, n_targets, n_features) and\n        iterating over the last axis yields coefficients in increasing order\n        of active features.\n\n    n_iters : array-like or int\n        Number of active features across every target. Returned only if\n        `return_n_iter` is set to True.\n\n    See also\n    --------\n    OrthogonalMatchingPursuit\n    orthogonal_mp_gram\n    lars_path\n    decomposition.sparse_encode\n\n    Notes\n    -----\n    Orthogonal matching pursuit was introduced in S. Mallat, Z. Zhang,\n    Matching pursuits with time-frequency dictionaries, IEEE Transactions on\n    Signal Processing, Vol. 41, No. 12. (December 1993), pp. 3397-3415.\n    (http://blanche.polytechnique.fr/~mallat/papiers/MallatPursuit93.pdf)\n\n    This implementation is based on Rubinstein, R., Zibulevsky, M. and Elad,\n    M., Efficient Implementation of the K-SVD Algorithm using Batch Orthogonal\n    Matching Pursuit Technical Report - CS Technion, April 2008.\n    http://www.cs.technion.ac.il/~ronrubin/Publications/KSVD-OMP-v2.pdf\n\n    ",
      inputs: [
        {
          name: 'X',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          docstring: 'Input data. Columns are assumed to have unit norm.',
          is_optional: false,
          options: null
        },
        {
          name: 'y',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_samples,) or (n_samples, n_targets)',
          docstring: 'Input targets',
          is_optional: false,
          options: null
        },
        {
          name: 'n_nonzero_coefs',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring:
            'Desired number of non-zero entries in the solution. If None (by default) this value is set to 10% of n_features.',
          is_optional: false,
          options: null
        },
        {
          name: 'tol',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Maximum norm of the residual. If not None, overrides n_nonzero_coefs.',
          is_optional: false,
          options: null
        },
        {
          name: 'precompute',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            'Whether to perform precomputations. Improves performance when n_targets or n_samples is very large.',
          is_optional: false,
          options: ['True', ' False', " 'auto'}", '']
        },
        {
          name: 'copy_X',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether the design matrix X must be copied by the algorithm. A false value is only helpful if X is already Fortran-ordered, otherwise a copy is made anyway.',
          is_optional: true,
          options: null
        },
        {
          name: 'return_path',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether to return every value of the nonzero coefficients along the forward path. Useful for cross-validation.',
          is_optional: true,
          options: null
        },
        {
          name: 'return_n_iter',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'Whether or not to return the number of iterations.',
          is_optional: true,
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
      ]
    },
    {
      name: 'orthogonal_mp_gram',
      outputs: [
        {
          name: 'coef',
          returned: true,
          param_type: ['array'],
          docstring:
            'Coefficients of the OMP solution. If `return_path=True`, this contains the whole coefficient path. In this case its shape is (n_features, n_features) or (n_features, n_targets, n_features) and iterating over the last axis yields coefficients in increasing order of active features.'
        },
        {
          name: 'n_iters',
          returned: true,
          param_type: ['array', 'int'],
          docstring:
            'Number of active features across every target. Returned only if `return_n_iter` is set to True.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        'Gram Orthogonal Matching Pursuit (OMP)\n\n    Solves n_targets Orthogonal Matching Pursuit problems using only\n    the Gram matrix X.T * X and the product X.T * y.\n\n    Read more in the :ref:`User Guide <omp>`.\n\n    Parameters\n    ----------\n    Gram : array, shape (n_features, n_features)\n        Gram matrix of the input data: X.T * X\n\n    Xy : array, shape (n_features,) or (n_features, n_targets)\n        Input targets multiplied by X: X.T * y\n\n    n_nonzero_coefs : int\n        Desired number of non-zero entries in the solution. If None (by\n        default) this value is set to 10% of n_features.\n\n    tol : float\n        Maximum norm of the residual. If not None, overrides n_nonzero_coefs.\n\n    norms_squared : array-like, shape (n_targets,)\n        Squared L2 norms of the lines of y. Required if tol is not None.\n\n    copy_Gram : bool, optional\n        Whether the gram matrix must be copied by the algorithm. A false\n        value is only helpful if it is already Fortran-ordered, otherwise a\n        copy is made anyway.\n\n    copy_Xy : bool, optional\n        Whether the covariance vector Xy must be copied by the algorithm.\n        If False, it may be overwritten.\n\n    return_path : bool, optional. Default: False\n        Whether to return every value of the nonzero coefficients along the\n        forward path. Useful for cross-validation.\n\n    return_n_iter : bool, optional default False\n        Whether or not to return the number of iterations.\n\n    Returns\n    -------\n    coef : array, shape (n_features,) or (n_features, n_targets)\n        Coefficients of the OMP solution. If `return_path=True`, this contains\n        the whole coefficient path. In this case its shape is\n        (n_features, n_features) or (n_features, n_targets, n_features) and\n        iterating over the last axis yields coefficients in increasing order\n        of active features.\n\n    n_iters : array-like or int\n        Number of active features across every target. Returned only if\n        `return_n_iter` is set to True.\n\n    See also\n    --------\n    OrthogonalMatchingPursuit\n    orthogonal_mp\n    lars_path\n    decomposition.sparse_encode\n\n    Notes\n    -----\n    Orthogonal matching pursuit was introduced in G. Mallat, Z. Zhang,\n    Matching pursuits with time-frequency dictionaries, IEEE Transactions on\n    Signal Processing, Vol. 41, No. 12. (December 1993), pp. 3397-3415.\n    (http://blanche.polytechnique.fr/~mallat/papiers/MallatPursuit93.pdf)\n\n    This implementation is based on Rubinstein, R., Zibulevsky, M. and Elad,\n    M., Efficient Implementation of the K-SVD Algorithm using Batch Orthogonal\n    Matching Pursuit Technical Report - CS Technion, April 2008.\n    http://www.cs.technion.ac.il/~ronrubin/Publications/KSVD-OMP-v2.pdf\n\n    ',
      inputs: [
        {
          name: 'Gram',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_features, n_features)',
          docstring: 'Gram matrix of the input data: X.T * X',
          is_optional: false,
          options: null
        },
        {
          name: 'Xy',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_features,) or (n_features, n_targets)',
          docstring: 'Input targets multiplied by X: X.T * y',
          is_optional: false,
          options: null
        },
        {
          name: 'n_nonzero_coefs',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring:
            'Desired number of non-zero entries in the solution. If None (by default) this value is set to 10% of n_features.',
          is_optional: false,
          options: null
        },
        {
          name: 'tol',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Maximum norm of the residual. If not None, overrides n_nonzero_coefs.',
          is_optional: false,
          options: null
        },
        {
          name: 'norms_squared',
          default_value: null,
          param_type: ['array'],
          expected_shape: '(n_targets,)',
          docstring:
            'Squared L2 norms of the lines of y. Required if tol is not None.',
          is_optional: false,
          options: null
        },
        {
          name: 'copy_Gram',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether the gram matrix must be copied by the algorithm. A false value is only helpful if it is already Fortran-ordered, otherwise a copy is made anyway.',
          is_optional: true,
          options: null
        },
        {
          name: 'copy_Xy',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether the covariance vector Xy must be copied by the algorithm. If False, it may be overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'return_path',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether to return every value of the nonzero coefficients along the forward path. Useful for cross-validation.',
          is_optional: true,
          options: null
        },
        {
          name: 'return_n_iter',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'Whether or not to return the number of iterations.',
          is_optional: true,
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
      ]
    },
    {
      name: 'ridge_regression',
      outputs: [
        {
          name: 'coef',
          returned: true,
          param_type: ['array'],
          docstring: 'Weight vector(s).'
        },
        {
          name: 'n_iter',
          returned: true,
          param_type: ['int'],
          docstring:
            'The actual number of iteration performed by the solver. Only returned if `return_n_iter` is True.'
        },
        {
          name: 'intercept',
          returned: true,
          param_type: ['array', 'float'],
          docstring:
            'The intercept of the model. Only returned if `return_intercept` is True and if X is a scipy sparse array.'
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ],
      docstring:
        "Solve the ridge equation by the method of normal equations.\n\n    Read more in the :ref:`User Guide <ridge_regression>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix, LinearOperator},\n        shape = [n_samples, n_features]\n        Training data\n\n    y : array-like, shape = [n_samples] or [n_samples, n_targets]\n        Target values\n\n    alpha : {float, array-like},\n        shape = [n_targets] if array-like\n        Regularization strength; must be a positive float. Regularization\n        improves the conditioning of the problem and reduces the variance of\n        the estimates. Larger values specify stronger regularization.\n        Alpha corresponds to ``C^-1`` in other linear models such as\n        LogisticRegression or LinearSVC. If an array is passed, penalties are\n        assumed to be specific to the targets. Hence they must correspond in\n        number.\n\n    sample_weight : float or numpy array of shape [n_samples]\n        Individual weights for each sample. If sample_weight is not None and\n        solver='auto', the solver will be set to 'cholesky'.\n\n        .. versionadded:: 0.17\n\n    solver : {'auto', 'svd', 'cholesky', 'lsqr', 'sparse_cg', 'sag', 'saga'}\n        Solver to use in the computational routines:\n\n        - 'auto' chooses the solver automatically based on the type of data.\n\n        - 'svd' uses a Singular Value Decomposition of X to compute the Ridge\n          coefficients. More stable for singular matrices than\n          'cholesky'.\n\n        - 'cholesky' uses the standard scipy.linalg.solve function to\n          obtain a closed-form solution via a Cholesky decomposition of\n          dot(X.T, X)\n\n        - 'sparse_cg' uses the conjugate gradient solver as found in\n          scipy.sparse.linalg.cg. As an iterative algorithm, this solver is\n          more appropriate than 'cholesky' for large-scale data\n          (possibility to set `tol` and `max_iter`).\n\n        - 'lsqr' uses the dedicated regularized least-squares routine\n          scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative\n          procedure.\n\n        - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses\n          its improved, unbiased version named SAGA. Both methods also use an\n          iterative procedure, and are often faster than other solvers when\n          both n_samples and n_features are large. Note that 'sag' and\n          'saga' fast convergence is only guaranteed on features with\n          approximately the same scale. You can preprocess the data with a\n          scaler from sklearn.preprocessing.\n\n\n        All last five solvers support both dense and sparse data. However, only\n        'sag' and 'saga' supports sparse input when`fit_intercept` is True.\n\n        .. versionadded:: 0.17\n           Stochastic Average Gradient descent solver.\n        .. versionadded:: 0.19\n           SAGA solver.\n\n    max_iter : int, optional\n        Maximum number of iterations for conjugate gradient solver.\n        For the 'sparse_cg' and 'lsqr' solvers, the default value is determined\n        by scipy.sparse.linalg. For 'sag' and saga solver, the default value is\n        1000.\n\n    tol : float\n        Precision of the solution.\n\n    verbose : int\n        Verbosity level. Setting verbose > 0 will display additional\n        information depending on the solver used.\n\n    random_state : int, RandomState instance or None, optional, default None\n        The seed of the pseudo random number generator to use when shuffling\n        the data.  If int, random_state is the seed used by the random number\n        generator; If RandomState instance, random_state is the random number\n        generator; If None, the random number generator is the RandomState\n        instance used by `np.random`. Used when ``solver`` == 'sag'.\n\n    return_n_iter : boolean, default False\n        If True, the method also returns `n_iter`, the actual number of\n        iteration performed by the solver.\n\n        .. versionadded:: 0.17\n\n    return_intercept : boolean, default False\n        If True and if X is sparse, the method also returns the intercept,\n        and the solver is automatically changed to 'sag'. This is only a\n        temporary fix for fitting the intercept with sparse data. For dense\n        data, use sklearn.linear_model._preprocess_data before your regression.\n\n        .. versionadded:: 0.17\n\n    Returns\n    -------\n    coef : array, shape = [n_features] or [n_targets, n_features]\n        Weight vector(s).\n\n    n_iter : int, optional\n        The actual number of iteration performed by the solver.\n        Only returned if `return_n_iter` is True.\n\n    intercept : float or array, shape = [n_targets]\n        The intercept of the model. Only returned if `return_intercept`\n        is True and if X is a scipy sparse array.\n\n    Notes\n    -----\n    This function won't compute the intercept.\n    ",
      inputs: [
        {
          name: 'X',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          docstring: 'shape = [n_samples, n_features] Training data',
          is_optional: false,
          options: ['array-like', ' sparse matrix', ' LinearOperator}', '']
        },
        {
          name: 'y',
          default_value: null,
          param_type: ['array'],
          expected_shape: '[n_samples] or [n_samples, n_targets]',
          docstring: 'Target values',
          is_optional: false,
          options: null
        },
        {
          name: 'alpha',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          expected_shape: null,
          docstring:
            'shape = [n_targets] if array-like Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegression or LinearSVC. If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.',
          is_optional: false,
          options: ['float', ' array-like}', '']
        },
        {
          name: 'sample_weight',
          default_value: null,
          param_type: ['array', 'float'],
          expected_shape: '[n_samples]',
          docstring:
            "Individual weights for each sample. If sample_weight is not None and solver='auto', the solver will be set to 'cholesky'.  .. versionadded:: 0.17",
          is_optional: false,
          options: null
        },
        {
          name: 'solver',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            "Solver to use in the computational routines:  - 'auto' chooses the solver automatically based on the type of data.  - 'svd' uses a Singular Value Decomposition of X to compute the Ridge   coefficients. More stable for singular matrices than   'cholesky'.  - 'cholesky' uses the standard scipy.linalg.solve function to   obtain a closed-form solution via a Cholesky decomposition of   dot(X.T, X)  - 'sparse_cg' uses the conjugate gradient solver as found in   scipy.sparse.linalg.cg. As an iterative algorithm, this solver is   more appropriate than 'cholesky' for large-scale data   (possibility to set `tol` and `max_iter`).  - 'lsqr' uses the dedicated regularized least-squares routine   scipy.sparse.linalg.lsqr. It is the fastest and uses an iterative   procedure.  - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses   its improved, unbiased version named SAGA. Both methods also use an   iterative procedure, and are often faster than other solvers when   both n_samples and n_features are large. Note that 'sag' and   'saga' fast convergence is only guaranteed on features with   approximately the same scale. You can preprocess the data with a   scaler from sklearn.preprocessing.  All last five solvers support both dense and sparse data. However, only 'sag' and 'saga' supports sparse input when`fit_intercept` is True.  .. versionadded:: 0.17    Stochastic Average Gradient descent solver. .. versionadded:: 0.19    SAGA solver.",
          is_optional: false,
          options: [
            'auto',
            " 'svd",
            " 'cholesky",
            " 'lsqr",
            " 'sparse_cg",
            " 'sag",
            " 'saga"
          ]
        },
        {
          name: 'max_iter',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring:
            "Maximum number of iterations for conjugate gradient solver. For the 'sparse_cg' and 'lsqr' solvers, the default value is determined by scipy.sparse.linalg. For 'sag' and saga solver, the default value is 1000.",
          is_optional: true,
          options: null
        },
        {
          name: 'tol',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring: 'Precision of the solution.',
          is_optional: false,
          options: null
        },
        {
          name: 'verbose',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring:
            'Verbosity level. Setting verbose > 0 will display additional information depending on the solver used.',
          is_optional: false,
          options: null
        },
        {
          name: 'random_state',
          default_value: 'None',
          param_type: ['int', null],
          expected_shape: null,
          docstring:
            "The seed of the pseudo random number generator to use when shuffling the data.  If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by `np.random`. Used when ``solver`` == 'sag'.",
          is_optional: true,
          options: null
        },
        {
          name: 'return_n_iter',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If True, the method also returns `n_iter`, the actual number of iteration performed by the solver.  .. versionadded:: 0.17',
          is_optional: true,
          options: null
        },
        {
          name: 'return_intercept',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            "If True and if X is sparse, the method also returns the intercept, and the solver is automatically changed to 'sag'. This is only a temporary fix for fitting the intercept with sparse data. For dense data, use sklearn.linear_model._preprocess_data before your regression.  .. versionadded:: 0.17",
          is_optional: true,
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
      ]
    }
  ],
  nodes: [
    {
      name: 'ElasticNet',
      outputs: [
        {
          name: 'coef_',
          returned: false,
          param_type: ['array'],
          docstring: 'parameter vector (w in the cost function formula)'
        },
        {
          name: 'sparse_coef_',
          returned: false,
          param_type: ['scipy.sparse.matrix'],
          docstring:
            '``sparse_coef_`` is a readonly property derived from ``coef_``'
        },
        {
          name: 'intercept_',
          returned: false,
          param_type: ['array', 'float'],
          docstring: 'independent term in decision function.'
        },
        {
          name: 'n_iter_',
          returned: false,
          param_type: ['array'],
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance.'
        }
      ],
      docstring:
        'Linear regression with combined L1 and L2 priors as regularizer.\n\n    Minimizes the objective function::\n\n            1 / (2 * n_samples) * ||y - Xw||^2_2\n            + alpha * l1_ratio * ||w||_1\n            + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2\n\n    If you are interested in controlling the L1 and L2 penalty\n    separately, keep in mind that this is equivalent to::\n\n            a * L1 + b * L2\n\n    where::\n\n            alpha = a + b and l1_ratio = a / (a + b)\n\n    The parameter l1_ratio corresponds to alpha in the glmnet R package while\n    alpha corresponds to the lambda parameter in glmnet. Specifically, l1_ratio\n    = 1 is the lasso penalty. Currently, l1_ratio <= 0.01 is not reliable,\n    unless you supply your own sequence of alpha.',
      inputs: [
        {
          name: 'alpha',
          default_value: '1.0',
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Constant that multiplies the penalty terms. Defaults to 1.0. See the notes for the exact mathematical meaning of this parameter.``alpha = 0`` is equivalent to an ordinary least square, solved by the :class:`LinearRegression` object. For numerical reasons, using ``alpha = 0`` with the ``Lasso`` object is not advised. Given this, you should use the :class:`LinearRegression` object.',
          is_optional: true,
          options: null
        },
        {
          name: 'l1_ratio',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'The ElasticNet mixing parameter, with ``0 <= l1_ratio <= 1``. For ``l1_ratio = 0`` the penalty is an L2 penalty. ``For l1_ratio = 1`` it is an L1 penalty.  For ``0 < l1_ratio < 1``, the penalty is a combination of L1 and L2.',
          is_optional: false,
          options: null
        },
        {
          name: 'fit_intercept',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether the intercept should be estimated or not. If ``False``, the data is assumed to be already centered.',
          is_optional: false,
          options: null
        },
        {
          name: 'normalize',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          is_optional: true,
          options: null
        },
        {
          name: 'precompute',
          default_value: null,
          param_type: ['bool', 'array'],
          expected_shape: null,
          docstring:
            'Whether to use a precomputed Gram matrix to speed up calculations. The Gram matrix can also be passed as argument. For sparse input this option is always ``True`` to preserve sparsity.',
          is_optional: false,
          options: null
        },
        {
          name: 'max_iter',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring: 'The maximum number of iterations',
          is_optional: true,
          options: null
        },
        {
          name: 'copy_X',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'tol',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          is_optional: true,
          options: null
        },
        {
          name: 'warm_start',
          default_value: false,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'When set to ``True``, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.',
          is_optional: true,
          options: null
        },
        {
          name: 'positive',
          default_value: false,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'When set to ``True``, forces the coefficients to be positive.',
          is_optional: true,
          options: null
        },
        {
          name: 'selection',
          default_value: 'cyclic',
          param_type: ['str'],
          expected_shape: null,
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          is_optional: true,
          options: ['random', 'cyclic']
        }
      ],
      node_functions: [
        {
          name: '__init__',
          outputs: [],
          docstring: 'None',
          inputs: []
        },
        {
          name: '_decision_function',
          outputs: [
            {
              name: 'T',
              returned: true,
              param_type: ['array'],
              docstring: 'The predicted decision function'
            }
          ],
          docstring:
            'Decision function of the linear model\n\n        Parameters\n        ----------\n        X : numpy array or scipy.sparse matrix of shape (n_samples, n_features)\n\n        Returns\n        -------\n        T : array, shape (n_samples,)\n            The predicted decision function\n        ',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: '',
              is_optional: false,
              options: null
            }
          ]
        },
        {
          name: '_get_param_names',
          outputs: [],
          docstring: 'Get parameter names for the estimator',
          inputs: []
        },
        {
          name: '_preprocess_data',
          outputs: [],
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: []
        },
        {
          name: '_set_intercept',
          outputs: [],
          docstring: 'Set the intercept_\n        ',
          inputs: []
        },
        {
          name: 'fit',
          outputs: [
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Fit model with coordinate descent.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: null,
              docstring: 'Data',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              docstring: "Target. Will be cast to X's dtype if necessary",
              is_optional: false,
              options: null
            },
            {
              name: 'check_input',
              default_value: 'True',
              param_type: ['bool'],
              expected_shape: null,
              docstring:
                "Allow to bypass several input checking. Don't use this parameter unless you know what you do.",
              is_optional: true,
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
          ]
        },
        {
          name: 'predict',
          outputs: [
            {
              name: 'C',
              returned: true,
              param_type: ['array'],
              docstring: 'Returns predicted values.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Predict using the linear model',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Samples.',
              is_optional: false,
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
          ]
        },
        {
          name: 'score',
          outputs: [
            {
              name: 'score',
              returned: true,
              param_type: ['float'],
              docstring: 'R^2 of self.predict(X) wrt. y.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              docstring: 'True values for X.',
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
              docstring: 'Sample weights.',
              is_optional: true,
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
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'Lasso',
      outputs: [
        {
          name: 'coef_',
          returned: false,
          param_type: ['array'],
          docstring: 'parameter vector (w in the cost function formula)'
        },
        {
          name: 'sparse_coef_',
          returned: false,
          param_type: ['scipy.sparse.matrix'],
          docstring:
            '``sparse_coef_`` is a readonly property derived from ``coef_``'
        },
        {
          name: 'intercept_',
          returned: false,
          param_type: ['array', 'float'],
          docstring: 'independent term in decision function.'
        },
        {
          name: 'n_iter_',
          returned: false,
          param_type: ['array', 'int'],
          docstring:
            'number of iterations run by the coordinate descent solver to reach the specified tolerance.'
        }
      ],
      docstring:
        'Linear Model trained with L1 prior as regularizer (aka the Lasso)\n\n    The optimization objective for Lasso is::\n\n        (1 / (2 * n_samples)) * ||y - Xw||^2_2 + alpha * ||w||_1\n\n    Technically the Lasso model is optimizing the same objective function as\n    the Elastic Net with ``l1_ratio=1.0`` (no L2 penalty).',
      inputs: [
        {
          name: 'alpha',
          default_value: '1.0',
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Constant that multiplies the L1 term. Defaults to 1.0. ``alpha = 0`` is equivalent to an ordinary least square, solved by the :class:`LinearRegression` object. For numerical reasons, using ``alpha = 0`` with the ``Lasso`` object is not advised. Given this, you should use the :class:`LinearRegression` object.',
          is_optional: true,
          options: null
        },
        {
          name: 'fit_intercept',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether to calculate the intercept for this model. If set to False, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          is_optional: true,
          options: null
        },
        {
          name: 'normalize',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          is_optional: true,
          options: null
        },
        {
          name: 'precompute',
          default_value: 'False',
          param_type: ['bool', 'array'],
          expected_shape: null,
          docstring:
            "Whether to use a precomputed Gram matrix to speed up calculations. If set to ``'auto'`` let us decide. The Gram matrix can also be passed as argument. For sparse input this option is always ``True`` to preserve sparsity.",
          is_optional: true,
          options: null
        },
        {
          name: 'copy_X',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'If ``True``, X will be copied; else, it may be overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'max_iter',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring: 'The maximum number of iterations',
          is_optional: true,
          options: null
        },
        {
          name: 'tol',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol``.',
          is_optional: true,
          options: null
        },
        {
          name: 'warm_start',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.',
          is_optional: true,
          options: null
        },
        {
          name: 'positive',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'When set to ``True``, forces the coefficients to be positive.',
          is_optional: true,
          options: null
        },
        {
          name: 'selection',
          default_value: 'cyclic',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            "If set to 'random', a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to 'random') often leads to significantly faster convergence especially when tol is higher than 1e-4.",
          is_optional: true,
          options: ['random', 'cyclic']
        }
      ],
      node_functions: [
        {
          name: '__init__',
          outputs: [],
          docstring: 'None',
          inputs: []
        },
        {
          name: '_decision_function',
          outputs: [
            {
              name: 'T',
              returned: true,
              param_type: ['array'],
              docstring: 'The predicted decision function'
            }
          ],
          docstring:
            'Decision function of the linear model\n\n        Parameters\n        ----------\n        X : numpy array or scipy.sparse matrix of shape (n_samples, n_features)\n\n        Returns\n        -------\n        T : array, shape (n_samples,)\n            The predicted decision function\n        ',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: '',
              is_optional: false,
              options: null
            }
          ]
        },
        {
          name: '_get_param_names',
          outputs: [],
          docstring: 'Get parameter names for the estimator',
          inputs: []
        },
        {
          name: '_preprocess_data',
          outputs: [],
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: []
        },
        {
          name: '_set_intercept',
          outputs: [],
          docstring: 'Set the intercept_\n        ',
          inputs: []
        },
        {
          name: 'fit',
          outputs: [
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Fit model with coordinate descent.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Data',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples,) or (n_samples, n_targets)',
              docstring: "Target. Will be cast to X's dtype if necessary",
              is_optional: false,
              options: null
            },
            {
              name: 'check_input',
              default_value: 'True',
              param_type: ['bool'],
              expected_shape: null,
              docstring:
                "Allow to bypass several input checking. Don't use this parameter unless you know what you do.",
              is_optional: true,
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
          ]
        },
        {
          name: 'predict',
          outputs: [
            {
              name: 'C',
              returned: true,
              param_type: ['array'],
              docstring: 'Returns predicted values.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Predict using the linear model\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        C : array, shape (n_samples,)\n            Returns predicted values.\n        ',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Samples.',
              is_optional: false,
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
          ]
        },
        {
          name: 'score',
          outputs: [
            {
              name: 'score',
              returned: true,
              param_type: ['float'],
              docstring: 'R^2 of self.predict(X) wrt. y.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Test samples.',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              docstring: 'True values for X.',
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
              docstring: 'Sample weights.',
              is_optional: true,
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
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LinearRegression',
      outputs: [
        {
          name: 'coef_',
          returned: false,
          param_type: ['array'],
          docstring:
            'Estimated coefficients for the linear regression problem. If multiple targets are passed during the fit (y 2D), this is a 2D array of shape (n_targets, n_features), while if only one target is passed, this is a 1D array of length n_features.'
        },
        {
          name: 'intercept_',
          returned: false,
          param_type: ['array'],
          docstring: 'Independent term in the linear model.'
        }
      ],
      docstring: 'Ordinary least squares Linear Regression.',
      inputs: [
        {
          name: 'fit_intercept',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'whether to calculate the intercept for this model. If set to False, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          is_optional: true,
          options: null
        },
        {
          name: 'normalize',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          is_optional: true,
          options: null
        },
        {
          name: 'copy_X',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'n_jobs',
          default_value: 'None',
          param_type: ['int', null],
          expected_shape: null,
          docstring:
            'The number of jobs to use for the computation. This will only provide speedup for n_targets > 1 and sufficient large problems. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.',
          is_optional: true,
          options: null
        }
      ],
      node_functions: [
        {
          name: '__init__',
          outputs: [],
          docstring: 'None',
          inputs: []
        },
        {
          name: '_decision_function',
          outputs: [],
          docstring: 'None',
          inputs: []
        },
        {
          name: '_get_param_names',
          outputs: [],
          docstring: 'Get parameter names for the estimator',
          inputs: []
        },
        {
          name: '_preprocess_data',
          outputs: [],
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: []
        },
        {
          name: '_set_intercept',
          outputs: [],
          docstring: 'Set the intercept_\n        ',
          inputs: []
        },
        {
          name: 'fit',
          outputs: [
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Fit linear model',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Training data',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_targets)',
              docstring:
                "Target values. Will be cast to X's dtype if necessary",
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples]',
              docstring:
                'Individual weights for each sample  .. versionadded:: 0.17    parameter *sample_weight* support to LinearRegression.',
              is_optional: false,
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
          ]
        },
        {
          name: 'predict',
          outputs: [
            {
              name: 'C',
              returned: true,
              param_type: ['array'],
              docstring: 'Returns predicted values.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Predict using the linear model',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Samples.',
              is_optional: false,
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
          ]
        },
        {
          name: 'score',
          outputs: [
            {
              name: 'score',
              returned: true,
              param_type: ['float'],
              docstring: 'R^2 of self.predict(X) wrt. y.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring:
                'Test samples. For some estimators this may be a precomputed kernel matrix instead, shape = (n_samples, n_samples_fitted], where n_samples_fitted is the number of samples used in the fitting for the estimator.',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              docstring: 'True values for X.',
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
              docstring: 'Sample weights.',
              is_optional: true,
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
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'LogisticRegression',
      outputs: [
        {
          name: 'classes_',
          returned: false,
          param_type: ['array'],
          docstring: 'A list of class labels known to the classifier.'
        },
        {
          name: 'coef_',
          returned: false,
          param_type: ['array'],
          docstring:
            "Coefficient of the features in the decision function.  `coef_` is of shape (1, n_features) when the given problem is binary. In particular, when `multi_class='multinomial'`, `coef_` corresponds to outcome 1 (True) and `-coef_` corresponds to outcome 0 (False)."
        },
        {
          name: 'intercept_',
          returned: false,
          param_type: ['array'],
          docstring:
            "Intercept (a.k.a. bias) added to the decision function.  If `fit_intercept` is set to False, the intercept is set to zero. `intercept_` is of shape (1,) when the given problem is binary. In particular, when `multi_class='multinomial'`, `intercept_` corresponds to outcome 1 (True) and `-intercept_` corresponds to outcome 0 (False)."
        },
        {
          name: 'n_iter_',
          returned: false,
          param_type: ['array'],
          docstring:
            'Actual number of iterations for all classes. If binary or multinomial, it returns only 1 element. For liblinear solver, only the maximum number of iteration across all classes is given.  .. versionchanged:: 0.20      In SciPy <= 1.0.0 the number of lbfgs iterations may exceed     ``max_iter``. ``n_iter_`` will now report at most ``max_iter``.'
        }
      ],
      docstring:
        "Logistic Regression (aka logit, MaxEnt) classifier.\n\n    In the multiclass case, the training algorithm uses the one-vs-rest (OvR)\n    scheme if the 'multi_class' option is set to 'ovr', and uses the cross-\n    entropy loss if the 'multi_class' option is set to 'multinomial'.\n    (Currently the 'multinomial' option is supported only by the 'lbfgs',\n    'sag' and 'newton-cg' solvers.)\n\n    This class implements regularized logistic regression using the\n    'liblinear' library, 'newton-cg', 'sag' and 'lbfgs' solvers. It can handle\n    both dense and sparse input. Use C-ordered arrays or CSR matrices\n    containing 64-bit floats for optimal performance; any other input format\n    will be converted (and copied).\n\n    The 'newton-cg', 'sag', and 'lbfgs' solvers support only L2 regularization\n    with primal formulation. The 'liblinear' solver supports both L1 and L2\n    regularization, with a dual formulation only for the L2 penalty.",
      inputs: [
        {
          name: 'penalty',
          default_value: 'l2',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            "Used to specify the norm used in the penalization. The 'newton-cg', 'sag' and 'lbfgs' solvers support only l2 penalties.  .. versionadded:: 0.19    l1 penalty with SAGA solver (allowing 'multinomial' + L1)",
          is_optional: true,
          options: ['l1', 'l2', 'elasticnet', 'none']
        },
        {
          name: 'dual',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=False when n_samples > n_features.',
          is_optional: true,
          options: null
        },
        {
          name: 'tol',
          default_value: '1e-4',
          param_type: ['float'],
          expected_shape: null,
          docstring: 'Tolerance for stopping criteria.',
          is_optional: true,
          options: null
        },
        {
          name: 'C',
          default_value: '1.0',
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Inverse of regularization strength; must be a positive float. Like in support vector machines, smaller values specify stronger regularization.',
          is_optional: true,
          options: null
        },
        {
          name: 'fit_intercept',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.',
          is_optional: true,
          options: null
        },
        {
          name: 'intercept_scaling',
          default_value: '1.',
          param_type: ['float'],
          expected_shape: null,
          docstring:
            'Useful only when the solver \'liblinear\' is used and self.fit_intercept is set to True. In this case, x becomes [x, self.intercept_scaling], i.e. a "synthetic" feature with constant value equal to intercept_scaling is appended to the instance vector. The intercept becomes ``intercept_scaling * synthetic_feature_weight``.  Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.',
          is_optional: true,
          options: null
        },
        {
          name: 'class_weight',
          default_value: 'None',
          param_type: ['dict', 'str', null],
          expected_shape: null,
          docstring:
            'Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one.  The "balanced" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``.  Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.',
          is_optional: true,
          options: null
        },
        {
          name: 'solver',
          default_value: 'liblinear.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            "Algorithm to use in the optimization problem.  - For small datasets, 'liblinear' is a good choice, whereas 'sag' and   'saga' are faster for large ones. - For multiclass problems, only 'newton-cg', 'sag', 'saga' and 'lbfgs'   handle multinomial loss; 'liblinear' is limited to one-versus-rest   schemes. - 'newton-cg', 'lbfgs' and 'sag' only handle L2 penalty, whereas   'liblinear' and 'saga' handle L1 penalty.  Note that 'sag' and 'saga' fast convergence is only guaranteed on features with approximately the same scale. You can preprocess the data with a scaler from sklearn.preprocessing.",
          is_optional: true,
          options: ['newton-cg', 'lbfgs', 'liblinear', 'sag', "saga'}"]
        },
        {
          name: 'max_iter',
          default_value: '100',
          param_type: ['int'],
          expected_shape: null,
          docstring:
            'Useful only for the newton-cg, sag and lbfgs solvers. Maximum number of iterations taken for the solvers to converge.',
          is_optional: true,
          options: null
        },
        {
          name: 'multi_class',
          default_value: 'ovr',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            "If the option chosen is 'ovr', then a binary problem is fit for each label. For 'multinomial' the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. 'multinomial' is unavailable when solver='liblinear'. 'auto' selects 'ovr' if the data is binary, or if solver='liblinear', and otherwise selects 'multinomial'.",
          is_optional: true,
          options: ['ovr', 'multinomial', 'auto']
        },
        {
          name: 'verbose',
          default_value: '0',
          param_type: ['int'],
          expected_shape: null,
          docstring:
            'For the liblinear and lbfgs solvers set verbose to any positive number for verbosity.',
          is_optional: true,
          options: null
        },
        {
          name: 'warm_start',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. Useless for liblinear solver.',
          is_optional: true,
          options: null
        },
        {
          name: 'n_jobs',
          default_value: 'None',
          param_type: ['int', null],
          expected_shape: null,
          docstring:
            "Number of CPU cores used when parallelizing over classes if multi_class='ovr'\". This parameter is ignored when the ``solver`` is set to 'liblinear' regardless of whether 'multi_class' is specified or not. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
          is_optional: true,
          options: null
        }
      ],
      node_functions: [
        {
          name: '__init__',
          outputs: [],
          docstring: 'None',
          inputs: []
        },
        {
          name: '_get_param_names',
          outputs: [],
          docstring: 'Get parameter names for the estimator',
          inputs: []
        },
        {
          name: '_predict_proba_lr',
          outputs: [],
          docstring:
            'Probability estimation for OvR logistic regression.\n\n        Positive class probabilities are computed as\n        1. / (1. + np.exp(-self.decision_function(X)));\n        multiclass is handled by normalizing that over all classes.\n        ',
          inputs: []
        },
        {
          name: 'decision_function',
          outputs: [
            {
              name:
                'array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)',
              returned: true,
              param_type: [null],
              docstring:
                'Confidence scores per (sample, class) combination. In the binary case, confidence score for self.classes_[1] where >0 means this class would be predicted.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Predict confidence scores for samples.\n\n        The confidence score for a sample is the signed distance of that\n        sample to the hyperplane.\n\n        Parameters\n        ----------\n        X : array_like or sparse matrix, shape (n_samples, n_features)\n            Samples.\n\n        Returns\n        -------\n        array, shape=(n_samples,) if n_classes == 2 else (n_samples, n_classes)\n            Confidence scores per (sample, class) combination. In the binary\n            case, confidence score for self.classes_[1] where >0 means this\n            class would be predicted.\n        ',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Samples.',
              is_optional: false,
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
          ]
        },
        {
          name: 'fit',
          outputs: [
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Fit the model according to the given training data.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring:
                'Training vector, where n_samples is the number of samples and n_features is the number of features.',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples,)',
              docstring: 'Target vector relative to X.',
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples,) optional',
              docstring:
                'Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.',
              is_optional: true,
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
          ]
        },
        {
          name: 'predict',
          outputs: [
            {
              name: 'C',
              returned: true,
              param_type: ['array'],
              docstring: 'Predicted class label per sample.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Predict class labels for samples in X.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Samples.',
              is_optional: false,
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
          ]
        },
        {
          name: 'predict_log_proba',
          outputs: [
            {
              name: 'T',
              returned: true,
              param_type: ['array'],
              docstring:
                'Returns the log-probability of the sample for each class in the model, where classes are ordered as they are in ``classes_``.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Log of probability estimates.\n\n        The returned estimates for all classes are ordered by the\n        label of classes.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              docstring: '',
              is_optional: false,
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
          ]
        },
        {
          name: 'predict_proba',
          outputs: [
            {
              name: 'T',
              returned: true,
              param_type: ['array'],
              docstring:
                'Returns the probability of the sample for each class in the model, where classes are ordered as they are in ``classes_``.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Probability estimates.\n\n        The returned estimates for all classes are ordered by the\n        label of classes.\n\n        For a multi_class problem, if multi_class is set to be "multinomial"\n        the softmax function is used to find the predicted probability of\n        each class.\n        Else use a one-vs-rest approach, i.e calculate the probability\n        of each class assuming it to be positive using the logistic function.\n        and normalize these values across all the classes.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              docstring: '',
              is_optional: false,
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
          ]
        },
        {
          name: 'score',
          outputs: [
            {
              name: 'score',
              returned: true,
              param_type: ['float'],
              docstring: 'Mean accuracy of self.predict(X) wrt. y.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Returns the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Test samples.',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              docstring: 'True labels for X.',
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples]',
              docstring: 'Sample weights.',
              is_optional: true,
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
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'Ridge',
      outputs: [
        {
          name: 'coef_',
          returned: false,
          param_type: ['array'],
          docstring: 'Weight vector(s).'
        },
        {
          name: 'intercept_',
          returned: false,
          param_type: ['LIST_VALID_OPTIONS', 'array', 'float'],
          docstring:
            'Independent term in decision function. Set to 0.0 if ``fit_intercept = False``.'
        },
        {
          name: 'n_iter_',
          returned: false,
          param_type: ['array', null],
          docstring:
            'Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return None.  .. versionadded:: 0.17'
        }
      ],
      docstring:
        'Linear least squares with l2 regularization.\n\n    Minimizes the objective function::\n\n    ||y - Xw||^2_2 + alpha * ||w||^2_2\n\n    This model solves a regression model where the loss function is\n    the linear least squares function and regularization is given by\n    the l2-norm. Also known as Ridge Regression or Tikhonov regularization.\n    This estimator has built-in support for multi-variate regression\n    (i.e., when y is a 2d-array of shape [n_samples, n_targets]).',
      inputs: [
        {
          name: 'alpha',
          default_value: null,
          param_type: ['array', 'float'],
          expected_shape: '(n_targets)',
          docstring:
            'Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegression or LinearSVC. If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.',
          is_optional: false,
          options: null
        },
        {
          name: 'fit_intercept',
          default_value: null,
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).',
          is_optional: false,
          options: null
        },
        {
          name: 'normalize',
          default_value: 'False',
          param_type: ['bool'],
          expected_shape: null,
          docstring:
            'This parameter is ignored when ``fit_intercept`` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use :class:`sklearn.preprocessing.StandardScaler` before calling ``fit`` on an estimator with ``normalize=False``.',
          is_optional: true,
          options: null
        },
        {
          name: 'copy_X',
          default_value: 'True',
          param_type: ['bool'],
          expected_shape: null,
          docstring: 'If True, X will be copied; else, it may be overwritten.',
          is_optional: true,
          options: null
        },
        {
          name: 'max_iter',
          default_value: null,
          param_type: ['int'],
          expected_shape: null,
          docstring:
            "Maximum number of iterations for conjugate gradient solver. For 'sparse_cg' and 'lsqr' solvers, the default value is determined by scipy.sparse.linalg. For 'sag' solver, the default value is 1000.",
          is_optional: true,
          options: null
        },
        {
          name: 'tol',
          default_value: null,
          param_type: ['float'],
          expected_shape: null,
          docstring: 'Precision of the solution.',
          is_optional: false,
          options: null
        },
        {
          name: 'solver',
          default_value: null,
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          docstring:
            "Solver to use in the computational routines:  - 'auto' chooses the solver automatically based on the type of data.  - 'svd' uses a Singular Value Decomposition of X to compute the Ridge   coefficients. More stable for singular matrices than   'cholesky'.  - 'cholesky' uses the standard scipy.linalg.solve function to   obtain a closed-form solution.  - 'sparse_cg' uses a conjugate gradient solver. As an iterative algorithm, this solver is   more appropriate than 'cholesky' for large-scale data   (possibility to set `tol` and `max_iter`).  - 'lsqr' uses a dedicated regularized least-squares routine. It is the fastest and uses an iterative   procedure.  - 'sag' uses a Stochastic Average Gradient descent, and 'saga' uses   its improved, unbiased version named SAGA. Both methods also use an   iterative procedure, and are often faster than other solvers when   both n_samples and n_features are large. Note that 'sag' and   'saga' fast convergence is only guaranteed on features with   approximately the same scale. You can preprocess the data with a   scaler from sklearn.preprocessing.",
          is_optional: false,
          options: [
            'auto',
            'svd',
            'cholesky',
            'lsqr',
            'sparse_cg',
            'sag',
            'saga'
          ]
        }
      ],
      node_functions: [
        {
          name: '__init__',
          outputs: [],
          docstring: 'None',
          inputs: []
        },
        {
          name: '_decision_function',
          outputs: [],
          docstring: 'None',
          inputs: []
        },
        {
          name: '_get_param_names',
          outputs: [],
          docstring: 'Get parameter names for the estimator',
          inputs: []
        },
        {
          name: '_preprocess_data',
          outputs: [],
          docstring:
            '\n    Centers data to have mean zero along axis 0. If fit_intercept=False or if\n    the X is a sparse matrix, no centering is done, but normalization can still\n    be applied. The function returns the statistics necessary to reconstruct\n    the input data, which are X_offset, y_offset, X_scale, such that the output\n\n        X = (X - X_offset) / X_scale\n\n    X_scale is the L2 norm of X - X_offset. If sample_weight is not None,\n    then the weighted mean of X and y is zero, and not the mean itself. If\n    return_mean=True, the mean, eventually weighted, is returned, independently\n    of whether X was centered (option used for optimization with sparse data in\n    coordinate_descend).\n\n    This is here because nearly all linear models will want their data to be\n    centered. This function also systematically makes y consistent with X.dtype\n    ',
          inputs: []
        },
        {
          name: '_set_intercept',
          outputs: [],
          docstring: 'Set the intercept_\n        ',
          inputs: []
        },
        {
          name: 'fit',
          outputs: [
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Fit Ridge regression model',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              docstring: 'Training data',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples] or [n_samples, n_targets]',
              docstring: 'Target values',
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array', 'float'],
              expected_shape: '[n_samples]',
              docstring: 'Individual weights for each sample',
              is_optional: false,
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
          ]
        },
        {
          name: 'predict',
          outputs: [
            {
              name: 'C',
              returned: true,
              param_type: ['array'],
              docstring: 'Returns predicted values.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring: 'Predict using the linear model',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Samples.',
              is_optional: false,
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
          ]
        },
        {
          name: 'score',
          outputs: [
            {
              name: 'score',
              returned: true,
              param_type: ['float'],
              docstring: 'R^2 of self.predict(X) wrt. y.'
            },
            {
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ],
          docstring:
            'Returns the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.',
          inputs: [
            {
              name: 'X',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples, n_features)',
              docstring: 'Test samples.',
              is_optional: false,
              options: null
            },
            {
              name: 'y',
              default_value: null,
              param_type: ['array'],
              expected_shape: '(n_samples) or (n_samples, n_outputs)',
              docstring: 'True values for X.',
              is_optional: false,
              options: null
            },
            {
              name: 'sample_weight',
              default_value: null,
              param_type: ['array'],
              expected_shape: '[n_samples], optional',
              docstring: 'Sample weights.',
              is_optional: true,
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
          ]
        }
      ],
      nodes: []
    }
  ],
  library: 'sklearn'
}
