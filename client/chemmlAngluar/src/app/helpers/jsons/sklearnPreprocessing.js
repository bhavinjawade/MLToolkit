export default {
  name: 'sklearn.preprocessing',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'add_dummy_feature',
      docstring:
        'Augment dataset with an additional dummy feature.\n\n    This is useful for fitting an intercept term with implementations which\n    cannot otherwise fit it directly.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        Data.\n\n    value : float\n        Value to use for the dummy feature.\n\n    Returns\n    -------\n\n    X : {array, sparse matrix}, shape [n_samples, n_features + 1]\n        Same data with dummy feature added as first column.\n\n    Examples\n    --------\n\n    >>> from sklearn.preprocessing import add_dummy_feature\n    >>> add_dummy_feature([[0, 1], [1, 0]])\n    array([[1., 0., 1.],\n           [1., 1., 0.]])\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'Data.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '[n_samples, n_features]',
          is_optional: false,
          default_value: null,
          options: [
            'array-like',
            'sparse matrix',
            'shape [n_samples',
            'n_features]'
          ]
        },
        {
          name: 'value',
          docstring: 'Value to use for the dummy feature.',
          param_type: ['float'],
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
          name: 'X',
          docstring: 'Same data with dummy feature added as first column.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
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
      name: 'binarize',
      docstring:
        'Boolean thresholding of array-like or scipy.sparse matrix\n\n    Read more in the :ref:`User Guide <preprocessing_binarization>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        The data to binarize, element by element.\n        scipy.sparse matrices should be in CSR or CSC format to avoid an\n        un-necessary copy.\n\n    threshold : float, optional (0.0 by default)\n        Feature values below or equal to this are replaced by 0, above it by 1.\n        Threshold may not be less than 0 for operations on sparse matrices.\n\n    copy : boolean, optional, default True\n        set to False to perform inplace binarization and avoid a copy\n        (if the input is already a numpy array or a scipy.sparse CSR / CSC\n        matrix and if axis is 1).\n\n    See also\n    --------\n    Binarizer: Performs binarization using the ``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n    ',
      inputs: [
        {
          name: 'X',
          docstring:
            'The data to binarize, element by element. scipy.sparse matrices should be in CSR or CSC format to avoid an un-necessary copy.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '[n_samples, n_features]',
          is_optional: false,
          default_value: null,
          options: [
            'array-like',
            'sparse matrix',
            'shape [n_samples',
            'n_features]'
          ]
        },
        {
          name: 'threshold',
          docstring:
            'Feature values below or equal to this are replaced by 0, above it by 1. Threshold may not be less than 0 for operations on sparse matrices.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace binarization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR / CSC matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
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
      name: 'label_binarize',
      docstring:
        "Binarize labels in a one-vs-all fashion\n\n    Several regression and binary classification algorithms are\n    available in scikit-learn. A simple way to extend these algorithms\n    to the multi-class classification case is to use the so-called\n    one-vs-all scheme.\n\n    This function makes it possible to compute this transformation for a\n    fixed set of class labels known ahead of time.\n\n    Parameters\n    ----------\n    y : array-like\n        Sequence of integer labels or multilabel data to encode.\n\n    classes : array-like of shape [n_classes]\n        Uniquely holds the label for each class.\n\n    neg_label : int (default: 0)\n        Value with which negative labels must be encoded.\n\n    pos_label : int (default: 1)\n        Value with which positive labels must be encoded.\n\n    sparse_output : boolean (default: False),\n        Set to true if output binary array is desired in CSR sparse format\n\n    Returns\n    -------\n    Y : numpy array or CSR matrix of shape [n_samples, n_classes]\n        Shape will be [n_samples, 1] for binary problems.\n\n    Examples\n    --------\n    >>> from sklearn.preprocessing import label_binarize\n    >>> label_binarize([1, 6], classes=[1, 2, 4, 6])\n    array([[1, 0, 0, 0],\n           [0, 0, 0, 1]])\n\n    The class ordering is preserved:\n\n    >>> label_binarize([1, 6], classes=[1, 6, 4, 2])\n    array([[1, 0, 0, 0],\n           [0, 1, 0, 0]])\n\n    Binary targets transform to a column vector\n\n    >>> label_binarize(['yes', 'no', 'no', 'yes'], classes=['no', 'yes'])\n    array([[1],\n           [0],\n           [0],\n           [1]])\n\n    See also\n    --------\n    LabelBinarizer : class used to wrap the functionality of label_binarize and\n        allow for fitting to classes independently of the transform operation\n    ",
      inputs: [
        {
          name: 'y',
          docstring: 'Sequence of integer labels or multilabel data to encode.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'classes',
          docstring: 'Uniquely holds the label for each class.',
          param_type: ['array'],
          expected_shape: '[n_classes]',
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'neg_label',
          docstring: 'Value with which negative labels must be encoded.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0',
          options: null
        },
        {
          name: 'pos_label',
          docstring: 'Value with which positive labels must be encoded.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1',
          options: null
        },
        {
          name: 'sparse_output',
          docstring:
            'Set to true if output binary array is desired in CSR sparse format',
          param_type: ['bool'],
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
          name: 'Y',
          docstring: 'Shape will be [n_samples, 1] for binary problems.',
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
      name: 'maxabs_scale',
      docstring:
        'Scale each feature to the [-1, 1] range without breaking the sparsity.\n\n    This estimator scales each feature individually such\n    that the maximal absolute value of each feature in the\n    training set will be 1.0.\n\n    This scaler can also be applied to sparse CSR or CSC matrices.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        The data.\n\n    axis : int (0 by default)\n        axis used to scale along. If 0, independently scale each feature,\n        otherwise (if 1) scale each sample.\n\n    copy : boolean, optional, default is True\n        Set to False to perform inplace scaling and avoid a copy (if the input\n        is already a numpy array).\n\n    See also\n    --------\n    MaxAbsScaler: Performs scaling to the [-1, 1] range using the``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded to compute the statistics,\n    and maintained during the data transformation.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to scale along. If 0, independently scale each feature, otherwise (if 1) scale each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace scaling and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
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
      name: 'minmax_scale',
      docstring:
        'Transforms features by scaling each feature to a given range.\n\n    This estimator scales and translates each feature individually such\n    that it is in the given range on the training set, i.e. between\n    zero and one.\n\n    The transformation is given by (when ``axis=0``)::\n\n        X_std = (X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0))\n        X_scaled = X_std * (max - min) + min\n\n    where min, max = feature_range.\n\n    The transformation is calculated as (when ``axis=0``)::\n\n       X_scaled = scale * X + min - X.min(axis=0) * scale\n       where scale = (max - min) / (X.max(axis=0) - X.min(axis=0))\n\n    This transformation is often used as an alternative to zero mean,\n    unit variance scaling.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    .. versionadded:: 0.17\n       *minmax_scale* function interface\n       to :class:`sklearn.preprocessing.MinMaxScaler`.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        The data.\n\n    feature_range : tuple (min, max), default=(0, 1)\n        Desired range of transformed data.\n\n    axis : int (0 by default)\n        axis used to scale along. If 0, independently scale each feature,\n        otherwise (if 1) scale each sample.\n\n    copy : boolean, optional, default is True\n        Set to False to perform inplace scaling and avoid a copy (if the input\n        is already a numpy array).\n\n    See also\n    --------\n    MinMaxScaler: Performs scaling to a given range using the``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    Notes\n    -----\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'feature_range',
          docstring: 'Desired range of transformed data.',
          param_type: ['tuple'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to scale along. If 0, independently scale each feature, otherwise (if 1) scale each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace scaling and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
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
      name: 'normalize',
      docstring:
        "Scale input vectors individually to unit norm (vector length).\n\n    Read more in the :ref:`User Guide <preprocessing_normalization>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        The data to normalize, element by element.\n        scipy.sparse matrices should be in CSR format to avoid an\n        un-necessary copy.\n\n    norm : 'l1', 'l2', or 'max', optional ('l2' by default)\n        The norm to use to normalize each non zero sample (or each non-zero\n        feature if axis is 0).\n\n    axis : 0 or 1, optional (1 by default)\n        axis used to normalize the data along. If 1, independently normalize\n        each sample, otherwise (if 0) normalize each feature.\n\n    copy : boolean, optional, default True\n        set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array or a scipy.sparse\n        CSR matrix and if axis is 1).\n\n    return_norm : boolean, default False\n        whether to return the computed norms\n\n    Returns\n    -------\n    X : {array-like, sparse matrix}, shape [n_samples, n_features]\n        Normalized input X.\n\n    norms : array, shape [n_samples] if axis=1 else [n_features]\n        An array of norms along given axis for X.\n        When X is sparse, a NotImplementedError will be raised\n        for norm 'l1' or 'l2'.\n\n    See also\n    --------\n    Normalizer: Performs normalization using the ``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    Notes\n    -----\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    ",
      inputs: [
        {
          name: 'X',
          docstring:
            'The data to normalize, element by element. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: '[n_samples, n_features]',
          is_optional: false,
          default_value: null,
          options: [
            'array-like',
            'sparse matrix',
            'shape [n_samples',
            'n_features]'
          ]
        },
        {
          name: 'norm',
          docstring:
            'The norm to use to normalize each non zero sample (or each non-zero feature if axis is 0).',
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to normalize the data along. If 1, independently normalize each sample, otherwise (if 0) normalize each feature.',
          param_type: [null],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'return_norm',
          docstring: 'whether to return the computed norms',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False',
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
          docstring: 'Normalized input X.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          returned: true
        },
        {
          name: 'norms',
          docstring:
            "An array of norms along given axis for X. When X is sparse, a NotImplementedError will be raised for norm 'l1' or 'l2'.",
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
      name: 'power_transform',
      docstring:
        "\n    Power transforms are a family of parametric, monotonic transformations\n    that are applied to make data more Gaussian-like. This is useful for\n    modeling issues related to heteroscedasticity (non-constant variance),\n    or other situations where normality is desired.\n\n    Currently, power_transform supports the Box-Cox transform and the\n    Yeo-Johnson transform. The optimal parameter for stabilizing variance and\n    minimizing skewness is estimated through maximum likelihood.\n\n    Box-Cox requires input data to be strictly positive, while Yeo-Johnson\n    supports both positive or negative data.\n\n    By default, zero-mean, unit-variance normalization is applied to the\n    transformed data.\n\n    Read more in the :ref:`User Guide <preprocessing_transformer>`.\n\n    Parameters\n    ----------\n    X : array-like, shape (n_samples, n_features)\n        The data to be transformed using a power transformation.\n\n    method : str\n        The power transform method. Available methods are:\n\n        - 'yeo-johnson' [1]_, works with positive and negative values\n        - 'box-cox' [2]_, only works with strictly positive values\n\n        The default method will be changed from 'box-cox' to 'yeo-johnson'\n        in version 0.23. To suppress the FutureWarning, explicitly set the\n        parameter.\n\n    standardize : boolean, default=True\n        Set to True to apply zero-mean, unit-variance normalization to the\n        transformed output.\n\n    copy : boolean, optional, default=True\n        Set to False to perform inplace computation during transformation.\n\n    Returns\n    -------\n    X_trans : array-like, shape (n_samples, n_features)\n        The transformed data.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.preprocessing import power_transform\n    >>> data = [[1, 2], [3, 2], [4, 5]]\n    >>> print(power_transform(data, method='box-cox'))  # doctest: +ELLIPSIS\n    [[-1.332... -0.707...]\n     [ 0.256... -0.707...]\n     [ 1.076...  1.414...]]\n\n    See also\n    --------\n    PowerTransformer : Equivalent transformation with the\n        ``Transformer`` API (e.g. as part of a preprocessing\n        :class:`sklearn.pipeline.Pipeline`).\n\n    quantile_transform : Maps data to a standard normal distribution with\n        the parameter `output_distribution='normal'`.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in ``fit``, and maintained\n    in ``transform``.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    References\n    ----------\n\n    .. [1] I.K. Yeo and R.A. Johnson, \"A new family of power transformations to\n           improve normality or symmetry.\" Biometrika, 87(4), pp.954-959,\n           (2000).\n\n    .. [2] G.E.P. Box and D.R. Cox, \"An Analysis of Transformations\", Journal\n           of the Royal Statistical Society B, 26, 211-252 (1964).\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'The data to be transformed using a power transformation.',
          param_type: ['array'],
          expected_shape: '(n_samples, n_features)',
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'method',
          docstring:
            "The power transform method. Available methods are:  - 'yeo-johnson' [1]_, works with positive and negative values - 'box-cox' [2]_, only works with strictly positive values  The default method will be changed from 'box-cox' to 'yeo-johnson' in version 0.23. To suppress the FutureWarning, explicitly set the parameter.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'standardize',
          docstring:
            'Set to True to apply zero-mean, unit-variance normalization to the transformed output.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace computation during transformation.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
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
          name: 'X_trans',
          docstring: 'The transformed data.',
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
      name: 'quantile_transform',
      docstring:
        "Transform features using quantiles information.\n\n    This method transforms the features to follow a uniform or a normal\n    distribution. Therefore, for a given feature, this transformation tends\n    to spread out the most frequent values. It also reduces the impact of\n    (marginal) outliers: this is therefore a robust preprocessing scheme.\n\n    The transformation is applied on each feature independently. First an\n    estimate of the cumulative distribution function of a feature is\n    used to map the original values to a uniform distribution. The obtained\n    values are then mapped to the desired output distribution using the\n    associated quantile function. Features values of new/unseen data that fall\n    below or above the fitted range will be mapped to the bounds of the output\n    distribution. Note that this transform is non-linear. It may distort linear\n    correlations between variables measured at the same scale but renders\n    variables measured at different scales more directly comparable.\n\n    Read more in the :ref:`User Guide <preprocessing_transformer>`.\n\n    Parameters\n    ----------\n    X : array-like, sparse matrix\n        The data to transform.\n\n    axis : int, (default=0)\n        Axis used to compute the means and standard deviations along. If 0,\n        transform each feature, otherwise (if 1) transform each sample.\n\n    n_quantiles : int, optional (default=1000 or n_samples)\n        Number of quantiles to be computed. It corresponds to the number\n        of landmarks used to discretize the cumulative distribution function.\n        If n_quantiles is larger than the number of samples, n_quantiles is set\n        to the number of samples as a larger number of quantiles does not give\n        a better approximation of the cumulative distribution function\n        estimator.\n\n    output_distribution : str, optional (default='uniform')\n        Marginal distribution for the transformed data. The choices are\n        'uniform' (default) or 'normal'.\n\n    ignore_implicit_zeros : bool, optional (default=False)\n        Only applies to sparse matrices. If True, the sparse entries of the\n        matrix are discarded to compute the quantile statistics. If False,\n        these entries are treated as zeros.\n\n    subsample : int, optional (default=1e5)\n        Maximum number of samples used to estimate the quantiles for\n        computational efficiency. Note that the subsampling procedure may\n        differ for value-identical sparse and dense matrices.\n\n    random_state : int, RandomState instance or None, optional (default=None)\n        If int, random_state is the seed used by the random number generator;\n        If RandomState instance, random_state is the random number generator;\n        If None, the random number generator is the RandomState instance used\n        by np.random. Note that this is used by subsampling and smoothing\n        noise.\n\n    copy : boolean, optional, (default=\"warn\")\n        Set to False to perform inplace transformation and avoid a copy (if the\n        input is already a numpy array). If True, a copy of `X` is transformed,\n        leaving the original `X` unchanged\n\n        .. deprecated:: 0.21\n            The default value of parameter `copy` will be changed from False\n            to True in 0.23. The current default of False is being changed to\n            make it more consistent with the default `copy` values of other\n            functions in :mod:`sklearn.preprocessing.data`. Furthermore, the\n            current default of False may have unexpected side effects by\n            modifying the value of `X` inplace\n\n    Returns\n    -------\n    Xt : ndarray or sparse matrix, shape (n_samples, n_features)\n        The transformed data.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.preprocessing import quantile_transform\n    >>> rng = np.random.RandomState(0)\n    >>> X = np.sort(rng.normal(loc=0.5, scale=0.25, size=(25, 1)), axis=0)\n    >>> quantile_transform(X, n_quantiles=10, random_state=0, copy=True)\n    ... # doctest: +ELLIPSIS\n    array([...])\n\n    See also\n    --------\n    QuantileTransformer : Performs quantile-based scaling using the\n        ``Transformer`` API (e.g. as part of a preprocessing\n        :class:`sklearn.pipeline.Pipeline`).\n    power_transform : Maps data to a normal distribution using a\n        power transformation.\n    scale : Performs standardization that is faster, but less robust\n        to outliers.\n    robust_scale : Performs robust standardization that removes the influence\n        of outliers but does not put outliers and inliers on the same scale.\n\n    Notes\n    -----\n    NaNs are treated as missing values: disregarded in fit, and maintained in\n    transform.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n    ",
      inputs: [
        {
          name: 'X',
          docstring: 'The data to transform.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'axis',
          docstring:
            'Axis used to compute the means and standard deviations along. If 0, transform each feature, otherwise (if 1) transform each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0',
          options: null
        },
        {
          name: 'n_quantiles',
          docstring:
            'Number of quantiles to be computed. It corresponds to the number of landmarks used to discretize the cumulative distribution function. If n_quantiles is larger than the number of samples, n_quantiles is set to the number of samples as a larger number of quantiles does not give a better approximation of the cumulative distribution function estimator.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1000 or n_samples',
          options: null
        },
        {
          name: 'output_distribution',
          docstring:
            "Marginal distribution for the transformed data. The choices are 'uniform' (default) or 'normal'.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'uniform',
          options: null
        },
        {
          name: 'ignore_implicit_zeros',
          docstring:
            'Only applies to sparse matrices. If True, the sparse entries of the matrix are discarded to compute the quantile statistics. If False, these entries are treated as zeros.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False',
          options: null
        },
        {
          name: 'subsample',
          docstring:
            'Maximum number of samples used to estimate the quantiles for computational efficiency. Note that the subsampling procedure may differ for value-identical sparse and dense matrices.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1e5',
          options: null
        },
        {
          name: 'random_state',
          docstring:
            'If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If None, the random number generator is the RandomState instance used by np.random. Note that this is used by subsampling and smoothing noise.',
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace transformation and avoid a copy (if the input is already a numpy array). If True, a copy of `X` is transformed, leaving the original `X` unchanged  .. deprecated:: 0.21     The default value of parameter `copy` will be changed from False     to True in 0.23. The current default of False is being changed to     make it more consistent with the default `copy` values of other     functions in :mod:`sklearn.preprocessing.data`. Furthermore, the     current default of False may have unexpected side effects by     modifying the value of `X` inplace',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '"warn"',
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
          name: 'Xt',
          docstring: 'The transformed data.',
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
      name: 'robust_scale',
      docstring:
        'Standardize a dataset along any axis\n\n    Center to the median and component wise scale\n    according to the interquartile range.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    Parameters\n    ----------\n    X : array-like\n        The data to center and scale.\n\n    axis : int (0 by default)\n        axis used to compute the medians and IQR along. If 0,\n        independently scale each feature, otherwise (if 1) scale\n        each sample.\n\n    with_centering : boolean, True by default\n        If True, center the data before scaling.\n\n    with_scaling : boolean, True by default\n        If True, scale the data to unit variance (or equivalently,\n        unit standard deviation).\n\n    quantile_range : tuple (q_min, q_max), 0.0 < q_min < q_max < 100.0\n        Default: (25.0, 75.0) = (1st quantile, 3rd quantile) = IQR\n        Quantile range used to calculate ``scale_``.\n\n        .. versionadded:: 0.18\n\n    copy : boolean, optional, default is True\n        set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array or a scipy.sparse\n        CSR matrix and if axis is 1).\n\n    Notes\n    -----\n    This implementation will refuse to center scipy.sparse matrices\n    since it would make them non-sparse and would potentially crash the\n    program with memory exhaustion problems.\n\n    Instead the caller is expected to either set explicitly\n    `with_centering=False` (in that case, only variance scaling will be\n    performed on the features of the CSR matrix) or to call `X.toarray()`\n    if he/she expects the materialized dense array to fit in memory.\n\n    To avoid memory copy the caller should pass a CSR matrix.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    See also\n    --------\n    RobustScaler: Performs centering and scaling using the ``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data to center and scale.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'axis',
          docstring:
            'axis used to compute the medians and IQR along. If 0, independently scale each feature, otherwise (if 1) scale each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'with_centering',
          docstring: 'If True, center the data before scaling.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'with_scaling',
          docstring:
            'If True, scale the data to unit variance (or equivalently, unit standard deviation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'quantile_range',
          docstring:
            'Default: (25.0, 75.0) = (1st quantile, 3rd quantile) = IQR Quantile range used to calculate ``scale_``.  .. versionadded:: 0.18',
          param_type: ['tuple'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
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
      name: 'scale',
      docstring:
        'Standardize a dataset along any axis\n\n    Center to the mean and component wise scale to unit variance.\n\n    Read more in the :ref:`User Guide <preprocessing_scaler>`.\n\n    Parameters\n    ----------\n    X : {array-like, sparse matrix}\n        The data to center and scale.\n\n    axis : int (0 by default)\n        axis used to compute the means and standard deviations along. If 0,\n        independently standardize each feature, otherwise (if 1) standardize\n        each sample.\n\n    with_mean : boolean, True by default\n        If True, center the data before scaling.\n\n    with_std : boolean, True by default\n        If True, scale the data to unit variance (or equivalently,\n        unit standard deviation).\n\n    copy : boolean, optional, default True\n        set to False to perform inplace row normalization and avoid a\n        copy (if the input is already a numpy array or a scipy.sparse\n        CSC matrix and if axis is 1).\n\n    Notes\n    -----\n    This implementation will refuse to center scipy.sparse matrices\n    since it would make them non-sparse and would potentially crash the\n    program with memory exhaustion problems.\n\n    Instead the caller is expected to either set explicitly\n    `with_mean=False` (in that case, only variance scaling will be\n    performed on the features of the CSC matrix) or to call `X.toarray()`\n    if he/she expects the materialized dense array to fit in memory.\n\n    To avoid memory copy the caller should pass a CSC matrix.\n\n    NaNs are treated as missing values: disregarded to compute the statistics,\n    and maintained during the data transformation.\n\n    We use a biased estimator for the standard deviation, equivalent to\n    `numpy.std(x, ddof=0)`. Note that the choice of `ddof` is unlikely to\n    affect model performance.\n\n    For a comparison of the different scalers, transformers, and normalizers,\n    see :ref:`examples/preprocessing/plot_all_scaling.py\n    <sphx_glr_auto_examples_preprocessing_plot_all_scaling.py>`.\n\n    See also\n    --------\n    StandardScaler: Performs scaling to unit variance using the``Transformer`` API\n        (e.g. as part of a preprocessing :class:`sklearn.pipeline.Pipeline`).\n\n    ',
      inputs: [
        {
          name: 'X',
          docstring: 'The data to center and scale.',
          param_type: ['LIST_VALID_OPTIONS', 'array'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: ['array-like', 'sparse matrix']
        },
        {
          name: 'axis',
          docstring:
            'axis used to compute the means and standard deviations along. If 0, independently standardize each feature, otherwise (if 1) standardize each sample.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'with_mean',
          docstring: 'If True, center the data before scaling.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'with_std',
          docstring:
            'If True, scale the data to unit variance (or equivalently, unit standard deviation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: '',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSC matrix and if axis is 1).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
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
    }
  ],
  nodes: [
    {
      name: 'MaxAbsScaler',
      docstring:
        'Scale each feature by its maximum absolute value.\n\n    This estimator scales and translates each feature individually such\n    that the maximal absolute value of each feature in the\n    training set will be 1.0. It does not shift/center the data, and\n    thus does not destroy any sparsity.',
      inputs: [
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace scaling and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        }
      ],
      outputs: [
        {
          name: 'scale_',
          docstring: 'Per feature relative scaling of the data.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'max_abs_',
          docstring: 'Per feature maximum absolute value.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_samples_seen_',
          docstring:
            'The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across ``partial_fit`` calls.',
          param_type: ['int'],
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_reset',
          docstring:
            'Reset internal data-dependent state of the scaler, if necessary.\n\n        __init__ parameters are not touched.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Compute the maximum absolute value to be used for later scaling.',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
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
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
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
              name: 'X_new',
              docstring: 'Transformed array.',
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
          name: 'inverse_transform',
          docstring: 'Scale back the data to the original representation',
          inputs: [
            {
              name: 'X',
              docstring: 'The data that should be transformed back.',
              param_type: ['array'],
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
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ]
        },
        {
          name: 'partial_fit',
          docstring:
            'Online computation of max absolute value of X for later scaling.\n        All of X is processed as a single batch. This is intended for cases\n        when `fit` is not feasible due to very large number of `n_samples`\n        or because X is read from a continuous stream.',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
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
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring: 'Scale the data',
          inputs: [
            {
              name: 'X',
              docstring: 'The data that should be scaled.',
              param_type: ['array'],
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
      name: 'MinMaxScaler',
      docstring:
        'Transforms features by scaling each feature to a given range.\n\n    This estimator scales and translates each feature individually such\n    that it is in the given range on the training set, e.g. between\n    zero and one.\n\n    The transformation is given by::\n\n        X_std = (X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0))\n        X_scaled = X_std * (max - min) + min\n\n    where min, max = feature_range.\n\n    The transformation is calculated as::\n\n        X_scaled = scale * X + min - X.min(axis=0) * scale\n        where scale = (max - min) / (X.max(axis=0) - X.min(axis=0))\n\n    This transformation is often used as an alternative to zero mean,\n    unit variance scaling.',
      inputs: [
        {
          name: 'feature_range',
          docstring: 'Desired range of transformed data.',
          param_type: ['tuple'],
          expected_shape: null,
          is_optional: true,
          default_value: '(0, 1)',
          options: null
        },
        {
          name: 'copy',
          docstring:
            'Set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        }
      ],
      outputs: [
        {
          name: 'min_',
          docstring:
            'Per feature adjustment for minimum. Equivalent to ``min - X.min(axis=0) * self.scale_``',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'scale_',
          docstring:
            'Per feature relative scaling of the data. Equivalent to ``(max - min) / (X.max(axis=0) - X.min(axis=0))``',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'data_min_',
          docstring: 'Per feature minimum seen in the data',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'data_max_',
          docstring: 'Per feature maximum seen in the data',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'data_range_',
          docstring:
            'Per feature range ``(data_max_ - data_min_)`` seen in the data',
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_reset',
          docstring:
            'Reset internal data-dependent state of the scaler, if necessary.\n\n        __init__ parameters are not touched.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Compute the minimum and maximum to be used for later scaling.',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
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
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
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
              name: 'X_new',
              docstring: 'Transformed array.',
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
          name: 'inverse_transform',
          docstring: 'Undo the scaling of X according to feature_range.',
          inputs: [
            {
              name: 'X',
              docstring:
                'Input data that will be transformed. It cannot be sparse.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
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
          name: 'partial_fit',
          docstring:
            'Online computation of min and max on X for later scaling.\n        All of X is processed as a single batch. This is intended for cases\n        when `fit` is not feasible due to very large number of `n_samples`\n        or because X is read from a continuous stream.',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
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
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring: 'Scaling features of X according to feature_range.',
          inputs: [
            {
              name: 'X',
              docstring: 'Input data that will be transformed.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
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
        }
      ],
      nodes: []
    },
    {
      name: 'Normalizer',
      docstring:
        'Normalize samples individually to unit norm.\n\n    Each sample (i.e. each row of the data matrix) with at least one\n    non zero component is rescaled independently of other samples so\n    that its norm (l1 or l2) equals one.\n\n    This transformer is able to work both with dense numpy arrays and\n    scipy.sparse matrix (use CSR format if you want to avoid the burden of\n    a copy / conversion).\n\n    Scaling inputs to unit norms is a common operation for text\n    classification or clustering for instance. For instance the dot\n    product of two l2-normalized TF-IDF vectors is the cosine similarity\n    of the vectors and is the base similarity metric for the Vector\n    Space Model commonly used by the Information Retrieval community.',
      inputs: [
        {
          name: 'norm',
          docstring: 'The norm to use to normalize each non zero sample.',
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: 'l2',
          options: ['l1', 'l2', 'max']
        },
        {
          name: 'copy',
          docstring:
            'set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring:
            'Do nothing and return the estimator unchanged\n\n        This method is just there to implement the usual API and hence\n        work in pipelines.',
          inputs: [
            {
              name: 'X',
              docstring: 'Data',
              param_type: ['array'],
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
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ]
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
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
              name: 'X_new',
              docstring: 'Transformed array.',
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
          name: 'transform',
          docstring: 'Scale each non zero row of X to unit norm',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to normalize, row by row. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'copy',
              docstring: 'Copy the input X or not.',
              param_type: ['bool', null],
              expected_shape: null,
              is_optional: true,
              default_value: 'None',
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
        }
      ],
      nodes: []
    },
    {
      name: 'OneHotEncoder',
      docstring:
        "Encode categorical integer features as a one-hot numeric array.\n\n    The input to this transformer should be an array-like of integers or\n    strings, denoting the values taken on by categorical (discrete) features.\n    The features are encoded using a one-hot (aka 'one-of-K' or 'dummy')\n    encoding scheme. This creates a binary column for each category and\n    returns a sparse matrix or dense array.\n\n    By default, the encoder derives the categories based on the unique values\n    in each feature. Alternatively, you can also specify the `categories`\n    manually.\n    The OneHotEncoder previously assumed that the input features take on\n    values in the range [0, max(values)). This behaviour is deprecated.\n\n    This encoding is needed for feeding categorical data to many scikit-learn\n    estimators, notably linear models and SVMs with the standard kernels.\n\n    Note: a one-hot encoding of y labels should use a LabelBinarizer\n    instead.",
      inputs: [
        {
          name: 'categories',
          docstring:
            "Categories (unique values) per feature:  - 'auto' : Determine categories automatically from the training data. - list : ``categories[i]`` holds the categories expected in the ith   column. The passed categories should not mix strings and numeric   values within a single feature, and should be sorted in case of   numeric values.  The used categories can be found in the ``categories_`` attribute.",
          param_type: ['str', 'array', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: 'auto.',
          options: null
        },
        {
          name: 'drop',
          docstring:
            "Specifies a methodology to use to drop one of the categories per feature. This is useful in situations where perfectly collinear features cause problems, such as when feeding the resulting data into a neural network or an unregularized regression.  - None : retain all features (the default). - 'first' : drop the first category in each feature. If only one   category is present, the feature will be dropped entirely. - array : ``drop[i]`` is the category in feature ``X[:, i]`` that   should be dropped.",
          param_type: ['array', 'list', 'str'],
          expected_shape: '(n_features,)',
          is_optional: true,
          default_value: 'None',
          options: null
        },
        {
          name: 'sparse',
          docstring:
            'Will return sparse matrix if set True else will return an array.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'dtype',
          docstring: 'Desired dtype of output.',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: 'np.float',
          options: null
        },
        {
          name: 'handle_unknown',
          docstring:
            "Whether to raise an error or ignore if an unknown categorical feature is present during transform (default is to raise). When this parameter is set to 'ignore' and an unknown category is encountered during transform, the resulting one-hot encoded columns for this feature will be all zeros. In the inverse transform, an unknown category will be denoted as None.",
          param_type: ['LIST_VALID_OPTIONS'],
          expected_shape: null,
          is_optional: true,
          default_value: 'error',
          options: ['error', 'ignore']
        },
        {
          name: 'n_values',
          docstring:
            "Number of values per feature.  - 'auto' : determine value range from training data. - int : number of categorical values per feature.         Each feature value should be in ``range(n_values)`` - array : ``n_values[i]`` is the number of categorical values in           ``X[:, i]``. Each feature value should be           in ``range(n_values[i])``",
          param_type: ['array', 'int', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'auto',
          options: null
        },
        {
          name: 'categorical_features',
          docstring:
            "Specify what features are treated as categorical.  - 'all': All features are treated as categorical. - array of indices: Array of categorical feature indices. - mask: Array of length n_features and with dtype=bool.  Non-categorical features are always stacked to the right of the matrix.",
          param_type: ['array', 'str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'all',
          options: null
        }
      ],
      outputs: [
        {
          name: 'categories_',
          docstring:
            'The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of ``transform``). This includes the category specified in ``drop`` (if any).',
          param_type: ['array', 'list'],
          returned: false
        },
        {
          name: 'drop_idx_',
          docstring:
            '``drop_idx_[i]`` is\u00a0the index in ``categories_[i]`` of the category to be dropped for each feature. None if all the transformed features will be retained.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'active_features_',
          docstring:
            "Indices for active features, meaning values that actually occur in the training set. Only available when n_values is ``'auto'``.  .. deprecated:: 0.20     The ``active_features_`` attribute was deprecated in version     0.20 and will be removed in 0.22.",
          param_type: ['array'],
          returned: false
        },
        {
          name: 'feature_indices_',
          docstring:
            'Indices to feature ranges. Feature ``i`` in the original data is mapped to features from ``feature_indices_[i]`` to ``feature_indices_[i+1]`` (and then potentially masked by ``active_features_`` afterwards)  .. deprecated:: 0.20     The ``feature_indices_`` attribute was deprecated in version     0.20 and will be removed in 0.22.',
          param_type: ['array'],
          returned: false
        },
        {
          name: 'n_values_',
          docstring:
            'Maximum number of values per feature.  .. deprecated:: 0.20     The ``n_values_`` attribute was deprecated in version     0.20 and will be removed in 0.22.',
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
          name: '_check_X',
          docstring:
            '\n        Perform custom check_array:\n        - convert list of strings to object dtype\n        - check for missing values for object dtype data (check_array does\n          not do that)\n        - return list of features (arrays): this list of features is\n          constructed feature by feature to preserve the data types\n          of pandas DataFrame columns, as otherwise information is lost\n          and cannot be used, eg for the `categories_` attribute.\n\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: '_compute_drop_idx',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_fit',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_get_feature',
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
          name: '_handle_deprecations',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_legacy_fit_transform',
          docstring: 'Assumes X contains only categorical features.',
          inputs: [],
          outputs: []
        },
        {
          name: '_legacy_transform',
          docstring: 'Assumes X contains only categorical features.',
          inputs: [],
          outputs: []
        },
        {
          name: '_transform',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_transform_new',
          docstring: 'New implementation assuming categorical input',
          inputs: [],
          outputs: []
        },
        {
          name: '_validate_keywords',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring: 'Fit OneHotEncoder to X.',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data to determine the categories of each feature.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
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
              name: '',
              docstring: '',
              param_type: [null],
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
          name: 'fit_transform',
          docstring:
            'Fit OneHotEncoder to X, then transform X.\n\n        Equivalent to fit(X).transform(X) but more convenient.',
          inputs: [
            {
              name: 'X',
              docstring: 'The data to encode.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
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
              name: 'X_out',
              docstring: 'Transformed input.',
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
          name: 'get_feature_names',
          docstring: 'Return feature names for output features.',
          inputs: [
            {
              name: 'input_features',
              docstring:
                'String names for input features if available. By default, "x0", "x1", ... "xn_features" is used.',
              param_type: ['list'],
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
              name: 'output_feature_names',
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
          name: 'inverse_transform',
          docstring:
            'Convert the back data to the original representation.\n\n        In case unknown categories are encountered (all zeros in the\n        one-hot encoding), ``None`` is used to represent this category.',
          inputs: [
            {
              name: 'X',
              docstring: 'The transformed data.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_encoded_features]',
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
              name: 'X_tr',
              docstring: 'Inverse transformed array.',
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
          name: 'transform',
          docstring: 'Transform X using one-hot encoding.',
          inputs: [
            {
              name: 'X',
              docstring: 'The data to encode.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
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
              name: 'X_out',
              docstring: 'Transformed input.',
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
      name: 'StandardScaler',
      docstring:
        'Standardize features by removing the mean and scaling to unit variance\n\n    The standard score of a sample `x` is calculated as:\n\n        z = (x - u) / s\n\n    where `u` is the mean of the training samples or zero if `with_mean=False`,\n    and `s` is the standard deviation of the training samples or one if\n    `with_std=False`.\n\n    Centering and scaling happen independently on each feature by computing\n    the relevant statistics on the samples in the training set. Mean and\n    standard deviation are then stored to be used on later data using the\n    `transform` method.\n\n    Standardization of a dataset is a common requirement for many\n    machine learning estimators: they might behave badly if the\n    individual features do not more or less look like standard normally\n    distributed data (e.g. Gaussian with 0 mean and unit variance).\n\n    For instance many elements used in the objective function of\n    a learning algorithm (such as the RBF kernel of Support Vector\n    Machines or the L1 and L2 regularizers of linear models) assume that\n    all features are centered around 0 and have variance in the same\n    order. If a feature has a variance that is orders of magnitude larger\n    that others, it might dominate the objective function and make the\n    estimator unable to learn from other features correctly as expected.\n\n    This scaler can also be applied to sparse CSR or CSC matrices by passing\n    `with_mean=False` to avoid breaking the sparsity structure of the data.',
      inputs: [
        {
          name: 'copy',
          docstring:
            'If False, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'with_mean',
          docstring:
            'If True, center the data before scaling. This does not work (and will raise an exception) when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'with_std',
          docstring:
            'If True, scale the data to unit variance (or equivalently, unit standard deviation).',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        }
      ],
      outputs: [
        {
          name: 'scale_',
          docstring:
            'Per feature relative scaling of the data. This is calculated using `np.sqrt(var_)`. Equal to ``None`` when ``with_std=False``.  .. versionadded:: 0.17    *scale_*',
          param_type: ['array', null],
          returned: false
        },
        {
          name: 'mean_',
          docstring:
            'The mean value for each feature in the training set. Equal to ``None`` when ``with_mean=False``.',
          param_type: ['array', null],
          returned: false
        },
        {
          name: 'var_',
          docstring:
            'The variance for each feature in the training set. Used to compute `scale_`. Equal to ``None`` when ``with_std=False``.',
          param_type: ['array', null],
          returned: false
        },
        {
          name: 'n_samples_seen_',
          docstring:
            'The number of samples processed by the estimator for each feature. If there are not missing samples, the ``n_samples_seen`` will be an integer, otherwise it will be an array. Will be reset on new calls to fit, but increments across ``partial_fit`` calls.',
          param_type: ['array', 'int'],
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
          name: '_more_tags',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_reset',
          docstring:
            'Reset internal data-dependent state of the scaler, if necessary.\n\n        __init__ parameters are not touched.\n        ',
          inputs: [],
          outputs: []
        },
        {
          name: 'fit',
          docstring: 'Compute the mean and std to be used for later scaling.',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
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
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ]
        },
        {
          name: 'fit_transform',
          docstring:
            'Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.',
          inputs: [
            {
              name: 'X',
              docstring: 'Training set.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Target values.',
              param_type: ['array'],
              expected_shape: '[n_samples]',
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
              name: 'X_new',
              docstring: 'Transformed array.',
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
          name: 'inverse_transform',
          docstring: 'Scale back the data to the original representation',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'copy',
              docstring: 'Copy the input X or not.',
              param_type: ['bool', null],
              expected_shape: null,
              is_optional: true,
              default_value: 'None',
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
              name: 'X_tr',
              docstring: 'Transformed array.',
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
          name: 'partial_fit',
          docstring:
            'Online computation of mean and std on X for later scaling.\n        All of X is processed as a single batch. This is intended for cases\n        when `fit` is not feasible due to very large number of `n_samples`\n        or because X is read from a continuous stream.',
          inputs: [
            {
              name: 'X',
              docstring:
                'The data used to compute the mean and standard deviation used for later scaling along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'y',
              docstring: 'Ignored',
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
              name: 'obj',
              docstring:
                'True/False flag to indicate reusing the same instance instead of creating a new one',
              param_type: ['bool'],
              returned: true
            }
          ]
        },
        {
          name: 'transform',
          docstring: 'Perform standardization by centering and scaling',
          inputs: [
            {
              name: 'X',
              docstring: 'The data used to scale along the features axis.',
              param_type: ['array'],
              expected_shape: '[n_samples, n_features]',
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'copy',
              docstring: 'Copy the input X or not.',
              param_type: ['bool', null],
              expected_shape: null,
              is_optional: true,
              default_value: 'None',
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
        }
      ],
      nodes: []
    }
  ],
  library: 'sklearn',
  module: 'preprocessing'
}
